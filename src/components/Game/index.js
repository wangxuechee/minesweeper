import React, { createContext } from "react";
import { useParams } from "react-router-dom";
import Board from "../Board";
import "./style.css";

// 创建 GameContext
export const GameContext = createContext();

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.boardElement = React.createRef();

    const settings = this.getSettingsByDifficulty(props.difficulty);
    this.state = {
      height: settings.height,
      width: settings.width,
      mines: settings.mines,
      gameStatusMessage: "", // 用于显示游戏结束提示
    };
  }

  handleGameEnd = (message) => {
    this.setState({ gameStatusMessage: message });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.difficulty !== this.props.difficulty) {
      const settings = this.getSettingsByDifficulty(this.props.difficulty);
      this.setState({
        height: settings.height,
        width: settings.width,
        mines: settings.mines,
        gameStatusMessage: "",
      }, () => {
        this.restartGame();
      });
    }
  }

  getSettingsByDifficulty(difficulty) {
    switch (difficulty) {
      case "easy":
        return { height: 8, width: 8, mines: 10 };
      case "medium":
        return { height: 16, width: 16, mines: 40 };
      case "hard":
        return { height: 16, width: 30, mines: 99 };
      default:
        return { height: 8, width: 8, mines: 10 };
    }
  }

  restartGame = () => {
    this.boardElement.current.restartBoard(); // 重新生成地雷布局
    this.setState({ gameStatusMessage: "" }); // 清空游戏状态提示
  };

  render() {
    const { height, width, mines, gameStatusMessage } = this.state;

    return (
      <GameContext.Provider
        value={{
          gameStatusMessage,
          height,
          width,
          mines,
          restartGame: this.restartGame,
          setGameStatus: this.handleGameEnd,
        }}
      >
        <div className="game">
          {/* 游戏顶部的状态和重置按钮 */}
          <header className="game-header">
            <button onClick={this.restartGame}>Restart</button>
            {gameStatusMessage && (
              <div className="game-status">
                <h2>{gameStatusMessage}</h2>
              </div>
            )}
          </header>

          {/* 游戏板 */}
          <Board ref={this.boardElement} />
        </div>
      </GameContext.Provider>
    );
  }
}

export default function GameWithParams() {
  const { difficulty } = useParams();
  return <Game difficulty={difficulty} />;
}
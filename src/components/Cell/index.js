import React, { useContext } from "react";
import PropTypes from "prop-types";
import { GameContext } from "../Game"; // 引入 GameContext

import "./style.css";

const Cell = ({ value, onClick, cMenu }) => {
  const { gameStatusMessage } = useContext(GameContext); // 获取游戏状态信息

  const getValue = () => {
    if (!value.isRevealed) {
      return value.isFlagged ? "🚩" : null;
    } else if (value.isMine) {
      return "💣";
    } else if (value.isEmpty) {
      return "";
    }
    return value.n;
  };

  const className =
    "cell" +
    (value.isRevealed ? "" : " hidden") +
    (value.isMine ? " is-mine" : "") +
    (value.isClicked ? " is-clicked" : "") +
    (value.isEmpty ? " is-empty" : "") +
    (value.isUnknown ? " is-unknown" : "") +
    (value.isFlagged ? " is-flag" : "");

  return (
    <div
      className={className}
      onClick={() => gameStatusMessage === "" && onClick()} // 如果游戏未结束则可以点击
      onContextMenu={(e) => gameStatusMessage === "" && cMenu(e)} // 游戏未结束时才响应右键
    >
      {getValue()}
    </div>
  );
};

// Type checking With PropTypes
const cellItemShape = {
  x: PropTypes.number,
  y: PropTypes.number,
  n: PropTypes.number,
  isRevealed: PropTypes.bool,
  isMine: PropTypes.bool,
  isFlagged: PropTypes.bool
};

Cell.propTypes = {
  value: PropTypes.shape(cellItemShape).isRequired,
  onClick: PropTypes.func.isRequired,
  cMenu: PropTypes.func.isRequired
};

export default Cell;
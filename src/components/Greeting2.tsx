import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  age: number;
  isAdult: boolean;
  message?: string; // OptionalなProps
  status: "loading" | "success" | "error"; // Union Types
}

const Greeting2: React.FC<Props> = ({ name, age, isAdult, message, status }) => {
  let statusMessage: string;

  interface StyledGreetingProps {
    isAdult: boolean;
  }

  const StyledGreeting = styled.div<StyledGreetingProps>`
    background-color: ${props => (props.isAdult ? '#ffcc80' : '#f0f0f0')};
    padding: 16px;
    border-radius: 8px;

    p {
      font-size: 14px;
      color: #333;
    }
  `;

  switch (status) {
    case "loading":
      statusMessage = "ロード中...";
      break;
    case "success":
      statusMessage = "成功！";
      break;
    case "error":
      statusMessage = "エラーが発生しました！";
      break;
    default:
      statusMessage = "不明な状態";
  }

  return (
    <StyledGreeting isAdult={isAdult}>
      <p>こんにちは、{name}さん！</p>
      {isAdult ? <p>あなたは大人です。</p> : <p>あなたはまだ子供です。</p>}
      <p>年齢: {age}歳</p>
      {message && <p>メッセージ: {message}</p>}
      <p>状態: {statusMessage}</p>
    </StyledGreeting>
  );
};

export default Greeting2;

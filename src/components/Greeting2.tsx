import React from "react";

interface Props {
  name: string;
  age: number;
  isAdult: boolean;
  message?: string; // OptionalなProps
  status: 'loading' | 'success' | 'error'; // Union Types
}

const Greeting2: React.FC<Props> = ({ name, age, isAdult, message, status }) => {
  let statusMessage: string;

  switch (status) {
    case 'loading':
      statusMessage = 'ロード中...';
      break;
    case 'success':
      statusMessage = '成功！';
      break;
    case 'error':
      statusMessage = 'エラーが発生しました！';
      break;
    default:
      statusMessage = '不明な状態';
  }

  return (
    <div>
      こんにちは、{name}さん！
      {isAdult ? (
        <p>あなたは大人です。</p>
      ) : (
        <p>あなたはまだ子供です。</p>
      )}
      <p>年齢: {age}歳</p>
      {message && <p>メッセージ: {message}</p>}
      <p>状態: {statusMessage}</p>
    </div>
  );
}

export default Greeting2;

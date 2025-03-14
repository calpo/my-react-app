// src/UserList.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';
import 'cross-fetch/polyfill';

// モックのfetch関数を定義
const mockFetch = (data: unknown) => {
  jest.spyOn(global, 'fetch').mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(data),
    } as Response);
  });
};

describe('UserList Component', () => {
  afterEach(() => {
    jest.restoreAllMocks(); // 各テスト後にモックをリセット
  });

  test('fetches and displays users', async () => {
    const mockUsers = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    ];
    mockFetch(mockUsers);

    render(<UserList />);

    // ローディングメッセージが表示されることを確認
    expect(screen.getByText('Loading users...')).toBeInTheDocument();

    // ユーザーリストが非同期で表示されるのを待つ
    await waitFor(() => {
      expect(screen.getByText('John Doe (john.doe@example.com)')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith (jane.smith@example.com)')).toBeInTheDocument();
    });
  });

  test('displays error message when fetch fails', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.reject(new Error('Failed to fetch users'))
    );

    render(<UserList />);

    // エラーメッセージが非同期で表示されるのを待つ
    await waitFor(() => {
      expect(screen.getByText('Error: Failed to fetch users')).toBeInTheDocument();
    });
  });
});

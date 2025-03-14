import { render, screen, fireEvent } from '@testing-library/react';
import SimpleForm from './SimpleForm';

describe('SimpleForm Component', () => {
  test('テキストボックスとサブミットボタンを表示する', () => {
    render(<SimpleForm />);

    const nameInput = screen.getByLabelText('Name:');
    const submitButton = screen.getByText('Submit');

    expect(nameInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('入力値が変わるとnameが変化する', () => {
    render(<SimpleForm />);

    const nameInput = screen.getByLabelText('Name:') as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: 'test name' } });

    expect(nameInput).toHaveValue('test name');
  });

  test('サブミットするとアラートされる', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    render(<SimpleForm />);

    const nameInput = screen.getByLabelText('Name:');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(nameInput, { target: {value: 'Jhon'}});
    fireEvent.click(submitButton);

    expect(alertMock).toHaveBeenCalledTimes(1);
    expect(alertMock).toHaveBeenCalledWith('入力された名前: Jhon');
  });
});
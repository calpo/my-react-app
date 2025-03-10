import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick handler when the button is clicked', () => {
    const onClickMock = jest.fn();
    render(<Button label="Click me" onClick={onClickMock} />);
    const buttonElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('指定したラベルを持つ', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  test('クリック時に指定した関数を呼び出す', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);

    const buttonElement = screen.getByText('Click me');

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('無効なボタンはクリックできない', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} disabled />);

    const buttonElement = screen.getByText('Click me');

    expect(buttonElement).toBeDisabled();

    fireEvent.click(buttonElement);

    expect(handleClick).not.toHaveBeenCalled();  
  });
});

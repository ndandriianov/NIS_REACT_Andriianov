import styled from 'styled-components';

export const ActionButton = styled.button<{ mood?: number }>`
  padding: 6px 12px;
  margin: 4px;
  border-radius: 8px;
  border: none;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  background-color: ${({ mood }) =>
  mood === 2 ? '#4caf50' : mood === 1 ? '#ff9800' : '#f44336'};

  &:hover {
    transform: translateY(-2px);
    background-color: ${({ mood }) =>
  mood === 2 ? '#43a047' : mood === 1 ? '#fb8c00' : '#e53935'};
  }

  &:active {
    transform: translateY(0);
  }
`;
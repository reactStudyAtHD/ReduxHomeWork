//https://velog.io/@nibble/React-Redux%EB%A1%9C-Counter-%EB%A7%8C%EB%93%A4%EA%B8%B0-1

// 액션 타입 정의
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// 액션 생성 함수 정의
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// 초기 상태 정의
const initialState = {
  number: 0
};

// 리듀서 작성
export default function Counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    default:
      return state;
  }
}

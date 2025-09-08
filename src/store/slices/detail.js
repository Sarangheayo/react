import { createSlice } from "@reduxjs/toolkit";


// //  `list` 상태관리 slice  생성 및 설정
// const detail = createSlice({
//     name: 'detail', // slice 명
//     initialState: { // 상태 관리할 state를 정의하는 영역
//        knt: 0,
//     },
//     reducers: { // state의 상태를 변화시키는 actions를 정의하는 영역
//         input(state) {
//           state.knt = 0;
        
//             },
//         changeKnt(state, action) {
//           // state : 'initialState'의 정보를 담고 있는 파라미터
//           // action : 외부에서 전달 된 값을 담는 파라미터
//           //       > action.payload : 전달된 값에 접근할 수 있는 프로퍼티
//           state.knt = action.payload;
//         },
//         resetKnt(state) {
//           state.knt = "";     // input 값 초기화 하는법
//          },
//         },
//     });

// // 정의한 Actions 내보내기
// export const {input, changeKnt, resetKnt} = detail.actions; 

// // Reducer 내보내기
// export default detail.reducer;

  const detail = createSlice({
    name: 'detail',
    initialState: { 
      cnt: 0
      
    },
      reducers: {
        addCnt(state) {
          state.cnt += 1;
        },
        minusCnt(state) {
          state.cnt -= 1;
        },
        changeCnt(state, action) {
           const regex = /^[0-9]+$/;
            if(regex.test(action.payload)) {
              state.cnt = parseInt(action.payload);
            } else {
               console.log('not number', action.payload); 
            }
           },
          }
        });

    export const {
      addCnt,
      changeCnt,
      minusCnt, 
    } = detail.actions;

    export default detail.reducer;
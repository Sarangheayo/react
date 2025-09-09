# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



<!---Redux--->
<!--  상태 관리 라이브러리, 중앙 집중식 상태관리 패턴 구현 -->
1. Redux 설치
npm install @reduxjs/toolkit react-redux


2. Redux Store 생성 
경로 예시: src/store/store,js

3. Slices 생성
경로 예시: src/store/slices/**

4. 생성한 Slices를 Store에 추가

5. main.jsx에 React Redux <Provider> (추가 StrictMode를 제외한 최상위 컴포넌트에 추가 할 것)

6. 사용


<!---Redux Thunk -->

1. Redux Thunk 설치
npm install redux-thunk

2. Redux Thunk file 생성
src/store/thunks/**

3. 해당 Slice에 'extraReducers' 추가
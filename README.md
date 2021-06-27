# 구현 내용

- 요구사항 1 **[구현 완료]**

  - 맨 위 파란색 영역은 제외 하였습니다.

- 요구사항 2 **[구현 완료]**

  - 4번 영역 페이지는 네트워크 통신을 이용하여 획득한 데이터를 출력하도록 하였습니다.
  - mock API로 [JSON Placeholder](https://jsonplaceholder.typicode.com/) 를 사용하였습니다.

- 요구사항 3 **[구현 완료]**

  - 1,2,3 영역은 각 화면에서 재사용될 수 있도록 구현하였습니다.
  - 선택된 메뉴에 따라 보여지는 내용이 달라질 수 있도록 컴포넌트 형태로 구현하였습니다.

- 요구사항 4 **[구현 완료]**

  - 브라우저 넓이가 768px 이하로 축소된 순간 부터는 좌측 메뉴가 사라지도록 구현하였습니다.

- 요구사항 5 **[구현 완료]**
  - 재사용되는 컴포넌트와 각 페이지를 구분할 수 있도록 프로젝트의 디렉토리 구조를 정리하였습니다.

# 사용 기술

- React : 17.0.2
- axios : 0.21.1
- react-router-dom : 5.2.0
- recoil : 0.3.1
- eslint
- prettier

# 프로젝트 디렉토리 구조

```bash
google-cloud-console-layout/
    └─ node_modules/
    └─ public/
    └─ src/
        └─ components/ # 재사용 되는 컴포넌트 입니다.
            └─ common/ # 공통으로 사용되는 컴포넌트 입니다.
                └─ Header.js # 상단 헤더 영역 입니다. [2번 영역]
                └─ Contents/ # 컨텐츠가 표시되는 화면에 사용되는 컴포넌트 입니다.
                    └─ ListView.js
                └─ NavView/ # 좌측 메뉴에 사용되는 컴포넌트 입니다.
                    └─ index.js
                    └─ DrawerView/
                        └─ index.js
                        └─ Menu.js # [3번 영역]
                        └─ Title.js # [1번 영역]
        └─ hooks/
            └─ UseRequest.js # API 요청 시 사용되는 Custom hook 입니다.
        └─ recoil/
            └─ atom/ # 상태를 관리합니다.
                └─ drawer/ # 좌측 메뉴에 관련된 상태입니다.
                    └─ drawerOpen.js
                    └─ selectedItem.js
        └─ routes/ # 라우팅 되는 페이지 폴더 입니다. [4번 영역]
                └─ kubernetes/
                    └─ applications.js
                    └─ configuration.js
                    └─ object_browser.js
                    └─ storage.js
                    └─ migrate_to_containers.js
                    └─ services_n_ingress.js
                    └─ workloads.js
        └─ index.js
        └─ App.js
    └─ .eslintrc.json # lint 설정 파일 입니다.
    └─ prettier.json # prettier 설정 파일 입니다.
    └─ package.json
    └─ README.md
```

# 프로젝트 실행 방법

```bash
$ npm install
$ npm start
```

http://localhost:3000 으로 접속합니다.

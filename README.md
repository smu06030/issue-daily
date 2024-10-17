# 📰 Issue Daily
### 💫 최신 이슈들을 한눈에 확인하고 싶다면? Issue Daily를 방문해 주세요 !! 💫<br/>
<div> ➡️ Open News API를 이용하여 최근 뉴스들을 카테고리별로 확인할 수 있는 사이트 입니다.</div> <br/>

#### 🕓 작업 기간 : 24.10.10 ~ 24.10.16
#### 📆 팀 노션 : [팀 노션 바로가기](https://teamsparta.notion.site/12-12-caa0480ff85c4bf189770cfc7fe3b04d)
#### 🔗 배포 링크 : [Issue Daily 바로가기](https://issue-daily.vercel.app/)

<br/>

## 🫂 팀 소개

| | 유인철 | 신희범 | 선채훈 | 이지영 |
| :-------------: | :-------------: | :-------------: | :-------------: | :-------------: |
| 역할 | 팀장 | 팀원 | 팀원 | 팀원 |
| Github | <a href=https://github.com/smu06030> @smu06030 </a> | <a href=https://github.com/HBeom00> @Hbeom00 </a> | <a href=https://github.com/slppills> @slppills </a> | <a href=https://github.com/wldud7788> @wldud7788 </a> |
| Blog | <a href=https://mingos-habitat.tistory.com/> <img src="https://img.shields.io/badge/Tistory-000000?style=for-the-badge&logo=Tistory&logoColor=white&link=https://mingos-habitat.tistory.com/"> </a> | <a href=https://velog.io/@hbeom00> <img src="https://img.shields.io/badge/Velog-20C997?style=for-the-badge&logo=Velog&logoColor=white&link=https://velog.io/@hbeom00"> </a> | <a href=https://velog.io/@slppills> <img src="https://img.shields.io/badge/Velog-20C997?style=for-the-badge&logo=Velog&logoColor=white&link=https://velog.io/@slppills"> </a> | <a href=https://velog.io/@rooftop7788> <img src="https://img.shields.io/badge/Velog-20C997?style=for-the-badge&logo=Velog&logoColor=white&link=https://velog.io/@rooftop7788"> </a> |

<details>
<summary>유인철</summary>
 
 - 로그인/로그아웃
   - supabase auth를 활용한 로그인 기능 구현
   - 소셜 로그인(카카오, 구글) 기능 구현
</details>

<details>
<summary>신희범</summary>
 
 - 메인페이지
   - top 3 뉴스 데이터 - 캐러셀 기능 구현
   - 카테고리별 데이터 - 페이지네이션 기능 구현
</details>

<details>
<summary>선채훈</summary>
 
 - 디테일페이지
   - 뉴스 기사 디테일 페이지 제작
   - 댓글 기능 구현(CRUD)
</details>

<details>
<summary>이지영</summary>
 
 - 마이페이지
   - 프로필, 닉네임, 비밀번호 변경
   - 좋아요 기능 구현
</details>

<br/>

## 📂 프로젝트 구조

<details>
<summary>폴더 구조</summary>

```
📦src
 ┣ 📂app
 ┃ ┣ 📂(auth)
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂reset-password
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂signup
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂update-password
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📜auth-layout.tsx
 ┃ ┃ ┗ 📜loading.tsx
 ┃ ┣ 📂(root)
 ┃ ┃ ┣ 📂(protected)
 ┃ ┃ ┃ ┗ 📂mypage
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📂detail
 ┃ ┃ ┃ ┗ 📂[category]
 ┃ ┃ ┃ ┃ ┗ 📂[id]
 ┃ ┃ ┃ ┃ ┃ ┣ 📜AllComments.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Comment.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Comments.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MyComments.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂logout
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂signup
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┗ 📜auth.ts
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📂callback
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜GeistMonoVF.woff
 ┃ ┃ ┣ 📜GeistVF.woff
 ┃ ┃ ┗ 📜PretendardVariable.woff2
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜page.tsx
 ┃ ┗ 📜providers.tsx
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┣ 📜GoogleButton.tsx
 ┃ ┃ ┃ ┣ 📜KakaoButton.tsx
 ┃ ┃ ┃ ┗ 📜LogoutButton.tsx
 ┃ ┃ ┣ 📂Form
 ┃ ┃ ┃ ┣ 📜LoginForm.tsx
 ┃ ┃ ┃ ┣ 📜ResetPasswordForm.tsx
 ┃ ┃ ┃ ┣ 📜SignUpForm.tsx
 ┃ ┃ ┃ ┗ 📜UpdatePasswordForm.tsx
 ┃ ┃ ┗ 📂InputFeild
 ┃ ┃ ┃ ┗ 📜InputField.tsx
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┣ 📂likes
 ┃ ┃ ┗ 📜LikeButton.tsx
 ┃ ┣ 📂mainPage
 ┃ ┃ ┣ 📜CategoryNewsCard.tsx
 ┃ ┃ ┣ 📜CategoryNewsList.tsx
 ┃ ┃ ┣ 📜TopNewsCard.tsx
 ┃ ┃ ┗ 📜TopNewsList.tsx
 ┃ ┗ 📂mypage
 ┃ ┃ ┣ 📜Card.tsx
 ┃ ┃ ┣ 📜Comment.tsx
 ┃ ┃ ┣ 📜Likes.tsx
 ┃ ┃ ┣ 📜Modal.tsx
 ┃ ┃ ┗ 📜Profile.tsx
 ┣ 📂providers
 ┃ ┗ 📜userStoreProvider.tsx
 ┣ 📂public
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📜default_img.jpg
 ┃ ┃ ┗ 📜default_profile.jpeg
 ┃ ┣ 📜google.png
 ┃ ┣ 📜kakao.png
 ┃ ┗ 📜news_image.jpg
 ┣ 📂serverActions
 ┃ ┣ 📜newsApi.ts
 ┃ ┗ 📜profileActions.ts
 ┣ 📂store
 ┃ ┗ 📜user-store.ts
 ┣ 📂types
 ┃ ┣ 📜comment.ts
 ┃ ┣ 📜mypageTypes.ts
 ┃ ┗ 📜newsInfo.ts
 ┣ 📂utils
 ┃ ┣ 📂category
 ┃ ┃ ┗ 📜categoryArr.ts
 ┃ ┣ 📂supabase
 ┃ ┃ ┣ 📜client.ts
 ┃ ┃ ┣ 📜middleware.ts
 ┃ ┃ ┣ 📜profileService.ts
 ┃ ┃ ┗ 📜server.ts
 ┃ ┗ 📜teamInfo.ts
 ┗ 📜middleware.ts
```

</details>

<br/>


## 🛠️ 기술 스택

<div><img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"></div>
<div>
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">
<img src="https://img.shields.io/badge/Eslint-4B32C3?style=for-the-badge&logo=Eslint&logoColor=white">
</div>
<div>
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white">
</div>
<div>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white">
</div>
<div><img src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white"></div>
<div><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white"></div>

<br/>

## 🔥 페이지별 기능 구현

<details>
<summary>로그인/로그아웃</summary>

<br />

**<supabase auth를 사용해 이메일과 OAuth 기반의 소셜 로그인 기능 구현>**
- 소셜 로그인(카카오, 구글) 기능 구현
- 로그인 후 발급된 JWT토큰을 쿠키에 저장해 클라이언트측에서 토큰 기반으로 인증 상태를 확인해 인가된 리소스에 접근 ⭕
- 로그인, 회원가입 폼을 react-hook-form 라이브러리를 사용해 구성 ⭕
- register를 이용해 비제어 컴포넌트로 폼을 관리해 실시간 유효성 검사도 진행 ⭕
 
 ![screencapture-localhost-3000-login-2024-10-17-04_04_20](https://github.com/user-attachments/assets/0edda5ac-7c4f-4495-b332-dcfc61c88438)

</details>

<details>
<summary>메인페이지</summary>

<br />

**<Open News API를 사용해 뉴스 리스트를 볼 수 있는 페이지>**
- 잦은 api 요청으로 ISR 방식으로 구현 ⭕
- Top3 News를 캐러셀 기능으로 UI/UX 향상 ⭕
- supabase를 활용하여 즐겨찾기 기능 구현 ⭕
- 카테고리별 뉴스 데이터를 받아와 사용자가 더 다양한 뉴스를 확인할 수 있도록 구현 ⭕
 
![screencapture-localhost-3000-2024-10-17-04_05_28](https://github.com/user-attachments/assets/25563e16-8c2d-4a6a-a8ff-8e60bd4e3ceb)

</details>

<details>
<summary>마이페이지</summary>
 
<br />

**<유저의 프로필 확인 및 수정과 즐겨찾기, 댓글 작성한 뉴스 리스트를 확인할 수 있는 페이지>**
- Supabase를 활용하여 유저 프로필 및 뉴스 데이터 CRUD 구현 ⭕
- Tanstack Query를 활용하여 서버상태를 효율적으로 관리 ⭕
- 쿼리 무효화를 사용하여 최신 데이터를 가져올 수 있도록 하여 항상 일관된 데이터를 유지 ⭕

![screencapture-localhost-3000-mypage-2024-10-17-04_12_41](https://github.com/user-attachments/assets/d7005a9b-ecae-429b-8f54-390498b5141c)

</details>

<details>
<summary>디테일페이지</summary>
  
<br />

**<댓글 기능과 뉴스 데이터의 상세 내용을 확인할 수 있는 페이지>**
- 댓글 기능 CRUD 구현 ⭕
- supabase를 활용하여 즐겨찾기 기능 구현 ⭕
- Tanstack Query를 활용하여 서버상태를 효율적으로 관리 ⭕
- tanstack query의 invalidateQueries를 활용해서 화면을 새로고침하지 않고 항상 최신 데이터 사용 ⭕
  
![screencapture-localhost-3000-detail-entertainment-daff7c48b7e58c6d11004415016243a7-2024-10-17-04_13_24](https://github.com/user-attachments/assets/340859df-2668-4b55-9b41-11dd78d4c9a1)

</details>

<br/>

## ⚔️ 트러블 슈팅
- tanstack의 사용법을 next에서 제대로 이해하지 못하고
활용하려다보니, 많은 오류가 있었지만,
강의를 다시보며 개념을 익혔고, 부족한 부분은 튜터님들께서 잘 채워주셔서
잘 해결할 수 있었습니다.

 <br />
 
- Open News API 요금 제한으로 불러올 수 있는 데이터의 양이 한정적이였다.
이러한 문제점을 해결하고자 API요청할 때 revalidate를 추가하여 데이터가 캐싱되어 이후 데이터를 불러올 때 캐싱된 데이터를 불러올 수 있도록 ISR 방식을 사용하였다.

 <br />
 
- 사용자가 로그인 하면 마이페이지와 로그아웃 버튼이 보여지는데 새로고침 하면 다시 로그인 버튼이 나타나는 이슈.. 해결 방법은!! 로그인한 유저 정보를 supabase의 auth.User()로 불러와서 zustand 전역상태 관리를 활용하여 해결하였다.

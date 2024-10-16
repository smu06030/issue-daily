# 📰 Issue Daily
### 💫 최신 이슈들을 한눈에 확인하고 싶다면? Issue Daily를 방문해 주세요 !! 💫<br/>
<div> ➡️ NEWSDATA.IO API를 이용하여 최근 뉴스들을 카테고리별로 확인할 수 있는 사이트 입니다.</div> <br/>

#### 🕓 작업 기간 : 24.10.10 ~ 24.10.16
#### 🔗 배포 링크 : https://issue-daily.vercel.app/

<br/>

### 🔥목표
- Next.js와 Supabase를 이용한 full stack 개발
- TypeScript로 더욱 안전하게 개발
- Zustand를 이용한 상태 관리
- TanStack Query를 활용한 서버 상태 관리
- 성능 최적화, 데이터 무결성 유지, 사용자 친화적인 UI/UX 구현

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

#### 와이어프레임
<div><img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"></div>

#### 프레임워크 & 라이브러리
<div>
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white">
</div>

#### 데이터베이스
<div><img src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white"></div>

#### 품질 관리
<div>
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">
<img src="https://img.shields.io/badge/Eslint-4B32C3?style=for-the-badge&logo=Eslint&logoColor=white">
</div>

#### 버전 관리
<div>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white">
</div>

#### 배포 환경
</div>
<div><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">   </div>


<br/>

## 🧑‍💻 블로그

| | 유인철 | 이지영 | 선채훈 | 신희범 |
| :-------------: | :-------------: | :-------------: | :-------------: | :-------------: |
| 역할 | 팀장 | 팀원 | 팀원 | 팀원 |
| Github | <a href=https://github.com/smu06030> @smu06030 </a> | <a href=https://github.com/wldud7788> @wldud7788 </a> | <a href=https://github.com/slppills> @slppills </a> | <a href=https://github.com/HBeom00> @Hbeom00 </a> |
| Blog | <a href=https://mingos-habitat.tistory.com/> <img src="https://img.shields.io/badge/Tistory-000000?style=for-the-badge&logo=Tistory&logoColor=white&link=https://mingos-habitat.tistory.com/"> </a> | <a href=https://velog.io/@rooftop7788> <img src="https://img.shields.io/badge/Velog-20C997?style=for-the-badge&logo=Velog&logoColor=white&link=https://velog.io/@rooftop7788"> </a> | <a href=https://velog.io/@slppills> <img src="https://img.shields.io/badge/Velog-20C997?style=for-the-badge&logo=Velog&logoColor=white&link=https://velog.io/@slppills"> </a> | <a href=https://velog.io/@hbeom00> <img src="https://img.shields.io/badge/Velog-20C997?style=for-the-badge&logo=Velog&logoColor=white&link=https://velog.io/@hbeom00"> </a> |

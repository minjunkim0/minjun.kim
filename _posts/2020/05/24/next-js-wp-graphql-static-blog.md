---
title: "Next.js와 WordPress로 블로그 만들기"
date: "2020-05-24"
author:
  name: logan
  email: "hi@minjun.kim"
---

블로그를 꽤 오랜기간 운영하다가 묵은 글을 정리하고 블로그를 그만 둔 지 꽤 흘렀습니다. 그러나 개발을 하면서 겪었던 일이나 경험 등을 기록으로 남겨 두어야 한다는 생각에 블로그를 다시 시작하고자 여러가지 대안을 두고 고민 하였고 그 중에 3가지 정도로 줄어들었습니다.

- Medium
- WordPress
- Markdown으로 작성하고 Static 생성

Medium은 특별한 관리가 필요하지 않아 사용하려고 했었고 WordPress는 이미 오래 사용해 왔으나 직접 설치하여 사용하고자 하면 서버를 관리하거나 비용을 지불해야 했습니다. Markdown으로 작성하고 Next.js, Gatsby등을 이용해 블로그를 만들고 gh-pages나 Netlify에 호스팅 하는 방법도 있고 이 방법이 개발자들이 가장 많이 사용하는 방법입니다.

Markdown이 익숙하고 글을 쓰기에도 가장 좋은 방법이긴 하지만 Markdown 파일을 잘 관리할 자신이 없었고 블로그란 생각났을 때 글쓰기를 시작해야 하는데 Markdown은 왠지 그러지 못할 것 같았습니다.

물론 WordPress만 사용하여 블로그를 운영 하는 것도 훌륭한 대안 입니다. 다만 WordPress는 PHP로 만들어져 테마도 PHP로 개발되어야 하고 PHP는 다룬지 오래되어 현 시점에서는 익숙하지 않은 것이 가장 큰 걸림돌 이었습니다.

여러가지 대안을 두고 고민하던 중에 Next.js 9.3에서 Static Site Generation(SSG) 관련 업데이트가 있었고 Next.js 9.4 버전이 업데이트 되면서 CMS 서비스를 활용한 예제가 추가되어 Next.js의 SSG를 활용하면 재미있을 것 같다는 생각에 소개된 예제를 바탕으로 5종의 CMS 서비스를 검토했습니다.

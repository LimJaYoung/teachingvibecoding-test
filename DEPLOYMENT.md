# Vercel 배포 가이드

## 배포 개요
이 프로젝트는 정적 HTML/CSS 웹사이트로, Vercel을 통해 배포됩니다.

## 배포 과정

### 1. 사전 준비
- Vercel CLI 설치 확인
- 프로젝트 파일 준비 (index.html, CSS 파일, public 폴더 등)

### 2. vercel.json 설정

#### 최종 설정 내용:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "**",
      "use": "@vercel/static"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    },
    {
      "source": "/public/(.*)\\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|otf|eot)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)\\.css",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

#### 설정 설명:
- **version: 2**: Vercel 설정 파일 버전
- **builds**: 정적 파일 빌드 설정 (`@vercel/static` 사용)
- **headers**: 
  - 보안 헤더 (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
  - 캐싱 헤더 (정적 파일에 대한 캐시 최적화)

### 3. 배포 명령어

#### 프로덕션 배포:
```bash
vercel --prod --yes
```

#### 옵션 설명:
- `--prod`: 프로덕션 환경에 배포
- `--yes`: 모든 프롬프트에 자동으로 "yes" 응답

### 4. 배포 결과

#### 성공 시 출력:
```
✅  Production: https://[프로젝트-이름].vercel.app
🔍  Inspect: https://vercel.com/[계정]/[프로젝트]/[배포-ID]
```

#### 배포된 URL:
- **프로덕션 URL**: https://teaching-vibe-pofol-2-ijb7llvs1-limjayoungs-projects.vercel.app
- **관리 대시보드**: Vercel 웹사이트에서 확인 가능

## 프로젝트 구조

```
teaching-vibe-pofol-2/
├── index.html          # 메인 HTML 파일
├── style.css           # 기본 스타일시트
├── responsive.css      # 반응형 스타일시트
├── vercel.json        # Vercel 배포 설정
└── public/            # 정적 리소스 폴더
    ├── images/        # 이미지 파일들
    └── font/          # 폰트 파일들
```

## 배포 시 주의사항

### 1. 정적 파일 경로
- HTML에서 `./public/images/...` 경로로 참조
- Vercel에서는 `/public/images/...` 경로로 자동 서빙됨

### 2. 설정 파일 제약사항
- `routes`와 `headers`를 동시에 사용할 수 없음
- `rewrites`와 `headers`는 함께 사용 가능
- 최신 Vercel에서는 `builds` + `headers` 조합 권장

### 3. 캐싱 최적화
- 이미지, 폰트, CSS 파일은 1년간 캐싱 (immutable)
- HTML 파일은 기본 캐싱 정책 적용

## 배포 후 확인사항

1. ✅ 메인 페이지 로드 확인
2. ✅ CSS 파일 로드 확인
3. ✅ 이미지 파일 로드 확인
4. ✅ 폰트 파일 로드 확인
5. ✅ 반응형 디자인 작동 확인

## 문제 해결

### 404 에러 발생 시:
1. 브라우저 개발자 도구(F12) → Network 탭 확인
2. 어떤 파일이 404인지 확인
3. `vercel.json`의 경로 설정 확인
4. `public` 폴더 구조 확인

### 재배포:
```bash
vercel --prod --yes
```

## 추가 설정 (선택사항)

### 커스텀 도메인 연결:
1. Vercel 대시보드 접속
2. 프로젝트 설정 → Domains
3. 도메인 추가 및 DNS 설정

### 환경 변수 설정:
- Vercel 대시보드 → Settings → Environment Variables

## 참고 링크

- **Vercel 문서**: https://vercel.com/docs
- **프로젝트 설정**: https://vercel.com/limjayoungs-projects/teaching-vibe-pofol-2/settings
- **배포 대시보드**: https://vercel.com/limjayoungs-projects/teaching-vibe-pofol-2


import type { Post } from "@/types";

export const posts: Post[] = [
  {
    id: "1",
    title: "How to Open a Korean Bank Account as a Foreigner (2025 Guide)",
    slug: "open-korean-bank-account-foreigner",
    excerpt:
      "No more showing up to three different banks only to be turned away. Here's exactly which bank accepts foreigners, what documents you need, and what to say.",
    coverImage: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80",
    category: "work-money",
    publishedAt: "2025-04-10",
    readTime: 7,
    featured: true,
    tags: ["banking", "kakaobank", "toss"],
    translations: {
      ja: {
        title: "外国人として韓国の銀行口座を開設する方法（2025年ガイド）",
        excerpt: "3つの銀行をたらい回しにされてから断られる、そんな経験はもう終わりです。外国人を受け入れてくれる銀行、必要な書類、そして何を言えばいいかを正確にお伝えします。",
        content: `<h2>実際に外国人を受け入れてくれる銀行は？</h2><p>韓国のすべての銀行が外国人を平等に扱うわけではありません。2025年の正直な内訳はこちらです：</p><ul><li><strong>カカオバンク</strong> — 有効な外国人登録証（ARC）があれば最も簡単な選択肢です。スマートフォンで20分以内にすべての手続きが完了します。支店への来店は不要。</li><li><strong>トスバンク</strong> — カカオバンクと同様に、完全アプリベース。ARCと韓国の電話番号が必要です。</li><li><strong>国民銀行（KB）</strong> — 多くの伝統的な銀行よりも外国人に優しい。小さな近所の支店ではなく、主要支店を訪問すること。</li><li><strong>新韓銀行</strong> — 主要支店に英語サービスカウンターを設置。学生または就労ビザの方に若干有利。</li><li><strong>ウリ銀行</strong> — 支店によって対応にばらつきあり。</li></ul><h2>必要な書類</h2><ul><li><strong>パスポート</strong> — コピーではなく原本</li><li><strong>外国人登録証（ARC）</strong> — 最も重要な書類</li><li><strong>韓国の電話番号</strong> — ローミング番号ではなく現地SIM</li><li><strong>住所証明</strong> — 賃貸契約書、公共料金の明細書など</li><li><strong>在職証明書または在学証明書</strong> — 一部の銀行で必要</li></ul><h2>カカオバンクの方法（推奨）</h2><p>ARCがある場合は、まずこれを試してください。アプリをダウンロードし、<em>계좌 개설</em>を選択して本人確認の手順に従ってください。数分以内に口座が有効になり、カードは3〜5営業日で届きます。</p><h2>実店舗への来店</h2><p>江南、弘大、明洞などの主要エリアの<strong>主要支店</strong>を訪問してください。到着したら<em>「외국인 계좌 개설하고 싶어요。」</em>とシンプルに言ってください。</p><h2>よくある拒否の理由</h2><ul><li><strong>ARCがまだない</strong> — 到着したらすぐに申請してください。</li><li><strong>観光ビザ（B-2）</strong> — 観光客への口座開設は法律で制限されています。</li><li><strong>間違った支店</strong> — 常に主要支店に行くこと。</li><li><strong>電話番号がない</strong> — 韓国のSIMを先に取得してください。</li></ul>`,
      },
      ko: {
        title: "외국인을 위한 한국 은행 계좌 개설 방법 (2025년 가이드)",
        excerpt: "세 군데 은행을 돌아다니다 거절당하는 일은 이제 그만. 외국인을 받아주는 은행, 필요한 서류, 그리고 어떻게 말해야 하는지 정확하게 알려드립니다.",
        content: `<h2>실제로 외국인을 받아주는 은행은?</h2><p>모든 한국 은행이 외국인을 동등하게 대하지는 않습니다. 2025년 기준 솔직한 정리입니다:</p><ul><li><strong>카카오뱅크</strong> — 유효한 외국인등록증(ARC)이 있다면 가장 쉬운 선택지. 스마트폰으로 20분 이내에 완료됩니다.</li><li><strong>토스뱅크</strong> — 완전 앱 기반. ARC와 한국 전화번호 필요.</li><li><strong>국민은행(KB)</strong> — 주요 지점을 방문하세요.</li><li><strong>신한은행</strong> — 주요 지점에 영어 서비스 창구 운영.</li><li><strong>우리은행</strong> — 지점마다 천차만별.</li></ul><h2>필요한 서류</h2><ul><li><strong>여권</strong> — 사본이 아닌 원본</li><li><strong>외국인등록증(ARC)</strong> — 가장 중요한 서류</li><li><strong>한국 전화번호</strong> — 현지 유심 필요</li><li><strong>주소 증명</strong> — 임대차계약서 등</li><li><strong>재직 또는 재학 증명서</strong> — 일부 은행에서 요구</li></ul><h2>카카오뱅크 방법 (추천)</h2><p>ARC가 있다면 이것을 먼저 시도하세요. 앱을 다운로드하고 <em>계좌 개설</em>을 선택한 뒤 본인 인증 단계를 따라가세요. 수분 내에 계좌가 활성화되며 카드는 3~5 영업일 내 도착.</p><h2>은행 지점 직접 방문</h2><p>강남·홍대·명동 등 주요 지역의 <strong>주요 지점</strong>을 방문하세요. <em>"외국인 계좌 개설하고 싶어요."</em>라고 말하면 됩니다.</p><h2>흔한 거절 이유와 예방법</h2><ul><li><strong>ARC 없음</strong> — 입국 즉시 신청하세요.</li><li><strong>관광 비자(B-2)</strong> — 먼저 적절한 비자를 취득하세요.</li><li><strong>잘못된 지점</strong> — 항상 주요 지점을 방문하세요.</li><li><strong>전화번호 없음</strong> — 한국 유심을 먼저 구입하세요.</li></ul>`,
      },
    },
    content: `<h2>Which Banks Actually Accept Foreigners?</h2><p>Not all Korean banks treat foreigners equally. Here's the honest breakdown for 2025:</p><ul><li><strong>KakaoBank</strong> — The easiest option if you have a valid ARC (Alien Registration Card). The entire process happens on your phone in under 20 minutes. No branch visit required.</li><li><strong>Toss Bank</strong> — Similar to KakaoBank, fully app-based. Requires ARC and a Korean phone number.</li><li><strong>Kookmin Bank (KB)</strong> — More foreigner-friendly than most traditional banks. Visit a main branch, not a small neighborhood one.</li><li><strong>Shinhan Bank</strong> — Has an English-language service counter at major branches. Slightly better for those on student or work visas.</li><li><strong>Woori Bank</strong> — Hit or miss depending on the branch. Some locations are excellent with foreigners, others will turn you away.</li></ul><h2>What Documents You Need</h2><p>Requirements vary slightly by bank and visa type, but bring all of the following and you'll be covered in any scenario:</p><ul><li><strong>Passport</strong> — original, not a copy</li><li><strong>ARC (Alien Registration Card)</strong> — this is the single most important document; without it, your options are very limited</li><li><strong>Korean phone number</strong> — you need a local SIM, not a roaming number</li><li><strong>Proof of address</strong> — a lease agreement, utility bill, or your ARC address works</li><li><strong>Employment or enrollment certificate</strong> — required by some banks for E or D-visa holders</li></ul><p>If you don't have an ARC yet, your options narrow significantly. A handful of Shinhan and KEB Hana branches will open a limited account on passport alone, but these accounts have transfer restrictions.</p><h2>The KakaoBank Method (Recommended for Most People)</h2><p>If you have an ARC, do this first. Download the KakaoBank app, select <em>계좌 개설</em> (account opening), and follow the identity verification steps. You'll scan your ARC, do a short video selfie, and confirm your Korean phone number via SMS. Your account is active within minutes and the card arrives by mail in 3–5 business days.</p><p>KakaoBank is also the easiest to link with Korean payment apps and online shopping platforms. For most day-to-day needs, it's all you'll need.</p><h2>Going to a Physical Branch</h2><p>If you prefer a traditional bank or need one for your employer's payroll, go to a <strong>main branch</strong> in a major area like Gangnam, Hongdae, or Myeongdong. Avoid small neighborhood branches — staff there often have less experience with foreign document processing.</p><p>When you arrive, take a number and simply say: <em>"외국인 계좌 개설하고 싶어요."</em> (I'd like to open an account as a foreigner.) Most tellers understand, and larger branches often have staff who speak basic English.</p><h2>What to Expect After Opening</h2><p>Once your account is open, you'll typically get an account number immediately. A physical debit card (체크카드) arrives within a week. You can also set up internet banking through the bank's app, which is essential for paying rent, utilities, and transferring money internationally via services like <strong>Wise</strong> or <strong>Hana Bank's global wire</strong>.</p><p>Pro tip: link your account to <strong>Naver Pay</strong> or <strong>Kakao Pay</strong> early. These are how many Korean stores and apps process payments, and having them set up makes daily life significantly smoother.</p><h2>Common Rejection Reasons and How to Avoid Them</h2><ul><li><strong>No ARC yet</strong> — Apply for your ARC at the immigration office as soon as you arrive. It unlocks almost everything.</li><li><strong>Tourist visa (B-2)</strong> — Banks are legally restricted from opening full accounts for tourists. Get a proper visa first.</li><li><strong>Wrong branch</strong> — Always go to a main branch in a foreigner-dense area.</li><li><strong>Missing phone number</strong> — Get a Korean SIM before attempting account opening.</li></ul><p>Banking in Korea is genuinely excellent once you're set up — fast transfers, good apps, and zero ATM fees at most convenience stores. The setup process is the only painful part, and now you know exactly how to skip most of that pain.</p>`,
  },
  {
    id: "2",
    title: "Goshiwon vs One-Room vs Officetel: Which Should You Choose?",
    slug: "goshiwon-vs-one-room-vs-officetel",
    excerpt:
      "Each has a totally different vibe, price, and set of tradeoffs. I've lived in all three — here's the honest breakdown.",
    coverImage: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800&q=80",
    category: "accommodation",
    publishedAt: "2025-04-18",
    readTime: 9,
    featured: false,
    tags: ["goshiwon", "housing", "rent"],
    translations: {
      ja: {
        title: "コシウォン vs ワンルーム vs オフィステル：どれを選ぶべきか？",
        excerpt: "それぞれまったく異なる雰囲気、価格、トレードオフがあります。私は3つすべてに住んだことがあります — これが正直な比較です。",
        content: `<h2>コシウォン：最も安いエントリーポイント</h2><p><strong>コシウォン</strong>（고시원）は、もともと国家試験を勉強する学生向けに設計されたマイクロルームです。月額₩300,000〜₩600,000。</p><h3>向いている人：</h3><ul><li>ばかり到着し、安い滞在場所が必要な方</li><li>予算が限られており、快適さよりも立地を重視する方</li></ul><h3>注意点：</h3><ul><li>壁が薄く、隣人の音が聞こえます</li><li>共有キッチンは混雑しがち</li></ul><h2>ワンルーム（원룸）：実用的な中間の選択肢</h2><p>月額₩400,000〜₩900,000、保証金₩300万〜₩1,000万。</p><h3>向いている人：</h3><ul><li>6ヶ月以上滞在予定の方</li><li>自炊したい方</li></ul><h2>オフィステル（오피스텔）：プレミアムオプション</h2><p>月額₩700,000〜₩1,500,000以上。ジム、セキュリティデスクなど付き。</p><h2>正直なおすすめ</h2><p>到着したばかり→コシウォン。6〜12ヶ月→ワンルーム。長期・安定収入→オフィステル。</p>`,
      },
      ko: {
        title: "고시원 vs 원룸 vs 오피스텔: 어떤 것을 선택해야 할까요?",
        excerpt: "각각 완전히 다른 분위기, 가격, 트레이드오프가 있습니다. 저는 세 가지 모두에서 살아봤습니다 — 여기 솔직한 비교입니다.",
        content: `<h2>고시원: 가장 저렴한 진입점</h2><p><strong>고시원</strong>은 원래 공무원 시험을 준비하는 학생들을 위해 설계된 초소형 방입니다. 월 ₩300,000~₩600,000.</p><h3>이런 분께 적합합니다:</h3><ul><li>막 도착해서 저렴한 숙소가 필요한 분</li><li>예산이 빠듯한 분</li></ul><h3>주의할 점:</h3><ul><li>벽이 얇아 소음 문제가 있습니다</li><li>공용 주방이 혼잡할 수 있습니다</li></ul><h2>원룸: 실용적인 중간 선택지</h2><p>월 ₩400,000~₩900,000, 보증금 ₩300만~₩1,000만.</p><h3>이런 분께 적합합니다:</h3><ul><li>6개월 이상 머물 계획인 분</li><li>직접 요리를 하고 싶은 분</li></ul><h2>오피스텔: 프리미엄 옵션</h2><p>월 ₩700,000~₩1,500,000 이상. 헬스장, 보안 데스크 등 시설 완비.</p><h2>솔직한 추천</h2><p>막 도착→고시원. 6~12개월→원룸. 장기·안정 수입→오피스텔.</p>`,
      },
    },
    content: `<h2>Goshiwon: The Cheapest Entry Point</h2><p>A <strong>goshiwon</strong> (고시원) is a micro-room, originally designed for students studying for government exams. The rooms are tiny — typically 4 to 7 square meters — but they include a bed, a desk, and sometimes a tiny private bathroom. Meals (usually rice and kimchi) are often included in the price.</p><p><strong>Monthly cost:</strong> ₩300,000–₩600,000 depending on location and amenities.</p><h3>Who it's right for:</h3><ul><li>You just arrived and need somewhere cheap while you sort out your situation</li><li>You'll be out of the room most of the day and only need a place to sleep</li><li>You're on a tight budget and location matters more than comfort</li></ul><h3>What to watch out for:</h3><ul><li>Walls are thin. You will hear your neighbors' phone calls, alarms, and arguments.</li><li>Shared kitchens are often crowded and poorly maintained</li><li>No space to have guests or work from home comfortably</li><li>Some buildings are old and poorly ventilated — check the room in person before paying</li></ul><p>Goshiwons in Sinchon, Hongdae, and near universities are generally cleaner and better managed than those in random residential neighborhoods.</p><h2>One-Room (원룸): The Practical Middle Ground</h2><p>A <strong>one-room</strong> is exactly what it sounds like — a single room that serves as your bedroom, living room, and sometimes kitchen. Private bathroom is standard. These are the most common type of rental for young singles in Korea.</p><p><strong>Monthly cost:</strong> ₩400,000–₩900,000 (monthly rent / 월세), typically with a deposit (보증금) of ₩3–10 million.</p><h3>Who it's right for:</h3><ul><li>You're staying for 6+ months and want your own proper space</li><li>You work from home or need a comfortable setup for a desk and some furniture</li><li>You want to cook your own meals regularly</li></ul><h3>What to watch out for:</h3><ul><li>The deposit system can be confusing — make sure you understand <em>jeonse</em> vs <em>wolse</em> before signing anything</li><li>Many one-rooms are in older buildings with poor insulation — ask about heating bills in winter</li><li>Read the contract carefully; breaking a lease early usually costs a month's rent</li></ul><p>One-rooms near subway stations in areas like Mapo, Seongbuk, or Gwangjin offer excellent value. Avoid areas near nightlife districts if you want quiet nights.</p><h2>Officetel (오피스텔): The Premium Option</h2><p>An <strong>officetel</strong> is a hybrid space — legally classified as commercial but used almost universally as a residential unit. They're newer, better designed, and often come with building amenities like a gym, security desk, and package storage.</p><p><strong>Monthly cost:</strong> ₩700,000–₩1,500,000+, with higher deposits (₩5–20 million is common).</p><h3>Who it's right for:</h3><ul><li>You have stable income and want a comfortable, modern space</li><li>You're working remotely and need a proper home office setup</li><li>You want the convenience of a newer building with proper management</li></ul><h3>What to watch out for:</h3><ul><li>Management fees (관리비) can add ₩100,000–₩200,000 per month on top of rent</li><li>The interior looks great in photos but check the actual size — some officetels are surprisingly small for the price</li><li>Utilities are often metered separately and can run high</li></ul><h2>Side-by-Side Comparison</h2><ul><li><strong>Price:</strong> Goshiwon &lt; One-Room &lt; Officetel</li><li><strong>Privacy:</strong> Goshiwon (low) &lt; One-Room (medium) &lt; Officetel (high)</li><li><strong>Flexibility:</strong> Goshiwon (monthly, easy out) &gt; One-Room &gt; Officetel (longer contracts)</li><li><strong>Comfort:</strong> Goshiwon (minimal) &lt; One-Room &lt; Officetel (high)</li></ul><h2>My Honest Recommendation</h2><p>If you just arrived in Korea and don't know how long you're staying: <strong>start with a goshiwon</strong>. It keeps your costs low and your options open while you explore neighborhoods.</p><p>If you're committing to 6–12 months: <strong>get a one-room</strong>. The combination of privacy, kitchen access, and reasonable cost is hard to beat.</p><p>If you're earning a solid salary and plan to stay long-term: <strong>go officetel</strong>. The comfort and building management are worth the premium once you've settled in.</p><p>Whatever you choose, always visit in person before signing anything. Photos lie, and landlords in Korea are not legally required to disclose everything proactively.</p>`,
  },
  {
    id: "3",
    title: "D-10 Job Seeker Visa: How to Get It and What You Can Actually Do",
    slug: "d10-job-seeker-visa-korea",
    excerpt:
      "Korea's job seeker visa is underrated. If you qualify, it can be a great bridge while you land a job. Here's the full process.",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    category: "visa",
    publishedAt: "2025-05-05",
    readTime: 8,
    featured: false,
    tags: ["d10", "visa", "job"],
    translations: {
      ja: {
        title: "D-10求職ビザ：取得方法と実際にできること",
        excerpt: "韓国の求職ビザは過小評価されています。資格があれば、仕事を見つけるまでの優れた橋渡しになります。完全なプロセスをご紹介します。",
        content: `<h2>D-10ビザとは？</h2><p><strong>D-10（구직 비자）</strong>は最長<strong>6ヶ月</strong>（延長で最大1年）滞在しながら就職活動ができるビザです。</p><h2>資格者</h2><ul><li>韓国大学の最近の卒業生</li><li>海外大学の学士以上の卒業生</li><li>契約が終了した元Eビザ保持者</li></ul><h2>必要書類</h2><ul><li>パスポート</li><li>財政証明（約₩3,000,000）</li><li>学位証明書</li><li>志望動機書</li><li>申請費：₩60,000</li></ul><h2>できること・できないこと</h2><h3>できること：</h3><ul><li>面接参加、応募書類提出</li><li>銀行口座開設、アパート賃貸</li></ul><h3>できないこと：</h3><ul><li>給与の受け取り・有償労働</li></ul><h2>実用的なヒント</h2><p><em>Wanted.kr</em>、<em>LinkedIn Korea</em>で外国人採用経験のある企業を探しましょう。</p>`,
      },
      ko: {
        title: "D-10 구직 비자: 취득 방법과 실제로 할 수 있는 것들",
        excerpt: "한국의 구직 비자는 저평가되어 있습니다. 자격이 된다면 일자리를 잡는 동안 훌륭한 징검다리가 될 수 있습니다. 전체 과정을 소개합니다.",
        content: `<h2>D-10 비자란?</h2><p><strong>D-10(구직 비자)</strong>는 최대 <strong>6개월</strong>(연장 시 최대 1년) 체류하며 취업 활동을 할 수 있는 비자입니다.</p><h2>자격 대상</h2><ul><li>한국 대학 최근 졸업생</li><li>해외 대학 학사 이상 졸업생</li><li>계약이 종료된 전 E비자 소지자</li></ul><h2>필요 서류</h2><ul><li>여권</li><li>재정 증명(약 ₩3,000,000)</li><li>학위증명서</li><li>자기소개서</li><li>신청 수수료: ₩60,000</li></ul><h2>할 수 있는 것과 없는 것</h2><h3>할 수 있는 것:</h3><ul><li>면접 참석, 지원서 제출</li><li>은행 계좌 개설, 아파트 임대</li></ul><h3>할 수 없는 것:</h3><ul><li>급여 수령·유급 활동</li></ul><h2>실용적인 팁</h2><p><em>Wanted.kr</em>, <em>LinkedIn Korea</em>에서 외국인 채용 경험이 있는 회사를 타겟으로 하세요.</p>`,
      },
    },
    content: `<h2>What Is the D-10 Visa?</h2><p>The <strong>D-10 (구직 비자)</strong> is Korea's official job seeker visa. It allows foreign nationals to reside in Korea for up to <strong>6 months</strong> (extendable once for another 6 months, up to 1 year total) while looking for employment or preparing to start a business.</p><p>Unlike a tourist visa, the D-10 lets you legally be in Korea for the explicit purpose of job hunting — attending interviews, submitting applications, and negotiating contracts. You cannot work for pay while on the D-10, but you can do everything that leads up to a job offer.</p><h2>Who Qualifies?</h2><p>There are several pathways to the D-10. You likely qualify if you fall into one of these categories:</p><ul><li><strong>Recent graduates</strong> from a Korean university (within 2 years of graduation)</li><li><strong>Graduates of overseas universities</strong> at the bachelor's level or higher, looking to work in a specialized field</li><li><strong>Holders of certain professional qualifications</strong> recognized by the Korean government</li><li><strong>Former E-visa holders</strong> (E-1 through E-7) whose contract has ended and who are seeking a new employer</li><li><strong>EPIK or other government program alumni</strong> transitioning between positions</li></ul><h2>Required Documents</h2><p>The exact document list depends on your pathway, but typically includes:</p><ul><li>Passport (valid for at least 6 months beyond your intended stay)</li><li>Completed visa application form</li><li>Recent passport photo</li><li>Proof of financial stability — bank statements showing sufficient funds (roughly ₩3,000,000 or equivalent)</li><li>Degree certificate or diploma (apostilled or certified translation if not in Korean)</li><li>Letter of intent explaining your job search plan in Korea</li><li>Proof of previous employment or status (for those transitioning from another visa)</li><li>Application fee: ₩60,000 for single entry</li></ul><h2>How to Apply</h2><p>The D-10 is applied for either at a <strong>Korean embassy or consulate</strong> in your home country, or directly at a <strong>Korean Immigration Office</strong> if you're already in Korea on a different visa.</p><p>If you're currently on an E-visa and your contract just ended, you can apply for a D-10 status change at your local immigration office before your current visa expires. This is often faster and easier than going home to apply.</p><p><strong>Processing time</strong> is typically 3–5 business days at immigration offices, and 1–4 weeks at overseas embassies. Apply before your current status expires to avoid gaps in legal stay.</p><h2>What You Can and Cannot Do on D-10</h2><h3>You CAN:</h3><ul><li>Attend job interviews and networking events</li><li>Submit job applications and negotiate contracts</li><li>Study Korean or take professional development courses</li><li>Open a bank account and rent an apartment</li></ul><h3>You CANNOT:</h3><ul><li>Receive a salary or payment for work</li><li>Work part-time, freelance, or do any paid activity</li><li>Run a business or invoice clients</li></ul><p>Violating these restrictions is taken seriously. If you're caught working without authorization, your visa can be revoked and you may face a re-entry ban.</p><h2>Practical Tips for Making D-10 Work</h2><p><strong>Start your job search before you apply.</strong> Immigration officers sometimes ask about your job search plan. Having interviews already scheduled or applications submitted shows you're serious.</p><p><strong>Use the full year if you need it.</strong> The extension process is straightforward — apply at least 2 weeks before your first 6 months expire, bring updated bank statements and proof of ongoing job search activity.</p><p><strong>Target companies with experience hiring foreigners.</strong> Use platforms like <em>Wanted.kr</em>, <em>LinkedIn Korea</em>, and <em>JobKorea</em> to find companies that have hired non-Koreans before.</p><p><strong>Network in person.</strong> Seoul has active expat professional communities — events hosted through groups like Seoul Global Center or industry-specific meetups are genuinely useful for job leads in Korea.</p>`,
  },
  {
    id: "4",
    title: "How to Use Korean Public Transport Without Losing Your Mind",
    slug: "korean-public-transport-guide",
    excerpt:
      "T-money, KakaoMap, bus vs subway strategy — navigating Seoul's transit system is actually great once you know the tricks.",
    coverImage: "https://images.unsplash.com/photo-1565118531796-763e5082d113?w=800&q=80",
    category: "transport",
    publishedAt: "2025-05-10",
    readTime: 6,
    featured: false,
    tags: ["tmoney", "subway", "bus"],
    translations: {
      ja: {
        title: "混乱せずに韓国の公共交通機関を使う方法",
        excerpt: "T-money、KakaoMap、バスと地下鉄の使い分け戦略 — コツさえ知れば、ソウルの交通システムは実は素晴らしいものです。",
        content: `<h2>まずT-moneyカードを入手</h2><p>GS25、CU、7-Elevenで約₩2,500〜₩4,000で購入可能。地下鉄・バス・タクシーで使え、乗り換え割引も受けられます。</p><h2>地下鉄</h2><p>9路線、10km以内₩1,400から。ナビは<strong>KakaoMap</strong>が最適。バス乗り換え30分以内は割引適用。</p><h2>バスの色分け</h2><ul><li><strong>青</strong>：幹線バス</li><li><strong>緑</strong>：支線バス</li><li><strong>赤</strong>：広域急行</li><li><strong>黄</strong>：循環バス</li></ul><h2>タクシー</h2><p>基本料金₩4,800〜。<strong>Kakao T</strong>アプリで配車すると言語の壁なし。</p><h2>都市間移動</h2><ul><li><strong>KTX</strong>：ソウル〜釜山約2.5時間</li><li><strong>高速バス</strong>：KTXより安い</li></ul>`,
      },
      ko: {
        title: "혼란 없이 한국 대중교통 이용하는 방법",
        excerpt: "티머니, 카카오맵, 버스 vs 지하철 전략 — 요령만 알면 서울의 교통 시스템은 사실 정말 훌륭합니다.",
        content: `<h2>먼저 티머니 카드 구입</h2><p>GS25, CU, 7-Eleven 등 편의점에서 약 ₩2,500~₩4,000에 구입. 지하철·버스·택시에서 사용 가능하며 환승 할인도 받을 수 있습니다.</p><h2>지하철</h2><p>9개 노선, 10km 이내 ₩1,400부터. 길 찾기는 <strong>카카오맵</strong>이 최적. 버스 환승 30분 이내 할인 적용.</p><h2>버스 색상 구분</h2><ul><li><strong>파랑</strong>: 간선버스</li><li><strong>초록</strong>: 지선버스</li><li><strong>빨강</strong>: 광역버스</li><li><strong>노랑</strong>: 순환버스</li></ul><h2>택시</h2><p>기본요금 ₩4,800~. <strong>카카오 T</strong> 앱으로 호출하면 언어 장벽 없음.</p><h2>도시 간 이동</h2><ul><li><strong>KTX</strong>: 서울~부산 약 2.5시간</li><li><strong>고속버스</strong>: KTX보다 저렴</li></ul>`,
      },
    },
    content: `<h2>Start Here: Get a T-money Card</h2><p>Before you do anything else, get a <strong>T-money card</strong>. It's a rechargeable transit card that works on subways, city buses, intercity buses, and even some taxis and convenience stores across the country.</p><p>You can buy one at any convenience store (GS25, CU, 7-Eleven, Emart24) for about ₩2,500–₩4,000. Load it with cash at the machine near the subway entrance or at the convenience store counter.</p><p><strong>Why not just use your credit card?</strong> Foreign credit cards don't work on Korean buses. Some subway gates now accept them, but T-money works everywhere and gives you a transfer discount that credit cards don't. Get T-money first.</p><h2>The Subway: Your Main Tool</h2><p>Seoul's subway has 9 main lines plus several additional routes, covering virtually every neighborhood you'd want to visit. Fares start at <strong>₩1,400</strong> for up to 10km and increase slightly for longer distances.</p><p>The key thing to understand is the <strong>transfer discount</strong>. If you tap out of the subway and tap onto a bus within 30 minutes, you pay significantly less for the continuation. This only works with T-money.</p><p>For navigation, use <strong>KakaoMap</strong> or <strong>Naver Map</strong>. Both are far more accurate than Google Maps for Korean transit. KakaoMap shows real-time bus locations, walking times between transfers, and even the number of stops remaining.</p><h2>Buses: Color-Coded and Logical</h2><p>The bus system in Seoul uses a color-coded route system:</p><ul><li><strong>Blue buses (간선버스)</strong> — Main arterial routes connecting major parts of the city. Run frequently, cover long distances.</li><li><strong>Green buses (지선버스)</strong> — Local feeder routes connecting neighborhoods to subway stations. Use for the last mile.</li><li><strong>Red buses (광역버스)</strong> — Express routes to satellite cities and suburbs outside Seoul. Faster, slightly more expensive.</li><li><strong>Yellow buses (순환버스)</strong> — Circular routes within a specific area.</li></ul><p>To board, wave your hand when you see your bus coming — drivers don't always stop if no one signals. Tap your T-money card on the reader at the front when boarding, and again when exiting from the back. Forgetting to tap out costs you the transfer discount.</p><h2>KakaoMap Navigation Tips</h2><p>Open KakaoMap, tap the search bar, and type your destination in English — it handles English input well for major locations. Select "Transit" from the route options to see multiple options ranked by time, transfers, and walking distance.</p><p><strong>Pro tip:</strong> Tap the bus icon on any route and you can see the live location of your bus on the map. If it's 8 stops away, you have time to grab a coffee. This feature alone makes KakaoMap essential.</p><h2>Taxis: When Transit Doesn't Make Sense</h2><p>Korean taxis are affordable and widely available. Base fare starts around <strong>₩4,800</strong>. Kakao T (the taxi app) is the most reliable way to hail one — it shows your route to the driver in advance, eliminating the language barrier.</p><p>Late-night surcharges apply after midnight (roughly 20% extra). If you're going somewhere complex, show the driver the destination on KakaoMap rather than trying to say it.</p><h2>Intercity Travel</h2><ul><li><strong>KTX (Korea Train Express)</strong> — High-speed rail. Seoul to Busan takes about 2.5 hours. Book through the Korail website or <em>Korail Talk</em> app.</li><li><strong>Express buses</strong> — Cheaper than KTX, comfortable. Depart from Express Bus Terminal (고속버스터미널) in Gangnam. Book via <em>Kobus.co.kr</em>.</li></ul><p>Korean transit is genuinely excellent. Get your T-money card, download KakaoMap, and you'll navigate like a local within a few days.</p>`,
  },
  {
    id: "5",
    title: "Jeonse vs Wolse: Korea's Rent System Explained for Foreigners",
    slug: "jeonse-wolse-explained-foreigners",
    excerpt:
      "Korea's rental system is unlike anywhere else. Jeonse lets you pay a lump sum instead of monthly rent — and it can make sense financially.",
    coverImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    category: "accommodation",
    publishedAt: "2025-05-14",
    readTime: 10,
    featured: false,
    tags: ["jeonse", "wolse", "rent"],
  },
  {
    id: "6",
    title: "Eating Cheap in Korea: How to Eat Well Under ₩5,000 a Meal",
    slug: "eating-cheap-korea-under-5000-won",
    excerpt:
      "Kimbap joints, convenience store hacks, and the university district strategy. You can eat filling, tasty meals daily without breaking the bank.",
    coverImage: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
    category: "culture",
    publishedAt: "2025-05-18",
    readTime: 5,
    featured: false,
    tags: ["budget", "food", "kimbap"],
    translations: {
      ja: {
        title: "韓国での節約グルメ：一食₩5,000以下でしっかり食べる方法",
        excerpt: "キンパブ専門店、コンビニ活用術、大学街戦略。毎日お腹いっぱいで美味しい食事を財布を痛めずに楽しめます。",
        content: `<h2>キンパブ専門店</h2><p>김밥천국などが安くておいしい食事の定番。<strong>基本キンパブ</strong>₩2,500〜、<strong>ラミョン</strong>₩3,000〜、<strong>ビビンバ</strong>₩5,000〜。</p><h2>コンビニ活用術</h2><ul><li><strong>三角おにぎり</strong>：₩1,200〜₩1,800×2個で満腹</li><li><strong>ご飯カップ+スープ</strong>：₩4,000以下で完全な食事</li><li><strong>カップラーメン</strong>：₩1,000〜（お湯無料）</li></ul><h2>大学街戦略</h2><p>新村（延世・梨花）、安岩（高麗大）、落星臺（ソウル大）近くの백반집で₩4,000〜₩6,000のボリューム定食。</p><h2>屋台フード</h2><ul><li>トッポッキ₩3,000〜</li><li>ホットク₩1,000〜</li><li>オムク₩500〜（スープ無料）</li></ul>`,
      },
      ko: {
        title: "한국에서 저렴하게 먹기: 한 끼 ₩5,000 이하로 잘 먹는 방법",
        excerpt: "김밥집, 편의점 활용법, 대학가 전략. 매일 배부르고 맛있는 식사를 지갑 걱정 없이 즐길 수 있습니다.",
        content: `<h2>김밥집</h2><p>김밥천국 등이 저렴한 외식의 핵심. <strong>기본 김밥</strong> ₩2,500~, <strong>라면</strong> ₩3,000~, <strong>비빔밥</strong> ₩5,000~.</p><h2>편의점 활용법</h2><ul><li><strong>삼각김밥</strong>: ₩1,200~₩1,800 × 2개면 든든</li><li><strong>밥컵+국 콤보</strong>: ₩4,000 이하 완성된 한 끼</li><li><strong>컵라면</strong>: ₩1,000~(온수 무료)</li></ul><h2>대학가 전략</h2><p>신촌(연세·이화), 안암(고려대), 낙성대(서울대) 근처 백반집에서 ₩4,000~₩6,000 푸짐한 한 끼.</p><h2>길거리 음식</h2><ul><li>떡볶이 ₩3,000~</li><li>호떡 ₩1,000~</li><li>어묵 ₩500~(국물 무료)</li></ul>`,
      },
    },
    content: `<h2>The Kimbap Joint: Your Most Important Discovery</h2><p><strong>Kimbap Cheonguk</strong> (김밥천국) and similar budget Korean restaurants are everywhere and are the cornerstone of cheap eating in Korea. These aren't tourist spots — they're where Korean office workers and university students eat lunch every single day.</p><ul><li><strong>Basic kimbap (김밥)</strong> — ₩2,500–₩3,500. A full roll of rice, vegetables, and egg wrapped in seaweed. One roll is filling for most people.</li><li><strong>Tuna kimbap (참치김밥)</strong> — ₩3,500–₩4,000.</li><li><strong>Ramyeon (라면)</strong> — ₩3,000–₩4,000 for a proper bowl of Korean instant ramen cooked in broth with an egg.</li><li><strong>Dolsot bibimbap (돌솥비빔밥)</strong> — ₩5,000–₩6,000. A stone pot of rice with vegetables and a fried egg.</li><li><strong>Gyeran mari (계란말이)</strong> — ₩3,000. A rolled egg dish. With kimbap, it's a complete meal.</li></ul><p>These restaurants are identified by the bright yellow and green signage. If you see 김밥, you're in the right place.</p><h2>Convenience Stores: Better Than You Think</h2><p>Korean convenience stores — GS25, CU, 7-Eleven, Emart24 — are genuinely good food destinations for budget eating.</p><h3>Best picks under ₩5,000:</h3><ul><li><strong>삼각김밥 (Triangle onigiri)</strong> — ₩1,200–₩1,800 each. Two of these is a solid meal.</li><li><strong>즉석밥 + 국 combo</strong> — A microwaveable rice cup (₩1,500) plus a soup pouch (₩1,500–₩2,500) = a hot, complete meal under ₩4,000.</li><li><strong>컵라면 (Cup ramen)</strong> — ₩1,000–₩2,000. All convenience stores have hot water. Add a hard-boiled egg (₩1,000) for protein.</li><li><strong>샌드위치 (Sandwiches)</strong> — ₩2,000–₩3,500. The egg salad and ham sandwiches from GS25 and CU are consistently good.</li></ul><p><strong>Pro tip:</strong> Convenience stores run daily meal deal promotions — a combination of two items for a discounted price. Check the promotional shelf near the counter for combos under ₩4,000.</p><h2>The University District Strategy</h2><p>Every Korean university has a <strong>학교 앞</strong> (area in front of the school) packed with budget restaurants catering to students. The quality-to-price ratio is extraordinary.</p><p>Key university areas in Seoul:</p><ul><li><strong>Sinchon (신촌)</strong> — Near Yonsei and Ewha universities. Dozens of options under ₩5,000 within a few blocks.</li><li><strong>Anam (안암)</strong> — Near Korea University. More local-feeling, slightly less tourist traffic.</li><li><strong>Nakseongdae (낙성대)</strong> — Near Seoul National University. Known for particularly good cheap food.</li></ul><p>In these areas, look for <strong>백반집</strong> (baekban restaurants) — small, home-style places serving rice with multiple side dishes (반찬) for ₩4,000–₩6,000. You'll get soup, rice, kimchi, and 3–5 additional sides. Best nutritional value at this price point.</p><h2>Street Food That Actually Fills You Up</h2><ul><li><strong>Tteokbokki (떡볶이)</strong> — ₩3,000–₩4,000 for a portion. Spicy rice cakes, filling and warming.</li><li><strong>Hotteok (호떡)</strong> — ₩1,000–₩1,500. A sweet filled pancake, great as a snack between meals.</li><li><strong>Eomuk (어묵)</strong> — ₩500–₩1,000 per skewer. Fish cake on a stick, sold with free broth.</li><li><strong>Gyeranppang (계란빵)</strong> — ₩2,000. Egg bread — fluffy bread with a whole egg baked inside. Surprisingly filling.</li></ul><h2>What to Avoid When Budget Eating</h2><ul><li><strong>Tourist market food</strong> — Gwangjang Market and Myeongdong street food are iconic but expensive for what you get.</li><li><strong>Sit-down restaurants near major tourist sites</strong> — Anything near Gyeongbokgung or Hongdae main street charges tourist markup.</li><li><strong>Delivery apps</strong> — Coupang Eats and Baemin delivery fees add ₩2,000–₩4,000 to your meal. Always eat in or pick up when budget is the priority.</li></ul><p>Eating well under ₩5,000 per meal in Korea isn't about suffering through bad food. It's about knowing where Koreans themselves actually eat — and those places are everywhere, hiding in plain sight.</p>`,
  },
  {
    id: "7",
    title: "Gyeongbokgung to Bukchon: The One-Day Seoul Itinerary That Actually Works",
    slug: "gyeongbokgung-bukchon-seoul-itinerary",
    excerpt:
      "Skip the tourist traps and do it right. This route hits the palace, the hanok village, and a local cafe — all without doubling back.",
    coverImage: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=80",
    category: "attractions",
    publishedAt: "2025-05-20",
    readTime: 6,
    featured: false,
    tags: ["seoul", "itinerary", "palace"],
    translations: {
      ja: {
        title: "景福宮から北村へ：本当に使える一日ソウル観光ルート",
        excerpt: "観光客向けの罠を避けて正しく楽しみましょう。このルートは宮殿、韓屋村、地元のカフェをすべて回れます。",
        content: `<h2>なぜこのルートが効果的か</h2><p>景福宮・北村・仁寺洞はすべて徒歩圏内。早朝は観光バスより先に入れます。</p><h2>午前：景福宮（8時50分〜10時30分）</h2><p>入場料₩3,000。慶会楼、香遠亭、国立民俗博物館を優先。韓服レンタル₩20,000〜₩30,000で入場無料。</p><h2>北村韓屋村（10時30分〜12時）</h2><p>東口から徒歩10〜15分。KakaoMapで「북촌 8경 2경」を検索。静かにしてください（住宅地です）。</p><h2>昼食：仁寺洞</h2><p>サムジギルの中庭で₩8,000〜₩12,000のランチ。</p><h2>午後</h2><p>三清洞の独立カフェでコーヒーを。地下鉄3号線・景福宮駅5番出口→帰りは安国駅6番出口。</p>`,
      },
      ko: {
        title: "경복궁에서 북촌까지: 실제로 통하는 서울 하루 코스",
        excerpt: "관광 함정을 피하고 제대로 즐기세요. 이 경로는 궁궐, 한옥 마을, 동네 카페를 되돌아가지 않고 모두 둘러볼 수 있습니다.",
        content: `<h2>이 경로가 효과적인 이유</h2><p>경복궁·북촌·인사동은 모두 도보 거리. 일찍 가면 관광버스보다 먼저 입장 가능.</p><h2>오전: 경복궁 (8시 50분~10시 30분)</h2><p>입장료 ₩3,000. 경회루, 향원정, 국립민속박물관 우선 관람. 한복 대여 ₩20,000~₩30,000하면 입장 무료.</p><h2>북촌 한옥마을 (10시 30분~12시)</h2><p>동쪽 출구에서 도보 10~15분. 카카오맵에서 "북촌 8경 2경" 검색. 실제 주거 지역이니 조용히 해주세요.</p><h2>점심: 인사동</h2><p>쌈지길 안 식당에서 ₩8,000~₩12,000 점심.</p><h2>오후</h2><p>삼청동 독립 카페에서 커피. 지하철 3호선 경복궁역 5번 출구→귀가는 안국역 6번 출구.</p>`,
      },
    },
    content: `<h2>Why This Route Works</h2><p>Gyeongbokgung, Bukchon Hanok Village, and Insadong are within walking distance of each other. The entire route can be done without getting on a single subway or bus. Starting early at the palace means you beat the tour groups, and arriving in Bukchon mid-morning means the light is perfect for photos before it turns harsh.</p><h2>Morning: Gyeongbokgung Palace (8:50 AM – 10:30 AM)</h2><p><strong>Get there when it opens at 9:00 AM</strong> — arrive at 8:50 AM. The difference between being the first hundred people inside versus arriving at 10:00 AM is enormous. Tour buses don't arrive until 10:00 or later.</p><p>Admission is <strong>₩3,000</strong> — one of the best value things you'll do in Seoul. Buy your ticket at the main gate on the south side (Gwanghwamun Gate).</p><h3>What to prioritize inside:</h3><ul><li><strong>Gyeonghoeru Pavilion</strong> — The pavilion on the lake. Best in morning light before crowds gather. Walk the perimeter rather than photographing from one angle.</li><li><strong>Hyangwonjeong Pavilion</strong> — Smaller, less visited, at the northern end of the grounds. Worth the walk.</li><li><strong>National Folk Museum of Korea</strong> — Inside the palace grounds, included in your ticket. The outdoor exhibits showing traditional Korean life are genuinely interesting.</li></ul><p>If you want to wear a <strong>hanbok</strong>, rent from shops just outside the main gate for ₩20,000–₩30,000 for several hours. Hanbok wearers get free admission — it pays for itself partway.</p><h2>Mid-Morning: Bukchon Hanok Village (10:30 AM – 12:00 PM)</h2><p>Exit through the east side of the palace and walk toward <strong>Bukchon Hanok Village</strong> — about 10–15 minutes on foot.</p><p>Bukchon is a neighborhood of traditional Korean wooden houses (hanok) that has been carefully preserved. It's genuinely beautiful — narrow alleys, curved rooftops, old walls — but it's also a <strong>real residential area</strong>. Residents actually live here; there are signs throughout asking visitors to be quiet.</p><h3>How to navigate Bukchon:</h3><ul><li>The most photographed spot is <strong>Bukchon 8-gyeong viewpoint 2</strong> — a descending lane of hanok rooftops. Search "북촌 8경 2경" on KakaoMap.</li><li>Walk uphill rather than staying on the main road. The quieter upper lanes have fewer people and feel more authentic.</li><li>The neighborhood connects toward <strong>Insadong</strong> downhill on one side.</li></ul><p>Spend about 60–90 minutes wandering. There's no single must-see spot — the whole area is the attraction. Get a little lost. That's the point.</p><h2>Lunch: Insadong (12:00 PM – 1:30 PM)</h2><p>Walk south from Bukchon toward <strong>Insadong</strong>, a street known for traditional crafts, tea houses, and food. About 10–15 minutes on foot.</p><p>For lunch, skip the main Insadong street restaurants — they're overpriced and mediocre. Instead, duck into the side alleys (especially <strong>Ssamziegil</strong>, an open-air courtyard market) and look for smaller eateries serving bibimbap, doenjang jjigae, or sundubu. Budget around ₩8,000–₩12,000 for a proper meal.</p><h2>Afternoon: Coffee and Wind Down</h2><p>After lunch, two good options:</p><ul><li><strong>Stay in Insadong</strong> — Browse traditional craft shops, pick up handmade paper goods or ceramics, and stop at a traditional tea house for <em>sikhye</em> (sweet rice drink) or barley tea.</li><li><strong>Head to Samcheongdong</strong> — The street running north of Bukchon has excellent independent cafes, small galleries, and a relaxed, local atmosphere. 10 minutes walk from Insadong.</li></ul><p>For coffee, look for any small independent cafe on the Samcheongdong street. This neighborhood has some of Seoul's best independent coffee shops at the same ₩5,000–₩6,000 as anywhere else.</p><h2>Getting There and Back</h2><p>Take subway <strong>Line 3 to Gyeongbokgung Station</strong>, Exit 5. The palace entrance is a 5-minute walk. To return in the evening, Insadong is closest to <strong>Anguk Station (Line 3)</strong>, Exit 6.</p><p>Total walking for the day is roughly 4–6 km depending on how much you wander. Wear comfortable shoes. This itinerary has no wasted movement — every step goes somewhere worth going.</p>`,
  },
  {
    id: "8",
    title: "Korean Etiquette: 12 Things That Will Make or Break Your First Month",
    slug: "korean-etiquette-for-foreigners",
    excerpt:
      "From two-hand gestures to not splitting the bill — small cultural cues that locals notice, and what to do instead.",
    coverImage: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80",
    category: "culture",
    publishedAt: "2025-05-22",
    readTime: 7,
    featured: false,
    tags: ["etiquette", "culture", "tips"],
  },
];

export function getFeaturedPost(): Post | undefined {
  return posts.find((p) => p.featured);
}

export function getPostsByCategory(categoryId: string): Post[] {
  return posts.filter((p) => p.category === categoryId);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

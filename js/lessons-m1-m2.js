/* Lesson format:
 obj [[en,vi]], intro [en,vi], sec [[hEn,hVi,en,vi]], vocab [[term,vi,expEn,expVi]],
 ex [titleEn,titleVi,en,vi], num [en,vi], quiz [[qEn,qVi,[[oEn,oVi]..],answer,xEn,xVi]],
 task [en,vi], sum [[en,vi]], tool optional lab id. Numbers marked hypothetical unless stated. */
(function (L) {

L.m1l1 = {
  min: 45,
  obj: [
    ['Explain why finance exists, not just what it is.', 'Giải thích được tại sao tài chính tồn tại, chứ không chỉ nó là gì.'],
    ['Describe finance as moving money across time and between people, under risk.', 'Mô tả tài chính là sự dịch chuyển tiền qua thời gian và giữa con người, trong điều kiện có rủi ro.'],
    ['Tell economics, accounting and finance apart.', 'Phân biệt kinh tế học, kế toán và tài chính.'],
    ['Link finance to opportunity cost and markets from AP Micro.', 'Liên hệ tài chính với chi phí cơ hội và thị trường trong AP Micro.']
  ],
  intro: [
    'A retired teacher in Hanoi has 2 billion VND and no business plans. A 28-year-old engineer has designed a better rice-drying machine but has no money. The person with money has no productive use for it; the person with a productive use has no money. Finance is the system that fixes that mismatch.',
    'Một cô giáo về hưu ở Hà Nội có 2 tỷ đồng nhưng không có kế hoạch kinh doanh. Một kỹ sư 28 tuổi thiết kế được máy sấy lúa tốt hơn nhưng không có tiền. Người có tiền thì không có cách dùng tiền hiệu quả; người có cách dùng hiệu quả thì không có tiền. Tài chính là hệ thống sửa sự lệch pha đó.'
  ],
  sec: [
    ['The problem finance solves', 'Vấn đề tài chính giải quyết',
     '<p>Finance moves money from people who have it now to people who can use it productively now, in exchange for a promise to pay back more later. If the teacher and the engineer never meet, the money sits idle, the machine is never built, and society is poorer even though nobody did anything wrong.</p>',
     '<p>Tài chính đưa tiền từ người đang có tiền đến người có thể dùng tiền hiệu quả ngay bây giờ, đổi lại lời hứa trả lại nhiều hơn sau này. Nếu cô giáo và kỹ sư không bao giờ gặp nhau, tiền nằm im, máy không được làm ra, và xã hội nghèo đi dù không ai làm gì sai.</p>'],
    ['Three things that make it hard', 'Ba điều khiến việc này khó',
     '<p><b>Time.</b> The saver gives up money today and gets it back later. How much more should she get for waiting? That leads to interest rates.</p><p><b>Risk.</b> The machine might fail and the promise might be broken. How do you price that? That leads to risk and return.</p><p><b>Trust and information.</b> The saver doesn’t know the borrower. That is why banks, exchanges, auditors and regulators exist.</p>',
     '<p><b>Thời gian.</b> Người tiết kiệm bỏ tiền ra hôm nay, nhận lại sau. Chờ đợi thì nên được trả thêm bao nhiêu? Câu hỏi này dẫn đến lãi suất.</p><p><b>Rủi ro.</b> Máy có thể hỏng, lời hứa có thể bị phá. Định giá điều đó thế nào? Câu hỏi này dẫn đến rủi ro và lợi nhuận.</p><p><b>Niềm tin và thông tin.</b> Người gửi tiền không quen người vay. Đó là lý do có ngân hàng, sở giao dịch, kiểm toán và cơ quan quản lý.</p>'],
    ['Every financial product is a promise', 'Mọi sản phẩm tài chính đều là một lời hứa',
     '<p>A bank deposit promises your money back with interest. A bond promises fixed payments and then your principal. A share of stock is a weaker promise: a slice of whatever profit the company makes, with nothing guaranteed. <b>Much of finance is pricing promises and deciding which are worth buying.</b></p><p>Working definition: finance is the study of how individuals, businesses and governments raise, allocate and manage money over time, under uncertainty.</p>',
     '<p>Tiền gửi ngân hàng hứa trả lại tiền kèm lãi. Trái phiếu hứa trả các khoản cố định rồi hoàn gốc. Cổ phiếu là lời hứa yếu hơn: một phần lợi nhuận công ty làm ra, không có gì đảm bảo. <b>Phần lớn tài chính là định giá các lời hứa và quyết định lời hứa nào đáng mua.</b></p><p>Định nghĩa: tài chính là ngành nghiên cứu cách cá nhân, doanh nghiệp và chính phủ huy động, phân bổ và quản lý tiền theo thời gian, trong điều kiện bất định.</p>'],
    ['Economics, accounting, finance', 'Kinh tế học, kế toán, tài chính',
     '<p><b>Economics</b> asks how society allocates scarce resources. <b>Accounting</b> records what already happened, measured in money: it looks back. <b>Finance</b> decides what to do with money next: it looks forward. Accounting is the scoreboard, economics explains the rules, finance is the strategy.</p><p>From AP Micro: a financial market is a market where the good is money available today and the price is the interest rate. Savers supply, borrowers demand, and the rate adjusts until they balance. If a safe deposit pays 5%, any riskier investment must offer more than 5% to be worth it. That 5% is the <b>opportunity cost of capital</b>.</p>',
     '<p><b>Kinh tế học</b> hỏi xã hội phân bổ nguồn lực khan hiếm thế nào. <b>Kế toán</b> ghi lại những gì đã xảy ra bằng tiền: nhìn về quá khứ. <b>Tài chính</b> quyết định làm gì với tiền tiếp theo: nhìn về tương lai. Kế toán là bảng tỷ số, kinh tế học giải thích luật chơi, tài chính là chiến thuật.</p><p>Từ AP Micro: thị trường tài chính là thị trường mà hàng hóa là tiền có sẵn hôm nay và giá là lãi suất. Người tiết kiệm cung, người vay cầu, lãi suất điều chỉnh đến khi cân bằng. Nếu gửi tiết kiệm an toàn được 5%, mọi khoản đầu tư rủi ro hơn phải mang lại trên 5% mới đáng. Mức 5% đó là <b>chi phí cơ hội của vốn</b>.</p>']
  ],
  vocab: [
    ['Finance', 'Tài chính', 'Managing and allocating money over time under uncertainty.', 'Quản lý và phân bổ tiền theo thời gian trong điều kiện bất định.'],
    ['Capital', 'Vốn', 'Money or resources used to create more value.', 'Tiền hoặc nguồn lực dùng để tạo thêm giá trị.'],
    ['Financial intermediary', 'Trung gian tài chính', 'An institution, such as a bank, that connects savers and borrowers.', 'Tổ chức như ngân hàng, kết nối người tiết kiệm và người vay.'],
    ['Interest rate', 'Lãi suất', 'The price of borrowing money, as a % per period.', 'Giá của việc vay tiền, tính bằng % mỗi kỳ.'],
    ['Risk', 'Rủi ro', 'The chance that actual outcomes differ from expected ones.', 'Khả năng kết quả thực tế khác với kỳ vọng.'],
    ['Return', 'Tỷ suất sinh lời', 'Gain or loss on an investment, usually as a %.', 'Lãi hoặc lỗ của khoản đầu tư, thường tính theo %.'],
    ['Opportunity cost of capital', 'Chi phí cơ hội của vốn', 'The return given up by not choosing the next-best investment.', 'Lợi nhuận bị bỏ lỡ khi không chọn phương án đầu tư tốt nhất còn lại.']
  ],
  ex: ['Apple raised money two different ways', 'Apple huy động vốn theo hai cách',
    '<p>In 1980 Apple held its IPO, selling shares to the public: investors got ownership with no guaranteed payout. That is <b>equity financing</b>. In 2013 Apple sold $17 billion of bonds, then the largest corporate bond deal ever, even though it had over $100 billion in cash. Much of that cash sat overseas, and bringing it home would have triggered a large US tax bill, so borrowing at home was cheaper. Finance is not only “do we have money?” but “which source of money is cheapest given time, taxes and risk?”</p>',
    '<p>Năm 1980 Apple IPO, bán cổ phiếu ra công chúng: nhà đầu tư nhận quyền sở hữu mà không được đảm bảo khoản chi trả nào. Đó là <b>huy động vốn chủ sở hữu</b>. Năm 2013 Apple phát hành 17 tỷ USD trái phiếu, lúc đó là đợt lớn nhất lịch sử, dù đang có hơn 100 tỷ USD tiền mặt. Phần lớn số tiền nằm ở nước ngoài, chuyển về Mỹ sẽ chịu thuế lớn, nên vay trong nước rẻ hơn. Tài chính không chỉ là “có tiền không?” mà là “nguồn tiền nào rẻ nhất khi tính thời gian, thuế và rủi ro?”</p>'],
  num: [
    '<p class="hyp">Hypothetical numbers.</p><p>A Hanoi bakery wants a 500 million VND oven. The bank pays depositors 5% and lends at 9%. The oven adds 80 million VND of profit a year before interest.</p><div class="calc"><div>Interest the bakery pays = 500m × 9% = <b>45m</b></div><div>Interest the bank pays depositors = 500m × 5% = <b>25m</b></div><div>Bank spread = 45m − 25m = <b>20m</b></div><div>Bakery net gain = 80m − 45m = <b>+35m per year</b></div></div><p>The oven returns 16% (80m ÷ 500m) on money that costs 9%. <b>An investment creates value when its return beats the cost of the money funding it.</b></p>',
    '<p class="hyp">Số liệu giả định.</p><p>Một tiệm bánh ở Hà Nội muốn mua lò 500 triệu đồng. Ngân hàng trả người gửi 5% và cho vay 9%. Lò mới mang lại thêm 80 triệu lợi nhuận mỗi năm trước lãi vay.</p><div class="calc"><div>Tiệm bánh trả lãi = 500tr × 9% = <b>45tr</b></div><div>Ngân hàng trả người gửi = 500tr × 5% = <b>25tr</b></div><div>Chênh lệch của ngân hàng = 45tr − 25tr = <b>20tr</b></div><div>Lợi ích ròng của tiệm = 80tr − 45tr = <b>+35tr mỗi năm</b></div></div><p>Lò sinh lời 16% (80tr ÷ 500tr) trên đồng vốn chi phí 9%. <b>Khoản đầu tư tạo giá trị khi lợi suất cao hơn chi phí của đồng vốn tài trợ nó.</b></p>'],
  quiz: [
    ['Which statement best describes what accounting does compared with finance?', 'Câu nào mô tả đúng nhất kế toán so với tài chính?',
      [['Accounting records the past; finance decides about the future.', 'Kế toán ghi lại quá khứ; tài chính ra quyết định cho tương lai.'],
       ['Accounting predicts stock prices; finance records them.', 'Kế toán dự đoán giá cổ phiếu; tài chính ghi lại.'],
       ['They are the same field with different names.', 'Chúng là một ngành với hai tên gọi.'],
       ['Accounting studies how society allocates resources.', 'Kế toán nghiên cứu cách xã hội phân bổ nguồn lực.']], 0,
      'Accounting measures what happened. Finance uses that information to decide what to do next. Allocation across society is economics.', 'Kế toán đo những gì đã xảy ra. Tài chính dùng thông tin đó để quyết định bước tiếp theo. Phân bổ nguồn lực toàn xã hội là kinh tế học.'],
    ['If households suddenly save much more, what happens to interest rates, other things equal?', 'Nếu các hộ gia đình đột ngột tiết kiệm nhiều hơn, lãi suất sẽ thế nào (các yếu tố khác không đổi)?',
      [['They rise, because banks get busier.', 'Tăng, vì ngân hàng bận hơn.'],
       ['They fall, because the supply of loanable money rises.', 'Giảm, vì cung vốn cho vay tăng.'],
       ['They stay the same; savings don’t affect rates.', 'Không đổi; tiết kiệm không ảnh hưởng lãi suất.'],
       ['They become negative immediately.', 'Lập tức chuyển sang âm.']], 1,
      'More saving shifts the supply of loanable funds right. With demand unchanged, the price of money, the interest rate, falls.', 'Tiết kiệm nhiều hơn làm đường cung vốn vay dịch phải. Cầu không đổi thì giá của tiền, tức lãi suất, giảm.'],
    ['The bakery’s lending rate rises to 17%. The oven still adds 80m/year on 500m. Should it borrow?', 'Lãi vay tăng lên 17%. Lò vẫn mang lại 80tr/năm trên 500tr. Có nên vay không?',
      [['Yes: profit is still 80m.', 'Có: lợi nhuận vẫn là 80tr.'],
       ['No: interest is 85m, more than the 80m gain.', 'Không: lãi vay 85tr, lớn hơn 80tr lợi nhuận.'],
       ['Yes: the bank earns a bigger spread.', 'Có: ngân hàng được chênh lệch lớn hơn.'],
       ['It doesn’t matter: rates don’t affect investment.', 'Không quan trọng: lãi suất không ảnh hưởng đầu tư.']], 1,
      '500m × 17% = 85m > 80m. The oven returns 16%, less than the 17% cost of money, so it destroys value. Higher rates kill marginal projects, which is how central banks cool an economy.', '500tr × 17% = 85tr > 80tr. Lò sinh lời 16%, thấp hơn chi phí vốn 17%, nên phá hủy giá trị. Lãi suất cao loại bỏ các dự án biên, đó là cách ngân hàng trung ương hạ nhiệt nền kinh tế.'],
    ['Which is the weakest promise about future money?', 'Đâu là lời hứa yếu nhất về tiền tương lai?',
      [['A bank deposit', 'Tiền gửi ngân hàng'], ['A government bond', 'Trái phiếu chính phủ'], ['A share of common stock', 'Cổ phiếu phổ thông'], ['A fixed-rate loan you made', 'Khoản cho vay lãi cố định']], 2,
      'A shareholder gets only what is left after everyone else is paid, with nothing guaranteed. That is why stocks must offer higher expected returns.', 'Cổ đông chỉ nhận phần còn lại sau khi mọi người khác đã được trả, không có gì đảm bảo. Vì vậy cổ phiếu phải hứa hẹn lợi suất kỳ vọng cao hơn.']
  ],
  task: [
    'Find three real financial transactions around you: family savings, a relative’s motorbike loan, a shop buying stock on credit. For each, write who supplies money today, who uses it and for what, what the promise is, whether there is an intermediary, and which problem (time, risk, trust) is most visible.',
    'Tìm ba giao dịch tài chính thật quanh em: tiền tiết kiệm của gia đình, khoản vay mua xe của người thân, cửa hàng nhập hàng trả chậm. Với mỗi giao dịch, ghi ai cung cấp tiền hôm nay, ai dùng và dùng vào việc gì, lời hứa là gì, có trung gian không, và vấn đề nào (thời gian, rủi ro, niềm tin) thể hiện rõ nhất.'],
  sum: [
    ['Finance exists because money and productive opportunities sit in different hands at different times.', 'Tài chính tồn tại vì tiền và cơ hội sử dụng tiền nằm ở những người khác nhau, vào những thời điểm khác nhau.'],
    ['Time, risk and trust make moving money hard.', 'Thời gian, rủi ro và niềm tin khiến việc chuyển tiền trở nên khó.'],
    ['Every financial product is a promise about future money.', 'Mọi sản phẩm tài chính là một lời hứa về tiền tương lai.'],
    ['An investment creates value when its return beats its cost of capital.', 'Khoản đầu tư tạo giá trị khi lợi suất vượt chi phí vốn.']
  ],
  tool: 'spread'
};

L.m1l2 = {
  min: 50,
  obj: [
    ['Trace how money flows between households, firms, government and the financial sector.', 'Lần theo dòng tiền giữa hộ gia đình, doanh nghiệp, chính phủ và khu vực tài chính.'],
    ['Distinguish surplus units from deficit units.', 'Phân biệt đơn vị thặng dư và đơn vị thâm hụt.'],
    ['Explain direct vs indirect finance and why most money goes the indirect route.', 'Giải thích tài chính trực tiếp và gián tiếp, và vì sao phần lớn tiền đi đường gián tiếp.']
  ],
  intro: [
    'In AP Macro you may have seen the circular flow: households sell labour to firms and spend their wages on firms’ products. Finance adds one more pipe: the money households don’t spend. Where it goes decides which factories get built.',
    'Trong kinh tế vĩ mô có mô hình dòng luân chuyển: hộ gia đình bán sức lao động cho doanh nghiệp và tiêu tiền lương vào sản phẩm của doanh nghiệp. Tài chính thêm một đường ống nữa: phần tiền hộ gia đình không tiêu. Nó đi đâu sẽ quyết định nhà máy nào được xây.'],
  sec: [
    ['Surplus and deficit units', 'Đơn vị thặng dư và thâm hụt',
     '<p>A <b>surplus unit</b> earns more than it spends right now: a salaried family, a profitable company with spare cash. A <b>deficit unit</b> wants to spend more than it has: a young couple buying a flat, a startup building a factory, a government building a metro line. The financial system’s job is to move savings from surplus units to deficit units.</p><p>Note that households are usually net savers and firms and governments are usually net borrowers, but any one person can switch: you are a deficit unit when you take a student loan and a surplus unit when you start earning.</p>',
     '<p><b>Đơn vị thặng dư</b> đang kiếm nhiều hơn chi tiêu: gia đình có lương ổn định, công ty có lãi và dư tiền. <b>Đơn vị thâm hụt</b> muốn chi nhiều hơn mình có: cặp vợ chồng trẻ mua căn hộ, startup xây nhà máy, chính phủ làm tuyến metro. Nhiệm vụ của hệ thống tài chính là đưa tiền tiết kiệm từ đơn vị thặng dư sang đơn vị thâm hụt.</p><p>Hộ gia đình thường là người tiết kiệm ròng, còn doanh nghiệp và chính phủ thường là người vay ròng, nhưng một người có thể đổi vai: em là đơn vị thâm hụt khi vay tiền đi học và thành đơn vị thặng dư khi bắt đầu đi làm.</p>'],
    ['Direct finance', 'Tài chính trực tiếp',
     '<p>In <b>direct finance</b>, the saver buys a claim straight from the user of funds: you buy a newly issued corporate bond or newly issued shares. You hold the company’s promise yourself. Investment banks help arrange these deals, but they don’t stand between you and the company once it’s done.</p><p>Direct finance works well for large, well-known borrowers such as Apple or the Vietnamese government, because investors can easily find information about them.</p>',
     '<p>Trong <b>tài chính trực tiếp</b>, người tiết kiệm mua quyền đòi tiền thẳng từ người dùng vốn: em mua trái phiếu doanh nghiệp hoặc cổ phiếu mới phát hành. Em tự nắm lời hứa của công ty. Ngân hàng đầu tư giúp thu xếp giao dịch, nhưng sau đó không đứng giữa em và công ty.</p><p>Tài chính trực tiếp phù hợp với những bên vay lớn, nổi tiếng như Apple hay Chính phủ Việt Nam, vì nhà đầu tư dễ tìm thông tin về họ.</p>'],
    ['Indirect finance', 'Tài chính gián tiếp',
     '<p>In <b>indirect finance</b>, an intermediary sits in the middle. You deposit money at a bank; the bank lends it to a bakery you have never heard of. Your claim is on the bank, not the bakery. The bank earns a spread for doing three things you can’t do alone: <b>screening</b> borrowers, <b>pooling</b> many small deposits into big loans, and <b>diversifying</b> across thousands of loans so one default doesn’t hurt you.</p><p>Small businesses can’t issue bonds: nobody would buy them because nobody knows them. That is why, especially in bank-centred economies like Vietnam, most business funding flows through banks.</p>',
     '<p>Trong <b>tài chính gián tiếp</b>, có trung gian đứng giữa. Em gửi tiền vào ngân hàng; ngân hàng cho một tiệm bánh em chưa từng nghe tên vay. Quyền đòi tiền của em là với ngân hàng, không phải tiệm bánh. Ngân hàng kiếm chênh lệch nhờ làm ba việc em không tự làm được: <b>thẩm định</b> người vay, <b>gom</b> nhiều khoản gửi nhỏ thành khoản vay lớn, và <b>đa dạng hóa</b> trên hàng nghìn khoản vay để một khoản vỡ nợ không ảnh hưởng đến em.</p><p>Doanh nghiệp nhỏ không phát hành trái phiếu được: không ai mua vì không ai biết họ. Vì vậy, nhất là ở nền kinh tế dựa vào ngân hàng như Việt Nam, phần lớn vốn doanh nghiệp đi qua ngân hàng.</p>'],
    ['Where the government fits', 'Chính phủ nằm ở đâu',
     '<p>Governments collect taxes and spend on schools, roads and salaries. When spending exceeds taxes, they run a <b>budget deficit</b> and borrow by selling government bonds. In the US these are Treasury securities; in Vietnam the State Treasury issues government bonds. Because governments compete with companies for the same savings, heavy government borrowing can push interest rates up. Economists call this <b>crowding out</b>.</p>',
     '<p>Chính phủ thu thuế và chi cho trường học, đường sá, lương. Khi chi vượt thu, chính phủ <b>thâm hụt ngân sách</b> và vay bằng cách bán trái phiếu chính phủ. Ở Mỹ đó là trái phiếu Kho bạc; ở Việt Nam, Kho bạc Nhà nước phát hành trái phiếu chính phủ. Vì chính phủ cạnh tranh với doanh nghiệp cho cùng một nguồn tiết kiệm, chính phủ vay nhiều có thể đẩy lãi suất lên. Các nhà kinh tế gọi đó là <b>hiệu ứng lấn át</b>.</p>']
  ],
  vocab: [
    ['Surplus unit', 'Đơn vị thặng dư', 'An economic actor with more funds than it currently needs.', 'Chủ thể có nhiều tiền hơn nhu cầu hiện tại.'],
    ['Deficit unit', 'Đơn vị thâm hụt', 'An actor that needs more funds than it has.', 'Chủ thể cần nhiều tiền hơn mình có.'],
    ['Direct finance', 'Tài chính trực tiếp', 'Savers buy securities straight from borrowers.', 'Người tiết kiệm mua chứng khoán trực tiếp từ người vay.'],
    ['Indirect finance', 'Tài chính gián tiếp', 'Funds flow through an intermediary such as a bank.', 'Tiền đi qua trung gian như ngân hàng.'],
    ['Budget deficit', 'Thâm hụt ngân sách', 'Government spending above tax revenue in a period.', 'Chi tiêu chính phủ vượt thu thuế trong một kỳ.'],
    ['Crowding out', 'Hiệu ứng lấn át', 'Government borrowing raising rates and reducing private investment.', 'Chính phủ vay nhiều đẩy lãi suất lên, làm giảm đầu tư tư nhân.']
  ],
  ex: ['A metro line and a café on the same day', 'Một tuyến metro và một quán cà phê trong cùng ngày',
    '<p>On the same day, the Vietnamese government might sell bonds to fund infrastructure (direct finance: insurers and banks buy the bonds), while a café owner in District 3 takes a bank loan for a new espresso machine (indirect finance). Both draw on the same pool of national savings. If the government borrows heavily, banks may demand higher rates from the café.</p>',
    '<p>Trong cùng một ngày, Chính phủ có thể bán trái phiếu để làm hạ tầng (tài chính trực tiếp: công ty bảo hiểm và ngân hàng mua trái phiếu), còn chủ một quán cà phê ở Quận 3 vay ngân hàng mua máy pha mới (tài chính gián tiếp). Cả hai cùng dùng chung một bể tiết kiệm quốc gia. Nếu chính phủ vay nhiều, ngân hàng có thể đòi quán cà phê trả lãi cao hơn.</p>'],
  num: [
    '<p class="hyp">Hypothetical numbers.</p><p>You have 100m VND. Option A: lend directly to a mid-sized company by buying its bond at 10%. Option B: deposit at a bank at 5%. Suppose there is a 6% chance the company defaults and you recover only half your money.</p><div class="calc"><div>A if repaid (94%): 100m × 1.10 = 110m</div><div>A if default (6%): 50m</div><div>A expected value = 0.94 × 110 + 0.06 × 50 = 103.4 + 3 = <b>106.4m</b></div><div>B: 100m × 1.05 = <b>105m</b>, almost certain</div></div><p>A pays 1.4m more on average but you carry the default risk yourself. The bank route pays less because the bank absorbs risk by spreading it over thousands of loans.</p>',
    '<p class="hyp">Số liệu giả định.</p><p>Em có 100 triệu. Cách A: cho một công ty quy mô vừa vay trực tiếp bằng cách mua trái phiếu lãi 10%. Cách B: gửi ngân hàng 5%. Giả sử công ty có 6% khả năng vỡ nợ và em chỉ thu hồi một nửa.</p><div class="calc"><div>A nếu được trả (94%): 100tr × 1,10 = 110tr</div><div>A nếu vỡ nợ (6%): 50tr</div><div>Giá trị kỳ vọng A = 0,94 × 110 + 0,06 × 50 = 103,4 + 3 = <b>106,4tr</b></div><div>B: 100tr × 1,05 = <b>105tr</b>, gần như chắc chắn</div></div><p>A trung bình được thêm 1,4tr nhưng em tự gánh rủi ro vỡ nợ. Ngân hàng trả ít hơn vì họ hấp thụ rủi ro bằng cách chia nhỏ trên hàng nghìn khoản vay.</p>'],
  quiz: [
    ['You buy newly issued bonds directly from Vingroup. This is:', 'Em mua trái phiếu mới phát hành trực tiếp từ Vingroup. Đây là:',
      [['Indirect finance', 'Tài chính gián tiếp'], ['Direct finance', 'Tài chính trực tiếp'], ['A bank deposit', 'Tiền gửi ngân hàng'], ['Crowding out', 'Hiệu ứng lấn át']], 1,
      'You hold the company’s promise yourself with no bank in between.', 'Em trực tiếp nắm lời hứa của công ty, không có ngân hàng đứng giữa.'],
    ['Why can’t a small bakery usually raise money by issuing bonds?', 'Tại sao tiệm bánh nhỏ thường không thể huy động vốn bằng trái phiếu?',
      [['Bonds are illegal for small firms.', 'Trái phiếu bị cấm với doanh nghiệp nhỏ.'], ['Investors lack information to judge it, so a bank must screen it instead.', 'Nhà đầu tư thiếu thông tin để đánh giá, nên cần ngân hàng thẩm định.'], ['Bakeries never need capital.', 'Tiệm bánh không bao giờ cần vốn.'], ['Banks own all bakeries.', 'Ngân hàng sở hữu mọi tiệm bánh.']], 1,
      'It is an information problem. Banks specialise in screening and monitoring small borrowers.', 'Đó là vấn đề thông tin. Ngân hàng chuyên thẩm định và giám sát người vay nhỏ.'],
    ['Heavy government borrowing tends to:', 'Chính phủ vay nhiều có xu hướng:',
      [['Lower interest rates for everyone', 'Hạ lãi suất cho mọi người'], ['Raise rates and reduce some private investment', 'Đẩy lãi suất lên và làm giảm một phần đầu tư tư nhân'], ['Have no effect on companies', 'Không ảnh hưởng doanh nghiệp'], ['Increase household savings automatically', 'Tự động làm tăng tiết kiệm hộ gia đình']], 1,
      'More demand for loanable funds with the same supply raises the price of money. That is crowding out.', 'Cầu vốn vay tăng trong khi cung không đổi làm giá của tiền tăng. Đó là hiệu ứng lấn át.'],
    ['In the numerical example, why is the bond’s expected value 106.4m and not 110m?', 'Trong ví dụ, vì sao giá trị kỳ vọng của trái phiếu là 106,4tr chứ không phải 110tr?',
      [['Because of taxes', 'Vì thuế'], ['Because expected value weights the default outcome by its probability', 'Vì giá trị kỳ vọng tính cả kịch bản vỡ nợ theo xác suất của nó'], ['Because the bank takes a fee', 'Vì ngân hàng thu phí'], ['Because of inflation', 'Vì lạm phát']], 1,
      '0.94 × 110 + 0.06 × 50 = 106.4. The promised rate is not the expected return once default risk is counted.', '0,94 × 110 + 0,06 × 50 = 106,4. Lãi suất được hứa không phải lợi suất kỳ vọng khi đã tính rủi ro vỡ nợ.']
  ],
  task: [
    'Draw your own circular flow for Vietnam with four boxes (households, firms, government, banks and markets). Add at least six labelled arrows, and mark which arrows are direct finance and which are indirect.',
    'Tự vẽ sơ đồ dòng luân chuyển cho Việt Nam với bốn ô (hộ gia đình, doanh nghiệp, chính phủ, ngân hàng và thị trường). Thêm ít nhất sáu mũi tên có ghi chú, và đánh dấu mũi tên nào là tài chính trực tiếp, mũi tên nào là gián tiếp.'],
  sum: [
    ['Finance moves savings from surplus units to deficit units.', 'Tài chính chuyển tiền tiết kiệm từ đơn vị thặng dư sang đơn vị thâm hụt.'],
    ['Direct finance: you hold the borrower’s promise. Indirect: you hold the bank’s.', 'Trực tiếp: em giữ lời hứa của người vay. Gián tiếp: em giữ lời hứa của ngân hàng.'],
    ['Intermediaries earn a spread for screening, pooling and diversifying.', 'Trung gian kiếm chênh lệch nhờ thẩm định, gom vốn và đa dạng hóa.'],
    ['A promised rate is not an expected return once default risk is counted.', 'Lãi suất được hứa không phải lợi suất kỳ vọng khi tính rủi ro vỡ nợ.']
  ]
};

L.m1l3 = {
  min: 45,
  obj: [
    ['Distinguish personal, corporate and investment finance.', 'Phân biệt tài chính cá nhân, doanh nghiệp và đầu tư.'],
    ['Describe what the main finance jobs actually do day to day.', 'Mô tả các nghề tài chính chính thực sự làm gì hằng ngày.'],
    ['See the same decision from three angles.', 'Nhìn một quyết định từ ba góc độ.']
  ],
  intro: [
    'Finance is one logic applied from three seats: the household managing its own money, the company deciding what to fund, and the investor deciding which promises to buy.',
    'Tài chính là một logic áp dụng từ ba vị trí: hộ gia đình quản lý tiền của mình, công ty quyết định tài trợ cho cái gì, và nhà đầu tư quyết định mua lời hứa nào.'],
  sec: [
    ['Personal finance', 'Tài chính cá nhân',
     '<p>Budgeting, saving, borrowing, insurance and retirement for one person or family. The core questions: how much to spend now vs later, how much risk you can carry, and how to protect against bad events like illness or job loss.</p>',
     '<p>Lập ngân sách, tiết kiệm, vay, bảo hiểm và hưu trí cho một người hoặc gia đình. Câu hỏi cốt lõi: tiêu bao nhiêu bây giờ và để dành bao nhiêu, gánh được bao nhiêu rủi ro, và phòng vệ trước biến cố như ốm đau hay mất việc thế nào.</p>'],
    ['Corporate finance', 'Tài chính doanh nghiệp',
     '<p>Decisions inside a company, led by the CFO. Three big questions: <b>investment</b> (which projects to fund), <b>financing</b> (debt or equity), and <b>payout</b> (keep profits or return them through dividends and buybacks). Apple’s 2013 bond deal was a financing decision.</p>',
     '<p>Các quyết định bên trong công ty, do Giám đốc tài chính (CFO) dẫn dắt. Ba câu hỏi lớn: <b>đầu tư</b> (tài trợ dự án nào), <b>tài trợ</b> (vay nợ hay vốn chủ), và <b>phân phối</b> (giữ lại lợi nhuận hay trả cho cổ đông qua cổ tức và mua lại cổ phiếu). Đợt trái phiếu 2013 của Apple là một quyết định tài trợ.</p>'],
    ['Investment finance', 'Tài chính đầu tư',
     '<p>The view from the buyer of financial assets: pension funds, mutual funds, insurers, individuals. They decide which stocks, bonds and other assets to hold, at what price, and how to combine them to balance risk and return.</p>',
     '<p>Góc nhìn của người mua tài sản tài chính: quỹ hưu trí, quỹ mở, công ty bảo hiểm, cá nhân. Họ quyết định nắm giữ cổ phiếu, trái phiếu nào, ở mức giá nào, và kết hợp ra sao để cân bằng rủi ro và lợi nhuận.</p>'],
    ['Who does what', 'Ai làm gì',
     '<p><b>Commercial bankers</b> lend to businesses and households. <b>Investment bankers</b> help companies raise capital and buy or sell other companies. <b>Asset managers</b> invest other people’s money. <b>Private equity</b> firms buy whole companies, improve them and sell them. <b>Equity research analysts</b> study companies and publish views on their value. <b>Corporate finance teams</b> inside companies run budgets and forecasts. The same skill sits under all of them: turning financial statements and assumptions into a judgement about value.</p>',
     '<p><b>Chuyên viên ngân hàng thương mại</b> cho doanh nghiệp và hộ gia đình vay. <b>Chuyên viên ngân hàng đầu tư</b> giúp công ty huy động vốn và mua bán công ty khác. <b>Nhà quản lý tài sản</b> đầu tư tiền của người khác. <b>Quỹ đầu tư tư nhân (PE)</b> mua cả công ty, cải thiện rồi bán lại. <b>Chuyên viên phân tích cổ phiếu</b> nghiên cứu công ty và đưa ra nhận định về giá trị. <b>Bộ phận tài chính doanh nghiệp</b> lập ngân sách và dự báo. Tất cả đều dùng chung một kỹ năng: biến báo cáo tài chính và giả định thành nhận định về giá trị.</p>']
  ],
  vocab: [
    ['Personal finance', 'Tài chính cá nhân', 'Managing an individual’s or family’s money.', 'Quản lý tiền của cá nhân hoặc gia đình.'],
    ['Corporate finance', 'Tài chính doanh nghiệp', 'How companies invest, fund themselves and pay out profit.', 'Cách công ty đầu tư, huy động vốn và phân phối lợi nhuận.'],
    ['CFO', 'Giám đốc tài chính', 'The executive responsible for a company’s finances.', 'Người điều hành phụ trách tài chính công ty.'],
    ['Asset management', 'Quản lý tài sản', 'Investing money on behalf of clients for a fee.', 'Đầu tư tiền thay cho khách hàng và thu phí.'],
    ['Share buyback', 'Mua lại cổ phiếu', 'A company buying its own shares back from investors.', 'Công ty mua lại cổ phiếu của chính mình từ nhà đầu tư.'],
    ['Private equity', 'Quỹ đầu tư tư nhân', 'Firms that buy and improve private companies, then sell them.', 'Quỹ mua và cải thiện công ty tư nhân rồi bán lại.']
  ],
  ex: ['One decision, three seats', 'Một quyết định, ba vị trí',
    '<p>Microsoft decides to spend billions on AI data centres. To the <b>CFO</b> it is an investment decision: will the return beat the cost of capital? To a <b>pension fund</b> holding Microsoft shares it is an investment-finance question: does this make the shares worth more or less? To a <b>Microsoft employee</b> with shares in their retirement account it is personal finance: how much of my savings should depend on one company?</p>',
    '<p>Microsoft quyết định chi hàng tỷ USD cho trung tâm dữ liệu AI. Với <b>CFO</b>, đó là quyết định đầu tư: lợi suất có vượt chi phí vốn không? Với <b>quỹ hưu trí</b> đang nắm cổ phiếu Microsoft, đó là câu hỏi tài chính đầu tư: điều này làm cổ phiếu đáng giá hơn hay kém đi? Với <b>nhân viên Microsoft</b> có cổ phiếu trong tài khoản hưu trí, đó là tài chính cá nhân: bao nhiêu phần tiết kiệm của mình nên phụ thuộc vào một công ty?</p>'],
  num: [
    '<p class="hyp">Hypothetical numbers.</p><p>A young professional in Ho Chi Minh City earns 25m VND a month after tax and follows a 50/30/20 budget: needs / wants / savings.</p><div class="calc"><div>Needs (rent, food, transport) = 25m × 50% = <b>12.5m</b></div><div>Wants = 25m × 30% = <b>7.5m</b></div><div>Savings = 25m × 20% = <b>5m/month</b>, or 60m/year</div><div>An emergency fund of 6 months of needs = 6 × 12.5m = <b>75m</b>, reached in 15 months</div></div><p>The same logic a CFO uses (fund essentials, then growth, keep a cash buffer) applies at home.</p>',
    '<p class="hyp">Số liệu giả định.</p><p>Một người trẻ ở TP.HCM thu nhập 25 triệu/tháng sau thuế và áp dụng ngân sách 50/30/20: thiết yếu / mong muốn / tiết kiệm.</p><div class="calc"><div>Thiết yếu (nhà, ăn, đi lại) = 25tr × 50% = <b>12,5tr</b></div><div>Mong muốn = 25tr × 30% = <b>7,5tr</b></div><div>Tiết kiệm = 25tr × 20% = <b>5tr/tháng</b>, tức 60tr/năm</div><div>Quỹ khẩn cấp bằng 6 tháng chi thiết yếu = 6 × 12,5tr = <b>75tr</b>, đạt được sau 15 tháng</div></div><p>Logic CFO dùng (chi thiết yếu trước, rồi tăng trưởng, luôn giữ đệm tiền mặt) cũng áp dụng ở nhà.</p>'],
  quiz: [
    ['A company deciding between a bank loan and issuing new shares is making a:', 'Công ty cân nhắc giữa vay ngân hàng và phát hành cổ phiếu mới là đang ra quyết định:',
      [['Payout decision', 'Phân phối'], ['Financing decision', 'Tài trợ'], ['Personal finance decision', 'Tài chính cá nhân'], ['Accounting entry', 'Bút toán kế toán']], 1,
      'Choosing between debt and equity is the financing question.', 'Chọn giữa nợ và vốn chủ là câu hỏi tài trợ.'],
    ['Which role helps a company raise capital and advises on buying other companies?', 'Vai trò nào giúp công ty huy động vốn và tư vấn mua công ty khác?',
      [['Commercial banker', 'Ngân hàng thương mại'], ['Investment banker', 'Ngân hàng đầu tư'], ['Auditor', 'Kiểm toán viên'], ['Insurance agent', 'Đại lý bảo hiểm']], 1,
      'Capital raising and M&A advice are the core of investment banking.', 'Huy động vốn và tư vấn M&A là cốt lõi của ngân hàng đầu tư.'],
    ['A share buyback is part of which corporate decision?', 'Mua lại cổ phiếu thuộc quyết định nào của doanh nghiệp?',
      [['Investment', 'Đầu tư'], ['Payout', 'Phân phối'], ['Hiring', 'Tuyển dụng'], ['Pricing', 'Định giá sản phẩm']], 1,
      'Buybacks, like dividends, return cash to shareholders.', 'Mua lại cổ phiếu, giống cổ tức, trả tiền cho cổ đông.'],
    ['With 25m income and 20% saved, how long to build a 75m emergency fund?', 'Thu nhập 25tr, tiết kiệm 20%, mất bao lâu để có quỹ khẩn cấp 75tr?',
      [['3 months', '3 tháng'], ['10 months', '10 tháng'], ['15 months', '15 tháng'], ['30 months', '30 tháng']], 2,
      '20% of 25m is 5m per month; 75m ÷ 5m = 15 months.', '20% của 25tr là 5tr/tháng; 75tr ÷ 5tr = 15 tháng.']
  ],
  task: [
    'Pick one listed company you know (Apple, Vinamilk, FPT). Find one recent decision it made and describe it from the CFO’s seat, an investor’s seat, and an employee’s seat, in three short paragraphs.',
    'Chọn một công ty niêm yết em biết (Apple, Vinamilk, FPT). Tìm một quyết định gần đây của công ty và mô tả nó từ góc nhìn CFO, nhà đầu tư, và nhân viên, trong ba đoạn ngắn.'],
  sum: [
    ['Personal, corporate and investment finance share one logic from three seats.', 'Tài chính cá nhân, doanh nghiệp và đầu tư dùng chung một logic từ ba vị trí.'],
    ['Corporate finance asks: invest in what, funded how, paid out how.', 'Tài chính doanh nghiệp hỏi: đầu tư gì, tài trợ thế nào, phân phối ra sao.'],
    ['Every finance job turns numbers and assumptions into a judgement about value.', 'Mọi nghề tài chính đều biến con số và giả định thành nhận định về giá trị.']
  ]
};

L.m2l1 = {
  min: 40,
  obj: [
    ['State the three functions of money.', 'Nêu ba chức năng của tiền.'],
    ['Explain why barter fails using a calculation.', 'Giải thích vì sao trao đổi hàng lấy hàng thất bại bằng phép tính.'],
    ['Distinguish commodity money, fiat money, cash and bank deposits.', 'Phân biệt tiền hàng hóa, tiền pháp định, tiền mặt và tiền gửi.']
  ],
  intro: [
    'A 500,000 VND note costs a few hundred dong to print. It is worth 500,000 VND only because everyone expects everyone else to accept it. Money is a shared belief that happens to be extremely useful.',
    'Tờ 500.000 đồng tốn vài trăm đồng để in. Nó đáng 500.000 đồng chỉ vì ai cũng tin người khác sẽ chấp nhận nó. Tiền là một niềm tin chung, và niềm tin đó cực kỳ hữu ích.'],
  sec: [
    ['Three functions', 'Ba chức năng',
     '<p><b>Medium of exchange:</b> you can trade it for anything, so you don’t need to find someone who wants exactly what you have. <b>Unit of account:</b> prices are quoted in it, so you can compare a phone and a motorbike in one number. <b>Store of value:</b> you can keep it and spend later, though inflation slowly erodes it.</p>',
     '<p><b>Phương tiện trao đổi:</b> đổi được lấy mọi thứ, nên không cần tìm người muốn đúng món em có. <b>Đơn vị đo lường giá trị:</b> giá được niêm yết bằng nó, nên so sánh điện thoại và xe máy bằng một con số. <b>Phương tiện cất trữ giá trị:</b> giữ lại để tiêu sau, dù lạm phát làm nó hao mòn dần.</p>'],
    ['Why barter fails', 'Vì sao hàng đổi hàng thất bại',
     '<p>Barter requires a <b>double coincidence of wants</b>: the farmer with rice must find a tailor who wants rice and has a shirt. It also needs a price for every pair of goods. With money, each good needs only one price.</p>',
     '<p>Hàng đổi hàng đòi hỏi <b>sự trùng khớp nhu cầu kép</b>: nông dân có gạo phải tìm được thợ may vừa muốn gạo vừa có áo. Nó còn cần một mức giá cho mỗi cặp hàng hóa. Có tiền, mỗi hàng hóa chỉ cần một giá.</p>'],
    ['Commodity vs fiat money', 'Tiền hàng hóa và tiền pháp định',
     '<p><b>Commodity money</b> has value as a thing: gold, silver. <b>Fiat money</b> has value because the government declares it legal tender and people trust the issuer: the US dollar since 1971, the Vietnamese dong. Fiat money lets a central bank adjust the money supply, which is powerful and, if abused, dangerous.</p>',
     '<p><b>Tiền hàng hóa</b> có giá trị tự thân: vàng, bạc. <b>Tiền pháp định</b> có giá trị vì nhà nước quy định là phương tiện thanh toán hợp pháp và người dân tin nơi phát hành: đô la Mỹ từ năm 1971, đồng Việt Nam. Tiền pháp định cho phép ngân hàng trung ương điều chỉnh cung tiền, một công cụ mạnh và nguy hiểm nếu bị lạm dụng.</p>'],
    ['Cash, currency and deposits', 'Tiền mặt, tiền tệ và tiền gửi',
     '<p><b>Currency</b> is the notes and coins of a country. <b>Cash</b> in everyday speech is currency in your hand, but in company accounts “cash” also includes bank balances. Most money today is not paper at all: it is <b>bank deposits</b>, numbers in bank systems that you move with a QR code or a card.</p>',
     '<p><b>Tiền tệ</b> là tiền giấy và tiền xu của một quốc gia. <b>Tiền mặt</b> trong đời thường là tiền cầm trong tay, nhưng trong sổ sách công ty, “tiền” còn gồm số dư ngân hàng. Phần lớn tiền ngày nay không phải giấy: nó là <b>tiền gửi ngân hàng</b>, những con số trong hệ thống ngân hàng mà em chuyển bằng mã QR hay thẻ.</p>']
  ],
  vocab: [
    ['Medium of exchange', 'Phương tiện trao đổi', 'Accepted in exchange for goods and services.', 'Được chấp nhận để đổi lấy hàng hóa, dịch vụ.'],
    ['Unit of account', 'Đơn vị đo lường giá trị', 'The common measure in which prices are stated.', 'Thước đo chung để niêm yết giá.'],
    ['Store of value', 'Phương tiện cất trữ giá trị', 'Holds purchasing power over time.', 'Giữ sức mua theo thời gian.'],
    ['Double coincidence of wants', 'Trùng khớp nhu cầu kép', 'Each party has what the other wants: needed for barter.', 'Mỗi bên có đúng thứ bên kia cần: điều kiện của hàng đổi hàng.'],
    ['Fiat money', 'Tiền pháp định', 'Money with value by government decree and trust.', 'Tiền có giá trị nhờ quy định của nhà nước và niềm tin.'],
    ['Legal tender', 'Phương tiện thanh toán hợp pháp', 'Money that must be accepted for debts by law.', 'Tiền mà luật buộc phải chấp nhận khi thanh toán nợ.']
  ],
  ex: ['When a store of value breaks', 'Khi chức năng cất trữ giá trị đổ vỡ',
    '<p>In Zimbabwe in the late 2000s, hyperinflation made prices double in days. The currency stopped working as a store of value, then as a unit of account, and finally people switched to US dollars and South African rand for trade. Money fails in that order: storage first, exchange last.</p>',
    '<p>Ở Zimbabwe cuối những năm 2000, siêu lạm phát khiến giá cả tăng gấp đôi chỉ trong vài ngày. Đồng tiền mất chức năng cất trữ giá trị, rồi mất chức năng đơn vị đo lường, và cuối cùng người dân chuyển sang dùng đô la Mỹ và rand Nam Phi để giao dịch. Tiền đổ vỡ theo thứ tự đó: cất trữ trước, trao đổi sau cùng.</p>'],
  num: [
    '<p>How many prices does an economy need? With <i>n</i> goods and barter, every pair needs its own exchange rate:</p><div class="calc"><div>Barter prices = n(n − 1) ÷ 2</div><div>n = 100 goods: 100 × 99 ÷ 2 = <b>4,950 prices</b></div><div>With money: one price per good = <b>100 prices</b> (or 99 if money is one of the goods)</div></div><p>Money as a unit of account cuts the information burden by a factor of about 50 here. That is why every society invents it.</p>',
    '<p>Một nền kinh tế cần bao nhiêu giá? Với <i>n</i> hàng hóa và hàng đổi hàng, mỗi cặp cần một tỷ lệ trao đổi riêng:</p><div class="calc"><div>Số giá khi đổi hàng = n(n − 1) ÷ 2</div><div>n = 100 hàng: 100 × 99 ÷ 2 = <b>4.950 giá</b></div><div>Có tiền: mỗi hàng một giá = <b>100 giá</b> (hoặc 99 nếu tiền là một trong các hàng)</div></div><p>Tiền với vai trò đơn vị đo lường giảm gánh nặng thông tin khoảng 50 lần ở đây. Đó là lý do xã hội nào cũng phát minh ra tiền.</p>'],
  quiz: [
    ['A café lists its menu in VND. Which function of money is this?', 'Quán cà phê niêm yết thực đơn bằng VND. Đây là chức năng nào?',
      [['Medium of exchange', 'Phương tiện trao đổi'], ['Unit of account', 'Đơn vị đo lường giá trị'], ['Store of value', 'Cất trữ giá trị'], ['Legal tender', 'Thanh toán hợp pháp']], 1,
      'Quoting prices is the unit-of-account function. Paying is medium of exchange.', 'Niêm yết giá là chức năng đơn vị đo lường. Trả tiền mới là phương tiện trao đổi.'],
    ['With 20 goods and barter, how many exchange rates are needed?', 'Với 20 hàng hóa và hàng đổi hàng, cần bao nhiêu tỷ lệ trao đổi?',
      [['20', '20'], ['190', '190'], ['380', '380'], ['400', '400']], 1,
      '20 × 19 ÷ 2 = 190.', '20 × 19 ÷ 2 = 190.'],
    ['Why does fiat money have value?', 'Vì sao tiền pháp định có giá trị?',
      [['It is backed by gold', 'Được bảo đảm bằng vàng'], ['Law and shared trust in the issuer', 'Pháp luật và niềm tin chung vào nơi phát hành'], ['Paper is scarce', 'Giấy khan hiếm'], ['Banks print it freely', 'Ngân hàng tự do in']], 1,
      'Modern currencies are not convertible to gold. Their value rests on legal tender status and trust.', 'Tiền hiện đại không đổi được ra vàng. Giá trị dựa trên tư cách thanh toán hợp pháp và niềm tin.'],
    ['During hyperinflation, which function usually breaks first?', 'Khi siêu lạm phát, chức năng nào thường đổ vỡ đầu tiên?',
      [['Store of value', 'Cất trữ giá trị'], ['Medium of exchange', 'Phương tiện trao đổi'], ['Unit of account', 'Đơn vị đo lường'], ['None', 'Không chức năng nào']], 0,
      'People stop holding money first because it loses value fast; they keep spending it for a while longer.', 'Người dân ngừng giữ tiền trước vì nó mất giá nhanh; họ vẫn tiêu nó thêm một thời gian.']
  ],
  task: [
    'For one day, note every payment your family makes and how (cash, card, QR transfer). What share was physical currency? Write two sentences on what that says about what “money” really is today.',
    'Trong một ngày, ghi lại mọi khoản thanh toán của gia đình và hình thức (tiền mặt, thẻ, chuyển khoản QR). Bao nhiêu phần là tiền giấy? Viết hai câu về điều đó nói gì về bản chất của “tiền” ngày nay.'],
  sum: [
    ['Money is a medium of exchange, unit of account and store of value.', 'Tiền là phương tiện trao đổi, đơn vị đo lường và cất trữ giá trị.'],
    ['Barter needs n(n−1)/2 prices; money needs about n.', 'Hàng đổi hàng cần n(n−1)/2 giá; có tiền chỉ cần khoảng n.'],
    ['Fiat money rests on law and trust; most money today is bank deposits.', 'Tiền pháp định dựa trên luật và niềm tin; phần lớn tiền ngày nay là tiền gửi ngân hàng.']
  ]
};

L.m2l2 = {
  min: 50,
  obj: [
    ['Define inflation, deflation and purchasing power.', 'Định nghĩa lạm phát, giảm phát và sức mua.'],
    ['Calculate the loss of purchasing power over several years.', 'Tính mức mất sức mua qua nhiều năm.'],
    ['Convert nominal returns into real returns.', 'Chuyển lợi suất danh nghĩa thành lợi suất thực.']
  ],
  intro: [
    'A bowl of phở that cost 30,000 VND a decade ago costs noticeably more today. The phở didn’t get bigger. Each dong buys less. That is inflation, and it is the silent tax on anyone holding cash.',
    'Tô phở từng giá 30.000 đồng mười năm trước giờ đắt hơn hẳn. Tô phở không to hơn. Mỗi đồng mua được ít hơn. Đó là lạm phát, và nó là khoản thuế âm thầm với bất kỳ ai giữ tiền mặt.'],
  sec: [
    ['Inflation and purchasing power', 'Lạm phát và sức mua',
     '<p><b>Inflation</b> is a sustained rise in the general price level, usually measured by the <b>Consumer Price Index (CPI)</b>, the cost of a fixed basket of goods. <b>Purchasing power</b> is how much a unit of money buys. When inflation is 4%, purchasing power falls: 100 dong next year buys what about 96.2 dong buys today.</p><p><b>Deflation</b> is a falling price level. It sounds nice but is dangerous: people delay purchases waiting for lower prices, firms cut output, and the real burden of debt grows.</p>',
     '<p><b>Lạm phát</b> là sự tăng liên tục của mặt bằng giá chung, thường đo bằng <b>chỉ số giá tiêu dùng (CPI)</b>, tức chi phí của một giỏ hàng cố định. <b>Sức mua</b> là lượng hàng một đơn vị tiền mua được. Khi lạm phát 4%, sức mua giảm: 100 đồng năm sau chỉ mua được lượng hàng mà khoảng 96,2 đồng mua được hôm nay.</p><p><b>Giảm phát</b> là mặt bằng giá giảm. Nghe có vẻ tốt nhưng nguy hiểm: người dân trì hoãn mua sắm chờ giá rẻ hơn, doanh nghiệp cắt sản lượng, và gánh nặng nợ thực tế tăng lên.</p>'],
    ['Nominal vs real', 'Danh nghĩa và thực',
     '<p>A <b>nominal</b> return is the number the bank shows you. A <b>real</b> return is how much more you can actually buy. The quick approximation, the Fisher relation:</p><p class="formula">real rate ≈ nominal rate − inflation</p><p>The exact version is (1 + nominal) ÷ (1 + inflation) − 1. A 5% deposit with 4% inflation earns about 1% real. A 3% deposit with 4% inflation <b>loses</b> purchasing power even though the balance grows.</p>',
     '<p>Lợi suất <b>danh nghĩa</b> là con số ngân hàng hiển thị. Lợi suất <b>thực</b> là em thực sự mua được thêm bao nhiêu. Công thức xấp xỉ, quan hệ Fisher:</p><p class="formula">lãi suất thực ≈ lãi suất danh nghĩa − lạm phát</p><p>Công thức chính xác: (1 + danh nghĩa) ÷ (1 + lạm phát) − 1. Gửi 5% khi lạm phát 4% chỉ lời khoảng 1% thực. Gửi 3% khi lạm phát 4% thì <b>mất</b> sức mua dù số dư vẫn tăng.</p>'],
    ['Who wins, who loses', 'Ai được, ai mất',
     '<p>Unexpected inflation transfers wealth from <b>lenders to borrowers</b>: you repay with dong that buy less. It hurts people on fixed incomes and those holding cash. That is why lenders demand higher nominal rates when they expect higher inflation, and why central banks try to keep inflation low and predictable. The US Federal Reserve targets 2% a year.</p>',
     '<p>Lạm phát ngoài dự kiến chuyển của cải từ <b>người cho vay sang người đi vay</b>: người vay trả nợ bằng đồng tiền mua được ít hơn. Nó gây thiệt cho người có thu nhập cố định và người giữ tiền mặt. Vì vậy người cho vay đòi lãi danh nghĩa cao hơn khi dự kiến lạm phát tăng, và ngân hàng trung ương cố giữ lạm phát thấp, dễ dự đoán. Cục Dự trữ Liên bang Mỹ đặt mục tiêu 2% mỗi năm.</p>']
  ],
  vocab: [
    ['Inflation', 'Lạm phát', 'Sustained rise in the general price level.', 'Mặt bằng giá chung tăng liên tục.'],
    ['Deflation', 'Giảm phát', 'Sustained fall in the general price level.', 'Mặt bằng giá chung giảm liên tục.'],
    ['Purchasing power', 'Sức mua', 'The quantity of goods a unit of money can buy.', 'Lượng hàng hóa một đơn vị tiền mua được.'],
    ['CPI', 'Chỉ số giá tiêu dùng', 'Index of the price of a typical consumer basket.', 'Chỉ số giá của giỏ hàng tiêu dùng điển hình.'],
    ['Nominal rate', 'Lãi suất danh nghĩa', 'The stated rate, not adjusted for inflation.', 'Lãi suất công bố, chưa điều chỉnh lạm phát.'],
    ['Real rate', 'Lãi suất thực', 'The rate after removing inflation.', 'Lãi suất sau khi loại bỏ lạm phát.']
  ],
  ex: ['Why lenders watch inflation forecasts', 'Vì sao người cho vay theo dõi dự báo lạm phát',
    '<p>When US inflation surged in 2021–2022, the Federal Reserve raised its policy rate sharply and mortgage rates rose quickly. Lenders were protecting their real return: if they expect prices to rise faster, they need a higher nominal rate to end up with the same real gain.</p>',
    '<p>Khi lạm phát Mỹ tăng vọt giai đoạn 2021–2022, Fed tăng lãi suất điều hành mạnh và lãi vay mua nhà tăng nhanh. Người cho vay đang bảo vệ lợi suất thực: nếu dự kiến giá tăng nhanh hơn, họ cần lãi danh nghĩa cao hơn để có cùng mức lời thực.</p>'],
  num: [
    '<p class="hyp">Hypothetical numbers.</p><p>You keep 100m VND in cash for 5 years while inflation runs at 4% a year.</p><div class="calc"><div>Price level after 5 years = 1.04<sup>5</sup> = 1.2167</div><div>Purchasing power = 100m ÷ 1.2167 = <b>82.2m in today’s dong</b></div><div>Loss = <b>17.8%</b> without touching the money</div></div><p>Now a 5% deposit with 4% inflation:</p><div class="calc"><div>Approx real rate = 5% − 4% = 1%</div><div>Exact = 1.05 ÷ 1.04 − 1 = <b>0.96%</b></div></div>',
    '<p class="hyp">Số liệu giả định.</p><p>Em giữ 100 triệu tiền mặt trong 5 năm, lạm phát 4%/năm.</p><div class="calc"><div>Mặt bằng giá sau 5 năm = 1,04<sup>5</sup> = 1,2167</div><div>Sức mua = 100tr ÷ 1,2167 = <b>82,2tr theo giá hôm nay</b></div><div>Mất = <b>17,8%</b> dù không tiêu đồng nào</div></div><p>Gửi tiết kiệm 5% khi lạm phát 4%:</p><div class="calc"><div>Lãi thực xấp xỉ = 5% − 4% = 1%</div><div>Chính xác = 1,05 ÷ 1,04 − 1 = <b>0,96%</b></div></div>'],
  quiz: [
    ['A deposit pays 3%; inflation is 5%. Your real return is roughly:', 'Tiền gửi lãi 3%, lạm phát 5%. Lợi suất thực khoảng:',
      [['+8%', '+8%'], ['+2%', '+2%'], ['−2%', '−2%'], ['0%', '0%']], 2,
      '3% − 5% ≈ −2%. Your balance grows but buys less.', '3% − 5% ≈ −2%. Số dư tăng nhưng mua được ít hơn.'],
    ['Unexpected high inflation tends to help:', 'Lạm phát cao ngoài dự kiến thường có lợi cho:',
      [['Lenders', 'Người cho vay'], ['Borrowers with fixed-rate loans', 'Người vay lãi suất cố định'], ['Retirees on fixed pensions', 'Người hưu trí lương cố định'], ['People holding cash', 'Người giữ tiền mặt']], 1,
      'Borrowers repay in dong that are worth less in real terms.', 'Người vay trả nợ bằng đồng tiền có giá trị thực thấp hơn.'],
    ['Why is deflation dangerous?', 'Vì sao giảm phát nguy hiểm?',
      [['Goods become too cheap to produce', 'Hàng quá rẻ để sản xuất'], ['People delay spending and real debt burdens rise', 'Người dân trì hoãn chi tiêu và gánh nặng nợ thực tăng'], ['Banks stop printing money', 'Ngân hàng ngừng in tiền'], ['It never is', 'Không hề nguy hiểm']], 1,
      'Waiting for lower prices cuts demand, and debts fixed in money become heavier in real terms.', 'Chờ giá giảm làm cầu sụt, và khoản nợ cố định bằng tiền trở nên nặng hơn về thực tế.'],
    ['With 4% inflation, 100m kept for 5 years is worth about how much in today’s money?', 'Lạm phát 4%, giữ 100tr trong 5 năm thì tương đương bao nhiêu theo giá hôm nay?',
      [['80m', '80tr'], ['82.2m', '82,2tr'], ['96m', '96tr'], ['120m', '120tr']], 1,
      '100 ÷ 1.04⁵ = 100 ÷ 1.2167 = 82.2.', '100 ÷ 1,04⁵ = 100 ÷ 1,2167 = 82,2.']
  ],
  task: [
    'Ask an older family member what three everyday items (phở, a litre of petrol, a movie ticket) cost 10 years ago and compare with today. Calculate the average annual price increase for each with (new ÷ old)^(1/10) − 1. Use the Lab to check.',
    'Hỏi người lớn trong nhà giá ba món quen thuộc (tô phở, một lít xăng, vé xem phim) 10 năm trước và so với hôm nay. Tính mức tăng giá trung bình mỗi năm của từng món bằng (giá mới ÷ giá cũ)^(1/10) − 1. Dùng Lab để kiểm tra.'],
  sum: [
    ['Inflation erodes purchasing power: divide by (1 + inflation)^years.', 'Lạm phát bào mòn sức mua: chia cho (1 + lạm phát)^số năm.'],
    ['Real rate ≈ nominal rate − inflation.', 'Lãi suất thực ≈ lãi suất danh nghĩa − lạm phát.'],
    ['Unexpected inflation moves wealth from lenders to borrowers.', 'Lạm phát ngoài dự kiến chuyển của cải từ người cho vay sang người vay.']
  ],
  tool: 'inflation'
};

L.m2l3 = {
  min: 50,
  obj: [
    ['Calculate simple and compound interest.', 'Tính lãi đơn và lãi kép.'],
    ['Explain why compounding grows faster over time.', 'Giải thích vì sao lãi kép tăng nhanh hơn theo thời gian.'],
    ['Use the Rule of 72 and compounding frequency.', 'Dùng quy tắc 72 và tần suất ghép lãi.']
  ],
  intro: [
    'Simple interest pays you on your original money. Compound interest pays you on your interest too. Over one year the difference is tiny. Over thirty years it is the difference between a comfortable retirement and a modest one.',
    'Lãi đơn trả lãi trên số tiền gốc. Lãi kép trả lãi trên cả tiền lãi. Trong một năm, chênh lệch rất nhỏ. Trong ba mươi năm, đó là khác biệt giữa một cuộc sống hưu trí thoải mái và một cuộc sống khiêm tốn.'],
  sec: [
    ['Simple interest', 'Lãi đơn',
     '<p class="formula">FV = PV × (1 + r × n)</p><p>PV is the starting amount (present value), r the annual rate, n the number of years. Interest each year is always PV × r. Growth is a straight line.</p>',
     '<p class="formula">FV = PV × (1 + r × n)</p><p>PV là số tiền ban đầu (hiện giá), r là lãi suất năm, n là số năm. Tiền lãi mỗi năm luôn bằng PV × r. Tăng trưởng là một đường thẳng.</p>'],
    ['Compound interest', 'Lãi kép',
     '<p class="formula">FV = PV × (1 + r)<sup>n</sup></p><p>Each year’s interest is added to the balance, and next year’s interest is earned on the bigger balance. Growth is a curve that gets steeper. The extra growth comes from <b>interest on interest</b>.</p>',
     '<p class="formula">FV = PV × (1 + r)<sup>n</sup></p><p>Tiền lãi mỗi năm được cộng vào số dư, và năm sau tính lãi trên số dư lớn hơn. Tăng trưởng là một đường cong ngày càng dốc. Phần tăng thêm đến từ <b>lãi trên lãi</b>.</p>'],
    ['Compounding frequency', 'Tần suất ghép lãi',
     '<p>If interest is added m times a year:</p><p class="formula">FV = PV × (1 + r/m)<sup>m × n</sup></p><p>Monthly compounding beats annual at the same stated rate. That is why banks quote an <b>APR</b> (stated annual rate) and an <b>effective annual rate</b> (EAR = (1 + r/m)<sup>m</sup> − 1), which shows what you actually earn or pay.</p>',
     '<p>Nếu lãi được nhập gốc m lần mỗi năm:</p><p class="formula">FV = PV × (1 + r/m)<sup>m × n</sup></p><p>Ghép lãi hằng tháng có lợi hơn hằng năm với cùng lãi suất công bố. Vì vậy ngân hàng công bố <b>APR</b> (lãi suất năm danh nghĩa) và <b>lãi suất hiệu dụng năm</b> (EAR = (1 + r/m)<sup>m</sup> − 1), cho biết em thực sự nhận hoặc trả bao nhiêu.</p>'],
    ['The Rule of 72', 'Quy tắc 72',
     '<p>Money roughly doubles in <b>72 ÷ rate</b> years. At 8% it doubles in about 9 years; at 6% in about 12. It is a mental shortcut, accurate for rates between about 4% and 12%.</p>',
     '<p>Tiền tăng gấp đôi sau khoảng <b>72 ÷ lãi suất</b> năm. Ở 8%, gấp đôi sau khoảng 9 năm; ở 6% sau khoảng 12 năm. Đây là mẹo tính nhẩm, khá chính xác với lãi suất trong khoảng 4% đến 12%.</p>']
  ],
  vocab: [
    ['Principal', 'Tiền gốc', 'The original amount invested or borrowed.', 'Số tiền ban đầu đầu tư hoặc vay.'],
    ['Simple interest', 'Lãi đơn', 'Interest only on principal.', 'Lãi chỉ tính trên tiền gốc.'],
    ['Compound interest', 'Lãi kép', 'Interest on principal plus accumulated interest.', 'Lãi tính trên gốc cộng lãi đã tích lũy.'],
    ['Compounding frequency', 'Tần suất ghép lãi', 'How often interest is added to the balance.', 'Số lần lãi được nhập vào gốc.'],
    ['APR', 'Lãi suất năm danh nghĩa', 'Stated annual rate before compounding effects.', 'Lãi suất năm công bố, chưa tính hiệu ứng ghép lãi.'],
    ['Effective annual rate (EAR)', 'Lãi suất hiệu dụng năm', 'The rate actually earned after compounding.', 'Lãi suất thực nhận sau khi ghép lãi.']
  ],
  ex: ['Warren Buffett’s timeline', 'Dòng thời gian của Warren Buffett',
    '<p>Warren Buffett began investing as a child, and the vast majority of his wealth was built after his 50s. That isn’t because he became more skilled late in life. It is because compounding needs time: the later years of the curve are where the steep part lives.</p>',
    '<p>Warren Buffett bắt đầu đầu tư từ nhỏ, và phần lớn tài sản của ông được tạo ra sau tuổi 50. Không phải vì ông giỏi hơn khi về già, mà vì lãi kép cần thời gian: phần dốc của đường cong nằm ở những năm sau.</p>'],
  num: [
    '<p class="hyp">Hypothetical numbers.</p><p>100m VND at 8% for 10 years.</p><div class="calc"><div>Simple: 100m × (1 + 0.08 × 10) = <b>180m</b></div><div>Annual compounding: 100m × 1.08<sup>10</sup> = <b>215.9m</b></div><div>Monthly compounding: 100m × (1 + 0.08/12)<sup>120</sup> = <b>222.0m</b></div><div>EAR monthly = (1 + 0.08/12)<sup>12</sup> − 1 = <b>8.30%</b></div><div>Rule of 72: 72 ÷ 8 = 9 years to double (exact: 9.01)</div></div><p>The 35.9m gap between simple and compound is interest on interest.</p>',
    '<p class="hyp">Số liệu giả định.</p><p>100 triệu với lãi 8% trong 10 năm.</p><div class="calc"><div>Lãi đơn: 100tr × (1 + 0,08 × 10) = <b>180tr</b></div><div>Lãi kép hằng năm: 100tr × 1,08<sup>10</sup> = <b>215,9tr</b></div><div>Lãi kép hằng tháng: 100tr × (1 + 0,08/12)<sup>120</sup> = <b>222,0tr</b></div><div>EAR hằng tháng = (1 + 0,08/12)<sup>12</sup> − 1 = <b>8,30%</b></div><div>Quy tắc 72: 72 ÷ 8 = 9 năm để gấp đôi (chính xác: 9,01)</div></div><p>Khoản chênh 35,9tr giữa lãi đơn và lãi kép chính là lãi trên lãi.</p>'],
  quiz: [
    ['50m at 10% simple interest for 3 years grows to:', '50tr lãi đơn 10% trong 3 năm thành:',
      [['55m', '55tr'], ['65m', '65tr'], ['66.55m', '66,55tr'], ['150m', '150tr']], 1,
      '50 × (1 + 0.1 × 3) = 65. Compound would give 66.55.', '50 × (1 + 0,1 × 3) = 65. Lãi kép sẽ là 66,55.'],
    ['At 6% a year, money roughly doubles in:', 'Với 6%/năm, tiền gấp đôi sau khoảng:',
      [['6 years', '6 năm'], ['9 years', '9 năm'], ['12 years', '12 năm'], ['18 years', '18 năm']], 2,
      '72 ÷ 6 = 12.', '72 ÷ 6 = 12.'],
    ['Same 12% stated rate. Which compounding gives the highest EAR?', 'Cùng lãi công bố 12%. Ghép lãi kiểu nào cho EAR cao nhất?',
      [['Annual', 'Hằng năm'], ['Quarterly', 'Hằng quý'], ['Monthly', 'Hằng tháng'], ['All equal', 'Như nhau']], 2,
      'More frequent compounding means interest starts earning interest sooner: monthly 12.68% vs annual 12%.', 'Ghép lãi càng thường xuyên, lãi càng sớm sinh lãi: hằng tháng 12,68% so với hằng năm 12%.'],
    ['Where does the gap between compound and simple growth come from?', 'Khoảng chênh giữa lãi kép và lãi đơn đến từ đâu?',
      [['Bank fees', 'Phí ngân hàng'], ['Interest earned on past interest', 'Lãi sinh ra từ lãi trước đó'], ['Inflation', 'Lạm phát'], ['Taxes', 'Thuế']], 1,
      'That is the definition of compounding.', 'Đó chính là định nghĩa của lãi kép.']
  ],
  task: [
    'Open the Lab and compare investing 2m VND a month from age 18 vs age 28, both at 8% until 60. Write down the two final values and explain the gap in your own words, in English if you can.',
    'Mở Lab và so sánh đầu tư 2 triệu mỗi tháng từ 18 tuổi và từ 28 tuổi, cùng lãi 8% đến 60 tuổi. Ghi lại hai giá trị cuối và giải thích khoảng chênh bằng lời của em, bằng tiếng Anh nếu được.'],
  sum: [
    ['Simple: FV = PV(1 + rn). Compound: FV = PV(1 + r)^n.', 'Lãi đơn: FV = PV(1 + rn). Lãi kép: FV = PV(1 + r)^n.'],
    ['More frequent compounding raises the effective annual rate.', 'Ghép lãi thường xuyên hơn làm tăng lãi suất hiệu dụng năm.'],
    ['Rule of 72: doubling time ≈ 72 ÷ rate.', 'Quy tắc 72: thời gian gấp đôi ≈ 72 ÷ lãi suất.'],
    ['Time is the most powerful input in compounding.', 'Thời gian là yếu tố mạnh nhất của lãi kép.']
  ],
  tool: 'compound'
};

L.m2l4 = {
  min: 55,
  obj: [
    ['Explain why money today is worth more than money tomorrow.', 'Giải thích vì sao tiền hôm nay giá trị hơn tiền ngày mai.'],
    ['Calculate present value and future value.', 'Tính hiện giá và giá trị tương lai.'],
    ['Use a discount rate to compare cash at different dates.', 'Dùng lãi suất chiết khấu để so sánh tiền ở các thời điểm khác nhau.']
  ],
  intro: [
    'Would you take 100 million VND today or 110 million in one year? The answer is “it depends on the interest rate.” This lesson is the most important idea in the entire course: almost every valuation you will ever do is built on it.',
    'Em chọn 100 triệu hôm nay hay 110 triệu sau một năm? Câu trả lời là “tùy lãi suất”. Đây là ý tưởng quan trọng nhất của cả khóa học: gần như mọi phép định giá sau này đều xây trên nó.'],
  sec: [
    ['Three reasons money today is worth more', 'Ba lý do tiền hôm nay giá trị hơn',
     '<p><b>Opportunity cost:</b> money today can be invested and earn a return. <b>Inflation:</b> money later may buy less. <b>Risk:</b> a promise of future money might not be kept. All three push the same way.</p>',
     '<p><b>Chi phí cơ hội:</b> tiền hôm nay có thể đem đầu tư và sinh lời. <b>Lạm phát:</b> tiền sau này có thể mua được ít hơn. <b>Rủi ro:</b> lời hứa trả tiền tương lai có thể không được giữ. Cả ba đều đẩy về cùng một hướng.</p>'],
    ['Future value and present value', 'Giá trị tương lai và hiện giá',
     '<p>Future value moves money forward in time; present value moves it back. They are the same equation rearranged:</p><p class="formula">FV = PV × (1 + r)<sup>n</sup> &nbsp;&nbsp;⇔&nbsp;&nbsp; PV = FV ÷ (1 + r)<sup>n</sup></p><p>Moving money back in time is called <b>discounting</b>, and r is the <b>discount rate</b>: the return you could earn elsewhere at similar risk.</p>',
     '<p>Giá trị tương lai đưa tiền về phía trước; hiện giá đưa tiền về hiện tại. Đó là cùng một phương trình được sắp xếp lại:</p><p class="formula">FV = PV × (1 + r)<sup>n</sup> &nbsp;&nbsp;⇔&nbsp;&nbsp; PV = FV ÷ (1 + r)<sup>n</sup></p><p>Đưa tiền về hiện tại gọi là <b>chiết khấu</b>, và r là <b>lãi suất chiết khấu</b>: mức lợi suất em có thể kiếm ở nơi khác với rủi ro tương đương.</p>'],
    ['The rule for decisions', 'Quy tắc ra quyết định',
     '<p>Never compare amounts at different dates directly. Convert them to the same date, usually today, then compare. A higher discount rate (riskier cash flows, or better alternatives) makes future money worth less today. This is exactly how a DCF valuation works, which you will learn much later.</p>',
     '<p>Không bao giờ so sánh trực tiếp các khoản tiền ở các thời điểm khác nhau. Quy đổi về cùng một thời điểm, thường là hôm nay, rồi mới so sánh. Lãi suất chiết khấu càng cao (dòng tiền rủi ro hơn, hoặc có lựa chọn tốt hơn) thì tiền tương lai càng kém giá trị hôm nay. Đó chính là cách định giá DCF hoạt động, em sẽ học sau.</p>']
  ],
  vocab: [
    ['Time value of money', 'Giá trị thời gian của tiền', 'Money today is worth more than the same amount later.', 'Tiền hôm nay giá trị hơn cùng số tiền đó sau này.'],
    ['Present value (PV)', 'Hiện giá', 'Today’s value of a future amount.', 'Giá trị hôm nay của một khoản tiền tương lai.'],
    ['Future value (FV)', 'Giá trị tương lai', 'What an amount today grows to later.', 'Số tiền hôm nay sẽ tăng thành bao nhiêu sau này.'],
    ['Discounting', 'Chiết khấu', 'Converting future money into today’s value.', 'Quy đổi tiền tương lai về giá trị hôm nay.'],
    ['Discount rate', 'Lãi suất chiết khấu', 'The rate used to discount; reflects opportunity cost and risk.', 'Lãi suất dùng để chiết khấu; phản ánh chi phí cơ hội và rủi ro.']
  ],
  ex: ['Lottery winners choose', 'Người trúng xổ số lựa chọn',
    '<p>US lottery jackpots offer either an annuity paid over about 30 years or a smaller lump sum today. The advertised jackpot is the total of the annuity payments; the cash option is roughly its present value. When interest rates rise, the cash option shrinks relative to the headline number, because future payments are discounted more heavily.</p>',
    '<p>Giải độc đắc xổ số ở Mỹ cho chọn nhận dần trong khoảng 30 năm hoặc nhận một khoản nhỏ hơn ngay hôm nay. Con số quảng cáo là tổng các khoản nhận dần; khoản nhận ngay xấp xỉ hiện giá của nó. Khi lãi suất tăng, khoản nhận ngay nhỏ đi so với con số quảng cáo, vì các khoản tương lai bị chiết khấu mạnh hơn.</p>'],
  num: [
    '<p class="hyp">Hypothetical numbers.</p><p><b>Choice 1:</b> 100m today or 110m in one year?</p><div class="calc"><div>At r = 5%: PV(110m) = 110 ÷ 1.05 = <b>104.8m</b> > 100m → wait</div><div>At r = 12%: PV(110m) = 110 ÷ 1.12 = <b>98.2m</b> < 100m → take it now</div></div><p><b>Choice 2:</b> 1 billion today or 1.5 billion in 5 years, at 8%?</p><div class="calc"><div>PV = 1.5bn ÷ 1.08<sup>5</sup> = 1.5 ÷ 1.4693 = <b>1.021bn</b></div><div>1.021bn > 1bn, so the later payment wins, but only by about 2%</div></div>',
    '<p class="hyp">Số liệu giả định.</p><p><b>Lựa chọn 1:</b> 100tr hôm nay hay 110tr sau một năm?</p><div class="calc"><div>Với r = 5%: PV(110tr) = 110 ÷ 1,05 = <b>104,8tr</b> > 100tr → chờ</div><div>Với r = 12%: PV(110tr) = 110 ÷ 1,12 = <b>98,2tr</b> < 100tr → lấy ngay</div></div><p><b>Lựa chọn 2:</b> 1 tỷ hôm nay hay 1,5 tỷ sau 5 năm, với 8%?</p><div class="calc"><div>PV = 1,5 tỷ ÷ 1,08<sup>5</sup> = 1,5 ÷ 1,4693 = <b>1,021 tỷ</b></div><div>1,021 tỷ > 1 tỷ, nên khoản nhận sau thắng, nhưng chỉ khoảng 2%</div></div>'],
  quiz: [
    ['PV of 121m received in 2 years at 10%?', 'Hiện giá của 121tr nhận sau 2 năm, lãi 10%?',
      [['100m', '100tr'], ['110m', '110tr'], ['101m', '101tr'], ['96.8m', '96,8tr']], 0,
      '121 ÷ 1.1² = 121 ÷ 1.21 = 100.', '121 ÷ 1,1² = 121 ÷ 1,21 = 100.'],
    ['If the discount rate rises, the PV of a fixed future payment:', 'Nếu lãi suất chiết khấu tăng, hiện giá của khoản tiền tương lai cố định sẽ:',
      [['Rises', 'Tăng'], ['Falls', 'Giảm'], ['Doesn’t change', 'Không đổi'], ['Becomes negative', 'Thành âm']], 1,
      'A bigger denominator means a smaller present value. This is why rising rates push asset prices down.', 'Mẫu số lớn hơn thì hiện giá nhỏ hơn. Đó là lý do lãi suất tăng kéo giá tài sản xuống.'],
    ['Which is NOT a reason money today is worth more?', 'Đâu KHÔNG phải lý do tiền hôm nay giá trị hơn?',
      [['Opportunity cost', 'Chi phí cơ hội'], ['Inflation', 'Lạm phát'], ['Risk the promise is broken', 'Rủi ro lời hứa bị phá'], ['Banknotes wear out', 'Tiền giấy bị cũ rách']], 3,
      'Physical wear is irrelevant; the three economic reasons are opportunity cost, inflation and risk.', 'Độ cũ của tờ tiền không liên quan; ba lý do kinh tế là chi phí cơ hội, lạm phát và rủi ro.'],
    ['A riskier future payment should be discounted at:', 'Khoản tiền tương lai rủi ro hơn nên được chiết khấu với:',
      [['A higher rate', 'Lãi suất cao hơn'], ['A lower rate', 'Lãi suất thấp hơn'], ['Zero', 'Bằng 0'], ['The inflation rate only', 'Chỉ bằng lạm phát']], 0,
      'Investors demand more return for more risk, so the discount rate rises with risk.', 'Nhà đầu tư đòi lợi suất cao hơn cho rủi ro cao hơn, nên lãi suất chiết khấu tăng theo rủi ro.']
  ],
  task: [
    'A relative offers you either 20m VND now as a graduation gift or 30m VND when you graduate university in 4 years. Using the Lab’s PV tool, find the discount rate at which you’d be indifferent. Then argue which you’d choose and why, in English.',
    'Một người thân đề nghị tặng em 20 triệu ngay bây giờ hoặc 30 triệu khi em tốt nghiệp đại học sau 4 năm. Dùng công cụ PV trong Lab, tìm lãi suất chiết khấu mà tại đó hai lựa chọn như nhau. Sau đó lập luận em sẽ chọn gì và vì sao, bằng tiếng Anh.'],
  sum: [
    ['Money today beats money later because of opportunity cost, inflation and risk.', 'Tiền hôm nay hơn tiền sau này vì chi phí cơ hội, lạm phát và rủi ro.'],
    ['PV = FV ÷ (1 + r)^n. Discounting is compounding in reverse.', 'PV = FV ÷ (1 + r)^n. Chiết khấu là lãi kép đảo ngược.'],
    ['Only compare money at the same date.', 'Chỉ so sánh tiền ở cùng một thời điểm.'],
    ['Higher discount rate → lower present value.', 'Lãi suất chiết khấu cao hơn → hiện giá thấp hơn.']
  ],
  tool: 'tvm'
};

})(window.LESSONS);

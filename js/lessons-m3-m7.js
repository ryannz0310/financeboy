(function (L) {

L.m3l1 = {
  min: 55,
  obj: [
    ['Read a simplified bank balance sheet.', 'Đọc bảng cân đối đơn giản của ngân hàng.'],
    ['Calculate net interest income and net interest margin.', 'Tính thu nhập lãi thuần và biên lãi thuần.'],
    ['Explain credit risk, liquidity risk and bank runs.', 'Giải thích rủi ro tín dụng, rủi ro thanh khoản và rút tiền hàng loạt.']
  ],
  intro: [
    'Your deposit is an asset to you and a liability to the bank: the bank owes it to you. A loan is the reverse. Once you see a bank’s balance sheet this way, its whole business model becomes obvious.',
    'Khoản tiền gửi là tài sản của em nhưng là nợ phải trả của ngân hàng: ngân hàng nợ em số tiền đó. Khoản cho vay thì ngược lại. Khi nhìn bảng cân đối của ngân hàng theo cách này, toàn bộ mô hình kinh doanh của nó trở nên rõ ràng.'],
  sec: [
    ['The bank balance sheet', 'Bảng cân đối của ngân hàng',
     '<p><b>Assets</b> (what the bank owns or is owed): loans to customers, government bonds, cash and reserves at the central bank. <b>Liabilities</b> (what it owes): customer deposits, borrowings from other banks. <b>Equity</b>: the shareholders’ cushion, often only around 8–12% of assets. That thin cushion is why banks are tightly regulated.</p>',
     '<p><b>Tài sản</b> (ngân hàng sở hữu hoặc được nợ): cho vay khách hàng, trái phiếu chính phủ, tiền mặt và dự trữ tại ngân hàng trung ương. <b>Nợ phải trả</b> (ngân hàng nợ người khác): tiền gửi khách hàng, vay liên ngân hàng. <b>Vốn chủ sở hữu</b>: tấm đệm của cổ đông, thường chỉ khoảng 8–12% tổng tài sản. Tấm đệm mỏng đó là lý do ngân hàng bị quản lý chặt.</p>'],
    ['How banks earn', 'Ngân hàng kiếm tiền thế nào',
     '<p><b>Net interest income (NII)</b> = interest earned on loans and securities − interest paid on deposits and borrowings. This is the core engine. <b>Net interest margin (NIM)</b> = NII ÷ interest-earning assets, the bank’s spread as a percentage. On top of that come <b>fees</b>: cards, transfers, account services, wealth management.</p>',
     '<p><b>Thu nhập lãi thuần (NII)</b> = lãi thu từ cho vay và chứng khoán − lãi trả cho tiền gửi và khoản vay. Đây là động cơ chính. <b>Biên lãi thuần (NIM)</b> = NII ÷ tài sản sinh lãi, tức chênh lệch tính theo %. Thêm vào đó là <b>phí dịch vụ</b>: thẻ, chuyển tiền, tài khoản, quản lý tài sản.</p>'],
    ['Maturity transformation and its danger', 'Chuyển đổi kỳ hạn và rủi ro của nó',
     '<p>Banks borrow short (you can withdraw deposits any time) and lend long (a mortgage lasts 20 years). This <b>maturity transformation</b> is useful but fragile. If many depositors withdraw at once, the bank can’t call back long loans fast enough. That is a <b>bank run</b>, a form of <b>liquidity risk</b>. Losses from borrowers not repaying are <b>credit risk</b>. Deposit insurance and central bank lending exist to stop runs.</p>',
     '<p>Ngân hàng huy động ngắn hạn (em rút tiền gửi bất cứ lúc nào) và cho vay dài hạn (vay mua nhà kéo dài 20 năm). <b>Chuyển đổi kỳ hạn</b> này hữu ích nhưng mong manh. Nếu nhiều người cùng rút tiền một lúc, ngân hàng không thể thu hồi khoản vay dài hạn kịp. Đó là <b>rút tiền hàng loạt</b>, một dạng <b>rủi ro thanh khoản</b>. Thiệt hại do người vay không trả nợ là <b>rủi ro tín dụng</b>. Bảo hiểm tiền gửi và cho vay của ngân hàng trung ương tồn tại để ngăn rút tiền hàng loạt.</p>']
  ],
  vocab: [
    ['Deposit', 'Tiền gửi', 'Money customers place at a bank; a liability of the bank.', 'Tiền khách gửi ngân hàng; là nợ phải trả của ngân hàng.'],
    ['Net interest income', 'Thu nhập lãi thuần', 'Interest earned minus interest paid.', 'Lãi thu được trừ lãi phải trả.'],
    ['Net interest margin', 'Biên lãi thuần', 'NII as a % of interest-earning assets.', 'NII tính theo % tài sản sinh lãi.'],
    ['Credit risk', 'Rủi ro tín dụng', 'The risk borrowers fail to repay.', 'Rủi ro người vay không trả được nợ.'],
    ['Liquidity risk', 'Rủi ro thanh khoản', 'The risk of not having cash when obligations come due.', 'Rủi ro không đủ tiền khi đến hạn phải trả.'],
    ['Bank run', 'Rút tiền hàng loạt', 'Many depositors withdrawing at once out of fear.', 'Nhiều người gửi cùng rút tiền vì lo sợ.'],
    ['Maturity transformation', 'Chuyển đổi kỳ hạn', 'Funding long-term loans with short-term deposits.', 'Dùng tiền gửi ngắn hạn tài trợ cho vay dài hạn.']
  ],
  ex: ['Silicon Valley Bank, March 2023', 'Ngân hàng Silicon Valley, tháng 3/2023',
    '<p>SVB had invested much of its deposits in long-term bonds. When interest rates rose, those bonds lost value (higher discount rate, lower present value: Module 2). Depositors, mostly tech startups, learned of the losses and withdrew billions in a single day. The bank failed within 48 hours. It is a textbook combination of interest-rate risk, liquidity risk and a modern, smartphone-speed bank run.</p>',
    '<p>SVB đã đầu tư phần lớn tiền gửi vào trái phiếu dài hạn. Khi lãi suất tăng, trái phiếu mất giá (lãi suất chiết khấu cao hơn, hiện giá thấp hơn: Module 2). Người gửi, chủ yếu là startup công nghệ, biết về khoản lỗ và rút hàng tỷ USD chỉ trong một ngày. Ngân hàng sụp đổ trong 48 giờ. Đây là ví dụ kinh điển kết hợp rủi ro lãi suất, rủi ro thanh khoản và một cuộc rút tiền hàng loạt với tốc độ của điện thoại thông minh.</p>'],
  num: [
    '<p class="hyp">Hypothetical bank, figures in billions of VND.</p><p>Deposits 1,000 at 4.5%. Equity 100. Assets: loans 900 at 9%, government bonds 200 at 3%.</p><div class="calc"><div>Interest income = 900 × 9% + 200 × 3% = 81 + 6 = <b>87</b></div><div>Interest expense = 1,000 × 4.5% = <b>45</b></div><div>NII = 87 − 45 = <b>42</b></div><div>NIM = 42 ÷ 1,100 = <b>3.8%</b></div><div>If 2% of loans default with zero recovery: 900 × 2% = 18 → 42 − 18 = <b>24</b> before costs</div></div><p>One bad year of defaults can wipe out almost half the margin. Credit risk is the main thing bankers manage.</p>',
    '<p class="hyp">Ngân hàng giả định, đơn vị tỷ đồng.</p><p>Tiền gửi 1.000 lãi 4,5%. Vốn chủ 100. Tài sản: cho vay 900 lãi 9%, trái phiếu chính phủ 200 lãi 3%.</p><div class="calc"><div>Thu nhập lãi = 900 × 9% + 200 × 3% = 81 + 6 = <b>87</b></div><div>Chi phí lãi = 1.000 × 4,5% = <b>45</b></div><div>NII = 87 − 45 = <b>42</b></div><div>NIM = 42 ÷ 1.100 = <b>3,8%</b></div><div>Nếu 2% khoản vay vỡ nợ, không thu hồi được: 900 × 2% = 18 → 42 − 18 = <b>24</b> trước chi phí</div></div><p>Một năm nợ xấu có thể xóa gần một nửa biên lợi nhuận. Rủi ro tín dụng là thứ chính mà ngân hàng quản lý.</p>'],
  quiz: [
    ['On a bank’s balance sheet, your savings deposit is:', 'Trên bảng cân đối ngân hàng, khoản tiết kiệm của em là:',
      [['An asset', 'Tài sản'], ['A liability', 'Nợ phải trả'], ['Equity', 'Vốn chủ'], ['Revenue', 'Doanh thu']], 1,
      'The bank owes it back to you, so it is a liability for the bank.', 'Ngân hàng nợ em khoản đó, nên là nợ phải trả của ngân hàng.'],
    ['A bank earns 60 on 1,000 of earning assets and pays 25 in interest. NIM?', 'Ngân hàng thu lãi 60 trên 1.000 tài sản sinh lãi và trả lãi 25. NIM?',
      [['2.5%', '2,5%'], ['3.5%', '3,5%'], ['6%', '6%'], ['8.5%', '8,5%']], 1,
      '(60 − 25) ÷ 1,000 = 3.5%.', '(60 − 25) ÷ 1.000 = 3,5%.'],
    ['Why are banks vulnerable to runs?', 'Vì sao ngân hàng dễ bị rút tiền hàng loạt?',
      [['They hold too much cash', 'Giữ quá nhiều tiền mặt'], ['Deposits are short-term but loans are long-term', 'Tiền gửi ngắn hạn nhưng cho vay dài hạn'], ['They don’t charge interest', 'Không thu lãi'], ['Governments own them', 'Nhà nước sở hữu']], 1,
      'Maturity mismatch: the bank can’t turn long loans into cash quickly.', 'Lệch kỳ hạn: ngân hàng không thể nhanh chóng biến khoản vay dài hạn thành tiền mặt.'],
    ['SVB’s bonds lost value when rates rose because:', 'Trái phiếu của SVB mất giá khi lãi suất tăng vì:',
      [['Higher discount rates lower present values', 'Lãi suất chiết khấu cao hơn làm giảm hiện giá'], ['Bonds stopped paying interest', 'Trái phiếu ngừng trả lãi'], ['Inflation fell', 'Lạm phát giảm'], ['The bank sold too few loans', 'Ngân hàng bán quá ít khoản vay']], 0,
      'Fixed future payments are worth less today when discounted at a higher rate.', 'Các khoản thanh toán cố định trong tương lai kém giá trị hơn khi chiết khấu với lãi suất cao hơn.']
  ],
  task: [
    'Look up the latest deposit and lending rates at one Vietnamese bank (Vietcombank, Techcombank or BIDV) on its website. Estimate its gross spread. Then list two reasons its actual NIM is lower than that spread.',
    'Tra lãi suất huy động và cho vay mới nhất của một ngân hàng Việt Nam (Vietcombank, Techcombank hoặc BIDV) trên website. Ước tính chênh lệch gộp. Sau đó nêu hai lý do NIM thực tế thấp hơn chênh lệch đó.'],
  sum: [
    ['Deposits are bank liabilities; loans are bank assets.', 'Tiền gửi là nợ phải trả của ngân hàng; cho vay là tài sản.'],
    ['NII = interest earned − interest paid; NIM = NII ÷ earning assets.', 'NII = lãi thu − lãi trả; NIM = NII ÷ tài sản sinh lãi.'],
    ['Borrowing short and lending long creates liquidity risk.', 'Huy động ngắn, cho vay dài tạo ra rủi ro thanh khoản.']
  ],
  tool: 'spread'
};

L.m3l2 = {
  min: 50,
  obj: [
    ['Describe what a central bank does.', 'Mô tả ngân hàng trung ương làm gì.'],
    ['Explain how the Fed moves interest rates.', 'Giải thích Fed điều chỉnh lãi suất thế nào.'],
    ['Trace how a rate change reaches households, firms and asset prices.', 'Lần theo cách thay đổi lãi suất tác động đến hộ gia đình, doanh nghiệp và giá tài sản.']
  ],
  intro: [
    'When the Federal Reserve changes one interest rate, mortgage costs in Ohio, startup funding in California and the VND/USD exchange rate in Hanoi all respond. Understanding why is half of reading financial news.',
    'Khi Fed thay đổi một mức lãi suất, chi phí vay mua nhà ở Ohio, vốn cho startup ở California và tỷ giá VND/USD ở Hà Nội đều phản ứng. Hiểu vì sao là đã đọc được một nửa tin tức tài chính.'],
  sec: [
    ['What a central bank is', 'Ngân hàng trung ương là gì',
     '<p>A central bank issues the currency, acts as the bank for commercial banks, supervises the banking system and sets <b>monetary policy</b>. In the US it is the <b>Federal Reserve</b>; in Vietnam, the <b>State Bank of Vietnam (SBV)</b>. The Fed has a <b>dual mandate</b>: maximum employment and stable prices, which it defines as 2% inflation.</p>',
     '<p>Ngân hàng trung ương phát hành tiền, là ngân hàng của các ngân hàng thương mại, giám sát hệ thống ngân hàng và điều hành <b>chính sách tiền tệ</b>. Ở Mỹ là <b>Cục Dự trữ Liên bang (Fed)</b>; ở Việt Nam là <b>Ngân hàng Nhà nước Việt Nam (NHNN)</b>. Fed có <b>nhiệm vụ kép</b>: tối đa hóa việc làm và ổn định giá cả, được định nghĩa là lạm phát 2%.</p>'],
    ['How the Fed moves rates', 'Fed điều chỉnh lãi suất thế nào',
     '<p>The Fed sets a target range for the <b>federal funds rate</b>, the rate banks charge each other for overnight loans. It steers that rate mainly by setting the interest it pays banks on reserves held at the Fed, and through <b>open market operations</b>: buying or selling government bonds. Banks then price everything else off this anchor.</p>',
     '<p>Fed đặt biên độ mục tiêu cho <b>lãi suất quỹ liên bang</b>, lãi suất các ngân hàng cho nhau vay qua đêm. Fed điều hướng lãi suất này chủ yếu bằng cách đặt mức lãi trả cho dự trữ mà ngân hàng gửi tại Fed, và qua <b>nghiệp vụ thị trường mở</b>: mua hoặc bán trái phiếu chính phủ. Các ngân hàng định giá mọi khoản khác dựa trên mức neo này.</p>'],
    ['The transmission chain', 'Chuỗi truyền dẫn',
     '<p>Fed raises rates → banks raise loan and deposit rates → borrowing gets more expensive, saving more attractive → households buy fewer houses and cars, firms cancel marginal projects (remember the bakery at 17%) → demand cools → inflation slows. Asset prices fall too, because future cash flows are discounted at a higher rate. Rate cuts run the chain in reverse.</p>',
     '<p>Fed tăng lãi suất → ngân hàng tăng lãi vay và lãi huy động → vay đắt hơn, tiết kiệm hấp dẫn hơn → hộ gia đình mua ít nhà và xe hơn, doanh nghiệp hủy các dự án biên (nhớ tiệm bánh ở mức 17%) → cầu hạ nhiệt → lạm phát chậm lại. Giá tài sản cũng giảm, vì dòng tiền tương lai bị chiết khấu với lãi suất cao hơn. Giảm lãi suất thì chuỗi chạy ngược lại.</p>']
  ],
  vocab: [
    ['Central bank', 'Ngân hàng trung ương', 'Issues currency and conducts monetary policy.', 'Phát hành tiền và điều hành chính sách tiền tệ.'],
    ['Monetary policy', 'Chính sách tiền tệ', 'Managing interest rates and money supply to meet goals.', 'Điều hành lãi suất và cung tiền để đạt mục tiêu.'],
    ['Federal funds rate', 'Lãi suất quỹ liên bang', 'US overnight rate between banks; the Fed’s main target.', 'Lãi suất qua đêm liên ngân hàng ở Mỹ; mục tiêu chính của Fed.'],
    ['Open market operations', 'Nghiệp vụ thị trường mở', 'Central bank buying or selling government bonds.', 'Ngân hàng trung ương mua bán trái phiếu chính phủ.'],
    ['Dual mandate', 'Nhiệm vụ kép', 'The Fed’s goals of maximum employment and stable prices.', 'Mục tiêu tối đa hóa việc làm và ổn định giá của Fed.']
  ],
  ex: ['2022: the fastest hiking cycle in decades', '2022: chu kỳ tăng lãi suất nhanh nhất nhiều thập kỷ',
    '<p>In March 2022 the Fed began raising rates from near zero, lifting them by more than 5 percentage points in about 16 months to fight inflation. US mortgage rates roughly doubled, home sales fell, high-growth tech stocks dropped sharply, and the dollar strengthened, putting pressure on currencies like the VND and on the SBV’s own policy choices.</p>',
    '<p>Tháng 3/2022, Fed bắt đầu tăng lãi suất từ gần 0, nâng thêm hơn 5 điểm phần trăm trong khoảng 16 tháng để chống lạm phát. Lãi vay mua nhà ở Mỹ tăng khoảng gấp đôi, giao dịch nhà giảm, cổ phiếu công nghệ tăng trưởng giảm mạnh, và đồng đô la mạnh lên, gây áp lực lên các đồng tiền như VND và lên lựa chọn chính sách của NHNN.</p>'],
  num: [
    '<p class="hyp">Hypothetical numbers.</p><p>A family has a 2 billion VND loan, interest-only for simplicity.</p><div class="calc"><div>At 8%: 2bn × 8% = <b>160m per year</b> (13.3m/month)</div><div>At 10%: 2bn × 10% = <b>200m per year</b> (16.7m/month)</div><div>Extra cost = <b>40m per year</b> from a 2-point rate rise</div></div><p>Now a promise that pays 50m a year forever. Its value is payment ÷ rate:</p><div class="calc"><div>At 5%: 50m ÷ 0.05 = <b>1,000m</b></div><div>At 6%: 50m ÷ 0.06 = <b>833m</b>, a 17% fall from a 1-point rise</div></div>',
    '<p class="hyp">Số liệu giả định.</p><p>Một gia đình vay 2 tỷ đồng, chỉ trả lãi cho đơn giản.</p><div class="calc"><div>Ở 8%: 2 tỷ × 8% = <b>160tr mỗi năm</b> (13,3tr/tháng)</div><div>Ở 10%: 2 tỷ × 10% = <b>200tr mỗi năm</b> (16,7tr/tháng)</div><div>Chi phí thêm = <b>40tr mỗi năm</b> khi lãi suất tăng 2 điểm</div></div><p>Một lời hứa trả 50tr mỗi năm mãi mãi. Giá trị = khoản trả ÷ lãi suất:</p><div class="calc"><div>Ở 5%: 50tr ÷ 0,05 = <b>1.000tr</b></div><div>Ở 6%: 50tr ÷ 0,06 = <b>833tr</b>, giảm 17% khi lãi suất tăng 1 điểm</div></div>'],
  quiz: [
    ['The Fed raises rates. What usually happens to bond prices?', 'Fed tăng lãi suất. Giá trái phiếu thường thế nào?',
      [['Rise', 'Tăng'], ['Fall', 'Giảm'], ['Unchanged', 'Không đổi'], ['Double', 'Gấp đôi']], 1,
      'Existing bonds pay fixed amounts; at higher rates those amounts are worth less today.', 'Trái phiếu hiện có trả khoản cố định; với lãi suất cao hơn, các khoản đó kém giá trị hơn hôm nay.'],
    ['Vietnam’s central bank is:', 'Ngân hàng trung ương của Việt Nam là:',
      [['Vietcombank', 'Vietcombank'], ['State Treasury', 'Kho bạc Nhà nước'], ['State Bank of Vietnam', 'Ngân hàng Nhà nước Việt Nam'], ['Ministry of Finance', 'Bộ Tài chính']], 2,
      'The SBV conducts monetary policy. The State Treasury and Ministry of Finance handle government finances.', 'NHNN điều hành chính sách tiền tệ. Kho bạc và Bộ Tài chính quản lý tài chính nhà nước.'],
    ['Which is the right order of the transmission chain after a rate hike?', 'Thứ tự đúng của chuỗi truyền dẫn sau khi tăng lãi suất?',
      [['Inflation falls → banks raise rates → demand cools', 'Lạm phát giảm → ngân hàng tăng lãi → cầu hạ'], ['Banks raise rates → borrowing falls → demand cools → inflation slows', 'Ngân hàng tăng lãi → vay giảm → cầu hạ → lạm phát chậm lại'], ['Demand rises → inflation falls', 'Cầu tăng → lạm phát giảm'], ['Nothing changes for households', 'Hộ gia đình không bị ảnh hưởng']], 1,
      'Policy rate → market rates → spending → inflation.', 'Lãi điều hành → lãi thị trường → chi tiêu → lạm phát.'],
    ['A perpetual 30m/year promise at 6% is worth:', 'Lời hứa trả 30tr/năm mãi mãi ở mức 6% có giá trị:',
      [['180m', '180tr'], ['300m', '300tr'], ['500m', '500tr'], ['600m', '600tr']], 2,
      '30 ÷ 0.06 = 500.', '30 ÷ 0,06 = 500.']
  ],
  task: [
    'Find the most recent Fed decision (federalreserve.gov) and the SBV’s latest policy rate announcement (sbv.gov.vn). Summarise each in two English sentences and explain one way the Fed’s decision could affect Vietnam.',
    'Tìm quyết định gần nhất của Fed (federalreserve.gov) và thông báo lãi suất điều hành mới nhất của NHNN (sbv.gov.vn). Tóm tắt mỗi quyết định bằng hai câu tiếng Anh và giải thích một cách quyết định của Fed có thể ảnh hưởng đến Việt Nam.'],
  sum: [
    ['Central banks set the anchor rate everything else is priced from.', 'Ngân hàng trung ương đặt lãi suất neo để định giá mọi thứ khác.'],
    ['Higher rates → less borrowing → cooler demand → lower inflation.', 'Lãi suất cao hơn → vay ít hơn → cầu hạ → lạm phát thấp hơn.'],
    ['Higher rates also lower asset prices through discounting.', 'Lãi suất cao hơn cũng làm giảm giá tài sản qua chiết khấu.']
  ]
};

L.m4l1 = {
  min: 50,
  obj: [
    ['Distinguish primary and secondary markets.', 'Phân biệt thị trường sơ cấp và thứ cấp.'],
    ['Distinguish equity and debt markets, money and capital markets.', 'Phân biệt thị trường cổ phiếu và nợ, thị trường tiền tệ và vốn.'],
    ['Calculate capital raised and market capitalisation.', 'Tính vốn huy động và vốn hóa thị trường.']
  ],
  intro: [
    'When you buy Apple shares in an app, Apple doesn’t receive a single dollar. You bought them from another investor. Knowing who actually gets the money is the key to understanding markets.',
    'Khi em mua cổ phiếu Apple qua ứng dụng, Apple không nhận được đồng nào. Em mua từ một nhà đầu tư khác. Biết ai thực sự nhận tiền là chìa khóa để hiểu thị trường.'],
  sec: [
    ['Primary vs secondary', 'Sơ cấp và thứ cấp',
     '<p>In the <b>primary market</b>, securities are sold for the first time and the money goes to the issuer: an IPO, a new bond issue. In the <b>secondary market</b>, investors trade existing securities with each other on exchanges such as the NYSE, Nasdaq or HOSE in Ho Chi Minh City. The company gets nothing directly, but the secondary market matters enormously: investors only buy in the primary market because they know they can sell later.</p>',
     '<p>Ở <b>thị trường sơ cấp</b>, chứng khoán được bán lần đầu và tiền đi về tổ chức phát hành: IPO, phát hành trái phiếu mới. Ở <b>thị trường thứ cấp</b>, nhà đầu tư mua bán chứng khoán đã có với nhau trên sàn như NYSE, Nasdaq hay HOSE ở TP.HCM. Công ty không nhận trực tiếp đồng nào, nhưng thị trường thứ cấp cực kỳ quan trọng: nhà đầu tư chỉ mua ở sơ cấp vì biết mình có thể bán lại sau này.</p>'],
    ['Equity vs debt', 'Cổ phiếu và nợ',
     '<p><b>Equity</b> (stocks) is ownership: a residual claim on profits, with voting rights and no maturity. <b>Debt</b> (bonds, loans) is a contract: fixed interest and repayment of principal by a set date. Debt holders are paid before shareholders if the company fails, so debt is safer for the investor and cheaper for the company.</p>',
     '<p><b>Vốn chủ</b> (cổ phiếu) là quyền sở hữu: quyền hưởng phần lợi nhuận còn lại, có quyền biểu quyết, không có ngày đáo hạn. <b>Nợ</b> (trái phiếu, khoản vay) là hợp đồng: lãi cố định và hoàn gốc vào ngày xác định. Chủ nợ được trả trước cổ đông nếu công ty phá sản, nên nợ an toàn hơn cho nhà đầu tư và rẻ hơn cho công ty.</p>'],
    ['Money vs capital markets', 'Thị trường tiền tệ và thị trường vốn',
     '<p>The <b>money market</b> trades short-term debt, one year or less: Treasury bills, commercial paper, interbank loans. It is where companies and banks manage day-to-day cash. The <b>capital market</b> trades long-term securities: stocks and bonds longer than a year. It funds factories, metro lines and growth.</p>',
     '<p><b>Thị trường tiền tệ</b> giao dịch nợ ngắn hạn, từ một năm trở xuống: tín phiếu kho bạc, thương phiếu, vay liên ngân hàng. Đây là nơi doanh nghiệp và ngân hàng quản lý tiền hằng ngày. <b>Thị trường vốn</b> giao dịch chứng khoán dài hạn: cổ phiếu và trái phiếu trên một năm. Nó tài trợ nhà máy, tuyến metro và tăng trưởng.</p>']
  ],
  vocab: [
    ['Primary market', 'Thị trường sơ cấp', 'Where new securities are sold and the issuer receives money.', 'Nơi chứng khoán mới được bán và tổ chức phát hành nhận tiền.'],
    ['Secondary market', 'Thị trường thứ cấp', 'Where investors trade existing securities.', 'Nơi nhà đầu tư mua bán chứng khoán đã phát hành.'],
    ['IPO', 'Phát hành lần đầu ra công chúng', 'A company’s first sale of shares to the public.', 'Lần đầu công ty bán cổ phiếu ra công chúng.'],
    ['Equity', 'Vốn chủ sở hữu', 'Ownership claim on a company.', 'Quyền sở hữu đối với công ty.'],
    ['Bond', 'Trái phiếu', 'A debt security paying interest and principal.', 'Chứng khoán nợ trả lãi và gốc.'],
    ['Market capitalisation', 'Vốn hóa thị trường', 'Share price × shares outstanding.', 'Giá cổ phiếu × số cổ phiếu đang lưu hành.'],
    ['Money market', 'Thị trường tiền tệ', 'Market for debt of one year or less.', 'Thị trường nợ kỳ hạn một năm trở xuống.']
  ],
  ex: ['Facebook’s 2012 IPO', 'IPO của Facebook năm 2012',
    '<p>Facebook raised about $16 billion in its May 2012 IPO, one of the largest tech IPOs ever. That money went to the company and selling early shareholders. Every share trade since then has been secondary: the shares passed between investors while the company received nothing from those trades.</p>',
    '<p>Facebook huy động khoảng 16 tỷ USD trong đợt IPO tháng 5/2012, một trong những đợt IPO công nghệ lớn nhất lịch sử. Số tiền đó đi về công ty và các cổ đông ban đầu bán ra. Mọi giao dịch cổ phiếu sau đó đều là thứ cấp: cổ phiếu chuyển giữa các nhà đầu tư mà công ty không nhận gì từ những giao dịch đó.</p>'],
  num: [
    '<p class="hyp">Hypothetical numbers.</p><p>A Vietnamese tech company has 40m shares owned by founders. It IPOs 10m new shares at 25,000 VND.</p><div class="calc"><div>Capital raised = 10m × 25,000 = <b>250bn VND</b> (to the company)</div><div>Shares outstanding after IPO = 40m + 10m = <b>50m</b></div><div>Founders’ ownership = 40 ÷ 50 = <b>80%</b></div><div>One year later the price is 40,000: market cap = 50m × 40,000 = <b>2,000bn VND</b></div><div>Cash the company receives from that price rise: <b>0</b></div></div>',
    '<p class="hyp">Số liệu giả định.</p><p>Một công ty công nghệ Việt Nam có 40 triệu cổ phiếu do nhà sáng lập nắm giữ. Công ty IPO 10 triệu cổ phiếu mới giá 25.000 đồng.</p><div class="calc"><div>Vốn huy động = 10tr × 25.000 = <b>250 tỷ đồng</b> (về công ty)</div><div>Số cổ phiếu sau IPO = 40tr + 10tr = <b>50tr</b></div><div>Tỷ lệ sở hữu của nhà sáng lập = 40 ÷ 50 = <b>80%</b></div><div>Một năm sau giá là 40.000: vốn hóa = 50tr × 40.000 = <b>2.000 tỷ đồng</b></div><div>Tiền công ty nhận từ việc giá tăng: <b>0</b></div></div>'],
  quiz: [
    ['You buy FPT shares on HOSE from another investor. This is:', 'Em mua cổ phiếu FPT trên HOSE từ nhà đầu tư khác. Đây là:',
      [['Primary market', 'Thị trường sơ cấp'], ['Secondary market', 'Thị trường thứ cấp'], ['Money market', 'Thị trường tiền tệ'], ['An IPO', 'IPO']], 1,
      'Existing shares change hands between investors.', 'Cổ phiếu đã có chuyển giữa các nhà đầu tư.'],
    ['If a company goes bankrupt, who is paid first?', 'Nếu công ty phá sản, ai được trả trước?',
      [['Shareholders', 'Cổ đông'], ['Bondholders', 'Trái chủ'], ['Employees’ friends', 'Bạn của nhân viên'], ['Whoever bought most recently', 'Người mua gần nhất']], 1,
      'Debt has priority over equity. Shareholders get only what is left.', 'Nợ được ưu tiên hơn vốn chủ. Cổ đông chỉ nhận phần còn lại.'],
    ['20m shares at 15,000 VND. Market cap?', '20 triệu cổ phiếu giá 15.000 đồng. Vốn hóa?',
      [['30bn', '30 tỷ'], ['300bn', '300 tỷ'], ['3,000bn', '3.000 tỷ'], ['150bn', '150 tỷ']], 1,
      '20,000,000 × 15,000 = 300,000,000,000 VND = 300bn.', '20.000.000 × 15.000 = 300.000.000.000 đồng = 300 tỷ.'],
    ['A 3-month Treasury bill trades in the:', 'Tín phiếu kho bạc 3 tháng được giao dịch ở:',
      [['Money market', 'Thị trường tiền tệ'], ['Equity market', 'Thị trường cổ phiếu'], ['Primary market only', 'Chỉ sơ cấp'], ['Real estate market', 'Thị trường bất động sản']], 0,
      'Debt of one year or less belongs to the money market.', 'Nợ kỳ hạn một năm trở xuống thuộc thị trường tiền tệ.']
  ],
  task: [
    'Find one IPO on HOSE or HNX from the last few years. Record the offer price, number of shares offered, money raised and today’s market cap. Explain who received money in the IPO and who has received money since.',
    'Tìm một đợt IPO trên HOSE hoặc HNX trong vài năm gần đây. Ghi giá chào bán, số cổ phiếu chào bán, số tiền huy động và vốn hóa hôm nay. Giải thích ai nhận tiền trong đợt IPO và ai nhận tiền kể từ đó.'],
  sum: [
    ['Primary market: the issuer gets the money. Secondary: investors trade with each other.', 'Sơ cấp: tổ chức phát hành nhận tiền. Thứ cấp: nhà đầu tư giao dịch với nhau.'],
    ['Equity is ownership; debt is a contract with priority.', 'Vốn chủ là sở hữu; nợ là hợp đồng có quyền ưu tiên.'],
    ['Market cap = price × shares outstanding.', 'Vốn hóa = giá × số cổ phiếu lưu hành.']
  ]
};

L.m4l2 = {
  min: 45,
  obj: [
    ['Read a simple order book: bid, ask, spread.', 'Đọc sổ lệnh đơn giản: giá mua, giá bán, chênh lệch.'],
    ['Explain how supply and demand set a stock price each second.', 'Giải thích cung cầu đặt giá cổ phiếu từng giây thế nào.'],
    ['Explain why prices move on news and expectations.', 'Giải thích vì sao giá biến động theo tin tức và kỳ vọng.']
  ],
  intro: [
    'Nobody decides Apple’s share price. It is simply the last price at which a buyer and a seller agreed to trade. Behind that number is a queue of orders, and behind the queue is everyone’s guess about the future.',
    'Không ai quyết định giá cổ phiếu Apple. Đó chỉ là mức giá cuối cùng mà một người mua và một người bán đồng ý giao dịch. Phía sau con số đó là hàng đợi lệnh, và phía sau hàng đợi là dự đoán của mọi người về tương lai.'],
  sec: [
    ['The order book', 'Sổ lệnh',
     '<p>Buyers post <b>bids</b>: the highest price they will pay. Sellers post <b>asks</b> (offers): the lowest price they will accept. The gap between the best bid and best ask is the <b>bid–ask spread</b>. A trade happens when someone accepts the other side’s price, for example with a <b>market order</b> (buy now at the best available price). A <b>limit order</b> waits in the book at your chosen price.</p>',
     '<p>Người mua đặt <b>giá mua (bid)</b>: mức cao nhất họ chịu trả. Người bán đặt <b>giá bán (ask)</b>: mức thấp nhất họ chấp nhận. Khoảng cách giữa giá mua tốt nhất và giá bán tốt nhất là <b>chênh lệch mua–bán</b>. Giao dịch xảy ra khi có người chấp nhận giá của phía kia, ví dụ bằng <b>lệnh thị trường</b> (mua ngay ở giá tốt nhất hiện có). <b>Lệnh giới hạn</b> nằm chờ trong sổ ở mức giá em chọn.</p>'],
    ['Supply, demand and expectations', 'Cung, cầu và kỳ vọng',
     '<p>From AP Micro: if more people want to buy than sell at the current price, buyers must bid higher, and the price rises until enough sellers appear. What drives demand for a share is <b>expectations about future cash flows</b>, discounted to today. When NVIDIA reports stronger-than-expected AI chip sales, investors raise their estimates of future profit, more want to buy, and the price jumps within seconds.</p><p>The key word is <b>expected</b>. If good news was already expected, the price may not move at all, or may even fall if the news was less good than hoped.</p>',
     '<p>Từ AP Micro: nếu ở mức giá hiện tại có nhiều người muốn mua hơn bán, người mua phải trả cao hơn, và giá tăng đến khi đủ người bán xuất hiện. Điều thúc đẩy cầu cổ phiếu là <b>kỳ vọng về dòng tiền tương lai</b>, chiết khấu về hôm nay. Khi NVIDIA công bố doanh số chip AI cao hơn kỳ vọng, nhà đầu tư nâng ước tính lợi nhuận tương lai, nhiều người muốn mua hơn, và giá tăng vọt trong vài giây.</p><p>Từ quan trọng là <b>kỳ vọng</b>. Nếu tin tốt đã được dự đoán trước, giá có thể không đổi, thậm chí giảm nếu tin không tốt bằng mong đợi.</p>'],
    ['Liquidity', 'Thanh khoản',
     '<p>A <b>liquid</b> stock has many buyers and sellers, so the spread is tiny and you can trade large amounts without moving the price. Apple’s spread is often one cent. A small company’s stock may have a wide spread and few trades, so selling quickly means accepting a lower price.</p>',
     '<p>Cổ phiếu có <b>thanh khoản</b> cao có nhiều người mua bán, nên chênh lệch rất nhỏ và giao dịch lượng lớn mà không làm giá biến động. Chênh lệch của Apple thường chỉ một cent. Cổ phiếu công ty nhỏ có thể chênh lệch rộng và ít giao dịch, nên muốn bán nhanh phải chấp nhận giá thấp hơn.</p>']
  ],
  vocab: [
    ['Bid', 'Giá mua', 'Highest price a buyer is willing to pay.', 'Giá cao nhất người mua sẵn sàng trả.'],
    ['Ask / Offer', 'Giá bán', 'Lowest price a seller is willing to accept.', 'Giá thấp nhất người bán chấp nhận.'],
    ['Bid–ask spread', 'Chênh lệch mua–bán', 'Best ask minus best bid.', 'Giá bán tốt nhất trừ giá mua tốt nhất.'],
    ['Market order', 'Lệnh thị trường', 'Trade immediately at the best available price.', 'Giao dịch ngay ở giá tốt nhất hiện có.'],
    ['Limit order', 'Lệnh giới hạn', 'Trade only at your price or better.', 'Chỉ giao dịch ở giá em đặt hoặc tốt hơn.'],
    ['Liquidity', 'Thanh khoản', 'How easily an asset is traded without moving its price.', 'Mức độ dễ mua bán tài sản mà không làm thay đổi giá.']
  ],
  ex: ['“Buy the rumour, sell the news”', '“Mua tin đồn, bán tin thật”',
    '<p>Companies regularly report record profits and see their share price fall the same day. That isn’t irrational: the market had already priced in an even better result. Prices react to the gap between results and expectations, not to the results themselves.</p>',
    '<p>Nhiều công ty công bố lợi nhuận kỷ lục mà giá cổ phiếu giảm ngay trong ngày. Điều đó không phi lý: thị trường đã phản ánh vào giá một kết quả còn tốt hơn. Giá phản ứng với khoảng cách giữa kết quả và kỳ vọng, không phải với bản thân kết quả.</p>'],
  num: [
    '<p class="hyp">Hypothetical order book, prices in VND.</p><div class="calc"><div>Asks: 1,000 shares @ 50,300 · 2,000 @ 50,200 · 1,500 @ 50,100</div><div>Bids: 2,000 @ 50,000 · 3,000 @ 49,900</div><div>Best bid 50,000, best ask 50,100 → spread = <b>100 VND</b> (0.2%)</div></div><p>You send a market order to buy 2,500 shares:</p><div class="calc"><div>1,500 × 50,100 = 75,150,000</div><div>1,000 × 50,200 = 50,200,000</div><div>Total = 125,350,000 → average price = <b>50,140</b></div><div>New best ask = <b>50,200</b>: your order pushed the price up</div></div>',
    '<p class="hyp">Sổ lệnh giả định, giá bằng đồng.</p><div class="calc"><div>Bán: 1.000 cp @ 50.300 · 2.000 @ 50.200 · 1.500 @ 50.100</div><div>Mua: 2.000 @ 50.000 · 3.000 @ 49.900</div><div>Giá mua tốt nhất 50.000, giá bán tốt nhất 50.100 → chênh lệch = <b>100 đồng</b> (0,2%)</div></div><p>Em đặt lệnh thị trường mua 2.500 cổ phiếu:</p><div class="calc"><div>1.500 × 50.100 = 75.150.000</div><div>1.000 × 50.200 = 50.200.000</div><div>Tổng = 125.350.000 → giá trung bình = <b>50.140</b></div><div>Giá bán tốt nhất mới = <b>50.200</b>: lệnh của em đã đẩy giá lên</div></div>'],
  quiz: [
    ['Best bid 20,000, best ask 20,150. The spread is:', 'Giá mua tốt nhất 20.000, giá bán tốt nhất 20.150. Chênh lệch là:',
      [['50', '50'], ['150', '150'], ['20,075', '20.075'], ['40,150', '40.150']], 1,
      'Ask − bid = 150.', 'Bán − mua = 150.'],
    ['A company beats last year’s profit but misses analysts’ forecast. The price most likely:', 'Công ty vượt lợi nhuận năm ngoái nhưng thấp hơn dự báo của chuyên gia. Giá nhiều khả năng:',
      [['Rises because profit grew', 'Tăng vì lợi nhuận tăng'], ['Falls because it missed expectations', 'Giảm vì thấp hơn kỳ vọng'], ['Is frozen by the exchange', 'Bị sàn đóng băng'], ['Doubles', 'Gấp đôi']], 1,
      'Prices react to results versus expectations.', 'Giá phản ứng với kết quả so với kỳ vọng.'],
    ['You want to buy only if the price drops to 48,000. Use a:', 'Em chỉ muốn mua nếu giá xuống 48.000. Dùng:',
      [['Market order', 'Lệnh thị trường'], ['Limit order', 'Lệnh giới hạn'], ['IPO', 'IPO'], ['Bond', 'Trái phiếu']], 1,
      'A limit order waits until your price is available.', 'Lệnh giới hạn chờ đến khi có giá em muốn.'],
    ['Why is a wide spread a sign of low liquidity?', 'Vì sao chênh lệch rộng là dấu hiệu thanh khoản thấp?',
      [['Few buyers and sellers compete to narrow it', 'Ít người mua bán cạnh tranh để thu hẹp nó'], ['The government sets it', 'Nhà nước quy định'], ['It means the stock is safe', 'Nghĩa là cổ phiếu an toàn'], ['It never is', 'Không phải']], 0,
      'With many participants, someone always improves the best price, so spreads shrink.', 'Khi có nhiều người tham gia, luôn có người cải thiện giá tốt nhất, nên chênh lệch thu hẹp.']
  ],
  task: [
    'Open any free stock app or HOSE price board and record the best bid, best ask and volume for one large company (e.g. Vinamilk) and one small one. Compare their spreads as a percentage of price and explain the difference using the word “liquidity”.',
    'Mở một ứng dụng chứng khoán miễn phí hoặc bảng giá HOSE, ghi giá mua, giá bán tốt nhất và khối lượng của một công ty lớn (ví dụ Vinamilk) và một công ty nhỏ. So sánh chênh lệch theo % giá và giải thích khác biệt bằng từ “thanh khoản”.'],
  sum: [
    ['A price is the last point where a buyer and seller agreed.', 'Giá là điểm cuối cùng người mua và người bán đồng ý.'],
    ['Demand for a share reflects expected future cash flows.', 'Cầu cổ phiếu phản ánh dòng tiền tương lai kỳ vọng.'],
    ['Prices move on surprises, not on news itself.', 'Giá biến động theo bất ngờ, không theo bản thân tin tức.']
  ]
};

L.m5l1 = {
  min: 55,
  obj: [
    ['Calculate expected return from scenarios.', 'Tính lợi suất kỳ vọng từ các kịch bản.'],
    ['Explain the risk–return trade-off.', 'Giải thích đánh đổi rủi ro–lợi nhuận.'],
    ['Show with numbers why diversification reduces risk.', 'Chứng minh bằng số vì sao đa dạng hóa giảm rủi ro.']
  ],
  intro: [
    'Two investments can have the same average return and completely different experiences. Finance measures that difference, prices it, and then shows you a way to reduce it for free.',
    'Hai khoản đầu tư có thể có cùng lợi suất trung bình nhưng trải nghiệm hoàn toàn khác nhau. Tài chính đo lường sự khác biệt đó, định giá nó, rồi chỉ cho em cách giảm nó mà không mất gì.'],
  sec: [
    ['Expected return', 'Lợi suất kỳ vọng',
     '<p class="formula">E(R) = Σ probability × return in each scenario</p><p>It is a weighted average of possible outcomes, not what will happen. A stock with E(R) = 10% might return −30% or +50% in any given year.</p>',
     '<p class="formula">E(R) = Σ xác suất × lợi suất mỗi kịch bản</p><p>Đó là bình quân gia quyền của các kết quả có thể, không phải điều chắc chắn xảy ra. Cổ phiếu có E(R) = 10% có thể lỗ 30% hoặc lời 50% trong một năm bất kỳ.</p>'],
    ['Risk and the trade-off', 'Rủi ro và sự đánh đổi',
     '<p>In finance, <b>risk</b> means uncertainty about the outcome, usually measured by <b>volatility</b> (standard deviation of returns). Most investors are <b>risk-averse</b>: given equal expected returns they prefer the safer one. So riskier assets must offer higher expected returns to attract buyers. Over long periods, stocks have returned more than bonds, and bonds more than bank deposits, as compensation for bearing more risk.</p>',
     '<p>Trong tài chính, <b>rủi ro</b> là sự không chắc chắn về kết quả, thường đo bằng <b>độ biến động</b> (độ lệch chuẩn của lợi suất). Phần lớn nhà đầu tư <b>ngại rủi ro</b>: với cùng lợi suất kỳ vọng, họ chọn khoản an toàn hơn. Vì vậy tài sản rủi ro hơn phải hứa hẹn lợi suất kỳ vọng cao hơn mới có người mua. Trong dài hạn, cổ phiếu sinh lời cao hơn trái phiếu, và trái phiếu cao hơn tiền gửi, như phần bù cho việc gánh nhiều rủi ro hơn.</p>'],
    ['Diversification', 'Đa dạng hóa',
     '<p>Combining assets that don’t move together lowers portfolio risk without lowering expected return. Risk specific to one company (a factory fire, a CEO scandal) can be diversified away. Risk that hits everything (a recession, a rate hike) cannot; that is <b>systematic risk</b>, and it is the only risk markets pay you for. You will meet this again as <b>beta</b> and CAPM.</p>',
     '<p>Kết hợp các tài sản không biến động cùng chiều làm giảm rủi ro danh mục mà không giảm lợi suất kỳ vọng. Rủi ro riêng của một công ty (cháy nhà máy, bê bối CEO) có thể loại bỏ nhờ đa dạng hóa. Rủi ro ảnh hưởng mọi thứ (suy thoái, tăng lãi suất) thì không; đó là <b>rủi ro hệ thống</b>, và là rủi ro duy nhất thị trường trả công cho em. Em sẽ gặp lại nó qua <b>beta</b> và CAPM.</p>']
  ],
  vocab: [
    ['Expected return', 'Lợi suất kỳ vọng', 'Probability-weighted average return.', 'Lợi suất bình quân theo xác suất.'],
    ['Volatility', 'Độ biến động', 'How widely returns swing, often standard deviation.', 'Mức dao động của lợi suất, thường đo bằng độ lệch chuẩn.'],
    ['Risk-averse', 'Ngại rủi ro', 'Preferring certainty at equal expected return.', 'Ưa sự chắc chắn khi lợi suất kỳ vọng như nhau.'],
    ['Diversification', 'Đa dạng hóa', 'Spreading money across assets that don’t move together.', 'Phân bổ tiền vào các tài sản không biến động cùng chiều.'],
    ['Systematic risk', 'Rủi ro hệ thống', 'Market-wide risk that cannot be diversified away.', 'Rủi ro toàn thị trường, không loại bỏ được bằng đa dạng hóa.'],
    ['Portfolio', 'Danh mục đầu tư', 'A collection of investments held together.', 'Tập hợp các khoản đầu tư nắm giữ cùng lúc.']
  ],
  ex: ['Index funds', 'Quỹ chỉ số',
    '<p>An S&amp;P 500 index fund holds 500 large US companies in one product. If one company collapses, it is a small slice of the fund. That is diversification packaged for ordinary savers, and it is why many professionals recommend low-cost index funds as the core of a long-term portfolio. (This is education, not a recommendation.)</p>',
    '<p>Quỹ chỉ số S&amp;P 500 nắm giữ 500 công ty lớn của Mỹ trong một sản phẩm. Nếu một công ty sụp đổ, đó chỉ là một phần nhỏ của quỹ. Đó là đa dạng hóa được đóng gói cho người tiết kiệm bình thường, và là lý do nhiều chuyên gia khuyên dùng quỹ chỉ số chi phí thấp làm phần lõi của danh mục dài hạn. (Đây là kiến thức, không phải khuyến nghị đầu tư.)</p>'],
  num: [
    '<p class="hyp">Hypothetical numbers.</p><p>Sunny or rainy summer, 50% each. Stock A sells ice cream, Stock B sells umbrellas.</p><div class="calc"><div>A: +30% sunny, −10% rainy → E(R) = 0.5 × 30 + 0.5 × (−10) = <b>10%</b></div><div>B: −10% sunny, +30% rainy → E(R) = <b>10%</b></div><div>Each alone swings between −10% and +30%</div><div>50/50 portfolio, sunny: 0.5 × 30 + 0.5 × (−10) = <b>10%</b></div><div>50/50 portfolio, rainy: 0.5 × (−10) + 0.5 × 30 = <b>10%</b></div></div><p>Same 10% expected return, zero uncertainty. Real assets are never perfectly opposite, but any correlation below 1 reduces risk.</p>',
    '<p class="hyp">Số liệu giả định.</p><p>Mùa hè nắng hoặc mưa, mỗi kịch bản 50%. Cổ phiếu A bán kem, cổ phiếu B bán ô.</p><div class="calc"><div>A: +30% nắng, −10% mưa → E(R) = 0,5 × 30 + 0,5 × (−10) = <b>10%</b></div><div>B: −10% nắng, +30% mưa → E(R) = <b>10%</b></div><div>Mỗi cổ phiếu riêng lẻ dao động từ −10% đến +30%</div><div>Danh mục 50/50, nắng: 0,5 × 30 + 0,5 × (−10) = <b>10%</b></div><div>Danh mục 50/50, mưa: 0,5 × (−10) + 0,5 × 30 = <b>10%</b></div></div><p>Cùng lợi suất kỳ vọng 10%, không còn bất định. Tài sản thật không bao giờ ngược chiều hoàn hảo, nhưng tương quan dưới 1 là đã giảm rủi ro.</p>'],
  quiz: [
    ['A stock returns +20% with 60% probability and −5% with 40%. E(R)?', 'Cổ phiếu lời 20% với xác suất 60% và lỗ 5% với 40%. E(R)?',
      [['7.5%', '7,5%'], ['10%', '10%'], ['12%', '12%'], ['15%', '15%']], 1,
      '0.6 × 20 + 0.4 × (−5) = 12 − 2 = 10%.', '0,6 × 20 + 0,4 × (−5) = 12 − 2 = 10%.'],
    ['Which risk can diversification NOT remove?', 'Rủi ro nào đa dạng hóa KHÔNG loại bỏ được?',
      [['A factory fire at one firm', 'Cháy nhà máy một công ty'], ['A CEO scandal', 'Bê bối CEO'], ['A global recession', 'Suy thoái toàn cầu'], ['A failed product launch', 'Ra mắt sản phẩm thất bại']], 2,
      'A recession hits almost every company: systematic risk.', 'Suy thoái ảnh hưởng gần như mọi công ty: rủi ro hệ thống.'],
    ['Why do stocks have higher long-run expected returns than deposits?', 'Vì sao cổ phiếu có lợi suất kỳ vọng dài hạn cao hơn tiền gửi?',
      [['Banks are inefficient', 'Ngân hàng kém hiệu quả'], ['Investors demand compensation for more risk', 'Nhà đầu tư đòi phần bù cho rủi ro cao hơn'], ['Stocks are guaranteed', 'Cổ phiếu được bảo đảm'], ['Governments subsidise them', 'Nhà nước trợ giá']], 1,
      'Risk-averse investors only hold risky assets if expected return is higher.', 'Nhà đầu tư ngại rủi ro chỉ giữ tài sản rủi ro nếu lợi suất kỳ vọng cao hơn.'],
    ['Diversification works best when assets are:', 'Đa dạng hóa hiệu quả nhất khi các tài sản:',
      [['Perfectly correlated', 'Tương quan hoàn hảo'], ['Weakly or negatively correlated', 'Tương quan yếu hoặc âm'], ['All in one industry', 'Cùng một ngành'], ['All bank deposits', 'Đều là tiền gửi']], 1,
      'The less they move together, the more their swings cancel out.', 'Càng ít biến động cùng chiều, dao động càng triệt tiêu nhau.']
  ],
  task: [
    'Pick two Vietnamese industries you think react oppositely to the same event (e.g. airlines and oil producers to oil prices). Build a simple two-scenario table like the ice cream example with your own assumed returns, and compute each stock’s and a 50/50 portfolio’s result.',
    'Chọn hai ngành ở Việt Nam mà em nghĩ phản ứng ngược nhau với cùng một sự kiện (ví dụ hàng không và khai thác dầu với giá dầu). Lập bảng hai kịch bản như ví dụ kem và ô với lợi suất em tự giả định, rồi tính kết quả từng cổ phiếu và danh mục 50/50.'],
  sum: [
    ['Expected return is a probability-weighted average, not a promise.', 'Lợi suất kỳ vọng là bình quân theo xác suất, không phải lời hứa.'],
    ['Higher risk must be compensated by higher expected return.', 'Rủi ro cao hơn phải được bù bằng lợi suất kỳ vọng cao hơn.'],
    ['Diversification removes company-specific risk but not systematic risk.', 'Đa dạng hóa loại bỏ rủi ro riêng nhưng không loại bỏ rủi ro hệ thống.']
  ],
  tool: 'diversify'
};

L.m6l1 = {
  min: 55,
  obj: [
    ['Distinguish revenue from profit.', 'Phân biệt doanh thu và lợi nhuận.'],
    ['Calculate gross, operating and net profit and their margins.', 'Tính lợi nhuận gộp, lợi nhuận hoạt động, lợi nhuận ròng và biên lợi nhuận.'],
    ['Explain what each margin tells an analyst.', 'Giải thích mỗi biên lợi nhuận cho chuyên viên phân tích biết điều gì.']
  ],
  intro: [
    'A café can sell 1.2 billion VND of coffee a year and still lose money. Revenue is what comes in; profit is what is left after everyone else is paid. Analysts peel profit back layer by layer to see where money leaks.',
    'Một quán cà phê có thể bán 1,2 tỷ đồng mỗi năm mà vẫn lỗ. Doanh thu là tiền vào; lợi nhuận là phần còn lại sau khi trả mọi người khác. Chuyên viên phân tích bóc lợi nhuận từng lớp để xem tiền rò rỉ ở đâu.'],
  sec: [
    ['The layers', 'Các tầng lợi nhuận',
     '<p><b>Revenue</b> (sales) − <b>Cost of goods sold</b> (beans, milk, cups) = <b>Gross profit</b>.<br>Gross profit − <b>Operating expenses</b> (rent, salaries, marketing) = <b>Operating profit</b> (EBIT).<br>Operating profit − <b>Interest</b> = <b>Profit before tax</b>.<br>Profit before tax − <b>Tax</b> = <b>Net profit</b> (net income).</p>',
     '<p><b>Doanh thu</b> − <b>Giá vốn hàng bán</b> (cà phê hạt, sữa, ly) = <b>Lợi nhuận gộp</b>.<br>Lợi nhuận gộp − <b>Chi phí hoạt động</b> (thuê mặt bằng, lương, marketing) = <b>Lợi nhuận hoạt động</b> (EBIT).<br>Lợi nhuận hoạt động − <b>Lãi vay</b> = <b>Lợi nhuận trước thuế</b>.<br>Lợi nhuận trước thuế − <b>Thuế</b> = <b>Lợi nhuận ròng</b>.</p>'],
    ['What each margin says', 'Mỗi biên lợi nhuận nói gì',
     '<p><b>Gross margin</b> (gross profit ÷ revenue) shows pricing power and production efficiency: how much each sale is worth before running the business. <b>Operating margin</b> shows how efficiently the whole business runs. <b>Net margin</b> shows what shareholders finally keep after lenders and the government. Software companies often have very high gross margins; supermarkets have low ones but sell huge volumes.</p>',
     '<p><b>Biên lợi nhuận gộp</b> (lợi nhuận gộp ÷ doanh thu) cho thấy sức mạnh định giá và hiệu quả sản xuất: mỗi đồng bán ra đáng bao nhiêu trước khi tính chi phí vận hành. <b>Biên lợi nhuận hoạt động</b> cho thấy toàn bộ doanh nghiệp vận hành hiệu quả ra sao. <b>Biên lợi nhuận ròng</b> cho thấy cổ đông cuối cùng giữ lại bao nhiêu sau khi trả chủ nợ và nhà nước. Công ty phần mềm thường có biên gộp rất cao; siêu thị có biên thấp nhưng bán số lượng khổng lồ.</p>'],
    ['Fixed and variable costs', 'Chi phí cố định và biến đổi',
     '<p><b>Variable costs</b> rise with each unit sold (beans, cups). <b>Fixed costs</b> stay the same whatever you sell (rent, base salaries). A business with high fixed costs is risky when sales fall but very profitable when sales rise, because each extra cup only adds its variable cost. This is <b>operating leverage</b>, which you will study in corporate finance.</p>',
     '<p><b>Chi phí biến đổi</b> tăng theo mỗi đơn vị bán ra (cà phê hạt, ly). <b>Chi phí cố định</b> không đổi dù bán bao nhiêu (thuê mặt bằng, lương cơ bản). Doanh nghiệp chi phí cố định cao gặp rủi ro khi doanh số giảm nhưng lời rất nhiều khi doanh số tăng, vì mỗi ly thêm chỉ tốn chi phí biến đổi. Đó là <b>đòn bẩy hoạt động</b>, em sẽ học trong tài chính doanh nghiệp.</p>']
  ],
  vocab: [
    ['Revenue', 'Doanh thu', 'Total money from selling goods or services.', 'Tổng tiền thu từ bán hàng hóa, dịch vụ.'],
    ['COGS', 'Giá vốn hàng bán', 'Direct costs of producing what was sold.', 'Chi phí trực tiếp để tạo ra hàng đã bán.'],
    ['Gross profit', 'Lợi nhuận gộp', 'Revenue minus COGS.', 'Doanh thu trừ giá vốn.'],
    ['Operating expenses', 'Chi phí hoạt động', 'Costs of running the business: rent, salaries, marketing.', 'Chi phí vận hành: thuê, lương, marketing.'],
    ['Operating profit (EBIT)', 'Lợi nhuận hoạt động', 'Profit from operations before interest and tax.', 'Lợi nhuận từ hoạt động trước lãi vay và thuế.'],
    ['Net income', 'Lợi nhuận ròng', 'What remains after all costs, interest and tax.', 'Phần còn lại sau mọi chi phí, lãi vay và thuế.'],
    ['Margin', 'Biên lợi nhuận', 'A profit layer divided by revenue.', 'Một tầng lợi nhuận chia cho doanh thu.']
  ],
  ex: ['Apple vs a supermarket', 'Apple và siêu thị',
    '<p>Apple’s annual report shows a gross margin in the mid-40% range, meaning it keeps over 40 cents of every sales dollar after the cost of making its products, thanks to brand and pricing power. Large supermarket chains typically run gross margins around 20–25% and net margins of only a few percent; they make money through volume. Neither is “better”: margins must be read against the business model. Check Apple’s latest 10-K on investor.apple.com for the exact figure.</p>',
    '<p>Báo cáo thường niên của Apple cho thấy biên gộp quanh mức giữa 40%, tức giữ lại hơn 40 cent trên mỗi đô la doanh thu sau chi phí sản xuất, nhờ thương hiệu và sức mạnh định giá. Các chuỗi siêu thị lớn thường có biên gộp khoảng 20–25% và biên ròng chỉ vài phần trăm; họ kiếm tiền nhờ số lượng. Không bên nào “tốt hơn”: biên lợi nhuận phải đọc theo mô hình kinh doanh. Xem báo cáo 10-K mới nhất của Apple trên investor.apple.com để có số chính xác.</p>'],
  num: [
    '<p class="hyp">Hypothetical café, millions of VND per year.</p><div class="calc"><div>Revenue = <b>1,200</b></div><div>COGS = 480 → Gross profit = <b>720</b> (gross margin 60%)</div><div>Opex: rent 180 + salaries 240 + marketing 30 = 450</div><div>Operating profit = 720 − 450 = <b>270</b> (operating margin 22.5%)</div><div>Interest on loan = 30 → Profit before tax = <b>240</b></div><div>Tax 20% = 48 → Net income = <b>192</b> (net margin 16%)</div></div><p>If sales fall 20% to 960 and COGS stays 40% of sales (384), gross profit is 576 but fixed opex is still 450: operating profit drops to 126, a 53% fall from a 20% sales drop. That is operating leverage.</p>',
    '<p class="hyp">Quán cà phê giả định, triệu đồng mỗi năm.</p><div class="calc"><div>Doanh thu = <b>1.200</b></div><div>Giá vốn = 480 → Lợi nhuận gộp = <b>720</b> (biên gộp 60%)</div><div>Chi phí hoạt động: thuê 180 + lương 240 + marketing 30 = 450</div><div>Lợi nhuận hoạt động = 720 − 450 = <b>270</b> (biên hoạt động 22,5%)</div><div>Lãi vay = 30 → Lợi nhuận trước thuế = <b>240</b></div><div>Thuế 20% = 48 → Lợi nhuận ròng = <b>192</b> (biên ròng 16%)</div></div><p>Nếu doanh thu giảm 20% còn 960 và giá vốn vẫn 40% doanh thu (384), lợi nhuận gộp là 576 nhưng chi phí cố định vẫn 450: lợi nhuận hoạt động còn 126, giảm 53% chỉ vì doanh thu giảm 20%. Đó là đòn bẩy hoạt động.</p>'],
  quiz: [
    ['Revenue 500, COGS 300. Gross margin?', 'Doanh thu 500, giá vốn 300. Biên gộp?',
      [['30%', '30%'], ['40%', '40%'], ['60%', '60%'], ['200%', '200%']], 1,
      '(500 − 300) ÷ 500 = 40%.', '(500 − 300) ÷ 500 = 40%.'],
    ['Rent for a shop is usually a:', 'Tiền thuê cửa hàng thường là:',
      [['Variable cost', 'Chi phí biến đổi'], ['Fixed cost', 'Chi phí cố định'], ['Revenue', 'Doanh thu'], ['COGS', 'Giá vốn']], 1,
      'It doesn’t change with the number of cups sold.', 'Nó không đổi theo số ly bán ra.'],
    ['Which line comes right after subtracting interest from operating profit?', 'Dòng nào ngay sau khi lấy lợi nhuận hoạt động trừ lãi vay?',
      [['Gross profit', 'Lợi nhuận gộp'], ['Profit before tax', 'Lợi nhuận trước thuế'], ['Revenue', 'Doanh thu'], ['Net income', 'Lợi nhuận ròng']], 1,
      'EBIT − interest = profit before tax; then tax gives net income.', 'EBIT − lãi vay = lợi nhuận trước thuế; trừ thuế ra lợi nhuận ròng.'],
    ['Two firms have the same revenue. Firm X has higher fixed costs. If sales rise 10%, whose operating profit grows faster?', 'Hai công ty cùng doanh thu. X có chi phí cố định cao hơn. Nếu doanh thu tăng 10%, lợi nhuận hoạt động của ai tăng nhanh hơn?',
      [['Firm X', 'Công ty X'], ['The other firm', 'Công ty kia'], ['Same', 'Như nhau'], ['Neither grows', 'Không ai tăng']], 0,
      'High fixed costs mean each extra sale drops mostly to profit: higher operating leverage.', 'Chi phí cố định cao nghĩa là mỗi khoản bán thêm phần lớn thành lợi nhuận: đòn bẩy hoạt động cao hơn.']
  ],
  task: [
    'Open Apple’s latest annual report (10-K) on investor.apple.com. Find net sales, cost of sales, operating income and net income. Calculate gross, operating and net margin, and write three English sentences on what they say about Apple’s business.',
    'Mở báo cáo thường niên (10-K) mới nhất của Apple trên investor.apple.com. Tìm doanh thu thuần, giá vốn, lợi nhuận hoạt động và lợi nhuận ròng. Tính biên gộp, biên hoạt động và biên ròng, rồi viết ba câu tiếng Anh về những gì chúng nói về mô hình kinh doanh của Apple.'],
  sum: [
    ['Revenue − COGS − opex − interest − tax = net income.', 'Doanh thu − giá vốn − chi phí hoạt động − lãi vay − thuế = lợi nhuận ròng.'],
    ['Each margin answers a different question about the business.', 'Mỗi biên lợi nhuận trả lời một câu hỏi khác nhau về doanh nghiệp.'],
    ['High fixed costs amplify profit swings: operating leverage.', 'Chi phí cố định cao khuếch đại biến động lợi nhuận: đòn bẩy hoạt động.']
  ],
  tool: 'margins'
};

L.m7l1 = {
  min: 55,
  obj: [
    ['State and explain the accounting equation.', 'Phát biểu và giải thích phương trình kế toán.'],
    ['Record how common transactions change assets, liabilities and equity.', 'Ghi nhận cách các giao dịch thông thường thay đổi tài sản, nợ và vốn chủ.'],
    ['Explain why the equation always balances.', 'Giải thích vì sao phương trình luôn cân bằng.']
  ],
  intro: [
    'Everything a company owns was paid for by someone: either lenders or owners. That single idea, written as an equation, is the foundation of every balance sheet you will ever read, from a street food stall to JPMorgan.',
    'Mọi thứ công ty sở hữu đều được ai đó tài trợ: hoặc chủ nợ, hoặc chủ sở hữu. Ý tưởng duy nhất đó, viết thành phương trình, là nền móng của mọi bảng cân đối em sẽ đọc, từ quầy hàng ăn vỉa hè đến JPMorgan.'],
  sec: [
    ['The equation', 'Phương trình',
     '<p class="formula">Assets = Liabilities + Shareholders’ equity</p><p><b>Assets</b> are resources the company controls that will bring future benefit: cash, inventory, equipment, money customers owe. <b>Liabilities</b> are obligations to others: loans, unpaid supplier bills. <b>Equity</b> is the owners’ claim: money they put in plus profits kept in the business (retained earnings). Read the right side as “who funded the left side.”</p>',
     '<p class="formula">Tài sản = Nợ phải trả + Vốn chủ sở hữu</p><p><b>Tài sản</b> là nguồn lực công ty kiểm soát và mang lại lợi ích tương lai: tiền, hàng tồn kho, thiết bị, khoản khách hàng nợ. <b>Nợ phải trả</b> là nghĩa vụ với người khác: khoản vay, hóa đơn nhà cung cấp chưa trả. <b>Vốn chủ</b> là quyền của chủ sở hữu: tiền họ góp cộng lợi nhuận giữ lại trong doanh nghiệp. Hãy đọc vế phải là “ai đã tài trợ cho vế trái”.</p>'],
    ['Why it always balances', 'Vì sao luôn cân bằng',
     '<p>Every transaction has two sides. Borrow cash: assets up, liabilities up. Buy equipment with cash: one asset up, another down. Earn a profit: assets up (cash), equity up (retained earnings). This is <b>double-entry bookkeeping</b>, invented in Renaissance Italy. If your balance sheet doesn’t balance, you made an error.</p>',
     '<p>Mỗi giao dịch có hai mặt. Vay tiền: tài sản tăng, nợ tăng. Mua thiết bị bằng tiền: một tài sản tăng, tài sản khác giảm. Có lãi: tài sản tăng (tiền), vốn chủ tăng (lợi nhuận giữ lại). Đây là <b>ghi sổ kép</b>, ra đời ở Ý thời Phục Hưng. Nếu bảng cân đối không cân, em đã làm sai ở đâu đó.</p>'],
    ['Why finance people care', 'Vì sao người làm tài chính quan tâm',
     '<p>The right side shows <b>capital structure</b>: how much is funded by debt vs equity. A bank with assets of 1,100 and equity of 100 is funded over 90% by other people’s money (Module 3). A tech company might be funded mostly by equity. In investment banking, nearly every model starts by making sure the balance sheet balances.</p>',
     '<p>Vế phải cho thấy <b>cơ cấu vốn</b>: bao nhiêu được tài trợ bằng nợ và bao nhiêu bằng vốn chủ. Ngân hàng có tài sản 1.100 và vốn chủ 100 được tài trợ hơn 90% bằng tiền của người khác (Module 3). Công ty công nghệ có thể được tài trợ chủ yếu bằng vốn chủ. Trong ngân hàng đầu tư, gần như mọi mô hình đều bắt đầu bằng việc đảm bảo bảng cân đối cân bằng.</p>']
  ],
  vocab: [
    ['Assets', 'Tài sản', 'Resources a company controls with future economic benefit.', 'Nguồn lực công ty kiểm soát, mang lại lợi ích kinh tế tương lai.'],
    ['Liabilities', 'Nợ phải trả', 'Obligations owed to others.', 'Nghĩa vụ phải trả cho người khác.'],
    ['Shareholders’ equity', 'Vốn chủ sở hữu', 'Owners’ claim: contributed capital plus retained earnings.', 'Quyền của chủ sở hữu: vốn góp cộng lợi nhuận giữ lại.'],
    ['Retained earnings', 'Lợi nhuận giữ lại', 'Cumulative profits not paid out as dividends.', 'Lợi nhuận tích lũy chưa chia cổ tức.'],
    ['Double-entry bookkeeping', 'Ghi sổ kép', 'Recording every transaction with two equal effects.', 'Ghi mỗi giao dịch với hai tác động bằng nhau.'],
    ['Balance sheet', 'Bảng cân đối kế toán', 'Snapshot of assets, liabilities and equity at a date.', 'Ảnh chụp tài sản, nợ và vốn chủ tại một thời điểm.'],
    ['Capital structure', 'Cơ cấu vốn', 'The mix of debt and equity funding a company.', 'Tỷ lệ nợ và vốn chủ tài trợ cho công ty.']
  ],
  ex: ['Reading a real balance sheet', 'Đọc một bảng cân đối thật',
    '<p>Open any annual report and the balance sheet ends with two totals: “Total assets” and “Total liabilities and shareholders’ equity.” They are always identical. In Apple’s recent 10-Ks, liabilities make up most of the right side, partly because Apple has spent heavily on share buybacks, which reduce equity. That is a capital structure choice, visible in one line of the equation.</p>',
    '<p>Mở bất kỳ báo cáo thường niên nào, bảng cân đối kết thúc bằng hai tổng: “Tổng tài sản” và “Tổng nợ phải trả và vốn chủ sở hữu.” Hai con số luôn bằng nhau. Trong các báo cáo 10-K gần đây của Apple, nợ phải trả chiếm phần lớn vế phải, một phần vì Apple chi rất nhiều để mua lại cổ phiếu, làm giảm vốn chủ. Đó là lựa chọn cơ cấu vốn, thể hiện trong một dòng của phương trình.</p>'],
  num: [
    '<p class="hyp">Hypothetical bubble-tea shop, millions of VND.</p><div class="calc"><div>1. Owner invests 500 cash → A 500 = L 0 + E 500</div><div>2. Bank loan 300 → A 800 = L 300 + E 500</div><div>3. Buy equipment 400 with cash → A 800 (cash 400, equipment 400) = L 300 + E 500</div><div>4. Buy ingredients 100 on credit → A 900 = L 400 + E 500</div><div>5. Sell drinks for 250 cash using 100 of ingredients → profit 150; A 1,050 = L 400 + E 650</div></div><p>After every step, both sides match. Notice step 3 changed nothing on the right: swapping one asset for another doesn’t change who funded the company.</p>',
    '<p class="hyp">Quán trà sữa giả định, triệu đồng.</p><div class="calc"><div>1. Chủ góp 500 tiền mặt → TS 500 = N 0 + VCSH 500</div><div>2. Vay ngân hàng 300 → TS 800 = N 300 + VCSH 500</div><div>3. Mua thiết bị 400 bằng tiền → TS 800 (tiền 400, thiết bị 400) = N 300 + VCSH 500</div><div>4. Mua nguyên liệu 100 trả chậm → TS 900 = N 400 + VCSH 500</div><div>5. Bán đồ uống thu 250 tiền mặt, dùng hết 100 nguyên liệu → lãi 150; TS 1.050 = N 400 + VCSH 650</div></div><p>Sau mỗi bước, hai vế luôn bằng nhau. Bước 3 không thay đổi vế phải: đổi tài sản này lấy tài sản khác không thay đổi ai đã tài trợ cho công ty.</p>'],
  quiz: [
    ['Assets 900, liabilities 350. Equity?', 'Tài sản 900, nợ 350. Vốn chủ?',
      [['350', '350'], ['550', '550'], ['1,250', '1.250'], ['900', '900']], 1,
      'E = A − L = 900 − 350 = 550.', 'VCSH = TS − N = 900 − 350 = 550.'],
    ['A company repays a 100 loan with cash. Effect?', 'Công ty trả khoản vay 100 bằng tiền. Tác động?',
      [['Assets −100, liabilities −100', 'TS −100, nợ −100'], ['Assets +100, equity +100', 'TS +100, VCSH +100'], ['No change', 'Không đổi'], ['Equity −100', 'VCSH −100']], 0,
      'Cash leaves and the obligation disappears: both sides fall equally.', 'Tiền ra và nghĩa vụ biến mất: hai vế cùng giảm.'],
    ['Buying inventory on credit increases:', 'Mua hàng tồn kho trả chậm làm tăng:',
      [['Assets and equity', 'TS và VCSH'], ['Assets and liabilities', 'TS và nợ'], ['Only equity', 'Chỉ VCSH'], ['Revenue', 'Doanh thu']], 1,
      'You gain inventory and owe the supplier.', 'Em có thêm hàng và nợ nhà cung cấp.'],
    ['Why can’t the equation be unbalanced?', 'Vì sao phương trình không thể mất cân bằng?',
      [['Auditors force it', 'Kiểm toán ép buộc'], ['Every transaction has two equal effects', 'Mỗi giao dịch có hai tác động bằng nhau'], ['Assets are always zero', 'Tài sản luôn bằng 0'], ['Equity is fixed by law', 'Luật cố định VCSH']], 1,
      'Double entry: every resource has a source, so both sides move together.', 'Ghi sổ kép: mỗi nguồn lực đều có nguồn tài trợ, nên hai vế luôn đi cùng nhau.']
  ],
  task: [
    'Continue the bubble-tea example with three new transactions of your own: pay the supplier 100, pay 40 in salaries, and the owner withdraws 50 as a dividend. Show A = L + E after each. Which one reduces equity without being an expense?',
    'Tiếp tục ví dụ quán trà sữa với ba giao dịch em tự thêm: trả nhà cung cấp 100, trả lương 40, chủ rút 50 làm cổ tức. Trình bày TS = N + VCSH sau mỗi giao dịch. Giao dịch nào làm giảm vốn chủ mà không phải chi phí?'],
  sum: [
    ['Assets = Liabilities + Equity, always.', 'Tài sản = Nợ phải trả + Vốn chủ, luôn luôn.'],
    ['The right side shows who funded the left side.', 'Vế phải cho thấy ai tài trợ cho vế trái.'],
    ['Every transaction has two equal effects: double entry.', 'Mỗi giao dịch có hai tác động bằng nhau: ghi sổ kép.']
  ],
  tool: 'equation'
};

})(window.LESSONS);

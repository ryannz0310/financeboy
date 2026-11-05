/* Curriculum map. status: lessons with content live in window.LESSONS; the rest show as upcoming. */
window.COURSE = [
  { id: 'm1', en: 'Introduction to Finance', vi: 'Nhập môn Tài chính',
    q: ['Why does finance exist?', 'Tại sao tài chính tồn tại?'],
    lessons: [
      ['m1l1', 'What is finance?', 'Tài chính là gì?'],
      ['m1l2', 'How money moves through an economy', 'Tiền lưu chuyển trong nền kinh tế'],
      ['m1l3', 'The three areas of finance and who works in them', 'Ba lĩnh vực tài chính và những người làm trong đó']
    ] },
  { id: 'm2', en: 'Understanding Money', vi: 'Hiểu về Tiền',
    q: ['Why is money today worth more than money tomorrow?', 'Tại sao tiền hôm nay giá trị hơn tiền ngày mai?'],
    lessons: [
      ['m2l1', 'What money is and what it does', 'Tiền là gì và tiền làm gì'],
      ['m2l2', 'Inflation and purchasing power', 'Lạm phát và sức mua'],
      ['m2l3', 'Simple vs compound interest', 'Lãi đơn và lãi kép'],
      ['m2l4', 'Time value of money: present and future value', 'Giá trị thời gian của tiền: hiện giá và giá trị tương lai']
    ] },
  { id: 'm3', en: 'Banking & Financial Institutions', vi: 'Ngân hàng & Định chế tài chính',
    q: ['How do banks and central banks actually work?', 'Ngân hàng và ngân hàng trung ương vận hành ra sao?'],
    lessons: [
      ['m3l1', 'How banks actually make money', 'Ngân hàng thực sự kiếm tiền thế nào'],
      ['m3l2', 'Central banks, the Fed and interest rates', 'Ngân hàng trung ương, Fed và lãi suất'],
      ['m3x1', 'Commercial vs investment banks', 'Ngân hàng thương mại và ngân hàng đầu tư'],
      ['m3x2', 'Credit cards, mortgages and business loans', 'Thẻ tín dụng, vay mua nhà và vay doanh nghiệp']
    ] },
  { id: 'm4', en: 'Financial Markets', vi: 'Thị trường tài chính',
    q: ['How are the prices of stocks and bonds set?', 'Giá cổ phiếu, trái phiếu được hình thành thế nào?'],
    lessons: [
      ['m4l1', 'Primary vs secondary, equity vs debt markets', 'Thị trường sơ cấp – thứ cấp, cổ phiếu – nợ'],
      ['m4l2', 'How a stock price is actually set', 'Giá cổ phiếu thực sự được hình thành thế nào'],
      ['m4x1', 'Bull vs bear markets', 'Thị trường bò và thị trường gấu'],
      ['m4x2', 'Brokers, dealers and institutions', 'Môi giới, tự doanh và tổ chức']
    ] },
  { id: 'm5', en: 'Understanding Investments', vi: 'Hiểu về Đầu tư',
    q: ['Why do different assets earn different returns?', 'Tại sao các tài sản khác nhau có lợi suất khác nhau?'],
    lessons: [
      ['m5l1', 'Risk, return and diversification', 'Rủi ro, lợi nhuận và đa dạng hóa'],
      ['m5x1', 'Stocks, bonds, ETFs and index funds', 'Cổ phiếu, trái phiếu, ETF và quỹ chỉ số'],
      ['m5x2', 'Dividends and capital gains', 'Cổ tức và lãi vốn'],
      ['m5x3', 'Liquidity, volatility and risk tolerance', 'Thanh khoản, biến động và khẩu vị rủi ro']
    ] },
  { id: 'm6', en: 'Businesses & Corporate Finance', vi: 'Doanh nghiệp & Tài chính doanh nghiệp',
    q: ['How do companies make money and raise money?', 'Doanh nghiệp kiếm tiền và huy động vốn thế nào?'],
    lessons: [
      ['m6l1', 'Revenue vs profit: the layers of the income statement', 'Doanh thu và lợi nhuận: các tầng lợi nhuận'],
      ['m6x1', 'Fixed vs variable costs', 'Chi phí cố định và chi phí biến đổi'],
      ['m6x2', 'Debt vs equity: how companies raise capital', 'Nợ và vốn chủ: doanh nghiệp huy động vốn thế nào'],
      ['m6x3', 'Shareholders, stakeholders and financial decisions', 'Cổ đông, các bên liên quan và quyết định tài chính']
    ] },
  { id: 'm7', en: 'Introduction to Accounting', vi: 'Nhập môn Kế toán',
    q: ['How do we read a company’s financial statements?', 'Đọc báo cáo tài chính thế nào?'],
    lessons: [
      ['m7l1', 'The accounting equation', 'Phương trình kế toán'],
      ['m7x1', 'The income statement', 'Báo cáo kết quả kinh doanh'],
      ['m7x2', 'The balance sheet', 'Bảng cân đối kế toán'],
      ['m7x3', 'The cash flow statement', 'Báo cáo lưu chuyển tiền tệ'],
      ['m7l5', 'Profit vs cash: how the three statements connect', 'Lợi nhuận và tiền mặt: ba báo cáo nối với nhau thế nào']
    ] },
  { id: 'm8', en: 'The Finance Industry', vi: 'Ngành Tài chính',
    q: ['Who does what in finance, and what does each job need?', 'Ai làm gì trong ngành, cần kỹ năng gì?'],
    lessons: [
      ['m8l1', 'Investment banking: what bankers actually do', 'Ngân hàng đầu tư: chuyên viên thực sự làm gì'],
      ['m8x2', 'Asset management, hedge funds and equity research', 'Quản lý tài sản, quỹ phòng hộ và phân tích cổ phiếu'],
      ['m8x3', 'Skills each career requires', 'Kỹ năng mỗi nghề cần']
    ] },
  { id: 'm9', en: 'Financial Modeling & Valuation', vi: 'Mô hình tài chính & Định giá',
    q: ['How do analysts turn financial statements into a value?', 'Chuyên viên biến báo cáo tài chính thành giá trị doanh nghiệp thế nào?'],
    lessons: [
      ['m9l1', 'The three-statement model', 'Mô hình ba báo cáo'],
      ['m9l2', 'Valuation: DCF, comps and precedent transactions', 'Định giá: DCF, so sánh doanh nghiệp và so sánh thương vụ'],
      ['m9x1', 'Reading a 10-K like an analyst', 'Đọc báo cáo 10-K như chuyên viên phân tích'],
      ['m9x2', 'Leveraged buyouts: IRR and MOIC', 'Mua lại bằng nợ: IRR và MOIC']
    ] }
];
window.LESSONS = {};

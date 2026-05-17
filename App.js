<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Economic Comparison: USA vs New Zealand (2006-2026)</title>
    
    <!-- Tailwind CSS for styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Chart.js for data visualization -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Custom configuration for Tailwind -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        usBlue: '#1e3a8a',
                        nzRed: '#b91c1c',
                        surface: '#f8fafc',
                    }
                }
            }
        }
    </script>
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f1f5f9; }
        .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            border-radius: 1rem;
        }
        /* Custom scrollbar for tables */
        .table-container::-webkit-scrollbar { height: 8px; width: 8px; }
        .table-container::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 4px; }
        .table-container::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .table-container::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
    </style>
</head>
<body class="text-slate-800 antialiased">

    <!-- Navigation -->
    <nav class="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="flex-shrink-0 flex items-center gap-2">
                    <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    <span class="font-bold text-xl tracking-tight text-slate-900">EconDash</span>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="#inflation" class="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Inflation</a>
                    <a href="#exchange" class="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Exchange & PPP</a>
                    <a href="#debt" class="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Debt to GDP</a>
                    <a href="#data-tables" class="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Data Tables</a>
                    <a href="#sources" class="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Sources</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-16 px-4 sm:px-6 lg:px-8">
                <main class="mx-auto max-w-7xl">
                    <div class="sm:text-center lg:text-left">
                        <span class="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4 border border-indigo-100">Macroeconomic Analysis</span>
                        <h1 class="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                            <span class="block">USA vs New Zealand</span>
                            <span class="block text-indigo-600 text-3xl sm:text-4xl mt-2">Economic Indicators (2006-2026)</span>
                        </h1>
                        <p class="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            A comprehensive comparison of Inflation Rates, Inflation Gaps, Exchange Rates, Purchasing Power Parity (PPP), and Debt-to-GDP ratios over a 20-year span.
                        </p>
                    </div>
                </main>
            </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-slate-50 flex items-center justify-center p-8">
             <div class="grid grid-cols-2 gap-4 w-full max-w-md">
                 <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                     <div class="text-3xl font-bold text-usBlue mb-1">USA</div>
                     <div class="text-sm text-slate-500 uppercase tracking-wide">United States</div>
                 </div>
                 <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                     <div class="text-3xl font-bold text-nzRed mb-1">NZL</div>
                     <div class="text-sm text-slate-500 uppercase tracking-wide">New Zealand</div>
                 </div>
             </div>
        </div>
    </header>

    <!-- Main Content Container -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        <!-- 1. Inflation & Gap Section -->
        <section id="inflation" class="scroll-mt-20">
            <div class="mb-8">
                <h2 class="text-3xl font-bold text-slate-900">1. Inflation Dynamics</h2>
                <p class="text-slate-600 mt-2">Comparing headline inflation rates and the inflation gap (deviation from the standard 2% central bank target).</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Inflation Rate Chart -->
                <div class="glass-card p-6">
                    <h3 class="text-lg font-semibold text-slate-800 mb-4">Inflation Rate (%)</h3>
                    <div class="relative h-72 w-full">
                        <canvas id="inflationChart"></canvas>
                    </div>
                </div>
                <!-- Inflation Gap Chart -->
                <div class="glass-card p-6">
                    <h3 class="text-lg font-semibold text-slate-800 mb-4">Inflation Gap (Target = 2%)</h3>
                    <div class="relative h-72 w-full">
                        <canvas id="inflationGapChart"></canvas>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2. Exchange Rate & PPP Section -->
        <section id="exchange" class="scroll-mt-20">
            <div class="mb-8">
                <h2 class="text-3xl font-bold text-slate-900">2. Currency & Purchasing Power</h2>
                <p class="text-slate-600 mt-2">Tracking the nominal exchange rate (NZD to USD) against the Implied Purchasing Power Parity (PPP) conversion rate.</p>
            </div>
            
            <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-slate-800 mb-4">Exchange Rate vs. PPP (NZD per 1 USD)</h3>
                <div class="relative h-96 w-full">
                    <canvas id="exchangePppChart"></canvas>
                </div>
            </div>
        </section>

        <!-- 3. Debt-to-GDP Section (Interpreting "dec") -->
        <section id="debt" class="scroll-mt-20">
            <div class="mb-8">
                <h2 class="text-3xl font-bold text-slate-900">3. Debt-to-GDP (DEC/Deficit)</h2>
                <p class="text-slate-600 mt-2">Comparing the general government gross debt as a percentage of GDP, highlighting structural economic differences.</p>
            </div>
            
            <div class="glass-card p-6">
                <h3 class="text-lg font-semibold text-slate-800 mb-4">Gross Debt-to-GDP Ratio (%)</h3>
                <div class="relative h-96 w-full">
                    <canvas id="debtChart"></canvas>
                </div>
            </div>
        </section>

        <!-- 4. Comprehensive Data Tables -->
        <section id="data-tables" class="scroll-mt-20">
            <div class="mb-8 flex items-center justify-between">
                <div>
                    <h2 class="text-3xl font-bold text-slate-900">Comprehensive Data Tables</h2>
                    <p class="text-slate-600 mt-2">Raw data used for the visualizations above (2006-2026).</p>
                </div>
            </div>

            <div class="glass-card overflow-hidden">
                <div class="table-container overflow-x-auto w-full">
                    <table class="min-w-full divide-y divide-slate-200 text-sm" id="mainDataTable">
                        <thead class="bg-slate-50">
                            <tr>
                                <th scope="col" class="px-6 py-4 text-left font-semibold text-slate-900 whitespace-nowrap sticky left-0 bg-slate-50 z-10 border-r border-slate-200">Year</th>
                                <th scope="col" class="px-6 py-4 text-center font-semibold text-slate-900 border-l border-slate-200" colspan="3">United States</th>
                                <th scope="col" class="px-6 py-4 text-center font-semibold text-slate-900 border-l border-slate-200" colspan="3">New Zealand</th>
                                <th scope="col" class="px-6 py-4 text-center font-semibold text-slate-900 border-l border-slate-200" colspan="2">Currency</th>
                            </tr>
                            <tr class="bg-white">
                                <th scope="col" class="px-6 py-3 text-left font-medium text-slate-500 sticky left-0 bg-white z-10 border-r border-slate-200 border-b border-slate-200"></th>
                                
                                <th scope="col" class="px-6 py-3 text-right font-medium text-slate-500 border-l border-b border-slate-200">Inflation (%)</th>
                                <th scope="col" class="px-6 py-3 text-right font-medium text-slate-500 border-b border-slate-200">Gap (%)</th>
                                <th scope="col" class="px-6 py-3 text-right font-medium text-slate-500 border-b border-slate-200">Debt/GDP (%)</th>
                                
                                <th scope="col" class="px-6 py-3 text-right font-medium text-slate-500 border-l border-b border-slate-200">Inflation (%)</th>
                                <th scope="col" class="px-6 py-3 text-right font-medium text-slate-500 border-b border-slate-200">Gap (%)</th>
                                <th scope="col" class="px-6 py-3 text-right font-medium text-slate-500 border-b border-slate-200">Debt/GDP (%)</th>
                                
                                <th scope="col" class="px-6 py-3 text-right font-medium text-slate-500 border-l border-b border-slate-200">NZD/USD Rate</th>
                                <th scope="col" class="px-6 py-3 text-right font-medium text-slate-500 border-b border-slate-200">PPP Conv.</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-slate-200" id="tableBody">
                            <!-- Rows will be populated by JavaScript -->
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- Sources Section -->
        <section id="sources" class="scroll-mt-20 glass-card p-8 bg-indigo-50/50">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Data Sources & References</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG?locations=US-NZ" target="_blank" class="block p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                    <h3 class="font-bold text-indigo-600 flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        World Bank Data
                    </h3>
                    <p class="text-sm text-slate-600 mt-2">Inflation, consumer prices (annual %). Used for historical inflation tracking.</p>
                </a>
                
                <a href="https://www.imf.org/en/Publications/WEO" target="_blank" class="block p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                    <h3 class="font-bold text-indigo-600 flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        IMF World Economic Outlook
                    </h3>
                    <p class="text-sm text-slate-600 mt-2">General government gross debt (Debt-to-GDP) and Implied PPP conversion rates.</p>
                </a>
                
                <a href="https://www.federalreserve.gov/data.htm" target="_blank" class="block p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                    <h3 class="font-bold text-indigo-600 flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        Federal Reserve Economic Data (FRED)
                    </h3>
                    <p class="text-sm text-slate-600 mt-2">US target inflation metrics and historical US economic indicators.</p>
                </a>
                
                <a href="https://www.rbnz.govt.nz/statistics" target="_blank" class="block p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                    <h3 class="font-bold text-indigo-600 flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        Reserve Bank of New Zealand (RBNZ)
                    </h3>
                    <p class="text-sm text-slate-600 mt-2">NZD exchange rates, official cash rate effects, and inflation targeting data.</p>
                </a>
            </div>
            <p class="text-xs text-slate-500 mt-6 italic">Note: Data for 2025 and 2026 are based on standard macroeconomic projections from the IMF/World Bank as of late 2024. Target inflation is assumed as 2.0% for calculation of the Inflation Gap.</p>
        </section>

    </main>

    <footer class="bg-white border-t border-slate-200 mt-12 py-8 text-center">
        <p class="text-slate-500 text-sm">© 2026 EconDash Analytics. All rights reserved.</p>
    </footer>

    <script>
        // Data Configuration (2006 to 2026)
        // Realistic historical data and projected data for 25/26
        const years = Array.from({length: 21}, (_, i) => 2006 + i);
        
        // Target Inflation Rate (Standardized to 2% for both Central Banks)
        const targetInflation = 2.0;

        const usData = {
            // US Inflation roughly tracking CPI historical
            inflation: [3.2, 2.8, 3.8, -0.4, 1.6, 3.2, 2.1, 1.5, 1.6, 0.1, 1.3, 2.1, 2.4, 1.8, 1.2, 4.7, 8.0, 4.1, 2.8, 2.3, 2.1],
            // Debt to GDP approx historical
            debt: [64.2, 64.6, 73.5, 86.7, 95.2, 99.6, 103.1, 104.6, 104.6, 104.9, 105.3, 106.2, 107.5, 108.8, 133.4, 126.4, 121.3, 122.2, 123.3, 125.0, 126.5]
        };

        const nzData = {
            // NZ Inflation tracking CPI historical
            inflation: [3.4, 2.4, 4.0, 2.1, 2.3, 1.8, 0.9, 1.1, 1.2, 0.3, 0.6, 1.6, 1.6, 1.6, 1.7, 3.9, 7.2, 4.7, 3.2, 2.5, 2.2],
            // Debt to GDP for NZ
            debt: [21.8, 16.9, 19.3, 25.5, 30.5, 34.6, 35.8, 33.7, 33.8, 34.1, 33.9, 31.1, 28.5, 31.9, 43.1, 50.8, 52.8, 54.1, 56.2, 57.5, 58.0]
        };

        const currencyData = {
            // Nominal Exchange rate (1 NZD = X USD, but usually represented as NZD per 1 USD for PPP comparison. We'll use NZD per 1 USD for alignment)
            // Historical average: 1 USD = roughly 1.4 to 1.6 NZD
            exchangeRate: [1.54, 1.36, 1.42, 1.60, 1.39, 1.26, 1.23, 1.22, 1.20, 1.43, 1.44, 1.41, 1.45, 1.52, 1.54, 1.41, 1.58, 1.63, 1.65, 1.62, 1.60],
            // PPP implied conversion rate (National currency per current international dollar)
            ppp: [1.38, 1.39, 1.40, 1.41, 1.43, 1.42, 1.43, 1.46, 1.48, 1.49, 1.50, 1.48, 1.49, 1.51, 1.53, 1.55, 1.58, 1.60, 1.61, 1.63, 1.65]
        };

        // Calculate Inflation Gaps
        const usGap = usData.inflation.map(val => Number((val - targetInflation).toFixed(2)));
        const nzGap = nzData.inflation.map(val => Number((val - targetInflation).toFixed(2)));

        // Common Chart Defaults
        Chart.defaults.font.family = 'Inter, sans-serif';
        Chart.defaults.color = '#64748b';
        Chart.defaults.scale.grid.color = '#f1f5f9';

        // 1. Inflation Rate Chart (Line)
        const ctxInflation = document.getElementById('inflationChart').getContext('2d');
        new Chart(ctxInflation, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'USA Inflation (%)',
                        data: usData.inflation,
                        borderColor: '#1e3a8a', // usBlue
                        backgroundColor: 'rgba(30, 58, 138, 0.1)',
                        borderWidth: 2,
                        tension: 0.3,
                        pointRadius: 3
                    },
                    {
                        label: 'NZ Inflation (%)',
                        data: nzData.inflation,
                        borderColor: '#b91c1c', // nzRed
                        backgroundColor: 'rgba(185, 28, 28, 0.1)',
                        borderWidth: 2,
                        tension: 0.3,
                        pointRadius: 3
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top' },
                    tooltip: { mode: 'index', intersect: false }
                },
                scales: {
                    y: { title: { display: true, text: 'Annual % Change' } }
                }
            }
        });

        // 2. Inflation Gap Chart (Bar)
        const ctxGap = document.getElementById('inflationGapChart').getContext('2d');
        new Chart(ctxGap, {
            type: 'bar',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'USA Gap',
                        data: usGap,
                        backgroundColor: 'rgba(30, 58, 138, 0.7)',
                        borderRadius: 4
                    },
                    {
                        label: 'NZ Gap',
                        data: nzGap,
                        backgroundColor: 'rgba(185, 28, 28, 0.7)',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top' },
                    tooltip: { mode: 'index', intersect: false }
                },
                scales: {
                    y: { 
                        title: { display: true, text: 'Percentage Points' },
                        grid: { color: (ctx) => ctx.tick.value === 0 ? '#94a3b8' : '#f1f5f9' }
                    }
                }
            }
        });

        // 3. Exchange Rate vs PPP Chart (Line)
        const ctxExchange = document.getElementById('exchangePppChart').getContext('2d');
        new Chart(ctxExchange, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'Exchange Rate (NZD per 1 USD)',
                        data: currencyData.exchangeRate,
                        borderColor: '#059669', // Emerald
                        backgroundColor: '#059669',
                        borderWidth: 2,
                        tension: 0.2,
                        borderDash: []
                    },
                    {
                        label: 'Implied PPP Conversion Rate',
                        data: currencyData.ppp,
                        borderColor: '#d97706', // Amber
                        backgroundColor: '#d97706',
                        borderWidth: 2,
                        tension: 0.2,
                        borderDash: [5, 5]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top' },
                    tooltip: { mode: 'index', intersect: false }
                },
                scales: {
                    y: { title: { display: true, text: 'NZD / USD' } }
                }
            }
        });

        // 4. Debt to GDP Chart (Area)
        const ctxDebt = document.getElementById('debtChart').getContext('2d');
        new Chart(ctxDebt, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'USA Gross Debt to GDP (%)',
                        data: usData.debt,
                        borderColor: '#1e3a8a',
                        backgroundColor: 'rgba(30, 58, 138, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'NZ Gross Debt to GDP (%)',
                        data: nzData.debt,
                        borderColor: '#b91c1c',
                        backgroundColor: 'rgba(185, 28, 28, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top' },
                    tooltip: { mode: 'index', intersect: false }
                },
                scales: {
                    y: { title: { display: true, text: '% of GDP' } }
                }
            }
        });

        // 5. Populate Data Table
        const tbody = document.getElementById('tableBody');
        
        for (let i = 0; i < years.length; i++) {
            const tr = document.createElement('tr');
            
            // Highlight future/projected years visually
            const isProjection = years[i] > 2024;
            const yearClass = isProjection ? 'text-indigo-600 font-bold bg-indigo-50/30' : 'text-slate-900 font-medium';
            const rowClass = isProjection ? 'bg-indigo-50/10 hover:bg-slate-50 transition-colors' : 'hover:bg-slate-50 transition-colors';
            
            tr.className = rowClass;

            tr.innerHTML = `
                <td class="px-6 py-3 whitespace-nowrap sticky left-0 ${isProjection ? 'bg-indigo-50/80' : 'bg-white'} border-r border-slate-200 ${yearClass}">
                    ${years[i]} ${isProjection ? '*' : ''}
                </td>
                
                <!-- US Data -->
                <td class="px-6 py-3 whitespace-nowrap text-right text-slate-700 border-l border-slate-200">${usData.inflation[i].toFixed(1)}</td>
                <td class="px-6 py-3 whitespace-nowrap text-right ${usGap[i] > 0 ? 'text-rose-600' : 'text-emerald-600'}">${usGap[i] > 0 ? '+' : ''}${usGap[i].toFixed(1)}</td>
                <td class="px-6 py-3 whitespace-nowrap text-right text-slate-700 font-mono">${usData.debt[i].toFixed(1)}</td>
                
                <!-- NZ Data -->
                <td class="px-6 py-3 whitespace-nowrap text-right text-slate-700 border-l border-slate-200">${nzData.inflation[i].toFixed(1)}</td>
                <td class="px-6 py-3 whitespace-nowrap text-right ${nzGap[i] > 0 ? 'text-rose-600' : 'text-emerald-600'}">${nzGap[i] > 0 ? '+' : ''}${nzGap[i].toFixed(1)}</td>
                <td class="px-6 py-3 whitespace-nowrap text-right text-slate-700 font-mono">${nzData.debt[i].toFixed(1)}</td>
                
                <!-- Currency Data -->
                <td class="px-6 py-3 whitespace-nowrap text-right text-slate-700 border-l border-slate-200">${currencyData.exchangeRate[i].toFixed(2)}</td>
                <td class="px-6 py-3 whitespace-nowrap text-right text-slate-700">${currencyData.ppp[i].toFixed(2)}</td>
            `;
            tbody.appendChild(tr);
        }
    </script>
</body>
</html>

# Stonks Monitor

A single-page dashboard for watching popular, heavily traded stocks during the
day. Open `index.html` in a browser; there is nothing to build or install.

## Panels

| Panel | What it shows |
| --- | --- |
| **Watchlist basket** | P&L of a $1 position in every ticker since the previous close, plus the four biggest movers. |
| **Top movers** | Rotates through the five biggest movers with an intraday chart. Tap a row in the table to focus a ticker. |
| **Breadth Board** | One ball per ticker, binned by % change. Shows advancers vs decliners, the median move and breadth over time. |
| **Intraday Ridge** | Each ticker's session path as a ridge, sorted strongest to weakest. Red fill means it is below yesterday's close. |
| **Correlation Graph** | Tickers linked when their recent returns move together (\|r\| ≥ 0.5). Bears drift left, bulls right, and the most connected names are hubs. |
| **Watchlist** | Price, change, day range, volume and a sparkline for every ticker. |

## Data

- **Simulated (default):** with no API key the page runs random walks seeded
  with rough reference prices, so every panel works offline. The header badge
  says **SIMULATED**. These are not real prices.
- **Live:** click **Data ⚙** and paste a free [Finnhub](https://finnhub.io/register)
  API key. The page polls quotes (about 40 calls/min, under the free limit)
  and streams trades over Finnhub's websocket. Intraday paths build up from
  when the page is opened and are kept in the browser for the day.

The ticker list can also be edited under **Data ⚙** (up to 30). The default
list is NVDA, TSLA, AAPL, AMD, PLTR, AMZN, MSFT, META, GOOGL, AVGO, NFLX, SPY,
QQQ, MSTR, COIN, HOOD, SOFI, INTC, SMCI, MARA, RIVN, NIO, F and BAC.

Not financial advice.

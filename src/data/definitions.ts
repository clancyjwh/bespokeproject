import React from 'react';

export const definitions: Record<string, string> = {
  'Policy Ceiling': 'The maximum allocation percentage allowed for an asset class under the portfolio\'s stated investment policy.',
  'Allocation Drift': 'The change in an asset\'s weight in the portfolio over time due to market movement or transactions.',
  'Concentration Growth': 'An increase in the percentage of the portfolio held in a single position or theme.',
  'Growth Driver': 'The main reason an allocation increased — typically market price appreciation rather than a deliberate decision.',
  'Price Appreciation': 'An increase in value caused by the asset\'s market price rising.',
  'Transaction-Driven': 'Changes caused by deposits, withdrawals, or trades rather than investment performance.',
  'LW Account Equity Drift': 'The change over time in the equity allocation within the LW Account portfolio sleeve.',
  'DK Account Concentration Drift': 'The change over time in DK Account\'s percentage of the total portfolio.',
  'LW Account Cash Drift': 'The change over time in the cash allocation inside the LW Account sleeve.',
  'LW Account Main Flow': 'The estimated amount of money added or withdrawn from the LW Account during a period, separate from investment returns.',
  'Implied Net Flow': 'The portion of portfolio value change that cannot be explained by returns and is therefore attributed to money moving in or out.',
  'Blended Benchmark': 'A combined market index made up of multiple benchmarks to approximate the portfolio\'s target allocation.',
  'Internal Spread': 'The performance difference between two managers inside the same portfolio.',
  'External Benchmark': 'A market index used to compare whether a manager outperformed or underperformed.',
  'Sleeve': 'A distinct segment of the portfolio managed separately (e.g., equity, fixed income, private assets).',
  'Hit Rate': 'The percentage of observed periods where returns were positive.',
  'Return Variability': 'The degree to which returns fluctuate up and down across periods.',
  'Regime Shift': 'A noticeable change in performance pattern caused by changing market conditions.',
  'Dependence Risk': 'The risk that portfolio outcomes rely heavily on one manager or position.',
  'NAV': 'The per-unit value of an investment fund after accounting for assets and liabilities.',
  'Net Asset Value': 'The per-unit value of an investment fund after accounting for assets and liabilities.',
  'Performance Attribution': 'The process of determining whether changes in value came from investment returns or cash movements.',
  'Portfolio Return Series': 'A consistent record of total portfolio returns over time.',
  'Data Integrity Limitation': 'A constraint in the dataset that reduces precision or completeness of analysis.',
  'Fund-Level Drivers': 'The individual investment sleeves that contributed most to overall results during a period.',
  'Portfolio Context': 'How performance interacts with concentration, allocation changes, and governance considerations.',
  'Attribution Integrity': 'The reliability of separating investment returns from cash movements.',
  'Flow Attribution': 'The process of determining whether value changes came from performance or deposits and withdrawals.',
  'Lumpiness': 'A pattern where returns arrive in irregular spikes rather than steady gains.',
  'Regime Shift Exposure': 'Sensitivity of returns to changing market environments.',
  'Trajectory Strength': 'The clarity and persistence of upward or downward return trends.',
  'Trajectory Stability': 'How smooth and steady return trends appear over time.',
  'Downside Presence': 'The occurrence and frequency of negative return periods.',
  'Leadership Consistency': 'Whether the same asset categories repeatedly drive performance.',
  'Diversification Quality': 'The degree to which returns are supported by multiple independent sources rather than one concentrated position.',
  'Checkpoint': 'A single statement date where the dataset reports values.',
  'Checkpoint series': 'A set of values taken from the dataset\'s available statement dates, not a complete monthly series.',
  'MTD': 'Month-to-date return reported as of the statement date.',
  'Trailing 12M Return': 'Return over the prior twelve months as reported at the statement date.',
  'DK Account 12M Return %': 'DK Account\'s trailing twelve-month return percentage as reported at each checkpoint.',
  'DK Account Period Return %': 'DK Account\'s return percentage for the specific period ending on the listed checkpoint date.',
  'DK Account NAV/Unit': 'Net asset value per unit for DK Account, reflecting the per-unit value used to track fund value over time.',
  'DK Account JDS Resource ($)': 'The dollar market value reported for the DK Account sleeve in the dataset at the checkpoint date.',
  'DK Account % of Total': 'The portion of total portfolio value represented by the DK Account sleeve at the checkpoint date.',
  'Total Portfolio ($)': 'The total dollar value of the portfolio reported at the checkpoint date.',
  'LW Account 1Y': 'LW Account\'s trailing one-year return reported at each checkpoint date.',
  'LW Account MTD': 'LW Account\'s month-to-date return reported at each checkpoint date.',
  'Canadian Equity MTD': 'Month-to-date return for the Canadian Equity sleeve as reported at each checkpoint date.',
  'Foreign Equity MTD': 'Month-to-date return for the Foreign Equity sleeve as reported at each checkpoint date.',
  'Fixed Income MTD': 'Month-to-date return for the Fixed Income sleeve as reported at each checkpoint date.',
  'Private Assets MTD': 'Month-to-date return for the Private Assets sleeve as reported at each checkpoint date.',
  'LW Account Cash %': 'The percentage of the LW Account sleeve held in cash at the checkpoint date.',
  'LW Account Equity %': 'The percentage of the LW Account sleeve held in equities at the checkpoint date.',
  'Regime sensitivity': 'A pattern where results change noticeably across different market environments; here it refers to visible shifts across the checkpoint series.',
  'Missing value': 'A checkpoint where the dataset does not provide a value for that metric.',
};

export function findDefinedTerm(text: string): { term: string; definition: string } | null {
  for (const [term, definition] of Object.entries(definitions)) {
    const regex = new RegExp(`\\b${term}\\b`, 'i');
    if (regex.test(text)) {
      return { term, definition };
    }
  }
  return null;
}

export function highlightDefinedTerms(
  text: string,
  onTermClick: (term: string, definition: string) => void
): (string | React.ReactElement)[] {
  const result: (string | React.ReactElement)[] = [];
  let remaining = text;
  let keyCounter = 0;

  const sortedTerms = Object.keys(definitions).sort((a, b) => b.length - a.length);

  while (remaining.length > 0) {
    let foundMatch = false;

    for (const term of sortedTerms) {
      const regex = new RegExp(`\\b(${term})\\b`, 'i');
      const match = remaining.match(regex);

      if (match && match.index !== undefined) {
        if (match.index > 0) {
          result.push(remaining.substring(0, match.index));
        }

        const matchedText = match[1];
        const currentKey = keyCounter++;

        result.push(
          React.createElement(
            'button',
            {
              key: currentKey,
              onClick: (e: React.MouseEvent) => {
                e.stopPropagation();
                onTermClick(term, definitions[term]);
              },
              className: 'hover:text-blue-600 cursor-help transition-colors',
              type: 'button'
            },
            matchedText
          )
        );

        remaining = remaining.substring(match.index + matchedText.length);
        foundMatch = true;
        break;
      }
    }

    if (!foundMatch) {
      result.push(remaining);
      break;
    }
  }

  return result;
}

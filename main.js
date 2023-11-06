
import quotes from './quotes.json';


const showAllQuotesButton = document.getElementById('showAllQuotesButton');
showAllQuotesButton.addEventListener('click', () => {
  const output = document.getElementById('output');
  const sortedQuotes = quotes.sort((a, b) => a.author.localeCompare(b.author));
  output.innerHTML = '';
  sortedQuotes.forEach(quote => {
    const quoteElement = document.createElement('p');
    quoteElement.innerHTML = `<strong>${quote.author}:</strong> ${quote.text}`;
    output.appendChild(quoteElement);
  });
});


const theQuotesButton = document.getElementById('theQuotesButton');
theQuotesButton.addEventListener('click', () => {
  const output = document.getElementById('output');
  const theQuotes = quotes.map(quote => {
    const text = quote.text.replace(/(\bThe\b|\bthe\b)/g, '<strong>$1</strong>');
    return `<li>${text}</li>`;
  });
  output.innerHTML = `<ol>${theQuotes.join('')}</ol>`;
});


const quoteLengthButton = document.getElementById('quoteLengthButton');
quoteLengthButton.addEventListener('click', () => {
  const output = document.getElementById('output');
  const lengths = quotes.map(quote => quote.text.length);
  const lengthString = lengths.join(', ');
  output.innerHTML = `<p>${lengthString}</p>`;
});


const quoteCountButton = document.getElementById('quoteCountButton');
quoteCountButton.addEventListener('click', () => {
  const output = document.getElementById('output');
  const authorInput = document.getElementById('authorInput');
  const authorName = authorInput.value.trim();
  if (authorName === '') {
    output.innerHTML = 'Kérjük, adja meg a szerző nevét.';
    return;
  }
  const exactMatchCheckbox = document.getElementById('exactMatchCheckbox');
  const exactMatch = exactMatchCheckbox.checked;
  const filteredQuotes = quotes.filter(quote => {
    if (exactMatch) {
      return quote.author === authorName;
    } else {
      return quote.author.toLowerCase().includes(authorName.toLowerCase());
    }
  });
  const quoteCount = filteredQuotes.length;
  output.innerHTML = `Az "${authorName}" szerzőnek ${quoteCount} idézete van.`;
});

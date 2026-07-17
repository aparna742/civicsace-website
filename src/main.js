import { privacyPolicy, termsOfUse, faqs } from './pages.js';

// Application State
const state = {
  activePath: window.location.pathname.replace(/\/$/, '') || '/privacy',
  searchQuery: '',
  theme: localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  activeTOCId: null
};

// Initialize Theme
document.documentElement.setAttribute('data-theme', state.theme);

// Route Handler
function navigateTo(path) {
  state.activePath = path;
  window.history.pushState({}, '', path);
  state.searchQuery = ''; // Reset search on navigation
  renderPage();
  updateActiveNavLink();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// Router Event Listeners
window.addEventListener('popstate', () => {
  state.activePath = window.location.pathname.replace(/\/$/, '') || '/privacy';
  state.searchQuery = '';
  renderPage();
  updateActiveNavLink();
});

// Intercept Link Clicks for client-side routing
document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-link]');
  if (link) {
    e.preventDefault();
    const path = link.getAttribute('href');
    navigateTo(path);
  }
});

// Update Header Navigation Active State
function updateActiveNavLink() {
  const navLinks = document.querySelectorAll('header nav .nav-link, footer .footer-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === state.activePath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Set up Theme Toggle Listener
function setupThemeToggler() {
  const toggler = document.getElementById('theme-toggle-btn');
  if (!toggler) return;
  
  toggler.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('theme', state.theme);
  });
}

// Main Page Render Logic
function renderPage() {
  const appContainer = document.getElementById('content-area');
  if (!appContainer) return;

  // Clear container first
  appContainer.innerHTML = '';

  if (state.activePath === '/privacy') {
    renderLegalPage(appContainer, privacyPolicy);
  } else if (state.activePath === '/terms') {
    renderLegalPage(appContainer, termsOfUse);
  } else if (state.activePath === '/contact') {
    renderContactPage(appContainer);
  } else {
    // Default fallback to privacy
    navigateTo('/privacy');
  }
}

// Render Legal Pages (Privacy Policy / Terms & Conditions)
function renderLegalPage(container, data) {
  // 1. Create page container
  const pageDiv = document.createElement('div');
  pageDiv.className = 'page-container';
  
  // 2. Render Left Main Legal Text
  const mainContent = document.createElement('div');
  mainContent.className = 'legal-main';
  
  const headerHtml = `
    <div class="page-header">
      <h1 class="page-title">${data.title}</h1>
      <div class="page-meta">Last Updated: ${data.lastUpdated}</div>
    </div>
    <div class="search-container">
      <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <input type="text" class="search-input" id="legal-search" placeholder="Search sections, terms, or clauses..." value="${state.searchQuery}">
    </div>
    <p class="page-intro">${data.introduction}</p>
    <div style="height: 2rem;"></div>
  `;
  
  mainContent.innerHTML = headerHtml;
  
  const sectionsContainer = document.createElement('div');
  sectionsContainer.className = 'sections-container';
  
  data.sections.forEach(section => {
    const secEl = document.createElement('section');
    secEl.className = 'legal-section';
    secEl.id = section.id;
    secEl.innerHTML = `
      <h2 class="section-title">
        <span class="section-number">${section.number}.</span> ${section.title}
      </h2>
      <div class="section-body-content">
        ${section.content}
      </div>
    `;
    sectionsContainer.appendChild(secEl);
  });
  
  mainContent.appendChild(sectionsContainer);
  pageDiv.appendChild(mainContent);
  
  // 3. Render Right Floating Sidebar (TOC)
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar-aside';
  
  let tocItemsHtml = '';
  data.sections.forEach(section => {
    tocItemsHtml += `
      <li class="toc-item">
        <a href="#${section.id}" class="toc-link" data-sec-id="${section.id}">${section.number}. ${section.title}</a>
      </li>
    `;
  });
  
  sidebar.innerHTML = `
    <div class="toc-card">
      <h3 class="toc-title">Table of Contents</h3>
      <ul class="toc-list">
        ${tocItemsHtml}
      </ul>
    </div>
  `;
  
  pageDiv.appendChild(sidebar);
  container.appendChild(pageDiv);
  
  // Initialize Search & Scroll Spy
  setupSearchInput(data);
  setupScrollSpy(data.sections);
  setupTOCLinks();
}

// Render Contact Page
function renderContactPage(container) {
  const pageDiv = document.createElement('div');
  pageDiv.className = 'page-container';
  
  const contactLayout = document.createElement('div');
  contactLayout.className = 'contact-layout';
  
  // Left Panel - FAQs & Info
  const leftPanel = document.createElement('div');
  leftPanel.className = 'contact-info-panel';
  
  let faqItemsHtml = '';
  faqs.forEach((faq, idx) => {
    faqItemsHtml += `
      <div class="faq-item" data-faq-index="${idx}">
        <button class="faq-question">
          <span>${faq.q}</span>
          <svg class="faq-arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            <p>${faq.a}</p>
          </div>
        </div>
      </div>
    `;
  });
  
  leftPanel.innerHTML = `
    <div>
      <div class="page-header" style="border-bottom: none; padding-bottom: 0; margin-bottom: 1.5rem;">
        <h1 class="page-title">Contact Support</h1>
      </div>
      <p class="page-intro" style="margin-bottom: 2rem;">Have questions about CivicsAce? Check our FAQs below or send a message directly to our support team. We're here to help.</p>
    </div>
    
    <div class="contact-channel">
      <div class="channel-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      </div>
      <div class="channel-details">
        <h3>Email Support</h3>
        <p>For general support queries, billing issues, or feature requests:</p>
        <a href="mailto:support@civicsace.app">support@civicsace.app</a>
      </div>
    </div>

    <div class="contact-channel">
      <div class="channel-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      </div>
      <div class="channel-details">
        <h3>Account Deletion Requests</h3>
        <p>To request data erasure or account deletion under policy rules:</p>
        <a href="mailto:civicsacesupport@gmail.com">civicsacesupport@gmail.com</a>
      </div>
    </div>
    
    <div class="faq-section">
      <h2 class="faq-title">Frequently Asked Questions</h2>
      <div class="faq-container">
        ${faqItemsHtml}
      </div>
    </div>
  `;
  
  // Right Panel - Support Form
  const rightPanel = document.createElement('div');
  rightPanel.className = 'contact-form-panel';
  rightPanel.id = 'form-panel';
  
  rightPanel.innerHTML = `
    <div class="form-header">
      <h2>Send us a message</h2>
      <p>Fill out the form below and we'll get back to you within 24 hours.</p>
    </div>
    
    <form class="support-form" id="contact-form" novalidate>
      <div class="form-group" id="group-name">
        <label class="form-label" for="name-input">Full Name</label>
        <input type="text" id="name-input" class="form-input" placeholder="John Doe" required>
        <div class="error-message">Name is required.</div>
      </div>
      
      <div class="form-group" id="group-email">
        <label class="form-label" for="email-input">Email Address</label>
        <input type="email" id="email-input" class="form-input" placeholder="john@example.com" required>
        <div class="error-message">Please enter a valid email address.</div>
      </div>
      
      <div class="form-group" id="group-topic">
        <label class="form-label" for="topic-select">Subject / Topic</label>
        <select id="topic-select" class="form-select" required>
          <option value="" disabled selected>Select an option</option>
          <option value="general">General Support</option>
          <option value="billing">Billing & Subscriptions</option>
          <option value="account-delete">Account Deletion</option>
          <option value="bug">Report a Bug</option>
          <option value="feedback">Feature Suggestions</option>
        </select>
        <div class="error-message">Please select a topic.</div>
      </div>
      
      <div class="form-group" id="group-message">
        <label class="form-label" for="message-input">Your Message</label>
        <textarea id="message-input" class="form-textarea" placeholder="How can we help you prepare for your citizenship interview?" required></textarea>
        <div class="error-message">Message must be at least 10 characters long.</div>
      </div>
      
      <button type="submit" class="submit-btn" id="form-submit-btn">
        <span>Submit Message</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      </button>
    </form>
    
    <div class="success-state" id="form-success">
      <div class="success-icon-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h2>Message Received!</h2>
      <p>Thank you for reaching out. A support ticket has been created and our team will get in touch soon.</p>
      <button class="success-reset-btn" id="form-reset-btn">Send another message</button>
    </div>
  `;
  
  contactLayout.appendChild(leftPanel);
  contactLayout.appendChild(rightPanel);
  pageDiv.appendChild(contactLayout);
  container.appendChild(pageDiv);
  
  // Set up Event Listeners
  setupFaqAccordion();
  setupContactForm();
}

// Search Logic for Legal Pages
function setupSearchInput(data) {
  const searchInput = document.getElementById('legal-search');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    state.searchQuery = query;
    filterLegalSections(data, query);
  });
}

function filterLegalSections(data, query) {
  const container = document.querySelector('.sections-container');
  const tocList = document.querySelector('.toc-list');
  if (!container || !tocList) return;
  
  // Get all section DOM elements
  const sectionEls = container.querySelectorAll('.legal-section');
  
  if (!query) {
    // Reset matches and restore full UI
    sectionEls.forEach(el => {
      el.style.display = 'block';
      // Restore original inner HTML by finding section index
      const sectionData = data.sections.find(s => s.id === el.id);
      if (sectionData) {
        el.querySelector('.section-body-content').innerHTML = sectionData.content;
      }
    });
    
    // Restore sidebar links
    tocList.querySelectorAll('.toc-item').forEach(item => {
      item.style.display = 'block';
    });
    
    // Remove "No Results" banner if present
    const noRes = container.querySelector('.no-results');
    if (noRes) noRes.remove();
    
    return;
  }
  
  let visibleCount = 0;
  
  sectionEls.forEach(el => {
    const sectionData = data.sections.find(s => s.id === el.id);
    if (!sectionData) return;
    
    // Combine title and body text to search inside
    const titleText = `${sectionData.number}. ${sectionData.title}`.toLowerCase();
    
    // Simple text extraction from HTML to check body content match
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = sectionData.content;
    const bodyText = tempDiv.textContent.toLowerCase();
    
    const isTitleMatch = titleText.includes(query);
    const isBodyMatch = bodyText.includes(query);
    
    const tocItem = tocList.querySelector(`a[data-sec-id="${el.id}"]`)?.parentElement;
    
    if (isTitleMatch || isBodyMatch) {
      el.style.display = 'block';
      visibleCount++;
      if (tocItem) tocItem.style.display = 'block';
      
      // Highlight matching terms in body content
      if (isBodyMatch) {
        let highlightedContent = sectionData.content;
        
        // Match words but skip HTML tags & attributes to prevent rendering breakage
        const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(`(?<!<[^>]*)(?<!&[^;]*)\\b(${escapedQuery})\\b`, 'gi');
        
        highlightedContent = highlightedContent.replace(regex, (match) => {
          return `<mark>${match}</mark>`;
        });
        
        el.querySelector('.section-body-content').innerHTML = highlightedContent;
      } else {
        el.querySelector('.section-body-content').innerHTML = sectionData.content;
      }
    } else {
      el.style.display = 'none';
      if (tocItem) tocItem.style.display = 'none';
    }
  });
  
  // Show/Hide "No Results" message
  let noRes = container.querySelector('.no-results');
  if (visibleCount === 0) {
    if (!noRes) {
      noRes = document.createElement('div');
      noRes.className = 'no-results';
      noRes.innerHTML = `
        <svg class="no-results-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
        <h3>No results found</h3>
        <p>We couldn't find anything matching "${query}". Try searching for another topic.</p>
      `;
      container.appendChild(noRes);
    }
  } else if (noRes) {
    noRes.remove();
  }
}

// Table of Contents ScrollSpy
let scrollSpyObserver = null;
function setupScrollSpy(sections) {
  if (scrollSpyObserver) {
    scrollSpyObserver.disconnect();
  }
  
  const tocLinks = document.querySelectorAll('.toc-link');
  if (tocLinks.length === 0) return;
  
  const observerOptions = {
    root: null,
    rootMargin: '-80px 0px -60% 0px',
    threshold: 0
  };
  
  scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        state.activeTOCId = id;
        
        tocLinks.forEach(link => {
          if (link.getAttribute('data-sec-id') === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    const el = document.getElementById(section.id);
    if (el) scrollSpyObserver.observe(el);
  });
}

function setupTOCLinks() {
  const links = document.querySelectorAll('.toc-link');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-sec-id');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const offset = 88; // Header height + buffer
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// FAQ Accordion Handler
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      
      // Close other FAQs
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-answer').style.maxHeight = '0';
        }
      });
      
      // Toggle current FAQ
      if (isOpen) {
        item.classList.remove('active');
        answer.style.maxHeight = '0';
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// Contact Form Handler
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit-btn');
  const successState = document.getElementById('form-success');
  const resetBtn = document.getElementById('form-reset-btn');
  
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const isValid = validateContactForm();
    if (!isValid) return;
    
    // Simulate form submission
    submitBtn.disabled = true;
    const btnSpan = submitBtn.querySelector('span');
    const originalText = btnSpan.innerText;
    btnSpan.innerText = 'Sending message...';
    
    setTimeout(() => {
      // Transition to success state
      form.style.display = 'none';
      const formHeader = document.querySelector('.form-header');
      if (formHeader) formHeader.style.display = 'none';
      
      successState.style.display = 'flex';
      submitBtn.disabled = false;
      btnSpan.innerText = originalText;
    }, 1200);
  });
  
  resetBtn.addEventListener('click', () => {
    // Reset form fields
    form.reset();
    
    // Clear error classes
    form.querySelectorAll('.form-group').forEach(group => {
      group.classList.remove('has-error');
    });
    
    // Transition back to form state
    successState.style.display = 'none';
    form.style.display = 'flex';
    const formHeader = document.querySelector('.form-header');
    if (formHeader) formHeader.style.display = 'block';
  });
  
  // Real-time input check to clear error states
  form.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(field => {
    field.addEventListener('input', () => {
      const group = field.closest('.form-group');
      if (group) group.classList.remove('has-error');
    });
  });
}

function validateContactForm() {
  let isValid = true;
  
  // 1. Name validation
  const nameInput = document.getElementById('name-input');
  const nameGroup = document.getElementById('group-name');
  if (nameInput.value.trim() === '') {
    nameGroup.classList.add('has-error');
    isValid = false;
  } else {
    nameGroup.classList.remove('has-error');
  }
  
  // 2. Email validation
  const emailInput = document.getElementById('email-input');
  const emailGroup = document.getElementById('group-email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailGroup.classList.add('has-error');
    isValid = false;
  } else {
    emailGroup.classList.remove('has-error');
  }
  
  // 3. Topic validation
  const topicSelect = document.getElementById('topic-select');
  const topicGroup = document.getElementById('group-topic');
  if (topicSelect.value === '') {
    topicGroup.classList.add('has-error');
    isValid = false;
  } else {
    topicGroup.classList.remove('has-error');
  }
  
  // 4. Message validation
  const messageInput = document.getElementById('message-input');
  const messageGroup = document.getElementById('group-message');
  if (messageInput.value.trim().length < 10) {
    messageGroup.classList.add('has-error');
    isValid = false;
  } else {
    messageGroup.classList.remove('has-error');
  }
  
  return isValid;
}

// Initial Kick-off
document.addEventListener('DOMContentLoaded', () => {
  renderPage();
  updateActiveNavLink();
  setupThemeToggler();
});

'use strict';
// Storing in variable the accordion element
const accordionItem = document.querySelectorAll('.accordion-item');

// Opening/Closing the accordion item when is clicked
const openAccordionItem = function () {
  // Closing accordion items
  for (let i = 0; i < accordionItem.length; i++) {
    const accItemNumber = accordionItem[i].querySelector(
      '.accordion-item-number'
    );
    const accItemTitle = accordionItem[i].querySelector(
      '.accordion-item-title'
    );
    const accPointerIcon = accordionItem[i].querySelector('.pointer-icon');
    const accInfoText = accordionItem[i].querySelector('.accordion-info-text');

    accItemNumber.classList.add('close-item-color');
    accItemTitle.classList.add('close-item-color');
    accPointerIcon.classList.add('close-item-color');
    accInfoText.classList.add('close-item');
    accordionItem[i].classList.remove('open-item');
  }

  // Opening accordion items
  const accordionItemNumber = this.querySelector('.accordion-item-number');
  const accordionItemTitle = this.querySelector('.accordion-item-title');
  const pointerIcon = this.querySelector('.pointer-icon');
  const accordionInfoText = this.querySelector('.accordion-info-text');

  accordionItemNumber.classList.remove('close-item-color');
  accordionItemTitle.classList.remove('close-item-color');
  pointerIcon.classList.remove('close-item-color');
  accordionInfoText.classList.remove('close-item');
  this.classList.add('open-item');
};

for (let i = 0; i < accordionItem.length; i++) {
  accordionItem[i].addEventListener('click', openAccordionItem);
}

prism.on('dashboardloaded', function(event, args) {
  let dashboard = args.dashboard;

  // Don't show button for dashboards the user owns
  if (dashboard.owner === prism.user._id) { return; }

  // When the dashboard is initialized, add the button to the UI
  dashboard.on('initialized', function() {
    // Wait a few seconds as the event fires before the dashboard is actually
    // ready.
    window.setTimeout(addClearFiltersButton);
  });
});

function addClearFiltersButton() {
  let clearFiltersButtonId = 'clear-filters-button';
  let clearFiltersButtonSelector = `#${clearFiltersButtonId}`;

  // If we've already added the button, don't do anything
  if ($(clearFiltersButtonSelector).length) { return; }

  // Create the button
  /* eslint-disable indent */
  let $clearFiltersButton = $([
    `<button id="${clearFiltersButtonId}" class="btn btn--transp" title="Clear filters">`,
      '<span class="btn__text">Clear Filters</span>',
    '</button>'
  ].join(''));
  /* eslint-enable indent */

  // Add the button to the dashboard actions box
  let $toolbarRight = $('.prism-toolbar__section--right .prism-toolbar__cell.btns-holder');
  $toolbarRight.prepend($clearFiltersButton);

  // Add event handler for when the button is clicked
  $toolbarRight.on('click', clearFiltersButtonSelector, clearFilters);
}

function clearFilters() {
  let dashboard = prism.activeDashboard;

  // Clear any filters set on the dashboard
  dashboard.filters.clear();

  // Set the filters back to the default (saved/published) filters
  (dashboard.defaultFilters || []).forEach(function(filter) {
    dashboard.filters.update(filter, { save: true, refresh: false });
  });
  dashboard.refresh();
}

prism.on('dashboardloaded', function(event, args) {
  let dashboard = args.dashboard;

  // Don't show button for dashboards the user owns
  if (dashboard.owner === prism.user._id) { return; }

  // When the dashboard is initialized, add the button to the UI
  dashboard.on('initialized', function() {
    // Wait a few seconds as the event fires before the dashboard is actually
    // ready.
    window.setTimeout(addClearFiltersButton, 2000);
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
    `<div id="${clearFiltersButtonId}" class="btn-immutable btn-action big-btn fl-icon-container" title="Clear filters">`,
      '<span class="fl-cancel"></span>',
      '<div class="action-caption fl-icon-text">',
        'Clear Filters',
      '</div>',
    '</div>'
  ].join(''));
  /* eslint-enable indent */

  // Add the button to the dashboard actions box
  let $actionsBox = $('.actions-box');
  $actionsBox.append($clearFiltersButton);

  // Add event handler for when the button is clicked
  $actionsBox.on('click', clearFiltersButtonSelector, clearFilters);
}

function clearFilters() {
  let dashboard = prism.activeDashboard;

  // Clear any filters set on the dashboard
  dashboard.filters.clear();

  // Set the filters back to the default (saved/published) filters
  dashboard.defaultFilters.forEach(function(filter) {
    dashboard.filters.update(filter, { save: true, refresh: false });
  });
  dashboard.refresh();
}

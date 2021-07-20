# WiserClearAllFiltersPlugin

Adds a button to Sisense dashboard toolbars which will reset a shared
dashboard's filters back to the published state.

Tested to work with Sisense **7.1.2.11001**.

## Installation

* Download the latest release of the `WiserClearAllFiltersPlugin`
* Unzip and copy the `WiserClearAllFiltersPlugin` folder to the
  `PrismWeb\plugins` folder of your Sisense installation.

## Usage

The button will automatically appear in the dashboard toolbar for dashboards
which the current user does not own. Clicking the button will reset the filters
on that dashboard back to the filter set that dashboard was published with.

The button is hidden if you are the owner of the dashboard as the Sisense API
does not directly make available the default (published) filter set in this
case.

## Support
This is no longer an actively supported project. If you wish to take ownership, please contact us at <opensource@wiser.com>. 

## License

This project is licensed under the terms of the MIT License.

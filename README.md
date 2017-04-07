# Salesforce Lightning Modal Component

<img src="screenshots/media-example.png" width="300" align="right"/>

## About
This is a generic & customizable modal dialog component built using Salesforce Lightning and [SLDS](https://www.lightningdesignsystem.com/) style.
It does not rely on third party libraries.
It features all of the options of the original [SLDS modal](https://www.lightningdesignsystem.com/components/modals/).

<b>Features</b>

The Lightning Modal component provides the following features:
- rich body that supports any Lightning components
- optional header block with a title and an optional tagline
- optional footer block that supports any Lightning components
- rendering options: wide modal, close icon, directional buttons
- a shorthand method to dynamically create a simple alert modal

## Install
Install the Lightning Modal component as a managed package by clicking on this button:

<a href="https://login.salesforce.com/packaging/installPackage.apexp?p0=04t0Y000000xSc3">
  <img src="gfx/btn-install.png" width="100" alt="Install">
</a>

## Documentation
Component is documented using the Aura documentation.
You can access it from this URL (replace the domain):
https://<b>&lt;YOUR_DOMAIN&gt;</b>.lightning.force.com/auradocs/reference.app#reference?descriptor=ui_modal:modal&defType=component

## Sample application
Paste the following code in a new Lightning Application to try it out:

``` xml
<aura:application extends="force:slds">
	<div style="text-align:center; margin-top:300px;">...</div>
</aura:application>
```

It will render like this:

<img src="screenshots/basic-example.png" width="75%"/>

//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({layout:"vertical"});
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Titanium'),
		height:'auto',
		width:'auto'
	});
	self.add(label);
	
	//Add behavior for UI
	label.addEventListener('click', function(e) {
		alert(e.source.text);
	});
	
	var button = Ti.UI.createButton({
		title:"button",
		enabled:false,
	})
	self.add(button);
	button.addEventListener('click', function(e) {
		alert(e.source.title);
	});
	
	
	var button2 = Ti.UI.createButton({
		title:"button2"
	})
	self.add(button2);
	button2.addEventListener('click', function(e) {
		alert(e.source.title);
	});
	
	return self;
}

module.exports = FirstView;

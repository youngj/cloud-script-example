
var config = require('../config');

var subscribers = project.getOrCreateGroup(config.GROUP_NAME);
contact.addToGroup(subscribers);
contact.save();

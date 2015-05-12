
var config = require('../config');

var subscribers = project.getOrCreateGroup(config.GROUP_NAME);
contact.removeFromGroup(subscribers);
contact.save();

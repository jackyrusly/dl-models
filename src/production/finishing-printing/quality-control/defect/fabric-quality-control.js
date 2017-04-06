'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var FabricProblem = require("./fabric-test-criterion");

module.exports = class FabricQualityControl extends BaseModel {
    constructor(source) {
        super('fabric-quality-control', '1.0.0');

        // Define properties.
        this.code = "";
        this.dateIm = new Date();
        this.shiftIm = "";
        this.group = "";
        
        this.operatorIm = '';
        this.machineNoIm = '';
        
        this.kanbanId = {};
        
        this.fabricGradeTests = [];
        this.copy(source); 
    }
};

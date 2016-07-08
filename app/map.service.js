System.register(['@angular/core', 'esri/Map', './points.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Map_1, points_model_1;
    var MapService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Map_1_1) {
                Map_1 = Map_1_1;
            },
            function (points_model_1_1) {
                points_model_1 = points_model_1_1;
            }],
        execute: function() {
            MapService = (function () {
                function MapService(pointsModel) {
                    this.map = new Map_1.default({
                        basemap: 'topo'
                    });
                    this.map.add(pointsModel.pointsLayer);
                }
                MapService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [points_model_1.PointsModel])
                ], MapService);
                return MapService;
            }());
            exports_1("MapService", MapService);
        }
    }
});
//# sourceMappingURL=map.service.js.map
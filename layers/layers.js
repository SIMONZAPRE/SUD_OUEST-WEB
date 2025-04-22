var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_SUDOUEST_1 = new ol.format.GeoJSON();
var features_SUDOUEST_1 = format_SUDOUEST_1.readFeatures(json_SUDOUEST_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUDOUEST_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUDOUEST_1.addFeatures(features_SUDOUEST_1);
var lyr_SUDOUEST_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUDOUEST_1, 
                style: style_SUDOUEST_1,
                popuplayertitle: 'SUD-OUEST',
                interactive: true,
                title: '<img src="styles/legend/SUDOUEST_1.png" /> SUD-OUEST'
            });
var format_Province_SudOuest_2 = new ol.format.GeoJSON();
var features_Province_SudOuest_2 = format_Province_SudOuest_2.readFeatures(json_Province_SudOuest_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Province_SudOuest_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Province_SudOuest_2.addFeatures(features_Province_SudOuest_2);
var lyr_Province_SudOuest_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Province_SudOuest_2, 
                style: style_Province_SudOuest_2,
                popuplayertitle: 'Province_Sud-Ouest',
                interactive: true,
    title: 'Province_Sud-Ouest<br />\
    <img src="styles/legend/Province_SudOuest_2_0.png" /> BOUGOURIBA<br />\
    <img src="styles/legend/Province_SudOuest_2_1.png" /> IOBA<br />\
    <img src="styles/legend/Province_SudOuest_2_2.png" /> NOUMBIEL<br />\
    <img src="styles/legend/Province_SudOuest_2_3.png" /> PONI<br />' });
var format_secteur_dactivit_3 = new ol.format.GeoJSON();
var features_secteur_dactivit_3 = format_secteur_dactivit_3.readFeatures(json_secteur_dactivit_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_secteur_dactivit_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_secteur_dactivit_3.addFeatures(features_secteur_dactivit_3);
var lyr_secteur_dactivit_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_secteur_dactivit_3, 
                style: style_secteur_dactivit_3,
                popuplayertitle: 'secteur_d\'activité',
                interactive: true,
                title: '<img src="styles/legend/secteur_dactivit_3.png" /> secteur_d\'activité'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_SUDOUEST_1.setVisible(true);lyr_Province_SudOuest_2.setVisible(true);lyr_secteur_dactivit_3.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_SUDOUEST_1,lyr_Province_SudOuest_2,lyr_secteur_dactivit_3];
lyr_SUDOUEST_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'numero': 'numero', 'Superficie': 'Superficie', });
lyr_Province_SudOuest_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Code': 'Code', });
lyr_secteur_dactivit_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'Code': 'Code', 'secteur': 'secteur', });
lyr_SUDOUEST_1.set('fieldImages', {'OBJECTID': 'Range', 'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'numero': 'Range', 'Superficie': 'TextEdit', });
lyr_Province_SudOuest_2.set('fieldImages', {'OBJECTID': 'Range', 'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Code': 'TextEdit', });
lyr_secteur_dactivit_3.set('fieldImages', {'OBJECTID': '', 'Nom': '', 'Code': '', 'secteur': '', });
lyr_SUDOUEST_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Nom': 'inline label - always visible', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'numero': 'no label', 'Superficie': 'inline label - always visible', });
lyr_Province_SudOuest_2.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'inline label - always visible', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Code': 'inline label - always visible', });
lyr_secteur_dactivit_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Nom': 'inline label - always visible', 'Code': 'inline label - always visible', 'secteur': 'inline label - always visible', });
lyr_secteur_dactivit_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
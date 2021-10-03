var wms_layers = [];


        var lyr_VistaSatelital_0 = new ol.layer.Tile({
            'title': 'Vista Satelital',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_puebla_1 = new ol.format.GeoJSON();
var features_puebla_1 = format_puebla_1.readFeatures(json_puebla_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puebla_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puebla_1.addFeatures(features_puebla_1);
var lyr_puebla_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puebla_1, 
                style: style_puebla_1,
                interactive: true,
                title: '<img src="styles/legend/puebla_1.png" /> puebla'
            });
var format_Dcoup_2 = new ol.format.GeoJSON();
var features_Dcoup_2 = format_Dcoup_2.readFeatures(json_Dcoup_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dcoup_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dcoup_2.addFeatures(features_Dcoup_2);
var lyr_Dcoup_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dcoup_2, 
                style: style_Dcoup_2,
                interactive: true,
    title: 'Découpé<br />\
    <img src="styles/legend/Dcoup_2_0.png" /> 3828 - 4082<br />\
    <img src="styles/legend/Dcoup_2_1.png" /> 4082 - 4335<br />\
    <img src="styles/legend/Dcoup_2_2.png" /> 4335 - 4589<br />\
    <img src="styles/legend/Dcoup_2_3.png" /> 4589 - 4842<br />\
    <img src="styles/legend/Dcoup_2_4.png" /> 4842 - 5096<br />'
        });

lyr_VistaSatelital_0.setVisible(true);lyr_puebla_1.setVisible(true);lyr_Dcoup_2.setVisible(true);
var layersList = [lyr_VistaSatelital_0,lyr_puebla_1,lyr_Dcoup_2];
lyr_puebla_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', });
lyr_Dcoup_2.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'Wh/dia': 'Wh/dia', 'Porcentaje': 'Porcentaje', });
lyr_puebla_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', });
lyr_Dcoup_2.set('fieldImages', {'LAT': '', 'LON': '', 'Wh/dia': '', 'Porcentaje': '', });
lyr_puebla_1.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', });
lyr_Dcoup_2.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'Wh/dia': 'header label', 'Porcentaje': 'header label', });
lyr_Dcoup_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
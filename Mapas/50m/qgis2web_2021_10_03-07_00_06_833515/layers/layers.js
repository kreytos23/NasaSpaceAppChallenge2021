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
                interactive: false,
                title: '<img src="styles/legend/puebla_1.png" /> puebla'
            });
var format_paneles50m2_2 = new ol.format.GeoJSON();
var features_paneles50m2_2 = format_paneles50m2_2.readFeatures(json_paneles50m2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paneles50m2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_paneles50m2_2.addFeatures(features_paneles50m2_2);
var lyr_paneles50m2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_paneles50m2_2, 
                style: style_paneles50m2_2,
                interactive: true,
    title: 'paneles50m2<br />\
    <img src="styles/legend/paneles50m2_2_0.png" /> 766 - 816<br />\
    <img src="styles/legend/paneles50m2_2_1.png" /> 816 - 867<br />\
    <img src="styles/legend/paneles50m2_2_2.png" /> 867 - 918<br />\
    <img src="styles/legend/paneles50m2_2_3.png" /> 918 - 968<br />\
    <img src="styles/legend/paneles50m2_2_4.png" /> 968 - 1019<br />'
        });

lyr_VistaSatelital_0.setVisible(true);lyr_puebla_1.setVisible(true);lyr_paneles50m2_2.setVisible(true);
var layersList = [lyr_VistaSatelital_0,lyr_puebla_1,lyr_paneles50m2_2];
lyr_puebla_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', });
lyr_paneles50m2_2.set('fieldAliases', {'LAT': 'LAT', 'LON': 'LON', 'Wh/dia': 'Wh/dia', 'Porcentaje': 'Porcentaje', });
lyr_puebla_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', });
lyr_paneles50m2_2.set('fieldImages', {'LAT': 'TextEdit', 'LON': 'TextEdit', 'Wh/dia': 'TextEdit', 'Porcentaje': 'TextEdit', });
lyr_puebla_1.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', });
lyr_paneles50m2_2.set('fieldLabels', {'LAT': 'no label', 'LON': 'no label', 'Wh/dia': 'header label', 'Porcentaje': 'header label', });
lyr_paneles50m2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
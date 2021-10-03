var wms_layers = [];


        var lyr_map_0 = new ol.layer.Tile({
            'title': 'map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_GlobalNightLightLatest_1 = new ol.layer.Tile({
            'title': 'Global Night Light Latest',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://realearth.ssec.wisc.edu/tiles/NightLightsColored/{z}/{x}/{y}.png'
            })
        });
var format_energy_sr1_2 = new ol.format.GeoJSON();
var features_energy_sr1_2 = format_energy_sr1_2.readFeatures(json_energy_sr1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_energy_sr1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_energy_sr1_2.addFeatures(features_energy_sr1_2);
var lyr_energy_sr1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_energy_sr1_2, 
                style: style_energy_sr1_2,
                interactive: false,
    title: 'energy_sr (1)<br />\
    <img src="styles/legend/energy_sr1_2_0.png" /> Carbón<br />\
    <img src="styles/legend/energy_sr1_2_1.png" /> Eólica<br />\
    <img src="styles/legend/energy_sr1_2_2.png" /> Gas natural<br />\
    <img src="styles/legend/energy_sr1_2_3.png" /> Geotérmica<br />\
    <img src="styles/legend/energy_sr1_2_4.png" /> Hidroeléctrica<br />\
    <img src="styles/legend/energy_sr1_2_5.png" /> Nuclear<br />\
    <img src="styles/legend/energy_sr1_2_6.png" /> Petróleo<br />\
    <img src="styles/legend/energy_sr1_2_7.png" /> <br />\
    <img src="styles/legend/energy_sr1_2_8.png" /> <br />'
        });
var format_puebla_3 = new ol.format.GeoJSON();
var features_puebla_3 = format_puebla_3.readFeatures(json_puebla_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puebla_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puebla_3.addFeatures(features_puebla_3);
var lyr_puebla_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puebla_3, 
                style: style_puebla_3,
                interactive: false,
                title: '<img src="styles/legend/puebla_3.png" /> puebla'
            });
var format_pun_4 = new ol.format.GeoJSON();
var features_pun_4 = format_pun_4.readFeatures(json_pun_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pun_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pun_4.addFeatures(features_pun_4);cluster_pun_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_pun_4
});
var lyr_pun_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_pun_4, 
                style: style_pun_4,
                interactive: true,
                title: '<img src="styles/legend/pun_4.png" /> pun'
            });

lyr_map_0.setVisible(true);lyr_GlobalNightLightLatest_1.setVisible(true);lyr_energy_sr1_2.setVisible(true);lyr_puebla_3.setVisible(true);lyr_pun_4.setVisible(true);
var layersList = [lyr_map_0,lyr_GlobalNightLightLatest_1,lyr_energy_sr1_2,lyr_puebla_3,lyr_pun_4];
lyr_energy_sr1_2.set('fieldAliases', {'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Fuente primaria de energía': 'Fuente primaria de energía', });
lyr_puebla_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', });
lyr_pun_4.set('fieldAliases', {'lat': 'lat', 'lon': 'lon', 'Descripcion': 'Descripcion', });
lyr_energy_sr1_2.set('fieldImages', {'Latitud': '', 'Longitud': '', 'Fuente primaria de energía': '', });
lyr_puebla_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', });
lyr_pun_4.set('fieldImages', {'lat': '', 'lon': '', 'Descripcion': '', });
lyr_energy_sr1_2.set('fieldLabels', {'Latitud': 'no label', 'Longitud': 'no label', 'Fuente primaria de energía': 'header label', });
lyr_puebla_3.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', });
lyr_pun_4.set('fieldLabels', {'lat': 'no label', 'lon': 'no label', 'Descripcion': 'no label', });
lyr_pun_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleMaps_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "mapaeolico_1": {
            "type": "geojson",
            "data": json_mapaeolico_1
        }
                    ,
        "reservasnaturales_2": {
            "type": "geojson",
            "data": json_reservasnaturales_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleMaps_0_0",
            "type": "raster",
            "source": "GoogleMaps_0"
        },
        {
            "id": "lyr_mapaeolico_1_0",
            "type": "fill",
            "source": "mapaeolico_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'PAR'], 8.273333333333335], 0.094, ['==', ['get', 'PAR'], 8.773333333333335], 0.094, ['==', ['get', 'PAR'], 9.746666666666668], 0.094, ['==', ['get', 'PAR'], 10.326666666666666], 0.094, ['==', ['get', 'PAR'], 10.426666666666666], 0.094, ['==', ['get', 'PAR'], 10.82], 0.094, ['==', ['get', 'PAR'], 11.013333333333334], 0.094, ['==', ['get', 'PAR'], 11.313333333333333], 0.094, ['==', ['get', 'PAR'], 11.353333333333332], 0.094, ['==', ['get', 'PAR'], 11.426666666666668], 0.094, ['==', ['get', 'PAR'], 11.506666666666668], 0.094, ['==', ['get', 'PAR'], 12.173333333333334], 0.094, ['==', ['get', 'PAR'], 12.566666666666665], 0.094, ['==', ['get', 'PAR'], 12.72], 0.094, ['==', ['get', 'PAR'], 12.993333333333334], 0.094, ['==', ['get', 'PAR'], 13], 0.094, ['==', ['get', 'PAR'], 13.413333333333334], 0.094, ['==', ['get', 'PAR'], 13.72], 0.094, ['==', ['get', 'PAR'], 13.806666666666667], 0.094, ['==', ['get', 'PAR'], 13.813333333333333], 0.094, ['==', ['get', 'PAR'], 14.1], 0.094, ['==', ['get', 'PAR'], 14.160000000000002], 0.094, ['==', ['get', 'PAR'], 14.673333333333332], 0.094, ['==', ['get', 'PAR'], 14.753333333333336], 0.094, ['==', ['get', 'PAR'], 15.226666666666668], 0.094, ['==', ['get', 'PAR'], 15.333333333333334], 0.094, ['==', ['get', 'PAR'], 15.393333333333333], 0.094, ['==', ['get', 'PAR'], 15.46], 0.094, ['==', ['get', 'PAR'], 15.88], 0.094, ['==', ['get', 'PAR'], 16.139999999999997], 0.094, ['==', ['get', 'PAR'], 16.613333333333333], 0.094, ['==', ['get', 'PAR'], 16.873333333333335], 0.094, ['==', ['get', 'PAR'], 17.253333333333334], 0.094, ['==', ['get', 'PAR'], 19.006666666666664], 0.094, ['==', ['get', 'PAR'], 19.053333333333335], 0.094, ['==', ['get', 'PAR'], 21.273333333333337], 0.094, ['==', ['get', 'PAR'], 24.526666666666667], 0.094, ['==', ['get', 'PAR'], 27.600000000000005], 0.094, ['==', ['get', 'PAR'], 34.48], 0.094, 0.094], 'fill-color': ['case', ['==', ['get', 'PAR'], 8.273333333333335], '#f7fbff', ['==', ['get', 'PAR'], 8.773333333333335], '#f2f8fd', ['==', ['get', 'PAR'], 9.746666666666668], '#edf5fc', ['==', ['get', 'PAR'], 10.326666666666666], '#e8f2fa', ['==', ['get', 'PAR'], 10.426666666666666], '#e3eef9', ['==', ['get', 'PAR'], 10.82], '#deebf7', ['==', ['get', 'PAR'], 11.013333333333334], '#dae8f6', ['==', ['get', 'PAR'], 11.313333333333333], '#d5e5f4', ['==', ['get', 'PAR'], 11.353333333333332], '#d0e2f2', ['==', ['get', 'PAR'], 11.426666666666668], '#cbdff1', ['==', ['get', 'PAR'], 11.506666666666668], '#c7dbef', ['==', ['get', 'PAR'], 12.173333333333334], '#bfd8ed', ['==', ['get', 'PAR'], 12.566666666666665], '#b7d5ea', ['==', ['get', 'PAR'], 12.72], '#afd1e7', ['==', ['get', 'PAR'], 12.993333333333334], '#a8cee4', ['==', ['get', 'PAR'], 13], '#a0cbe2', ['==', ['get', 'PAR'], 13.413333333333334], '#96c6df', ['==', ['get', 'PAR'], 13.72], '#8cc0dd', ['==', ['get', 'PAR'], 13.806666666666667], '#82bbdb', ['==', ['get', 'PAR'], 13.813333333333333], '#78b5d9', ['==', ['get', 'PAR'], 14.1], '#6eb0d7', ['==', ['get', 'PAR'], 14.160000000000002], '#65aad4', ['==', ['get', 'PAR'], 14.673333333333332], '#5da5d1', ['==', ['get', 'PAR'], 14.753333333333336], '#559fcd', ['==', ['get', 'PAR'], 15.226666666666668], '#4d99ca', ['==', ['get', 'PAR'], 15.333333333333334], '#4594c7', ['==', ['get', 'PAR'], 15.393333333333333], '#3e8ec4', ['==', ['get', 'PAR'], 15.46], '#3787c0', ['==', ['get', 'PAR'], 15.88], '#3181bd', ['==', ['get', 'PAR'], 16.139999999999997], '#2a7aba', ['==', ['get', 'PAR'], 16.613333333333333], '#2474b6', ['==', ['get', 'PAR'], 16.873333333333335], '#1e6db2', ['==', ['get', 'PAR'], 17.253333333333334], '#1966ad', ['==', ['get', 'PAR'], 19.006666666666664], '#135fa7', ['==', ['get', 'PAR'], 19.053333333333335], '#0e59a2', ['==', ['get', 'PAR'], 21.273333333333337], '#09529d', ['==', ['get', 'PAR'], 24.526666666666667], '#084991', ['==', ['get', 'PAR'], 27.600000000000005], '#084184', ['==', ['get', 'PAR'], 34.48], '#083878', '#08306b']}
        }
,
        {
            "id": "lyr_reservasnaturales_2_0",
            "type": "fill",
            "source": "reservasnaturales_2",
            "layout": {},
            "paint": {'fill-opacity': 0.417, 'fill-color': '#33a02c'}
        }
],
}
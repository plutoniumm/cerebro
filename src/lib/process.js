export const wiki = ( endpoint ) => `https://en.wikipedia.org/${ endpoint }`;
export const github = ( endpoint ) => `https://github.com/${ endpoint }`;
export const medium = ( endpoint ) => `https://medium.com/${ endpoint }`;

function hslToRgb ( h, s, l ) {
    let r, g, b;

    if ( s == 0 )
        r = g = b = l;
    else {
        let hue2rgb = function hue2rgb ( p, q, t ) {
            if ( t < 0 ) t += 1;
            if ( t > 1 ) t -= 1;
            if ( t < 1 / 6 ) return p + ( q - p ) * 6 * t;
            if ( t < 1 / 2 ) return q;
            if ( t < 2 / 3 ) return p + ( q - p ) * ( 2 / 3 - t ) * 6;
            return p;
        };

        let q = l < 0.5 ? l * ( 1 + s ) : l + s - l * s;
        let p = 2 * l - q;
        r = hue2rgb( p, q, h + 1 / 3 );
        g = hue2rgb( p, q, h );
        b = hue2rgb( p, q, h - 1 / 3 );
    }

    return [ Math.round( r * 255 ), Math.round( g * 255 ), Math.round( b * 255 ) ];
};
function rgbToHsl ( r, g, b ) {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max( r, g, b ), min = Math.min( r, g, b );
    let h, s, l = ( max + min ) / 2;

    if ( max == min )
        h = s = 0; // achromatic
    else {
        let d = max - min;
        s = l > 0.5 ? d / ( 2 - max - min ) : d / ( max + min );
        switch ( max ) {
            case r: h = ( g - b ) / d + ( g < b ? 6 : 0 ); break;
            case g: h = ( b - r ) / d + 2; break;
            case b: h = ( r - g ) / d + 4; break;
        }
        h /= 6;
    }
    return [ h, s, l ];
};
const opaToRgb = ( opa ) => ( opa * 255 ).toString( 16 ).split( '.' )[ 0 ];
export const colorChange = {
    lighten: ( colorValue, shift, opacity = 1 ) => {
        if ( colorValue && colorValue.length >= 6 ) {
            let redValue = parseInt( colorValue.slice( -6, -4 ), 16 );
            let greenValue = parseInt( colorValue.slice( -4, -2 ), 16 );
            let blueValue = parseInt( colorValue.slice( -2 ), 16 );

            let hsl = rgbToHsl( redValue, greenValue, blueValue );
            hsl[ 2 ] = Math.min( hsl[ 2 ] + shift, 1 );
            let rgb = hslToRgb( hsl[ 0 ], hsl[ 1 ], hsl[ 2 ] ).map( e => e.toString( 16 ) );
            return `#${ rgb[ 0 ] }${ rgb[ 1 ] }${ rgb[ 2 ] }${ opaToRgb( opacity ) }`;
        }
        return null;
    },
    darken: ( colorValue, shift ) => {
        if ( colorValue && colorValue.length >= 6 ) {
            let redValue = parseInt( colorValue.slice( -6, -4 ), 16 );
            let greenValue = parseInt( colorValue.slice( -4, -2 ), 16 );
            let blueValue = parseInt( colorValue.slice( -2 ), 16 );

            let hsl = rgbToHsl( redValue, greenValue, blueValue );
            hsl[ 2 ] = Math.max( hsl[ 2 ] - shift, 0 );
            let rgb = hslToRgb( hsl[ 0 ], hsl[ 1 ], hsl[ 2 ] );
            return "#" + rgb[ 0 ].toString( 16 ) + rgb[ 1 ].toString( 16 ) + rgb[ 2 ].toString( 16 );
        }
        return null;
    }
};
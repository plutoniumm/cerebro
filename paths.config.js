import path from 'path';

const objectify = ( paths ) => {
    return {
        from: new RegExp( `ui:${ paths[ 0 ] }`, "g" ),
        to: paths[ 1 ]
    };
}

// Add All UI Aliases
// Will be replaced as $UI:FROM$ -> $TO$
export const UIAliases = [
    [ 'transparent/orange', 'rgba(224,130,47,.1)' ],
    [ 'orange', '#e0822f' ],
    [ 'red', '#faa' ],

    [ 'lgreen', '#afa' ],
    [ 'green', '#0b843e' ],

    [ 'blue', '#aaf' ],
    [ 'lblue', '#2af' ],

    [ 'lpurple', '#96f' ],
    [ 'purple', '#9b51e0' ]
].map( objectify );

// Standard Path replacements
export const PathAliases = {
    '@data': path.resolve( './src/data' ),
    '@com:top': path.resolve( './src/components/global' ),
    '@com:lib': path.resolve( './src/components/lib' ),
    '@com:gen': path.resolve( './src/components/gen' )
};
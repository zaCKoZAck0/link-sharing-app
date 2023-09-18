import * as React from 'react';

function DragIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="12" height="6" {...props} viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="1" fill="#737373"/>
            <rect y="5" width="12" height="1" fill="#737373"/>
        </svg>


    );
}

const MemoDragIcon = React.memo(DragIcon);
export default MemoDragIcon;

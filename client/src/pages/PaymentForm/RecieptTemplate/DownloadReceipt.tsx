import React from 'react';
import { toJpeg } from 'html-to-image';

export const downloadReceipt = (
    elementRef: React.RefObject<HTMLElement>,
    name: string
) => {
    if (elementRef.current) {
        toJpeg(elementRef.current, { cacheBust: false })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = name + '.jpeg';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

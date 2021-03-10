
export default class Mask {   
    static MASK_DATE = "##/##/####";

    static unmask(text) {
        return text.replace(/\./g, "").replace(/-/g, "")
                .replace(/\//g, "").replace(/\(/g, "")
                .replace(/\)/g, "").replace(/:/g, "")
                .replace(/ /g, "").replace(/,/g, "");
    }

    static applyMask(mask, text) {
        if (mask && mask.length > 0 && text && text.length > 0) {
            text = Mask.unmask(text);
            let out = "";
            let i = 0;
            let j = 0;
            while (i < mask.length && j < text.length) {
                if (mask[i] === '#') {
                    out += text[j];
                    j++;
                } else {
                    out += mask[i];
                }
                i++;
            }
            return out;
        }
        return text;
    }

    
}

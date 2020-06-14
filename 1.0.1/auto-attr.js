/*
 Auto Attribute JS v1.0.1
 (c) 2016-2020 Kabeers Network, Inc. http://kabeersnetwork.dx.am
 (c) Developed By Kabeer Jaffri
 License: GNU General Public License v2.0
*/
window.tag = function(tags, type) {
    let eltype = {
        typeParent: type.from,
        typeConvert: type.to
    };

    function type2val(type) {
        let val;
        switch (type) {
            case 'id':
                val = '#';
                break;
            case 'class':
                val = '.';
                break;
            case 'tag':
                val = 0;
                break;
            default:
                val = type;
                break;
        }
        return val;
    }
    try {
        Object.keys(tags).forEach(function(key) {
            for (var i = Object.keys(tags).length - 1; i < Object.keys(tags).length; i++) {
                try {
                    let value = tags[key];
                    if (type2val(eltype.typeParent) == 0) {
                        document.querySelectorAll(key).forEach(function(xampp) {
                            xampp.setAttribute(eltype.typeConvert, '');
                        })
                        if (document.querySelectorAll(key).forEach(function(x) {
                                let attr = x.getAttribute(eltype.typeConvert);
                                x.setAttribute(eltype.typeConvert, attr + ' ' + value);
                            })) {
                            throw key + " is not Tag Name";
                        }

                    } else {
                        if (document.querySelectorAll('*[' + eltype.typeParent + '=' + key + ']').forEach((function(x) {
                                let attr = x.getAttribute(eltype.typeConvert);
                                x.setAttribute(eltype.typeConvert, attr + ' ' + value);
                            }))) {
                            throw key + " is not Tag Name";
                        }
                    }
                } catch (err) {
                    throw err + "\nAn Error Occured\nHint: Check Your JSON";
                }
            }
        });
    } catch (err) {
        throw err + "\nAn Error Occured\nHint: Check Your JSON";
    }
}

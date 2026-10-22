import { isValid, imageValid, directory } from './validate';
import { config } from './config';

describe('Validation Helpers', () => {

    describe('isValid', () => {
        it('should return true if the input has text', () => {
            const result = isValid('My Project Name');
            expect(result).toBe(true);
        });

        it('should return an error message if the input is empty', () => {
            const result = isValid('');
            expect(result).toBe("This value is required");
        });
    });

    describe('imageValid', () => {
        it('should return true for a correctly formatted image string', () => {
            // Testing 3 arguments: src, width, alt
            const result = imageValid('./img/preview.png, 400, app screenshot');
            expect(result).toBe(true);
        });

        it('should return an error message if there are less than 3 arguments', () => {
            const result = imageValid('./img/preview.png, 400');
            expect(result).toBe("Image must have specified 3 arguments: source, alt, width");
        });

        it('should return an error message if there are more than 3 arguments', () => {
            const result = imageValid('./img/preview.png, 400, alt, extra_arg');
            expect(result).toBe("Image must have specified 3 arguments: source, alt, width");
        });
    });

    describe('directory', () => {
        it('should return the provided path if it is not empty', () => {
            const result = directory('./my-custom-folder');
            expect(result).toBe('./my-custom-folder');
        });

        it('should return the default config OUT_DIR if the path is empty', () => {
            const result = directory('');
            // Since it falls back to config.OUT_DIR ('test' by default), we check for that
            expect(result).toBe(config.OUT_DIR);
        });
    });

});

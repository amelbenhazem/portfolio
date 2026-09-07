# CV LaTeX source

This folder contains the AltaCV source used to generate `public/cv.pdf`.

## Files

- `cv.tex` — main CV document
- `altacv.cls` — AltaCV class file
- `imagee.jpeg` — profile photo for the CV
- `sample.bib` — empty bibliography file (required by template)

## Recompile after editing

```bash
cd cv
pdflatex cv.tex
pdflatex cv.tex
copy cv.pdf ..\public\cv.pdf
```

Requires [MiKTeX](https://miktex.org/) with auto-install packages enabled.

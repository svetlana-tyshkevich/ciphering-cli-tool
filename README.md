# ciphering-cli-tool
## Install

1. Clone the repository  `git clone git@github.com:svetlana-tyshkevich/ciphering-cli-tool.git`.
2. Switch to the branch "task-1"

## Usage

CLI tool should accept 3 options (short alias and full name):

1.  **-c, --config**: config for ciphers
Config is a string with pattern `{XY(-)}n`, where:
  * `X` is a cipher mark:
    * `C` is for Caesar cipher (with shift 1)
    * `A` is for Atbash cipher
    * `R` is for ROT-8 cipher
  * `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
    * `1` is for encoding
    * `0` is for decoding
2.  **-i, --input**: a path to input file
3.  **-o, --output**: a path to output file

## Checking examples:

1. Normal alias format with different ciphers
```node index.js -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"```
> output `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

```node index.js -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"```
> output `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`

```node index.js -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"```
> output `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`

```node index.js -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"```
> output `This is secret. Message about "_" symbol!`

```node index.js -c "C1" -i "./input.txt" -o "./output.txt"```
> output `Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!`

2. normal full format
```node index.js --config "C1-C1-R0-A" --input "./input.txt" --output "./output.txt"```

3.  Without config
```node index.js  -i "./input.txt" -o "./output.txt"```

4. Without input
```node index.js -c "C1-C1-R0-A" -o "./output.txt"```
(Press ctrl + c to finish)

5. Without output
```node index.js -c "C1-C1-R0-A" -i "./input.txt"```

6. Without input and output 
```node index.js -c "C1-C1-R0-A"``` 

7. Incorrect input path
```node index.js -c "C1-C1-R0-A" -i "./iinput.txt" -o "./output.txt"```

8. Incorrect output path
```node index.js -c "C1-C1-R0-A" -i "./input.txt" -o "./output.tt"```

9. Duplicate argument
```node index.js -c "C1-C1-R0-A" -i "./input.txt" -c "C1-R0" -o "./output.txt"```

10. Different order of arguments
```node index.js -i "./input.txt" -c "C1-C1-R0-A" -o "./output.txt"```
```node index.js -o "./output.txt" -i "./input.txt" -c "C1-C1-R0-A"```

11. Incorrect config format
```node index.js -c "C1--C1-R0-A" -i "./input.txt" -o "./output.txt"```
```node index.js -c "C1 C1 R0 A" -i "./input.txt" -o "./output.txt"```

12. Incorrect cipher code(X)
```node index.js -c "V1-C1-R0-A" -i "./input.txt" -o "./output.txt"```

13. encode/decode arg (Y) is absent for caesar or rot-8
```node index.js -c "C1-C-R0-A" -i "./input.txt" -o "./output.txt"```

14. encode/decode arg (Y) is correct
```node index.js -c "C1-C1-R3-A" -i "./input.txt" -o "./output.txt"```

15. encode/decode arg (Y) is present for atbash
```node index.js -c "C1-C1-R0-A1" -i "./input.txt" -o "./output.txt"```


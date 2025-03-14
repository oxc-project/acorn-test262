unicodeExtendedEscapesInRegularExpressions17.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 51,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 30,
            "end": 49,
            "raw": "/\\u{r}\\u{n}\\u{t}/gu",
            "regex": {
              "flags": "gu",
              "pattern": "\\u{r}\\u{n}\\u{t}"
            },
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```

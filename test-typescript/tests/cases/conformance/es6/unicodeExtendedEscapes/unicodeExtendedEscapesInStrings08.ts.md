unicodeExtendedEscapesInStrings08.ts
```json
{
  "type": "Program",
  "start": 132,
  "end": 152,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 140,
            "end": 150,
            "raw": "\"\\u{FFFF}\"",
            "value": "￿"
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

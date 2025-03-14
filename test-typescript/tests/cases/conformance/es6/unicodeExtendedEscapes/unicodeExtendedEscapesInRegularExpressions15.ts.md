unicodeExtendedEscapesInRegularExpressions15.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 68,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 66,
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
            "end": 66,
            "raw": "/\\u{abcd}\\u{ef12}\\u{3456}\\u{7890}/gu",
            "regex": {
              "flags": "gu",
              "pattern": "\\u{abcd}\\u{ef12}\\u{3456}\\u{7890}"
            },
            "value": {}
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

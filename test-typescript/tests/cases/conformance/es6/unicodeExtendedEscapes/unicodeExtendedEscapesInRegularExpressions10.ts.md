unicodeExtendedEscapesInRegularExpressions10.ts
```json
{
  "type": "Program",
  "start": 244,
  "end": 266,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 264,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 252,
            "end": 264,
            "raw": "/\\u{D800}/gu",
            "regex": {
              "flags": "gu",
              "pattern": "\\u{D800}"
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

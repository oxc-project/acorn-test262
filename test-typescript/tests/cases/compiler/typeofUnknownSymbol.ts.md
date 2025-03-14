typeofUnknownSymbol.ts
```json
{
  "type": "Program",
  "start": 33,
  "end": 58,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 57,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 41,
            "end": 57,
            "argument": {
              "type": "Identifier",
              "start": 48,
              "end": 57,
              "decorators": [],
              "name": "whatsthis",
              "optional": false
            },
            "operator": "typeof",
            "prefix": true
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

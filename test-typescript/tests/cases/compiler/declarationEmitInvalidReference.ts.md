declarationEmitInvalidReference.ts
```json
{
  "type": "Program",
  "start": 36,
  "end": 46,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 44,
            "end": 45,
            "raw": "0",
            "value": 0
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

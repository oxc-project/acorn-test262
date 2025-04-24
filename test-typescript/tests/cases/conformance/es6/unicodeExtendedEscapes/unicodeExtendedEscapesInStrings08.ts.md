__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 110,
  "end": 129,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 128,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 118,
            "end": 128,
            "raw": "\"\\u{FFFF}\"",
            "value": "￿"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

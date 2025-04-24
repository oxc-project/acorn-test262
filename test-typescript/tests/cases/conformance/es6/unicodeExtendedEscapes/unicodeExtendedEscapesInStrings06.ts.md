__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 92,
  "end": 113,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 100,
            "end": 112,
            "raw": "\"\\u{10FFFF}\"",
            "value": "􏿿"
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

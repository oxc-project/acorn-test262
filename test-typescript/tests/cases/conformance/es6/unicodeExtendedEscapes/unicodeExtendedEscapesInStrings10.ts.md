__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 244,
  "end": 264,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 262,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 252,
            "end": 262,
            "raw": "\"\\u{D800}\"",
            "value": "\ud800"
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

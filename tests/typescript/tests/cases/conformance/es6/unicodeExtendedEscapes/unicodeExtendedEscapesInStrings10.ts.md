__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 227
          },
          "init": {
            "type": "Literal",
            "value": "\ud800",
            "raw": "\"\\u{D800}\"",
            "start": 230,
            "end": 240
          },
          "definite": false,
          "start": 226,
          "end": 240
        }
      ],
      "declare": false,
      "start": 222,
      "end": 241
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 222,
  "end": 241
}
```

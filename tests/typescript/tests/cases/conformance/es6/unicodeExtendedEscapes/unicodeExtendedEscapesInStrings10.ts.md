__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 222,
  "end": 241,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 241,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 240,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 227,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 230,
            "end": 240,
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

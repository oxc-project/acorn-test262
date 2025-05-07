__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 111,
  "end": 131,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 130,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 119,
            "end": 130,
            "raw": "\"\\u{10000}\"",
            "value": "𐀀",
            "regex": null,
            "bigint": null
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

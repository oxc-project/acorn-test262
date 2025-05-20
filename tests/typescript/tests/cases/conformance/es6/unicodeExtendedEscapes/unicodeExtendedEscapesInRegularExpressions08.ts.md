__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 110,
  "end": 131,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 130,
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
            "end": 130,
            "raw": "/\\u{FFFF}/gu",
            "regex": {
              "flags": "gu",
              "pattern": "\\u{FFFF}"
            },
            "value": null
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

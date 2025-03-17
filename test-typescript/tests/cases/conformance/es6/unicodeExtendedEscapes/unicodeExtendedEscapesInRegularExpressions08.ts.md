__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 132,
  "end": 154,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 140,
            "end": 152,
            "value": null,
            "raw": "/\\u{FFFF}/gu",
            "regex": {
              "flags": "gu",
              "pattern": "\\u{FFFF}"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

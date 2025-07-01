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
            "start": 114,
            "end": 115
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/\\u{FFFF}/gu",
            "regex": {
              "pattern": "\\u{FFFF}",
              "flags": "gu"
            },
            "start": 118,
            "end": 130
          },
          "definite": false,
          "start": 114,
          "end": 130
        }
      ],
      "declare": false,
      "start": 110,
      "end": 131
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 110,
  "end": 131
}
```

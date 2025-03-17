__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 114,
  "end": 138,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 122,
            "end": 136,
            "value": null,
            "raw": "/\\u{10FFFF}/gu",
            "regex": {
              "flags": "gu",
              "pattern": "\\u{10FFFF}"
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

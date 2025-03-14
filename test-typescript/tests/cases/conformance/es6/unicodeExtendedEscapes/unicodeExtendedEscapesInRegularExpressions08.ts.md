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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 140,
            "end": 152,
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

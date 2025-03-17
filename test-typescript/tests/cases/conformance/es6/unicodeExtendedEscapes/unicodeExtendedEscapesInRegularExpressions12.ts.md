__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 48,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 30,
            "end": 46,
            "value": null,
            "raw": "/\\u{FFFFFFFF}/gu",
            "regex": {
              "flags": "gu",
              "pattern": "\\u{FFFFFFFF}"
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

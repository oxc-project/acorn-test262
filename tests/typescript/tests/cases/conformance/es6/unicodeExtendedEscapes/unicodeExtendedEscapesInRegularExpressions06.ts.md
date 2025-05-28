__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 92,
  "end": 115,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 115,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 114,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 100,
            "end": 114,
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
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

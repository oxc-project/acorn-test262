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
            "start": 96,
            "end": 97
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/\\u{110000}/gu",
            "regex": {
              "pattern": "\\u{110000}",
              "flags": "gu"
            },
            "start": 100,
            "end": 114
          },
          "definite": false,
          "start": 96,
          "end": 114
        }
      ],
      "declare": false,
      "start": 92,
      "end": 115
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 92,
  "end": 115
}
```

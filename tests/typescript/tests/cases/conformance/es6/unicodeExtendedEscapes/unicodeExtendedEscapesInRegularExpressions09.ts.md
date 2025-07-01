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
            "start": 115,
            "end": 116
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/\\u{10000}/gu",
            "regex": {
              "pattern": "\\u{10000}",
              "flags": "gu"
            },
            "start": 119,
            "end": 132
          },
          "definite": false,
          "start": 115,
          "end": 132
        }
      ],
      "declare": false,
      "start": 111,
      "end": 133
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 111,
  "end": 133
}
```

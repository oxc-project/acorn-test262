__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 111,
  "end": 133,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 132,
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
            "end": 132,
            "raw": "/\\u{10000}/gu",
            "regex": {
              "flags": "gu",
              "pattern": "\\u{10000}"
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

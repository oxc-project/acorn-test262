__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 133,
  "end": 156,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 138,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 141,
            "end": 154,
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

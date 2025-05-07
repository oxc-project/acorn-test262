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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 114,
          "definite": false,
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
            "raw": "/\\u{110000}/gu",
            "regex": {
              "flags": "gu",
              "pattern": "\\u{110000}"
            },
            "value": null,
            "bigint": null
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

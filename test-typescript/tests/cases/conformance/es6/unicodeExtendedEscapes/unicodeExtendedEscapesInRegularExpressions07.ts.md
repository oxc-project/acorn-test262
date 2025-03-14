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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 122,
            "end": 136,
            "raw": "/\\u{110000}/gu",
            "regex": {
              "flags": "gu",
              "pattern": "\\u{110000}"
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

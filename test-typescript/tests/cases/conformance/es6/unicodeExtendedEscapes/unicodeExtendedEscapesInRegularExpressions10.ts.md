__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 222,
  "end": 243,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 242,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 227,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 230,
            "end": 242,
            "raw": "/\\u{D800}/gu",
            "regex": {
              "flags": "gu",
              "pattern": "\\u{D800}"
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

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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 242,
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
            "value": null,
            "raw": "/\\u{D800}/gu",
            "regex": {
              "pattern": "\\u{D800}",
              "flags": "gu"
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

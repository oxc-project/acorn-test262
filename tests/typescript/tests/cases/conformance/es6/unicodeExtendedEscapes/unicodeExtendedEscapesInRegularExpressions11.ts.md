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
            "start": 226,
            "end": 227
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/\\u{DC00}/gu",
            "regex": {
              "pattern": "\\u{DC00}",
              "flags": "gu"
            },
            "start": 230,
            "end": 242
          },
          "definite": false,
          "start": 226,
          "end": 242
        }
      ],
      "declare": false,
      "start": 222,
      "end": 243
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 222,
  "end": 243
}
```

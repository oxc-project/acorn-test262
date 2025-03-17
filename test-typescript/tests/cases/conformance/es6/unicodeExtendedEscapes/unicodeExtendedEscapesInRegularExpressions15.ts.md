__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 68,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 30,
            "end": 66,
            "value": null,
            "raw": "/\\u{abcd}\\u{ef12}\\u{3456}\\u{7890}/gu",
            "regex": {
              "flags": "gu",
              "pattern": "\\u{abcd}\\u{ef12}\\u{3456}\\u{7890}"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

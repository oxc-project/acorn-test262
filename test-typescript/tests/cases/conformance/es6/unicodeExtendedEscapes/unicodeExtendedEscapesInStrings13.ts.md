__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 43,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 41,
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
            "end": 41,
            "value": "󝷝",
            "raw": "\"\\u{DDDDD}\""
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

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
            "start": 96,
            "end": 97
          },
          "init": {
            "type": "Literal",
            "value": "􏿿",
            "raw": "\"\\u{10FFFF}\"",
            "start": 100,
            "end": 112
          },
          "definite": false,
          "start": 96,
          "end": 112
        }
      ],
      "declare": false,
      "start": 92,
      "end": 113
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 92,
  "end": 113
}
```

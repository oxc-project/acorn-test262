__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 66,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 64,
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
            "end": 64,
            "value": "ꯍ㑖碐",
            "raw": "\"\\u{ABCD}\\u{EF12}\\u{3456}\\u{7890}\""
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

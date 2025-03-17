__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 18,
  "end": 51,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 26,
            "end": 50,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 26,
                "end": 50,
                "value": {
                  "cooked": "\u0000\u0000\u0000 0 00 0000",
                  "raw": "\\0\\x00\\u0000 0 00 0000"
                },
                "tail": true
              }
            ]
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

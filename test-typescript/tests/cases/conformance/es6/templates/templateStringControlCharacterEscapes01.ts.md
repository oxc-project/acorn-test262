__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 3,
  "end": 36,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 3,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 11,
            "end": 35,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 11,
                "end": 35,
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

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 244,
  "end": 264,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 262,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 252,
            "end": 262,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 252,
                "end": 262,
                "value": {
                  "cooked": "\udc00",
                  "raw": "\\u{DC00}"
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

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 132,
  "end": 152,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 150,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 140,
            "end": 150,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 140,
                "end": 150,
                "value": {
                  "cooked": "￿",
                  "raw": "\\u{FFFF}"
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

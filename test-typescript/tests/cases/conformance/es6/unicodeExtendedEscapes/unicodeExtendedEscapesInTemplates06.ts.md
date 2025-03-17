__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 114,
  "end": 136,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 122,
            "end": 134,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 122,
                "end": 134,
                "value": {
                  "cooked": "􏿿",
                  "raw": "\\u{10FFFF}"
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

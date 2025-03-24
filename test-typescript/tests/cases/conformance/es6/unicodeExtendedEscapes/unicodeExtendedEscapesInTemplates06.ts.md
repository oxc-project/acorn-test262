__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 114,
  "end": 135,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
                "tail": true,
                "value": {
                  "cooked": "􏿿",
                  "raw": "\\u{10FFFF}"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

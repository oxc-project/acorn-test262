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
            "start": 115,
            "end": 116
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "\\u{10000}",
                  "cooked": "𐀀"
                },
                "tail": true,
                "start": 119,
                "end": 130
              }
            ],
            "expressions": [],
            "start": 119,
            "end": 130
          },
          "definite": false,
          "start": 115,
          "end": 130
        }
      ],
      "declare": false,
      "start": 111,
      "end": 131
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 111,
  "end": 131
}
```

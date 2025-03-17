__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 133,
  "end": 154,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 152,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 138,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 141,
            "end": 152,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 141,
                "end": 152,
                "tail": true,
                "value": {
                  "cooked": "𐀀",
                  "raw": "\\u{10000}"
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

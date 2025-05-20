__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 92,
  "end": 113,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 100,
            "end": 112,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 100,
                "end": 112,
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

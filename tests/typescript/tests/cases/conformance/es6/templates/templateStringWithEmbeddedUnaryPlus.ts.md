__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 31,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 30,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 8,
            "end": 30,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 8,
                "end": 14,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 25,
                "end": 30,
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "UnaryExpression",
                "start": 15,
                "end": 24,
                "operator": "+",
                "argument": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 24,
                  "decorators": [],
                  "name": "Infinity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

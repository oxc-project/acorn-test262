__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 32,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 31,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 9,
            "end": 31,
            "expressions": [
              {
                "type": "UnaryExpression",
                "start": 16,
                "end": 25,
                "operator": "+",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 25,
                  "name": "Infinity",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 9,
                "end": 15,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 26,
                "end": 31,
                "value": {
                  "cooked": "def",
                  "raw": "def"
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

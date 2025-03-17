__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 48,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 25,
            "end": 47,
            "expressions": [
              {
                "type": "UnaryExpression",
                "start": 32,
                "end": 41,
                "argument": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 41,
                  "decorators": [],
                  "name": "Infinity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "+",
                "prefix": true
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 25,
                "end": 31,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 42,
                "end": 47,
                "tail": true,
                "value": {
                  "cooked": "def",
                  "raw": "def"
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

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
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "operator": "+",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 41,
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
                "start": 25,
                "end": 31,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 42,
                "end": 47,
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

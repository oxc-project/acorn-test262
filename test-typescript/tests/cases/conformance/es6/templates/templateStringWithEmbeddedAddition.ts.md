__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 30,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 29,
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
            "end": 29,
            "expressions": [
              {
                "type": "BinaryExpression",
                "start": 16,
                "end": 23,
                "left": {
                  "type": "Literal",
                  "start": 16,
                  "end": 18,
                  "value": 10,
                  "raw": "10"
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 21,
                  "end": 23,
                  "value": 10,
                  "raw": "10"
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
                "start": 24,
                "end": 29,
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

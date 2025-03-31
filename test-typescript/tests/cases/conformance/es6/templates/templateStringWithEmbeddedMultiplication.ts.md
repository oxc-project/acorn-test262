__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 28,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 27,
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
            "end": 27,
            "expressions": [
              {
                "type": "BinaryExpression",
                "start": 16,
                "end": 21,
                "left": {
                  "type": "Literal",
                  "start": 16,
                  "end": 17,
                  "value": 7,
                  "raw": "7"
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "start": 20,
                  "end": 21,
                  "value": 6,
                  "raw": "6"
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
                "start": 22,
                "end": 27,
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

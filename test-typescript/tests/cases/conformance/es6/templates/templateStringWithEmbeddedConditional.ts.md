__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 41,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 40,
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
            "end": 40,
            "expressions": [
              {
                "type": "ConditionalExpression",
                "start": 16,
                "end": 34,
                "test": {
                  "type": "Literal",
                  "start": 16,
                  "end": 20,
                  "value": true,
                  "raw": "true"
                },
                "consequent": {
                  "type": "Literal",
                  "start": 23,
                  "end": 28,
                  "value": false,
                  "raw": "false"
                },
                "alternate": {
                  "type": "Literal",
                  "start": 31,
                  "end": 34,
                  "value": " ",
                  "raw": "\" \""
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
                "start": 35,
                "end": 40,
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

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 39,
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
            "end": 39,
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
                "start": 34,
                "end": 39,
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "ConditionalExpression",
                "start": 15,
                "end": 33,
                "test": {
                  "type": "Literal",
                  "start": 15,
                  "end": 19,
                  "value": true,
                  "raw": "true"
                },
                "consequent": {
                  "type": "Literal",
                  "start": 22,
                  "end": 27,
                  "value": false,
                  "raw": "false"
                },
                "alternate": {
                  "type": "Literal",
                  "start": 30,
                  "end": 33,
                  "value": " ",
                  "raw": "\" \""
                }
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

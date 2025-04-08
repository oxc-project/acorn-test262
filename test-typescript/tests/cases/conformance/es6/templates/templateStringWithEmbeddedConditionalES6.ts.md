__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 57,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 56,
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
            "end": 56,
            "expressions": [
              {
                "type": "ConditionalExpression",
                "start": 32,
                "end": 50,
                "test": {
                  "type": "Literal",
                  "start": 32,
                  "end": 36,
                  "value": true,
                  "raw": "true"
                },
                "consequent": {
                  "type": "Literal",
                  "start": 39,
                  "end": 44,
                  "value": false,
                  "raw": "false"
                },
                "alternate": {
                  "type": "Literal",
                  "start": 47,
                  "end": 50,
                  "value": " ",
                  "raw": "\" \""
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
                "start": 51,
                "end": 56,
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

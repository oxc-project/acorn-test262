__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 27,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 26,
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
            "type": "UnaryExpression",
            "start": 9,
            "end": 26,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "TemplateLiteral",
              "start": 10,
              "end": 26,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 17,
                  "end": 20,
                  "value": 123,
                  "raw": "123"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 10,
                  "end": 16,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 21,
                  "end": 26,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  },
                  "tail": true
                }
              ]
            }
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

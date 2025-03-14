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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 9,
            "end": 26,
            "argument": {
              "type": "TemplateLiteral",
              "start": 10,
              "end": 26,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 17,
                  "end": 20,
                  "raw": "123",
                  "value": 123
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 10,
                  "end": 16,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 21,
                  "end": 26,
                  "tail": true,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  }
                }
              ]
            },
            "operator": "+",
            "prefix": true
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

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 43,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 25,
            "end": 42,
            "argument": {
              "type": "TemplateLiteral",
              "start": 26,
              "end": 42,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 33,
                  "end": 36,
                  "raw": "123",
                  "value": 123
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 26,
                  "end": 32,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 37,
                  "end": 42,
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

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 49,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 48,
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
            "end": 48,
            "argument": {
              "type": "TemplateLiteral",
              "start": 32,
              "end": 48,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 39,
                  "end": 42,
                  "raw": "123",
                  "value": 123
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 32,
                  "end": 38,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 43,
                  "end": 48,
                  "tail": true,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  }
                }
              ]
            },
            "operator": "typeof",
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

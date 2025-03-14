templateStringInTypeOf.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 33,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 32,
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
            "end": 32,
            "argument": {
              "type": "TemplateLiteral",
              "start": 16,
              "end": 32,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 23,
                  "end": 26,
                  "raw": "123",
                  "value": 123
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 16,
                  "end": 22,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 27,
                  "end": 32,
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
  "sourceType": "script"
}
```

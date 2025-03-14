templateStringWithEmbeddedTypeOfOperatorES6.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 50,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 49,
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
            "type": "TemplateLiteral",
            "start": 25,
            "end": 49,
            "expressions": [
              {
                "type": "UnaryExpression",
                "start": 32,
                "end": 43,
                "argument": {
                  "type": "Literal",
                  "start": 39,
                  "end": 43,
                  "raw": "\"hi\"",
                  "value": "hi"
                },
                "operator": "typeof",
                "prefix": true
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 25,
                "end": 31,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 44,
                "end": 49,
                "tail": true,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                }
              }
            ]
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

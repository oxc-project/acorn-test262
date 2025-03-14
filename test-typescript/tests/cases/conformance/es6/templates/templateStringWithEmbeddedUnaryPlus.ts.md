templateStringWithEmbeddedUnaryPlus.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 32,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 31,
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
            "type": "TemplateLiteral",
            "start": 9,
            "end": 31,
            "expressions": [
              {
                "type": "UnaryExpression",
                "start": 16,
                "end": 25,
                "argument": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 25,
                  "decorators": [],
                  "name": "Infinity",
                  "optional": false
                },
                "operator": "+",
                "prefix": true
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 9,
                "end": 15,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 26,
                "end": 31,
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

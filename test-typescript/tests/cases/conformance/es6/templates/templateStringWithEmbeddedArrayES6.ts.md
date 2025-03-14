templateStringWithEmbeddedArrayES6.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 46,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 45,
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
            "end": 45,
            "expressions": [
              {
                "type": "ArrayExpression",
                "start": 32,
                "end": 39,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 33,
                    "end": 34,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 35,
                    "end": 36,
                    "raw": "2",
                    "value": 2
                  },
                  {
                    "type": "Literal",
                    "start": 37,
                    "end": 38,
                    "raw": "3",
                    "value": 3
                  }
                ]
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
                "start": 40,
                "end": 45,
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

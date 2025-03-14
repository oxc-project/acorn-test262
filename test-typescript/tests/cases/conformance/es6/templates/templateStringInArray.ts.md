__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 34,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 33,
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
            "type": "ArrayExpression",
            "start": 9,
            "end": 33,
            "elements": [
              {
                "type": "Literal",
                "start": 10,
                "end": 11,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 13,
                "end": 14,
                "raw": "2",
                "value": 2
              },
              {
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
              }
            ]
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

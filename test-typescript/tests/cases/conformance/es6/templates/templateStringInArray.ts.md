__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 8,
            "end": 32,
            "elements": [
              {
                "type": "Literal",
                "start": 9,
                "end": 10,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 12,
                "end": 13,
                "raw": "2",
                "value": 2
              },
              {
                "type": "TemplateLiteral",
                "start": 15,
                "end": 31,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 22,
                    "end": 25,
                    "raw": "123",
                    "value": 123
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 15,
                    "end": 21,
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

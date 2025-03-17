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
            "type": "ArrayExpression",
            "start": 9,
            "end": 33,
            "elements": [
              {
                "type": "Literal",
                "start": 10,
                "end": 11,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 13,
                "end": 14,
                "value": 2,
                "raw": "2"
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
                    "value": 123,
                    "raw": "123"
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 16,
                    "end": 22,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 27,
                    "end": 32,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    },
                    "tail": true
                  }
                ]
              }
            ]
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

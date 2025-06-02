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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 12,
                "end": 13,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "TemplateLiteral",
                "start": 15,
                "end": 31,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 15,
                    "end": 21,
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 26,
                    "end": 31,
                    "value": {
                      "raw": "def",
                      "cooked": "def"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 22,
                    "end": 25,
                    "value": 123,
                    "raw": "123"
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

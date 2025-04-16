__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
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
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 35,
                    "end": 36,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 37,
                    "end": 38,
                    "value": 3,
                    "raw": "3"
                  }
                ]
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 25,
                "end": 31,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 40,
                "end": 45,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": true
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

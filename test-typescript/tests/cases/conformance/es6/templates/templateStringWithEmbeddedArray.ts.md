__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 30,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 29,
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
            "type": "TemplateLiteral",
            "start": 9,
            "end": 29,
            "expressions": [
              {
                "type": "ArrayExpression",
                "start": 16,
                "end": 23,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 17,
                    "end": 18,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 19,
                    "end": 20,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 21,
                    "end": 22,
                    "value": 3,
                    "raw": "3"
                  }
                ]
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 9,
                "end": 15,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 24,
                "end": 29,
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

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 31,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 30,
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
            "type": "TSTypeAssertion",
            "start": 9,
            "end": 30,
            "expression": {
              "type": "TemplateLiteral",
              "start": 14,
              "end": 30,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 21,
                  "end": 24,
                  "value": 123,
                  "raw": "123"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 14,
                  "end": 20,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 25,
                  "end": 30,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  },
                  "tail": true
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 10,
              "end": 13
            }
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

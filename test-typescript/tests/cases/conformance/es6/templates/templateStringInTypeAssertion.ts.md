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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
                  "raw": "123",
                  "value": 123
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 14,
                  "end": 20,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 25,
                  "end": 30,
                  "tail": true,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 10,
              "end": 13
            }
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

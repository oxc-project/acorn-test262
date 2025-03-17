__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 47,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 25,
            "end": 46,
            "expression": {
              "type": "TemplateLiteral",
              "start": 30,
              "end": 46,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 37,
                  "end": 40,
                  "raw": "123",
                  "value": 123
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 30,
                  "end": 36,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 41,
                  "end": 46,
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
              "start": 26,
              "end": 29
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

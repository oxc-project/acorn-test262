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
                  "value": 123,
                  "raw": "123"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 30,
                  "end": 36,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 41,
                  "end": 46,
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
              "start": 26,
              "end": 29
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

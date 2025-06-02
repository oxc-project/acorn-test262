__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 63,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 63,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 62,
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
            "type": "ConditionalExpression",
            "start": 8,
            "end": 62,
            "test": {
              "type": "TemplateLiteral",
              "start": 8,
              "end": 24,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 8,
                  "end": 14,
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 19,
                  "end": 24,
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
                  "start": 15,
                  "end": 18,
                  "value": " ",
                  "raw": "\" \""
                }
              ]
            },
            "consequent": {
              "type": "TemplateLiteral",
              "start": 27,
              "end": 43,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 27,
                  "end": 33,
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 38,
                  "end": 43,
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
                  "start": 34,
                  "end": 37,
                  "value": " ",
                  "raw": "\" \""
                }
              ]
            },
            "alternate": {
              "type": "TemplateLiteral",
              "start": 46,
              "end": 62,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 46,
                  "end": 52,
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 57,
                  "end": 62,
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
                  "start": 53,
                  "end": 56,
                  "value": " ",
                  "raw": "\" \""
                }
              ]
            }
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

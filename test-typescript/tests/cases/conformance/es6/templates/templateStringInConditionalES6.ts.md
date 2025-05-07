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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 62,
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
            "type": "ConditionalExpression",
            "start": 8,
            "end": 62,
            "alternate": {
              "type": "TemplateLiteral",
              "start": 46,
              "end": 62,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 53,
                  "end": 56,
                  "raw": "\" \"",
                  "value": " ",
                  "regex": null,
                  "bigint": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 46,
                  "end": 52,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 57,
                  "end": 62,
                  "tail": true,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  }
                }
              ]
            },
            "consequent": {
              "type": "TemplateLiteral",
              "start": 27,
              "end": 43,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 34,
                  "end": 37,
                  "raw": "\" \"",
                  "value": " ",
                  "regex": null,
                  "bigint": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 27,
                  "end": 33,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 38,
                  "end": 43,
                  "tail": true,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  }
                }
              ]
            },
            "test": {
              "type": "TemplateLiteral",
              "start": 8,
              "end": 24,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 15,
                  "end": 18,
                  "raw": "\" \"",
                  "value": " ",
                  "regex": null,
                  "bigint": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 8,
                  "end": 14,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 19,
                  "end": 24,
                  "tail": true,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  }
                }
              ]
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

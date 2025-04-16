__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 64,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 63,
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
            "type": "ConditionalExpression",
            "start": 9,
            "end": 63,
            "test": {
              "type": "TemplateLiteral",
              "start": 9,
              "end": 25,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 16,
                  "end": 19,
                  "value": " ",
                  "raw": "\" \""
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
                  "start": 20,
                  "end": 25,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  },
                  "tail": true
                }
              ]
            },
            "consequent": {
              "type": "TemplateLiteral",
              "start": 28,
              "end": 44,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 35,
                  "end": 38,
                  "value": " ",
                  "raw": "\" \""
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 28,
                  "end": 34,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 39,
                  "end": 44,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  },
                  "tail": true
                }
              ]
            },
            "alternate": {
              "type": "TemplateLiteral",
              "start": 47,
              "end": 63,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 54,
                  "end": 57,
                  "value": " ",
                  "raw": "\" \""
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 47,
                  "end": 53,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 58,
                  "end": 63,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  },
                  "tail": true
                }
              ]
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

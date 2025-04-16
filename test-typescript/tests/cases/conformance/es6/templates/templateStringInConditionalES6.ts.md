__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 80,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 79,
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
            "type": "ConditionalExpression",
            "start": 25,
            "end": 79,
            "test": {
              "type": "TemplateLiteral",
              "start": 25,
              "end": 41,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 32,
                  "end": 35,
                  "value": " ",
                  "raw": "\" \""
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
                  "start": 36,
                  "end": 41,
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
              "start": 44,
              "end": 60,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 51,
                  "end": 54,
                  "value": " ",
                  "raw": "\" \""
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 44,
                  "end": 50,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 55,
                  "end": 60,
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
              "start": 63,
              "end": 79,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 70,
                  "end": 73,
                  "value": " ",
                  "raw": "\" \""
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 63,
                  "end": 69,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 74,
                  "end": 79,
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

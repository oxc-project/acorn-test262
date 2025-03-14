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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 9,
            "end": 63,
            "alternate": {
              "type": "TemplateLiteral",
              "start": 47,
              "end": 63,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 54,
                  "end": 57,
                  "raw": "\" \"",
                  "value": " "
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 47,
                  "end": 53,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 58,
                  "end": 63,
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
              "start": 28,
              "end": 44,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 35,
                  "end": 38,
                  "raw": "\" \"",
                  "value": " "
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 28,
                  "end": 34,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 39,
                  "end": 44,
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
              "start": 9,
              "end": 25,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 16,
                  "end": 19,
                  "raw": "\" \"",
                  "value": " "
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 9,
                  "end": 15,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 20,
                  "end": 25,
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

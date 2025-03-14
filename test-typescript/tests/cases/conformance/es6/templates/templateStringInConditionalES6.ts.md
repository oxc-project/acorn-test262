templateStringInConditionalES6.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 25,
            "end": 79,
            "alternate": {
              "type": "TemplateLiteral",
              "start": 63,
              "end": 79,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 70,
                  "end": 73,
                  "raw": "\" \"",
                  "value": " "
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 63,
                  "end": 69,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 74,
                  "end": 79,
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
              "start": 44,
              "end": 60,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 51,
                  "end": 54,
                  "raw": "\" \"",
                  "value": " "
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 44,
                  "end": 50,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 55,
                  "end": 60,
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
              "start": 25,
              "end": 41,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 32,
                  "end": 35,
                  "raw": "\" \"",
                  "value": " "
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 25,
                  "end": 31,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 36,
                  "end": 41,
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
  "sourceType": "script"
}
```

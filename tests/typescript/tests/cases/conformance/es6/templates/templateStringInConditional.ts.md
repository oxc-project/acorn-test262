__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": false,
                  "start": 8,
                  "end": 14
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "def",
                    "cooked": "def"
                  },
                  "tail": true,
                  "start": 19,
                  "end": 24
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": " ",
                  "raw": "\" \"",
                  "start": 15,
                  "end": 18
                }
              ],
              "start": 8,
              "end": 24
            },
            "consequent": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": false,
                  "start": 27,
                  "end": 33
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "def",
                    "cooked": "def"
                  },
                  "tail": true,
                  "start": 38,
                  "end": 43
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": " ",
                  "raw": "\" \"",
                  "start": 34,
                  "end": 37
                }
              ],
              "start": 27,
              "end": 43
            },
            "alternate": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": false,
                  "start": 46,
                  "end": 52
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "def",
                    "cooked": "def"
                  },
                  "tail": true,
                  "start": 57,
                  "end": 62
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": " ",
                  "raw": "\" \"",
                  "start": 53,
                  "end": 56
                }
              ],
              "start": 46,
              "end": 62
            },
            "start": 8,
            "end": 62
          },
          "definite": false,
          "start": 4,
          "end": 62
        }
      ],
      "declare": false,
      "start": 0,
      "end": 63
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 63
}
```

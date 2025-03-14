allowUnescapedParagraphAndLineSeparatorsInStringLiteral.ts
```json
{
  "type": "Program",
  "start": 126,
  "end": 725,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 190,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 169,
            "decorators": [],
            "name": "stringContainingUnescapedLineSeparator1",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 172,
            "end": 190,
            "raw": "\" STRING_CONTENT \"",
            "value": " STRING_CONTENT "
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 261,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 240,
            "decorators": [],
            "name": "stringContainingUnescapedParagraphSeparator1",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 243,
            "end": 261,
            "raw": "\" STRING_CONTENT \"",
            "value": " STRING_CONTENT "
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 329,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 308,
            "decorators": [],
            "name": "stringContainingUnescapedLineSeparator2",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 311,
            "end": 329,
            "raw": "' STRING_CONTENT '",
            "value": " STRING_CONTENT "
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 331,
      "end": 401,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 400,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 379,
            "decorators": [],
            "name": "stringContainingUnescapedParagraphSeparator2",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 382,
            "end": 400,
            "raw": "' STRING_CONTENT '",
            "value": " STRING_CONTENT "
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 404,
      "end": 469,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 468,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 447,
            "decorators": [],
            "name": "stringContainingUnescapedLineSeparator3",
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 450,
            "end": 468,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 450,
                "end": 468,
                "tail": true,
                "value": {
                  "cooked": " STRING_CONTENT ",
                  "raw": " STRING_CONTENT "
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 470,
      "end": 540,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 474,
          "end": 539,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 474,
            "end": 518,
            "decorators": [],
            "name": "stringContainingUnescapedParagraphSeparator3",
            "optional": false
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 521,
            "end": 539,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 521,
                "end": 539,
                "tail": true,
                "value": {
                  "cooked": " STRING_CONTENT ",
                  "raw": " STRING_CONTENT "
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 593,
      "end": 725,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 597,
          "end": 724,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 597,
            "end": 600,
            "decorators": [],
            "name": "arr",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 603,
            "end": 724,
            "elements": [
              {
                "type": "Literal",
                "start": 609,
                "end": 629,
                "raw": "\"  STRING_CONTENT  \"",
                "value": "  STRING_CONTENT  "
              },
              {
                "type": "Literal",
                "start": 635,
                "end": 657,
                "raw": "\"   STRING_CONTENT   \"",
                "value": "   STRING_CONTENT   "
              },
              {
                "type": "Literal",
                "start": 663,
                "end": 680,
                "raw": "\"STRING_CONTENT \"",
                "value": "STRING_CONTENT "
              },
              {
                "type": "Literal",
                "start": 686,
                "end": 703,
                "raw": "\" STRING_CONTENT\"",
                "value": " STRING_CONTENT"
              },
              {
                "type": "TemplateLiteral",
                "start": 709,
                "end": 713,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 709,
                    "end": 713,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": "\\ "
                    }
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 719,
                "end": 722,
                "raw": "' '",
                "value": " "
              }
            ]
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

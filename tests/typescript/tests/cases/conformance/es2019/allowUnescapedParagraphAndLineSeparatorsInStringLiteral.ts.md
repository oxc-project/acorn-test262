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
            "name": "stringContainingUnescapedLineSeparator1",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 169
          },
          "init": {
            "type": "Literal",
            "value": " STRING_CONTENT ",
            "raw": "\" STRING_CONTENT \"",
            "start": 172,
            "end": 190
          },
          "definite": false,
          "start": 130,
          "end": 190
        }
      ],
      "declare": false,
      "start": 126,
      "end": 191
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringContainingUnescapedParagraphSeparator1",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 240
          },
          "init": {
            "type": "Literal",
            "value": " STRING_CONTENT ",
            "raw": "\" STRING_CONTENT \"",
            "start": 243,
            "end": 261
          },
          "definite": false,
          "start": 196,
          "end": 261
        }
      ],
      "declare": false,
      "start": 192,
      "end": 262
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringContainingUnescapedLineSeparator2",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 308
          },
          "init": {
            "type": "Literal",
            "value": " STRING_CONTENT ",
            "raw": "' STRING_CONTENT '",
            "start": 311,
            "end": 329
          },
          "definite": false,
          "start": 269,
          "end": 329
        }
      ],
      "declare": false,
      "start": 265,
      "end": 330
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringContainingUnescapedParagraphSeparator2",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 379
          },
          "init": {
            "type": "Literal",
            "value": " STRING_CONTENT ",
            "raw": "' STRING_CONTENT '",
            "start": 382,
            "end": 400
          },
          "definite": false,
          "start": 335,
          "end": 400
        }
      ],
      "declare": false,
      "start": 331,
      "end": 401
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringContainingUnescapedLineSeparator3",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 447
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": " STRING_CONTENT ",
                  "cooked": " STRING_CONTENT "
                },
                "tail": true,
                "start": 450,
                "end": 468
              }
            ],
            "expressions": [],
            "start": 450,
            "end": 468
          },
          "definite": false,
          "start": 408,
          "end": 468
        }
      ],
      "declare": false,
      "start": 404,
      "end": 469
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringContainingUnescapedParagraphSeparator3",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 518
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": " STRING_CONTENT ",
                  "cooked": " STRING_CONTENT "
                },
                "tail": true,
                "start": 521,
                "end": 539
              }
            ],
            "expressions": [],
            "start": 521,
            "end": 539
          },
          "definite": false,
          "start": 474,
          "end": 539
        }
      ],
      "declare": false,
      "start": 470,
      "end": 540
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 597,
            "end": 600
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "  STRING_CONTENT  ",
                "raw": "\"  STRING_CONTENT  \"",
                "start": 609,
                "end": 629
              },
              {
                "type": "Literal",
                "value": "   STRING_CONTENT   ",
                "raw": "\"   STRING_CONTENT   \"",
                "start": 635,
                "end": 657
              },
              {
                "type": "Literal",
                "value": "STRING_CONTENT ",
                "raw": "\"STRING_CONTENT \"",
                "start": 663,
                "end": 680
              },
              {
                "type": "Literal",
                "value": " STRING_CONTENT",
                "raw": "\" STRING_CONTENT\"",
                "start": 686,
                "end": 703
              },
              {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "\\ ",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 709,
                    "end": 713
                  }
                ],
                "expressions": [],
                "start": 709,
                "end": 713
              },
              {
                "type": "Literal",
                "value": " ",
                "raw": "' '",
                "start": 719,
                "end": 722
              }
            ],
            "start": 603,
            "end": 724
          },
          "definite": false,
          "start": 597,
          "end": 724
        }
      ],
      "declare": false,
      "start": 593,
      "end": 725
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 126,
  "end": 725
}
```

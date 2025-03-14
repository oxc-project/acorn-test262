__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 94,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 42,
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 42,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 33,
                "end": 42,
                "literal": {
                  "type": "Literal",
                  "start": 33,
                  "end": 42,
                  "raw": "\"AB\\r\\nC\"",
                  "value": "AB\r\nC"
                }
              }
            }
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 45,
            "end": 51,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 45,
                "end": 51,
                "tail": true,
                "value": {
                  "cooked": "AB\nC",
                  "raw": "AB\nC"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 78,
            "decorators": [],
            "name": "de_NEWLINE_f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 78,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 71,
                "end": 78,
                "literal": {
                  "type": "Literal",
                  "start": 71,
                  "end": 78,
                  "raw": "\"DE\\nF\"",
                  "value": "DE\nF"
                }
              }
            }
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 81,
            "end": 93,
            "expressions": [
              {
                "type": "Literal",
                "start": 86,
                "end": 90,
                "raw": "\"\\n\"",
                "value": "\n"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 81,
                "end": 86,
                "tail": false,
                "value": {
                  "cooked": "DE",
                  "raw": "DE"
                }
              },
              {
                "type": "TemplateElement",
                "start": 90,
                "end": 93,
                "tail": true,
                "value": {
                  "cooked": "F",
                  "raw": "F"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

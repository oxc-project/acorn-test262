__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 18,
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 18,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 9,
                "end": 18,
                "literal": {
                  "type": "Literal",
                  "start": 9,
                  "end": 18,
                  "raw": "\"AB\\r\\nC\"",
                  "value": "AB\r\nC"
                }
              }
            }
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 21,
            "end": 27,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 21,
                "end": 27,
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
      "start": 29,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 54,
            "decorators": [],
            "name": "de_NEWLINE_f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 54,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 47,
                "end": 54,
                "literal": {
                  "type": "Literal",
                  "start": 47,
                  "end": 54,
                  "raw": "\"DE\\nF\"",
                  "value": "DE\nF"
                }
              }
            }
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 57,
            "end": 69,
            "expressions": [
              {
                "type": "Literal",
                "start": 62,
                "end": 66,
                "raw": "\"\\n\"",
                "value": "\n"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 57,
                "end": 62,
                "tail": false,
                "value": {
                  "cooked": "DE",
                  "raw": "DE"
                }
              },
              {
                "type": "TemplateElement",
                "start": 66,
                "end": 69,
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

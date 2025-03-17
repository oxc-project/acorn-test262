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
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 42,
            "name": "abc",
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
                  "value": "AB\r\nC",
                  "raw": "\"AB\\r\\nC\""
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "value": {
                  "cooked": "AB\nC",
                  "raw": "AB\nC"
                },
                "tail": true
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 78,
            "name": "de_NEWLINE_f",
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
                  "value": "DE\nF",
                  "raw": "\"DE\\nF\""
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "value": "\n",
                "raw": "\"\\n\""
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 81,
                "end": 86,
                "value": {
                  "cooked": "DE",
                  "raw": "DE"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 90,
                "end": 93,
                "value": {
                  "cooked": "F",
                  "raw": "F"
                },
                "tail": true
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

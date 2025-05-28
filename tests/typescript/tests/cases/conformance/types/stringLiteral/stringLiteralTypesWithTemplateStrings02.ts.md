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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 27,
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
                  "value": "AB\r\nC",
                  "raw": "\"AB\\r\\nC\""
                }
              }
            }
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 21,
            "end": 27,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 21,
                "end": 27,
                "value": {
                  "cooked": "AB\nC",
                  "raw": "AB\nC"
                },
                "tail": true
              }
            ],
            "expressions": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 70,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 69,
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
                  "value": "DE\nF",
                  "raw": "\"DE\\nF\""
                }
              }
            }
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 57,
            "end": 69,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 57,
                "end": 62,
                "value": {
                  "cooked": "DE",
                  "raw": "DE"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 66,
                "end": 69,
                "value": {
                  "cooked": "F",
                  "raw": "F"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "start": 62,
                "end": 66,
                "value": "\n",
                "raw": "\"\\n\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

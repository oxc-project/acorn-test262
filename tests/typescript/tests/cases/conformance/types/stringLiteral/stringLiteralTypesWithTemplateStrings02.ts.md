__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "AB\r\nC",
                  "raw": "\"AB\\r\\nC\"",
                  "start": 9,
                  "end": 18
                },
                "start": 9,
                "end": 18
              },
              "start": 7,
              "end": 18
            },
            "start": 4,
            "end": 18
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "AB\nC",
                  "cooked": "AB\nC"
                },
                "tail": true,
                "start": 21,
                "end": 27
              }
            ],
            "expressions": [],
            "start": 21,
            "end": 27
          },
          "definite": false,
          "start": 4,
          "end": 27
        }
      ],
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "de_NEWLINE_f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "DE\nF",
                  "raw": "\"DE\\nF\"",
                  "start": 47,
                  "end": 54
                },
                "start": 47,
                "end": 54
              },
              "start": 45,
              "end": 54
            },
            "start": 33,
            "end": 54
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "DE",
                  "cooked": "DE"
                },
                "tail": false,
                "start": 57,
                "end": 62
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "F",
                  "cooked": "F"
                },
                "tail": true,
                "start": 66,
                "end": 69
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": "\n",
                "raw": "\"\\n\"",
                "start": 62,
                "end": 66
              }
            ],
            "start": 57,
            "end": 69
          },
          "definite": false,
          "start": 33,
          "end": 69
        }
      ],
      "declare": false,
      "start": 29,
      "end": 70
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 70
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 152,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 12,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 7,
                "end": 12,
                "literal": {
                  "type": "Literal",
                  "start": 7,
                  "end": 12,
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 35,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 34,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 34,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 34,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 21,
                "end": 34,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 21,
                    "end": 26,
                    "literal": {
                      "type": "Literal",
                      "start": 21,
                      "end": 26,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 29,
                    "end": 34,
                    "literal": {
                      "type": "Literal",
                      "start": 29,
                      "end": 34,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "SwitchStatement",
      "start": 38,
      "end": 152,
      "discriminant": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 55,
          "end": 81,
          "test": {
            "type": "Literal",
            "start": 60,
            "end": 65,
            "value": "foo",
            "raw": "\"foo\""
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 75,
              "end": 81,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 86,
          "end": 112,
          "test": {
            "type": "Literal",
            "start": 91,
            "end": 96,
            "value": "bar",
            "raw": "\"bar\""
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 106,
              "end": 112,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 117,
          "end": 150,
          "test": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 133,
              "end": 135,
              "expression": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "directive": null
            },
            {
              "type": "BreakStatement",
              "start": 144,
              "end": 150,
              "label": null
            }
          ]
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

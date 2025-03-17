__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 154,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 13,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 13,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 8,
                "end": 13,
                "literal": {
                  "type": "Literal",
                  "start": 8,
                  "end": 13,
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 35,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 35,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 22,
                "end": 35,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 22,
                    "end": 27,
                    "literal": {
                      "type": "Literal",
                      "start": 22,
                      "end": 27,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 30,
                    "end": 35,
                    "literal": {
                      "type": "Literal",
                      "start": 30,
                      "end": 35,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "SwitchStatement",
      "start": 39,
      "end": 153,
      "discriminant": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 56,
          "end": 82,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 76,
              "end": 82,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 61,
            "end": 66,
            "value": "foo",
            "raw": "\"foo\""
          }
        },
        {
          "type": "SwitchCase",
          "start": 87,
          "end": 113,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 107,
              "end": 113,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 92,
            "end": 97,
            "value": "bar",
            "raw": "\"bar\""
          }
        },
        {
          "type": "SwitchCase",
          "start": 118,
          "end": 151,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 134,
              "end": 136,
              "expression": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "directive": null
            },
            {
              "type": "BreakStatement",
              "start": 145,
              "end": 151,
              "label": null
            }
          ],
          "test": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

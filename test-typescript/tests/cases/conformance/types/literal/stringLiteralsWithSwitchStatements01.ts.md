stringLiteralsWithSwitchStatements01.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 35,
            "decorators": [],
            "name": "y",
            "optional": false,
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
                      "raw": "\"foo\"",
                      "value": "foo"
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
                      "raw": "\"bar\"",
                      "value": "bar"
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "SwitchStatement",
      "start": 39,
      "end": 153,
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
            "raw": "\"foo\"",
            "value": "foo"
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
            "raw": "\"bar\"",
            "value": "bar"
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
                "decorators": [],
                "name": "y",
                "optional": false
              }
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
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      ],
      "discriminant": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```

narrowByClauseExpressionInSwitchTrue4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 32,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 32,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 17,
                "end": 32,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 17,
                    "end": 20,
                    "literal": {
                      "type": "Literal",
                      "start": 17,
                      "end": 20,
                      "raw": "'a'",
                      "value": "a"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 23,
                    "end": 26,
                    "literal": {
                      "type": "Literal",
                      "start": 23,
                      "end": 26,
                      "raw": "'b'",
                      "value": "b"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 29,
                    "end": 32,
                    "literal": {
                      "type": "Literal",
                      "start": 29,
                      "end": 32,
                      "raw": "'c'",
                      "value": "c"
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "SwitchStatement",
      "start": 35,
      "end": 113,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 53,
          "end": 68,
          "consequent": [],
          "test": {
            "type": "BinaryExpression",
            "start": 58,
            "end": 67,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 64,
              "end": 67,
              "raw": "\"a\"",
              "value": "a"
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 71,
          "end": 86,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 84,
              "end": 86,
              "expression": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            }
          ],
          "test": null
        },
        {
          "type": "SwitchCase",
          "start": 89,
          "end": 111,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 109,
              "end": 111,
              "expression": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            }
          ],
          "test": {
            "type": "BinaryExpression",
            "start": 94,
            "end": 103,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 100,
              "end": 103,
              "raw": "\"b\"",
              "value": "b"
            }
          }
        }
      ],
      "discriminant": {
        "type": "Literal",
        "start": 43,
        "end": 47,
        "raw": "true",
        "value": true
      }
    }
  ],
  "sourceType": "script"
}
```

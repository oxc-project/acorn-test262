__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 32,
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
                      "value": "a",
                      "raw": "'a'"
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
                      "value": "b",
                      "raw": "'b'"
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
                      "value": "c",
                      "raw": "'c'"
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
      "declare": true
    },
    {
      "type": "SwitchStatement",
      "start": 35,
      "end": 113,
      "discriminant": {
        "type": "Literal",
        "start": 43,
        "end": 47,
        "value": true,
        "raw": "true"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 53,
          "end": 68,
          "test": {
            "type": "BinaryExpression",
            "start": 58,
            "end": 67,
            "left": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 64,
              "end": 67,
              "value": "a",
              "raw": "\"a\""
            }
          },
          "consequent": []
        },
        {
          "type": "SwitchCase",
          "start": 71,
          "end": 86,
          "test": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "directive": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 89,
          "end": 111,
          "test": {
            "type": "BinaryExpression",
            "start": 94,
            "end": 103,
            "left": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 100,
              "end": 103,
              "value": "b",
              "raw": "\"b\""
            }
          },
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
                "optional": false,
                "typeAnnotation": null
              },
              "directive": null
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

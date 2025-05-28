__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 323,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 90,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 89,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 89,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 89,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 74,
                "end": 89,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 74,
                    "end": 77,
                    "literal": {
                      "type": "Literal",
                      "start": 74,
                      "end": 77,
                      "value": "a",
                      "raw": "'a'"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 80,
                    "end": 83,
                    "literal": {
                      "type": "Literal",
                      "start": 80,
                      "end": 83,
                      "value": "b",
                      "raw": "'b'"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 86,
                    "end": 89,
                    "literal": {
                      "type": "Literal",
                      "start": 86,
                      "end": 89,
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
      "start": 92,
      "end": 197,
      "discriminant": {
        "type": "Literal",
        "start": 99,
        "end": 103,
        "value": true,
        "raw": "true"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 111,
          "end": 126,
          "test": {
            "type": "BinaryExpression",
            "start": 116,
            "end": 125,
            "left": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 122,
              "end": 125,
              "value": "a",
              "raw": "'a'"
            }
          },
          "consequent": []
        },
        {
          "type": "SwitchCase",
          "start": 131,
          "end": 171,
          "test": {
            "type": "BinaryExpression",
            "start": 136,
            "end": 145,
            "left": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 142,
              "end": 145,
              "value": "b",
              "raw": "'b'"
            }
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 155,
              "end": 157,
              "expression": {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "directive": null
            },
            {
              "type": "BreakStatement",
              "start": 166,
              "end": 171,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 176,
          "end": 195,
          "test": null,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 193,
              "end": 195,
              "expression": {
                "type": "Identifier",
                "start": 193,
                "end": 194,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 199,
      "end": 201,
      "expression": {
        "type": "Identifier",
        "start": 199,
        "end": 200,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "SwitchStatement",
      "start": 203,
      "end": 319,
      "discriminant": {
        "type": "Literal",
        "start": 210,
        "end": 214,
        "value": true,
        "raw": "true"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 222,
          "end": 248,
          "test": {
            "type": "BinaryExpression",
            "start": 227,
            "end": 236,
            "left": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 233,
              "end": 236,
              "value": "a",
              "raw": "'a'"
            }
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 246,
              "end": 248,
              "expression": {
                "type": "Identifier",
                "start": 246,
                "end": 247,
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
          "start": 253,
          "end": 293,
          "test": {
            "type": "BinaryExpression",
            "start": 258,
            "end": 267,
            "left": {
              "type": "Identifier",
              "start": 258,
              "end": 259,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 264,
              "end": 267,
              "value": "b",
              "raw": "'b'"
            }
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 277,
              "end": 279,
              "expression": {
                "type": "Identifier",
                "start": 277,
                "end": 278,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "directive": null
            },
            {
              "type": "BreakStatement",
              "start": 288,
              "end": 293,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 298,
          "end": 317,
          "test": null,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 315,
              "end": 317,
              "expression": {
                "type": "Identifier",
                "start": 315,
                "end": 316,
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
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 323,
      "expression": {
        "type": "Identifier",
        "start": 321,
        "end": 322,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

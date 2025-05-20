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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 89,
          "definite": false,
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
                      "raw": "'a'",
                      "value": "a"
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
                      "raw": "'b'",
                      "value": "b"
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
      "start": 92,
      "end": 197,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 111,
          "end": 126,
          "consequent": [],
          "test": {
            "type": "BinaryExpression",
            "start": 116,
            "end": 125,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 122,
              "end": 125,
              "raw": "'a'",
              "value": "a"
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 131,
          "end": 171,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 155,
              "end": 157,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "BreakStatement",
              "start": 166,
              "end": 171,
              "label": null
            }
          ],
          "test": {
            "type": "BinaryExpression",
            "start": 136,
            "end": 145,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 142,
              "end": 145,
              "raw": "'b'",
              "value": "b"
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 176,
          "end": 195,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 193,
              "end": 195,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 193,
                "end": 194,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "test": null
        }
      ],
      "discriminant": {
        "type": "Literal",
        "start": 99,
        "end": 103,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 199,
      "end": 201,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 199,
        "end": 200,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "SwitchStatement",
      "start": 203,
      "end": 319,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 222,
          "end": 248,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 246,
              "end": 248,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 246,
                "end": 247,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "test": {
            "type": "BinaryExpression",
            "start": 227,
            "end": 236,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 233,
              "end": 236,
              "raw": "'a'",
              "value": "a"
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 253,
          "end": 293,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 277,
              "end": 279,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 277,
                "end": 278,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "BreakStatement",
              "start": 288,
              "end": 293,
              "label": null
            }
          ],
          "test": {
            "type": "BinaryExpression",
            "start": 258,
            "end": 267,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 258,
              "end": 259,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 264,
              "end": 267,
              "raw": "'b'",
              "value": "b"
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 298,
          "end": 317,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 315,
              "end": 317,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 315,
                "end": 316,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "test": null
        }
      ],
      "discriminant": {
        "type": "Literal",
        "start": 210,
        "end": 214,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 323,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 321,
        "end": 322,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

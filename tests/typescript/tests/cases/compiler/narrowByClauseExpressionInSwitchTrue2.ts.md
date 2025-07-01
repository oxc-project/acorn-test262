__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 74,
                      "end": 77
                    },
                    "start": 74,
                    "end": 77
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 80,
                      "end": 83
                    },
                    "start": 80,
                    "end": 83
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "'c'",
                      "start": 86,
                      "end": 89
                    },
                    "start": 86,
                    "end": 89
                  }
                ],
                "start": 74,
                "end": 89
              },
              "start": 72,
              "end": 89
            },
            "start": 71,
            "end": 89
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 89
        }
      ],
      "declare": true,
      "start": 57,
      "end": 90
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 99,
        "end": 103
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 122,
              "end": 125
            },
            "start": 116,
            "end": 125
          },
          "consequent": [],
          "start": 111,
          "end": 126
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 137
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 142,
              "end": 145
            },
            "start": 136,
            "end": 145
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 156
              },
              "directive": null,
              "start": 155,
              "end": 157
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 166,
              "end": 171
            }
          ],
          "start": 131,
          "end": 171
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 194
              },
              "directive": null,
              "start": 193,
              "end": 195
            }
          ],
          "start": 176,
          "end": 195
        }
      ],
      "start": 92,
      "end": 197
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 200
      },
      "directive": null,
      "start": 199,
      "end": 201
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 210,
        "end": 214
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 228
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 233,
              "end": 236
            },
            "start": 227,
            "end": 236
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 247
              },
              "directive": null,
              "start": 246,
              "end": 248
            }
          ],
          "start": 222,
          "end": 248
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 259
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 264,
              "end": 267
            },
            "start": 258,
            "end": 267
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 278
              },
              "directive": null,
              "start": 277,
              "end": 279
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 288,
              "end": 293
            }
          ],
          "start": 253,
          "end": 293
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 316
              },
              "directive": null,
              "start": 315,
              "end": 317
            }
          ],
          "start": 298,
          "end": 317
        }
      ],
      "start": 203,
      "end": 319
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 322
      },
      "directive": null,
      "start": 321,
      "end": 323
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 323
}
```

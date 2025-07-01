__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 13,
                "end": 20
              },
              "start": 11,
              "end": 20
            },
            "start": 4,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "start": 26,
            "end": 40
          },
          "init": null,
          "definite": false,
          "start": 26,
          "end": 40
        }
      ],
      "declare": false,
      "start": 22,
      "end": 41
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 54,
                "end": 60
              },
              "start": 52,
              "end": 60
            },
            "start": 46,
            "end": 60
          },
          "init": null,
          "definite": false,
          "start": 46,
          "end": 60
        }
      ],
      "declare": false,
      "start": 42,
      "end": 61
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "resultIsBoolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 84,
                "end": 91
              },
              "start": 82,
              "end": 91
            },
            "start": 67,
            "end": 91
          },
          "init": null,
          "definite": false,
          "start": 67,
          "end": 91
        }
      ],
      "declare": false,
      "start": 63,
      "end": 91
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "resultIsNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 112,
                "end": 118
              },
              "start": 110,
              "end": 118
            },
            "start": 96,
            "end": 118
          },
          "init": null,
          "definite": false,
          "start": 96,
          "end": 118
        }
      ],
      "declare": false,
      "start": 92,
      "end": 118
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "resultIsString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 139,
                "end": 145
              },
              "start": 137,
              "end": 145
            },
            "start": 123,
            "end": 145
          },
          "init": null,
          "definite": false,
          "start": 123,
          "end": 145
        }
      ],
      "declare": false,
      "start": 119,
      "end": 145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "resultIsBoolean",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 237
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 248
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 256
            }
          ],
          "start": 241,
          "end": 256
        },
        "start": 222,
        "end": 257
      },
      "directive": null,
      "start": 222,
      "end": 258
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "resultIsBoolean",
          "optional": false,
          "typeAnnotation": null,
          "start": 259,
          "end": 274
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 285
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 293
            }
          ],
          "start": 278,
          "end": 293
        },
        "start": 259,
        "end": 294
      },
      "directive": null,
      "start": 259,
      "end": 295
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "resultIsNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 297,
          "end": 311
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 321
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 330
            }
          ],
          "start": 315,
          "end": 330
        },
        "start": 297,
        "end": 331
      },
      "directive": null,
      "start": 297,
      "end": 332
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "resultIsNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 333,
          "end": 347
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 357
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 365
            }
          ],
          "start": 351,
          "end": 365
        },
        "start": 333,
        "end": 366
      },
      "directive": null,
      "start": 333,
      "end": 367
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "resultIsString",
          "optional": false,
          "typeAnnotation": null,
          "start": 369,
          "end": 383
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 393
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 402
            }
          ],
          "start": 387,
          "end": 402
        },
        "start": 369,
        "end": 403
      },
      "directive": null,
      "start": 369,
      "end": 404
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "resultIsString",
          "optional": false,
          "typeAnnotation": null,
          "start": 405,
          "end": 419
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 429
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 437
            }
          ],
          "start": 423,
          "end": 437
        },
        "start": 405,
        "end": 438
      },
      "directive": null,
      "start": 405,
      "end": 439
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 439
}
```

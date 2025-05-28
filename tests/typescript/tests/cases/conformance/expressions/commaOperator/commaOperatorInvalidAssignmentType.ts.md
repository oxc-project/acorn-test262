__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 439,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 20,
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 20,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 13,
                "end": 20
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
      "start": 22,
      "end": 41,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 40,
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
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
      "start": 42,
      "end": 61,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 60,
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 60,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 54,
                "end": 60
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
      "start": 63,
      "end": 91,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 91,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 91,
            "decorators": [],
            "name": "resultIsBoolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 91,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 84,
                "end": 91
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
      "start": 92,
      "end": 118,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 118,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 118,
            "decorators": [],
            "name": "resultIsNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 118,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 112,
                "end": 118
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
      "start": 119,
      "end": 145,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 145,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 145,
            "decorators": [],
            "name": "resultIsString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 145,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 139,
                "end": 145
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
      "type": "ExpressionStatement",
      "start": 222,
      "end": 258,
      "expression": {
        "type": "AssignmentExpression",
        "start": 222,
        "end": 257,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 222,
          "end": 237,
          "decorators": [],
          "name": "resultIsBoolean",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 241,
          "end": 256,
          "expressions": [
            {
              "type": "Identifier",
              "start": 241,
              "end": 248,
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 250,
              "end": 256,
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 259,
      "end": 295,
      "expression": {
        "type": "AssignmentExpression",
        "start": 259,
        "end": 294,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 259,
          "end": 274,
          "decorators": [],
          "name": "resultIsBoolean",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 278,
          "end": 293,
          "expressions": [
            {
              "type": "Identifier",
              "start": 278,
              "end": 285,
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 287,
              "end": 293,
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 297,
      "end": 332,
      "expression": {
        "type": "AssignmentExpression",
        "start": 297,
        "end": 331,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 297,
          "end": 311,
          "decorators": [],
          "name": "resultIsNumber",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 315,
          "end": 330,
          "expressions": [
            {
              "type": "Identifier",
              "start": 315,
              "end": 321,
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 323,
              "end": 330,
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 333,
      "end": 367,
      "expression": {
        "type": "AssignmentExpression",
        "start": 333,
        "end": 366,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 333,
          "end": 347,
          "decorators": [],
          "name": "resultIsNumber",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 351,
          "end": 365,
          "expressions": [
            {
              "type": "Identifier",
              "start": 351,
              "end": 357,
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 359,
              "end": 365,
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 369,
      "end": 404,
      "expression": {
        "type": "AssignmentExpression",
        "start": 369,
        "end": 403,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 369,
          "end": 383,
          "decorators": [],
          "name": "resultIsString",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 387,
          "end": 402,
          "expressions": [
            {
              "type": "Identifier",
              "start": 387,
              "end": 393,
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 395,
              "end": 402,
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 405,
      "end": 439,
      "expression": {
        "type": "AssignmentExpression",
        "start": 405,
        "end": 438,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 405,
          "end": 419,
          "decorators": [],
          "name": "resultIsString",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 423,
          "end": 437,
          "expressions": [
            {
              "type": "Identifier",
              "start": 423,
              "end": 429,
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 431,
              "end": 437,
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11,
                      "end": 12
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 15,
                        "end": 21
                      },
                      "start": 13,
                      "end": 21
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 11,
                    "end": 22
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 23,
                      "end": 24
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 27,
                        "end": 33
                      },
                      "start": 25,
                      "end": 33
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 23,
                    "end": 33
                  }
                ],
                "start": 9,
                "end": 35
              },
              "start": 7,
              "end": 35
            },
            "start": 6,
            "end": 35
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 38,
            "end": 41
          },
          "definite": false,
          "start": 6,
          "end": 41
        }
      ],
      "declare": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 51,
                "end": 57
              },
              "start": 49,
              "end": 57
            },
            "start": 48,
            "end": 57
          },
          "init": null,
          "definite": false,
          "start": 48,
          "end": 57
        }
      ],
      "declare": false,
      "start": 44,
      "end": 58
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 88
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 88
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 91,
                  "end": 92
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 92
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 87,
              "end": 92
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 85,
          "end": 94
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 98
        },
        "start": 85,
        "end": 98
      },
      "directive": null,
      "start": 84,
      "end": 100
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 105
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 108
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 111,
                  "end": 112
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 112
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 104,
              "end": 112
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 102,
          "end": 113
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 117
        },
        "start": 102,
        "end": 117
      },
      "directive": null,
      "start": 101,
      "end": 119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 124
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 127
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 130,
                  "end": 131
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 131
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 123,
              "end": 131
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 121,
          "end": 132
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 135,
          "end": 136
        },
        "start": 121,
        "end": 136
      },
      "directive": null,
      "start": 120,
      "end": 138
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 163
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 163
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 175
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 175
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 162,
              "end": 175
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 160,
          "end": 177
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 180,
          "end": 181
        },
        "start": 160,
        "end": 181
      },
      "directive": null,
      "start": 159,
      "end": 183
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 188
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 190,
                  "end": 191
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 203
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 203
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 187,
              "end": 203
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 185,
          "end": 205
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 209
        },
        "start": 185,
        "end": 209
      },
      "directive": null,
      "start": 184,
      "end": 211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 216
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 219
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 231
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 231
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 215,
              "end": 231
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 233
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 236,
          "end": 237
        },
        "start": 213,
        "end": 237
      },
      "directive": null,
      "start": 212,
      "end": 239
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 250
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 254
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 249,
                "end": 254
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 247,
            "end": 256
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 260
          },
          "definite": false,
          "start": 247,
          "end": 260
        }
      ],
      "declare": false,
      "start": 241,
      "end": 261
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 271
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 273,
                    "end": 275
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 278,
                    "end": 279
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 279
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 270,
                "end": 279
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 281
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 285
          },
          "definite": false,
          "start": 268,
          "end": 285
        }
      ],
      "declare": false,
      "start": 262,
      "end": 286
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 295,
                  "end": 296
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 300
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 303,
                    "end": 312
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 312
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 295,
                "end": 312
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 314
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 317,
            "end": 318
          },
          "definite": false,
          "start": 293,
          "end": 318
        }
      ],
      "declare": false,
      "start": 287,
      "end": 319
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 347
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 348,
                      "end": 354
                    }
                  ],
                  "start": 347,
                  "end": 355
                },
                "start": 339,
                "end": 355
              },
              "start": 337,
              "end": 355
            },
            "start": 336,
            "end": 355
          },
          "init": null,
          "definite": false,
          "start": 336,
          "end": 355
        }
      ],
      "declare": true,
      "start": 322,
      "end": 356
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "done",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 367,
                "end": 374
              },
              "start": 365,
              "end": 374
            },
            "start": 361,
            "end": 374
          },
          "init": null,
          "definite": false,
          "start": 361,
          "end": 374
        }
      ],
      "declare": false,
      "start": 357,
      "end": 375
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 385
          },
          "init": null,
          "definite": false,
          "start": 380,
          "end": 385
        }
      ],
      "declare": false,
      "start": 376,
      "end": 386
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "done",
                "optional": false,
                "typeAnnotation": null,
                "start": 391,
                "end": 395
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 391,
                  "end": 395
                },
                "right": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 398,
                  "end": 403
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 391,
                "end": 403
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 391,
              "end": 403
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 405,
                "end": 410
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 405,
                "end": 410
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 405,
              "end": 410
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 389,
          "end": 412
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 416
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 421
            },
            "optional": false,
            "computed": false,
            "start": 415,
            "end": 421
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 415,
          "end": 423
        },
        "start": 389,
        "end": 423
      },
      "directive": null,
      "start": 388,
      "end": 425
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "done",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 433
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 439
                },
                "right": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 442,
                  "end": 447
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 447
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 429,
              "end": 447
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 454
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 454
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 449,
              "end": 454
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 427,
          "end": 456
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 460
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 461,
              "end": 465
            },
            "optional": false,
            "computed": false,
            "start": 459,
            "end": 465
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 459,
          "end": 467
        },
        "start": 427,
        "end": 467
      },
      "directive": null,
      "start": 426,
      "end": 469
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 469
}
```

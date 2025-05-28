__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 469,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 42,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 35,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 9,
                "end": 35,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 11,
                    "end": 22,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11,
                      "end": 12,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 13,
                      "end": 21,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 15,
                        "end": 21
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 23,
                    "end": 33,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 23,
                      "end": 24,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 25,
                      "end": 33,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 27,
                        "end": 33
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 38,
            "end": 41,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 58,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 57,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 57,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 51,
                "end": 57
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
      "start": 84,
      "end": 100,
      "expression": {
        "type": "AssignmentExpression",
        "start": 85,
        "end": 98,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 85,
          "end": 94,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 87,
              "end": 92,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 87,
                "end": 92,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 91,
                  "end": 92,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 119,
      "expression": {
        "type": "AssignmentExpression",
        "start": 102,
        "end": 117,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 102,
          "end": 113,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 104,
              "end": 112,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 107,
                "end": 112,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 111,
                  "end": 112,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 116,
          "end": 117,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 138,
      "expression": {
        "type": "AssignmentExpression",
        "start": 121,
        "end": 136,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 121,
          "end": 132,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 123,
              "end": 131,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 126,
                "end": 131,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 130,
                  "end": 131,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 135,
          "end": 136,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 183,
      "expression": {
        "type": "AssignmentExpression",
        "start": 160,
        "end": 181,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 160,
          "end": 177,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 162,
              "end": 175,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 162,
                "end": 175,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 175,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 180,
          "end": 181,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 184,
      "end": 211,
      "expression": {
        "type": "AssignmentExpression",
        "start": 185,
        "end": 209,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 185,
          "end": 205,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 187,
              "end": 203,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 190,
                "end": 203,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 191,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 203,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 208,
          "end": 209,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 212,
      "end": 239,
      "expression": {
        "type": "AssignmentExpression",
        "start": 213,
        "end": 237,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 213,
          "end": 233,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 215,
              "end": 231,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 215,
                "end": 216,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 218,
                "end": 231,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 219,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 231,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 236,
          "end": 237,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 261,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 247,
          "end": 260,
          "id": {
            "type": "ObjectPattern",
            "start": 247,
            "end": 256,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 249,
                "end": 254,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 254,
                  "decorators": [],
                  "name": "z1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 259,
            "end": 260,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 262,
      "end": 286,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 285,
          "id": {
            "type": "ObjectPattern",
            "start": 268,
            "end": 281,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 270,
                "end": 279,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 271,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 273,
                  "end": 279,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 273,
                    "end": 275,
                    "decorators": [],
                    "name": "z2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 278,
                    "end": 279,
                    "value": 0,
                    "raw": "0"
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 284,
            "end": 285,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 319,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 293,
          "end": 318,
          "id": {
            "type": "ObjectPattern",
            "start": 293,
            "end": 314,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 295,
                "end": 312,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 296,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 298,
                  "end": 312,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 300,
                    "decorators": [],
                    "name": "z3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 312,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 317,
            "end": 318,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 322,
      "end": 356,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 355,
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 355,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 355,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 339,
                "end": 355,
                "typeName": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 347,
                  "decorators": [],
                  "name": "Iterator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 347,
                  "end": 355,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 348,
                      "end": 354
                    }
                  ]
                }
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
      "type": "VariableDeclaration",
      "start": 357,
      "end": 375,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 374,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 374,
            "decorators": [],
            "name": "done",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 365,
              "end": 374,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 367,
                "end": 374
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
      "start": 376,
      "end": 386,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 380,
          "end": 385,
          "id": {
            "type": "Identifier",
            "start": 380,
            "end": 385,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 388,
      "end": 425,
      "expression": {
        "type": "AssignmentExpression",
        "start": 389,
        "end": 423,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 389,
          "end": 412,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 391,
              "end": 403,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 391,
                "end": 395,
                "decorators": [],
                "name": "done",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 391,
                "end": 403,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 395,
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 398,
                  "end": 403,
                  "value": false,
                  "raw": "false"
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 405,
              "end": 410,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 405,
                "end": 410,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 405,
                "end": 410,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 415,
          "end": 423,
          "callee": {
            "type": "MemberExpression",
            "start": 415,
            "end": 421,
            "object": {
              "type": "Identifier",
              "start": 415,
              "end": 416,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 417,
              "end": 421,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 426,
      "end": 469,
      "expression": {
        "type": "AssignmentExpression",
        "start": 427,
        "end": 467,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 427,
          "end": 456,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 429,
              "end": 447,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 429,
                "end": 433,
                "decorators": [],
                "name": "done",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 435,
                "end": 447,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 439,
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 442,
                  "end": 447,
                  "value": false,
                  "raw": "false"
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 449,
              "end": 454,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 449,
                "end": 454,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 449,
                "end": 454,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 459,
          "end": 467,
          "callee": {
            "type": "MemberExpression",
            "start": 459,
            "end": 465,
            "object": {
              "type": "Identifier",
              "start": 459,
              "end": 460,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 461,
              "end": 465,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

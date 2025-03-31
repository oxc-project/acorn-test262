__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 501,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 1,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 16,
              "end": 22
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 49,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 34,
            "end": 47,
            "argument": {
              "type": "Literal",
              "start": 41,
              "end": 46,
              "value": "foo",
              "raw": "\"foo\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 23,
        "end": 31,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 25,
          "end": 31
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 51,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 62,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 63,
          "end": 72,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 64,
            "end": 72,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 66,
              "end": 72
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 96,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 84,
            "end": 94,
            "argument": {
              "type": "Literal",
              "start": 91,
              "end": 93,
              "value": 10,
              "raw": "10"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 73,
        "end": 81,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 75,
          "end": 81
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 98,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 109,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 110,
          "end": 119,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 119,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 113,
              "end": 119
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 130,
        "end": 146,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 132,
            "end": 144,
            "argument": {
              "type": "Literal",
              "start": 139,
              "end": 143,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 120,
        "end": 129,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 122,
          "end": 129
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 148,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 155,
        "name": "E1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 158,
          "end": 161,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 161,
            "name": "one",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 156,
        "end": 163,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 158,
            "end": 161,
            "id": {
              "type": "Identifier",
              "start": 158,
              "end": 161,
              "name": "one",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 165,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 172,
        "name": "E2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 175,
          "end": 178,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 178,
            "name": "two",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 173,
        "end": 180,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 175,
            "end": 178,
            "id": {
              "type": "Identifier",
              "start": 175,
              "end": 178,
              "name": "two",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 183,
      "end": 238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 187,
          "end": 237,
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 237,
            "name": "t1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 237,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 191,
                "end": 237,
                "elementTypes": [
                  {
                    "type": "TSFunctionType",
                    "start": 192,
                    "end": 213,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 193,
                        "end": 202,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 194,
                          "end": 202,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 196,
                            "end": 202
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 204,
                      "end": 213,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 207,
                        "end": 213
                      }
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 215,
                    "end": 236,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 216,
                        "end": 225,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 217,
                          "end": 225,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 219,
                            "end": 225
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 227,
                      "end": 236,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 230,
                        "end": 236
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 239,
      "end": 256,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 255,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 255,
            "name": "t2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 245,
              "end": 255,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 247,
                "end": 255,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 248,
                    "end": 250,
                    "typeName": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 250,
                      "name": "E1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 252,
                    "end": 254,
                    "typeName": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 254,
                      "name": "E2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 257,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 261,
          "end": 278,
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 278,
            "name": "t3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 263,
              "end": 278,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 265,
                "end": 278,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 266,
                    "end": 272
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 274,
                    "end": 277
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 280,
      "end": 305,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 304,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 304,
            "name": "t4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 286,
              "end": 304,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 288,
                "end": 304,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 289,
                    "end": 291,
                    "typeName": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 291,
                      "name": "E1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 293,
                    "end": 295,
                    "typeName": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 295,
                      "name": "E2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 297,
                    "end": 303
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 319,
      "end": 333,
      "expression": {
        "type": "AssignmentExpression",
        "start": 319,
        "end": 332,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 319,
          "end": 321,
          "name": "t1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 324,
          "end": 332,
          "elements": [
            {
              "type": "Identifier",
              "start": 325,
              "end": 327,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 329,
              "end": 331,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 334,
      "end": 356,
      "expression": {
        "type": "AssignmentExpression",
        "start": 334,
        "end": 355,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 334,
          "end": 336,
          "name": "t2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 339,
          "end": 355,
          "elements": [
            {
              "type": "MemberExpression",
              "start": 340,
              "end": 346,
              "object": {
                "type": "Identifier",
                "start": 340,
                "end": 342,
                "name": "E1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 343,
                "end": 346,
                "name": "one",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            {
              "type": "MemberExpression",
              "start": 348,
              "end": 354,
              "object": {
                "type": "Identifier",
                "start": 348,
                "end": 350,
                "name": "E2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 351,
                "end": 354,
                "name": "two",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 357,
      "end": 377,
      "expression": {
        "type": "AssignmentExpression",
        "start": 357,
        "end": 376,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 357,
          "end": 359,
          "name": "t3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 362,
          "end": 376,
          "elements": [
            {
              "type": "Literal",
              "start": 363,
              "end": 364,
              "value": 5,
              "raw": "5"
            },
            {
              "type": "Identifier",
              "start": 366,
              "end": 375,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 378,
      "end": 404,
      "expression": {
        "type": "AssignmentExpression",
        "start": 378,
        "end": 403,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 378,
          "end": 380,
          "name": "t4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 383,
          "end": 403,
          "elements": [
            {
              "type": "MemberExpression",
              "start": 384,
              "end": 390,
              "object": {
                "type": "Identifier",
                "start": 384,
                "end": 386,
                "name": "E1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 387,
                "end": 390,
                "name": "one",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            {
              "type": "MemberExpression",
              "start": 392,
              "end": 398,
              "object": {
                "type": "Identifier",
                "start": 392,
                "end": 394,
                "name": "E2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 395,
                "end": 398,
                "name": "two",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            {
              "type": "Literal",
              "start": 400,
              "end": 402,
              "value": 20,
              "raw": "20"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 405,
      "end": 420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 409,
          "end": 419,
          "id": {
            "type": "Identifier",
            "start": 409,
            "end": 411,
            "name": "e1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 414,
            "end": 419,
            "object": {
              "type": "Identifier",
              "start": 414,
              "end": 416,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 417,
              "end": 418,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 428,
      "end": 443,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 432,
          "end": 442,
          "id": {
            "type": "Identifier",
            "start": 432,
            "end": 434,
            "name": "e2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 437,
            "end": 442,
            "object": {
              "type": "Identifier",
              "start": 437,
              "end": 439,
              "name": "t2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 440,
              "end": 441,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 451,
      "end": 466,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 455,
          "end": 465,
          "id": {
            "type": "Identifier",
            "start": 455,
            "end": 457,
            "name": "e3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 460,
            "end": 465,
            "object": {
              "type": "Identifier",
              "start": 460,
              "end": 462,
              "name": "t3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 463,
              "end": 464,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 475,
      "end": 490,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 479,
          "end": 489,
          "id": {
            "type": "Identifier",
            "start": 479,
            "end": 481,
            "name": "e4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 484,
            "end": 489,
            "object": {
              "type": "Identifier",
              "start": 484,
              "end": 486,
              "name": "t4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 487,
              "end": 488,
              "value": 3,
              "raw": "3"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

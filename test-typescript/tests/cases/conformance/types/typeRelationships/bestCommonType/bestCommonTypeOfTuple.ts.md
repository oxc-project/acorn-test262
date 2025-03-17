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
      "async": false,
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
              "raw": "\"foo\"",
              "value": "foo"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 16,
              "end": 22
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 23,
        "end": 31,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 25,
          "end": 31
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 51,
      "end": 96,
      "async": false,
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
              "raw": "10",
              "value": 10
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 62,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 63,
          "end": 72,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 64,
            "end": 72,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 66,
              "end": 72
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 73,
        "end": 81,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 75,
          "end": 81
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 98,
      "end": 146,
      "async": false,
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
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 109,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 110,
          "end": 119,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 119,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 113,
              "end": 119
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 120,
        "end": 129,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 122,
          "end": 129
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 148,
      "end": 163,
      "body": {
        "type": "TSEnumBody",
        "start": 156,
        "end": 163,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 158,
            "end": 161,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 158,
              "end": 161,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 155,
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 165,
      "end": 180,
      "body": {
        "type": "TSEnumBody",
        "start": 173,
        "end": 180,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 175,
            "end": 178,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 175,
              "end": 178,
              "decorators": [],
              "name": "two",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 172,
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 237,
            "decorators": [],
            "name": "t1",
            "optional": false,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 193,
                        "end": 202,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 194,
                          "end": 202,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 196,
                            "end": 202
                          }
                        }
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
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 215,
                    "end": 236,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 216,
                        "end": 225,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 217,
                          "end": 225,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 219,
                            "end": 225
                          }
                        }
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
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 255,
            "decorators": [],
            "name": "t2",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 250,
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 252,
                    "end": 254,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 254,
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 278,
            "decorators": [],
            "name": "t3",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 304,
            "decorators": [],
            "name": "t4",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 291,
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 293,
                    "end": 295,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 295,
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 297,
                    "end": 303
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 319,
      "end": 333,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 319,
        "end": 332,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 319,
          "end": 321,
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 329,
              "end": 331,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 334,
      "end": 356,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 334,
        "end": 355,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 334,
          "end": 336,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null
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
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 340,
                "end": 342,
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 343,
                "end": 346,
                "decorators": [],
                "name": "one",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "MemberExpression",
              "start": 348,
              "end": 354,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 348,
                "end": 350,
                "decorators": [],
                "name": "E2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 351,
                "end": 354,
                "decorators": [],
                "name": "two",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 357,
      "end": 377,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 357,
        "end": 376,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 357,
          "end": 359,
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": null
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
              "raw": "5",
              "value": 5
            },
            {
              "type": "Identifier",
              "start": 366,
              "end": 375,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 378,
      "end": 404,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 378,
        "end": 403,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 378,
          "end": 380,
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null
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
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 384,
                "end": 386,
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 387,
                "end": 390,
                "decorators": [],
                "name": "one",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "MemberExpression",
              "start": 392,
              "end": 398,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 392,
                "end": 394,
                "decorators": [],
                "name": "E2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 395,
                "end": 398,
                "decorators": [],
                "name": "two",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Literal",
              "start": 400,
              "end": 402,
              "raw": "20",
              "value": 20
            }
          ]
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 409,
            "end": 411,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 414,
            "end": 419,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 414,
              "end": 416,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 417,
              "end": 418,
              "raw": "2",
              "value": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 432,
            "end": 434,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 437,
            "end": 442,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 437,
              "end": 439,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 440,
              "end": 441,
              "raw": "2",
              "value": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 455,
            "end": 457,
            "decorators": [],
            "name": "e3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 460,
            "end": 465,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 460,
              "end": 462,
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 463,
              "end": 464,
              "raw": "2",
              "value": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 479,
            "end": 481,
            "decorators": [],
            "name": "e4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 484,
            "end": 489,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 484,
              "end": 486,
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 487,
              "end": 488,
              "raw": "3",
              "value": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

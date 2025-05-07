__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 500,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 48,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 48,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 33,
            "end": 46,
            "argument": {
              "type": "Literal",
              "start": 40,
              "end": 45,
              "raw": "\"foo\"",
              "value": "foo",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 12,
          "end": 21,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 13,
            "end": 21,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 15,
              "end": 21
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 30,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 24,
          "end": 30
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 95,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 95,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 83,
            "end": 93,
            "argument": {
              "type": "Literal",
              "start": 90,
              "end": 92,
              "raw": "10",
              "value": 10,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 61,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 62,
          "end": 71,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 71,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 65,
              "end": 71
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 72,
        "end": 80,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 74,
          "end": 80
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 97,
      "end": 145,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 129,
        "end": 145,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 131,
            "end": 143,
            "argument": {
              "type": "Literal",
              "start": 138,
              "end": 142,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 108,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 109,
          "end": 118,
          "decorators": [],
          "name": "x",
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
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 119,
        "end": 128,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 121,
          "end": 128
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 147,
      "end": 162,
      "body": {
        "type": "TSEnumBody",
        "start": 155,
        "end": 162,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 157,
            "end": 160,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 157,
              "end": 160,
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
        "start": 152,
        "end": 154,
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 164,
      "end": 179,
      "body": {
        "type": "TSEnumBody",
        "start": 172,
        "end": 179,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 174,
            "end": 177,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 174,
              "end": 177,
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
        "start": 169,
        "end": 171,
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 182,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 236,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 236,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 236,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 190,
                "end": 236,
                "elementTypes": [
                  {
                    "type": "TSFunctionType",
                    "start": 191,
                    "end": 212,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 192,
                        "end": 201,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 193,
                          "end": 201,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 195,
                            "end": 201
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 203,
                      "end": 212,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 206,
                        "end": 212
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 214,
                    "end": 235,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 215,
                        "end": 224,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 216,
                          "end": 224,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 218,
                            "end": 224
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 226,
                      "end": 235,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 229,
                        "end": 235
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
      "start": 238,
      "end": 255,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 254,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 254,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 244,
              "end": 254,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 246,
                "end": 254,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 247,
                    "end": 249,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 249,
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 251,
                    "end": 253,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 251,
                      "end": 253,
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
      "start": 256,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 260,
          "end": 277,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 277,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 262,
              "end": 277,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 264,
                "end": 277,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 265,
                    "end": 271
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 273,
                    "end": 276
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
      "start": 279,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 303,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 303,
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 285,
              "end": 303,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 287,
                "end": 303,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 288,
                    "end": 290,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 288,
                      "end": 290,
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 292,
                    "end": 294,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 294,
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 296,
                    "end": 302
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
      "start": 318,
      "end": 332,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 318,
        "end": 331,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 318,
          "end": 320,
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 323,
          "end": 331,
          "elements": [
            {
              "type": "Identifier",
              "start": 324,
              "end": 326,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 328,
              "end": 330,
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
      "start": 333,
      "end": 355,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 333,
        "end": 354,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 333,
          "end": 335,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 338,
          "end": 354,
          "elements": [
            {
              "type": "MemberExpression",
              "start": 339,
              "end": 345,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 339,
                "end": 341,
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 342,
                "end": 345,
                "decorators": [],
                "name": "one",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "MemberExpression",
              "start": 347,
              "end": 353,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 347,
                "end": 349,
                "decorators": [],
                "name": "E2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 350,
                "end": 353,
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
      "start": 356,
      "end": 376,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 356,
        "end": 375,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 356,
          "end": 358,
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 361,
          "end": 375,
          "elements": [
            {
              "type": "Literal",
              "start": 362,
              "end": 363,
              "raw": "5",
              "value": 5,
              "regex": null,
              "bigint": null
            },
            {
              "type": "Identifier",
              "start": 365,
              "end": 374,
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
      "start": 377,
      "end": 403,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 377,
        "end": 402,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 377,
          "end": 379,
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 382,
          "end": 402,
          "elements": [
            {
              "type": "MemberExpression",
              "start": 383,
              "end": 389,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 383,
                "end": 385,
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 386,
                "end": 389,
                "decorators": [],
                "name": "one",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "MemberExpression",
              "start": 391,
              "end": 397,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 391,
                "end": 393,
                "decorators": [],
                "name": "E2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 394,
                "end": 397,
                "decorators": [],
                "name": "two",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Literal",
              "start": 399,
              "end": 401,
              "raw": "20",
              "value": 20,
              "regex": null,
              "bigint": null
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 404,
      "end": 419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 418,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 410,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 413,
            "end": 418,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 413,
              "end": 415,
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 416,
              "end": 417,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 427,
      "end": 442,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 441,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 433,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 436,
            "end": 441,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 436,
              "end": 438,
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 439,
              "end": 440,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 450,
      "end": 465,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 464,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 456,
            "decorators": [],
            "name": "e3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 459,
            "end": 464,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 459,
              "end": 461,
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 462,
              "end": 463,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 474,
      "end": 489,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 478,
          "end": 488,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 478,
            "end": 480,
            "decorators": [],
            "name": "e4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 483,
            "end": 488,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 483,
              "end": 485,
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 486,
              "end": 487,
              "raw": "3",
              "value": 3,
              "regex": null,
              "bigint": null
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

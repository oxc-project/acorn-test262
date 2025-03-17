__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 818,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "name": "Comparer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 58,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 28,
            "end": 56,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 37,
              "name": "compareTo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 37,
              "end": 40,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 38,
                  "end": 39,
                  "name": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 41,
                "end": 45,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 42,
                  "end": 45,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 44,
                    "end": 45,
                    "typeName": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 45,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 47,
                "end": 51,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 48,
                  "end": 51,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 50,
                    "end": 51,
                    "typeName": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 51,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 55,
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 80,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 80,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 80,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 75,
                  "name": "Comparer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 75,
                  "end": 80,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 76,
                      "end": 79
                    }
                  ]
                }
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
      "start": 82,
      "end": 125,
      "expression": {
        "type": "AssignmentExpression",
        "start": 82,
        "end": 124,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 82,
          "end": 83,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 86,
          "end": 124,
          "properties": [
            {
              "type": "Property",
              "start": 88,
              "end": 122,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 88,
                "end": 97,
                "name": "compareTo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 99,
                "end": 122,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 103,
                    "end": 104,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 109,
                  "end": 122,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 111,
                      "end": 120,
                      "argument": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 119,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 134,
            "end": 152,
            "callee": {
              "type": "MemberExpression",
              "start": 134,
              "end": 145,
              "object": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 136,
                "end": 145,
                "name": "compareTo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 146,
                "end": 147,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 149,
                "end": 151,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 155,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 174,
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
          "start": 178,
          "end": 189,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 180,
            "end": 189,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 182,
              "end": 189,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 185,
                "end": 189,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 188,
                  "end": 189,
                  "typeName": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 189,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 174,
        "end": 177,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 175,
            "end": 176,
            "name": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 190,
        "end": 196,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 192,
          "end": 196
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 213,
      "expression": {
        "type": "CallExpression",
        "start": 198,
        "end": 212,
        "callee": {
          "type": "Identifier",
          "start": 198,
          "end": 200,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 201,
            "end": 211,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Literal",
              "start": 207,
              "end": 211,
              "value": null,
              "raw": "null"
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 215,
      "end": 270,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 234,
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
          "start": 238,
          "end": 262,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 240,
            "end": 262,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 242,
              "end": 262,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 245,
                "end": 262,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 248,
                  "end": 262,
                  "typeName": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 259,
                    "name": "PromiseLike",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 259,
                    "end": 262,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 260,
                        "end": 261,
                        "typeName": {
                          "type": "Identifier",
                          "start": 260,
                          "end": 261,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 234,
        "end": 237,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 235,
            "end": 236,
            "name": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 263,
        "end": 269,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 265,
          "end": 269
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 271,
      "end": 292,
      "expression": {
        "type": "CallExpression",
        "start": 271,
        "end": 291,
        "callee": {
          "type": "Identifier",
          "start": 271,
          "end": 273,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 274,
            "end": 290,
            "id": null,
            "expression": true,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "Literal",
              "start": 286,
              "end": 290,
              "value": null,
              "raw": "null"
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 294,
      "end": 347,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 313,
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
          "start": 317,
          "end": 339,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 319,
            "end": 339,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 321,
              "end": 339,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 324,
                "end": 339,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 327,
                  "end": 339,
                  "typeName": {
                    "type": "Identifier",
                    "start": 327,
                    "end": 336,
                    "name": "Generator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 336,
                    "end": 339,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 337,
                        "end": 338,
                        "typeName": {
                          "type": "Identifier",
                          "start": 337,
                          "end": 338,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 313,
        "end": 316,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 314,
            "end": 315,
            "name": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 340,
        "end": 346,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 342,
          "end": 346
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 348,
      "end": 381,
      "expression": {
        "type": "CallExpression",
        "start": 348,
        "end": 380,
        "callee": {
          "type": "Identifier",
          "start": 348,
          "end": 350,
          "name": "f3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 351,
            "end": 379,
            "id": null,
            "expression": false,
            "generator": true,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 364,
              "end": 379,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 366,
                  "end": 377,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 366,
                    "end": 376,
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "start": 372,
                      "end": 376,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 383,
      "end": 445,
      "id": {
        "type": "Identifier",
        "start": 400,
        "end": 402,
        "name": "f4",
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
          "start": 406,
          "end": 437,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 408,
            "end": 437,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 410,
              "end": 437,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 413,
                "end": 437,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 416,
                  "end": 437,
                  "typeName": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 425,
                    "name": "Generator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 425,
                    "end": 437,
                    "params": [
                      {
                        "type": "TSUnknownKeyword",
                        "start": 426,
                        "end": 433
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 435,
                        "end": 436,
                        "typeName": {
                          "type": "Identifier",
                          "start": 435,
                          "end": 436,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 402,
        "end": 405,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 403,
            "end": 404,
            "name": {
              "type": "Identifier",
              "start": 403,
              "end": 404,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 438,
        "end": 444,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 440,
          "end": 444
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 446,
      "end": 480,
      "expression": {
        "type": "CallExpression",
        "start": 446,
        "end": 479,
        "callee": {
          "type": "Identifier",
          "start": 446,
          "end": 448,
          "name": "f4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 449,
            "end": 478,
            "id": null,
            "expression": false,
            "generator": true,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 462,
              "end": 478,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 464,
                  "end": 476,
                  "argument": {
                    "type": "Literal",
                    "start": 471,
                    "end": 475,
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 482,
      "end": 540,
      "id": {
        "type": "Identifier",
        "start": 499,
        "end": 501,
        "name": "f5",
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
          "start": 505,
          "end": 532,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 507,
            "end": 532,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 509,
              "end": 532,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 512,
                "end": 532,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 515,
                  "end": 532,
                  "typeName": {
                    "type": "Identifier",
                    "start": 515,
                    "end": 529,
                    "name": "AsyncGenerator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 529,
                    "end": 532,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 530,
                        "end": 531,
                        "typeName": {
                          "type": "Identifier",
                          "start": 530,
                          "end": 531,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 501,
        "end": 504,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 502,
            "end": 503,
            "name": {
              "type": "Identifier",
              "start": 502,
              "end": 503,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 533,
        "end": 539,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 535,
          "end": 539
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 541,
      "end": 580,
      "expression": {
        "type": "CallExpression",
        "start": 541,
        "end": 579,
        "callee": {
          "type": "Identifier",
          "start": 541,
          "end": 543,
          "name": "f5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 544,
            "end": 578,
            "id": null,
            "expression": false,
            "generator": true,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 563,
              "end": 578,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 565,
                  "end": 576,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 565,
                    "end": 575,
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "start": 571,
                      "end": 575,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 582,
      "end": 649,
      "id": {
        "type": "Identifier",
        "start": 599,
        "end": 601,
        "name": "f6",
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
          "start": 605,
          "end": 641,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 607,
            "end": 641,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 609,
              "end": 641,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 612,
                "end": 641,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 615,
                  "end": 641,
                  "typeName": {
                    "type": "Identifier",
                    "start": 615,
                    "end": 629,
                    "name": "AsyncGenerator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 629,
                    "end": 641,
                    "params": [
                      {
                        "type": "TSUnknownKeyword",
                        "start": 630,
                        "end": 637
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 639,
                        "end": 640,
                        "typeName": {
                          "type": "Identifier",
                          "start": 639,
                          "end": 640,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 601,
        "end": 604,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 602,
            "end": 603,
            "name": {
              "type": "Identifier",
              "start": 602,
              "end": 603,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 642,
        "end": 648,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 644,
          "end": 648
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 650,
      "end": 690,
      "expression": {
        "type": "CallExpression",
        "start": 650,
        "end": 689,
        "callee": {
          "type": "Identifier",
          "start": 650,
          "end": 652,
          "name": "f6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 653,
            "end": 688,
            "id": null,
            "expression": false,
            "generator": true,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 672,
              "end": 688,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 674,
                  "end": 686,
                  "argument": {
                    "type": "Literal",
                    "start": 681,
                    "end": 685,
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 748,
      "end": 783,
      "expression": {
        "type": "CallExpression",
        "start": 748,
        "end": 782,
        "callee": {
          "type": "MemberExpression",
          "start": 748,
          "end": 771,
          "object": {
            "type": "CallExpression",
            "start": 748,
            "end": 765,
            "callee": {
              "type": "MemberExpression",
              "start": 748,
              "end": 763,
              "object": {
                "type": "Identifier",
                "start": 748,
                "end": 755,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 756,
                "end": 763,
                "name": "resolve",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 766,
            "end": 771,
            "name": "catch",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 772,
            "end": 781,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 772,
                "end": 773,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 777,
              "end": 781,
              "value": null,
              "raw": "null"
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 784,
      "end": 818,
      "expression": {
        "type": "CallExpression",
        "start": 784,
        "end": 817,
        "callee": {
          "type": "MemberExpression",
          "start": 784,
          "end": 806,
          "object": {
            "type": "CallExpression",
            "start": 784,
            "end": 801,
            "callee": {
              "type": "MemberExpression",
              "start": 784,
              "end": 799,
              "object": {
                "type": "Identifier",
                "start": 784,
                "end": 791,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 792,
                "end": 799,
                "name": "resolve",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 802,
            "end": 806,
            "name": "then",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 807,
            "end": 816,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 807,
                "end": 808,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 812,
              "end": 816,
              "value": null,
              "raw": "null"
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

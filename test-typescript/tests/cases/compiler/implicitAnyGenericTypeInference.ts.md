implicitAnyGenericTypeInference.ts
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 58,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 28,
            "end": 56,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 37,
              "decorators": [],
              "name": "compareTo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 41,
                "end": 45,
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 47,
                "end": 51,
                "decorators": [],
                "name": "y",
                "optional": false,
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
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 37,
              "end": 40,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 38,
                  "end": 39,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "Comparer",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 80,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 80,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 80,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 75,
                  "decorators": [],
                  "name": "Comparer",
                  "optional": false
                }
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
          "decorators": [],
          "name": "c",
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
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 88,
                "end": 97,
                "decorators": [],
                "name": "compareTo",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 99,
                "end": 122,
                "async": false,
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
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 103,
                    "end": 104,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                ]
              }
            }
          ]
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 134,
            "end": 152,
            "arguments": [
              {
                "type": "Literal",
                "start": 146,
                "end": 147,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 149,
                "end": 151,
                "raw": "''",
                "value": ""
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 134,
              "end": 145,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 136,
                "end": 145,
                "decorators": [],
                "name": "compareTo",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 155,
      "end": 197,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 174,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 178,
          "end": 189,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 180,
            "end": 189,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 182,
              "end": 189,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 190,
        "end": 196,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 192,
          "end": 196
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 174,
        "end": 177,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 175,
            "end": 176,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 201,
            "end": 211,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 207,
              "end": 211,
              "raw": "null",
              "value": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 198,
          "end": 200,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 215,
      "end": 270,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 234,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 238,
          "end": 262,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 240,
            "end": 262,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 242,
              "end": 262,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 245,
                "end": 262,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 248,
                  "end": 262,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 259,
                    "decorators": [],
                    "name": "PromiseLike",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 263,
        "end": 269,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 265,
          "end": 269
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 234,
        "end": 237,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 235,
            "end": 236,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 274,
            "end": 290,
            "async": true,
            "body": {
              "type": "Literal",
              "start": 286,
              "end": 290,
              "raw": "null",
              "value": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 271,
          "end": 273,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 294,
      "end": 347,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 313,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 317,
          "end": 339,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 319,
            "end": 339,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 321,
              "end": 339,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 324,
                "end": 339,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 327,
                  "end": 339,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 327,
                    "end": 336,
                    "decorators": [],
                    "name": "Generator",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 340,
        "end": 346,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 342,
          "end": 346
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 313,
        "end": 316,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 314,
            "end": 315,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 351,
            "end": 379,
            "async": false,
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
                    "argument": {
                      "type": "Literal",
                      "start": 372,
                      "end": 376,
                      "raw": "null",
                      "value": null
                    },
                    "delegate": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 348,
          "end": 350,
          "decorators": [],
          "name": "f3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 383,
      "end": 445,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 400,
        "end": 402,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 406,
          "end": 437,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 408,
            "end": 437,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 410,
              "end": 437,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 413,
                "end": 437,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 416,
                  "end": 437,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 425,
                    "decorators": [],
                    "name": "Generator",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 438,
        "end": 444,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 440,
          "end": 444
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 402,
        "end": 405,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 403,
            "end": 404,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 403,
              "end": 404,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 449,
            "end": 478,
            "async": false,
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
                    "raw": "null",
                    "value": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 446,
          "end": 448,
          "decorators": [],
          "name": "f4",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 482,
      "end": 540,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 499,
        "end": 501,
        "decorators": [],
        "name": "f5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 505,
          "end": 532,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 507,
            "end": 532,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 509,
              "end": 532,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 512,
                "end": 532,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 515,
                  "end": 532,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 515,
                    "end": 529,
                    "decorators": [],
                    "name": "AsyncGenerator",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 533,
        "end": 539,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 535,
          "end": 539
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 501,
        "end": 504,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 502,
            "end": 503,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 502,
              "end": 503,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 544,
            "end": 578,
            "async": true,
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
                    "argument": {
                      "type": "Literal",
                      "start": 571,
                      "end": 575,
                      "raw": "null",
                      "value": null
                    },
                    "delegate": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 541,
          "end": 543,
          "decorators": [],
          "name": "f5",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 582,
      "end": 649,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 599,
        "end": 601,
        "decorators": [],
        "name": "f6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 605,
          "end": 641,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 607,
            "end": 641,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 609,
              "end": 641,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 612,
                "end": 641,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 615,
                  "end": 641,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 615,
                    "end": 629,
                    "decorators": [],
                    "name": "AsyncGenerator",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 642,
        "end": 648,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 644,
          "end": 648
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 601,
        "end": 604,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 602,
            "end": 603,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 602,
              "end": 603,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 653,
            "end": 688,
            "async": true,
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
                    "raw": "null",
                    "value": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 650,
          "end": 652,
          "decorators": [],
          "name": "f6",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 748,
      "end": 783,
      "expression": {
        "type": "CallExpression",
        "start": 748,
        "end": 782,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 772,
            "end": 781,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 777,
              "end": 781,
              "raw": "null",
              "value": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 772,
                "end": 773,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 748,
          "end": 771,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 748,
            "end": 765,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 748,
              "end": 763,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 748,
                "end": 755,
                "decorators": [],
                "name": "Promise",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 756,
                "end": 763,
                "decorators": [],
                "name": "resolve",
                "optional": false
              }
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 766,
            "end": 771,
            "decorators": [],
            "name": "catch",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 784,
      "end": 818,
      "expression": {
        "type": "CallExpression",
        "start": 784,
        "end": 817,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 807,
            "end": 816,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 812,
              "end": 816,
              "raw": "null",
              "value": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 807,
                "end": 808,
                "decorators": [],
                "name": "v",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 784,
          "end": 806,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 784,
            "end": 801,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 784,
              "end": 799,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 784,
                "end": 791,
                "decorators": [],
                "name": "Promise",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 792,
                "end": 799,
                "decorators": [],
                "name": "resolve",
                "optional": false
              }
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 802,
            "end": 806,
            "decorators": [],
            "name": "then",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```

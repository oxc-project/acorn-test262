__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4186,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 31,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Box",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 14,
        "end": 31,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 29,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 25,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 28,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 27,
                "end": 28,
                "typeName": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
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
      "type": "TSTypeAliasDeclaration",
      "start": 33,
      "end": 86,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 46,
        "decorators": [],
        "name": "Boxified",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 52,
        "end": 86,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 64,
          "end": 71,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 70,
            "end": 71,
            "typeName": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 59,
          "end": 60,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 74,
          "end": 83,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 77,
            "end": 83,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 78,
                "end": 82,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 80,
                  "end": 81,
                  "typeName": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 81,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 78,
                  "end": 79,
                  "typeName": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 74,
            "end": 77,
            "decorators": [],
            "name": "Box",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 46,
        "end": 49,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 47,
            "end": 48,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
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
      "type": "FunctionDeclaration",
      "start": 88,
      "end": 146,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 118,
        "end": 146,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 124,
            "end": 144,
            "argument": {
              "type": "ObjectExpression",
              "start": 131,
              "end": 143,
              "properties": [
                {
                  "type": "Property",
                  "start": 133,
                  "end": 141,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 138,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 100,
        "decorators": [],
        "name": "box",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 104,
          "end": 108,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 105,
            "end": 108,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 107,
              "end": 108,
              "typeName": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 109,
        "end": 117,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 111,
          "end": 117,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 114,
            "end": 117,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 115,
                "end": 116,
                "typeName": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 111,
            "end": 114,
            "decorators": [],
            "name": "Box",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 100,
        "end": 103,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 101,
            "end": 102,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
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
      "type": "FunctionDeclaration",
      "start": 148,
      "end": 203,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 180,
        "end": 203,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 186,
            "end": 201,
            "argument": {
              "type": "MemberExpression",
              "start": 193,
              "end": 200,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 193,
                "end": 194,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 195,
                "end": 200,
                "decorators": [],
                "name": "value",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 162,
        "decorators": [],
        "name": "unbox",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 166,
          "end": 175,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 167,
            "end": 175,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 169,
              "end": 175,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 172,
                "end": 175,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 173,
                    "end": 174,
                    "typeName": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 174,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 169,
                "end": 172,
                "decorators": [],
                "name": "Box",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 176,
        "end": 179,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 178,
          "end": 179,
          "typeName": {
            "type": "Identifier",
            "start": 178,
            "end": 179,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 162,
        "end": 165,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 163,
            "end": 164,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
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
      "type": "FunctionDeclaration",
      "start": 205,
      "end": 367,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 245,
        "end": 367,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 251,
            "end": 282,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 255,
                "end": 281,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 261,
                  "decorators": [],
                  "name": "result",
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 264,
                  "end": 281,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 264,
                    "end": 266,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 270,
                    "end": 281,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 278,
                      "end": 281,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 279,
                          "end": 280,
                          "typeName": {
                            "type": "Identifier",
                            "start": 279,
                            "end": 280,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 278,
                      "decorators": [],
                      "name": "Boxified",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForInStatement",
            "start": 287,
            "end": 346,
            "body": {
              "type": "BlockStatement",
              "start": 306,
              "end": 346,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 316,
                  "end": 340,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 316,
                    "end": 339,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 316,
                      "end": 325,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 316,
                        "end": 322,
                        "decorators": [],
                        "name": "result",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 323,
                        "end": 324,
                        "decorators": [],
                        "name": "k",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 328,
                      "end": 339,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 332,
                          "end": 338,
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "start": 332,
                            "end": 335,
                            "decorators": [],
                            "name": "obj",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 336,
                            "end": 337,
                            "decorators": [],
                            "name": "k",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 331,
                        "decorators": [],
                        "name": "box",
                        "optional": false
                      },
                      "optional": false
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 292,
              "end": 297,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 296,
                  "end": 297,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 297,
                    "decorators": [],
                    "name": "k",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "right": {
              "type": "Identifier",
              "start": 301,
              "end": 304,
              "decorators": [],
              "name": "obj",
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 351,
            "end": 365,
            "argument": {
              "type": "Identifier",
              "start": 358,
              "end": 364,
              "decorators": [],
              "name": "result",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 220,
        "decorators": [],
        "name": "boxify",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 224,
          "end": 230,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 227,
            "end": 230,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 229,
              "end": 230,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 231,
        "end": 244,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 233,
          "end": 244,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 241,
            "end": 244,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 242,
                "end": 243,
                "typeName": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 243,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 233,
            "end": 241,
            "decorators": [],
            "name": "Boxified",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 220,
        "end": 223,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 221,
            "end": 222,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
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
      "type": "FunctionDeclaration",
      "start": 369,
      "end": 540,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 426,
        "end": 540,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 432,
            "end": 453,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 436,
                "end": 452,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 442,
                  "decorators": [],
                  "name": "result",
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 445,
                  "end": 452,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 445,
                    "end": 447,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 451,
                    "end": 452,
                    "typeName": {
                      "type": "Identifier",
                      "start": 451,
                      "end": 452,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForInStatement",
            "start": 458,
            "end": 519,
            "body": {
              "type": "BlockStatement",
              "start": 477,
              "end": 519,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 487,
                  "end": 513,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 487,
                    "end": 512,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 487,
                      "end": 496,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 487,
                        "end": 493,
                        "decorators": [],
                        "name": "result",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 494,
                        "end": 495,
                        "decorators": [],
                        "name": "k",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 499,
                      "end": 512,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 505,
                          "end": 511,
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "start": 505,
                            "end": 508,
                            "decorators": [],
                            "name": "obj",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 509,
                            "end": 510,
                            "decorators": [],
                            "name": "k",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 499,
                        "end": 504,
                        "decorators": [],
                        "name": "unbox",
                        "optional": false
                      },
                      "optional": false
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 463,
              "end": 468,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 467,
                  "end": 468,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 468,
                    "decorators": [],
                    "name": "k",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "right": {
              "type": "Identifier",
              "start": 472,
              "end": 475,
              "decorators": [],
              "name": "obj",
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 524,
            "end": 538,
            "argument": {
              "type": "Identifier",
              "start": 531,
              "end": 537,
              "decorators": [],
              "name": "result",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 378,
        "end": 386,
        "decorators": [],
        "name": "unboxify",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 405,
          "end": 421,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 408,
            "end": 421,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 410,
              "end": 421,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 418,
                "end": 421,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 419,
                    "end": 420,
                    "typeName": {
                      "type": "Identifier",
                      "start": 419,
                      "end": 420,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 410,
                "end": 418,
                "decorators": [],
                "name": "Boxified",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 422,
        "end": 425,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 424,
          "end": 425,
          "typeName": {
            "type": "Identifier",
            "start": 424,
            "end": 425,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 386,
        "end": 404,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 387,
            "end": 403,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 397,
              "end": 403
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 387,
              "end": 388,
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
      "type": "FunctionDeclaration",
      "start": 542,
      "end": 669,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 598,
        "end": 669,
        "body": [
          {
            "type": "ForInStatement",
            "start": 604,
            "end": 667,
            "body": {
              "type": "BlockStatement",
              "start": 626,
              "end": 667,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 636,
                  "end": 661,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 636,
                    "end": 660,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 636,
                      "end": 648,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 636,
                        "end": 642,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 636,
                          "end": 639,
                          "decorators": [],
                          "name": "obj",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 640,
                          "end": 641,
                          "decorators": [],
                          "name": "k",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 643,
                        "end": 648,
                        "decorators": [],
                        "name": "value",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 651,
                      "end": 660,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 651,
                        "end": 657,
                        "decorators": [],
                        "name": "values",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 658,
                        "end": 659,
                        "decorators": [],
                        "name": "k",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 609,
              "end": 614,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 613,
                  "end": 614,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 613,
                    "end": 614,
                    "decorators": [],
                    "name": "k",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "right": {
              "type": "Identifier",
              "start": 618,
              "end": 624,
              "decorators": [],
              "name": "values",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 551,
        "end": 565,
        "decorators": [],
        "name": "assignBoxified",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 569,
          "end": 585,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 572,
            "end": 585,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 574,
              "end": 585,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 582,
                "end": 585,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 583,
                    "end": 584,
                    "typeName": {
                      "type": "Identifier",
                      "start": 583,
                      "end": 584,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 574,
                "end": 582,
                "decorators": [],
                "name": "Boxified",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 587,
          "end": 596,
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 593,
            "end": 596,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 595,
              "end": 596,
              "typeName": {
                "type": "Identifier",
                "start": 595,
                "end": 596,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 565,
        "end": 568,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 566,
            "end": 567,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 566,
              "end": 567,
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
      "type": "FunctionDeclaration",
      "start": 671,
      "end": 814,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 685,
        "end": 814,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 691,
            "end": 758,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 695,
                "end": 757,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 696,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 699,
                  "end": 757,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 709,
                      "end": 714,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 709,
                        "end": 710,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 712,
                        "end": 714,
                        "raw": "42",
                        "value": 42
                      }
                    },
                    {
                      "type": "Property",
                      "start": 724,
                      "end": 734,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 724,
                        "end": 725,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 727,
                        "end": 734,
                        "raw": "\"hello\"",
                        "value": "hello"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 744,
                      "end": 751,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 744,
                        "end": 745,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 747,
                        "end": 751,
                        "raw": "true",
                        "value": true
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 763,
            "end": 781,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 767,
                "end": 780,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 767,
                  "end": 768,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 771,
                  "end": 780,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 778,
                      "end": 779,
                      "decorators": [],
                      "name": "v",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 771,
                    "end": 777,
                    "decorators": [],
                    "name": "boxify",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 786,
            "end": 812,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 790,
                "end": 811,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 790,
                  "end": 799,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 791,
                    "end": 799,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 793,
                      "end": 799
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 802,
                  "end": 811,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 802,
                    "end": 805,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 802,
                      "end": 803,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 804,
                      "end": 805,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 806,
                    "end": 811,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 680,
        "end": 682,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 816,
      "end": 970,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 830,
        "end": 970,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 836,
            "end": 918,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 840,
                "end": 917,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 840,
                  "end": 841,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 844,
                  "end": 917,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 854,
                      "end": 864,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 854,
                        "end": 855,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "CallExpression",
                        "start": 857,
                        "end": 864,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 861,
                            "end": 863,
                            "raw": "42",
                            "value": 42
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 857,
                          "end": 860,
                          "decorators": [],
                          "name": "box",
                          "optional": false
                        },
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 874,
                      "end": 889,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 874,
                        "end": 875,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "CallExpression",
                        "start": 877,
                        "end": 889,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 881,
                            "end": 888,
                            "raw": "\"hello\"",
                            "value": "hello"
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 877,
                          "end": 880,
                          "decorators": [],
                          "name": "box",
                          "optional": false
                        },
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 899,
                      "end": 911,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 899,
                        "end": 900,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "CallExpression",
                        "start": 902,
                        "end": 911,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 906,
                            "end": 910,
                            "raw": "true",
                            "value": true
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 902,
                          "end": 905,
                          "decorators": [],
                          "name": "box",
                          "optional": false
                        },
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 923,
            "end": 943,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 927,
                "end": 942,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 927,
                  "end": 928,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 931,
                  "end": 942,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 940,
                      "end": 941,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 931,
                    "end": 939,
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 948,
            "end": 968,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 952,
                "end": 967,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 952,
                  "end": 961,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 953,
                    "end": 961,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 955,
                      "end": 961
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 964,
                  "end": 967,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 964,
                    "end": 965,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 966,
                    "end": 967,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 825,
        "end": 827,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 972,
      "end": 1113,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 986,
        "end": 1113,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 992,
            "end": 1074,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 996,
                "end": 1073,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 996,
                  "end": 997,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1000,
                  "end": 1073,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1010,
                      "end": 1020,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1010,
                        "end": 1011,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "CallExpression",
                        "start": 1013,
                        "end": 1020,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1017,
                            "end": 1019,
                            "raw": "42",
                            "value": 42
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1013,
                          "end": 1016,
                          "decorators": [],
                          "name": "box",
                          "optional": false
                        },
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1030,
                      "end": 1045,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1030,
                        "end": 1031,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "CallExpression",
                        "start": 1033,
                        "end": 1045,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1037,
                            "end": 1044,
                            "raw": "\"hello\"",
                            "value": "hello"
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1033,
                          "end": 1036,
                          "decorators": [],
                          "name": "box",
                          "optional": false
                        },
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1055,
                      "end": 1067,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1055,
                        "end": 1056,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "CallExpression",
                        "start": 1058,
                        "end": 1067,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1062,
                            "end": 1066,
                            "raw": "true",
                            "value": true
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1058,
                          "end": 1061,
                          "decorators": [],
                          "name": "box",
                          "optional": false
                        },
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1079,
            "end": 1111,
            "expression": {
              "type": "CallExpression",
              "start": 1079,
              "end": 1110,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1094,
                  "end": 1095,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                {
                  "type": "ObjectExpression",
                  "start": 1097,
                  "end": 1109,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1099,
                      "end": 1107,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1099,
                        "end": 1100,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1102,
                        "end": 1107,
                        "raw": "false",
                        "value": false
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1079,
                "end": 1093,
                "decorators": [],
                "name": "assignBoxified",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 981,
        "end": 983,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1115,
      "end": 1277,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1129,
        "end": 1277,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1135,
            "end": 1217,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1139,
                "end": 1216,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1139,
                  "end": 1140,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1143,
                  "end": 1216,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1153,
                      "end": 1163,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1153,
                        "end": 1154,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "CallExpression",
                        "start": 1156,
                        "end": 1163,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1160,
                            "end": 1162,
                            "raw": "42",
                            "value": 42
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1156,
                          "end": 1159,
                          "decorators": [],
                          "name": "box",
                          "optional": false
                        },
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1173,
                      "end": 1188,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1173,
                        "end": 1174,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "CallExpression",
                        "start": 1176,
                        "end": 1188,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1180,
                            "end": 1187,
                            "raw": "\"hello\"",
                            "value": "hello"
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1176,
                          "end": 1179,
                          "decorators": [],
                          "name": "box",
                          "optional": false
                        },
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1198,
                      "end": 1210,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1198,
                        "end": 1199,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "CallExpression",
                        "start": 1201,
                        "end": 1210,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1205,
                            "end": 1209,
                            "raw": "true",
                            "value": true
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1201,
                          "end": 1204,
                          "decorators": [],
                          "name": "box",
                          "optional": false
                        },
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1222,
            "end": 1246,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1222,
              "end": 1245,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1222,
                "end": 1223,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1226,
                "end": 1245,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 1233,
                    "end": 1244,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1242,
                        "end": 1243,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1233,
                      "end": 1241,
                      "decorators": [],
                      "name": "unboxify",
                      "optional": false
                    },
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1226,
                  "end": 1232,
                  "decorators": [],
                  "name": "boxify",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1251,
            "end": 1275,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1251,
              "end": 1274,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1251,
                "end": 1252,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1255,
                "end": 1274,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 1264,
                    "end": 1273,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1271,
                        "end": 1272,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1264,
                      "end": 1270,
                      "decorators": [],
                      "name": "boxify",
                      "optional": false
                    },
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1255,
                  "end": 1263,
                  "decorators": [],
                  "name": "unboxify",
                  "optional": false
                },
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1124,
        "end": 1126,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1279,
      "end": 1361,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1342,
        "end": 1361,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1348,
            "end": 1359,
            "argument": {
              "type": "Identifier",
              "start": 1355,
              "end": 1358,
              "decorators": [],
              "name": "obj",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1288,
        "end": 1298,
        "decorators": [],
        "name": "makeRecord",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1320,
          "end": 1340,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1323,
            "end": 1340,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1325,
              "end": 1340,
              "constraint": {
                "type": "TSTypeReference",
                "start": 1333,
                "end": 1334,
                "typeName": {
                  "type": "Identifier",
                  "start": 1333,
                  "end": 1334,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              },
              "key": {
                "type": "Identifier",
                "start": 1328,
                "end": 1329,
                "decorators": [],
                "name": "P",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1337,
                "end": 1338,
                "typeName": {
                  "type": "Identifier",
                  "start": 1337,
                  "end": 1338,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1298,
        "end": 1319,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1299,
            "end": 1300,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1299,
              "end": 1300,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1302,
            "end": 1318,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1312,
              "end": 1318
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1302,
              "end": 1303,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1363,
      "end": 1557,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1386,
        "end": 1557,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1392,
            "end": 1486,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1396,
                "end": 1485,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1396,
                  "end": 1397,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1400,
                  "end": 1485,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 1411,
                      "end": 1484,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1421,
                          "end": 1431,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1421,
                            "end": 1422,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "CallExpression",
                            "start": 1424,
                            "end": 1431,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1428,
                                "end": 1430,
                                "raw": "42",
                                "value": 42
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 1424,
                              "end": 1427,
                              "decorators": [],
                              "name": "box",
                              "optional": false
                            },
                            "optional": false
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1441,
                          "end": 1456,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1441,
                            "end": 1442,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "CallExpression",
                            "start": 1444,
                            "end": 1456,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1448,
                                "end": 1455,
                                "raw": "\"hello\"",
                                "value": "hello"
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 1444,
                              "end": 1447,
                              "decorators": [],
                              "name": "box",
                              "optional": false
                            },
                            "optional": false
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1466,
                          "end": 1478,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1466,
                            "end": 1467,
                            "decorators": [],
                            "name": "c",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "CallExpression",
                            "start": 1469,
                            "end": 1478,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1473,
                                "end": 1477,
                                "raw": "true",
                                "value": true
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 1469,
                              "end": 1472,
                              "decorators": [],
                              "name": "box",
                              "optional": false
                            },
                            "optional": false
                          }
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1400,
                    "end": 1410,
                    "decorators": [],
                    "name": "makeRecord",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1491,
            "end": 1511,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1495,
                "end": 1510,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1495,
                  "end": 1496,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1499,
                  "end": 1510,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1508,
                      "end": 1509,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1499,
                    "end": 1507,
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1516,
            "end": 1555,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1520,
                "end": 1554,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1520,
                  "end": 1548,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1521,
                    "end": 1548,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1523,
                      "end": 1548,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1523,
                          "end": 1529
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1532,
                          "end": 1538
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1541,
                          "end": 1548
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1551,
                  "end": 1554,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1551,
                    "end": 1552,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1553,
                    "end": 1554,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1372,
        "end": 1374,
        "decorators": [],
        "name": "f5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1375,
          "end": 1384,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1376,
            "end": 1384,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1378,
              "end": 1384
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1559,
      "end": 1630,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1611,
        "end": 1630,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1617,
            "end": 1628,
            "argument": {
              "type": "Identifier",
              "start": 1624,
              "end": 1627,
              "decorators": [],
              "name": "obj",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1568,
        "end": 1582,
        "decorators": [],
        "name": "makeDictionary",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1586,
          "end": 1609,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1589,
            "end": 1609,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1591,
              "end": 1609,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 1593,
                  "end": 1607,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 1594,
                      "end": 1603,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1595,
                        "end": 1603,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1597,
                          "end": 1603
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1604,
                    "end": 1607,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1606,
                      "end": 1607,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1606,
                        "end": 1607,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1582,
        "end": 1585,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1583,
            "end": 1584,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1583,
              "end": 1584,
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
      "type": "FunctionDeclaration",
      "start": 1632,
      "end": 1831,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1655,
        "end": 1831,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1661,
            "end": 1759,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1665,
                "end": 1758,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1665,
                  "end": 1666,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1669,
                  "end": 1758,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 1684,
                      "end": 1757,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1694,
                          "end": 1704,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1694,
                            "end": 1695,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "CallExpression",
                            "start": 1697,
                            "end": 1704,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1701,
                                "end": 1703,
                                "raw": "42",
                                "value": 42
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 1697,
                              "end": 1700,
                              "decorators": [],
                              "name": "box",
                              "optional": false
                            },
                            "optional": false
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1714,
                          "end": 1729,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1714,
                            "end": 1715,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "CallExpression",
                            "start": 1717,
                            "end": 1729,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1721,
                                "end": 1728,
                                "raw": "\"hello\"",
                                "value": "hello"
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 1717,
                              "end": 1720,
                              "decorators": [],
                              "name": "box",
                              "optional": false
                            },
                            "optional": false
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1739,
                          "end": 1751,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1739,
                            "end": 1740,
                            "decorators": [],
                            "name": "c",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "CallExpression",
                            "start": 1742,
                            "end": 1751,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1746,
                                "end": 1750,
                                "raw": "true",
                                "value": true
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 1742,
                              "end": 1745,
                              "decorators": [],
                              "name": "box",
                              "optional": false
                            },
                            "optional": false
                          }
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1669,
                    "end": 1683,
                    "decorators": [],
                    "name": "makeDictionary",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1764,
            "end": 1784,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1768,
                "end": 1783,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1768,
                  "end": 1769,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1772,
                  "end": 1783,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1781,
                      "end": 1782,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1772,
                    "end": 1780,
                    "decorators": [],
                    "name": "unboxify",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1789,
            "end": 1829,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1793,
                "end": 1828,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1793,
                  "end": 1821,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1794,
                    "end": 1821,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1796,
                      "end": 1821,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1796,
                          "end": 1802
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1805,
                          "end": 1811
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1814,
                          "end": 1821
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1824,
                  "end": 1828,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1824,
                    "end": 1825,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1826,
                    "end": 1827,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1641,
        "end": 1643,
        "decorators": [],
        "name": "f6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1644,
          "end": 1653,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1645,
            "end": 1653,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1647,
              "end": 1653
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1833,
      "end": 1897,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1850,
        "end": 1858,
        "decorators": [],
        "name": "validate",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1862,
          "end": 1892,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1865,
            "end": 1892,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1867,
              "end": 1892,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1875,
                "end": 1882,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1881,
                  "end": 1882,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1881,
                    "end": 1882,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 1870,
                "end": 1871,
                "decorators": [],
                "name": "P",
                "optional": false
              },
              "nameType": null,
              "optional": true,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 1886,
                "end": 1890,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1888,
                  "end": 1889,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1888,
                    "end": 1889,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1886,
                  "end": 1887,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1886,
                    "end": 1887,
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
        "start": 1893,
        "end": 1896,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1895,
          "end": 1896,
          "typeName": {
            "type": "Identifier",
            "start": 1895,
            "end": 1896,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1858,
        "end": 1861,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1859,
            "end": 1860,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1859,
              "end": 1860,
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
      "type": "TSDeclareFunction",
      "start": 1898,
      "end": 1967,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1915,
        "end": 1920,
        "decorators": [],
        "name": "clone",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1924,
          "end": 1962,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1927,
            "end": 1962,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 1929,
              "end": 1962,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1946,
                "end": 1953,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1952,
                  "end": 1953,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1952,
                    "end": 1953,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 1941,
                "end": 1942,
                "decorators": [],
                "name": "P",
                "optional": false
              },
              "nameType": null,
              "readonly": true,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 1956,
                "end": 1960,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1958,
                  "end": 1959,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1958,
                    "end": 1959,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1956,
                  "end": 1957,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1956,
                    "end": 1957,
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
        "start": 1963,
        "end": 1966,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1965,
          "end": 1966,
          "typeName": {
            "type": "Identifier",
            "start": 1965,
            "end": 1966,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1920,
        "end": 1923,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1921,
            "end": 1922,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1921,
              "end": 1922,
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
      "type": "TSDeclareFunction",
      "start": 1968,
      "end": 2049,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1985,
        "end": 2001,
        "decorators": [],
        "name": "validateAndClone",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2005,
          "end": 2044,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2008,
            "end": 2044,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 2010,
              "end": 2044,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 2027,
                "end": 2034,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2033,
                  "end": 2034,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2033,
                    "end": 2034,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 2022,
                "end": 2023,
                "decorators": [],
                "name": "P",
                "optional": false
              },
              "nameType": null,
              "optional": true,
              "readonly": true,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 2038,
                "end": 2042,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2040,
                  "end": 2041,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2040,
                    "end": 2041,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2038,
                  "end": 2039,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2038,
                    "end": 2039,
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
        "start": 2045,
        "end": 2048,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2047,
          "end": 2048,
          "typeName": {
            "type": "Identifier",
            "start": 2047,
            "end": 2048,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2001,
        "end": 2004,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2002,
            "end": 2003,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2002,
              "end": 2003,
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
      "type": "TSTypeAliasDeclaration",
      "start": 2051,
      "end": 2105,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2056,
        "end": 2059,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2062,
        "end": 2105,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2068,
            "end": 2079,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2068,
              "end": 2069,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2070,
              "end": 2078,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2072,
                "end": 2078
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2084,
            "end": 2103,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2093,
              "end": 2094,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2094,
              "end": 2102,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2096,
                "end": 2102
              }
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2107,
      "end": 2316,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2130,
        "end": 2316,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2136,
            "end": 2158,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2140,
                "end": 2157,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2140,
                  "end": 2141,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2144,
                  "end": 2157,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2153,
                      "end": 2156,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 2144,
                    "end": 2152,
                    "decorators": [],
                    "name": "validate",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 2201,
            "end": 2220,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2205,
                "end": 2219,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2205,
                  "end": 2206,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2209,
                  "end": 2219,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2215,
                      "end": 2218,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 2209,
                    "end": 2214,
                    "decorators": [],
                    "name": "clone",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 2255,
            "end": 2285,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2259,
                "end": 2284,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2259,
                  "end": 2260,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2263,
                  "end": 2284,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2280,
                      "end": 2283,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 2263,
                    "end": 2279,
                    "decorators": [],
                    "name": "validateAndClone",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2116,
        "end": 2119,
        "decorators": [],
        "name": "f10",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2120,
          "end": 2128,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2123,
            "end": 2128,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2125,
              "end": 2128,
              "typeName": {
                "type": "Identifier",
                "start": 2125,
                "end": 2128,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2340,
      "end": 2377,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2345,
        "end": 2349,
        "decorators": [],
        "name": "Func",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 2355,
        "end": 2376,
        "params": [
          {
            "type": "RestElement",
            "start": 2356,
            "end": 2370,
            "argument": {
              "type": "Identifier",
              "start": 2359,
              "end": 2363,
              "decorators": [],
              "name": "args",
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2363,
              "end": 2370,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 2365,
                "end": 2370,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 2365,
                  "end": 2368
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 2372,
          "end": 2376,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2375,
            "end": 2376,
            "typeName": {
              "type": "Identifier",
              "start": 2375,
              "end": 2376,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2349,
        "end": 2352,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2350,
            "end": 2351,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2350,
              "end": 2351,
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
      "type": "TSTypeAliasDeclaration",
      "start": 2378,
      "end": 2443,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2383,
        "end": 2387,
        "decorators": [],
        "name": "Spec",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 2393,
        "end": 2442,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 2405,
          "end": 2412,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2411,
            "end": 2412,
            "typeName": {
              "type": "Identifier",
              "start": 2411,
              "end": 2412,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 2400,
          "end": 2401,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 2415,
          "end": 2438,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2415,
              "end": 2425,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2419,
                "end": 2425,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 2420,
                    "end": 2424,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 2422,
                      "end": 2423,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2422,
                        "end": 2423,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 2420,
                      "end": 2421,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2420,
                        "end": 2421,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2415,
                "end": 2419,
                "decorators": [],
                "name": "Func",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2428,
              "end": 2438,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2432,
                "end": 2438,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 2433,
                    "end": 2437,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 2435,
                      "end": 2436,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2435,
                        "end": 2436,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 2433,
                      "end": 2434,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2433,
                        "end": 2434,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2428,
                "end": 2432,
                "decorators": [],
                "name": "Spec",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2387,
        "end": 2390,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2388,
            "end": 2389,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2388,
              "end": 2389,
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
      "type": "TSDeclareFunction",
      "start": 2692,
      "end": 2759,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2709,
        "end": 2718,
        "decorators": [],
        "name": "applySpec",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2722,
          "end": 2734,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2725,
            "end": 2734,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2727,
              "end": 2734,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2731,
                "end": 2734,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2732,
                    "end": 2733,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2732,
                      "end": 2733,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2727,
                "end": 2731,
                "decorators": [],
                "name": "Spec",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2735,
        "end": 2758,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2737,
          "end": 2758,
          "params": [
            {
              "type": "RestElement",
              "start": 2738,
              "end": 2752,
              "argument": {
                "type": "Identifier",
                "start": 2741,
                "end": 2745,
                "decorators": [],
                "name": "args",
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2745,
                "end": 2752,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 2747,
                  "end": 2752,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 2747,
                    "end": 2750
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2754,
            "end": 2758,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2757,
              "end": 2758,
              "typeName": {
                "type": "Identifier",
                "start": 2757,
                "end": 2758,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2718,
        "end": 2721,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2719,
            "end": 2720,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2719,
              "end": 2720,
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
      "start": 2836,
      "end": 2933,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2840,
          "end": 2932,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2840,
            "end": 2842,
            "decorators": [],
            "name": "g1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2845,
            "end": 2932,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 2855,
                "end": 2931,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2861,
                    "end": 2879,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2861,
                      "end": 2864,
                      "decorators": [],
                      "name": "sum",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 2866,
                      "end": 2879,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 2878,
                        "end": 2879,
                        "raw": "3",
                        "value": 3
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2867,
                          "end": 2873,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2868,
                            "end": 2873,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 2870,
                              "end": 2873
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 2885,
                    "end": 2929,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2885,
                      "end": 2891,
                      "decorators": [],
                      "name": "nested",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 2893,
                      "end": 2929,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2903,
                          "end": 2923,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2903,
                            "end": 2906,
                            "decorators": [],
                            "name": "mul",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 2908,
                            "end": 2923,
                            "async": false,
                            "body": {
                              "type": "Literal",
                              "start": 2920,
                              "end": 2923,
                              "raw": "\"n\"",
                              "value": "n"
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2909,
                                "end": 2915,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2910,
                                  "end": 2915,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 2912,
                                    "end": 2915
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2845,
              "end": 2854,
              "decorators": [],
              "name": "applySpec",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3004,
      "end": 3068,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3008,
          "end": 3067,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3008,
            "end": 3010,
            "decorators": [],
            "name": "g2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3013,
            "end": 3067,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3023,
                "end": 3066,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3025,
                    "end": 3064,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3025,
                      "end": 3028,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 3030,
                      "end": 3064,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3032,
                          "end": 3062,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3032,
                            "end": 3035,
                            "decorators": [],
                            "name": "bar",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "start": 3037,
                            "end": 3062,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 3039,
                                "end": 3060,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 3039,
                                  "end": 3042,
                                  "decorators": [],
                                  "name": "baz",
                                  "optional": false
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 3044,
                                  "end": 3060,
                                  "async": false,
                                  "body": {
                                    "type": "Literal",
                                    "start": 3056,
                                    "end": 3060,
                                    "raw": "true",
                                    "value": true
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 3045,
                                      "end": 3051,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 3046,
                                        "end": 3051,
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 3048,
                                          "end": 3051
                                        }
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3013,
              "end": 3022,
              "decorators": [],
              "name": "applySpec",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3092,
      "end": 3150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3098,
          "end": 3149,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3098,
            "end": 3101,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3104,
            "end": 3149,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 3143,
              "end": 3149,
              "decorators": [],
              "name": "object",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3108,
                "end": 3117,
                "decorators": [],
                "name": "object",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3114,
                  "end": 3117,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3116,
                    "end": 3117,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3116,
                      "end": 3117,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 3119,
                "end": 3138,
                "decorators": [],
                "name": "partial",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3126,
                  "end": 3138,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3128,
                    "end": 3138,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3135,
                      "end": 3138,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3136,
                          "end": 3137,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3136,
                            "end": 3137,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3128,
                      "end": 3135,
                      "decorators": [],
                      "name": "Partial",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3104,
              "end": 3107,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3105,
                  "end": 3106,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3105,
                    "end": 3106,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3151,
      "end": 3172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3155,
          "end": 3171,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3155,
            "end": 3156,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 3159,
            "end": 3171,
            "properties": [
              {
                "type": "Property",
                "start": 3160,
                "end": 3164,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3160,
                  "end": 3161,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 3163,
                  "end": 3164,
                  "raw": "5",
                  "value": 5
                }
              },
              {
                "type": "Property",
                "start": 3166,
                "end": 3170,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3166,
                  "end": 3167,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 3169,
                  "end": 3170,
                  "raw": "7",
                  "value": 7
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 3173,
      "end": 3188,
      "expression": {
        "type": "CallExpression",
        "start": 3173,
        "end": 3187,
        "arguments": [
          {
            "type": "Identifier",
            "start": 3177,
            "end": 3178,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          {
            "type": "ObjectExpression",
            "start": 3180,
            "end": 3186,
            "properties": [
              {
                "type": "Property",
                "start": 3181,
                "end": 3185,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3181,
                  "end": 3182,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 3184,
                  "end": 3185,
                  "raw": "9",
                  "value": 9
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3173,
          "end": 3176,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3189,
      "end": 3208,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3189,
        "end": 3207,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3189,
          "end": 3190,
          "decorators": [],
          "name": "o",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 3193,
          "end": 3207,
          "arguments": [
            {
              "type": "Identifier",
              "start": 3197,
              "end": 3198,
              "decorators": [],
              "name": "o",
              "optional": false
            },
            {
              "type": "ObjectExpression",
              "start": 3200,
              "end": 3206,
              "properties": [
                {
                  "type": "Property",
                  "start": 3201,
                  "end": 3205,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3201,
                    "end": 3202,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 3204,
                    "end": 3205,
                    "raw": "9",
                    "value": 9
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 3193,
            "end": 3196,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3336,
      "end": 3399,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3353,
        "end": 3356,
        "decorators": [],
        "name": "f20",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3379,
          "end": 3394,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3382,
            "end": 3394,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3384,
              "end": 3394,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3388,
                "end": 3394,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3389,
                    "end": 3390,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3389,
                      "end": 3390,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3392,
                    "end": 3393,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3392,
                      "end": 3393,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3384,
                "end": 3388,
                "decorators": [],
                "name": "Pick",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3395,
        "end": 3398,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3397,
          "end": 3398,
          "typeName": {
            "type": "Identifier",
            "start": 3397,
            "end": 3398,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3356,
        "end": 3378,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3357,
            "end": 3358,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3357,
              "end": 3358,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3360,
            "end": 3377,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3370,
              "end": 3377,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3376,
                "end": 3377,
                "typeName": {
                  "type": "Identifier",
                  "start": 3376,
                  "end": 3377,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3360,
              "end": 3361,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3400,
      "end": 3463,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3417,
        "end": 3420,
        "decorators": [],
        "name": "f21",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3443,
          "end": 3458,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3446,
            "end": 3458,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3448,
              "end": 3458,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3452,
                "end": 3458,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3453,
                    "end": 3454,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3453,
                      "end": 3454,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3456,
                    "end": 3457,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3456,
                      "end": 3457,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3448,
                "end": 3452,
                "decorators": [],
                "name": "Pick",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3459,
        "end": 3462,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3461,
          "end": 3462,
          "typeName": {
            "type": "Identifier",
            "start": 3461,
            "end": 3462,
            "decorators": [],
            "name": "K",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3420,
        "end": 3442,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3421,
            "end": 3422,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3421,
              "end": 3422,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3424,
            "end": 3441,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3434,
              "end": 3441,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3440,
                "end": 3441,
                "typeName": {
                  "type": "Identifier",
                  "start": 3440,
                  "end": 3441,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3424,
              "end": 3425,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3464,
      "end": 3537,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3481,
        "end": 3484,
        "decorators": [],
        "name": "f22",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3507,
          "end": 3532,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3510,
            "end": 3532,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3512,
              "end": 3532,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3520,
                "end": 3532,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3521,
                    "end": 3531,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3525,
                      "end": 3531,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3526,
                          "end": 3527,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3526,
                            "end": 3527,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 3529,
                          "end": 3530,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3529,
                            "end": 3530,
                            "decorators": [],
                            "name": "K",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 3521,
                      "end": 3525,
                      "decorators": [],
                      "name": "Pick",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3512,
                "end": 3520,
                "decorators": [],
                "name": "Boxified",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3533,
        "end": 3536,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3535,
          "end": 3536,
          "typeName": {
            "type": "Identifier",
            "start": 3535,
            "end": 3536,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3484,
        "end": 3506,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3485,
            "end": 3486,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3485,
              "end": 3486,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3488,
            "end": 3505,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3498,
              "end": 3505,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3504,
                "end": 3505,
                "typeName": {
                  "type": "Identifier",
                  "start": 3504,
                  "end": 3505,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3488,
              "end": 3489,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3538,
      "end": 3614,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3555,
        "end": 3558,
        "decorators": [],
        "name": "f23",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3594,
          "end": 3609,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3597,
            "end": 3609,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3599,
              "end": 3609,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3603,
                "end": 3609,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3604,
                    "end": 3605,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3604,
                      "end": 3605,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3607,
                    "end": 3608,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3607,
                      "end": 3608,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3599,
                "end": 3603,
                "decorators": [],
                "name": "Pick",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3610,
        "end": 3613,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3612,
          "end": 3613,
          "typeName": {
            "type": "Identifier",
            "start": 3612,
            "end": 3613,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3558,
        "end": 3593,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3559,
            "end": 3560,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3559,
              "end": 3560,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3562,
            "end": 3579,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3572,
              "end": 3579,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3578,
                "end": 3579,
                "typeName": {
                  "type": "Identifier",
                  "start": 3578,
                  "end": 3579,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3562,
              "end": 3563,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3581,
            "end": 3592,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3591,
              "end": 3592,
              "typeName": {
                "type": "Identifier",
                "start": 3591,
                "end": 3592,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3581,
              "end": 3582,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3615,
      "end": 3699,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3632,
        "end": 3635,
        "decorators": [],
        "name": "f24",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3671,
          "end": 3690,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3674,
            "end": 3690,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3676,
              "end": 3690,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3680,
                "end": 3690,
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "start": 3681,
                    "end": 3686,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 3681,
                        "end": 3682,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3681,
                          "end": 3682,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 3685,
                        "end": 3686,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3685,
                          "end": 3686,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3688,
                    "end": 3689,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3688,
                      "end": 3689,
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3676,
                "end": 3680,
                "decorators": [],
                "name": "Pick",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3691,
        "end": 3698,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 3693,
          "end": 3698,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 3693,
              "end": 3694,
              "typeName": {
                "type": "Identifier",
                "start": 3693,
                "end": 3694,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 3697,
              "end": 3698,
              "typeName": {
                "type": "Identifier",
                "start": 3697,
                "end": 3698,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3635,
        "end": 3670,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3636,
            "end": 3637,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3636,
              "end": 3637,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3639,
            "end": 3640,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3639,
              "end": 3640,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3642,
            "end": 3669,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 3652,
              "end": 3669,
              "types": [
                {
                  "type": "TSTypeOperator",
                  "start": 3652,
                  "end": 3659,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3658,
                    "end": 3659,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3658,
                      "end": 3659,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "start": 3662,
                  "end": 3669,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3668,
                    "end": 3669,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3668,
                      "end": 3669,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3642,
              "end": 3643,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3701,
      "end": 3741,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3705,
          "end": 3740,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3705,
            "end": 3707,
            "decorators": [],
            "name": "x0",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3710,
            "end": 3740,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3714,
                "end": 3739,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3716,
                    "end": 3723,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3716,
                      "end": 3719,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3721,
                      "end": 3723,
                      "raw": "42",
                      "value": 42
                    }
                  },
                  {
                    "type": "Property",
                    "start": 3725,
                    "end": 3737,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3725,
                      "end": 3728,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3730,
                      "end": 3737,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3710,
              "end": 3713,
              "decorators": [],
              "name": "f20",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 3742,
      "end": 3782,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3746,
          "end": 3781,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3746,
            "end": 3748,
            "decorators": [],
            "name": "x1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3751,
            "end": 3781,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3755,
                "end": 3780,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3757,
                    "end": 3764,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3757,
                      "end": 3760,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3762,
                      "end": 3764,
                      "raw": "42",
                      "value": 42
                    }
                  },
                  {
                    "type": "Property",
                    "start": 3766,
                    "end": 3778,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3766,
                      "end": 3769,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3771,
                      "end": 3778,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3751,
              "end": 3754,
              "decorators": [],
              "name": "f21",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 3783,
      "end": 3845,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3787,
          "end": 3844,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3787,
            "end": 3789,
            "decorators": [],
            "name": "x2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3792,
            "end": 3844,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3796,
                "end": 3843,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3798,
                    "end": 3815,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3798,
                      "end": 3801,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 3803,
                      "end": 3815,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3805,
                          "end": 3814,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3805,
                            "end": 3810,
                            "decorators": [],
                            "name": "value",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 3812,
                            "end": 3814,
                            "raw": "42",
                            "value": 42
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 3818,
                    "end": 3841,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3818,
                      "end": 3821,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 3823,
                      "end": 3841,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3825,
                          "end": 3839,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3825,
                            "end": 3830,
                            "decorators": [],
                            "name": "value",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 3832,
                            "end": 3839,
                            "raw": "\"hello\"",
                            "value": "hello"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3792,
              "end": 3795,
              "decorators": [],
              "name": "f22",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 3846,
      "end": 3886,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3850,
          "end": 3885,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3850,
            "end": 3852,
            "decorators": [],
            "name": "x3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3855,
            "end": 3885,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3859,
                "end": 3884,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3861,
                    "end": 3868,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3861,
                      "end": 3864,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3866,
                      "end": 3868,
                      "raw": "42",
                      "value": 42
                    }
                  },
                  {
                    "type": "Property",
                    "start": 3870,
                    "end": 3882,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3870,
                      "end": 3873,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3875,
                      "end": 3882,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3855,
              "end": 3858,
              "decorators": [],
              "name": "f23",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 3887,
      "end": 3927,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3891,
          "end": 3926,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3891,
            "end": 3893,
            "decorators": [],
            "name": "x4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3896,
            "end": 3926,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 3900,
                "end": 3925,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3902,
                    "end": 3909,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3902,
                      "end": 3905,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3907,
                      "end": 3909,
                      "raw": "42",
                      "value": 42
                    }
                  },
                  {
                    "type": "Property",
                    "start": 3911,
                    "end": 3923,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3911,
                      "end": 3914,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3916,
                      "end": 3923,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3896,
              "end": 3899,
              "decorators": [],
              "name": "f24",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 3951,
      "end": 4047,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4022,
        "end": 4047,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 4028,
            "end": 4045,
            "argument": {
              "type": "TSAsExpression",
              "start": 4035,
              "end": 4044,
              "expression": {
                "type": "ObjectExpression",
                "start": 4035,
                "end": 4037,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4041,
                "end": 4044
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3960,
        "end": 3968,
        "decorators": [],
        "name": "getProps",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3991,
          "end": 3997,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3994,
            "end": 3997,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3996,
              "end": 3997,
              "typeName": {
                "type": "Identifier",
                "start": 3996,
                "end": 3997,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3999,
          "end": 4008,
          "decorators": [],
          "name": "list",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4003,
            "end": 4008,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 4005,
              "end": 4008,
              "elementType": {
                "type": "TSTypeReference",
                "start": 4005,
                "end": 4006,
                "typeName": {
                  "type": "Identifier",
                  "start": 4005,
                  "end": 4006,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4009,
        "end": 4021,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4011,
          "end": 4021,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4015,
            "end": 4021,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 4016,
                "end": 4017,
                "typeName": {
                  "type": "Identifier",
                  "start": 4016,
                  "end": 4017,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 4019,
                "end": 4020,
                "typeName": {
                  "type": "Identifier",
                  "start": 4019,
                  "end": 4020,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 4011,
            "end": 4015,
            "decorators": [],
            "name": "Pick",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3968,
        "end": 3990,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3969,
            "end": 3970,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3969,
              "end": 3970,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3972,
            "end": 3989,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3982,
              "end": 3989,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3988,
                "end": 3989,
                "typeName": {
                  "type": "Identifier",
                  "start": 3988,
                  "end": 3989,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3972,
              "end": 3973,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 4049,
      "end": 4071,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4055,
          "end": 4070,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4055,
            "end": 4065,
            "decorators": [],
            "name": "myAny",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4060,
              "end": 4065,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4062,
                "end": 4065
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 4068,
            "end": 4070,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 4073,
      "end": 4116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4079,
          "end": 4115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4079,
            "end": 4081,
            "decorators": [],
            "name": "o1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4084,
            "end": 4115,
            "arguments": [
              {
                "type": "Identifier",
                "start": 4093,
                "end": 4098,
                "decorators": [],
                "name": "myAny",
                "optional": false
              },
              {
                "type": "ArrayExpression",
                "start": 4100,
                "end": 4114,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 4101,
                    "end": 4106,
                    "raw": "'foo'",
                    "value": "foo"
                  },
                  {
                    "type": "Literal",
                    "start": 4108,
                    "end": 4113,
                    "raw": "'bar'",
                    "value": "bar"
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 4084,
              "end": 4092,
              "decorators": [],
              "name": "getProps",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 4118,
      "end": 4185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4124,
          "end": 4184,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4124,
            "end": 4150,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4126,
              "end": 4150,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 4128,
                "end": 4150,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4130,
                    "end": 4139,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4130,
                      "end": 4133,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4133,
                      "end": 4138,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4135,
                        "end": 4138
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 4140,
                    "end": 4148,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4140,
                      "end": 4143,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4143,
                      "end": 4148,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4145,
                        "end": 4148
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 4153,
            "end": 4184,
            "arguments": [
              {
                "type": "Identifier",
                "start": 4162,
                "end": 4167,
                "decorators": [],
                "name": "myAny",
                "optional": false
              },
              {
                "type": "ArrayExpression",
                "start": 4169,
                "end": 4183,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 4170,
                    "end": 4175,
                    "raw": "'foo'",
                    "value": "foo"
                  },
                  {
                    "type": "Literal",
                    "start": 4177,
                    "end": 4182,
                    "raw": "'bar'",
                    "value": "bar"
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 4153,
              "end": 4161,
              "decorators": [],
              "name": "getProps",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1548,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Box",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 14,
        "end": 17,
        "members": []
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 20,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 33,
        "name": "Boxified",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 33,
        "end": 36,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 34,
            "end": 35,
            "name": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 39,
        "end": 73,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 46,
          "end": 58,
          "name": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 51,
            "end": 58,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 58,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 61,
          "end": 70,
          "typeName": {
            "type": "Identifier",
            "start": 61,
            "end": 64,
            "name": "Box",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 64,
            "end": 70,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 65,
                "end": 69,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 65,
                  "end": 66,
                  "typeName": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 67,
                  "end": 68,
                  "typeName": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 51,
          "end": 58,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 57,
            "end": 58,
            "typeName": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 46,
          "end": 47,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 76,
      "end": 326,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 91,
        "name": "boxify",
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
          "start": 95,
          "end": 101,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 98,
            "end": 101,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 100,
              "end": 101,
              "typeName": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 326,
        "body": [
          {
            "type": "IfStatement",
            "start": 122,
            "end": 303,
            "test": {
              "type": "BinaryExpression",
              "start": 126,
              "end": 149,
              "left": {
                "type": "UnaryExpression",
                "start": 126,
                "end": 136,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 136,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 141,
                "end": 149,
                "value": "object",
                "raw": "\"object\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 151,
              "end": 303,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 161,
                  "end": 192,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 165,
                      "end": 191,
                      "id": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 171,
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "start": 174,
                        "end": 191,
                        "expression": {
                          "type": "ObjectExpression",
                          "start": 174,
                          "end": 176,
                          "properties": []
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 180,
                          "end": 191,
                          "typeName": {
                            "type": "Identifier",
                            "start": 180,
                            "end": 188,
                            "name": "Boxified",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 188,
                            "end": 191,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 189,
                                "end": 190,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 189,
                                  "end": 190,
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
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "ForInStatement",
                  "start": 201,
                  "end": 274,
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 206,
                    "end": 211,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 210,
                        "end": 211,
                        "id": {
                          "type": "Identifier",
                          "start": 210,
                          "end": 211,
                          "name": "k",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 218,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 220,
                    "end": 274,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 234,
                        "end": 264,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 234,
                          "end": 263,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 234,
                            "end": 243,
                            "object": {
                              "type": "Identifier",
                              "start": 234,
                              "end": 240,
                              "name": "result",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 241,
                              "end": 242,
                              "name": "k",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": true,
                            "optional": false
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "start": 246,
                            "end": 263,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 248,
                                "end": 261,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 248,
                                  "end": 253,
                                  "name": "value",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "MemberExpression",
                                  "start": 255,
                                  "end": 261,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 255,
                                    "end": 258,
                                    "name": "obj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 259,
                                    "end": 260,
                                    "name": "k",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": true,
                                  "optional": false
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          }
                        },
                        "directive": null
                      }
                    ]
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 283,
                  "end": 297,
                  "argument": {
                    "type": "Identifier",
                    "start": 290,
                    "end": 296,
                    "name": "result",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 308,
            "end": 324,
            "argument": {
              "type": "TSTypeAssertion",
              "start": 315,
              "end": 323,
              "expression": {
                "type": "Identifier",
                "start": 320,
                "end": 323,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 316,
                "end": 319
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 91,
        "end": 94,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 92,
            "end": 93,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
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
        "start": 102,
        "end": 115,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 104,
          "end": 115,
          "typeName": {
            "type": "Identifier",
            "start": 104,
            "end": 112,
            "name": "Boxified",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 112,
            "end": 115,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 113,
                "end": 114,
                "typeName": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
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
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 328,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 334,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 337,
        "end": 350,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 339,
            "end": 348,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 348,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 352,
      "end": 375,
      "id": {
        "type": "Identifier",
        "start": 357,
        "end": 358,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 361,
        "end": 374,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 363,
            "end": 372,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 363,
              "end": 364,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 372,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 366,
                "end": 372
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 376,
      "end": 399,
      "id": {
        "type": "Identifier",
        "start": 381,
        "end": 382,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 385,
        "end": 398,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 387,
            "end": 396,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 387,
              "end": 388,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 388,
              "end": 396,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 390,
                "end": 396
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 401,
      "end": 464,
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 412,
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
          "start": 413,
          "end": 437,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 414,
            "end": 437,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 416,
              "end": 437,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 416,
                  "end": 417,
                  "typeName": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 417,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 420,
                  "end": 421,
                  "typeName": {
                    "type": "Identifier",
                    "start": 420,
                    "end": 421,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 424,
                  "end": 425,
                  "typeName": {
                    "type": "Identifier",
                    "start": 424,
                    "end": 425,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 428,
                  "end": 437
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 439,
        "end": 464,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 445,
            "end": 462,
            "argument": {
              "type": "CallExpression",
              "start": 452,
              "end": 461,
              "callee": {
                "type": "Identifier",
                "start": 452,
                "end": 458,
                "name": "boxify",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 459,
                  "end": 460,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 466,
      "end": 496,
      "id": {
        "type": "Identifier",
        "start": 471,
        "end": 474,
        "name": "T00",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 477,
        "end": 495,
        "typeName": {
          "type": "Identifier",
          "start": 477,
          "end": 484,
          "name": "Partial",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 484,
          "end": 495,
          "params": [
            {
              "type": "TSUnionType",
              "start": 485,
              "end": 494,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 485,
                  "end": 486,
                  "typeName": {
                    "type": "Identifier",
                    "start": 485,
                    "end": 486,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 489,
                  "end": 490,
                  "typeName": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 490,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 493,
                  "end": 494,
                  "typeName": {
                    "type": "Identifier",
                    "start": 493,
                    "end": 494,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 497,
      "end": 547,
      "id": {
        "type": "Identifier",
        "start": 502,
        "end": 505,
        "name": "T01",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 508,
        "end": 546,
        "typeName": {
          "type": "Identifier",
          "start": 508,
          "end": 516,
          "name": "Readonly",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 516,
          "end": 546,
          "params": [
            {
              "type": "TSUnionType",
              "start": 517,
              "end": 545,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 517,
                  "end": 518,
                  "typeName": {
                    "type": "Identifier",
                    "start": 517,
                    "end": 518,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 521,
                  "end": 522,
                  "typeName": {
                    "type": "Identifier",
                    "start": 521,
                    "end": 522,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 525,
                  "end": 526,
                  "typeName": {
                    "type": "Identifier",
                    "start": 525,
                    "end": 526,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNullKeyword",
                  "start": 529,
                  "end": 533
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 536,
                  "end": 545
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 548,
      "end": 589,
      "id": {
        "type": "Identifier",
        "start": 553,
        "end": 556,
        "name": "T02",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 559,
        "end": 589,
        "typeName": {
          "type": "Identifier",
          "start": 559,
          "end": 567,
          "name": "Boxified",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 567,
          "end": 589,
          "params": [
            {
              "type": "TSUnionType",
              "start": 568,
              "end": 588,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 568,
                  "end": 569,
                  "typeName": {
                    "type": "Identifier",
                    "start": 568,
                    "end": 569,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSArrayType",
                  "start": 572,
                  "end": 575,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 572,
                    "end": 573,
                    "typeName": {
                      "type": "Identifier",
                      "start": 572,
                      "end": 573,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 578,
                  "end": 579,
                  "typeName": {
                    "type": "Identifier",
                    "start": 578,
                    "end": 579,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSStringKeyword",
                  "start": 582,
                  "end": 588
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 590,
      "end": 663,
      "id": {
        "type": "Identifier",
        "start": 595,
        "end": 598,
        "name": "T03",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 601,
        "end": 662,
        "typeName": {
          "type": "Identifier",
          "start": 601,
          "end": 609,
          "name": "Readonly",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 609,
          "end": 662,
          "params": [
            {
              "type": "TSUnionType",
              "start": 610,
              "end": 661,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 610,
                  "end": 616
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 619,
                  "end": 625
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 628,
                  "end": 635
                },
                {
                  "type": "TSNullKeyword",
                  "start": 638,
                  "end": 642
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 645,
                  "end": 654
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 657,
                  "end": 661
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 664,
      "end": 737,
      "id": {
        "type": "Identifier",
        "start": 669,
        "end": 672,
        "name": "T04",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 675,
        "end": 736,
        "typeName": {
          "type": "Identifier",
          "start": 675,
          "end": 683,
          "name": "Boxified",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 683,
          "end": 736,
          "params": [
            {
              "type": "TSUnionType",
              "start": 684,
              "end": 735,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 684,
                  "end": 690
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 693,
                  "end": 699
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 702,
                  "end": 709
                },
                {
                  "type": "TSNullKeyword",
                  "start": 712,
                  "end": 716
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 719,
                  "end": 728
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 731,
                  "end": 735
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 738,
      "end": 781,
      "id": {
        "type": "Identifier",
        "start": 743,
        "end": 746,
        "name": "T05",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 749,
        "end": 780,
        "typeName": {
          "type": "Identifier",
          "start": 749,
          "end": 756,
          "name": "Partial",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 756,
          "end": 780,
          "params": [
            {
              "type": "TSUnionType",
              "start": 757,
              "end": 779,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 757,
                  "end": 764,
                  "literal": {
                    "type": "Literal",
                    "start": 757,
                    "end": 764,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 767,
                  "end": 774,
                  "literal": {
                    "type": "Literal",
                    "start": 767,
                    "end": 774,
                    "value": "world",
                    "raw": "\"world\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 777,
                  "end": 779,
                  "literal": {
                    "type": "Literal",
                    "start": 777,
                    "end": 779,
                    "value": 42,
                    "raw": "42"
                  }
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 783,
      "end": 855,
      "id": {
        "type": "Identifier",
        "start": 788,
        "end": 808,
        "name": "BoxifiedWithSentinel",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 808,
        "end": 814,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 809,
            "end": 810,
            "name": {
              "type": "Identifier",
              "start": 809,
              "end": 810,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 812,
            "end": 813,
            "name": {
              "type": "Identifier",
              "start": 812,
              "end": 813,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 817,
        "end": 855,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 824,
          "end": 836,
          "name": {
            "type": "Identifier",
            "start": 824,
            "end": 825,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 829,
            "end": 836,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 835,
              "end": 836,
              "typeName": {
                "type": "Identifier",
                "start": 835,
                "end": 836,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 839,
          "end": 852,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 839,
              "end": 848,
              "typeName": {
                "type": "Identifier",
                "start": 839,
                "end": 842,
                "name": "Box",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 842,
                "end": 848,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 843,
                    "end": 847,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 843,
                      "end": 844,
                      "typeName": {
                        "type": "Identifier",
                        "start": 843,
                        "end": 844,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 845,
                      "end": 846,
                      "typeName": {
                        "type": "Identifier",
                        "start": 845,
                        "end": 846,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 851,
              "end": 852,
              "typeName": {
                "type": "Identifier",
                "start": 851,
                "end": 852,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 829,
          "end": 836,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 835,
            "end": 836,
            "typeName": {
              "type": "Identifier",
              "start": 835,
              "end": 836,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 824,
          "end": 825,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 857,
      "end": 906,
      "id": {
        "type": "Identifier",
        "start": 862,
        "end": 865,
        "name": "T10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 868,
        "end": 905,
        "typeName": {
          "type": "Identifier",
          "start": 868,
          "end": 888,
          "name": "BoxifiedWithSentinel",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 888,
          "end": 905,
          "params": [
            {
              "type": "TSUnionType",
              "start": 889,
              "end": 898,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 889,
                  "end": 890,
                  "typeName": {
                    "type": "Identifier",
                    "start": 889,
                    "end": 890,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 893,
                  "end": 894,
                  "typeName": {
                    "type": "Identifier",
                    "start": 893,
                    "end": 894,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 897,
                  "end": 898,
                  "typeName": {
                    "type": "Identifier",
                    "start": 897,
                    "end": 898,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            },
            {
              "type": "TSNullKeyword",
              "start": 900,
              "end": 904
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 907,
      "end": 961,
      "id": {
        "type": "Identifier",
        "start": 912,
        "end": 915,
        "name": "T11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 918,
        "end": 960,
        "typeName": {
          "type": "Identifier",
          "start": 918,
          "end": 938,
          "name": "BoxifiedWithSentinel",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 938,
          "end": 960,
          "params": [
            {
              "type": "TSUnionType",
              "start": 939,
              "end": 948,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 939,
                  "end": 940,
                  "typeName": {
                    "type": "Identifier",
                    "start": 939,
                    "end": 940,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 943,
                  "end": 944,
                  "typeName": {
                    "type": "Identifier",
                    "start": 943,
                    "end": 944,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 947,
                  "end": 948,
                  "typeName": {
                    "type": "Identifier",
                    "start": 947,
                    "end": 948,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 950,
              "end": 959
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 962,
      "end": 1013,
      "id": {
        "type": "Identifier",
        "start": 967,
        "end": 970,
        "name": "T12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 973,
        "end": 1012,
        "typeName": {
          "type": "Identifier",
          "start": 973,
          "end": 993,
          "name": "BoxifiedWithSentinel",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 993,
          "end": 1012,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 994,
              "end": 1000
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 1002,
              "end": 1011
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1015,
      "end": 1091,
      "id": {
        "type": "Identifier",
        "start": 1020,
        "end": 1032,
        "name": "DeepReadonly",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1032,
        "end": 1035,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1033,
            "end": 1034,
            "name": {
              "type": "Identifier",
              "start": 1033,
              "end": 1034,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1038,
        "end": 1090,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1054,
          "end": 1066,
          "name": {
            "type": "Identifier",
            "start": 1054,
            "end": 1055,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1059,
            "end": 1066,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1065,
              "end": 1066,
              "typeName": {
                "type": "Identifier",
                "start": 1065,
                "end": 1066,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1069,
          "end": 1087,
          "typeName": {
            "type": "Identifier",
            "start": 1069,
            "end": 1081,
            "name": "DeepReadonly",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1081,
            "end": 1087,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1082,
                "end": 1086,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1082,
                  "end": 1083,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1082,
                    "end": 1083,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1084,
                  "end": 1085,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1084,
                    "end": 1085,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": null,
        "readonly": true,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1059,
          "end": 1066,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1065,
            "end": 1066,
            "typeName": {
              "type": "Identifier",
              "start": 1065,
              "end": 1066,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1054,
          "end": 1055,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1093,
      "end": 1172,
      "id": {
        "type": "Identifier",
        "start": 1098,
        "end": 1101,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1104,
        "end": 1171,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1110,
            "end": 1120,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1110,
              "end": 1111,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1111,
              "end": 1119,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1113,
                "end": 1119
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1125,
            "end": 1153,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1125,
              "end": 1126,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1126,
              "end": 1152,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1128,
                "end": 1152,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1130,
                    "end": 1140,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1130,
                      "end": 1131,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1131,
                      "end": 1139,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1133,
                        "end": 1139
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1141,
                    "end": 1150,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1141,
                      "end": 1142,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1142,
                      "end": 1150,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1144,
                        "end": 1150
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1158,
            "end": 1169,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1158,
              "end": 1159,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1159,
              "end": 1168,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1161,
                "end": 1168
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1174,
      "end": 1310,
      "id": {
        "type": "Identifier",
        "start": 1179,
        "end": 1194,
        "name": "DeepReadonlyFoo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1197,
        "end": 1309,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1203,
            "end": 1222,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 1212,
              "end": 1213,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1213,
              "end": 1221,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1215,
                "end": 1221
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1227,
            "end": 1282,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 1236,
              "end": 1237,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1237,
              "end": 1281,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1239,
                "end": 1281,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1241,
                    "end": 1260,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 1250,
                      "end": 1251,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1251,
                      "end": 1259,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1253,
                        "end": 1259
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1261,
                    "end": 1279,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 1270,
                      "end": 1271,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1271,
                      "end": 1279,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1273,
                        "end": 1279
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1287,
            "end": 1307,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 1296,
              "end": 1297,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1297,
              "end": 1306,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1299,
                "end": 1306
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1312,
      "end": 1338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1316,
          "end": 1337,
          "id": {
            "type": "Identifier",
            "start": 1316,
            "end": 1337,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1318,
              "end": 1337,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1320,
                "end": 1337,
                "typeName": {
                  "type": "Identifier",
                  "start": 1320,
                  "end": 1332,
                  "name": "DeepReadonly",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1332,
                  "end": 1337,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1333,
                      "end": 1336,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1333,
                        "end": 1336,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 1339,
      "end": 1363,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1343,
          "end": 1362,
          "id": {
            "type": "Identifier",
            "start": 1343,
            "end": 1362,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1345,
              "end": 1362,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1347,
                "end": 1362,
                "typeName": {
                  "type": "Identifier",
                  "start": 1347,
                  "end": 1362,
                  "name": "DeepReadonlyFoo",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1387,
      "end": 1410,
      "id": {
        "type": "Identifier",
        "start": 1392,
        "end": 1393,
        "name": "Z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1396,
        "end": 1409,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1398,
            "end": 1407,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1398,
              "end": 1399,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1399,
              "end": 1407,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1401,
                "end": 1407
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1411,
      "end": 1469,
      "id": {
        "type": "Identifier",
        "start": 1416,
        "end": 1421,
        "name": "Clone",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1421,
        "end": 1424,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1422,
            "end": 1423,
            "name": {
              "type": "Identifier",
              "start": 1422,
              "end": 1423,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1427,
        "end": 1468,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1432,
          "end": 1451,
          "name": {
            "type": "Identifier",
            "start": 1432,
            "end": 1433,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1437,
            "end": 1451,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 1444,
              "end": 1450,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1444,
                  "end": 1445,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1444,
                    "end": 1445,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 1448,
                  "end": 1450,
                  "members": []
                }
              ]
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 1454,
          "end": 1465,
          "objectType": {
            "type": "TSIntersectionType",
            "start": 1455,
            "end": 1461,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 1455,
                "end": 1456,
                "typeName": {
                  "type": "Identifier",
                  "start": 1455,
                  "end": 1456,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeLiteral",
                "start": 1459,
                "end": 1461,
                "members": []
              }
            ]
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 1463,
            "end": 1464,
            "typeName": {
              "type": "Identifier",
              "start": 1463,
              "end": 1464,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1437,
          "end": 1451,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSIntersectionType",
            "start": 1444,
            "end": 1450,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 1444,
                "end": 1445,
                "typeName": {
                  "type": "Identifier",
                  "start": 1444,
                  "end": 1445,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeLiteral",
                "start": 1448,
                "end": 1450,
                "members": []
              }
            ]
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1432,
          "end": 1433,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1470,
      "end": 1488,
      "id": {
        "type": "Identifier",
        "start": 1475,
        "end": 1476,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1479,
        "end": 1487,
        "typeName": {
          "type": "Identifier",
          "start": 1479,
          "end": 1484,
          "name": "Clone",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1484,
          "end": 1487,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1485,
              "end": 1486,
              "typeName": {
                "type": "Identifier",
                "start": 1485,
                "end": 1486,
                "name": "Z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1519,
      "end": 1529,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1523,
          "end": 1528,
          "id": {
            "type": "Identifier",
            "start": 1523,
            "end": 1528,
            "name": "z1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1525,
              "end": 1528,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1527,
                "end": 1528,
                "typeName": {
                  "type": "Identifier",
                  "start": 1527,
                  "end": 1528,
                  "name": "Z",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1530,
      "end": 1547,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1534,
          "end": 1546,
          "id": {
            "type": "Identifier",
            "start": 1534,
            "end": 1546,
            "name": "z1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1536,
              "end": 1546,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1538,
                "end": 1546,
                "typeName": {
                  "type": "Identifier",
                  "start": 1538,
                  "end": 1543,
                  "name": "Clone",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1543,
                  "end": 1546,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1544,
                      "end": 1545,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1544,
                        "end": 1545,
                        "name": "Z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 58,
  "end": 2009,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 58,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "decorators": [],
        "name": "P",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 69,
        "end": 72,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 70,
            "end": 71,
            "name": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 73,
        "end": 116,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 79,
            "end": 114,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 83,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 84,
                "end": 106,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 86,
                  "end": 106,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 88,
                    "end": 106,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 89,
                        "end": 97,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 94,
                          "end": 97,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 96,
                            "end": 97,
                            "typeName": {
                              "type": "Identifier",
                              "start": 96,
                              "end": 97,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 99,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 102,
                        "end": 106
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 113,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 109,
                "end": 113
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
      "type": "EmptyStatement",
      "start": 116,
      "end": 117
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 119,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 130,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 131,
        "end": 144,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 133,
            "end": 142,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 142,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 136,
                "end": 142
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
      "type": "TSInterfaceDeclaration",
      "start": 145,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 156,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 165,
          "end": 166,
          "expression": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 167,
        "end": 180,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 169,
            "end": 178,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 178,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 172,
                "end": 178
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
      "start": 182,
      "end": 247,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 193,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 194,
          "end": 201,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 195,
            "end": 201,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 197,
              "end": 201,
              "typeName": {
                "type": "Identifier",
                "start": 197,
                "end": 198,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 198,
                "end": 201,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 199,
                    "end": 200,
                    "typeName": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 200,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 203,
          "end": 210,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 204,
            "end": 210,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 206,
              "end": 210,
              "typeName": {
                "type": "Identifier",
                "start": 206,
                "end": 207,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 207,
                "end": 210,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 208,
                    "end": 209,
                    "typeName": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 209,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 212,
        "end": 247,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 218,
            "end": 224,
            "expression": {
              "type": "AssignmentExpression",
              "start": 218,
              "end": 223,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 218,
                "end": 219,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 222,
                "end": 223,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 229,
            "end": 235,
            "expression": {
              "type": "AssignmentExpression",
              "start": 229,
              "end": 234,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 249,
      "end": 326,
      "id": {
        "type": "Identifier",
        "start": 258,
        "end": 260,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 261,
          "end": 274,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 262,
            "end": 274,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 264,
              "end": 274,
              "typeName": {
                "type": "Identifier",
                "start": 264,
                "end": 271,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 271,
                "end": 274,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 272,
                    "end": 273,
                    "typeName": {
                      "type": "Identifier",
                      "start": 272,
                      "end": 273,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 276,
          "end": 289,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 277,
            "end": 289,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 279,
              "end": 289,
              "typeName": {
                "type": "Identifier",
                "start": 279,
                "end": 286,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 286,
                "end": 289,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 287,
                    "end": 288,
                    "typeName": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 288,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 291,
        "end": 326,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 297,
            "end": 303,
            "expression": {
              "type": "AssignmentExpression",
              "start": 297,
              "end": 302,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 297,
                "end": 298,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 301,
                "end": 302,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 308,
            "end": 314,
            "expression": {
              "type": "AssignmentExpression",
              "start": 308,
              "end": 313,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 312,
                "end": 313,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 328,
      "end": 390,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 344,
        "decorators": [],
        "name": "AList1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 345,
        "end": 390,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 351,
            "end": 388,
            "key": {
              "type": "Identifier",
              "start": 351,
              "end": 358,
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 359,
                "end": 380,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 361,
                  "end": 380,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 363,
                    "end": 380,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 364,
                        "end": 371,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 368,
                          "end": 371,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 370,
                            "end": 371,
                            "typeName": {
                              "type": "Identifier",
                              "start": 370,
                              "end": 371,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 373,
                      "end": 380,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 376,
                        "end": 380
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 381,
              "end": 387,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 383,
                "end": 387
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
      "type": "TSInterfaceDeclaration",
      "start": 392,
      "end": 454,
      "id": {
        "type": "Identifier",
        "start": 402,
        "end": 408,
        "decorators": [],
        "name": "BList1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 409,
        "end": 454,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 415,
            "end": 452,
            "key": {
              "type": "Identifier",
              "start": 415,
              "end": 422,
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 423,
                "end": 444,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 425,
                  "end": 444,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 427,
                    "end": 444,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 428,
                        "end": 435,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 432,
                          "end": 435,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 434,
                            "end": 435,
                            "typeName": {
                              "type": "Identifier",
                              "start": 434,
                              "end": 435,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 437,
                      "end": 444,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 440,
                        "end": 444
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 451,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 447,
                "end": 451
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
      "type": "FunctionDeclaration",
      "start": 456,
      "end": 526,
      "id": {
        "type": "Identifier",
        "start": 465,
        "end": 468,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 469,
          "end": 478,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 470,
            "end": 478,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 472,
              "end": 478,
              "typeName": {
                "type": "Identifier",
                "start": 472,
                "end": 478,
                "decorators": [],
                "name": "AList1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 480,
          "end": 489,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 481,
            "end": 489,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 483,
              "end": 489,
              "typeName": {
                "type": "Identifier",
                "start": 483,
                "end": 489,
                "decorators": [],
                "name": "BList1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 491,
        "end": 526,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 497,
            "end": 503,
            "expression": {
              "type": "AssignmentExpression",
              "start": 497,
              "end": 502,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 497,
                "end": 498,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 501,
                "end": 502,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 508,
            "end": 514,
            "expression": {
              "type": "AssignmentExpression",
              "start": 508,
              "end": 513,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 508,
                "end": 509,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 512,
                "end": 513,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 528,
      "end": 593,
      "id": {
        "type": "Identifier",
        "start": 538,
        "end": 544,
        "decorators": [],
        "name": "AList2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 545,
        "end": 593,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 551,
            "end": 591,
            "key": {
              "type": "Identifier",
              "start": 551,
              "end": 558,
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 559,
                "end": 583,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 561,
                  "end": 583,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 563,
                    "end": 583,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 564,
                        "end": 571,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 568,
                          "end": 571,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 570,
                            "end": 571,
                            "typeName": {
                              "type": "Identifier",
                              "start": 570,
                              "end": 571,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 573,
                      "end": 583,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 576,
                        "end": 583
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 584,
              "end": 590,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 586,
                "end": 590
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
      "type": "TSInterfaceDeclaration",
      "start": 595,
      "end": 657,
      "id": {
        "type": "Identifier",
        "start": 605,
        "end": 611,
        "decorators": [],
        "name": "BList2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 612,
        "end": 657,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 618,
            "end": 655,
            "key": {
              "type": "Identifier",
              "start": 618,
              "end": 625,
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 626,
                "end": 647,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 628,
                  "end": 647,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 630,
                    "end": 647,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 631,
                        "end": 638,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 635,
                          "end": 638,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 637,
                            "end": 638,
                            "typeName": {
                              "type": "Identifier",
                              "start": 637,
                              "end": 638,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 640,
                      "end": 647,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 643,
                        "end": 647
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 648,
              "end": 654,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 650,
                "end": 654
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
      "type": "FunctionDeclaration",
      "start": 659,
      "end": 729,
      "id": {
        "type": "Identifier",
        "start": 668,
        "end": 671,
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 672,
          "end": 681,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 673,
            "end": 681,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 675,
              "end": 681,
              "typeName": {
                "type": "Identifier",
                "start": 675,
                "end": 681,
                "decorators": [],
                "name": "AList2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 683,
          "end": 692,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 684,
            "end": 692,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 686,
              "end": 692,
              "typeName": {
                "type": "Identifier",
                "start": 686,
                "end": 692,
                "decorators": [],
                "name": "BList2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 694,
        "end": 729,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 700,
            "end": 706,
            "expression": {
              "type": "AssignmentExpression",
              "start": 700,
              "end": 705,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 700,
                "end": 701,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 704,
                "end": 705,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 711,
            "end": 717,
            "expression": {
              "type": "AssignmentExpression",
              "start": 711,
              "end": 716,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 711,
                "end": 712,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 715,
                "end": 716,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 731,
      "end": 793,
      "id": {
        "type": "Identifier",
        "start": 741,
        "end": 747,
        "decorators": [],
        "name": "AList3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 748,
        "end": 793,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 754,
            "end": 791,
            "key": {
              "type": "Identifier",
              "start": 754,
              "end": 761,
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 762,
                "end": 783,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 764,
                  "end": 783,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 766,
                    "end": 783,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 767,
                        "end": 774,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 771,
                          "end": 774,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 773,
                            "end": 774,
                            "typeName": {
                              "type": "Identifier",
                              "start": 773,
                              "end": 774,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 776,
                      "end": 783,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 779,
                        "end": 783
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 784,
              "end": 790,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 786,
                "end": 790
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
      "type": "TSInterfaceDeclaration",
      "start": 795,
      "end": 871,
      "id": {
        "type": "Identifier",
        "start": 805,
        "end": 811,
        "decorators": [],
        "name": "BList3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 812,
        "end": 871,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 818,
            "end": 869,
            "key": {
              "type": "Identifier",
              "start": 818,
              "end": 825,
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 826,
                "end": 861,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 828,
                  "end": 861,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 830,
                    "end": 861,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 831,
                        "end": 838,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 835,
                          "end": 838,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 837,
                            "end": 838,
                            "typeName": {
                              "type": "Identifier",
                              "start": 837,
                              "end": 838,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 840,
                        "end": 852,
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 847,
                          "end": 852,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 849,
                            "end": 852
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 854,
                      "end": 861,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 857,
                        "end": 861
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 862,
              "end": 868,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 864,
                "end": 868
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
      "type": "FunctionDeclaration",
      "start": 873,
      "end": 943,
      "id": {
        "type": "Identifier",
        "start": 882,
        "end": 885,
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 886,
          "end": 895,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 887,
            "end": 895,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 889,
              "end": 895,
              "typeName": {
                "type": "Identifier",
                "start": 889,
                "end": 895,
                "decorators": [],
                "name": "AList3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 897,
          "end": 906,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 898,
            "end": 906,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 900,
              "end": 906,
              "typeName": {
                "type": "Identifier",
                "start": 900,
                "end": 906,
                "decorators": [],
                "name": "BList3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 908,
        "end": 943,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 914,
            "end": 920,
            "expression": {
              "type": "AssignmentExpression",
              "start": 914,
              "end": 919,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 914,
                "end": 915,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 918,
                "end": 919,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 925,
            "end": 931,
            "expression": {
              "type": "AssignmentExpression",
              "start": 925,
              "end": 930,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 925,
                "end": 926,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 929,
                "end": 930,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 945,
      "end": 1004,
      "id": {
        "type": "Identifier",
        "start": 955,
        "end": 961,
        "decorators": [],
        "name": "AList4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 962,
        "end": 1004,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 968,
            "end": 1002,
            "key": {
              "type": "Identifier",
              "start": 968,
              "end": 975,
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 976,
                "end": 994,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 978,
                  "end": 994,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 980,
                    "end": 994,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 981,
                        "end": 988,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 985,
                          "end": 988,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 987,
                            "end": 988,
                            "typeName": {
                              "type": "Identifier",
                              "start": 987,
                              "end": 988,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 990,
                      "end": 994,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 993,
                        "end": 994,
                        "typeName": {
                          "type": "Identifier",
                          "start": 993,
                          "end": 994,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 995,
              "end": 1001,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 997,
                "end": 1001
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
      "type": "TSInterfaceDeclaration",
      "start": 1006,
      "end": 1065,
      "id": {
        "type": "Identifier",
        "start": 1016,
        "end": 1022,
        "decorators": [],
        "name": "BList4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1023,
        "end": 1065,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1029,
            "end": 1063,
            "key": {
              "type": "Identifier",
              "start": 1029,
              "end": 1036,
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1037,
                "end": 1055,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1039,
                  "end": 1055,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1041,
                    "end": 1055,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1042,
                        "end": 1049,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1046,
                          "end": 1049,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1048,
                            "end": 1049,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1048,
                              "end": 1049,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1051,
                      "end": 1055,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1054,
                        "end": 1055,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1054,
                          "end": 1055,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1056,
              "end": 1062,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1058,
                "end": 1062
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
      "type": "FunctionDeclaration",
      "start": 1067,
      "end": 1137,
      "id": {
        "type": "Identifier",
        "start": 1076,
        "end": 1079,
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1080,
          "end": 1089,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1081,
            "end": 1089,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1083,
              "end": 1089,
              "typeName": {
                "type": "Identifier",
                "start": 1083,
                "end": 1089,
                "decorators": [],
                "name": "AList4",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1091,
          "end": 1100,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1092,
            "end": 1100,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1094,
              "end": 1100,
              "typeName": {
                "type": "Identifier",
                "start": 1094,
                "end": 1100,
                "decorators": [],
                "name": "BList4",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1102,
        "end": 1137,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1108,
            "end": 1114,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1108,
              "end": 1113,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1108,
                "end": 1109,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1112,
                "end": 1113,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1119,
            "end": 1125,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1119,
              "end": 1124,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1119,
                "end": 1120,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1123,
                "end": 1124,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1161,
      "end": 1200,
      "id": {
        "type": "Identifier",
        "start": 1166,
        "end": 1171,
        "decorators": [],
        "name": "Bivar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1171,
        "end": 1174,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1172,
            "end": 1173,
            "name": {
              "type": "Identifier",
              "start": 1172,
              "end": 1173,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 1177,
        "end": 1200,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 1179,
            "end": 1198,
            "key": {
              "type": "Identifier",
              "start": 1179,
              "end": 1182,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1183,
                "end": 1191,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1188,
                  "end": 1191,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1190,
                    "end": 1191,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1190,
                      "end": 1191,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1192,
              "end": 1198,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1194,
                "end": 1198
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
      "start": 1202,
      "end": 1233,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1214,
          "end": 1232,
          "id": {
            "type": "Identifier",
            "start": 1214,
            "end": 1232,
            "decorators": [],
            "name": "bu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1216,
              "end": 1232,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1218,
                "end": 1232,
                "typeName": {
                  "type": "Identifier",
                  "start": 1218,
                  "end": 1223,
                  "decorators": [],
                  "name": "Bivar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1223,
                  "end": 1232,
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 1224,
                      "end": 1231
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
      "start": 1234,
      "end": 1264,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1246,
          "end": 1263,
          "id": {
            "type": "Identifier",
            "start": 1246,
            "end": 1263,
            "decorators": [],
            "name": "bs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1248,
              "end": 1263,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1250,
                "end": 1263,
                "typeName": {
                  "type": "Identifier",
                  "start": 1250,
                  "end": 1255,
                  "decorators": [],
                  "name": "Bivar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1255,
                  "end": 1263,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1256,
                      "end": 1262
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
      "type": "ExpressionStatement",
      "start": 1265,
      "end": 1273,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1265,
        "end": 1272,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1265,
          "end": 1267,
          "decorators": [],
          "name": "bu",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1270,
          "end": 1272,
          "decorators": [],
          "name": "bs",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1274,
      "end": 1282,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1274,
        "end": 1281,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1274,
          "end": 1276,
          "decorators": [],
          "name": "bs",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1279,
          "end": 1281,
          "decorators": [],
          "name": "bu",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1284,
      "end": 1329,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1296,
          "end": 1328,
          "id": {
            "type": "Identifier",
            "start": 1296,
            "end": 1328,
            "decorators": [],
            "name": "bfu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1299,
              "end": 1328,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1301,
                "end": 1328,
                "typeName": {
                  "type": "Identifier",
                  "start": 1301,
                  "end": 1306,
                  "decorators": [],
                  "name": "Bivar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1306,
                  "end": 1328,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 1307,
                      "end": 1327,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1308,
                          "end": 1318,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1309,
                            "end": 1318,
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 1311,
                              "end": 1318
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1320,
                        "end": 1327,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1323,
                          "end": 1327
                        }
                      }
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
      "start": 1330,
      "end": 1374,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1342,
          "end": 1373,
          "id": {
            "type": "Identifier",
            "start": 1342,
            "end": 1373,
            "decorators": [],
            "name": "bfs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1345,
              "end": 1373,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1347,
                "end": 1373,
                "typeName": {
                  "type": "Identifier",
                  "start": 1347,
                  "end": 1352,
                  "decorators": [],
                  "name": "Bivar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1352,
                  "end": 1373,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 1353,
                      "end": 1372,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1354,
                          "end": 1363,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1355,
                            "end": 1363,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1357,
                              "end": 1363
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1365,
                        "end": 1372,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1368,
                          "end": 1372
                        }
                      }
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
      "type": "ExpressionStatement",
      "start": 1375,
      "end": 1385,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1375,
        "end": 1384,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1375,
          "end": 1378,
          "decorators": [],
          "name": "bfu",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1381,
          "end": 1384,
          "decorators": [],
          "name": "bfs",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1386,
      "end": 1396,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1386,
        "end": 1395,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1386,
          "end": 1389,
          "decorators": [],
          "name": "bfs",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1392,
          "end": 1395,
          "decorators": [],
          "name": "bfu",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1398,
      "end": 1438,
      "id": {
        "type": "Identifier",
        "start": 1403,
        "end": 1409,
        "decorators": [],
        "name": "Bivar1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1409,
        "end": 1412,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1410,
            "end": 1411,
            "name": {
              "type": "Identifier",
              "start": 1410,
              "end": 1411,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 1415,
        "end": 1438,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 1417,
            "end": 1436,
            "key": {
              "type": "Identifier",
              "start": 1417,
              "end": 1420,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1421,
                "end": 1429,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1426,
                  "end": 1429,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1428,
                    "end": 1429,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1428,
                      "end": 1429,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1430,
              "end": 1436,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1432,
                "end": 1436
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
      "type": "TSTypeAliasDeclaration",
      "start": 1439,
      "end": 1479,
      "id": {
        "type": "Identifier",
        "start": 1444,
        "end": 1450,
        "decorators": [],
        "name": "Bivar2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1450,
        "end": 1453,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1451,
            "end": 1452,
            "name": {
              "type": "Identifier",
              "start": 1451,
              "end": 1452,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 1456,
        "end": 1479,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 1458,
            "end": 1477,
            "key": {
              "type": "Identifier",
              "start": 1458,
              "end": 1461,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1462,
                "end": 1470,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1467,
                  "end": 1470,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1469,
                    "end": 1470,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1469,
                      "end": 1470,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1471,
              "end": 1477,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1473,
                "end": 1477
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
      "start": 1481,
      "end": 1528,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1493,
          "end": 1527,
          "id": {
            "type": "Identifier",
            "start": 1493,
            "end": 1527,
            "decorators": [],
            "name": "b1fu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1497,
              "end": 1527,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1499,
                "end": 1527,
                "typeName": {
                  "type": "Identifier",
                  "start": 1499,
                  "end": 1505,
                  "decorators": [],
                  "name": "Bivar1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1505,
                  "end": 1527,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 1506,
                      "end": 1526,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1507,
                          "end": 1517,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1508,
                            "end": 1517,
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 1510,
                              "end": 1517
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1519,
                        "end": 1526,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1522,
                          "end": 1526
                        }
                      }
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
      "start": 1529,
      "end": 1575,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1541,
          "end": 1574,
          "id": {
            "type": "Identifier",
            "start": 1541,
            "end": 1574,
            "decorators": [],
            "name": "b2fs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1545,
              "end": 1574,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1547,
                "end": 1574,
                "typeName": {
                  "type": "Identifier",
                  "start": 1547,
                  "end": 1553,
                  "decorators": [],
                  "name": "Bivar2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1553,
                  "end": 1574,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 1554,
                      "end": 1573,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1555,
                          "end": 1564,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1556,
                            "end": 1564,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1558,
                              "end": 1564
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1566,
                        "end": 1573,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1569,
                          "end": 1573
                        }
                      }
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
      "type": "ExpressionStatement",
      "start": 1576,
      "end": 1588,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1576,
        "end": 1587,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1576,
          "end": 1580,
          "decorators": [],
          "name": "b1fu",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1583,
          "end": 1587,
          "decorators": [],
          "name": "b2fs",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1589,
      "end": 1601,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1589,
        "end": 1600,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1589,
          "end": 1593,
          "decorators": [],
          "name": "b2fs",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1596,
          "end": 1600,
          "decorators": [],
          "name": "b1fu",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1603,
      "end": 1654,
      "id": {
        "type": "Identifier",
        "start": 1608,
        "end": 1615,
        "decorators": [],
        "name": "SetLike",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1615,
        "end": 1618,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1616,
            "end": 1617,
            "name": {
              "type": "Identifier",
              "start": 1616,
              "end": 1617,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 1621,
        "end": 1654,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 1623,
            "end": 1643,
            "key": {
              "type": "Identifier",
              "start": 1623,
              "end": 1626,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1627,
                "end": 1635,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1632,
                  "end": 1635,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1634,
                    "end": 1635,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1634,
                      "end": 1635,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1636,
              "end": 1642,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1638,
                "end": 1642
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1644,
            "end": 1652,
            "key": {
              "type": "Identifier",
              "start": 1644,
              "end": 1647,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1649,
              "end": 1652,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1651,
                "end": 1652,
                "typeName": {
                  "type": "Identifier",
                  "start": 1651,
                  "end": 1652,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 1656,
      "end": 1703,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1668,
          "end": 1702,
          "id": {
            "type": "Identifier",
            "start": 1668,
            "end": 1702,
            "decorators": [],
            "name": "sx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1670,
              "end": 1702,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1672,
                "end": 1702,
                "typeName": {
                  "type": "Identifier",
                  "start": 1672,
                  "end": 1680,
                  "decorators": [],
                  "name": "SetLike1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1680,
                  "end": 1702,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 1681,
                      "end": 1701,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1682,
                          "end": 1692,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1683,
                            "end": 1692,
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 1685,
                              "end": 1692
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1694,
                        "end": 1701,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1697,
                          "end": 1701
                        }
                      }
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
      "start": 1704,
      "end": 1750,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1716,
          "end": 1749,
          "id": {
            "type": "Identifier",
            "start": 1716,
            "end": 1749,
            "decorators": [],
            "name": "sy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1718,
              "end": 1749,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1720,
                "end": 1749,
                "typeName": {
                  "type": "Identifier",
                  "start": 1720,
                  "end": 1728,
                  "decorators": [],
                  "name": "SetLike1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1728,
                  "end": 1749,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 1729,
                      "end": 1748,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1730,
                          "end": 1739,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1731,
                            "end": 1739,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1733,
                              "end": 1739
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1741,
                        "end": 1748,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1744,
                          "end": 1748
                        }
                      }
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
      "type": "ExpressionStatement",
      "start": 1751,
      "end": 1759,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1751,
        "end": 1758,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1751,
          "end": 1753,
          "decorators": [],
          "name": "sx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1756,
          "end": 1758,
          "decorators": [],
          "name": "sy",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1770,
      "end": 1778,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1770,
        "end": 1777,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1770,
          "end": 1772,
          "decorators": [],
          "name": "sy",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1775,
          "end": 1777,
          "decorators": [],
          "name": "sx",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1780,
      "end": 1832,
      "id": {
        "type": "Identifier",
        "start": 1785,
        "end": 1793,
        "decorators": [],
        "name": "SetLike1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1793,
        "end": 1796,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1794,
            "end": 1795,
            "name": {
              "type": "Identifier",
              "start": 1794,
              "end": 1795,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 1799,
        "end": 1832,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 1801,
            "end": 1821,
            "key": {
              "type": "Identifier",
              "start": 1801,
              "end": 1804,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1805,
                "end": 1813,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1810,
                  "end": 1813,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1812,
                    "end": 1813,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1812,
                      "end": 1813,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1814,
              "end": 1820,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1816,
                "end": 1820
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1822,
            "end": 1830,
            "key": {
              "type": "Identifier",
              "start": 1822,
              "end": 1825,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1827,
              "end": 1830,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1829,
                "end": 1830,
                "typeName": {
                  "type": "Identifier",
                  "start": 1829,
                  "end": 1830,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 1833,
      "end": 1885,
      "id": {
        "type": "Identifier",
        "start": 1838,
        "end": 1846,
        "decorators": [],
        "name": "SetLike2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1846,
        "end": 1849,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1847,
            "end": 1848,
            "name": {
              "type": "Identifier",
              "start": 1847,
              "end": 1848,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "start": 1852,
        "end": 1885,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 1854,
            "end": 1874,
            "key": {
              "type": "Identifier",
              "start": 1854,
              "end": 1857,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1858,
                "end": 1866,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1863,
                  "end": 1866,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1865,
                    "end": 1866,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1865,
                      "end": 1866,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1867,
              "end": 1873,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1869,
                "end": 1873
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1875,
            "end": 1883,
            "key": {
              "type": "Identifier",
              "start": 1875,
              "end": 1878,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1880,
              "end": 1883,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1882,
                "end": 1883,
                "typeName": {
                  "type": "Identifier",
                  "start": 1882,
                  "end": 1883,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 1887,
      "end": 1934,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1899,
          "end": 1933,
          "id": {
            "type": "Identifier",
            "start": 1899,
            "end": 1933,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1901,
              "end": 1933,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1903,
                "end": 1933,
                "typeName": {
                  "type": "Identifier",
                  "start": 1903,
                  "end": 1911,
                  "decorators": [],
                  "name": "SetLike1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1911,
                  "end": 1933,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 1912,
                      "end": 1932,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1913,
                          "end": 1923,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1914,
                            "end": 1923,
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 1916,
                              "end": 1923
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1925,
                        "end": 1932,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1928,
                          "end": 1932
                        }
                      }
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
      "start": 1935,
      "end": 1981,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1947,
          "end": 1980,
          "id": {
            "type": "Identifier",
            "start": 1947,
            "end": 1980,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1949,
              "end": 1980,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1951,
                "end": 1980,
                "typeName": {
                  "type": "Identifier",
                  "start": 1951,
                  "end": 1959,
                  "decorators": [],
                  "name": "SetLike2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1959,
                  "end": 1980,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 1960,
                      "end": 1979,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1961,
                          "end": 1970,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1962,
                            "end": 1970,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1964,
                              "end": 1970
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1972,
                        "end": 1979,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1975,
                          "end": 1979
                        }
                      }
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
      "type": "ExpressionStatement",
      "start": 1982,
      "end": 1990,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1982,
        "end": 1989,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1982,
          "end": 1984,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1987,
          "end": 1989,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2001,
      "end": 2009,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2001,
        "end": 2008,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2001,
          "end": 2003,
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2006,
          "end": 2008,
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

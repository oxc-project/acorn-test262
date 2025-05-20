__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 886,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 32,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 32,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 17,
                "end": 32,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 24,
                  "end": 32,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 25,
                      "end": 31
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 24,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 73,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 73,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 51,
                "end": 73,
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 51,
                    "end": 55
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 58,
                    "end": 73,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 65,
                      "end": 73,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 66,
                          "end": 72
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 65,
                      "decorators": [],
                      "name": "Promise",
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
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 116,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 116,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 93,
                "end": 116,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 95,
                    "end": 114,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 96,
                      "end": 114,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 98,
                        "end": 114,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 105,
                          "end": 114,
                          "params": [
                            {
                              "type": "TSUnknownKeyword",
                              "start": 106,
                              "end": 113
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 105,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 117,
      "end": 156,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 136,
        "decorators": [],
        "name": "pf",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 138,
        "end": 156,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 140,
          "end": 156,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 147,
            "end": 156,
            "params": [
              {
                "type": "TSBooleanKeyword",
                "start": 148,
                "end": 155
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 140,
            "end": 147,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 158,
      "end": 361,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 177,
        "end": 361,
        "body": [
          {
            "type": "IfStatement",
            "start": 183,
            "end": 192,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 190,
              "end": 192,
              "body": []
            },
            "test": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "IfStatement",
            "start": 204,
            "end": 215,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 213,
              "end": 215,
              "body": []
            },
            "test": {
              "type": "UnaryExpression",
              "start": 208,
              "end": 211,
              "argument": {
                "type": "UnaryExpression",
                "start": 209,
                "end": 211,
                "argument": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "IfStatement",
            "start": 230,
            "end": 240,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 238,
              "end": 240,
              "body": []
            },
            "test": {
              "type": "Identifier",
              "start": 234,
              "end": 236,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 256,
            "end": 286,
            "directive": null,
            "expression": {
              "type": "ConditionalExpression",
              "start": 256,
              "end": 285,
              "alternate": {
                "type": "MemberExpression",
                "start": 274,
                "end": 285,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 275,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 285,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "consequent": {
                "type": "MemberExpression",
                "start": 260,
                "end": 271,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 261,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 271,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "test": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 291,
            "end": 323,
            "directive": null,
            "expression": {
              "type": "ConditionalExpression",
              "start": 291,
              "end": 322,
              "alternate": {
                "type": "MemberExpression",
                "start": 311,
                "end": 322,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 312,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 322,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "consequent": {
                "type": "MemberExpression",
                "start": 297,
                "end": 308,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 298,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 308,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "test": {
                "type": "UnaryExpression",
                "start": 291,
                "end": 294,
                "argument": {
                  "type": "UnaryExpression",
                  "start": 292,
                  "end": 294,
                  "argument": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 294,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!",
                  "prefix": true
                },
                "operator": "!",
                "prefix": true
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 328,
            "end": 359,
            "directive": null,
            "expression": {
              "type": "ConditionalExpression",
              "start": 328,
              "end": 358,
              "alternate": {
                "type": "MemberExpression",
                "start": 347,
                "end": 358,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 348,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 358,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "consequent": {
                "type": "MemberExpression",
                "start": 333,
                "end": 344,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 334,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 344,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "test": {
                "type": "Identifier",
                "start": 328,
                "end": 330,
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null
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
        "start": 173,
        "end": 174,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 373,
      "end": 578,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 392,
        "end": 578,
        "body": [
          {
            "type": "IfStatement",
            "start": 398,
            "end": 423,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 405,
              "end": 423,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 415,
                  "end": 417,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 416,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 402,
              "end": 403,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "IfStatement",
            "start": 428,
            "end": 454,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 452,
              "end": 454,
              "body": []
            },
            "test": {
              "type": "LogicalExpression",
              "start": 432,
              "end": 450,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 432,
                "end": 433,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 437,
                "end": 450,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 437,
                  "end": 443,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 437,
                    "end": 438,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 443,
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 444,
                  "end": 450,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 459,
            "end": 576,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 466,
              "end": 576,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 476,
                  "end": 570,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 483,
                    "end": 570,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 497,
                        "end": 560,
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 504,
                          "end": 560,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 522,
                              "end": 546,
                              "directive": null,
                              "expression": {
                                "type": "UnaryExpression",
                                "start": 522,
                                "end": 545,
                                "argument": {
                                  "type": "UnaryExpression",
                                  "start": 523,
                                  "end": 545,
                                  "argument": {
                                    "type": "AwaitExpression",
                                    "start": 524,
                                    "end": 545,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 537,
                                      "end": 538,
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "operator": "!",
                                  "prefix": true
                                },
                                "operator": "!",
                                "prefix": true
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "Identifier",
                          "start": 501,
                          "end": 502,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 480,
                    "end": 481,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 389,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 580,
      "end": 719,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 599,
        "end": 719,
        "body": [
          {
            "type": "IfStatement",
            "start": 605,
            "end": 618,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 616,
              "end": 618,
              "body": []
            },
            "test": {
              "type": "MemberExpression",
              "start": 609,
              "end": 614,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 609,
                "end": 612,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 613,
                "end": 614,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 632,
            "end": 678,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 643,
              "end": 678,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 660,
                  "end": 672,
                  "directive": null,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 660,
                    "end": 671,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 666,
                      "end": 671,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 666,
                        "end": 669,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 670,
                        "end": 671,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "MemberExpression",
              "start": 636,
              "end": 641,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 636,
                "end": 639,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 640,
                "end": 641,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 683,
            "end": 711,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 709,
              "end": 711,
              "body": []
            },
            "test": {
              "type": "LogicalExpression",
              "start": 687,
              "end": 707,
              "operator": "&&",
              "left": {
                "type": "MemberExpression",
                "start": 687,
                "end": 692,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 687,
                  "end": 690,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 691,
                  "end": 692,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "AwaitExpression",
                "start": 696,
                "end": 707,
                "argument": {
                  "type": "MemberExpression",
                  "start": 702,
                  "end": 707,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 702,
                    "end": 705,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 706,
                    "end": 707,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
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
        "start": 595,
        "end": 596,
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 721,
      "end": 886,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 757,
        "end": 886,
        "body": [
          {
            "type": "IfStatement",
            "start": 763,
            "end": 812,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 773,
              "end": 812,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 792,
                  "end": 806,
                  "argument": {
                    "type": "Literal",
                    "start": 799,
                    "end": 805,
                    "raw": "\"true\"",
                    "value": "true"
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 767,
              "end": 771,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 767,
                "end": 769,
                "decorators": [],
                "name": "pf",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "IfStatement",
            "start": 817,
            "end": 864,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 827,
              "end": 864,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 846,
                  "end": 858,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 846,
                    "end": 857,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 846,
                      "end": 855,
                      "computed": false,
                      "object": {
                        "type": "CallExpression",
                        "start": 846,
                        "end": 850,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 846,
                          "end": 848,
                          "decorators": [],
                          "name": "pf",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 851,
                        "end": 855,
                        "decorators": [],
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 821,
              "end": 825,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 821,
                "end": 823,
                "decorators": [],
                "name": "pf",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 869,
            "end": 884,
            "argument": {
              "type": "Literal",
              "start": 876,
              "end": 883,
              "raw": "\"false\"",
              "value": "false"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 736,
        "end": 737,
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 739,
        "end": 756,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 741,
          "end": 756,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 748,
            "end": 756,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 749,
                "end": 755
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 741,
            "end": 748,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 887,
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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 32,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 32,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 17,
                "end": 32,
                "typeName": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 24,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 73,
            "name": "p2",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 65,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 116,
            "name": "obj",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 96,
                      "end": 114,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 98,
                        "end": 114,
                        "typeName": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 105,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 117,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 136,
        "name": "pf",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 138,
        "end": 156,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 140,
          "end": 156,
          "typeName": {
            "type": "Identifier",
            "start": 140,
            "end": 147,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 158,
      "end": 361,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 174,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 177,
        "end": 361,
        "body": [
          {
            "type": "IfStatement",
            "start": 183,
            "end": 192,
            "test": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 190,
              "end": 192,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 204,
            "end": 215,
            "test": {
              "type": "UnaryExpression",
              "start": 208,
              "end": 211,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 209,
                "end": 211,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 213,
              "end": 215,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 230,
            "end": 240,
            "test": {
              "type": "Identifier",
              "start": 234,
              "end": 236,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 238,
              "end": 240,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 256,
            "end": 286,
            "expression": {
              "type": "ConditionalExpression",
              "start": 256,
              "end": 285,
              "test": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "consequent": {
                "type": "MemberExpression",
                "start": 260,
                "end": 271,
                "object": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 261,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 271,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "alternate": {
                "type": "MemberExpression",
                "start": 274,
                "end": 285,
                "object": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 275,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 285,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 291,
            "end": 323,
            "expression": {
              "type": "ConditionalExpression",
              "start": 291,
              "end": 322,
              "test": {
                "type": "UnaryExpression",
                "start": 291,
                "end": 294,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "UnaryExpression",
                  "start": 292,
                  "end": 294,
                  "operator": "!",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 294,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "consequent": {
                "type": "MemberExpression",
                "start": 297,
                "end": 308,
                "object": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 298,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 308,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "alternate": {
                "type": "MemberExpression",
                "start": 311,
                "end": 322,
                "object": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 312,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 322,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 328,
            "end": 359,
            "expression": {
              "type": "ConditionalExpression",
              "start": 328,
              "end": 358,
              "test": {
                "type": "Identifier",
                "start": 328,
                "end": 330,
                "name": "p2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "consequent": {
                "type": "MemberExpression",
                "start": 333,
                "end": 344,
                "object": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 334,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 344,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "alternate": {
                "type": "MemberExpression",
                "start": 347,
                "end": 358,
                "object": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 348,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 358,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 373,
      "end": 578,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 389,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 392,
        "end": 578,
        "body": [
          {
            "type": "IfStatement",
            "start": 398,
            "end": 423,
            "test": {
              "type": "Identifier",
              "start": 402,
              "end": 403,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 405,
              "end": 423,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 415,
                  "end": 417,
                  "expression": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 416,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 428,
            "end": 454,
            "test": {
              "type": "LogicalExpression",
              "start": 432,
              "end": 450,
              "left": {
                "type": "Identifier",
                "start": 432,
                "end": 433,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "start": 437,
                "end": 450,
                "object": {
                  "type": "MemberExpression",
                  "start": 437,
                  "end": 443,
                  "object": {
                    "type": "Identifier",
                    "start": 437,
                    "end": 438,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 443,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 444,
                  "end": 450,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 452,
              "end": 454,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 459,
            "end": 576,
            "test": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 466,
              "end": 576,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 476,
                  "end": 570,
                  "test": {
                    "type": "Identifier",
                    "start": 480,
                    "end": 481,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 483,
                    "end": 570,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 497,
                        "end": 560,
                        "test": {
                          "type": "Identifier",
                          "start": 501,
                          "end": 502,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 504,
                          "end": 560,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 522,
                              "end": 546,
                              "expression": {
                                "type": "UnaryExpression",
                                "start": 522,
                                "end": 545,
                                "operator": "!",
                                "prefix": true,
                                "argument": {
                                  "type": "UnaryExpression",
                                  "start": 523,
                                  "end": 545,
                                  "operator": "!",
                                  "prefix": true,
                                  "argument": {
                                    "type": "AwaitExpression",
                                    "start": 524,
                                    "end": 545,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 537,
                                      "end": 538,
                                      "name": "p",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  }
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "alternate": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 580,
      "end": 719,
      "id": {
        "type": "Identifier",
        "start": 595,
        "end": 596,
        "name": "h",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 599,
        "end": 719,
        "body": [
          {
            "type": "IfStatement",
            "start": 605,
            "end": 618,
            "test": {
              "type": "MemberExpression",
              "start": 609,
              "end": 614,
              "object": {
                "type": "Identifier",
                "start": 609,
                "end": 612,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 613,
                "end": 614,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 616,
              "end": 618,
              "body": []
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 632,
            "end": 678,
            "test": {
              "type": "MemberExpression",
              "start": 636,
              "end": 641,
              "object": {
                "type": "Identifier",
                "start": 636,
                "end": 639,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 640,
                "end": 641,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 643,
              "end": 678,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 660,
                  "end": 672,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 660,
                    "end": 671,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 666,
                      "end": 671,
                      "object": {
                        "type": "Identifier",
                        "start": 666,
                        "end": 669,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 670,
                        "end": 671,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 683,
            "end": 711,
            "test": {
              "type": "LogicalExpression",
              "start": 687,
              "end": 707,
              "left": {
                "type": "MemberExpression",
                "start": 687,
                "end": 692,
                "object": {
                  "type": "Identifier",
                  "start": 687,
                  "end": 690,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 691,
                  "end": 692,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "&&",
              "right": {
                "type": "AwaitExpression",
                "start": 696,
                "end": 707,
                "argument": {
                  "type": "MemberExpression",
                  "start": 702,
                  "end": 707,
                  "object": {
                    "type": "Identifier",
                    "start": 702,
                    "end": 705,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 706,
                    "end": 707,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 709,
              "end": 711,
              "body": []
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 721,
      "end": 886,
      "id": {
        "type": "Identifier",
        "start": 736,
        "end": 737,
        "name": "i",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 757,
        "end": 886,
        "body": [
          {
            "type": "IfStatement",
            "start": 763,
            "end": 812,
            "test": {
              "type": "CallExpression",
              "start": 767,
              "end": 771,
              "callee": {
                "type": "Identifier",
                "start": 767,
                "end": 769,
                "name": "pf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
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
                    "value": "true",
                    "raw": "\"true\""
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 817,
            "end": 864,
            "test": {
              "type": "CallExpression",
              "start": 821,
              "end": 825,
              "callee": {
                "type": "Identifier",
                "start": 821,
                "end": 823,
                "name": "pf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 827,
              "end": 864,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 846,
                  "end": 858,
                  "expression": {
                    "type": "CallExpression",
                    "start": 846,
                    "end": 857,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 846,
                      "end": 855,
                      "object": {
                        "type": "CallExpression",
                        "start": 846,
                        "end": 850,
                        "callee": {
                          "type": "Identifier",
                          "start": 846,
                          "end": 848,
                          "name": "pf",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 851,
                        "end": 855,
                        "name": "then",
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
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 869,
            "end": 884,
            "argument": {
              "type": "Literal",
              "start": 876,
              "end": 883,
              "value": "false",
              "raw": "\"false\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 739,
        "end": 756,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 741,
          "end": 756,
          "typeName": {
            "type": "Identifier",
            "start": 741,
            "end": 748,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

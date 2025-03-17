__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 107,
  "end": 4616,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 387,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 386,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 115,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 118,
            "end": 386,
            "properties": [
              {
                "type": "Property",
                "start": 124,
                "end": 128,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 125,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 127,
                  "end": 128,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 134,
                "end": 168,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 135,
                  "end": 168,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 138,
                    "end": 168,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 148,
                        "end": 162,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 155,
                          "end": 161,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 155,
                            "end": 159
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 160,
                            "end": 161,
                            "decorators": [],
                            "name": "a",
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
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 174,
                "end": 184,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 177,
                  "end": 184,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              },
              {
                "type": "Property",
                "start": 190,
                "end": 246,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 191,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 193,
                  "end": 246,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 203,
                      "end": 240,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 203,
                        "end": 204,
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 204,
                        "end": 240,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 207,
                          "end": 240,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 221,
                              "end": 230,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 221,
                                "end": 229,
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 221,
                                  "end": 227,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 221,
                                    "end": 225
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 226,
                                    "end": 227,
                                    "decorators": [],
                                    "name": "g",
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
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 252,
                "end": 290,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 257,
                  "end": 290,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 260,
                    "end": 290,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 270,
                        "end": 284,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 277,
                          "end": 283,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 277,
                            "end": 281
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 282,
                            "end": 283,
                            "decorators": [],
                            "name": "a",
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
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 296,
                "end": 334,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 301,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 301,
                  "end": 334,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 304,
                    "end": 334,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 314,
                        "end": 328,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 321,
                          "end": 327,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 321,
                            "end": 325
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 326,
                            "end": 327,
                            "decorators": [],
                            "name": "b",
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
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 340,
                "end": 384,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 345,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 345,
                  "end": 384,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 353,
                    "end": 384,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 363,
                        "end": 378,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 363,
                          "end": 377,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 363,
                            "end": 369,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 363,
                              "end": 367
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 368,
                              "end": 369,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 372,
                            "end": 377,
                            "decorators": [],
                            "name": "value",
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
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 346,
                      "end": 351,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 484,
      "end": 601,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 489,
        "end": 494,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 497,
        "end": 601,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 503,
            "end": 513,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 503,
              "end": 504,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 504,
              "end": 512,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 506,
                "end": 512
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 518,
            "end": 528,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 518,
              "end": 519,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 519,
              "end": 527,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 521,
                "end": 527
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 533,
            "end": 544,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 533,
              "end": 534,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 535,
              "end": 543,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 537,
                "end": 543
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 549,
            "end": 599,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 549,
              "end": 555,
              "decorators": [],
              "name": "moveBy",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 556,
                "end": 566,
                "decorators": [],
                "name": "dx",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 558,
                  "end": 566,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 560,
                    "end": 566
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 568,
                "end": 578,
                "decorators": [],
                "name": "dy",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 570,
                  "end": 578,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 572,
                    "end": 578
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 580,
                "end": 591,
                "decorators": [],
                "name": "dz",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 583,
                  "end": 591,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 585,
                    "end": 591
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 592,
              "end": 598,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 594,
                "end": 598
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 603,
      "end": 784,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 607,
          "end": 783,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 607,
            "end": 616,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 609,
              "end": 616,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 611,
                "end": 616,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 611,
                  "end": 616,
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 619,
            "end": 783,
            "properties": [
              {
                "type": "Property",
                "start": 625,
                "end": 630,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 625,
                  "end": 626,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 628,
                  "end": 630,
                  "raw": "10",
                  "value": 10
                }
              },
              {
                "type": "Property",
                "start": 636,
                "end": 641,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 637,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 639,
                  "end": 641,
                  "raw": "20",
                  "value": 20
                }
              },
              {
                "type": "Property",
                "start": 647,
                "end": 781,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 647,
                  "end": 653,
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 653,
                  "end": 781,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 666,
                    "end": 781,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 676,
                        "end": 689,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 676,
                          "end": 688,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 676,
                            "end": 682,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 676,
                              "end": 680
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 681,
                              "end": 682,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 686,
                            "end": 688,
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 698,
                        "end": 711,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 698,
                          "end": 710,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 698,
                            "end": 704,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 698,
                              "end": 702
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 703,
                              "end": 704,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 708,
                            "end": 710,
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "start": 720,
                        "end": 775,
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 738,
                          "end": 775,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 752,
                              "end": 765,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 752,
                                "end": 764,
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 752,
                                  "end": 758,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 752,
                                    "end": 756
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 757,
                                    "end": 758,
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 762,
                                  "end": 764,
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "LogicalExpression",
                          "start": 724,
                          "end": 736,
                          "operator": "&&",
                          "left": {
                            "type": "MemberExpression",
                            "start": 724,
                            "end": 730,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 724,
                              "end": 728
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 729,
                              "end": 730,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 734,
                            "end": 736,
                            "decorators": [],
                            "name": "dz",
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
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 654,
                      "end": 656,
                      "decorators": [],
                      "name": "dx",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 658,
                      "end": 660,
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 662,
                      "end": 664,
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
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
      "start": 786,
      "end": 974,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 790,
          "end": 973,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 790,
            "end": 806,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 792,
              "end": 806,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 794,
                "end": 806,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 794,
                    "end": 799,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 794,
                      "end": 799,
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 802,
                    "end": 806
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 809,
            "end": 973,
            "properties": [
              {
                "type": "Property",
                "start": 815,
                "end": 820,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 815,
                  "end": 816,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 818,
                  "end": 820,
                  "raw": "10",
                  "value": 10
                }
              },
              {
                "type": "Property",
                "start": 826,
                "end": 831,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 826,
                  "end": 827,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 829,
                  "end": 831,
                  "raw": "20",
                  "value": 20
                }
              },
              {
                "type": "Property",
                "start": 837,
                "end": 971,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 837,
                  "end": 843,
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 843,
                  "end": 971,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 856,
                    "end": 971,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 866,
                        "end": 879,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 866,
                          "end": 878,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 866,
                            "end": 872,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 866,
                              "end": 870
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 871,
                              "end": 872,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 876,
                            "end": 878,
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 888,
                        "end": 901,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 888,
                          "end": 900,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 888,
                            "end": 894,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 888,
                              "end": 892
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 893,
                              "end": 894,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 898,
                            "end": 900,
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "start": 910,
                        "end": 965,
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 928,
                          "end": 965,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 942,
                              "end": 955,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 942,
                                "end": 954,
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 942,
                                  "end": 948,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 942,
                                    "end": 946
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 947,
                                    "end": 948,
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 952,
                                  "end": 954,
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "LogicalExpression",
                          "start": 914,
                          "end": 926,
                          "operator": "&&",
                          "left": {
                            "type": "MemberExpression",
                            "start": 914,
                            "end": 920,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 914,
                              "end": 918
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 919,
                              "end": 920,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 924,
                            "end": 926,
                            "decorators": [],
                            "name": "dz",
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
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 844,
                      "end": 846,
                      "decorators": [],
                      "name": "dx",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 848,
                      "end": 850,
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 852,
                      "end": 854,
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
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
      "start": 976,
      "end": 1169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 980,
          "end": 1168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 980,
            "end": 1001,
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 982,
              "end": 1001,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 984,
                "end": 1001,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 984,
                    "end": 989,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 984,
                      "end": 989,
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 992,
                    "end": 1001
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1004,
            "end": 1168,
            "properties": [
              {
                "type": "Property",
                "start": 1010,
                "end": 1015,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1010,
                  "end": 1011,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1013,
                  "end": 1015,
                  "raw": "10",
                  "value": 10
                }
              },
              {
                "type": "Property",
                "start": 1021,
                "end": 1026,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1021,
                  "end": 1022,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1024,
                  "end": 1026,
                  "raw": "20",
                  "value": 20
                }
              },
              {
                "type": "Property",
                "start": 1032,
                "end": 1166,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1032,
                  "end": 1038,
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1038,
                  "end": 1166,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1051,
                    "end": 1166,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1061,
                        "end": 1074,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1061,
                          "end": 1073,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1061,
                            "end": 1067,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1061,
                              "end": 1065
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1066,
                              "end": 1067,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1071,
                            "end": 1073,
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1083,
                        "end": 1096,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1083,
                          "end": 1095,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1083,
                            "end": 1089,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1083,
                              "end": 1087
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1088,
                              "end": 1089,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1093,
                            "end": 1095,
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "start": 1105,
                        "end": 1160,
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 1123,
                          "end": 1160,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1137,
                              "end": 1150,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 1137,
                                "end": 1149,
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 1137,
                                  "end": 1143,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1137,
                                    "end": 1141
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1142,
                                    "end": 1143,
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 1147,
                                  "end": 1149,
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "LogicalExpression",
                          "start": 1109,
                          "end": 1121,
                          "operator": "&&",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1109,
                            "end": 1115,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1109,
                              "end": 1113
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1114,
                              "end": 1115,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1119,
                            "end": 1121,
                            "decorators": [],
                            "name": "dz",
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
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1039,
                      "end": 1041,
                      "decorators": [],
                      "name": "dx",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1043,
                      "end": 1045,
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1047,
                      "end": 1049,
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
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
      "start": 1171,
      "end": 1371,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1175,
          "end": 1370,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1175,
            "end": 1203,
            "decorators": [],
            "name": "p4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1177,
              "end": 1203,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1179,
                "end": 1203,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1179,
                    "end": 1184,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1179,
                      "end": 1184,
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 1187,
                    "end": 1191
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1194,
                    "end": 1203
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1206,
            "end": 1370,
            "properties": [
              {
                "type": "Property",
                "start": 1212,
                "end": 1217,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1212,
                  "end": 1213,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1215,
                  "end": 1217,
                  "raw": "10",
                  "value": 10
                }
              },
              {
                "type": "Property",
                "start": 1223,
                "end": 1228,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1223,
                  "end": 1224,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1226,
                  "end": 1228,
                  "raw": "20",
                  "value": 20
                }
              },
              {
                "type": "Property",
                "start": 1234,
                "end": 1368,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1234,
                  "end": 1240,
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1240,
                  "end": 1368,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1253,
                    "end": 1368,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1263,
                        "end": 1276,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1263,
                          "end": 1275,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1263,
                            "end": 1269,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1263,
                              "end": 1267
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1268,
                              "end": 1269,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1273,
                            "end": 1275,
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1285,
                        "end": 1298,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1285,
                          "end": 1297,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1285,
                            "end": 1291,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1285,
                              "end": 1289
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1290,
                              "end": 1291,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1295,
                            "end": 1297,
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "start": 1307,
                        "end": 1362,
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 1325,
                          "end": 1362,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1339,
                              "end": 1352,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 1339,
                                "end": 1351,
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 1339,
                                  "end": 1345,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1339,
                                    "end": 1343
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1344,
                                    "end": 1345,
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 1349,
                                  "end": 1351,
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "LogicalExpression",
                          "start": 1311,
                          "end": 1323,
                          "operator": "&&",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1311,
                            "end": 1317,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1311,
                              "end": 1315
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1316,
                              "end": 1317,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1321,
                            "end": 1323,
                            "decorators": [],
                            "name": "dz",
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
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1241,
                      "end": 1243,
                      "decorators": [],
                      "name": "dx",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1245,
                      "end": 1247,
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1249,
                      "end": 1251,
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
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
      "type": "TSDeclareFunction",
      "start": 1373,
      "end": 1409,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1390,
        "end": 1392,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1393,
          "end": 1401,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1394,
            "end": 1401,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1396,
              "end": 1401,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1396,
                "end": 1401,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1402,
        "end": 1408,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1404,
          "end": 1408
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1411,
      "end": 1580,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1411,
        "end": 1579,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1414,
            "end": 1578,
            "properties": [
              {
                "type": "Property",
                "start": 1420,
                "end": 1425,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1420,
                  "end": 1421,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1423,
                  "end": 1425,
                  "raw": "10",
                  "value": 10
                }
              },
              {
                "type": "Property",
                "start": 1431,
                "end": 1436,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1431,
                  "end": 1432,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1434,
                  "end": 1436,
                  "raw": "20",
                  "value": 20
                }
              },
              {
                "type": "Property",
                "start": 1442,
                "end": 1576,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1442,
                  "end": 1448,
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1448,
                  "end": 1576,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1461,
                    "end": 1576,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1471,
                        "end": 1484,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1471,
                          "end": 1483,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1471,
                            "end": 1477,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1471,
                              "end": 1475
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1476,
                              "end": 1477,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1481,
                            "end": 1483,
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1493,
                        "end": 1506,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1493,
                          "end": 1505,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1493,
                            "end": 1499,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1493,
                              "end": 1497
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1498,
                              "end": 1499,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1503,
                            "end": 1505,
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "start": 1515,
                        "end": 1570,
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 1533,
                          "end": 1570,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1547,
                              "end": 1560,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 1547,
                                "end": 1559,
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 1547,
                                  "end": 1553,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1547,
                                    "end": 1551
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1552,
                                    "end": 1553,
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 1557,
                                  "end": 1559,
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "LogicalExpression",
                          "start": 1519,
                          "end": 1531,
                          "operator": "&&",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1519,
                            "end": 1525,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1519,
                              "end": 1523
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1524,
                              "end": 1525,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1529,
                            "end": 1531,
                            "decorators": [],
                            "name": "dz",
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
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1449,
                      "end": 1451,
                      "decorators": [],
                      "name": "dx",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1453,
                      "end": 1455,
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1457,
                      "end": 1459,
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1411,
          "end": 1413,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1582,
      "end": 1637,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1599,
        "end": 1601,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1602,
          "end": 1629,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1603,
            "end": 1629,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1605,
              "end": 1629,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1605,
                  "end": 1610,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1605,
                    "end": 1610,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1613,
                  "end": 1617
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1620,
                  "end": 1629
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1630,
        "end": 1636,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1632,
          "end": 1636
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1639,
      "end": 1808,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1639,
        "end": 1807,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1642,
            "end": 1806,
            "properties": [
              {
                "type": "Property",
                "start": 1648,
                "end": 1653,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1648,
                  "end": 1649,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1651,
                  "end": 1653,
                  "raw": "10",
                  "value": 10
                }
              },
              {
                "type": "Property",
                "start": 1659,
                "end": 1664,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1659,
                  "end": 1660,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1662,
                  "end": 1664,
                  "raw": "20",
                  "value": 20
                }
              },
              {
                "type": "Property",
                "start": 1670,
                "end": 1804,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1670,
                  "end": 1676,
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1676,
                  "end": 1804,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1689,
                    "end": 1804,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1699,
                        "end": 1712,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1699,
                          "end": 1711,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1699,
                            "end": 1705,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1699,
                              "end": 1703
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1704,
                              "end": 1705,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1709,
                            "end": 1711,
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 1721,
                        "end": 1734,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1721,
                          "end": 1733,
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1721,
                            "end": 1727,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1721,
                              "end": 1725
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1726,
                              "end": 1727,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1731,
                            "end": 1733,
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "IfStatement",
                        "start": 1743,
                        "end": 1798,
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 1761,
                          "end": 1798,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1775,
                              "end": 1788,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 1775,
                                "end": 1787,
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 1775,
                                  "end": 1781,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1775,
                                    "end": 1779
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1780,
                                    "end": 1781,
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 1785,
                                  "end": 1787,
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "LogicalExpression",
                          "start": 1747,
                          "end": 1759,
                          "operator": "&&",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1747,
                            "end": 1753,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1747,
                              "end": 1751
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1752,
                              "end": 1753,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1757,
                            "end": 1759,
                            "decorators": [],
                            "name": "dz",
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
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1677,
                      "end": 1679,
                      "decorators": [],
                      "name": "dx",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1681,
                      "end": 1683,
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1685,
                      "end": 1687,
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1639,
          "end": 1641,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1925,
      "end": 2046,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1930,
        "end": 1946,
        "decorators": [],
        "name": "ObjectDescriptor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1955,
        "end": 2046,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1961,
            "end": 1970,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1961,
              "end": 1965,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1966,
              "end": 1969,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1968,
                "end": 1969,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1968,
                  "end": 1969,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1975,
            "end": 2005,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1975,
              "end": 1982,
              "decorators": [],
              "name": "methods",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1983,
              "end": 2004,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 1985,
                "end": 2004,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1985,
                    "end": 1986,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1985,
                      "end": 1986,
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1989,
                    "end": 2004,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1997,
                      "end": 2004,
                      "params": [
                        {
                          "type": "TSIntersectionType",
                          "start": 1998,
                          "end": 2003,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 1998,
                              "end": 1999,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1998,
                                "end": 1999,
                                "decorators": [],
                                "name": "D",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 2002,
                              "end": 2003,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2002,
                                "end": 2003,
                                "decorators": [],
                                "name": "M",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1989,
                      "end": 1997,
                      "decorators": [],
                      "name": "ThisType",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1946,
        "end": 1952,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1947,
            "end": 1948,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1947,
              "end": 1948,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1950,
            "end": 1951,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1950,
              "end": 1951,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2048,
      "end": 2119,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2065,
        "end": 2075,
        "decorators": [],
        "name": "makeObject",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2082,
          "end": 2110,
          "decorators": [],
          "name": "desc",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2086,
            "end": 2110,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2088,
              "end": 2110,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2104,
                "end": 2110,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2105,
                    "end": 2106,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2105,
                      "end": 2106,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2108,
                    "end": 2109,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2108,
                      "end": 2109,
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2088,
                "end": 2104,
                "decorators": [],
                "name": "ObjectDescriptor",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2111,
        "end": 2118,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 2113,
          "end": 2118,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2113,
              "end": 2114,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2113,
                "end": 2114,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2117,
              "end": 2118,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2117,
                "end": 2118,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2075,
        "end": 2081,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2076,
            "end": 2077,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2076,
              "end": 2077,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2079,
            "end": 2080,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2079,
              "end": 2080,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2121,
      "end": 2344,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2125,
          "end": 2343,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2125,
            "end": 2127,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2130,
            "end": 2343,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 2141,
                "end": 2342,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2147,
                    "end": 2167,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2147,
                      "end": 2151,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 2153,
                      "end": 2167,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2155,
                          "end": 2159,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2155,
                            "end": 2156,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 2158,
                            "end": 2159,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "Property",
                          "start": 2161,
                          "end": 2165,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2161,
                            "end": 2162,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 2164,
                            "end": 2165,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 2173,
                    "end": 2340,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2173,
                      "end": 2180,
                      "decorators": [],
                      "name": "methods",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 2182,
                      "end": 2340,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2192,
                          "end": 2334,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2192,
                            "end": 2198,
                            "decorators": [],
                            "name": "moveBy",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2198,
                            "end": 2334,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 2223,
                              "end": 2334,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2237,
                                  "end": 2250,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2237,
                                    "end": 2249,
                                    "operator": "+=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 2237,
                                      "end": 2243,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2237,
                                        "end": 2241
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2242,
                                        "end": 2243,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 2247,
                                      "end": 2249,
                                      "decorators": [],
                                      "name": "dx",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2287,
                                  "end": 2300,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2287,
                                    "end": 2299,
                                    "operator": "+=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 2287,
                                      "end": 2293,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2287,
                                        "end": 2291
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2292,
                                        "end": 2293,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 2297,
                                      "end": 2299,
                                      "decorators": [],
                                      "name": "dy",
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
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2199,
                                "end": 2209,
                                "decorators": [],
                                "name": "dx",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2201,
                                  "end": 2209,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 2203,
                                    "end": 2209
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 2211,
                                "end": 2221,
                                "decorators": [],
                                "name": "dy",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2213,
                                  "end": 2221,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 2215,
                                    "end": 2221
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
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
              "start": 2130,
              "end": 2140,
              "decorators": [],
              "name": "makeObject",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2471,
      "end": 2554,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2476,
        "end": 2493,
        "decorators": [],
        "name": "ObjectDescriptor2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 2502,
        "end": 2554,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2502,
            "end": 2517,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2510,
              "end": 2517,
              "params": [
                {
                  "type": "TSIntersectionType",
                  "start": 2511,
                  "end": 2516,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 2511,
                      "end": 2512,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2511,
                        "end": 2512,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2515,
                      "end": 2516,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2515,
                        "end": 2516,
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 2502,
              "end": 2510,
              "decorators": [],
              "name": "ThisType",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 2520,
            "end": 2554,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2526,
                "end": 2535,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2526,
                  "end": 2530,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2531,
                  "end": 2534,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2533,
                    "end": 2534,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2533,
                      "end": 2534,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 2540,
                "end": 2552,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2540,
                  "end": 2547,
                  "decorators": [],
                  "name": "methods",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2548,
                  "end": 2551,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2550,
                    "end": 2551,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2550,
                      "end": 2551,
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2493,
        "end": 2499,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2494,
            "end": 2495,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2494,
              "end": 2495,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2497,
            "end": 2498,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2497,
              "end": 2498,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2556,
      "end": 2628,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2573,
        "end": 2584,
        "decorators": [],
        "name": "makeObject2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2591,
          "end": 2619,
          "decorators": [],
          "name": "desc",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2595,
            "end": 2619,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2597,
              "end": 2619,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2613,
                "end": 2619,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2614,
                    "end": 2615,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2614,
                      "end": 2615,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2617,
                    "end": 2618,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2617,
                      "end": 2618,
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2597,
                "end": 2613,
                "decorators": [],
                "name": "ObjectDescriptor",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2620,
        "end": 2627,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 2622,
          "end": 2627,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2622,
              "end": 2623,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2622,
                "end": 2623,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2626,
              "end": 2627,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2626,
                "end": 2627,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2584,
        "end": 2590,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2585,
            "end": 2586,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2585,
              "end": 2586,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2588,
            "end": 2589,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2588,
              "end": 2589,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2630,
      "end": 2854,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2634,
          "end": 2853,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2634,
            "end": 2636,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2639,
            "end": 2853,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 2651,
                "end": 2852,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2657,
                    "end": 2677,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2657,
                      "end": 2661,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 2663,
                      "end": 2677,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2665,
                          "end": 2669,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2665,
                            "end": 2666,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 2668,
                            "end": 2669,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "Property",
                          "start": 2671,
                          "end": 2675,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2671,
                            "end": 2672,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 2674,
                            "end": 2675,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 2683,
                    "end": 2850,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2683,
                      "end": 2690,
                      "decorators": [],
                      "name": "methods",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 2692,
                      "end": 2850,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2702,
                          "end": 2844,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2702,
                            "end": 2708,
                            "decorators": [],
                            "name": "moveBy",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 2708,
                            "end": 2844,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 2733,
                              "end": 2844,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2747,
                                  "end": 2760,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2747,
                                    "end": 2759,
                                    "operator": "+=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 2747,
                                      "end": 2753,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2747,
                                        "end": 2751
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2752,
                                        "end": 2753,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 2757,
                                      "end": 2759,
                                      "decorators": [],
                                      "name": "dx",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2797,
                                  "end": 2810,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2797,
                                    "end": 2809,
                                    "operator": "+=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 2797,
                                      "end": 2803,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2797,
                                        "end": 2801
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2802,
                                        "end": 2803,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 2807,
                                      "end": 2809,
                                      "decorators": [],
                                      "name": "dy",
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
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2709,
                                "end": 2719,
                                "decorators": [],
                                "name": "dx",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2711,
                                  "end": 2719,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 2713,
                                    "end": 2719
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 2721,
                                "end": 2731,
                                "decorators": [],
                                "name": "dy",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2723,
                                  "end": 2731,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 2725,
                                    "end": 2731
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
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
              "start": 2639,
              "end": 2650,
              "decorators": [],
              "name": "makeObject2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2935,
      "end": 3013,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2940,
        "end": 2948,
        "decorators": [],
        "name": "PropDesc",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2954,
        "end": 3013,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2960,
            "end": 2970,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2960,
              "end": 2965,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2966,
              "end": 2969,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2968,
                "end": 2969,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2968,
                  "end": 2969,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 2975,
            "end": 2985,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2975,
              "end": 2978,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": true,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2981,
              "end": 2984,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2983,
                "end": 2984,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2983,
                  "end": 2984,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 2990,
            "end": 3011,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2990,
              "end": 2993,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": true,
            "params": [
              {
                "type": "Identifier",
                "start": 2995,
                "end": 3003,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3000,
                  "end": 3003,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3002,
                    "end": 3003,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3002,
                      "end": 3003,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3004,
              "end": 3010,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3006,
                "end": 3010
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2948,
        "end": 2951,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2949,
            "end": 2950,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2949,
              "end": 2950,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3015,
      "end": 3076,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3020,
        "end": 3031,
        "decorators": [],
        "name": "PropDescMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 3037,
        "end": 3076,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 3049,
          "end": 3056,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 3055,
            "end": 3056,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 3055,
              "end": 3056,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 3044,
          "end": 3045,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3059,
          "end": 3073,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3067,
            "end": 3073,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 3068,
                "end": 3072,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3070,
                  "end": 3071,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3070,
                    "end": 3071,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3068,
                  "end": 3069,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3068,
                    "end": 3069,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3059,
            "end": 3067,
            "decorators": [],
            "name": "PropDesc",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3031,
        "end": 3034,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3032,
            "end": 3033,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3032,
              "end": 3033,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3078,
      "end": 3198,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3095,
        "end": 3105,
        "decorators": [],
        "name": "defineProp",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3130,
          "end": 3136,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3133,
            "end": 3136,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3135,
              "end": 3136,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3135,
                "end": 3136,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3138,
          "end": 3145,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3142,
            "end": 3145,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3144,
              "end": 3145,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3144,
                "end": 3145,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3147,
          "end": 3178,
          "decorators": [],
          "name": "desc",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3151,
            "end": 3178,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 3153,
              "end": 3178,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3153,
                  "end": 3164,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3161,
                    "end": 3164,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3162,
                        "end": 3163,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3162,
                          "end": 3163,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 3153,
                    "end": 3161,
                    "decorators": [],
                    "name": "PropDesc",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 3167,
                  "end": 3178,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3175,
                    "end": 3178,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3176,
                        "end": 3177,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3176,
                          "end": 3177,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 3167,
                    "end": 3175,
                    "decorators": [],
                    "name": "ThisType",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3179,
        "end": 3197,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 3181,
          "end": 3197,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 3181,
              "end": 3182,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3181,
                "end": 3182,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 3185,
              "end": 3197,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3191,
                "end": 3197,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3192,
                    "end": 3193,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3192,
                      "end": 3193,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3195,
                    "end": 3196,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3195,
                      "end": 3196,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3185,
                "end": 3191,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3105,
        "end": 3129,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3106,
            "end": 3107,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3106,
              "end": 3107,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3109,
            "end": 3125,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3119,
              "end": 3125
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3109,
              "end": 3110,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3127,
            "end": 3128,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3127,
              "end": 3128,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3200,
      "end": 3287,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3217,
        "end": 3228,
        "decorators": [],
        "name": "defineProps",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3235,
          "end": 3241,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3238,
            "end": 3241,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3240,
              "end": 3241,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3240,
                "end": 3241,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3243,
          "end": 3278,
          "decorators": [],
          "name": "descs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3248,
            "end": 3278,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 3250,
              "end": 3278,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3250,
                  "end": 3264,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3261,
                    "end": 3264,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3262,
                        "end": 3263,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3262,
                          "end": 3263,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 3250,
                    "end": 3261,
                    "decorators": [],
                    "name": "PropDescMap",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 3267,
                  "end": 3278,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3275,
                    "end": 3278,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 3276,
                        "end": 3277,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3276,
                          "end": 3277,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 3267,
                    "end": 3275,
                    "decorators": [],
                    "name": "ThisType",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3279,
        "end": 3286,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 3281,
          "end": 3286,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 3281,
              "end": 3282,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3281,
                "end": 3282,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 3285,
              "end": 3286,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3285,
                "end": 3286,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3228,
        "end": 3234,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3229,
            "end": 3230,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3229,
              "end": 3230,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3232,
            "end": 3233,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3232,
              "end": 3233,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3289,
      "end": 3336,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3293,
          "end": 3335,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3293,
            "end": 3296,
            "decorators": [],
            "name": "p10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3299,
            "end": 3335,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3310,
                "end": 3312,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 3314,
                "end": 3319,
                "raw": "\"foo\"",
                "value": "foo"
              },
              {
                "type": "ObjectExpression",
                "start": 3321,
                "end": 3334,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3323,
                    "end": 3332,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3323,
                      "end": 3328,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 3330,
                      "end": 3332,
                      "raw": "42",
                      "value": 42
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3299,
              "end": 3309,
              "decorators": [],
              "name": "defineProp",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 3337,
      "end": 3359,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3337,
        "end": 3358,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3337,
          "end": 3344,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3337,
            "end": 3340,
            "decorators": [],
            "name": "p10",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3341,
            "end": 3344,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 3347,
          "end": 3358,
          "operator": "+",
          "left": {
            "type": "MemberExpression",
            "start": 3347,
            "end": 3354,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3347,
              "end": 3350,
              "decorators": [],
              "name": "p10",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3351,
              "end": 3354,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Literal",
            "start": 3357,
            "end": 3358,
            "raw": "1",
            "value": 1
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3361,
      "end": 3495,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3365,
          "end": 3494,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3365,
            "end": 3368,
            "decorators": [],
            "name": "p11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3371,
            "end": 3494,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3382,
                "end": 3384,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 3386,
                "end": 3391,
                "raw": "\"bar\"",
                "value": "bar"
              },
              {
                "type": "ObjectExpression",
                "start": 3393,
                "end": 3493,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3399,
                    "end": 3435,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3399,
                      "end": 3402,
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 3402,
                      "end": 3435,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 3405,
                        "end": 3435,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 3415,
                            "end": 3429,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 3422,
                              "end": 3428,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 3422,
                                "end": 3426
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 3427,
                                "end": 3428,
                                "decorators": [],
                                "name": "x",
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
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 3441,
                    "end": 3491,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3441,
                      "end": 3444,
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 3444,
                      "end": 3491,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 3460,
                        "end": 3491,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 3470,
                            "end": 3485,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 3470,
                              "end": 3484,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 3470,
                                "end": 3476,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3470,
                                  "end": 3474
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3475,
                                  "end": 3476,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3479,
                                "end": 3484,
                                "decorators": [],
                                "name": "value",
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
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3445,
                          "end": 3458,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3450,
                            "end": 3458,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3452,
                              "end": 3458
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3371,
              "end": 3381,
              "decorators": [],
              "name": "defineProp",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 3496,
      "end": 3518,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3496,
        "end": 3517,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3496,
          "end": 3503,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3496,
            "end": 3499,
            "decorators": [],
            "name": "p11",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3500,
            "end": 3503,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 3506,
          "end": 3517,
          "operator": "+",
          "left": {
            "type": "MemberExpression",
            "start": 3506,
            "end": 3513,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3506,
              "end": 3509,
              "decorators": [],
              "name": "p11",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3510,
              "end": 3513,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Literal",
            "start": 3516,
            "end": 3517,
            "raw": "1",
            "value": 1
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3520,
      "end": 3733,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3524,
          "end": 3732,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3524,
            "end": 3527,
            "decorators": [],
            "name": "p12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3530,
            "end": 3732,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3542,
                "end": 3544,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ObjectExpression",
                "start": 3546,
                "end": 3731,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3552,
                    "end": 3582,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3552,
                      "end": 3555,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 3557,
                      "end": 3582,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3567,
                          "end": 3576,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3567,
                            "end": 3572,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 3574,
                            "end": 3576,
                            "raw": "42",
                            "value": 42
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 3588,
                    "end": 3729,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3588,
                      "end": 3591,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 3593,
                      "end": 3729,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3603,
                          "end": 3655,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3603,
                            "end": 3606,
                            "decorators": [],
                            "name": "get",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 3606,
                            "end": 3655,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 3617,
                              "end": 3655,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 3631,
                                  "end": 3645,
                                  "argument": {
                                    "type": "MemberExpression",
                                    "start": 3638,
                                    "end": 3644,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 3638,
                                      "end": 3642
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3643,
                                      "end": 3644,
                                      "decorators": [],
                                      "name": "x",
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
                            "id": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3608,
                              "end": 3616,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3610,
                                "end": 3616
                              }
                            },
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 3665,
                          "end": 3723,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3665,
                            "end": 3668,
                            "decorators": [],
                            "name": "set",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 3668,
                            "end": 3723,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 3684,
                              "end": 3723,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 3698,
                                  "end": 3713,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 3698,
                                    "end": 3712,
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 3698,
                                      "end": 3704,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 3698,
                                        "end": 3702
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 3703,
                                        "end": 3704,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 3707,
                                      "end": 3712,
                                      "decorators": [],
                                      "name": "value",
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
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3669,
                                "end": 3682,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3674,
                                  "end": 3682,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 3676,
                                    "end": 3682
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
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
              "start": 3530,
              "end": 3541,
              "decorators": [],
              "name": "defineProps",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 3734,
      "end": 3756,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3734,
        "end": 3755,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3734,
          "end": 3741,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3734,
            "end": 3737,
            "decorators": [],
            "name": "p12",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3738,
            "end": 3741,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 3744,
          "end": 3755,
          "operator": "+",
          "left": {
            "type": "MemberExpression",
            "start": 3744,
            "end": 3751,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3744,
              "end": 3747,
              "decorators": [],
              "name": "p12",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3748,
              "end": 3751,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Literal",
            "start": 3754,
            "end": 3755,
            "raw": "1",
            "value": 1
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3757,
      "end": 3779,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3757,
        "end": 3778,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 3757,
          "end": 3764,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3757,
            "end": 3760,
            "decorators": [],
            "name": "p12",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3761,
            "end": 3764,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 3767,
          "end": 3778,
          "operator": "+",
          "left": {
            "type": "MemberExpression",
            "start": 3767,
            "end": 3774,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 3767,
              "end": 3770,
              "decorators": [],
              "name": "p12",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3771,
              "end": 3774,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Literal",
            "start": 3777,
            "end": 3778,
            "raw": "1",
            "value": 1
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3823,
      "end": 3893,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3828,
        "end": 3837,
        "decorators": [],
        "name": "Accessors",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 3843,
        "end": 3892,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 3851,
          "end": 3858,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 3857,
            "end": 3858,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 3857,
              "end": 3858,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 3846,
          "end": 3847,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 3861,
          "end": 3890,
          "types": [
            {
              "type": "TSFunctionType",
              "start": 3862,
              "end": 3872,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3865,
                "end": 3872,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 3868,
                  "end": 3872,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 3870,
                    "end": 3871,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3870,
                      "end": 3871,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 3868,
                    "end": 3869,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3868,
                      "end": 3869,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSTypeReference",
              "start": 3876,
              "end": 3890,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3884,
                "end": 3890,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 3885,
                    "end": 3889,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 3887,
                      "end": 3888,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3887,
                        "end": 3888,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 3885,
                      "end": 3886,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3885,
                        "end": 3886,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3876,
                "end": 3884,
                "decorators": [],
                "name": "Computed",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3837,
        "end": 3840,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3838,
            "end": 3839,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3838,
              "end": 3839,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3895,
      "end": 3934,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3900,
        "end": 3910,
        "decorators": [],
        "name": "Dictionary",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3916,
        "end": 3934,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 3918,
            "end": 3932,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 3919,
                "end": 3928,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3920,
                  "end": 3928,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3922,
                    "end": 3928
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3929,
              "end": 3932,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3931,
                "end": 3932,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3931,
                  "end": 3932,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3910,
        "end": 3913,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3911,
            "end": 3912,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3911,
              "end": 3912,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3936,
      "end": 3999,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3941,
        "end": 3949,
        "decorators": [],
        "name": "Computed",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3955,
        "end": 3999,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 3961,
            "end": 3971,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3961,
              "end": 3964,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": true,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3967,
              "end": 3970,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3969,
                "end": 3970,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3969,
                  "end": 3970,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 3976,
            "end": 3997,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3976,
              "end": 3979,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": true,
            "params": [
              {
                "type": "Identifier",
                "start": 3981,
                "end": 3989,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3986,
                  "end": 3989,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3988,
                    "end": 3989,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3988,
                      "end": 3989,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3990,
              "end": 3996,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3992,
                "end": 3996
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3949,
        "end": 3952,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3950,
            "end": 3951,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3950,
              "end": 3951,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4001,
      "end": 4125,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4006,
        "end": 4016,
        "decorators": [],
        "name": "VueOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 4028,
        "end": 4125,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 4028,
            "end": 4047,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 4036,
              "end": 4047,
              "params": [
                {
                  "type": "TSIntersectionType",
                  "start": 4037,
                  "end": 4046,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 4037,
                      "end": 4038,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4037,
                        "end": 4038,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 4041,
                      "end": 4042,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4041,
                        "end": 4042,
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 4045,
                      "end": 4046,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4045,
                        "end": 4046,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 4028,
              "end": 4036,
              "decorators": [],
              "name": "ThisType",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 4050,
            "end": 4125,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 4056,
                "end": 4077,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 4056,
                  "end": 4060,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4061,
                  "end": 4076,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 4063,
                    "end": 4076,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 4063,
                        "end": 4064,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4063,
                          "end": 4064,
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSFunctionType",
                        "start": 4068,
                        "end": 4075,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 4071,
                          "end": 4075,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4074,
                            "end": 4075,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4074,
                              "end": 4075,
                              "decorators": [],
                              "name": "D",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 4082,
                "end": 4094,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 4082,
                  "end": 4089,
                  "decorators": [],
                  "name": "methods",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4090,
                  "end": 4093,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4092,
                    "end": 4093,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4092,
                      "end": 4093,
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 4099,
                "end": 4123,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 4099,
                  "end": 4107,
                  "decorators": [],
                  "name": "computed",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4108,
                  "end": 4122,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4110,
                    "end": 4122,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 4119,
                      "end": 4122,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 4120,
                          "end": 4121,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4120,
                            "end": 4121,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 4110,
                      "end": 4119,
                      "decorators": [],
                      "name": "Accessors",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4016,
        "end": 4025,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4017,
            "end": 4018,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4017,
              "end": 4018,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4020,
            "end": 4021,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4020,
              "end": 4021,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4023,
            "end": 4024,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4023,
              "end": 4024,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 4127,
      "end": 4203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4141,
          "end": 4202,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4141,
            "end": 4202,
            "decorators": [],
            "name": "Vue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4144,
              "end": 4202,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 4146,
                "end": 4202,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4160,
                    "end": 4188,
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4167,
                      "end": 4188,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4169,
                        "end": 4188,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 4179,
                          "end": 4188,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 4180,
                              "end": 4181,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4180,
                                "end": 4181,
                                "decorators": [],
                                "name": "D",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 4183,
                              "end": 4184,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4183,
                                "end": 4184,
                                "decorators": [],
                                "name": "M",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 4186,
                              "end": 4187,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4186,
                                "end": 4187,
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 4169,
                          "end": 4179,
                          "decorators": [],
                          "name": "VueOptions",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4190,
                  "end": 4202,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 4193,
                    "end": 4202,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 4193,
                        "end": 4194,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4193,
                          "end": 4194,
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 4197,
                        "end": 4198,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4197,
                          "end": 4198,
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 4201,
                        "end": 4202,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4201,
                          "end": 4202,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4150,
                  "end": 4159,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4151,
                      "end": 4152,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 4151,
                        "end": 4152,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 4154,
                      "end": 4155,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 4154,
                        "end": 4155,
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 4157,
                      "end": 4158,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 4157,
                        "end": 4158,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
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
      "start": 4205,
      "end": 4567,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4209,
          "end": 4566,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4209,
            "end": 4212,
            "decorators": [],
            "name": "vue",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 4215,
            "end": 4566,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 4223,
                "end": 4565,
                "properties": [
                  {
                    "type": "Property",
                    "start": 4229,
                    "end": 4257,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4229,
                      "end": 4233,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 4235,
                      "end": 4257,
                      "async": false,
                      "body": {
                        "type": "ObjectExpression",
                        "start": 4242,
                        "end": 4256,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 4244,
                            "end": 4248,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 4244,
                              "end": 4245,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 4247,
                              "end": 4248,
                              "raw": "1",
                              "value": 1
                            }
                          },
                          {
                            "type": "Property",
                            "start": 4250,
                            "end": 4254,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 4250,
                              "end": 4251,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 4253,
                              "end": 4254,
                              "raw": "2",
                              "value": 2
                            }
                          }
                        ]
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 4263,
                    "end": 4339,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4263,
                      "end": 4270,
                      "decorators": [],
                      "name": "methods",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 4272,
                      "end": 4339,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 4282,
                          "end": 4333,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4282,
                            "end": 4283,
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 4283,
                            "end": 4333,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 4295,
                              "end": 4333,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 4309,
                                  "end": 4323,
                                  "argument": {
                                    "type": "MemberExpression",
                                    "start": 4316,
                                    "end": 4322,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 4316,
                                      "end": 4320
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 4321,
                                      "end": 4322,
                                      "decorators": [],
                                      "name": "x",
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
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 4284,
                                "end": 4293,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 4285,
                                  "end": 4293,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 4287,
                                    "end": 4293
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 4345,
                    "end": 4563,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4345,
                      "end": 4353,
                      "decorators": [],
                      "name": "computed",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 4355,
                      "end": 4563,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 4365,
                          "end": 4418,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4365,
                            "end": 4369,
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 4369,
                            "end": 4418,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 4380,
                              "end": 4418,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 4394,
                                  "end": 4408,
                                  "argument": {
                                    "type": "MemberExpression",
                                    "start": 4401,
                                    "end": 4407,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 4401,
                                      "end": 4405
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 4406,
                                      "end": 4407,
                                      "decorators": [],
                                      "name": "x",
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
                            "id": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 4371,
                              "end": 4379,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4373,
                                "end": 4379
                              }
                            },
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 4428,
                          "end": 4557,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4428,
                            "end": 4433,
                            "decorators": [],
                            "name": "hello",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "start": 4435,
                            "end": 4557,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 4449,
                                "end": 4499,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 4449,
                                  "end": 4452,
                                  "decorators": [],
                                  "name": "get",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": true,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "FunctionExpression",
                                  "start": 4452,
                                  "end": 4499,
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 4455,
                                    "end": 4499,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 4473,
                                        "end": 4485,
                                        "argument": {
                                          "type": "Literal",
                                          "start": 4480,
                                          "end": 4484,
                                          "raw": "\"hi\"",
                                          "value": "hi"
                                        }
                                      }
                                    ]
                                  },
                                  "declare": false,
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "returnType": null,
                                  "typeParameters": null
                                }
                              },
                              {
                                "type": "Property",
                                "start": 4513,
                                "end": 4547,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 4513,
                                  "end": 4516,
                                  "decorators": [],
                                  "name": "set",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": true,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "FunctionExpression",
                                  "start": 4516,
                                  "end": 4547,
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 4532,
                                    "end": 4547,
                                    "body": []
                                  },
                                  "declare": false,
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 4517,
                                      "end": 4530,
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 4522,
                                        "end": 4530,
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 4524,
                                          "end": 4530
                                        }
                                      }
                                    }
                                  ],
                                  "returnType": null,
                                  "typeParameters": null
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
              "start": 4219,
              "end": 4222,
              "decorators": [],
              "name": "Vue",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 4569,
      "end": 4573,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 4569,
        "end": 4572,
        "decorators": [],
        "name": "vue",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4574,
      "end": 4580,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 4574,
        "end": 4579,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 4574,
          "end": 4577,
          "decorators": [],
          "name": "vue",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 4578,
          "end": 4579,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4581,
      "end": 4594,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 4581,
        "end": 4593,
        "arguments": [
          {
            "type": "Literal",
            "start": 4587,
            "end": 4592,
            "raw": "\"abc\"",
            "value": "abc"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 4581,
          "end": 4586,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 4581,
            "end": 4584,
            "decorators": [],
            "name": "vue",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 4585,
            "end": 4586,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4595,
      "end": 4604,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 4595,
        "end": 4603,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 4595,
          "end": 4598,
          "decorators": [],
          "name": "vue",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 4599,
          "end": 4603,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 4605,
      "end": 4615,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 4605,
        "end": 4614,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 4605,
          "end": 4608,
          "decorators": [],
          "name": "vue",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 4609,
          "end": 4614,
          "decorators": [],
          "name": "hello",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 1030,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 88,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 68,
        "decorators": [],
        "name": "Result",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 71,
        "end": 88,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 87,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 79,
              "decorators": [],
              "name": "message",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 90,
      "end": 536,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 174,
        "end": 536,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 180,
            "end": 216,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 184,
                "end": 215,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 210,
                  "decorators": [],
                  "name": "pending",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 191,
                    "end": 210,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 193,
                      "end": 210,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 193,
                        "end": 208,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 200,
                          "end": 208,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 201,
                              "end": 207,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 201,
                                "end": 207,
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 200,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 213,
                  "end": 215,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 221,
            "end": 534,
            "body": {
              "type": "BlockStatement",
              "start": 234,
              "end": 534,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 244,
                  "end": 289,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 250,
                      "end": 288,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 280,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 251,
                          "end": 280,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 253,
                            "end": 280,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 253,
                                "end": 268,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 260,
                                  "end": 268,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 261,
                                      "end": 267,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 261,
                                        "end": 267,
                                        "decorators": [],
                                        "name": "Result",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 253,
                                  "end": 260,
                                  "decorators": [],
                                  "name": "Promise",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 271,
                                "end": 280
                              }
                            ]
                          }
                        }
                      },
                      "init": {
                        "type": "YieldExpression",
                        "start": 283,
                        "end": 288,
                        "argument": null,
                        "delegate": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "IfStatement",
                  "start": 298,
                  "end": 528,
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 355,
                    "end": 528,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 369,
                        "end": 412,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 375,
                            "end": 411,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 375,
                              "end": 382,
                              "decorators": [],
                              "name": "results",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "AwaitExpression",
                              "start": 385,
                              "end": 411,
                              "argument": {
                                "type": "CallExpression",
                                "start": 391,
                                "end": 411,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 403,
                                    "end": 410,
                                    "decorators": [],
                                    "name": "pending",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 391,
                                  "end": 402,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 391,
                                    "end": 398,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 399,
                                    "end": 402,
                                    "decorators": [],
                                    "name": "all",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 425,
                        "end": 438,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 425,
                          "end": 437,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 425,
                            "end": 432,
                            "decorators": [],
                            "name": "pending",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "start": 435,
                            "end": 437,
                            "elements": []
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 451,
                        "end": 477,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 451,
                          "end": 476,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 463,
                              "end": 475,
                              "raw": "'Storing...'",
                              "value": "Storing..."
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 451,
                            "end": 462,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 451,
                              "end": 458,
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 459,
                              "end": 462,
                              "decorators": [],
                              "name": "log",
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
                        "start": 490,
                        "end": 518,
                        "directive": null,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 490,
                          "end": 517,
                          "argument": {
                            "type": "CallExpression",
                            "start": 496,
                            "end": 517,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 509,
                                "end": 516,
                                "decorators": [],
                                "name": "results",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 496,
                              "end": 508,
                              "decorators": [],
                              "name": "storeResults",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "start": 325,
                    "end": 341,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 325,
                      "end": 340,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 338,
                          "end": 339,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 325,
                        "end": 337,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 325,
                          "end": 332,
                          "decorators": [],
                          "name": "pending",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 333,
                          "end": 337,
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 302,
                    "end": 311,
                    "operator": "!=",
                    "left": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 303,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 307,
                      "end": 311,
                      "raw": "null",
                      "value": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 228,
              "end": 232,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 114,
        "decorators": [],
        "name": "saverGen",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 116,
        "end": 173,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 118,
          "end": 173,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 132,
            "end": 173,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 133,
                "end": 137
              },
              {
                "type": "TSVoidKeyword",
                "start": 139,
                "end": 143
              },
              {
                "type": "TSUnionType",
                "start": 145,
                "end": 172,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 145,
                    "end": 160,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 152,
                      "end": 160,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 153,
                          "end": 159,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 153,
                            "end": 159,
                            "decorators": [],
                            "name": "Result",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 152,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 163,
                    "end": 172
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 118,
            "end": 132,
            "decorators": [],
            "name": "AsyncGenerator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 538,
      "end": 638,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 579,
        "end": 638,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 585,
            "end": 606,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 585,
              "end": 605,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 597,
                  "end": 604,
                  "decorators": [],
                  "name": "results",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 585,
                "end": 596,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 585,
                  "end": 592,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 593,
                  "end": 596,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 611,
            "end": 636,
            "argument": {
              "type": "CallExpression",
              "start": 618,
              "end": 635,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 618,
                "end": 633,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 625,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 626,
                  "end": 633,
                  "decorators": [],
                  "name": "resolve",
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
      "id": {
        "type": "Identifier",
        "start": 547,
        "end": 559,
        "decorators": [],
        "name": "storeResults",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 560,
          "end": 577,
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 567,
            "end": 577,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 569,
              "end": 577,
              "elementType": {
                "type": "TSTypeReference",
                "start": 569,
                "end": 575,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 569,
                  "end": 575,
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 640,
      "end": 1030,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 668,
        "end": 1030,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 674,
            "end": 710,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 678,
                "end": 709,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 678,
                  "end": 704,
                  "decorators": [],
                  "name": "pending",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 685,
                    "end": 704,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 687,
                      "end": 704,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 687,
                        "end": 702,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 694,
                          "end": 702,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 695,
                              "end": 701,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 695,
                                "end": 701,
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 687,
                          "end": 694,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 707,
                  "end": 709,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 715,
            "end": 1028,
            "body": {
              "type": "BlockStatement",
              "start": 728,
              "end": 1028,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 738,
                  "end": 783,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 744,
                      "end": 782,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 744,
                        "end": 774,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 745,
                          "end": 774,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 747,
                            "end": 774,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 747,
                                "end": 762,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 754,
                                  "end": 762,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 755,
                                      "end": 761,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 755,
                                        "end": 761,
                                        "decorators": [],
                                        "name": "Result",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 747,
                                  "end": 754,
                                  "decorators": [],
                                  "name": "Promise",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 765,
                                "end": 774
                              }
                            ]
                          }
                        }
                      },
                      "init": {
                        "type": "YieldExpression",
                        "start": 777,
                        "end": 782,
                        "argument": null,
                        "delegate": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "IfStatement",
                  "start": 792,
                  "end": 1022,
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 849,
                    "end": 1022,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 863,
                        "end": 906,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 869,
                            "end": 905,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 869,
                              "end": 876,
                              "decorators": [],
                              "name": "results",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "AwaitExpression",
                              "start": 879,
                              "end": 905,
                              "argument": {
                                "type": "CallExpression",
                                "start": 885,
                                "end": 905,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 897,
                                    "end": 904,
                                    "decorators": [],
                                    "name": "pending",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 885,
                                  "end": 896,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 885,
                                    "end": 892,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 893,
                                    "end": 896,
                                    "decorators": [],
                                    "name": "all",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 919,
                        "end": 932,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 919,
                          "end": 931,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 919,
                            "end": 926,
                            "decorators": [],
                            "name": "pending",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "start": 929,
                            "end": 931,
                            "elements": []
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 945,
                        "end": 971,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 945,
                          "end": 970,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 957,
                              "end": 969,
                              "raw": "'Storing...'",
                              "value": "Storing..."
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 945,
                            "end": 956,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 945,
                              "end": 952,
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 953,
                              "end": 956,
                              "decorators": [],
                              "name": "log",
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
                        "start": 984,
                        "end": 1012,
                        "directive": null,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 984,
                          "end": 1011,
                          "argument": {
                            "type": "CallExpression",
                            "start": 990,
                            "end": 1011,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 1003,
                                "end": 1010,
                                "decorators": [],
                                "name": "results",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 990,
                              "end": 1002,
                              "decorators": [],
                              "name": "storeResults",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "start": 819,
                    "end": 835,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 819,
                      "end": 834,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 832,
                          "end": 833,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 819,
                        "end": 831,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 819,
                          "end": 826,
                          "decorators": [],
                          "name": "pending",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 827,
                          "end": 831,
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 796,
                    "end": 805,
                    "operator": "!=",
                    "left": {
                      "type": "Identifier",
                      "start": 796,
                      "end": 797,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 801,
                      "end": 805,
                      "raw": "null",
                      "value": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 722,
              "end": 726,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 656,
        "end": 665,
        "decorators": [],
        "name": "saverGen2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

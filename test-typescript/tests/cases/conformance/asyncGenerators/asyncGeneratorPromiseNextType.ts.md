__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 1031,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 68,
        "name": "Result",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 71,
        "end": 88,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 87,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 79,
              "name": "message",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
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
      "start": 90,
      "end": 536,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 114,
        "name": "saverGen",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 210,
                  "name": "pending",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 200,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 200,
                          "end": 208,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 201,
                              "end": 207,
                              "typeName": {
                                "type": "Identifier",
                                "start": 201,
                                "end": 207,
                                "name": "Result",
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
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 213,
                  "end": 215,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 221,
            "end": 534,
            "test": {
              "type": "Literal",
              "start": 228,
              "end": 232,
              "value": true,
              "raw": "true"
            },
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
                      "id": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 280,
                        "name": "p",
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 253,
                                  "end": 260,
                                  "name": "Promise",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 260,
                                  "end": 268,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 261,
                                      "end": 267,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 261,
                                        "end": 267,
                                        "name": "Result",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 271,
                                "end": 280
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "YieldExpression",
                        "start": 283,
                        "end": 288,
                        "delegate": false,
                        "argument": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "IfStatement",
                  "start": 298,
                  "end": 528,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 302,
                    "end": 311,
                    "left": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 303,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "!=",
                    "right": {
                      "type": "Literal",
                      "start": 307,
                      "end": 311,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "start": 325,
                    "end": 341,
                    "expression": {
                      "type": "CallExpression",
                      "start": 325,
                      "end": 340,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 325,
                        "end": 337,
                        "object": {
                          "type": "Identifier",
                          "start": 325,
                          "end": 332,
                          "name": "pending",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 333,
                          "end": 337,
                          "name": "push",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 338,
                          "end": 339,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
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
                            "id": {
                              "type": "Identifier",
                              "start": 375,
                              "end": 382,
                              "name": "results",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "AwaitExpression",
                              "start": 385,
                              "end": 411,
                              "argument": {
                                "type": "CallExpression",
                                "start": 391,
                                "end": 411,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 391,
                                  "end": 402,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 391,
                                    "end": 398,
                                    "name": "Promise",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 399,
                                    "end": 402,
                                    "name": "all",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 403,
                                    "end": 410,
                                    "name": "pending",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              }
                            },
                            "definite": false
                          }
                        ],
                        "kind": "const",
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 425,
                        "end": 438,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 425,
                          "end": 437,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 425,
                            "end": 432,
                            "name": "pending",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "start": 435,
                            "end": 437,
                            "elements": []
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 451,
                        "end": 477,
                        "expression": {
                          "type": "CallExpression",
                          "start": 451,
                          "end": 476,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 451,
                            "end": 462,
                            "object": {
                              "type": "Identifier",
                              "start": 451,
                              "end": 458,
                              "name": "console",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 459,
                              "end": 462,
                              "name": "log",
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
                              "start": 463,
                              "end": 475,
                              "value": "Storing...",
                              "raw": "'Storing...'"
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 490,
                        "end": 518,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 490,
                          "end": 517,
                          "argument": {
                            "type": "CallExpression",
                            "start": 496,
                            "end": 517,
                            "callee": {
                              "type": "Identifier",
                              "start": 496,
                              "end": 508,
                              "name": "storeResults",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 509,
                                "end": 516,
                                "name": "results",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 116,
        "end": 173,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 118,
          "end": 173,
          "typeName": {
            "type": "Identifier",
            "start": 118,
            "end": 132,
            "name": "AsyncGenerator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 152,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 152,
                      "end": 160,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 153,
                          "end": 159,
                          "typeName": {
                            "type": "Identifier",
                            "start": 153,
                            "end": 159,
                            "name": "Result",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
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
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 538,
      "end": 638,
      "id": {
        "type": "Identifier",
        "start": 547,
        "end": 559,
        "name": "storeResults",
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
          "start": 560,
          "end": 577,
          "name": "results",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 569,
                  "end": 575,
                  "name": "Result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 579,
        "end": 638,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 585,
            "end": 606,
            "expression": {
              "type": "CallExpression",
              "start": 585,
              "end": 605,
              "callee": {
                "type": "MemberExpression",
                "start": 585,
                "end": 596,
                "object": {
                  "type": "Identifier",
                  "start": 585,
                  "end": 592,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 593,
                  "end": 596,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 597,
                  "end": 604,
                  "name": "results",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 611,
            "end": 636,
            "argument": {
              "type": "CallExpression",
              "start": 618,
              "end": 635,
              "callee": {
                "type": "MemberExpression",
                "start": 618,
                "end": 633,
                "object": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 625,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 626,
                  "end": 633,
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
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 640,
      "end": 1030,
      "id": {
        "type": "Identifier",
        "start": 656,
        "end": 665,
        "name": "saverGen2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 678,
                  "end": 704,
                  "name": "pending",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 687,
                          "end": 694,
                          "name": "Promise",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 694,
                          "end": 702,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 695,
                              "end": 701,
                              "typeName": {
                                "type": "Identifier",
                                "start": 695,
                                "end": 701,
                                "name": "Result",
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
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 707,
                  "end": 709,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 715,
            "end": 1028,
            "test": {
              "type": "Literal",
              "start": 722,
              "end": 726,
              "value": true,
              "raw": "true"
            },
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
                      "id": {
                        "type": "Identifier",
                        "start": 744,
                        "end": 774,
                        "name": "p",
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 747,
                                  "end": 754,
                                  "name": "Promise",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 754,
                                  "end": 762,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 755,
                                      "end": 761,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 755,
                                        "end": 761,
                                        "name": "Result",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 765,
                                "end": 774
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "YieldExpression",
                        "start": 777,
                        "end": 782,
                        "delegate": false,
                        "argument": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "IfStatement",
                  "start": 792,
                  "end": 1022,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 796,
                    "end": 805,
                    "left": {
                      "type": "Identifier",
                      "start": 796,
                      "end": 797,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "!=",
                    "right": {
                      "type": "Literal",
                      "start": 801,
                      "end": 805,
                      "value": null,
                      "raw": "null"
                    }
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "start": 819,
                    "end": 835,
                    "expression": {
                      "type": "CallExpression",
                      "start": 819,
                      "end": 834,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 819,
                        "end": 831,
                        "object": {
                          "type": "Identifier",
                          "start": 819,
                          "end": 826,
                          "name": "pending",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 827,
                          "end": 831,
                          "name": "push",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 832,
                          "end": 833,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
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
                            "id": {
                              "type": "Identifier",
                              "start": 869,
                              "end": 876,
                              "name": "results",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "AwaitExpression",
                              "start": 879,
                              "end": 905,
                              "argument": {
                                "type": "CallExpression",
                                "start": 885,
                                "end": 905,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 885,
                                  "end": 896,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 885,
                                    "end": 892,
                                    "name": "Promise",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 893,
                                    "end": 896,
                                    "name": "all",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 897,
                                    "end": 904,
                                    "name": "pending",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              }
                            },
                            "definite": false
                          }
                        ],
                        "kind": "const",
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 919,
                        "end": 932,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 919,
                          "end": 931,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 919,
                            "end": 926,
                            "name": "pending",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "start": 929,
                            "end": 931,
                            "elements": []
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 945,
                        "end": 971,
                        "expression": {
                          "type": "CallExpression",
                          "start": 945,
                          "end": 970,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 945,
                            "end": 956,
                            "object": {
                              "type": "Identifier",
                              "start": 945,
                              "end": 952,
                              "name": "console",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 953,
                              "end": 956,
                              "name": "log",
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
                              "start": 957,
                              "end": 969,
                              "value": "Storing...",
                              "raw": "'Storing...'"
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 984,
                        "end": 1012,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 984,
                          "end": 1011,
                          "argument": {
                            "type": "CallExpression",
                            "start": 990,
                            "end": 1011,
                            "callee": {
                              "type": "Identifier",
                              "start": 990,
                              "end": 1002,
                              "name": "storeResults",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 1003,
                                "end": 1010,
                                "name": "results",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

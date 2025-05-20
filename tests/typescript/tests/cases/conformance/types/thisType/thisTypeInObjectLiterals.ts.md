__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 618,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 128,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 128,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 22,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 15,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 17,
                  "end": 22,
                  "raw": "\"bar\"",
                  "value": "bar"
                }
              },
              {
                "type": "Property",
                "start": 28,
                "end": 69,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 29,
                  "end": 69,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 32,
                    "end": 69,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 42,
                        "end": 63,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 49,
                          "end": 62,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 49,
                            "end": 55,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 49,
                              "end": 53
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 54,
                              "end": 55,
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 56,
                            "end": 62,
                            "decorators": [],
                            "name": "length",
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
                "start": 75,
                "end": 126,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 78,
                  "end": 126,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 89,
                    "end": 126,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 99,
                        "end": 120,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 106,
                          "end": 119,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 106,
                            "end": 112,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 106,
                              "end": 110
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 111,
                              "end": 112,
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 119,
                            "decorators": [],
                            "name": "length",
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
      "start": 130,
      "end": 425,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 425,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 151,
            "decorators": [],
            "name": "mutuallyRecursive",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 154,
            "end": 425,
            "properties": [
              {
                "type": "Property",
                "start": 160,
                "end": 166,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
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
                  "start": 163,
                  "end": 166,
                  "raw": "100",
                  "value": 100
                }
              },
              {
                "type": "Property",
                "start": 172,
                "end": 228,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 177,
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 177,
                  "end": 228,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 180,
                    "end": 228,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 190,
                        "end": 222,
                        "argument": {
                          "type": "CallExpression",
                          "start": 197,
                          "end": 221,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 214,
                              "end": 220,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 214,
                                "end": 218
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 219,
                                "end": 220,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 197,
                            "end": 213,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 197,
                              "end": 201
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 202,
                              "end": 213,
                              "decorators": [],
                              "name": "passthrough",
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
              },
              {
                "type": "Property",
                "start": 234,
                "end": 293,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 245,
                  "decorators": [],
                  "name": "passthrough",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 245,
                  "end": 293,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 257,
                    "end": 293,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 267,
                        "end": 287,
                        "argument": {
                          "type": "CallExpression",
                          "start": 274,
                          "end": 286,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 284,
                              "end": 285,
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 274,
                            "end": 283,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 274,
                              "end": 278
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 279,
                              "end": 283,
                              "decorators": [],
                              "name": "sub1",
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
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 246,
                      "end": 255,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 247,
                        "end": 255,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 249,
                          "end": 255
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 299,
                "end": 423,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 303,
                  "decorators": [],
                  "name": "sub1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 303,
                  "end": 423,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 323,
                    "end": 423,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 333,
                        "end": 399,
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 344,
                          "end": 399,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 358,
                              "end": 389,
                              "argument": {
                                "type": "CallExpression",
                                "start": 365,
                                "end": 388,
                                "arguments": [
                                  {
                                    "type": "BinaryExpression",
                                    "start": 382,
                                    "end": 387,
                                    "operator": "-",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 382,
                                      "end": 383,
                                      "decorators": [],
                                      "name": "n",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 386,
                                      "end": 387,
                                      "raw": "1",
                                      "value": 1
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 365,
                                  "end": 381,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 365,
                                    "end": 369
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 370,
                                    "end": 381,
                                    "decorators": [],
                                    "name": "passthrough",
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
                          "type": "BinaryExpression",
                          "start": 337,
                          "end": 342,
                          "operator": ">",
                          "left": {
                            "type": "Identifier",
                            "start": 337,
                            "end": 338,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 341,
                            "end": 342,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 408,
                        "end": 417,
                        "argument": {
                          "type": "Identifier",
                          "start": 415,
                          "end": 416,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
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
                      "start": 304,
                      "end": 313,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 305,
                        "end": 313,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 307,
                          "end": 313
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 314,
                    "end": 322,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 316,
                      "end": 322
                    }
                  },
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
      "start": 426,
      "end": 468,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 430,
          "end": 467,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 439,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 431,
              "end": 439,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 433,
                "end": 439
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 442,
            "end": 467,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 442,
              "end": 465,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 442,
                "end": 459,
                "decorators": [],
                "name": "mutuallyRecursive",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 460,
                "end": 465,
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 469,
      "end": 585,
      "body": {
        "type": "TSInterfaceBody",
        "start": 481,
        "end": 585,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 487,
            "end": 497,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 487,
              "end": 488,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 488,
              "end": 496,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 490,
                "end": 496
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 502,
            "end": 518,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 502,
              "end": 507,
              "decorators": [],
              "name": "start",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 509,
              "end": 517,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 511,
                "end": 517
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 523,
            "end": 554,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 523,
              "end": 534,
              "decorators": [],
              "name": "passthrough",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 535,
                "end": 544,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 536,
                  "end": 544,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 538,
                    "end": 544
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 545,
              "end": 553,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 547,
                "end": 553
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 559,
            "end": 583,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 559,
              "end": 563,
              "decorators": [],
              "name": "sub1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 564,
                "end": 573,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 565,
                  "end": 573,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 567,
                    "end": 573
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 574,
              "end": 582,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 576,
                "end": 582
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 479,
        "end": 480,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 586,
      "end": 618,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 590,
          "end": 617,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 590,
            "end": 597,
            "decorators": [],
            "name": "impl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 594,
              "end": 597,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 596,
                "end": 597,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 596,
                  "end": 597,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 600,
            "end": 617,
            "decorators": [],
            "name": "mutuallyRecursive",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

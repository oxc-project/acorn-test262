__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 619,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 15,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 17,
                  "end": 22,
                  "value": "bar",
                  "raw": "\"bar\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 28,
                "end": 69,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 29,
                  "end": 69,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "object": {
                            "type": "MemberExpression",
                            "start": 49,
                            "end": 55,
                            "object": {
                              "type": "ThisExpression",
                              "start": 49,
                              "end": 53
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 54,
                              "end": 55,
                              "name": "d",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 56,
                            "end": 62,
                            "name": "length",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 75,
                "end": 126,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 78,
                  "end": 126,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "object": {
                            "type": "MemberExpression",
                            "start": 106,
                            "end": 112,
                            "object": {
                              "type": "ThisExpression",
                              "start": 106,
                              "end": 110
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 111,
                              "end": 112,
                              "name": "d",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 119,
                            "name": "length",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 151,
            "name": "mutuallyRecursive",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 163,
                  "end": 166,
                  "value": 100,
                  "raw": "100"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 172,
                "end": 228,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 177,
                  "name": "start",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 177,
                  "end": 228,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "callee": {
                            "type": "MemberExpression",
                            "start": 197,
                            "end": 213,
                            "object": {
                              "type": "ThisExpression",
                              "start": 197,
                              "end": 201
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 202,
                              "end": 213,
                              "name": "passthrough",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 214,
                              "end": 220,
                              "object": {
                                "type": "ThisExpression",
                                "start": 214,
                                "end": 218
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 219,
                                "end": 220,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 234,
                "end": 293,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 245,
                  "name": "passthrough",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 245,
                  "end": 293,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 246,
                      "end": 255,
                      "name": "n",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 247,
                        "end": 255,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 249,
                          "end": 255
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                          "callee": {
                            "type": "MemberExpression",
                            "start": 274,
                            "end": 283,
                            "object": {
                              "type": "ThisExpression",
                              "start": 274,
                              "end": 278
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 279,
                              "end": 283,
                              "name": "sub1",
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
                              "start": 284,
                              "end": 285,
                              "name": "n",
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
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 299,
                "end": 423,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 303,
                  "name": "sub1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 303,
                  "end": 423,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 304,
                      "end": 313,
                      "name": "n",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 305,
                        "end": 313,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 307,
                          "end": 313
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 323,
                    "end": 423,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 333,
                        "end": 399,
                        "test": {
                          "type": "BinaryExpression",
                          "start": 337,
                          "end": 342,
                          "left": {
                            "type": "Identifier",
                            "start": 337,
                            "end": 338,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": ">",
                          "right": {
                            "type": "Literal",
                            "start": 341,
                            "end": 342,
                            "value": 0,
                            "raw": "0"
                          }
                        },
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
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 365,
                                  "end": 381,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 365,
                                    "end": 369
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 370,
                                    "end": 381,
                                    "name": "passthrough",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "BinaryExpression",
                                    "start": 382,
                                    "end": 387,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 382,
                                      "end": 383,
                                      "name": "n",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "operator": "-",
                                    "right": {
                                      "type": "Literal",
                                      "start": 386,
                                      "end": 387,
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "alternate": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 408,
                        "end": 417,
                        "argument": {
                          "type": "Identifier",
                          "start": 415,
                          "end": 416,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 314,
                    "end": 322,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 316,
                      "end": 322
                    }
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 439,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 431,
              "end": 439,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 433,
                "end": 439
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 442,
            "end": 467,
            "callee": {
              "type": "MemberExpression",
              "start": 442,
              "end": 465,
              "object": {
                "type": "Identifier",
                "start": 442,
                "end": 459,
                "name": "mutuallyRecursive",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 460,
                "end": 465,
                "name": "start",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 469,
      "end": 585,
      "id": {
        "type": "Identifier",
        "start": 479,
        "end": 480,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 481,
        "end": 585,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 487,
            "end": 497,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 487,
              "end": 488,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 488,
              "end": 496,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 490,
                "end": 496
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 502,
            "end": 518,
            "key": {
              "type": "Identifier",
              "start": 502,
              "end": 507,
              "name": "start",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 523,
            "end": 554,
            "key": {
              "type": "Identifier",
              "start": 523,
              "end": 534,
              "name": "passthrough",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 535,
                "end": 544,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 536,
                  "end": 544,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 538,
                    "end": 544
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 559,
            "end": 583,
            "key": {
              "type": "Identifier",
              "start": 559,
              "end": 563,
              "name": "sub1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 564,
                "end": 573,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 565,
                  "end": 573,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 567,
                    "end": 573
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
      "start": 586,
      "end": 618,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 590,
          "end": 617,
          "id": {
            "type": "Identifier",
            "start": 590,
            "end": 597,
            "name": "impl",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 594,
              "end": 597,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 596,
                "end": 597,
                "typeName": {
                  "type": "Identifier",
                  "start": 596,
                  "end": 597,
                  "name": "I",
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
          "init": {
            "type": "Identifier",
            "start": 600,
            "end": 617,
            "name": "mutuallyRecursive",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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

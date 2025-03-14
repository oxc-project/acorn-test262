__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 614,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 30,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 30,
            "decorators": [],
            "name": "document",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 30,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 22,
                "end": 30,
                "typeName": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 30,
                  "decorators": [],
                  "name": "Document",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 106,
      "body": {
        "type": "TSInterfaceBody",
        "start": 51,
        "end": 106,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 57,
            "end": 104,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 71,
              "decorators": [],
              "name": "getElementById",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 72,
                "end": 89,
                "decorators": [],
                "name": "elementId",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 81,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 83,
                    "end": 89
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 103,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 103,
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 50,
        "decorators": [],
        "name": "Document",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 107,
      "end": 157,
      "body": {
        "type": "TSInterfaceBody",
        "start": 129,
        "end": 157,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 135,
            "end": 155,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 145,
              "decorators": [],
              "name": "isDisabled",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 154,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 147,
                "end": 154
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 128,
        "decorators": [],
        "name": "HTMLElement",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 158,
      "end": 613,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 203,
        "end": 613,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 209,
            "end": 312,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 213,
                "end": 311,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 221,
                  "decorators": [],
                  "name": "elements",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 224,
                  "end": 311,
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "start": 241,
                      "end": 310,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 257,
                        "end": 310,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 267,
                            "end": 304,
                            "argument": {
                              "type": "CallExpression",
                              "start": 274,
                              "end": 303,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 298,
                                  "end": 302,
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 274,
                                "end": 297,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 274,
                                  "end": 282,
                                  "decorators": [],
                                  "name": "document",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 283,
                                  "end": 297,
                                  "decorators": [],
                                  "name": "getElementById",
                                  "optional": false
                                }
                              },
                              "optional": false
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
                          "start": 251,
                          "end": 255,
                          "decorators": [],
                          "name": "name",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 224,
                    "end": 240,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 224,
                      "end": 236,
                      "decorators": [],
                      "name": "elementNames",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 237,
                      "end": 240,
                      "decorators": [],
                      "name": "map",
                      "optional": false
                    }
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
            "start": 317,
            "end": 399,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 321,
                "end": 398,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 328,
                  "decorators": [],
                  "name": "enabled",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 331,
                  "end": 398,
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "start": 347,
                      "end": 397,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 360,
                        "end": 397,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 370,
                            "end": 391,
                            "argument": {
                              "type": "UnaryExpression",
                              "start": 377,
                              "end": 390,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 378,
                                "end": 390,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 378,
                                  "end": 379,
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 380,
                                  "end": 390,
                                  "decorators": [],
                                  "name": "isDisabled",
                                  "optional": false
                                }
                              },
                              "operator": "!",
                              "prefix": true
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
                          "start": 357,
                          "end": 358,
                          "decorators": [],
                          "name": "e",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 331,
                    "end": 346,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 331,
                      "end": 339,
                      "decorators": [],
                      "name": "elements",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 340,
                      "end": 346,
                      "decorators": [],
                      "name": "filter",
                      "optional": false
                    }
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
            "start": 404,
            "end": 501,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 408,
                "end": 500,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 414,
                  "decorators": [],
                  "name": "widths",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 417,
                  "end": 500,
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "start": 429,
                      "end": 499,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 442,
                        "end": 499,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 452,
                            "end": 469,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 459,
                              "end": 468,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 459,
                                "end": 460,
                                "decorators": [],
                                "name": "e",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 461,
                                "end": 468,
                                "decorators": [],
                                "name": "xyxyxyx",
                                "optional": false
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
                          "start": 439,
                          "end": 440,
                          "decorators": [],
                          "name": "e",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 417,
                    "end": 428,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 417,
                      "end": 424,
                      "decorators": [],
                      "name": "enabled",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 425,
                      "end": 428,
                      "decorators": [],
                      "name": "map",
                      "optional": false
                    }
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
            "start": 506,
            "end": 590,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 510,
                "end": 589,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 518,
                  "decorators": [],
                  "name": "maxWidth",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 521,
                  "end": 589,
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "start": 535,
                      "end": 588,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 551,
                        "end": 588,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 561,
                            "end": 582,
                            "argument": {
                              "type": "ConditionalExpression",
                              "start": 568,
                              "end": 581,
                              "alternate": {
                                "type": "Identifier",
                                "start": 580,
                                "end": 581,
                                "decorators": [],
                                "name": "b",
                                "optional": false
                              },
                              "consequent": {
                                "type": "Identifier",
                                "start": 576,
                                "end": 577,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "start": 568,
                                "end": 573,
                                "operator": ">",
                                "left": {
                                  "type": "Identifier",
                                  "start": 568,
                                  "end": 569,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 572,
                                  "end": 573,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false
                                }
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
                          "start": 545,
                          "end": 546,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 548,
                          "end": 549,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 521,
                    "end": 534,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 521,
                      "end": 527,
                      "decorators": [],
                      "name": "widths",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 528,
                      "end": 534,
                      "decorators": [],
                      "name": "reduce",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 595,
            "end": 611,
            "argument": {
              "type": "Identifier",
              "start": 602,
              "end": 610,
              "decorators": [],
              "name": "maxWidth",
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
        "start": 167,
        "end": 178,
        "decorators": [],
        "name": "getMaxWidth",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 179,
          "end": 201,
          "decorators": [],
          "name": "elementNames",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 191,
            "end": 201,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 193,
              "end": 201,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 193,
                "end": 199
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

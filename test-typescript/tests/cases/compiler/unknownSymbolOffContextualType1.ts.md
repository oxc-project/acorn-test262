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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 30,
            "name": "document",
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
                  "name": "Document",
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
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 50,
        "name": "Document",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 51,
        "end": 106,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 57,
            "end": 104,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 71,
              "name": "getElementById",
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
                "start": 72,
                "end": 89,
                "name": "elementId",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 81,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 83,
                    "end": 89
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "HTMLElement",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "type": "TSInterfaceDeclaration",
      "start": 107,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 128,
        "name": "HTMLElement",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 145,
              "name": "isDisabled",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 154,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 147,
                "end": 154
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
      "start": 158,
      "end": 613,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 178,
        "name": "getMaxWidth",
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
          "start": 179,
          "end": 201,
          "name": "elementNames",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 221,
                  "name": "elements",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 224,
                  "end": 311,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 224,
                    "end": 240,
                    "object": {
                      "type": "Identifier",
                      "start": 224,
                      "end": 236,
                      "name": "elementNames",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 237,
                      "end": 240,
                      "name": "map",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "start": 241,
                      "end": 310,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 251,
                          "end": 255,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 274,
                                "end": 297,
                                "object": {
                                  "type": "Identifier",
                                  "start": 274,
                                  "end": 282,
                                  "name": "document",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 283,
                                  "end": 297,
                                  "name": "getElementById",
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
                                  "start": 298,
                                  "end": 302,
                                  "name": "name",
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
                    }
                  ],
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
            "type": "VariableDeclaration",
            "start": 317,
            "end": 399,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 321,
                "end": 398,
                "id": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 328,
                  "name": "enabled",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 331,
                  "end": 398,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 331,
                    "end": 346,
                    "object": {
                      "type": "Identifier",
                      "start": 331,
                      "end": 339,
                      "name": "elements",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 340,
                      "end": 346,
                      "name": "filter",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "start": 347,
                      "end": 397,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 357,
                          "end": 358,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                              "operator": "!",
                              "prefix": true,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 378,
                                "end": 390,
                                "object": {
                                  "type": "Identifier",
                                  "start": 378,
                                  "end": 379,
                                  "name": "e",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 380,
                                  "end": 390,
                                  "name": "isDisabled",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
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
            "type": "VariableDeclaration",
            "start": 404,
            "end": 501,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 408,
                "end": 500,
                "id": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 414,
                  "name": "widths",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 417,
                  "end": 500,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 417,
                    "end": 428,
                    "object": {
                      "type": "Identifier",
                      "start": 417,
                      "end": 424,
                      "name": "enabled",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 425,
                      "end": 428,
                      "name": "map",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "start": 429,
                      "end": 499,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 439,
                          "end": 440,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                              "object": {
                                "type": "Identifier",
                                "start": 459,
                                "end": 460,
                                "name": "e",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 461,
                                "end": 468,
                                "name": "xyxyxyx",
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
                    }
                  ],
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
            "type": "VariableDeclaration",
            "start": 506,
            "end": 590,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 510,
                "end": 589,
                "id": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 518,
                  "name": "maxWidth",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 521,
                  "end": 589,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 521,
                    "end": 534,
                    "object": {
                      "type": "Identifier",
                      "start": 521,
                      "end": 527,
                      "name": "widths",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 528,
                      "end": 534,
                      "name": "reduce",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "start": 535,
                      "end": 588,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 545,
                          "end": 546,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 548,
                          "end": 549,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                              "test": {
                                "type": "BinaryExpression",
                                "start": 568,
                                "end": 573,
                                "left": {
                                  "type": "Identifier",
                                  "start": 568,
                                  "end": 569,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "operator": ">",
                                "right": {
                                  "type": "Identifier",
                                  "start": 572,
                                  "end": 573,
                                  "name": "b",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "consequent": {
                                "type": "Identifier",
                                "start": 576,
                                "end": 577,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "alternate": {
                                "type": "Identifier",
                                "start": 580,
                                "end": 581,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
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
            "type": "ReturnStatement",
            "start": 595,
            "end": 611,
            "argument": {
              "type": "Identifier",
              "start": 602,
              "end": 610,
              "name": "maxWidth",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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

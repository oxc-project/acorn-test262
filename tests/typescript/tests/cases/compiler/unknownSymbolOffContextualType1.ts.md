__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "document",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Document",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 30
                },
                "typeArguments": null,
                "start": 22,
                "end": 30
              },
              "start": 20,
              "end": 30
            },
            "start": 12,
            "end": 30
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 30
        }
      ],
      "declare": true,
      "start": 0,
      "end": 31
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Document",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 50
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getElementById",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 71
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "elementId",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 83,
                    "end": 89
                  },
                  "start": 81,
                  "end": 89
                },
                "start": 72,
                "end": 89
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 103
                },
                "typeArguments": null,
                "start": 92,
                "end": 103
              },
              "start": 90,
              "end": 103
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 57,
            "end": 104
          }
        ],
        "start": 51,
        "end": 106
      },
      "declare": false,
      "start": 32,
      "end": 106
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HTMLElement",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 128
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isDisabled",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 145
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 147,
                "end": 154
              },
              "start": 145,
              "end": 154
            },
            "accessibility": null,
            "static": false,
            "start": 135,
            "end": 155
          }
        ],
        "start": 129,
        "end": 157
      },
      "declare": false,
      "start": 107,
      "end": 157
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMaxWidth",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 178
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "elementNames",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 193,
                "end": 199
              },
              "start": 193,
              "end": 201
            },
            "start": 191,
            "end": 201
          },
          "start": 179,
          "end": 201
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "elements",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 221
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "elementNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 224,
                      "end": 236
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 240
                    },
                    "optional": false,
                    "computed": false,
                    "start": 224,
                    "end": 240
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 251,
                          "end": 255
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "document",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 274,
                                  "end": 282
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getElementById",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 283,
                                  "end": 297
                                },
                                "optional": false,
                                "computed": false,
                                "start": 274,
                                "end": 297
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 298,
                                  "end": 302
                                }
                              ],
                              "optional": false,
                              "start": 274,
                              "end": 303
                            },
                            "start": 267,
                            "end": 304
                          }
                        ],
                        "start": 257,
                        "end": 310
                      },
                      "expression": false,
                      "start": 241,
                      "end": 310
                    }
                  ],
                  "optional": false,
                  "start": 224,
                  "end": 311
                },
                "definite": false,
                "start": 213,
                "end": 311
              }
            ],
            "declare": false,
            "start": 209,
            "end": 312
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "enabled",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 328
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "elements",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 331,
                      "end": 339
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "filter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 340,
                      "end": 346
                    },
                    "optional": false,
                    "computed": false,
                    "start": 331,
                    "end": 346
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 357,
                          "end": 358
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 378,
                                  "end": 379
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isDisabled",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 380,
                                  "end": 390
                                },
                                "optional": false,
                                "computed": false,
                                "start": 378,
                                "end": 390
                              },
                              "prefix": true,
                              "start": 377,
                              "end": 390
                            },
                            "start": 370,
                            "end": 391
                          }
                        ],
                        "start": 360,
                        "end": 397
                      },
                      "expression": false,
                      "start": 347,
                      "end": 397
                    }
                  ],
                  "optional": false,
                  "start": 331,
                  "end": 398
                },
                "definite": false,
                "start": 321,
                "end": 398
              }
            ],
            "declare": false,
            "start": 317,
            "end": 399
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "widths",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 408,
                  "end": 414
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "enabled",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 417,
                      "end": 424
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 425,
                      "end": 428
                    },
                    "optional": false,
                    "computed": false,
                    "start": 417,
                    "end": 428
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 439,
                          "end": 440
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 459,
                                "end": 460
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "xyxyxyx",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 461,
                                "end": 468
                              },
                              "optional": false,
                              "computed": false,
                              "start": 459,
                              "end": 468
                            },
                            "start": 452,
                            "end": 469
                          }
                        ],
                        "start": 442,
                        "end": 499
                      },
                      "expression": false,
                      "start": 429,
                      "end": 499
                    }
                  ],
                  "optional": false,
                  "start": 417,
                  "end": 500
                },
                "definite": false,
                "start": 408,
                "end": 500
              }
            ],
            "declare": false,
            "start": 404,
            "end": 501
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "maxWidth",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 510,
                  "end": 518
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "widths",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 521,
                      "end": 527
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reduce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 528,
                      "end": 534
                    },
                    "optional": false,
                    "computed": false,
                    "start": 521,
                    "end": 534
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 545,
                          "end": 546
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 548,
                          "end": 549
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 568,
                                  "end": 569
                                },
                                "operator": ">",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 572,
                                  "end": 573
                                },
                                "start": 568,
                                "end": 573
                              },
                              "consequent": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 576,
                                "end": 577
                              },
                              "alternate": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 580,
                                "end": 581
                              },
                              "start": 568,
                              "end": 581
                            },
                            "start": 561,
                            "end": 582
                          }
                        ],
                        "start": 551,
                        "end": 588
                      },
                      "expression": false,
                      "start": 535,
                      "end": 588
                    }
                  ],
                  "optional": false,
                  "start": 521,
                  "end": 589
                },
                "definite": false,
                "start": 510,
                "end": 589
              }
            ],
            "declare": false,
            "start": 506,
            "end": 590
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "maxWidth",
              "optional": false,
              "typeAnnotation": null,
              "start": 602,
              "end": 610
            },
            "start": 595,
            "end": 611
          }
        ],
        "start": 203,
        "end": 613
      },
      "expression": false,
      "start": 158,
      "end": 613
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 613
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 707,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "name": "IData",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 38,
        "end": 56,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 42,
            "end": 54,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 54,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 47,
                "end": 54
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
      "type": "TSDeclareFunction",
      "start": 58,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 79,
        "name": "test",
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
          "start": 98,
          "end": 147,
          "name": "getter",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 147,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 106,
              "end": 147,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 107,
                  "end": 126,
                  "name": "deps",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 111,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 113,
                      "end": 126,
                      "typeName": {
                        "type": "Identifier",
                        "start": 113,
                        "end": 126,
                        "name": "TDependencies",
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
                {
                  "type": "Identifier",
                  "start": 128,
                  "end": 139,
                  "name": "data",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 132,
                    "end": 139,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 134,
                      "end": 139,
                      "typeName": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 139,
                        "name": "IData",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 141,
                "end": 147,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 144,
                  "end": 147
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 151,
          "end": 170,
          "name": "deps",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 155,
            "end": 170,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 157,
              "end": 170,
              "typeName": {
                "type": "Identifier",
                "start": 157,
                "end": 170,
                "name": "TDependencies",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 79,
        "end": 94,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 93,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 93,
              "name": "TDependencies",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 173,
        "end": 178,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 175,
          "end": 178
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 187,
          "end": 206,
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 191,
            "name": "DEPS",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 194,
            "end": 206,
            "properties": [
              {
                "type": "Property",
                "start": 198,
                "end": 204,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 201,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 203,
                  "end": 204,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 309,
      "expression": {
        "type": "CallExpression",
        "start": 208,
        "end": 308,
        "callee": {
          "type": "Identifier",
          "start": 208,
          "end": 212,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 216,
            "end": 298,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 217,
                "end": 221,
                "name": "deps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 223,
                "end": 227,
                "name": "data",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ObjectExpression",
              "start": 233,
              "end": 297,
              "properties": [
                {
                  "type": "Property",
                  "start": 239,
                  "end": 274,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 242,
                    "name": "fn1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 244,
                    "end": 274,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 255,
                      "end": 274,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 257,
                          "end": 272,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 264,
                            "end": 272,
                            "object": {
                              "type": "Identifier",
                              "start": 264,
                              "end": 268,
                              "name": "deps",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 269,
                              "end": 272,
                              "name": "foo",
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
                  "start": 280,
                  "end": 293,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 280,
                    "end": 283,
                    "name": "fn2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 285,
                    "end": 293,
                    "object": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 289,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 290,
                      "end": 293,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Identifier",
            "start": 302,
            "end": 306,
            "name": "DEPS",
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
      "type": "ExpressionStatement",
      "start": 311,
      "end": 425,
      "expression": {
        "type": "CallExpression",
        "start": 311,
        "end": 424,
        "callee": {
          "type": "Identifier",
          "start": 311,
          "end": 315,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 319,
            "end": 414,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 320,
                "end": 337,
                "name": "deps",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 324,
                  "end": 337,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 326,
                    "end": 337,
                    "exprName": {
                      "type": "Identifier",
                      "start": 333,
                      "end": 337,
                      "name": "DEPS",
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
              {
                "type": "Identifier",
                "start": 339,
                "end": 343,
                "name": "data",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ObjectExpression",
              "start": 349,
              "end": 413,
              "properties": [
                {
                  "type": "Property",
                  "start": 355,
                  "end": 390,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 355,
                    "end": 358,
                    "name": "fn1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 360,
                    "end": 390,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 371,
                      "end": 390,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 373,
                          "end": 388,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 380,
                            "end": 388,
                            "object": {
                              "type": "Identifier",
                              "start": 380,
                              "end": 384,
                              "name": "deps",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 385,
                              "end": 388,
                              "name": "foo",
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
                  "start": 396,
                  "end": 409,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 396,
                    "end": 399,
                    "name": "fn2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 401,
                    "end": 409,
                    "object": {
                      "type": "Identifier",
                      "start": 401,
                      "end": 405,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 406,
                      "end": 409,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Identifier",
            "start": 418,
            "end": 422,
            "name": "DEPS",
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
      "type": "ExpressionStatement",
      "start": 427,
      "end": 512,
      "expression": {
        "type": "CallExpression",
        "start": 427,
        "end": 511,
        "callee": {
          "type": "Identifier",
          "start": 427,
          "end": 431,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 435,
            "end": 501,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 436,
                "end": 440,
                "name": "deps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 442,
                "end": 446,
                "name": "data",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ObjectExpression",
              "start": 452,
              "end": 500,
              "properties": [
                {
                  "type": "Property",
                  "start": 458,
                  "end": 477,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 458,
                    "end": 461,
                    "name": "fn1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 463,
                    "end": 477,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "MemberExpression",
                      "start": 469,
                      "end": 477,
                      "object": {
                        "type": "Identifier",
                        "start": 469,
                        "end": 473,
                        "name": "deps",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 474,
                        "end": 477,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 483,
                  "end": 496,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 486,
                    "name": "fn2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "MemberExpression",
                    "start": 488,
                    "end": 496,
                    "object": {
                      "type": "Identifier",
                      "start": 488,
                      "end": 492,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 493,
                      "end": 496,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Identifier",
            "start": 505,
            "end": 509,
            "name": "DEPS",
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
      "type": "ExpressionStatement",
      "start": 514,
      "end": 626,
      "expression": {
        "type": "CallExpression",
        "start": 514,
        "end": 625,
        "callee": {
          "type": "Identifier",
          "start": 514,
          "end": 518,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 522,
            "end": 615,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 523,
                "end": 527,
                "name": "deps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 529,
                "end": 533,
                "name": "data",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 538,
              "end": 615,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 544,
                  "end": 611,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 551,
                    "end": 611,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 559,
                        "end": 584,
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 559,
                          "end": 562,
                          "name": "fn1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 562,
                          "end": 584,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 565,
                            "end": 584,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 567,
                                "end": 582,
                                "argument": {
                                  "type": "MemberExpression",
                                  "start": 574,
                                  "end": 582,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 574,
                                    "end": 578,
                                    "name": "deps",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 579,
                                    "end": 582,
                                    "name": "foo",
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
                        "start": 592,
                        "end": 605,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 592,
                          "end": 595,
                          "name": "fn2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "MemberExpression",
                          "start": 597,
                          "end": 605,
                          "object": {
                            "type": "Identifier",
                            "start": 597,
                            "end": 601,
                            "name": "data",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 602,
                            "end": 605,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Identifier",
            "start": 619,
            "end": 623,
            "name": "DEPS",
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
      "type": "ExpressionStatement",
      "start": 628,
      "end": 706,
      "expression": {
        "type": "CallExpression",
        "start": 628,
        "end": 705,
        "callee": {
          "type": "Identifier",
          "start": 628,
          "end": 632,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 636,
            "end": 695,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 637,
                "end": 641,
                "name": "deps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ObjectExpression",
              "start": 647,
              "end": 694,
              "properties": [
                {
                  "type": "Property",
                  "start": 653,
                  "end": 678,
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 653,
                    "end": 656,
                    "name": "fn1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 656,
                    "end": 678,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 659,
                      "end": 678,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 661,
                          "end": 676,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 668,
                            "end": 676,
                            "object": {
                              "type": "Identifier",
                              "start": 668,
                              "end": 672,
                              "name": "deps",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 673,
                              "end": 676,
                              "name": "foo",
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
                  "start": 684,
                  "end": 690,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 684,
                    "end": 687,
                    "name": "fn2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 689,
                    "end": 690,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Identifier",
            "start": 699,
            "end": 703,
            "name": "DEPS",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 155,
  "end": 1792,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 155,
      "end": 649,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 176,
        "decorators": [],
        "name": "ImmediatelyFix",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 177,
        "end": 649,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 183,
            "end": 272,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 190,
              "end": 193,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 191,
                  "end": 192,
                  "name": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 194,
              "end": 272,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 204,
                  "end": 266,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 207,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 207,
                    "end": 266,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 207,
                      "end": 210,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 208,
                          "end": 209,
                          "name": {
                            "type": "Identifier",
                            "start": 208,
                            "end": 209,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 211,
                        "end": 225,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 212,
                          "end": 225,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 214,
                            "end": 225,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 215,
                                "end": 219,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 216,
                                  "end": 219,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 218,
                                    "end": 219,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 218,
                                      "end": 219,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 221,
                              "end": 225,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 224,
                                "end": 225,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 224,
                                  "end": 225,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 227,
                      "end": 266,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 241,
                          "end": 256,
                          "argument": {
                            "type": "CallExpression",
                            "start": 248,
                            "end": 255,
                            "callee": {
                              "type": "Identifier",
                              "start": 248,
                              "end": 249,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 250,
                                "end": 254,
                                "value": null,
                                "raw": "null"
                              }
                            ],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 278,
            "end": 302,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 282,
                "end": 301,
                "id": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 283,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 286,
                  "end": 301,
                  "callee": {
                    "type": "Identifier",
                    "start": 290,
                    "end": 291,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 291,
                    "end": 299,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 292,
                        "end": 298
                      }
                    ]
                  },
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 307,
            "end": 338,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 311,
                "end": 337,
                "id": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 312,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 315,
                  "end": 337,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 315,
                    "end": 320,
                    "object": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 316,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 317,
                      "end": 320,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 321,
                      "end": 336,
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 321,
                        "end": 324,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 322,
                            "end": 323,
                            "name": {
                              "type": "Identifier",
                              "start": 322,
                              "end": 323,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 325,
                          "end": 329,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 326,
                            "end": 329,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 328,
                              "end": 329,
                              "typeName": {
                                "type": "Identifier",
                                "start": 328,
                                "end": 329,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 334,
                        "end": 336,
                        "value": "",
                        "raw": "''"
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 349,
            "end": 389,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 353,
                "end": 388,
                "id": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 355,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 358,
                  "end": 388,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 358,
                    "end": 363,
                    "object": {
                      "type": "Identifier",
                      "start": 358,
                      "end": 359,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 360,
                      "end": 363,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 363,
                    "end": 371,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 364,
                        "end": 370
                      }
                    ]
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 372,
                      "end": 387,
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 372,
                        "end": 375,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 373,
                            "end": 374,
                            "name": {
                              "type": "Identifier",
                              "start": 373,
                              "end": 374,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 376,
                          "end": 380,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 377,
                            "end": 380,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 379,
                              "end": 380,
                              "typeName": {
                                "type": "Identifier",
                                "start": 379,
                                "end": 380,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 385,
                        "end": 387,
                        "value": "",
                        "raw": "''"
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 405,
            "end": 429,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 409,
                "end": 428,
                "id": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 411,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 414,
                  "end": 428,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 414,
                    "end": 419,
                    "object": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 415,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 419,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 420,
                      "end": 427,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 420,
                          "end": 421,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 425,
                        "end": 427,
                        "value": "",
                        "raw": "''"
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 441,
            "end": 528,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 447,
              "end": 449,
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 449,
              "end": 452,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 450,
                  "end": 451,
                  "name": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 451,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 453,
              "end": 528,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 463,
                  "end": 522,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 463,
                    "end": 466,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 466,
                    "end": 522,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 467,
                        "end": 481,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 468,
                          "end": 481,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 470,
                            "end": 481,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 471,
                                "end": 475,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 472,
                                  "end": 475,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 474,
                                    "end": 475,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 474,
                                      "end": 475,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 477,
                              "end": 481,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 480,
                                "end": 481,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 480,
                                  "end": 481,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 483,
                      "end": 522,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 497,
                          "end": 512,
                          "argument": {
                            "type": "CallExpression",
                            "start": 504,
                            "end": 511,
                            "callee": {
                              "type": "Identifier",
                              "start": 504,
                              "end": 505,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 506,
                                "end": 510,
                                "value": null,
                                "raw": "null"
                              }
                            ],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 534,
            "end": 560,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 538,
                "end": 559,
                "id": {
                  "type": "Identifier",
                  "start": 538,
                  "end": 540,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 543,
                  "end": 559,
                  "callee": {
                    "type": "Identifier",
                    "start": 547,
                    "end": 549,
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 549,
                    "end": 557,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 550,
                        "end": 556
                      }
                    ]
                  },
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 565,
            "end": 597,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 569,
                "end": 596,
                "id": {
                  "type": "Identifier",
                  "start": 569,
                  "end": 571,
                  "decorators": [],
                  "name": "ra",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 574,
                  "end": 596,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 574,
                    "end": 580,
                    "object": {
                      "type": "Identifier",
                      "start": 574,
                      "end": 576,
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 577,
                      "end": 580,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 581,
                      "end": 595,
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 581,
                        "end": 584,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 582,
                            "end": 583,
                            "name": {
                              "type": "Identifier",
                              "start": 582,
                              "end": 583,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 585,
                          "end": 589,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 586,
                            "end": 589,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 588,
                              "end": 589,
                              "typeName": {
                                "type": "Identifier",
                                "start": 588,
                                "end": 589,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 594,
                        "end": 595,
                        "value": 1,
                        "raw": "1"
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 612,
            "end": 637,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 616,
                "end": 636,
                "id": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 619,
                  "decorators": [],
                  "name": "r3a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 622,
                  "end": 636,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 622,
                    "end": 628,
                    "object": {
                      "type": "Identifier",
                      "start": 622,
                      "end": 624,
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 625,
                      "end": 628,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 629,
                      "end": 635,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 629,
                          "end": 630,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 634,
                        "end": 635,
                        "value": 1,
                        "raw": "1"
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 651,
      "end": 1792,
      "id": {
        "type": "Identifier",
        "start": 658,
        "end": 672,
        "decorators": [],
        "name": "WithCandidates",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 673,
        "end": 1792,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 679,
            "end": 777,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 685,
              "end": 686,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 686,
              "end": 689,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 687,
                  "end": 688,
                  "name": {
                    "type": "Identifier",
                    "start": 687,
                    "end": 688,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 690,
              "end": 777,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 700,
                  "end": 771,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 700,
                    "end": 704,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 704,
                    "end": 771,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 704,
                      "end": 710,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 705,
                          "end": 706,
                          "name": {
                            "type": "Identifier",
                            "start": 705,
                            "end": 706,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 708,
                          "end": 709,
                          "name": {
                            "type": "Identifier",
                            "start": 708,
                            "end": 709,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 711,
                        "end": 715,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 712,
                          "end": 715,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 714,
                            "end": 715,
                            "typeName": {
                              "type": "Identifier",
                              "start": 714,
                              "end": 715,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 717,
                        "end": 732,
                        "decorators": [],
                        "name": "cb",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 719,
                          "end": 732,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 721,
                            "end": 732,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 722,
                                "end": 726,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 723,
                                  "end": 726,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 725,
                                    "end": 726,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 725,
                                      "end": 726,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 728,
                              "end": 732,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 731,
                                "end": 732,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 731,
                                  "end": 732,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 734,
                      "end": 771,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 748,
                          "end": 761,
                          "argument": {
                            "type": "CallExpression",
                            "start": 755,
                            "end": 760,
                            "callee": {
                              "type": "Identifier",
                              "start": 755,
                              "end": 757,
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 758,
                                "end": 759,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 783,
            "end": 800,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 787,
                "end": 799,
                "id": {
                  "type": "Identifier",
                  "start": 787,
                  "end": 799,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 788,
                    "end": 799,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 790,
                      "end": 799,
                      "typeName": {
                        "type": "Identifier",
                        "start": 790,
                        "end": 791,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 791,
                        "end": 799,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 792,
                            "end": 798
                          }
                        ]
                      }
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 805,
            "end": 858,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 809,
                "end": 857,
                "id": {
                  "type": "Identifier",
                  "start": 809,
                  "end": 811,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 814,
                  "end": 857,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 814,
                    "end": 820,
                    "object": {
                      "type": "Identifier",
                      "start": 814,
                      "end": 815,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 816,
                      "end": 820,
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 821,
                      "end": 822,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "FunctionExpression",
                      "start": 824,
                      "end": 856,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 833,
                        "end": 836,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 834,
                            "end": 835,
                            "name": {
                              "type": "Identifier",
                              "start": 834,
                              "end": 835,
                              "decorators": [],
                              "name": "Z",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 837,
                          "end": 841,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 838,
                            "end": 841,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 840,
                              "end": 841,
                              "typeName": {
                                "type": "Identifier",
                                "start": 840,
                                "end": 841,
                                "decorators": [],
                                "name": "Z",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 843,
                        "end": 856,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 845,
                            "end": 854,
                            "argument": {
                              "type": "Literal",
                              "start": 852,
                              "end": 854,
                              "value": "",
                              "raw": "''"
                            }
                          }
                        ]
                      },
                      "expression": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 941,
            "end": 971,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 945,
                "end": 970,
                "id": {
                  "type": "Identifier",
                  "start": 945,
                  "end": 947,
                  "decorators": [],
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 950,
                  "end": 970,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 950,
                    "end": 956,
                    "object": {
                      "type": "Identifier",
                      "start": 950,
                      "end": 951,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 952,
                      "end": 956,
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 957,
                      "end": 958,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 960,
                      "end": 969,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 961,
                          "end": 962,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 967,
                        "end": 969,
                        "value": "",
                        "raw": "''"
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 986,
            "end": 1038,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 990,
                "end": 1037,
                "id": {
                  "type": "Identifier",
                  "start": 990,
                  "end": 992,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 995,
                  "end": 1037,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 995,
                    "end": 1001,
                    "object": {
                      "type": "Identifier",
                      "start": 995,
                      "end": 996,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 997,
                      "end": 1001,
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1001,
                    "end": 1017,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1002,
                        "end": 1008
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 1010,
                        "end": 1016
                      }
                    ]
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1018,
                      "end": 1020,
                      "value": "",
                      "raw": "''"
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1022,
                      "end": 1036,
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 1022,
                        "end": 1025,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 1023,
                            "end": 1024,
                            "name": {
                              "type": "Identifier",
                              "start": 1023,
                              "end": 1024,
                              "decorators": [],
                              "name": "Z",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1026,
                          "end": 1030,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1027,
                            "end": 1030,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1029,
                              "end": 1030,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1029,
                                "end": 1030,
                                "decorators": [],
                                "name": "Z",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 1035,
                        "end": 1036,
                        "value": 1,
                        "raw": "1"
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 1054,
            "end": 1156,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1060,
              "end": 1062,
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1062,
              "end": 1068,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1063,
                  "end": 1064,
                  "name": {
                    "type": "Identifier",
                    "start": 1063,
                    "end": 1064,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1066,
                  "end": 1067,
                  "name": {
                    "type": "Identifier",
                    "start": 1066,
                    "end": 1067,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 1069,
              "end": 1156,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 1079,
                  "end": 1150,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1079,
                    "end": 1083,
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1083,
                    "end": 1150,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1084,
                        "end": 1088,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1085,
                          "end": 1088,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1087,
                            "end": 1088,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1087,
                              "end": 1088,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1090,
                        "end": 1105,
                        "decorators": [],
                        "name": "cb",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1092,
                          "end": 1105,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1094,
                            "end": 1105,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1095,
                                "end": 1099,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1096,
                                  "end": 1099,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1098,
                                    "end": 1099,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1098,
                                      "end": 1099,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1101,
                              "end": 1105,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1104,
                                "end": 1105,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1104,
                                  "end": 1105,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1107,
                        "end": 1111,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1108,
                          "end": 1111,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1110,
                            "end": 1111,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1110,
                              "end": 1111,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1113,
                      "end": 1150,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1127,
                          "end": 1140,
                          "argument": {
                            "type": "CallExpression",
                            "start": 1134,
                            "end": 1139,
                            "callee": {
                              "type": "Identifier",
                              "start": 1134,
                              "end": 1136,
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 1137,
                                "end": 1138,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1162,
            "end": 1189,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1166,
                "end": 1188,
                "id": {
                  "type": "Identifier",
                  "start": 1166,
                  "end": 1188,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1168,
                    "end": 1188,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1170,
                      "end": 1188,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1170,
                        "end": 1172,
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1172,
                        "end": 1188,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1173,
                            "end": 1179
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 1181,
                            "end": 1187
                          }
                        ]
                      }
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1194,
            "end": 1235,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1198,
                "end": 1234,
                "id": {
                  "type": "Identifier",
                  "start": 1198,
                  "end": 1200,
                  "decorators": [],
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1203,
                  "end": 1234,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1203,
                    "end": 1210,
                    "object": {
                      "type": "Identifier",
                      "start": 1203,
                      "end": 1205,
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1206,
                      "end": 1210,
                      "decorators": [],
                      "name": "foo3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1211,
                      "end": 1212,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1214,
                      "end": 1229,
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 1214,
                        "end": 1217,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 1215,
                            "end": 1216,
                            "name": {
                              "type": "Identifier",
                              "start": 1215,
                              "end": 1216,
                              "decorators": [],
                              "name": "Z",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1218,
                          "end": 1222,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1219,
                            "end": 1222,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1221,
                              "end": 1222,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1221,
                                "end": 1222,
                                "decorators": [],
                                "name": "Z",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 1227,
                        "end": 1229,
                        "value": "",
                        "raw": "''"
                      },
                      "id": null,
                      "generator": false
                    },
                    {
                      "type": "Literal",
                      "start": 1231,
                      "end": 1233,
                      "value": "",
                      "raw": "''"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1250,
            "end": 1302,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1254,
                "end": 1301,
                "id": {
                  "type": "Identifier",
                  "start": 1254,
                  "end": 1256,
                  "decorators": [],
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1259,
                  "end": 1301,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1259,
                    "end": 1266,
                    "object": {
                      "type": "Identifier",
                      "start": 1259,
                      "end": 1261,
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1262,
                      "end": 1266,
                      "decorators": [],
                      "name": "foo3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1267,
                      "end": 1268,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "FunctionExpression",
                      "start": 1270,
                      "end": 1296,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1280,
                          "end": 1281,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1283,
                        "end": 1296,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1285,
                            "end": 1294,
                            "argument": {
                              "type": "Literal",
                              "start": 1292,
                              "end": 1294,
                              "value": "",
                              "raw": "''"
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    {
                      "type": "Literal",
                      "start": 1298,
                      "end": 1300,
                      "value": "",
                      "raw": "''"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 1318,
            "end": 1425,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1324,
              "end": 1326,
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1326,
              "end": 1332,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1327,
                  "end": 1328,
                  "name": {
                    "type": "Identifier",
                    "start": 1327,
                    "end": 1328,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1330,
                  "end": 1331,
                  "name": {
                    "type": "Identifier",
                    "start": 1330,
                    "end": 1331,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 1333,
              "end": 1425,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 1343,
                  "end": 1419,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1343,
                    "end": 1347,
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1347,
                    "end": 1419,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1347,
                      "end": 1352,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1348,
                          "end": 1349,
                          "name": {
                            "type": "Identifier",
                            "start": 1348,
                            "end": 1349,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 1350,
                          "end": 1351,
                          "name": {
                            "type": "Identifier",
                            "start": 1350,
                            "end": 1351,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1353,
                        "end": 1357,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1354,
                          "end": 1357,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1356,
                            "end": 1357,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1356,
                              "end": 1357,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1359,
                        "end": 1374,
                        "decorators": [],
                        "name": "cb",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1361,
                          "end": 1374,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1363,
                            "end": 1374,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1364,
                                "end": 1368,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1365,
                                  "end": 1368,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1367,
                                    "end": 1368,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1367,
                                      "end": 1368,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1370,
                              "end": 1374,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1373,
                                "end": 1374,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1373,
                                  "end": 1374,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 1376,
                        "end": 1380,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1377,
                          "end": 1380,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1379,
                            "end": 1380,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1379,
                              "end": 1380,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1382,
                      "end": 1419,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1396,
                          "end": 1409,
                          "argument": {
                            "type": "CallExpression",
                            "start": 1403,
                            "end": 1408,
                            "callee": {
                              "type": "Identifier",
                              "start": 1403,
                              "end": 1405,
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 1406,
                                "end": 1407,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1430,
            "end": 1457,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1434,
                "end": 1456,
                "id": {
                  "type": "Identifier",
                  "start": 1434,
                  "end": 1456,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1436,
                    "end": 1456,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1438,
                      "end": 1456,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1438,
                        "end": 1440,
                        "decorators": [],
                        "name": "C3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1440,
                        "end": 1456,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1441,
                            "end": 1447
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 1449,
                            "end": 1455
                          }
                        ]
                      }
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 1463,
            "end": 1790,
            "id": {
              "type": "Identifier",
              "start": 1472,
              "end": 1477,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1477,
              "end": 1483,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1478,
                  "end": 1479,
                  "name": {
                    "type": "Identifier",
                    "start": 1478,
                    "end": 1479,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1481,
                  "end": 1482,
                  "name": {
                    "type": "Identifier",
                    "start": 1481,
                    "end": 1482,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 1484,
                "end": 1488,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1485,
                  "end": 1488,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1487,
                    "end": 1488,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1487,
                      "end": 1488,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1490,
                "end": 1494,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1491,
                  "end": 1494,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1493,
                    "end": 1494,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1493,
                      "end": 1494,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1496,
              "end": 1790,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1506,
                  "end": 1540,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1510,
                      "end": 1539,
                      "id": {
                        "type": "Identifier",
                        "start": 1510,
                        "end": 1513,
                        "decorators": [],
                        "name": "r10",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 1516,
                        "end": 1539,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1516,
                          "end": 1522,
                          "object": {
                            "type": "Identifier",
                            "start": 1516,
                            "end": 1517,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1518,
                            "end": 1522,
                            "decorators": [],
                            "name": "foo2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1523,
                            "end": 1524,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 1526,
                            "end": 1538,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1527,
                                "end": 1531,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1528,
                                  "end": 1531,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1530,
                                    "end": 1531,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1530,
                                      "end": 1531,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "start": 1536,
                              "end": 1538,
                              "value": "",
                              "raw": "''"
                            },
                            "id": null,
                            "generator": false
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1558,
                  "end": 1589,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1562,
                      "end": 1588,
                      "id": {
                        "type": "Identifier",
                        "start": 1562,
                        "end": 1565,
                        "decorators": [],
                        "name": "r10",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 1568,
                        "end": 1588,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1568,
                          "end": 1574,
                          "object": {
                            "type": "Identifier",
                            "start": 1568,
                            "end": 1569,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1570,
                            "end": 1574,
                            "decorators": [],
                            "name": "foo2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1575,
                            "end": 1576,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 1578,
                            "end": 1587,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1579,
                                "end": 1580,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "start": 1585,
                              "end": 1587,
                              "value": "",
                              "raw": "''"
                            },
                            "id": null,
                            "generator": false
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1609,
                  "end": 1648,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1613,
                      "end": 1647,
                      "id": {
                        "type": "Identifier",
                        "start": 1613,
                        "end": 1616,
                        "decorators": [],
                        "name": "r11",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 1619,
                        "end": 1647,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1619,
                          "end": 1626,
                          "object": {
                            "type": "Identifier",
                            "start": 1619,
                            "end": 1621,
                            "decorators": [],
                            "name": "c3",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1622,
                            "end": 1626,
                            "decorators": [],
                            "name": "foo3",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1627,
                            "end": 1628,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 1630,
                            "end": 1642,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1631,
                                "end": 1635,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1632,
                                  "end": 1635,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1634,
                                    "end": 1635,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1634,
                                      "end": 1635,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "start": 1640,
                              "end": 1642,
                              "value": "",
                              "raw": "''"
                            },
                            "id": null,
                            "generator": false
                          },
                          {
                            "type": "Literal",
                            "start": 1644,
                            "end": 1646,
                            "value": "",
                            "raw": "''"
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1666,
                  "end": 1705,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1670,
                      "end": 1704,
                      "id": {
                        "type": "Identifier",
                        "start": 1670,
                        "end": 1674,
                        "decorators": [],
                        "name": "r11b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 1677,
                        "end": 1704,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1677,
                          "end": 1684,
                          "object": {
                            "type": "Identifier",
                            "start": 1677,
                            "end": 1679,
                            "decorators": [],
                            "name": "c3",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1680,
                            "end": 1684,
                            "decorators": [],
                            "name": "foo3",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1685,
                            "end": 1686,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 1688,
                            "end": 1700,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1689,
                                "end": 1693,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1690,
                                  "end": 1693,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1692,
                                    "end": 1693,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1692,
                                      "end": 1693,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "start": 1698,
                              "end": 1700,
                              "value": "",
                              "raw": "''"
                            },
                            "id": null,
                            "generator": false
                          },
                          {
                            "type": "Literal",
                            "start": 1702,
                            "end": 1703,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1723,
                  "end": 1775,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1727,
                      "end": 1774,
                      "id": {
                        "type": "Identifier",
                        "start": 1727,
                        "end": 1730,
                        "decorators": [],
                        "name": "r12",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 1733,
                        "end": 1774,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1733,
                          "end": 1740,
                          "object": {
                            "type": "Identifier",
                            "start": 1733,
                            "end": 1735,
                            "decorators": [],
                            "name": "c3",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1736,
                            "end": 1740,
                            "decorators": [],
                            "name": "foo3",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1741,
                            "end": 1742,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "FunctionExpression",
                            "start": 1744,
                            "end": 1770,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1754,
                                "end": 1755,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 1757,
                              "end": 1770,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1759,
                                  "end": 1768,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 1766,
                                    "end": 1768,
                                    "value": "",
                                    "raw": "''"
                                  }
                                }
                              ]
                            },
                            "expression": false
                          },
                          {
                            "type": "Literal",
                            "start": 1772,
                            "end": 1773,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

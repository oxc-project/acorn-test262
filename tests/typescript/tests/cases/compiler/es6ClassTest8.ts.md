__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1097,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 12,
          "end": 17,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 13,
            "end": 17,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 14,
              "end": 17
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 30,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 20,
            "end": 29,
            "argument": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 203,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 203,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 198,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 57,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 57,
              "end": 198,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 60,
                "end": 198,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 70,
                    "end": 163,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 74,
                        "end": 162,
                        "id": {
                          "type": "Identifier",
                          "start": 74,
                          "end": 81,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 77,
                            "end": 81,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 78,
                              "end": 81
                            }
                          }
                        },
                        "init": {
                          "type": "FunctionExpression",
                          "start": 85,
                          "end": 161,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 96,
                            "end": 161,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 110,
                                "end": 121,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 117,
                                  "end": 120,
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "expression": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 172,
                    "end": 192,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 176,
                        "end": 191,
                        "id": {
                          "type": "Identifier",
                          "start": 176,
                          "end": 177,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 180,
                          "end": 191,
                          "callee": {
                            "type": "Identifier",
                            "start": 180,
                            "end": 182,
                            "decorators": [],
                            "name": "f1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "start": 183,
                              "end": 190,
                              "callee": {
                                "type": "Identifier",
                                "start": 183,
                                "end": 185,
                                "decorators": [],
                                "name": "f1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 186,
                                  "end": 189,
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
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
            },
            "kind": "constructor",
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
      "type": "ClassDeclaration",
      "start": 205,
      "end": 629,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 217,
        "decorators": [],
        "name": "Vector",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 218,
        "end": 629,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 224,
            "end": 267,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 231,
              "end": 235,
              "decorators": [],
              "name": "norm",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 235,
              "end": 267,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 236,
                  "end": 244,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 237,
                    "end": 244,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 238,
                      "end": 244,
                      "typeName": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 244,
                        "decorators": [],
                        "name": "Vector",
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
                "start": 245,
                "end": 252,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 246,
                  "end": 252,
                  "typeName": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 252,
                    "decorators": [],
                    "name": "Vector",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 253,
                "end": 267,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 254,
                    "end": 266,
                    "argument": {
                      "type": "Literal",
                      "start": 261,
                      "end": 265,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 272,
            "end": 328,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 279,
              "end": 284,
              "decorators": [],
              "name": "minus",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 284,
              "end": 328,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 285,
                  "end": 294,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 287,
                    "end": 294,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 288,
                      "end": 294,
                      "typeName": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 294,
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 296,
                  "end": 305,
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 298,
                    "end": 305,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 299,
                      "end": 305,
                      "typeName": {
                        "type": "Identifier",
                        "start": 299,
                        "end": 305,
                        "decorators": [],
                        "name": "Vector",
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
                "start": 306,
                "end": 313,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 307,
                  "end": 313,
                  "typeName": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 313,
                    "decorators": [],
                    "name": "Vector",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 314,
                "end": 328,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 315,
                    "end": 327,
                    "argument": {
                      "type": "Literal",
                      "start": 322,
                      "end": 326,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 333,
            "end": 389,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 340,
              "end": 345,
              "decorators": [],
              "name": "times",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 345,
              "end": 389,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 346,
                  "end": 355,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 348,
                    "end": 355,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 349,
                      "end": 355,
                      "typeName": {
                        "type": "Identifier",
                        "start": 349,
                        "end": 355,
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 357,
                  "end": 366,
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 359,
                    "end": 366,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 360,
                      "end": 366,
                      "typeName": {
                        "type": "Identifier",
                        "start": 360,
                        "end": 366,
                        "decorators": [],
                        "name": "Vector",
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
                "start": 367,
                "end": 374,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 368,
                  "end": 374,
                  "typeName": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 374,
                    "decorators": [],
                    "name": "Vector",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 375,
                "end": 389,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 376,
                    "end": 388,
                    "argument": {
                      "type": "Literal",
                      "start": 383,
                      "end": 387,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 394,
            "end": 450,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 401,
              "end": 406,
              "decorators": [],
              "name": "cross",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 406,
              "end": 450,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 407,
                  "end": 416,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 409,
                    "end": 416,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 410,
                      "end": 416,
                      "typeName": {
                        "type": "Identifier",
                        "start": 410,
                        "end": 416,
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 418,
                  "end": 427,
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 420,
                    "end": 427,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 421,
                      "end": 427,
                      "typeName": {
                        "type": "Identifier",
                        "start": 421,
                        "end": 427,
                        "decorators": [],
                        "name": "Vector",
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
                "start": 428,
                "end": 435,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 429,
                  "end": 435,
                  "typeName": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 435,
                    "decorators": [],
                    "name": "Vector",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 436,
                "end": 450,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 437,
                    "end": 449,
                    "argument": {
                      "type": "Literal",
                      "start": 444,
                      "end": 448,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 456,
            "end": 562,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 456,
              "end": 467,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 467,
              "end": 562,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 468,
                  "end": 484,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 475,
                    "end": 484,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 476,
                      "end": 484,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 478,
                        "end": 484
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 502,
                  "end": 518,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 509,
                    "end": 518,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 510,
                      "end": 518,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 512,
                        "end": 518
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 536,
                  "end": 552,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 543,
                    "end": 552,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 544,
                      "end": 552,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 546,
                        "end": 552
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 554,
                "end": 562,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 568,
            "end": 622,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 575,
              "end": 578,
              "decorators": [],
              "name": "dot",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 578,
              "end": 622,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 579,
                  "end": 588,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 581,
                    "end": 588,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 582,
                      "end": 588,
                      "typeName": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 588,
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 590,
                  "end": 599,
                  "decorators": [],
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 592,
                    "end": 599,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 593,
                      "end": 599,
                      "typeName": {
                        "type": "Identifier",
                        "start": 593,
                        "end": 599,
                        "decorators": [],
                        "name": "Vector",
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
                "start": 600,
                "end": 607,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 601,
                  "end": 607,
                  "typeName": {
                    "type": "Identifier",
                    "start": 601,
                    "end": 607,
                    "decorators": [],
                    "name": "Vector",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 608,
                "end": 622,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 609,
                    "end": 621,
                    "argument": {
                      "type": "Literal",
                      "start": 616,
                      "end": 620,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
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
      "type": "ClassDeclaration",
      "start": 645,
      "end": 1096,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 651,
        "end": 657,
        "decorators": [],
        "name": "Camera",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 658,
        "end": 1096,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 664,
            "end": 687,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 671,
              "end": 678,
              "decorators": [],
              "name": "forward",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 678,
              "end": 686,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 680,
                "end": 686,
                "typeName": {
                  "type": "Identifier",
                  "start": 680,
                  "end": 686,
                  "decorators": [],
                  "name": "Vector",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 692,
            "end": 713,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 699,
              "end": 704,
              "decorators": [],
              "name": "right",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 704,
              "end": 712,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 706,
                "end": 712,
                "typeName": {
                  "type": "Identifier",
                  "start": 706,
                  "end": 712,
                  "decorators": [],
                  "name": "Vector",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 718,
            "end": 736,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 725,
              "end": 727,
              "decorators": [],
              "name": "up",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 727,
              "end": 735,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 729,
                "end": 735,
                "typeName": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 735,
                  "decorators": [],
                  "name": "Vector",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 741,
            "end": 1094,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 741,
              "end": 752,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 752,
              "end": 1094,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 753,
                  "end": 771,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 760,
                    "end": 771,
                    "decorators": [],
                    "name": "pos",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 763,
                      "end": 771,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 765,
                        "end": 771,
                        "typeName": {
                          "type": "Identifier",
                          "start": 765,
                          "end": 771,
                          "decorators": [],
                          "name": "Vector",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "Identifier",
                  "start": 773,
                  "end": 787,
                  "decorators": [],
                  "name": "lookAt",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 779,
                    "end": 787,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 781,
                      "end": 787,
                      "typeName": {
                        "type": "Identifier",
                        "start": 781,
                        "end": 787,
                        "decorators": [],
                        "name": "Vector",
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
                "start": 789,
                "end": 1094,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 800,
                    "end": 838,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 804,
                        "end": 837,
                        "id": {
                          "type": "Identifier",
                          "start": 804,
                          "end": 808,
                          "decorators": [],
                          "name": "down",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 811,
                          "end": 837,
                          "callee": {
                            "type": "Identifier",
                            "start": 815,
                            "end": 821,
                            "decorators": [],
                            "name": "Vector",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 822,
                              "end": 825,
                              "value": 0,
                              "raw": "0.0"
                            },
                            {
                              "type": "UnaryExpression",
                              "start": 827,
                              "end": 831,
                              "operator": "-",
                              "argument": {
                                "type": "Literal",
                                "start": 828,
                                "end": 831,
                                "value": 1,
                                "raw": "1.0"
                              },
                              "prefix": true
                            },
                            {
                              "type": "Literal",
                              "start": 833,
                              "end": 836,
                              "value": 0,
                              "raw": "0.0"
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 847,
                    "end": 905,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 847,
                      "end": 904,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 847,
                        "end": 859,
                        "object": {
                          "type": "ThisExpression",
                          "start": 847,
                          "end": 851
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 852,
                          "end": 859,
                          "decorators": [],
                          "name": "forward",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 862,
                        "end": 904,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 862,
                          "end": 873,
                          "object": {
                            "type": "Identifier",
                            "start": 862,
                            "end": 868,
                            "decorators": [],
                            "name": "Vector",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 869,
                            "end": 873,
                            "decorators": [],
                            "name": "norm",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "start": 874,
                            "end": 903,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 874,
                              "end": 886,
                              "object": {
                                "type": "Identifier",
                                "start": 874,
                                "end": 880,
                                "decorators": [],
                                "name": "Vector",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 881,
                                "end": 886,
                                "decorators": [],
                                "name": "minus",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 887,
                                "end": 893,
                                "decorators": [],
                                "name": "lookAt",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "MemberExpression",
                                "start": 894,
                                "end": 902,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 894,
                                  "end": 898
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 899,
                                  "end": 902,
                                  "decorators": [],
                                  "name": "pos",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            ],
                            "optional": false
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 914,
                    "end": 993,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 914,
                      "end": 992,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 914,
                        "end": 924,
                        "object": {
                          "type": "ThisExpression",
                          "start": 914,
                          "end": 918
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 919,
                          "end": 924,
                          "decorators": [],
                          "name": "right",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 927,
                        "end": 992,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 927,
                          "end": 939,
                          "object": {
                            "type": "Identifier",
                            "start": 927,
                            "end": 933,
                            "decorators": [],
                            "name": "Vector",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 934,
                            "end": 939,
                            "decorators": [],
                            "name": "times",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 940,
                            "end": 944,
                            "decorators": [],
                            "name": "down",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "CallExpression",
                            "start": 946,
                            "end": 991,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 946,
                              "end": 957,
                              "object": {
                                "type": "Identifier",
                                "start": 946,
                                "end": 952,
                                "decorators": [],
                                "name": "Vector",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 953,
                                "end": 957,
                                "decorators": [],
                                "name": "norm",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 958,
                                "end": 990,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 958,
                                  "end": 970,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 958,
                                    "end": 964,
                                    "decorators": [],
                                    "name": "Vector",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 965,
                                    "end": 970,
                                    "decorators": [],
                                    "name": "cross",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 971,
                                    "end": 983,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 971,
                                      "end": 975
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 976,
                                      "end": 983,
                                      "decorators": [],
                                      "name": "forward",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 985,
                                    "end": 989,
                                    "decorators": [],
                                    "name": "down",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "optional": false
                              }
                            ],
                            "optional": false
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1002,
                    "end": 1084,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1002,
                      "end": 1083,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1002,
                        "end": 1009,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1002,
                          "end": 1006
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1007,
                          "end": 1009,
                          "decorators": [],
                          "name": "up",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 1012,
                        "end": 1083,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1012,
                          "end": 1024,
                          "object": {
                            "type": "Identifier",
                            "start": 1012,
                            "end": 1018,
                            "decorators": [],
                            "name": "Vector",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1019,
                            "end": 1024,
                            "decorators": [],
                            "name": "times",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1025,
                            "end": 1029,
                            "decorators": [],
                            "name": "down",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "CallExpression",
                            "start": 1031,
                            "end": 1082,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1031,
                              "end": 1042,
                              "object": {
                                "type": "Identifier",
                                "start": 1031,
                                "end": 1037,
                                "decorators": [],
                                "name": "Vector",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1038,
                                "end": 1042,
                                "decorators": [],
                                "name": "norm",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 1043,
                                "end": 1081,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 1043,
                                  "end": 1055,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1043,
                                    "end": 1049,
                                    "decorators": [],
                                    "name": "Vector",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1050,
                                    "end": 1055,
                                    "decorators": [],
                                    "name": "cross",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 1056,
                                    "end": 1068,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1056,
                                      "end": 1060
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1061,
                                      "end": 1068,
                                      "decorators": [],
                                      "name": "forward",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "start": 1070,
                                    "end": 1080,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1070,
                                      "end": 1074
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1075,
                                      "end": 1080,
                                      "decorators": [],
                                      "name": "right",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                ],
                                "optional": false
                              }
                            ],
                            "optional": false
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 123,
  "end": 1068,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 123,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 135,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 136,
          "end": 150,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 139,
            "end": 140,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 140,
            "end": 150,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 142,
              "end": 150,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 142,
                "end": 148
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 152,
        "end": 155,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 196,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 161,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 164,
            "end": 196,
            "id": {
              "type": "Identifier",
              "start": 173,
              "end": 176,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 177,
                "end": 191,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 181,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 181,
                  "end": 191,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 183,
                    "end": 191,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 183,
                      "end": 189
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 193,
              "end": 196,
              "body": []
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
      "start": 197,
      "end": 245,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 203,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 206,
            "end": 245,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 207,
                "end": 221,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 211,
                  "end": 221,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 213,
                    "end": 221,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 213,
                      "end": 219
                    }
                  }
                },
                "value": null
              },
              {
                "type": "RestElement",
                "start": 223,
                "end": 237,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 227,
                  "end": 237,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 229,
                    "end": 237,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 229,
                      "end": 235
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 242,
              "end": 245,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 247,
      "end": 286,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 253,
        "end": 254,
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
        "start": 255,
        "end": 286,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 261,
            "end": 284,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 264,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 264,
              "end": 284,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 265,
                  "end": 279,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 268,
                    "end": 269,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 269,
                    "end": 279,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 271,
                      "end": 279,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 271,
                        "end": 277
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 281,
                "end": 284,
                "body": []
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
      "type": "TSInterfaceDeclaration",
      "start": 288,
      "end": 366,
      "id": {
        "type": "Identifier",
        "start": 298,
        "end": 299,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 300,
        "end": 366,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 306,
            "end": 323,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 307,
                "end": 321,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 311,
                  "end": 321,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 313,
                    "end": 321,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 313,
                      "end": 319
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": null
          },
          {
            "type": "TSMethodSignature",
            "start": 328,
            "end": 364,
            "key": {
              "type": "Identifier",
              "start": 328,
              "end": 331,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 332,
                "end": 346,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 336,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 336,
                  "end": 346,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 338,
                    "end": 346,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 338,
                      "end": 344
                    }
                  }
                },
                "value": null
              },
              {
                "type": "RestElement",
                "start": 348,
                "end": 362,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 352,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 352,
                  "end": 362,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 354,
                    "end": 362,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 354,
                      "end": 360
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
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
      "start": 368,
      "end": 425,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 425,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 425,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 373,
              "end": 425,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 375,
                "end": 425,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 381,
                    "end": 398,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 382,
                        "end": 396,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 385,
                          "end": 386,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 386,
                          "end": 396,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 388,
                            "end": 396,
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 388,
                              "end": 394
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 403,
                    "end": 423,
                    "key": {
                      "type": "Identifier",
                      "start": 403,
                      "end": 406,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 407,
                        "end": 421,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 410,
                          "end": 411,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 411,
                          "end": 421,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 413,
                            "end": 421,
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 413,
                              "end": 419
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
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
      "start": 427,
      "end": 555,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 555,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 432,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 435,
            "end": 555,
            "properties": [
              {
                "type": "Property",
                "start": 441,
                "end": 464,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 444,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 444,
                  "end": 464,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 445,
                      "end": 459,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 448,
                        "end": 449,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 449,
                        "end": 459,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 451,
                          "end": 459,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 451,
                            "end": 457
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 461,
                    "end": 464,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 470,
                "end": 521,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 470,
                  "end": 471,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 473,
                  "end": 521,
                  "id": {
                    "type": "Identifier",
                    "start": 482,
                    "end": 485,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 486,
                      "end": 500,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 489,
                        "end": 490,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 490,
                        "end": 500,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 492,
                          "end": 500,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 492,
                            "end": 498
                          }
                        }
                      },
                      "value": null
                    },
                    {
                      "type": "RestElement",
                      "start": 502,
                      "end": 516,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 505,
                        "end": 506,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 506,
                        "end": 516,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 508,
                          "end": 516,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 508,
                            "end": 514
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 518,
                    "end": 521,
                    "body": []
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 527,
                "end": 553,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 527,
                  "end": 528,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 530,
                  "end": 553,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 531,
                      "end": 545,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 534,
                        "end": 535,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 535,
                        "end": 545,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 537,
                          "end": 545,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 537,
                            "end": 543
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 550,
                    "end": 553,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 560,
      "end": 598,
      "id": {
        "type": "Identifier",
        "start": 569,
        "end": 573,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 574,
          "end": 593,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 577,
            "end": 578,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 578,
            "end": 593,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 580,
              "end": 593,
              "typeName": {
                "type": "Identifier",
                "start": 580,
                "end": 585,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 585,
                "end": 593,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 586,
                    "end": 592
                  }
                ]
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 595,
        "end": 598,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 599,
      "end": 645,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 603,
          "end": 645,
          "id": {
            "type": "Identifier",
            "start": 603,
            "end": 605,
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 608,
            "end": 645,
            "id": {
              "type": "Identifier",
              "start": 617,
              "end": 620,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 621,
                "end": 640,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 624,
                  "end": 625,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 625,
                  "end": 640,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 627,
                    "end": 640,
                    "typeName": {
                      "type": "Identifier",
                      "start": 627,
                      "end": 632,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 632,
                      "end": 640,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 633,
                          "end": 639
                        }
                      ]
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 642,
              "end": 645,
              "body": []
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
      "start": 646,
      "end": 704,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 650,
          "end": 704,
          "id": {
            "type": "Identifier",
            "start": 650,
            "end": 652,
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 655,
            "end": 704,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 656,
                "end": 675,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 659,
                  "end": 660,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 660,
                  "end": 675,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 662,
                    "end": 675,
                    "typeName": {
                      "type": "Identifier",
                      "start": 662,
                      "end": 667,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 667,
                      "end": 675,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 668,
                          "end": 674
                        }
                      ]
                    }
                  }
                },
                "value": null
              },
              {
                "type": "RestElement",
                "start": 677,
                "end": 696,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 680,
                  "end": 681,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 681,
                  "end": 696,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 683,
                    "end": 696,
                    "typeName": {
                      "type": "Identifier",
                      "start": 683,
                      "end": 688,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 688,
                      "end": 696,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 689,
                          "end": 695
                        }
                      ]
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 701,
              "end": 704,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 706,
      "end": 751,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 712,
        "end": 714,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 715,
        "end": 751,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 721,
            "end": 749,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 721,
              "end": 724,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 724,
              "end": 749,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 725,
                  "end": 744,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 728,
                    "end": 729,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 729,
                    "end": 744,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 731,
                      "end": 744,
                      "typeName": {
                        "type": "Identifier",
                        "start": 731,
                        "end": 736,
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 736,
                        "end": 744,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 737,
                            "end": 743
                          }
                        ]
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 746,
                "end": 749,
                "body": []
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
      "type": "TSInterfaceDeclaration",
      "start": 753,
      "end": 847,
      "id": {
        "type": "Identifier",
        "start": 763,
        "end": 765,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 766,
        "end": 847,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 772,
            "end": 794,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 773,
                "end": 792,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 776,
                  "end": 777,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 777,
                  "end": 792,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 779,
                    "end": 792,
                    "typeName": {
                      "type": "Identifier",
                      "start": 779,
                      "end": 784,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 784,
                      "end": 792,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 785,
                          "end": 791
                        }
                      ]
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": null
          },
          {
            "type": "TSMethodSignature",
            "start": 799,
            "end": 845,
            "key": {
              "type": "Identifier",
              "start": 799,
              "end": 802,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 803,
                "end": 822,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 806,
                  "end": 807,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 807,
                  "end": 822,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 809,
                    "end": 822,
                    "typeName": {
                      "type": "Identifier",
                      "start": 809,
                      "end": 814,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 814,
                      "end": 822,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 815,
                          "end": 821
                        }
                      ]
                    }
                  }
                },
                "value": null
              },
              {
                "type": "RestElement",
                "start": 824,
                "end": 843,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 827,
                  "end": 828,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 828,
                  "end": 843,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 830,
                    "end": 843,
                    "typeName": {
                      "type": "Identifier",
                      "start": 830,
                      "end": 835,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 835,
                      "end": 843,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 836,
                          "end": 842
                        }
                      ]
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
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
      "start": 849,
      "end": 917,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 853,
          "end": 917,
          "id": {
            "type": "Identifier",
            "start": 853,
            "end": 917,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 855,
              "end": 917,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 857,
                "end": 917,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 863,
                    "end": 885,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 864,
                        "end": 883,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 867,
                          "end": 868,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 868,
                          "end": 883,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 870,
                            "end": 883,
                            "typeName": {
                              "type": "Identifier",
                              "start": 870,
                              "end": 875,
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 875,
                              "end": 883,
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 876,
                                  "end": 882
                                }
                              ]
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 890,
                    "end": 915,
                    "key": {
                      "type": "Identifier",
                      "start": 890,
                      "end": 893,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 894,
                        "end": 913,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 897,
                          "end": 898,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 898,
                          "end": 913,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 900,
                            "end": 913,
                            "typeName": {
                              "type": "Identifier",
                              "start": 900,
                              "end": 905,
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 905,
                              "end": 913,
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 906,
                                  "end": 912
                                }
                              ]
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
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
      "start": 919,
      "end": 1068,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 923,
          "end": 1068,
          "id": {
            "type": "Identifier",
            "start": 923,
            "end": 925,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 928,
            "end": 1068,
            "properties": [
              {
                "type": "Property",
                "start": 934,
                "end": 962,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 934,
                  "end": 937,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 937,
                  "end": 962,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 938,
                      "end": 957,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 941,
                        "end": 942,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 942,
                        "end": 957,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 944,
                          "end": 957,
                          "typeName": {
                            "type": "Identifier",
                            "start": 944,
                            "end": 949,
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 949,
                            "end": 957,
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 950,
                                "end": 956
                              }
                            ]
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 959,
                    "end": 962,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 968,
                "end": 1029,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 968,
                  "end": 969,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 971,
                  "end": 1029,
                  "id": {
                    "type": "Identifier",
                    "start": 980,
                    "end": 983,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 984,
                      "end": 1003,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 987,
                        "end": 988,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 988,
                        "end": 1003,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 990,
                          "end": 1003,
                          "typeName": {
                            "type": "Identifier",
                            "start": 990,
                            "end": 995,
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 995,
                            "end": 1003,
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 996,
                                "end": 1002
                              }
                            ]
                          }
                        }
                      },
                      "value": null
                    },
                    {
                      "type": "RestElement",
                      "start": 1005,
                      "end": 1024,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1008,
                        "end": 1009,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1009,
                        "end": 1024,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1011,
                          "end": 1024,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1011,
                            "end": 1016,
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1016,
                            "end": 1024,
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1017,
                                "end": 1023
                              }
                            ]
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1026,
                    "end": 1029,
                    "body": []
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1035,
                "end": 1066,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1035,
                  "end": 1036,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1038,
                  "end": 1066,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 1039,
                      "end": 1058,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 1042,
                        "end": 1043,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1043,
                        "end": 1058,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1045,
                          "end": 1058,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1045,
                            "end": 1050,
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1050,
                            "end": 1058,
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1051,
                                "end": 1057
                              }
                            ]
                          }
                        }
                      },
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1063,
                    "end": 1066,
                    "body": []
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

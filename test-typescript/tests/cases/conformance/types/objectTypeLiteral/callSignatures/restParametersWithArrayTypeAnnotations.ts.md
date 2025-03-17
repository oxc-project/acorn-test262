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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 136,
          "end": 150,
          "argument": {
            "type": "Identifier",
            "start": 139,
            "end": 140,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
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
      "body": {
        "type": "BlockStatement",
        "start": 152,
        "end": 155,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 161,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 164,
            "end": 196,
            "id": {
              "type": "Identifier",
              "start": 173,
              "end": 176,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "RestElement",
                "start": 177,
                "end": 191,
                "argument": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 181,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
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
            "body": {
              "type": "BlockStatement",
              "start": 193,
              "end": 196,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 203,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 206,
            "end": 245,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "RestElement",
                "start": 207,
                "end": 221,
                "argument": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
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
                "argument": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
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
            "body": {
              "type": "BlockStatement",
              "start": 242,
              "end": 245,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 247,
      "end": 286,
      "id": {
        "type": "Identifier",
        "start": 253,
        "end": 254,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 255,
        "end": 286,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 261,
            "end": 284,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 264,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 264,
              "end": 284,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 265,
                  "end": 279,
                  "argument": {
                    "type": "Identifier",
                    "start": 268,
                    "end": 269,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
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
              "body": {
                "type": "BlockStatement",
                "start": 281,
                "end": 284,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 288,
      "end": 366,
      "id": {
        "type": "Identifier",
        "start": 298,
        "end": 299,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "argument": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
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
              "name": "foo",
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
                "type": "RestElement",
                "start": 332,
                "end": 346,
                "argument": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 336,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
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
                "argument": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 352,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 425,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 425,
            "name": "a",
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
                        "argument": {
                          "type": "Identifier",
                          "start": 385,
                          "end": 386,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
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
                      "name": "foo",
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
                        "type": "RestElement",
                        "start": 407,
                        "end": 421,
                        "argument": {
                          "type": "Identifier",
                          "start": 410,
                          "end": 411,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 427,
      "end": 555,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 555,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 432,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 444,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 444,
                  "end": 464,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 445,
                      "end": 459,
                      "argument": {
                        "type": "Identifier",
                        "start": 448,
                        "end": 449,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 461,
                    "end": 464,
                    "body": []
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
                "start": 470,
                "end": 521,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 470,
                  "end": 471,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 473,
                  "end": 521,
                  "id": {
                    "type": "Identifier",
                    "start": 482,
                    "end": 485,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 486,
                      "end": 500,
                      "argument": {
                        "type": "Identifier",
                        "start": 489,
                        "end": 490,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
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
                      "argument": {
                        "type": "Identifier",
                        "start": 505,
                        "end": 506,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 518,
                    "end": 521,
                    "body": []
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
                "start": 527,
                "end": 553,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 527,
                  "end": 528,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 530,
                  "end": 553,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 531,
                      "end": 545,
                      "argument": {
                        "type": "Identifier",
                        "start": 534,
                        "end": 535,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 550,
                    "end": 553,
                    "body": []
                  },
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
      "kind": "var",
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
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 574,
          "end": 593,
          "argument": {
            "type": "Identifier",
            "start": 577,
            "end": 578,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
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
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "body": {
        "type": "BlockStatement",
        "start": 595,
        "end": 598,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 599,
      "end": 645,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 603,
          "end": 645,
          "id": {
            "type": "Identifier",
            "start": 603,
            "end": 605,
            "name": "f3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 608,
            "end": 645,
            "id": {
              "type": "Identifier",
              "start": 617,
              "end": 620,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "RestElement",
                "start": 621,
                "end": 640,
                "argument": {
                  "type": "Identifier",
                  "start": 624,
                  "end": 625,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
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
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "body": {
              "type": "BlockStatement",
              "start": 642,
              "end": 645,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 646,
      "end": 704,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 650,
          "end": 704,
          "id": {
            "type": "Identifier",
            "start": 650,
            "end": 652,
            "name": "f4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 655,
            "end": 704,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "RestElement",
                "start": 656,
                "end": 675,
                "argument": {
                  "type": "Identifier",
                  "start": 659,
                  "end": 660,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
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
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                "argument": {
                  "type": "Identifier",
                  "start": 680,
                  "end": 681,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
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
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "body": {
              "type": "BlockStatement",
              "start": 701,
              "end": 704,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 706,
      "end": 751,
      "id": {
        "type": "Identifier",
        "start": 712,
        "end": 714,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 715,
        "end": 751,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 721,
            "end": 749,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 721,
              "end": 724,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 724,
              "end": 749,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 725,
                  "end": 744,
                  "argument": {
                    "type": "Identifier",
                    "start": 728,
                    "end": 729,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
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
                        "name": "Array",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "body": {
                "type": "BlockStatement",
                "start": 746,
                "end": 749,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 753,
      "end": 847,
      "id": {
        "type": "Identifier",
        "start": 763,
        "end": 765,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "argument": {
                  "type": "Identifier",
                  "start": 776,
                  "end": 777,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
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
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "name": "foo",
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
                "type": "RestElement",
                "start": 803,
                "end": 822,
                "argument": {
                  "type": "Identifier",
                  "start": 806,
                  "end": 807,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
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
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                "argument": {
                  "type": "Identifier",
                  "start": 827,
                  "end": 828,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
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
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 853,
          "end": 917,
          "id": {
            "type": "Identifier",
            "start": 853,
            "end": 917,
            "name": "a2",
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
                        "argument": {
                          "type": "Identifier",
                          "start": 867,
                          "end": 868,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
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
                              "name": "Array",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                      "name": "foo",
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
                        "type": "RestElement",
                        "start": 894,
                        "end": 913,
                        "argument": {
                          "type": "Identifier",
                          "start": 897,
                          "end": 898,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
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
                              "name": "Array",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 919,
      "end": 1068,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 923,
          "end": 1068,
          "id": {
            "type": "Identifier",
            "start": 923,
            "end": 925,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 934,
                  "end": 937,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 937,
                  "end": 962,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 938,
                      "end": 957,
                      "argument": {
                        "type": "Identifier",
                        "start": 941,
                        "end": 942,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
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
                            "name": "Array",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 959,
                    "end": 962,
                    "body": []
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
                "start": 968,
                "end": 1029,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 968,
                  "end": 969,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 971,
                  "end": 1029,
                  "id": {
                    "type": "Identifier",
                    "start": 980,
                    "end": 983,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 984,
                      "end": 1003,
                      "argument": {
                        "type": "Identifier",
                        "start": 987,
                        "end": 988,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
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
                            "name": "Array",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                      "argument": {
                        "type": "Identifier",
                        "start": 1008,
                        "end": 1009,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
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
                            "name": "Array",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 1026,
                    "end": 1029,
                    "body": []
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
                "start": 1035,
                "end": 1066,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1035,
                  "end": 1036,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1038,
                  "end": 1066,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 1039,
                      "end": 1058,
                      "argument": {
                        "type": "Identifier",
                        "start": 1042,
                        "end": 1043,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
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
                            "name": "Array",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  "body": {
                    "type": "BlockStatement",
                    "start": 1063,
                    "end": 1066,
                    "body": []
                  },
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
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

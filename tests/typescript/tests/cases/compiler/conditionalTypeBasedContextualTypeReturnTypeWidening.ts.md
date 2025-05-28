__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 650,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 26,
        "decorators": [],
        "name": "useState1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 26,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 28,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "S",
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
          "start": 30,
          "end": 91,
          "decorators": [],
          "name": "initialState",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 42,
            "end": 91,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 44,
              "end": 91,
              "types": [
                {
                  "type": "TSConditionalType",
                  "start": 45,
                  "end": 78,
                  "checkType": {
                    "type": "TSTypeReference",
                    "start": 45,
                    "end": 46,
                    "typeName": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 46,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "extendsType": {
                    "type": "TSFunctionType",
                    "start": 56,
                    "end": 65,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 59,
                      "end": 65,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 62,
                        "end": 65
                      }
                    }
                  },
                  "trueType": {
                    "type": "TSNeverKeyword",
                    "start": 69,
                    "end": 74
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "start": 77,
                    "end": 78,
                    "typeName": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 78,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 83,
                  "end": 90,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 86,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 89,
                      "end": 90,
                      "typeName": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 90,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 92,
        "end": 95,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 94,
          "end": 95,
          "typeName": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 108,
      "end": 218,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 134,
        "decorators": [],
        "name": "useState2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 134,
        "end": 137,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 135,
            "end": 136,
            "name": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "S",
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
          "start": 138,
          "end": 213,
          "decorators": [],
          "name": "initialState",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 150,
            "end": 213,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 152,
              "end": 213,
              "types": [
                {
                  "type": "TSConditionalType",
                  "start": 153,
                  "end": 200,
                  "checkType": {
                    "type": "TSTypeReference",
                    "start": 153,
                    "end": 154,
                    "typeName": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 154,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "extendsType": {
                    "type": "TSFunctionType",
                    "start": 164,
                    "end": 187,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 165,
                        "end": 179,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 172,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 172,
                          "end": 179,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 174,
                            "end": 179,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 174,
                              "end": 177
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 181,
                      "end": 187,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 184,
                        "end": 187
                      }
                    }
                  },
                  "trueType": {
                    "type": "TSNeverKeyword",
                    "start": 191,
                    "end": 196
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "start": 199,
                    "end": 200,
                    "typeName": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 200,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 205,
                  "end": 212,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 208,
                    "end": 212,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 211,
                      "end": 212,
                      "typeName": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 212,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 214,
        "end": 217,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 216,
          "end": 217,
          "typeName": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 271,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 243,
            "decorators": [],
            "name": "func1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 246,
            "end": 270,
            "callee": {
              "type": "Identifier",
              "start": 246,
              "end": 255,
              "decorators": [],
              "name": "useState1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 256,
                "end": 269,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 262,
                  "end": 269,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 268,
                    "end": 269,
                    "value": 0,
                    "raw": "0"
                  },
                  "id": null,
                  "generator": false
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
      "start": 272,
      "end": 311,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 310,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 283,
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 286,
            "end": 310,
            "callee": {
              "type": "Identifier",
              "start": 286,
              "end": 295,
              "decorators": [],
              "name": "useState2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 296,
                "end": 309,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 302,
                  "end": 309,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 308,
                    "end": 309,
                    "value": 0,
                    "raw": "0"
                  },
                  "id": null,
                  "generator": false
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
      "type": "TSDeclareFunction",
      "start": 313,
      "end": 422,
      "id": {
        "type": "Identifier",
        "start": 330,
        "end": 339,
        "decorators": [],
        "name": "useState3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 339,
        "end": 355,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 340,
            "end": 341,
            "name": {
              "type": "Identifier",
              "start": 340,
              "end": 341,
              "decorators": [],
              "name": "S",
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
            "start": 343,
            "end": 354,
            "name": {
              "type": "Identifier",
              "start": 343,
              "end": 344,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 353,
              "end": 354,
              "typeName": {
                "type": "Identifier",
                "start": 353,
                "end": 354,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
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
          "start": 356,
          "end": 417,
          "decorators": [],
          "name": "initialState",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 368,
            "end": 417,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 370,
              "end": 417,
              "types": [
                {
                  "type": "TSConditionalType",
                  "start": 371,
                  "end": 404,
                  "checkType": {
                    "type": "TSTypeReference",
                    "start": 371,
                    "end": 372,
                    "typeName": {
                      "type": "Identifier",
                      "start": 371,
                      "end": 372,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "extendsType": {
                    "type": "TSFunctionType",
                    "start": 382,
                    "end": 391,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 385,
                      "end": 391,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 388,
                        "end": 391
                      }
                    }
                  },
                  "trueType": {
                    "type": "TSNeverKeyword",
                    "start": 395,
                    "end": 400
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "start": 403,
                    "end": 404,
                    "typeName": {
                      "type": "Identifier",
                      "start": 403,
                      "end": 404,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 409,
                  "end": 416,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 412,
                    "end": 416,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 415,
                      "end": 416,
                      "typeName": {
                        "type": "Identifier",
                        "start": 415,
                        "end": 416,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 418,
        "end": 421,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 420,
          "end": 421,
          "typeName": {
            "type": "Identifier",
            "start": 420,
            "end": 421,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 434,
      "end": 557,
      "id": {
        "type": "Identifier",
        "start": 451,
        "end": 460,
        "decorators": [],
        "name": "useState4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 460,
        "end": 476,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 461,
            "end": 462,
            "name": {
              "type": "Identifier",
              "start": 461,
              "end": 462,
              "decorators": [],
              "name": "S",
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
            "start": 464,
            "end": 475,
            "name": {
              "type": "Identifier",
              "start": 464,
              "end": 465,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 474,
              "end": 475,
              "typeName": {
                "type": "Identifier",
                "start": 474,
                "end": 475,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
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
          "start": 477,
          "end": 552,
          "decorators": [],
          "name": "initialState",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 489,
            "end": 552,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 491,
              "end": 552,
              "types": [
                {
                  "type": "TSConditionalType",
                  "start": 492,
                  "end": 539,
                  "checkType": {
                    "type": "TSTypeReference",
                    "start": 492,
                    "end": 493,
                    "typeName": {
                      "type": "Identifier",
                      "start": 492,
                      "end": 493,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "extendsType": {
                    "type": "TSFunctionType",
                    "start": 503,
                    "end": 526,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 504,
                        "end": 518,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 507,
                          "end": 511,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 511,
                          "end": 518,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 513,
                            "end": 518,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 513,
                              "end": 516
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 520,
                      "end": 526,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 523,
                        "end": 526
                      }
                    }
                  },
                  "trueType": {
                    "type": "TSNeverKeyword",
                    "start": 530,
                    "end": 535
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "start": 538,
                    "end": 539,
                    "typeName": {
                      "type": "Identifier",
                      "start": 538,
                      "end": 539,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 544,
                  "end": 551,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 547,
                    "end": 551,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 550,
                      "end": 551,
                      "typeName": {
                        "type": "Identifier",
                        "start": 550,
                        "end": 551,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 553,
        "end": 556,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 555,
          "end": 556,
          "typeName": {
            "type": "Identifier",
            "start": 555,
            "end": 556,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 571,
      "end": 610,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 577,
          "end": 609,
          "id": {
            "type": "Identifier",
            "start": 577,
            "end": 582,
            "decorators": [],
            "name": "func3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 585,
            "end": 609,
            "callee": {
              "type": "Identifier",
              "start": 585,
              "end": 594,
              "decorators": [],
              "name": "useState1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 595,
                "end": 608,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 601,
                  "end": 608,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 607,
                    "end": 608,
                    "value": 0,
                    "raw": "0"
                  },
                  "id": null,
                  "generator": false
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
      "start": 611,
      "end": 650,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 617,
          "end": 649,
          "id": {
            "type": "Identifier",
            "start": 617,
            "end": 622,
            "decorators": [],
            "name": "func4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 625,
            "end": 649,
            "callee": {
              "type": "Identifier",
              "start": 625,
              "end": 634,
              "decorators": [],
              "name": "useState2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 635,
                "end": 648,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 641,
                  "end": 648,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 647,
                    "end": 648,
                    "value": 0,
                    "raw": "0"
                  },
                  "id": null,
                  "generator": false
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```

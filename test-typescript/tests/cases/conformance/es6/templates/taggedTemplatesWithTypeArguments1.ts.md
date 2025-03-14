taggedTemplatesWithTypeArguments1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 963,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 92,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 48,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 48,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 28,
              "end": 48,
              "typeName": {
                "type": "Identifier",
                "start": 28,
                "end": 48,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false
              }
            }
          }
        },
        {
          "type": "RestElement",
          "start": 50,
          "end": 84,
          "argument": {
            "type": "Identifier",
            "start": 53,
            "end": 62,
            "decorators": [],
            "name": "callbacks",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 62,
            "end": 84,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 64,
              "end": 84,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 69,
                "end": 84,
                "params": [
                  {
                    "type": "TSFunctionType",
                    "start": 70,
                    "end": 83,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 71,
                        "end": 75,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 72,
                          "end": 75,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 74,
                            "end": 75,
                            "typeName": {
                              "type": "Identifier",
                              "start": 74,
                              "end": 75,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 77,
                      "end": 83,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 80,
                        "end": 83
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 64,
                "end": 69,
                "decorators": [],
                "name": "Array",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 85,
        "end": 91,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 87,
          "end": 91
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 94,
      "end": 159,
      "body": {
        "type": "TSInterfaceBody",
        "start": 110,
        "end": 159,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 116,
            "end": 126,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 125,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 119,
                "end": 125
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 131,
            "end": 141,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 140,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 134,
                "end": 140
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 146,
            "end": 157,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 156,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 149,
                "end": 156
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 109,
        "decorators": [],
        "name": "Stuff",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 161,
      "end": 293,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 168,
        "end": 293,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 174,
            "end": 292,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "start": 178,
              "end": 292,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 187,
                "end": 292,
                "expressions": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 205,
                    "end": 221,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 214,
                      "end": 221,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 214,
                        "end": 219,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 220,
                        "end": 221,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 205,
                        "end": 210,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false
                      }
                    ]
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 239,
                    "end": 255,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 248,
                      "end": 255,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 253,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 254,
                        "end": 255,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 239,
                        "end": 244,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false
                      }
                    ]
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 273,
                    "end": 289,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 282,
                      "end": 289,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 282,
                        "end": 287,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 289,
                        "decorators": [],
                        "name": "z",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 273,
                        "end": 278,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false
                      }
                    ]
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 187,
                    "end": 205,
                    "tail": false,
                    "value": {
                      "cooked": "\n    hello\n    ",
                      "raw": "\n    hello\n    "
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 221,
                    "end": 239,
                    "tail": false,
                    "value": {
                      "cooked": "\n    brave\n    ",
                      "raw": "\n    brave\n    "
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 255,
                    "end": 273,
                    "tail": false,
                    "value": {
                      "cooked": "\n    world\n    ",
                      "raw": "\n    world\n    "
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 289,
                    "end": 292,
                    "tail": true,
                    "value": {
                      "cooked": "\n",
                      "raw": "\n"
                    }
                  }
                ]
              },
              "tag": {
                "type": "Identifier",
                "start": 178,
                "end": 179,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 179,
                "end": 186,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 180,
                    "end": 185,
                    "typeName": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 185,
                      "decorators": [],
                      "name": "Stuff",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSDeclareFunction",
      "start": 295,
      "end": 438,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 312,
        "end": 313,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 335,
          "end": 361,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 339,
            "end": 361,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 341,
              "end": 361,
              "typeName": {
                "type": "Identifier",
                "start": 341,
                "end": 361,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 367,
          "end": 385,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 368,
            "end": 385,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 370,
              "end": 385,
              "params": [
                {
                  "type": "Identifier",
                  "start": 371,
                  "end": 379,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 372,
                    "end": 379,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 374,
                      "end": 379,
                      "typeName": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 379,
                        "decorators": [],
                        "name": "Input",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 381,
                "end": 385,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 384,
                  "end": 385,
                  "typeName": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 385,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 387,
          "end": 405,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 388,
            "end": 405,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 390,
              "end": 405,
              "params": [
                {
                  "type": "Identifier",
                  "start": 391,
                  "end": 399,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 392,
                    "end": 399,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 394,
                      "end": 399,
                      "typeName": {
                        "type": "Identifier",
                        "start": 394,
                        "end": 399,
                        "decorators": [],
                        "name": "Input",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 401,
                "end": 405,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 404,
                  "end": 405,
                  "typeName": {
                    "type": "Identifier",
                    "start": 404,
                    "end": 405,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 407,
          "end": 425,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 408,
            "end": 425,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 410,
              "end": 425,
              "params": [
                {
                  "type": "Identifier",
                  "start": 411,
                  "end": 419,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 412,
                    "end": 419,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 414,
                      "end": 419,
                      "typeName": {
                        "type": "Identifier",
                        "start": 414,
                        "end": 419,
                        "decorators": [],
                        "name": "Input",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 421,
                "end": 425,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 424,
                  "end": 425,
                  "typeName": {
                    "type": "Identifier",
                    "start": 424,
                    "end": 425,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 426,
        "end": 437,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 428,
          "end": 437,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 428,
              "end": 429,
              "typeName": {
                "type": "Identifier",
                "start": 428,
                "end": 429,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 432,
              "end": 433,
              "typeName": {
                "type": "Identifier",
                "start": 432,
                "end": 433,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 436,
              "end": 437,
              "typeName": {
                "type": "Identifier",
                "start": 436,
                "end": 437,
                "decorators": [],
                "name": "V",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 313,
        "end": 329,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 314,
            "end": 319,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 314,
              "end": 319,
              "decorators": [],
              "name": "Input",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 321,
            "end": 322,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 324,
            "end": 325,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 327,
            "end": 328,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 327,
              "end": 328,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 440,
      "end": 597,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 447,
        "end": 597,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 453,
            "end": 596,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 453,
              "end": 454,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "start": 457,
              "end": 596,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 491,
                "end": 596,
                "expressions": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 509,
                    "end": 525,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 518,
                      "end": 525,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 518,
                        "end": 523,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 524,
                        "end": 525,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 509,
                        "end": 514,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false
                      }
                    ]
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 543,
                    "end": 559,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 552,
                      "end": 559,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 552,
                        "end": 557,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 558,
                        "end": 559,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 543,
                        "end": 548,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false
                      }
                    ]
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 577,
                    "end": 593,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 586,
                      "end": 593,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 591,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 592,
                        "end": 593,
                        "decorators": [],
                        "name": "z",
                        "optional": false
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 577,
                        "end": 582,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false
                      }
                    ]
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 491,
                    "end": 509,
                    "tail": false,
                    "value": {
                      "cooked": "\n    hello\n    ",
                      "raw": "\n    hello\n    "
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 525,
                    "end": 543,
                    "tail": false,
                    "value": {
                      "cooked": "\n    brave\n    ",
                      "raw": "\n    brave\n    "
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 559,
                    "end": 577,
                    "tail": false,
                    "value": {
                      "cooked": "\n    world\n    ",
                      "raw": "\n    world\n    "
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 593,
                    "end": 596,
                    "tail": true,
                    "value": {
                      "cooked": "\n",
                      "raw": "\n"
                    }
                  }
                ]
              },
              "tag": {
                "type": "Identifier",
                "start": 457,
                "end": 458,
                "decorators": [],
                "name": "g",
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 458,
                "end": 490,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 459,
                    "end": 464,
                    "typeName": {
                      "type": "Identifier",
                      "start": 459,
                      "end": 464,
                      "decorators": [],
                      "name": "Stuff",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 466,
                    "end": 472
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 474,
                    "end": 480
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 482,
                    "end": 489
                  }
                ]
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 599,
      "end": 719,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 611,
          "end": 719,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 611,
            "end": 719,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 614,
              "end": 719,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 616,
                "end": 719,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 622,
                    "end": 717,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 622,
                      "end": 626,
                      "decorators": [],
                      "name": "prop",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 626,
                      "end": 717,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 628,
                        "end": 717,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 632,
                            "end": 658,
                            "decorators": [],
                            "name": "strs",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 636,
                              "end": 658,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 638,
                                "end": 658,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 638,
                                  "end": 658,
                                  "decorators": [],
                                  "name": "TemplateStringsArray",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 660,
                            "end": 678,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 661,
                              "end": 678,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 663,
                                "end": 678,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 664,
                                    "end": 672,
                                    "decorators": [],
                                    "name": "input",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 669,
                                      "end": 672,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 671,
                                        "end": 672,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 671,
                                          "end": 672,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false
                                        }
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 674,
                                  "end": 678,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 677,
                                    "end": 678,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 677,
                                      "end": 678,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 680,
                          "end": 717,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 683,
                            "end": 717,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 693,
                                "end": 711,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 693,
                                  "end": 708,
                                  "decorators": [],
                                  "name": "returnedObjProp",
                                  "optional": false
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 708,
                                  "end": 711,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 710,
                                    "end": 711,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 710,
                                      "end": 711,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 628,
                          "end": 631,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 629,
                              "end": 630,
                              "const": false,
                              "in": false,
                              "name": {
                                "type": "Identifier",
                                "start": 629,
                                "end": 630,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              },
                              "out": false
                            }
                          ]
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 721,
      "end": 785,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 728,
        "end": 785,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 732,
            "end": 785,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 732,
              "end": 733,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "start": 736,
              "end": 785,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 755,
                "end": 785,
                "expressions": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 758,
                    "end": 783,
                    "async": false,
                    "body": {
                      "type": "ObjectExpression",
                      "start": 770,
                      "end": 782,
                      "properties": [
                        {
                          "type": "SpreadElement",
                          "start": 772,
                          "end": 780,
                          "argument": {
                            "type": "Identifier",
                            "start": 775,
                            "end": 780,
                            "decorators": [],
                            "name": "input",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 759,
                        "end": 764,
                        "decorators": [],
                        "name": "input",
                        "optional": false
                      }
                    ]
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 755,
                    "end": 758,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 783,
                    "end": 785,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              },
              "tag": {
                "type": "MemberExpression",
                "start": 736,
                "end": 747,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 739,
                  "decorators": [],
                  "name": "obj",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 740,
                  "end": 746,
                  "raw": "\"prop\"",
                  "value": "prop"
                }
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 747,
                "end": 754,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 748,
                    "end": 753,
                    "typeName": {
                      "type": "Identifier",
                      "start": 748,
                      "end": 753,
                      "decorators": [],
                      "name": "Stuff",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 786,
      "end": 806,
      "expression": {
        "type": "MemberExpression",
        "start": 786,
        "end": 805,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 786,
          "end": 803,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 786,
            "end": 787,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 788,
            "end": 803,
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 804,
          "end": 805,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 807,
      "end": 827,
      "expression": {
        "type": "MemberExpression",
        "start": 807,
        "end": 826,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 807,
          "end": 824,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 807,
            "end": 808,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 809,
            "end": 824,
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 825,
          "end": 826,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 828,
      "end": 848,
      "expression": {
        "type": "MemberExpression",
        "start": 828,
        "end": 847,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 828,
          "end": 845,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 828,
            "end": 829,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 830,
            "end": 845,
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 846,
          "end": 847,
          "decorators": [],
          "name": "z",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 850,
      "end": 900,
      "expression": {
        "type": "AssignmentExpression",
        "start": 850,
        "end": 900,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 850,
          "end": 851,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "right": {
          "type": "TaggedTemplateExpression",
          "start": 854,
          "end": 900,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 870,
            "end": 900,
            "expressions": [
              {
                "type": "ArrowFunctionExpression",
                "start": 873,
                "end": 898,
                "async": false,
                "body": {
                  "type": "ObjectExpression",
                  "start": 885,
                  "end": 897,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 887,
                      "end": 895,
                      "argument": {
                        "type": "Identifier",
                        "start": 890,
                        "end": 895,
                        "decorators": [],
                        "name": "input",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 874,
                    "end": 879,
                    "decorators": [],
                    "name": "input",
                    "optional": false
                  }
                ]
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 870,
                "end": 873,
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              },
              {
                "type": "TemplateElement",
                "start": 898,
                "end": 900,
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              }
            ]
          },
          "tag": {
            "type": "MemberExpression",
            "start": 854,
            "end": 862,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 854,
              "end": 857,
              "decorators": [],
              "name": "obj",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 858,
              "end": 862,
              "decorators": [],
              "name": "prop",
              "optional": false
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 862,
            "end": 869,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 863,
                "end": 868,
                "typeName": {
                  "type": "Identifier",
                  "start": 863,
                  "end": 868,
                  "decorators": [],
                  "name": "Stuff",
                  "optional": false
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 901,
      "end": 921,
      "expression": {
        "type": "MemberExpression",
        "start": 901,
        "end": 920,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 901,
          "end": 918,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 901,
            "end": 902,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 903,
            "end": 918,
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 919,
          "end": 920,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 922,
      "end": 942,
      "expression": {
        "type": "MemberExpression",
        "start": 922,
        "end": 941,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 922,
          "end": 939,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 922,
            "end": 923,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 924,
            "end": 939,
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 940,
          "end": 941,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 943,
      "end": 963,
      "expression": {
        "type": "MemberExpression",
        "start": 943,
        "end": 962,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 943,
          "end": 960,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 943,
            "end": 944,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 945,
            "end": 960,
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 961,
          "end": 962,
          "decorators": [],
          "name": "z",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```

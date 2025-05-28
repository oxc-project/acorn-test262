__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "RestElement",
          "start": 50,
          "end": 84,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 53,
            "end": 62,
            "decorators": [],
            "name": "callbacks",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 62,
            "end": 84,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 64,
              "end": 84,
              "typeName": {
                "type": "Identifier",
                "start": 64,
                "end": 69,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 69,
                "end": 84,
                "params": [
                  {
                    "type": "TSFunctionType",
                    "start": 70,
                    "end": 83,
                    "typeParameters": null,
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
              }
            }
          },
          "value": null
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
      "body": null,
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 94,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 109,
        "decorators": [],
        "name": "Stuff",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 125,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 119,
                "end": 125
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 131,
            "end": 141,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 140,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 134,
                "end": 140
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 146,
            "end": 157,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 156,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 149,
                "end": 156
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
      "type": "ExportNamedDeclaration",
      "start": 161,
      "end": 293,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 168,
        "end": 293,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 174,
            "end": 292,
            "id": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "start": 178,
              "end": 292,
              "tag": {
                "type": "Identifier",
                "start": 178,
                "end": 179,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 187,
                "end": 292,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 187,
                    "end": 205,
                    "value": {
                      "cooked": "\n    hello\n    ",
                      "raw": "\n    hello\n    "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 221,
                    "end": 239,
                    "value": {
                      "cooked": "\n    brave\n    ",
                      "raw": "\n    brave\n    "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 255,
                    "end": 273,
                    "value": {
                      "cooked": "\n    world\n    ",
                      "raw": "\n    world\n    "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 289,
                    "end": 292,
                    "value": {
                      "cooked": "\n",
                      "raw": "\n"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 205,
                    "end": 221,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 205,
                        "end": 210,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "start": 214,
                      "end": 221,
                      "object": {
                        "type": "Identifier",
                        "start": 214,
                        "end": 219,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 220,
                        "end": 221,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "id": null,
                    "generator": false
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 239,
                    "end": 255,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 239,
                        "end": 244,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "start": 248,
                      "end": 255,
                      "object": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 253,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 254,
                        "end": 255,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "id": null,
                    "generator": false
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 273,
                    "end": 289,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 273,
                        "end": 278,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "start": 282,
                      "end": 289,
                      "object": {
                        "type": "Identifier",
                        "start": 282,
                        "end": 287,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 289,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "id": null,
                    "generator": false
                  }
                ]
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSDeclareFunction",
      "start": 295,
      "end": 438,
      "id": {
        "type": "Identifier",
        "start": 312,
        "end": 313,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 313,
        "end": 329,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 314,
            "end": 319,
            "name": {
              "type": "Identifier",
              "start": 314,
              "end": 319,
              "decorators": [],
              "name": "Input",
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
            "start": 321,
            "end": 322,
            "name": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
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
            "start": 324,
            "end": 325,
            "name": {
              "type": "Identifier",
              "start": 324,
              "end": 325,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 327,
            "end": 328,
            "name": {
              "type": "Identifier",
              "start": 327,
              "end": 328,
              "decorators": [],
              "name": "V",
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
              "typeParameters": null,
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
              "typeParameters": null,
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
              "typeParameters": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 440,
      "end": 597,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 447,
        "end": 597,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 453,
            "end": 596,
            "id": {
              "type": "Identifier",
              "start": 453,
              "end": 454,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "start": 457,
              "end": 596,
              "tag": {
                "type": "Identifier",
                "start": 457,
                "end": 458,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 491,
                "end": 596,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 491,
                    "end": 509,
                    "value": {
                      "cooked": "\n    hello\n    ",
                      "raw": "\n    hello\n    "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 525,
                    "end": 543,
                    "value": {
                      "cooked": "\n    brave\n    ",
                      "raw": "\n    brave\n    "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 559,
                    "end": 577,
                    "value": {
                      "cooked": "\n    world\n    ",
                      "raw": "\n    world\n    "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 593,
                    "end": 596,
                    "value": {
                      "cooked": "\n",
                      "raw": "\n"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 509,
                    "end": 525,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 509,
                        "end": 514,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "start": 518,
                      "end": 525,
                      "object": {
                        "type": "Identifier",
                        "start": 518,
                        "end": 523,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 524,
                        "end": 525,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "id": null,
                    "generator": false
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 543,
                    "end": 559,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 543,
                        "end": 548,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "start": 552,
                      "end": 559,
                      "object": {
                        "type": "Identifier",
                        "start": 552,
                        "end": 557,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 558,
                        "end": 559,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "id": null,
                    "generator": false
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 577,
                    "end": 593,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 577,
                        "end": 582,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "MemberExpression",
                      "start": 586,
                      "end": 593,
                      "object": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 591,
                        "decorators": [],
                        "name": "stuff",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 592,
                        "end": 593,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "id": null,
                    "generator": false
                  }
                ]
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 599,
      "end": 719,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 611,
          "end": 719,
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 622,
                      "end": 626,
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 626,
                      "end": 717,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 628,
                        "end": 717,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 628,
                          "end": 631,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 629,
                              "end": 630,
                              "name": {
                                "type": "Identifier",
                                "start": 629,
                                "end": 630,
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
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
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
                                "typeParameters": null,
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
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 693,
                                  "end": 708,
                                  "decorators": [],
                                  "name": "returnedObjProp",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
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
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        }
                      }
                    },
                    "accessibility": null,
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
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 721,
      "end": 785,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 728,
        "end": 785,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 732,
            "end": 785,
            "id": {
              "type": "Identifier",
              "start": 732,
              "end": 733,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "start": 736,
              "end": 785,
              "tag": {
                "type": "MemberExpression",
                "start": 736,
                "end": 747,
                "object": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 739,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 740,
                  "end": 746,
                  "value": "prop",
                  "raw": "\"prop\""
                },
                "optional": false,
                "computed": true
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 755,
                "end": 785,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 755,
                    "end": 758,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 783,
                    "end": 785,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 758,
                    "end": 783,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 759,
                        "end": 764,
                        "decorators": [],
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
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
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  }
                ]
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 786,
      "end": 806,
      "expression": {
        "type": "MemberExpression",
        "start": 786,
        "end": 805,
        "object": {
          "type": "MemberExpression",
          "start": 786,
          "end": 803,
          "object": {
            "type": "Identifier",
            "start": 786,
            "end": 787,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 788,
            "end": 803,
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 804,
          "end": 805,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 807,
      "end": 827,
      "expression": {
        "type": "MemberExpression",
        "start": 807,
        "end": 826,
        "object": {
          "type": "MemberExpression",
          "start": 807,
          "end": 824,
          "object": {
            "type": "Identifier",
            "start": 807,
            "end": 808,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 809,
            "end": 824,
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 825,
          "end": 826,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 828,
      "end": 848,
      "expression": {
        "type": "MemberExpression",
        "start": 828,
        "end": 847,
        "object": {
          "type": "MemberExpression",
          "start": 828,
          "end": 845,
          "object": {
            "type": "Identifier",
            "start": 828,
            "end": 829,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 830,
            "end": 845,
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 846,
          "end": 847,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
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
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TaggedTemplateExpression",
          "start": 854,
          "end": 900,
          "tag": {
            "type": "MemberExpression",
            "start": 854,
            "end": 862,
            "object": {
              "type": "Identifier",
              "start": 854,
              "end": 857,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 858,
              "end": 862,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 870,
            "end": 900,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 870,
                "end": 873,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 898,
                "end": 900,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "ArrowFunctionExpression",
                "start": 873,
                "end": 898,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 874,
                    "end": 879,
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
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
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              }
            ]
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 901,
      "end": 921,
      "expression": {
        "type": "MemberExpression",
        "start": 901,
        "end": 920,
        "object": {
          "type": "MemberExpression",
          "start": 901,
          "end": 918,
          "object": {
            "type": "Identifier",
            "start": 901,
            "end": 902,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 903,
            "end": 918,
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 919,
          "end": 920,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 922,
      "end": 942,
      "expression": {
        "type": "MemberExpression",
        "start": 922,
        "end": 941,
        "object": {
          "type": "MemberExpression",
          "start": 922,
          "end": 939,
          "object": {
            "type": "Identifier",
            "start": 922,
            "end": 923,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 924,
            "end": 939,
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 940,
          "end": 941,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 943,
      "end": 963,
      "expression": {
        "type": "MemberExpression",
        "start": 943,
        "end": 962,
        "object": {
          "type": "MemberExpression",
          "start": 943,
          "end": 960,
          "object": {
            "type": "Identifier",
            "start": 943,
            "end": 944,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 945,
            "end": 960,
            "decorators": [],
            "name": "returnedObjProp",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 961,
          "end": 962,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

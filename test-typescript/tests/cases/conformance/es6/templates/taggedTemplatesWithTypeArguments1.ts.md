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
        "name": "f",
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
          "start": 22,
          "end": 48,
          "name": "strs",
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
                "name": "TemplateStringsArray",
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
          "type": "RestElement",
          "start": 50,
          "end": 84,
          "argument": {
            "type": "Identifier",
            "start": 53,
            "end": 62,
            "name": "callbacks",
            "typeAnnotation": null,
            "decorators": [],
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
              "typeName": {
                "type": "Identifier",
                "start": 64,
                "end": 69,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "x",
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
                              "name": "T",
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
      "body": null,
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
              "name": "T",
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
        "start": 85,
        "end": 91,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 87,
          "end": 91
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 94,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 109,
        "name": "Stuff",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 174,
            "end": 292,
            "id": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "start": 178,
              "end": 292,
              "tag": {
                "type": "Identifier",
                "start": 178,
                "end": 179,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 187,
                "end": 292,
                "expressions": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 205,
                    "end": 221,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 205,
                        "end": 210,
                        "name": "stuff",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "MemberExpression",
                      "start": 214,
                      "end": 221,
                      "object": {
                        "type": "Identifier",
                        "start": 214,
                        "end": 219,
                        "name": "stuff",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 220,
                        "end": 221,
                        "name": "x",
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
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 239,
                    "end": 255,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 239,
                        "end": 244,
                        "name": "stuff",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "MemberExpression",
                      "start": 248,
                      "end": 255,
                      "object": {
                        "type": "Identifier",
                        "start": 248,
                        "end": 253,
                        "name": "stuff",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 254,
                        "end": 255,
                        "name": "y",
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
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 273,
                    "end": 289,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 273,
                        "end": 278,
                        "name": "stuff",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "MemberExpression",
                      "start": 282,
                      "end": 289,
                      "object": {
                        "type": "Identifier",
                        "start": 282,
                        "end": 287,
                        "name": "stuff",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 289,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
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
                ]
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
                      "name": "Stuff",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSDeclareFunction",
      "start": 295,
      "end": 438,
      "id": {
        "type": "Identifier",
        "start": 312,
        "end": 313,
        "name": "g",
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
          "start": 335,
          "end": 361,
          "name": "strs",
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
                "name": "TemplateStringsArray",
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
          "start": 367,
          "end": 385,
          "name": "t",
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
                  "name": "i",
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
                        "name": "Input",
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 387,
          "end": 405,
          "name": "u",
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
                  "name": "i",
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
                        "name": "Input",
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
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 407,
          "end": 425,
          "name": "v",
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
                  "name": "i",
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
                        "name": "Input",
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
                    "name": "V",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
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
              "name": "Input",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "V",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 440,
      "end": 597,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 447,
        "end": 597,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 453,
            "end": 596,
            "id": {
              "type": "Identifier",
              "start": 453,
              "end": 454,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TaggedTemplateExpression",
              "start": 457,
              "end": 596,
              "tag": {
                "type": "Identifier",
                "start": 457,
                "end": 458,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 491,
                "end": 596,
                "expressions": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 509,
                    "end": 525,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 509,
                        "end": 514,
                        "name": "stuff",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "MemberExpression",
                      "start": 518,
                      "end": 525,
                      "object": {
                        "type": "Identifier",
                        "start": 518,
                        "end": 523,
                        "name": "stuff",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 524,
                        "end": 525,
                        "name": "x",
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
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 543,
                    "end": 559,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 543,
                        "end": 548,
                        "name": "stuff",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "MemberExpression",
                      "start": 552,
                      "end": 559,
                      "object": {
                        "type": "Identifier",
                        "start": 552,
                        "end": 557,
                        "name": "stuff",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 558,
                        "end": 559,
                        "name": "y",
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
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 577,
                    "end": 593,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 577,
                        "end": 582,
                        "name": "stuff",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "MemberExpression",
                      "start": 586,
                      "end": 593,
                      "object": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 591,
                        "name": "stuff",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 592,
                        "end": 593,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
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
                ]
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
                      "name": "Stuff",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 611,
            "end": 719,
            "name": "obj",
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
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                                "name": "T",
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 632,
                            "end": 658,
                            "name": "strs",
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
                                  "name": "TemplateStringsArray",
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
                            "start": 660,
                            "end": 678,
                            "name": "x",
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
                                    "name": "input",
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
                                          "name": "T",
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
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                                  "name": "returnedObjProp",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 732,
            "end": 785,
            "id": {
              "type": "Identifier",
              "start": 732,
              "end": 733,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 740,
                  "end": 746,
                  "value": "prop",
                  "raw": "\"prop\""
                },
                "computed": true,
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 755,
                "end": 785,
                "expressions": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 758,
                    "end": 783,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 759,
                        "end": 764,
                        "name": "input",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                            "name": "input",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
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
                ]
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
                      "name": "Stuff",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 788,
            "end": 803,
            "name": "returnedObjProp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 804,
          "end": 805,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 809,
            "end": 824,
            "name": "returnedObjProp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 825,
          "end": 826,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 830,
            "end": 845,
            "name": "returnedObjProp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 846,
          "end": 847,
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 858,
              "end": 862,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 870,
            "end": 900,
            "expressions": [
              {
                "type": "ArrowFunctionExpression",
                "start": 873,
                "end": 898,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 874,
                    "end": 879,
                    "name": "input",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "name": "input",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
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
            ]
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
                  "name": "Stuff",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 903,
            "end": 918,
            "name": "returnedObjProp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 919,
          "end": 920,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 924,
            "end": 939,
            "name": "returnedObjProp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 940,
          "end": 941,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 945,
            "end": 960,
            "name": "returnedObjProp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 961,
          "end": 962,
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

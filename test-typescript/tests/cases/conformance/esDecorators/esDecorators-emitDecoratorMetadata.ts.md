__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 538,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
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
      "type": "ClassDeclaration",
      "start": 23,
      "end": 278,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 278,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 67,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 53,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 53,
              "end": 67,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 67,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 54,
                  "end": 63,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 55,
                    "end": 63,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 57,
                      "end": 63
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 102,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 73,
                "end": 77,
                "expression": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 77,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 88,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 102,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 102,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 98,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 92,
                      "end": 98
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 108,
            "end": 136,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 108,
                "end": 112,
                "expression": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 112,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 122,
              "end": 136,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 134,
                "end": 136,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 123,
                  "end": 132,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 124,
                    "end": 132,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 126,
                      "end": 132
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 142,
            "end": 161,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 142,
                "end": 146,
                "expression": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 146,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 160,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 154,
                "end": 160
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 203,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 167,
                "end": 171,
                "expression": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 171,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 183,
              "end": 189,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 189,
              "end": 203,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 201,
                "end": 203,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 190,
                  "end": 199,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 191,
                    "end": 199,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 193,
                      "end": 199
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 244,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 209,
                "end": 213,
                "expression": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 213,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 244,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 242,
                "end": 244,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 231,
                  "end": 240,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 232,
                    "end": 240,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 234,
                      "end": 240
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 250,
            "end": 276,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 250,
                "end": 254,
                "expression": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 254,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 267,
              "end": 275,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 269,
                "end": 275
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 23,
          "end": 27,
          "expression": {
            "type": "Identifier",
            "start": 24,
            "end": 27,
            "decorators": [],
            "name": "dec",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 280,
      "end": 538,
      "expression": {
        "type": "ClassExpression",
        "start": 281,
        "end": 536,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 294,
          "end": 536,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 300,
              "end": 325,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 300,
                "end": 311,
                "decorators": [],
                "name": "constructor",
                "optional": false
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 311,
                "end": 325,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 323,
                  "end": 325,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 312,
                    "end": 321,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 313,
                      "end": 321,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 315,
                        "end": 321
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 331,
              "end": 360,
              "computed": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 331,
                  "end": 335,
                  "expression": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 335,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "start": 340,
                "end": 346,
                "decorators": [],
                "name": "method",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 346,
                "end": 360,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 358,
                  "end": 360,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 347,
                    "end": 356,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 348,
                      "end": 356,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 350,
                        "end": 356
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 366,
              "end": 394,
              "computed": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 366,
                  "end": 370,
                  "expression": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 370,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "start": 379,
                "end": 380,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 380,
                "end": 394,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 392,
                  "end": 394,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 381,
                    "end": 390,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 382,
                      "end": 390,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 384,
                        "end": 390
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 400,
              "end": 419,
              "computed": false,
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 400,
                  "end": 404,
                  "expression": {
                    "type": "Identifier",
                    "start": 401,
                    "end": 404,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 409,
                "end": 410,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 410,
                "end": 418,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 412,
                  "end": 418
                }
              },
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 425,
              "end": 461,
              "computed": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 425,
                  "end": 429,
                  "expression": {
                    "type": "Identifier",
                    "start": 426,
                    "end": 429,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "start": 441,
                "end": 447,
                "decorators": [],
                "name": "method",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 447,
                "end": 461,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 459,
                  "end": 461,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 448,
                    "end": 457,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 449,
                      "end": 457,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 451,
                        "end": 457
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 467,
              "end": 502,
              "computed": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 467,
                  "end": 471,
                  "expression": {
                    "type": "Identifier",
                    "start": 468,
                    "end": 471,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "start": 487,
                "end": 488,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 488,
                "end": 502,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 500,
                  "end": 502,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 489,
                    "end": 498,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 490,
                      "end": 498,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 492,
                        "end": 498
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 508,
              "end": 534,
              "computed": false,
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 508,
                  "end": 512,
                  "expression": {
                    "type": "Identifier",
                    "start": 509,
                    "end": 512,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 524,
                "end": 525,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 525,
                "end": 533,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 527,
                  "end": 533
                }
              },
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 281,
            "end": 285,
            "expression": {
              "type": "Identifier",
              "start": 282,
              "end": 285,
              "decorators": [],
              "name": "dec",
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 292,
          "end": 293,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

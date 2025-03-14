useBeforeDeclaration_classDecorators.1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1313,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 22,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 22,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 31,
      "end": 58,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 58,
        "body": []
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 31,
          "end": 45,
          "expression": {
            "type": "CallExpression",
            "start": 32,
            "end": 45,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 36,
                "end": 44,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 44,
                  "decorators": [],
                  "name": "C1",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "decorators": [],
              "name": "dec",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 54,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 69,
      "end": 90,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 87,
        "end": 90,
        "body": []
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 69,
          "end": 77,
          "expression": {
            "type": "CallExpression",
            "start": 70,
            "end": 77,
            "arguments": [
              {
                "type": "Identifier",
                "start": 74,
                "end": 76,
                "decorators": [],
                "name": "C2",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "decorators": [],
              "name": "dec",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 86,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 101,
      "end": 132,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 132,
        "body": []
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 101,
          "end": 119,
          "expression": {
            "type": "CallExpression",
            "start": 102,
            "end": 119,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 106,
                "end": 118,
                "arguments": [],
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "start": 107,
                  "end": 115,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 115,
                    "decorators": [],
                    "name": "C3",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": []
                },
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "decorators": [],
              "name": "dec",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 128,
        "decorators": [],
        "name": "C3",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 140,
      "end": 530,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 149,
        "end": 530,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 188,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 155,
                "end": 169,
                "expression": {
                  "type": "CallExpression",
                  "start": 156,
                  "end": 169,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 160,
                      "end": 168,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 168,
                        "decorators": [],
                        "name": "C4",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 159,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 183,
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
              "start": 183,
              "end": 188,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 186,
                "end": 188,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 193,
            "end": 241,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 193,
                "end": 207,
                "expression": {
                  "type": "CallExpression",
                  "start": 194,
                  "end": 207,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 198,
                      "end": 206,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 206,
                        "decorators": [],
                        "name": "C4",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 197,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 220,
              "end": 241,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 223,
                "end": 241,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 225,
                    "end": 239,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 232,
                      "end": 238,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 232,
                        "end": 236
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 238,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 246,
            "end": 279,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 246,
                "end": 260,
                "expression": {
                  "type": "CallExpression",
                  "start": 247,
                  "end": 260,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 251,
                      "end": 259,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 259,
                        "decorators": [],
                        "name": "C4",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 247,
                    "end": 250,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
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
              "start": 273,
              "end": 279,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 277,
                "end": 279,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 274,
                  "end": 275,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 284,
            "end": 313,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 284,
                "end": 298,
                "expression": {
                  "type": "CallExpression",
                  "start": 285,
                  "end": 298,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 289,
                      "end": 297,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 295,
                        "end": 297,
                        "decorators": [],
                        "name": "C4",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 288,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
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
              "start": 307,
              "end": 312,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 309,
                "end": 312
              }
            },
            "value": null
          },
          {
            "type": "AccessorProperty",
            "start": 318,
            "end": 356,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 318,
                "end": 332,
                "expression": {
                  "type": "CallExpression",
                  "start": 319,
                  "end": 332,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 323,
                      "end": 331,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 329,
                        "end": 331,
                        "decorators": [],
                        "name": "C4",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 319,
                    "end": 322,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 355,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 352,
                "end": 355
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 362,
            "end": 388,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 362,
                "end": 376,
                "expression": {
                  "type": "CallExpression",
                  "start": 363,
                  "end": 376,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 367,
                      "end": 375,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 375,
                        "decorators": [],
                        "name": "C4",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 366,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 377,
              "end": 383,
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
              "start": 383,
              "end": 388,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 386,
                "end": 388,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 393,
            "end": 434,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 393,
                "end": 407,
                "expression": {
                  "type": "CallExpression",
                  "start": 394,
                  "end": 407,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 398,
                      "end": 406,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 404,
                        "end": 406,
                        "decorators": [],
                        "name": "C4",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 397,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 412,
              "end": 413,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 413,
              "end": 434,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 416,
                "end": 434,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 418,
                    "end": 432,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 425,
                      "end": 431,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 425,
                        "end": 429
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 430,
                        "end": 431,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 439,
            "end": 465,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 439,
                "end": 453,
                "expression": {
                  "type": "CallExpression",
                  "start": 440,
                  "end": 453,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 444,
                      "end": 452,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 450,
                        "end": 452,
                        "decorators": [],
                        "name": "C4",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 443,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
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
              "start": 459,
              "end": 465,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 463,
                "end": 465,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 460,
                  "end": 461,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 470,
            "end": 492,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 470,
                "end": 484,
                "expression": {
                  "type": "CallExpression",
                  "start": 471,
                  "end": 484,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 475,
                      "end": 483,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 481,
                        "end": 483,
                        "decorators": [],
                        "name": "C4",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 474,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 485,
              "end": 486,
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
              "start": 486,
              "end": 491,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 488,
                "end": 491
              }
            },
            "value": null
          },
          {
            "type": "AccessorProperty",
            "start": 497,
            "end": 528,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 497,
                "end": 511,
                "expression": {
                  "type": "CallExpression",
                  "start": 498,
                  "end": 511,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 502,
                      "end": 510,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 508,
                        "end": 510,
                        "decorators": [],
                        "name": "C4",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 498,
                    "end": 501,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 521,
              "end": 522,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 522,
              "end": 527,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 524,
                "end": 527
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 148,
        "decorators": [],
        "name": "C4",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 541,
      "end": 871,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 550,
        "end": 871,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 556,
            "end": 583,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 556,
                "end": 564,
                "expression": {
                  "type": "CallExpression",
                  "start": 557,
                  "end": 564,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 561,
                      "end": 563,
                      "decorators": [],
                      "name": "C5",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 557,
                    "end": 560,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 572,
              "end": 578,
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
              "start": 578,
              "end": 583,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 581,
                "end": 583,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 588,
            "end": 630,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 588,
                "end": 596,
                "expression": {
                  "type": "CallExpression",
                  "start": 589,
                  "end": 596,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 593,
                      "end": 595,
                      "decorators": [],
                      "name": "C5",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 589,
                    "end": 592,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 608,
              "end": 609,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 609,
              "end": 630,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 612,
                "end": 630,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 614,
                    "end": 628,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 621,
                      "end": 627,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 621,
                        "end": 625
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 626,
                        "end": 627,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 635,
            "end": 662,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 635,
                "end": 643,
                "expression": {
                  "type": "CallExpression",
                  "start": 636,
                  "end": 643,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 640,
                      "end": 642,
                      "decorators": [],
                      "name": "C5",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 636,
                    "end": 639,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 655,
              "end": 656,
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
              "start": 656,
              "end": 662,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 660,
                "end": 662,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 657,
                  "end": 658,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 667,
            "end": 690,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 667,
                "end": 675,
                "expression": {
                  "type": "CallExpression",
                  "start": 668,
                  "end": 675,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 672,
                      "end": 674,
                      "decorators": [],
                      "name": "C5",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 668,
                    "end": 671,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 683,
              "end": 684,
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
              "start": 684,
              "end": 689,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 686,
                "end": 689
              }
            },
            "value": null
          },
          {
            "type": "AccessorProperty",
            "start": 695,
            "end": 727,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 695,
                "end": 703,
                "expression": {
                  "type": "CallExpression",
                  "start": 696,
                  "end": 703,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 700,
                      "end": 702,
                      "decorators": [],
                      "name": "C5",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 696,
                    "end": 699,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 720,
              "end": 721,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 721,
              "end": 726,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 723,
                "end": 726
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 733,
            "end": 753,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 733,
                "end": 741,
                "expression": {
                  "type": "CallExpression",
                  "start": 734,
                  "end": 741,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 738,
                      "end": 740,
                      "decorators": [],
                      "name": "C5",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 734,
                    "end": 737,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 742,
              "end": 748,
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
              "start": 748,
              "end": 753,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 751,
                "end": 753,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 758,
            "end": 793,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 758,
                "end": 766,
                "expression": {
                  "type": "CallExpression",
                  "start": 759,
                  "end": 766,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 763,
                      "end": 765,
                      "decorators": [],
                      "name": "C5",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 759,
                    "end": 762,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 771,
              "end": 772,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 772,
              "end": 793,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 775,
                "end": 793,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 777,
                    "end": 791,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 784,
                      "end": 790,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 784,
                        "end": 788
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 789,
                        "end": 790,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 798,
            "end": 818,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 798,
                "end": 806,
                "expression": {
                  "type": "CallExpression",
                  "start": 799,
                  "end": 806,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 803,
                      "end": 805,
                      "decorators": [],
                      "name": "C5",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 799,
                    "end": 802,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 811,
              "end": 812,
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
              "start": 812,
              "end": 818,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 816,
                "end": 818,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 813,
                  "end": 814,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 823,
            "end": 839,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 823,
                "end": 831,
                "expression": {
                  "type": "CallExpression",
                  "start": 824,
                  "end": 831,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 828,
                      "end": 830,
                      "decorators": [],
                      "name": "C5",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 824,
                    "end": 827,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 832,
              "end": 833,
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
              "start": 833,
              "end": 838,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 835,
                "end": 838
              }
            },
            "value": null
          },
          {
            "type": "AccessorProperty",
            "start": 844,
            "end": 869,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 844,
                "end": 852,
                "expression": {
                  "type": "CallExpression",
                  "start": 845,
                  "end": 852,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 849,
                      "end": 851,
                      "decorators": [],
                      "name": "C5",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 845,
                    "end": 848,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 862,
              "end": 863,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 863,
              "end": 868,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 865,
                "end": 868
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 547,
        "end": 549,
        "decorators": [],
        "name": "C5",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 882,
      "end": 1312,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 891,
        "end": 1312,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 897,
            "end": 934,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 897,
                "end": 915,
                "expression": {
                  "type": "CallExpression",
                  "start": 898,
                  "end": 915,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 902,
                      "end": 914,
                      "arguments": [],
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 903,
                        "end": 911,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 909,
                          "end": 911,
                          "decorators": [],
                          "name": "C6",
                          "optional": false
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": []
                      },
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 898,
                    "end": 901,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 923,
              "end": 929,
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
              "start": 929,
              "end": 934,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 932,
                "end": 934,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 939,
            "end": 991,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 939,
                "end": 957,
                "expression": {
                  "type": "CallExpression",
                  "start": 940,
                  "end": 957,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 944,
                      "end": 956,
                      "arguments": [],
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 945,
                        "end": 953,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 951,
                          "end": 953,
                          "decorators": [],
                          "name": "C6",
                          "optional": false
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": []
                      },
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 940,
                    "end": 943,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 969,
              "end": 970,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 970,
              "end": 991,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 973,
                "end": 991,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 975,
                    "end": 989,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 982,
                      "end": 988,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 982,
                        "end": 986
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 987,
                        "end": 988,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 996,
            "end": 1033,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 996,
                "end": 1014,
                "expression": {
                  "type": "CallExpression",
                  "start": 997,
                  "end": 1014,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1001,
                      "end": 1013,
                      "arguments": [],
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1002,
                        "end": 1010,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 1008,
                          "end": 1010,
                          "decorators": [],
                          "name": "C6",
                          "optional": false
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": []
                      },
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 997,
                    "end": 1000,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1026,
              "end": 1027,
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
              "start": 1027,
              "end": 1033,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1031,
                "end": 1033,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1028,
                  "end": 1029,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1038,
            "end": 1071,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1038,
                "end": 1056,
                "expression": {
                  "type": "CallExpression",
                  "start": 1039,
                  "end": 1056,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1043,
                      "end": 1055,
                      "arguments": [],
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1044,
                        "end": 1052,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 1050,
                          "end": 1052,
                          "decorators": [],
                          "name": "C6",
                          "optional": false
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": []
                      },
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1039,
                    "end": 1042,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1064,
              "end": 1065,
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
              "start": 1065,
              "end": 1070,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1067,
                "end": 1070
              }
            },
            "value": null
          },
          {
            "type": "AccessorProperty",
            "start": 1076,
            "end": 1118,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1076,
                "end": 1094,
                "expression": {
                  "type": "CallExpression",
                  "start": 1077,
                  "end": 1094,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1081,
                      "end": 1093,
                      "arguments": [],
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1082,
                        "end": 1090,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 1088,
                          "end": 1090,
                          "decorators": [],
                          "name": "C6",
                          "optional": false
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": []
                      },
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1077,
                    "end": 1080,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1111,
              "end": 1112,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1112,
              "end": 1117,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1114,
                "end": 1117
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1124,
            "end": 1154,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1124,
                "end": 1142,
                "expression": {
                  "type": "CallExpression",
                  "start": 1125,
                  "end": 1142,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1129,
                      "end": 1141,
                      "arguments": [],
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1130,
                        "end": 1138,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 1136,
                          "end": 1138,
                          "decorators": [],
                          "name": "C6",
                          "optional": false
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": []
                      },
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1125,
                    "end": 1128,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1143,
              "end": 1149,
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
              "start": 1149,
              "end": 1154,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1152,
                "end": 1154,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1159,
            "end": 1204,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1159,
                "end": 1177,
                "expression": {
                  "type": "CallExpression",
                  "start": 1160,
                  "end": 1177,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1164,
                      "end": 1176,
                      "arguments": [],
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1165,
                        "end": 1173,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 1171,
                          "end": 1173,
                          "decorators": [],
                          "name": "C6",
                          "optional": false
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": []
                      },
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1160,
                    "end": 1163,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1182,
              "end": 1183,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1183,
              "end": 1204,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1186,
                "end": 1204,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1188,
                    "end": 1202,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1195,
                      "end": 1201,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 1195,
                        "end": 1199
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1200,
                        "end": 1201,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1209,
            "end": 1239,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1209,
                "end": 1227,
                "expression": {
                  "type": "CallExpression",
                  "start": 1210,
                  "end": 1227,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1214,
                      "end": 1226,
                      "arguments": [],
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1215,
                        "end": 1223,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 1221,
                          "end": 1223,
                          "decorators": [],
                          "name": "C6",
                          "optional": false
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": []
                      },
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1210,
                    "end": 1213,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1232,
              "end": 1233,
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
              "start": 1233,
              "end": 1239,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1237,
                "end": 1239,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1234,
                  "end": 1235,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1244,
            "end": 1270,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1244,
                "end": 1262,
                "expression": {
                  "type": "CallExpression",
                  "start": 1245,
                  "end": 1262,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1249,
                      "end": 1261,
                      "arguments": [],
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1250,
                        "end": 1258,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 1256,
                          "end": 1258,
                          "decorators": [],
                          "name": "C6",
                          "optional": false
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": []
                      },
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1245,
                    "end": 1248,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1263,
              "end": 1264,
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
              "start": 1264,
              "end": 1269,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1266,
                "end": 1269
              }
            },
            "value": null
          },
          {
            "type": "AccessorProperty",
            "start": 1275,
            "end": 1310,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1275,
                "end": 1293,
                "expression": {
                  "type": "CallExpression",
                  "start": 1276,
                  "end": 1293,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1280,
                      "end": 1292,
                      "arguments": [],
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1281,
                        "end": 1289,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 1287,
                          "end": 1289,
                          "decorators": [],
                          "name": "C6",
                          "optional": false
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": []
                      },
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1276,
                    "end": 1279,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1303,
              "end": 1304,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1304,
              "end": 1309,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1306,
                "end": 1309
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 888,
        "end": 890,
        "decorators": [],
        "name": "C6",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```

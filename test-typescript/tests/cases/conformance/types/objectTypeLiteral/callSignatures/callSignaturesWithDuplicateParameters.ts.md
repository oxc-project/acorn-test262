callSignaturesWithDuplicateParameters.ts
```json
{
  "type": "Program",
  "start": 50,
  "end": 783,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 72,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 72,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 62,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 63,
          "end": 64,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 103,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 81,
            "end": 103,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 100,
              "end": 103,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 90,
              "end": 93,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 97,
                "end": 98,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 110,
            "decorators": [],
            "name": "f2",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 113,
            "end": 132,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 129,
              "end": 132,
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
                "end": 124,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 139,
            "decorators": [],
            "name": "f3",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 142,
            "end": 155,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 152,
              "end": 155,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 143,
                "end": 144,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 162,
            "decorators": [],
            "name": "f4",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 165,
            "end": 187,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 184,
              "end": 187,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 169,
                "end": 173,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 170,
                  "end": 173,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 172,
                    "end": 173,
                    "typeName": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 173,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 175,
                "end": 179,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 176,
                  "end": 179,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 178,
                    "end": 179,
                    "typeName": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 165,
              "end": 168,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 166,
                  "end": 167,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 167,
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
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 189,
      "end": 228,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 225,
        "end": 228,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 202,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 203,
          "end": 212,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 204,
            "end": 212,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 206,
              "end": 212
            }
          }
        },
        {
          "type": "Identifier",
          "start": 214,
          "end": 223,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 223,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 217,
              "end": 223
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 229,
      "end": 276,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 276,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 235,
            "decorators": [],
            "name": "f5",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 238,
            "end": 276,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 273,
              "end": 276,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 247,
              "end": 250,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 251,
                "end": 260,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 252,
                  "end": 260,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 254,
                    "end": 260
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 262,
                "end": 271,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 263,
                  "end": 271,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 265,
                    "end": 271
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 277,
      "end": 321,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 321,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 283,
            "decorators": [],
            "name": "f6",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 286,
            "end": 321,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 318,
              "end": 321,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 296,
                "end": 305,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 297,
                  "end": 305,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 299,
                    "end": 305
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 307,
                "end": 316,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 308,
                  "end": 316,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 310,
                    "end": 316
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 322,
      "end": 360,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 360,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 328,
            "decorators": [],
            "name": "f7",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 331,
            "end": 360,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 357,
              "end": 360,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 332,
                "end": 341,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 333,
                  "end": 341,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 335,
                    "end": 341
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 343,
                "end": 352,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 344,
                  "end": 352,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 346,
                    "end": 352
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 361,
      "end": 392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 392,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 367,
            "decorators": [],
            "name": "f8",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 370,
            "end": 392,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 389,
              "end": 392,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 374,
                "end": 378,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 375,
                  "end": 378,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 377,
                    "end": 378,
                    "typeName": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 378,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 380,
                "end": 384,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 381,
                  "end": 384,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 383,
                    "end": 384,
                    "typeName": {
                      "type": "Identifier",
                      "start": 383,
                      "end": 384,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 370,
              "end": 373,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 371,
                  "end": 372,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 371,
                    "end": 372,
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
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 394,
      "end": 486,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 402,
        "end": 486,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 408,
            "end": 421,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 411,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 411,
              "end": 421,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 418,
                "end": 421,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 412,
                  "end": 413,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 415,
                  "end": 416,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 426,
            "end": 456,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 426,
              "end": 430,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 430,
              "end": 456,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 453,
                "end": 456,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 431,
                  "end": 440,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 432,
                    "end": 440,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 434,
                      "end": 440
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 442,
                  "end": 451,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 443,
                    "end": 451,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 445,
                      "end": 451
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 461,
            "end": 484,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 461,
              "end": 465,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 465,
              "end": 484,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 481,
                "end": 484,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 469,
                  "end": 473,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 470,
                    "end": 473,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 472,
                      "end": 473,
                      "typeName": {
                        "type": "Identifier",
                        "start": 472,
                        "end": 473,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 475,
                  "end": 479,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 476,
                    "end": 479,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 478,
                      "end": 479,
                      "typeName": {
                        "type": "Identifier",
                        "start": 478,
                        "end": 479,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 465,
                "end": 468,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 466,
                    "end": 467,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 466,
                      "end": 467,
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 400,
        "end": 401,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 488,
      "end": 614,
      "body": {
        "type": "TSInterfaceBody",
        "start": 500,
        "end": 614,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 506,
            "end": 513,
            "params": [
              {
                "type": "Identifier",
                "start": 507,
                "end": 508,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 510,
                "end": 511,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 518,
            "end": 541,
            "params": [
              {
                "type": "Identifier",
                "start": 519,
                "end": 528,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 520,
                  "end": 528,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 522,
                    "end": 528
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 530,
                "end": 539,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 531,
                  "end": 539,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 533,
                    "end": 539
                  }
                }
              }
            ]
          },
          {
            "type": "TSMethodSignature",
            "start": 546,
            "end": 556,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 546,
              "end": 549,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 550,
                "end": 551,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 553,
                "end": 554,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ],
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 561,
            "end": 587,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 561,
              "end": 564,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 565,
                "end": 574,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 566,
                  "end": 574,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 568,
                    "end": 574
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 576,
                "end": 585,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 577,
                  "end": 585,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 579,
                    "end": 585
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 592,
            "end": 612,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 592,
              "end": 596,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 600,
                "end": 604,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 601,
                  "end": 604,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 603,
                    "end": 604,
                    "typeName": {
                      "type": "Identifier",
                      "start": 603,
                      "end": 604,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 606,
                "end": 610,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 607,
                  "end": 610,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 609,
                    "end": 610,
                    "typeName": {
                      "type": "Identifier",
                      "start": 609,
                      "end": 610,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 596,
              "end": 599,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 597,
                  "end": 598,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 597,
                    "end": 598,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 498,
        "end": 499,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 616,
      "end": 674,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 620,
          "end": 673,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 620,
            "end": 673,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 621,
              "end": 673,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 623,
                "end": 673,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 629,
                    "end": 639,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 629,
                      "end": 632,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 633,
                        "end": 634,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 636,
                        "end": 637,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    ],
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 644,
                    "end": 671,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 644,
                      "end": 648,
                      "decorators": [],
                      "name": "foo2",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 649,
                        "end": 658,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 650,
                          "end": 658,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 652,
                            "end": 658
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 660,
                        "end": 669,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 661,
                          "end": 669,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 663,
                            "end": 669
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 676,
      "end": 783,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 680,
          "end": 783,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 680,
            "end": 681,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 684,
            "end": 783,
            "properties": [
              {
                "type": "Property",
                "start": 690,
                "end": 703,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 690,
                  "end": 693,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 693,
                  "end": 703,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 700,
                    "end": 703,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 694,
                      "end": 695,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 697,
                      "end": 698,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 709,
                "end": 750,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 709,
                  "end": 710,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 712,
                  "end": 750,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 747,
                    "end": 750,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 721,
                    "end": 724,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 725,
                      "end": 734,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 726,
                        "end": 734,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 728,
                          "end": 734
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 736,
                      "end": 745,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 737,
                        "end": 745,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 739,
                          "end": 745
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 756,
                "end": 781,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 756,
                  "end": 757,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 759,
                  "end": 781,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 778,
                    "end": 781,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 763,
                      "end": 767,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 764,
                        "end": 767,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 766,
                          "end": 767,
                          "typeName": {
                            "type": "Identifier",
                            "start": 766,
                            "end": 767,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 769,
                      "end": 773,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 770,
                        "end": 773,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 772,
                          "end": 773,
                          "typeName": {
                            "type": "Identifier",
                            "start": 772,
                            "end": 773,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 759,
                    "end": 762,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 760,
                        "end": 761,
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 760,
                          "end": 761,
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
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```

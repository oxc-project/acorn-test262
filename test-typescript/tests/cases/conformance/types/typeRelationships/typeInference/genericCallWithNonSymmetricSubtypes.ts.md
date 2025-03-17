__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 218,
  "end": 911,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 218,
      "end": 277,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 230,
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
          "type": "Identifier",
          "start": 234,
          "end": 238,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 235,
            "end": 238,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 237,
              "end": 238,
              "typeName": {
                "type": "Identifier",
                "start": 237,
                "end": 238,
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
        },
        {
          "type": "Identifier",
          "start": 240,
          "end": 244,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 241,
            "end": 244,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 243,
              "end": 244,
              "typeName": {
                "type": "Identifier",
                "start": 243,
                "end": 244,
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
      "body": {
        "type": "BlockStatement",
        "start": 246,
        "end": 277,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 252,
            "end": 261,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 256,
                "end": 260,
                "id": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 260,
                  "name": "r",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 257,
                    "end": 260,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 259,
                      "end": 260,
                      "typeName": {
                        "type": "Identifier",
                        "start": 259,
                        "end": 260,
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
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 266,
            "end": 275,
            "argument": {
              "type": "Identifier",
              "start": 273,
              "end": 274,
              "name": "r",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 230,
        "end": 233,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 231,
            "end": 232,
            "name": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
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
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 279,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 312,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 312,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 284,
              "end": 312,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 286,
                "end": 312,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 288,
                    "end": 298,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 288,
                      "end": 289,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 289,
                      "end": 297,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 291,
                        "end": 297
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 299,
                    "end": 310,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 300,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 301,
                      "end": 309,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 303,
                        "end": 309
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 314,
      "end": 348,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 347,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 347,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 319,
              "end": 347,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 321,
                "end": 347,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 323,
                    "end": 333,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 323,
                      "end": 324,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 324,
                      "end": 332,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 326,
                        "end": 332
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 334,
                    "end": 345,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 335,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 336,
                      "end": 344,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 338,
                        "end": 344
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 350,
      "end": 368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 354,
          "end": 367,
          "id": {
            "type": "Identifier",
            "start": 354,
            "end": 355,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 358,
            "end": 367,
            "callee": {
              "type": "Identifier",
              "start": 358,
              "end": 361,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 362,
                "end": 363,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 365,
                "end": 366,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 400,
      "end": 419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 404,
          "end": 418,
          "id": {
            "type": "Identifier",
            "start": 404,
            "end": 406,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 409,
            "end": 418,
            "callee": {
              "type": "Identifier",
              "start": 409,
              "end": 412,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 413,
                "end": 414,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 416,
                "end": 417,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 452,
      "end": 474,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 456,
          "end": 473,
          "id": {
            "type": "Identifier",
            "start": 456,
            "end": 473,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 457,
              "end": 473,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 459,
                "end": 473,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 461,
                    "end": 471,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 461,
                      "end": 462,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 462,
                      "end": 470,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 464,
                        "end": 470
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 475,
      "end": 498,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 479,
          "end": 497,
          "id": {
            "type": "Identifier",
            "start": 479,
            "end": 497,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 480,
              "end": 497,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 482,
                "end": 497,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 484,
                    "end": 495,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 484,
                      "end": 485,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 486,
                      "end": 494,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 488,
                        "end": 494
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 500,
      "end": 519,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 504,
          "end": 518,
          "id": {
            "type": "Identifier",
            "start": 504,
            "end": 506,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 509,
            "end": 518,
            "callee": {
              "type": "Identifier",
              "start": 509,
              "end": 512,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 513,
                "end": 514,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 516,
                "end": 517,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 551,
      "end": 570,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 555,
          "end": 569,
          "id": {
            "type": "Identifier",
            "start": 555,
            "end": 557,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 560,
            "end": 569,
            "callee": {
              "type": "Identifier",
              "start": 560,
              "end": 563,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 564,
                "end": 565,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 567,
                "end": 568,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 591,
      "end": 610,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 595,
          "end": 609,
          "id": {
            "type": "Identifier",
            "start": 595,
            "end": 597,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 600,
            "end": 609,
            "callee": {
              "type": "Identifier",
              "start": 600,
              "end": 603,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 604,
                "end": 605,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 607,
                "end": 608,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 631,
      "end": 650,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 635,
          "end": 649,
          "id": {
            "type": "Identifier",
            "start": 635,
            "end": 637,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 640,
            "end": 649,
            "callee": {
              "type": "Identifier",
              "start": 640,
              "end": 643,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 644,
                "end": 645,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 647,
                "end": 648,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 672,
      "end": 691,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 676,
          "end": 690,
          "id": {
            "type": "Identifier",
            "start": 676,
            "end": 678,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 681,
            "end": 690,
            "callee": {
              "type": "Identifier",
              "start": 681,
              "end": 684,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 685,
                "end": 686,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 688,
                "end": 689,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 712,
      "end": 731,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 716,
          "end": 730,
          "id": {
            "type": "Identifier",
            "start": 716,
            "end": 718,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 721,
            "end": 730,
            "callee": {
              "type": "Identifier",
              "start": 721,
              "end": 724,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 725,
                "end": 726,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 728,
                "end": 729,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 753,
      "end": 783,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 757,
          "end": 782,
          "id": {
            "type": "Identifier",
            "start": 757,
            "end": 782,
            "name": "s1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 759,
              "end": 782,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 761,
                "end": 782,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 762,
                    "end": 771,
                    "name": "x",
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
                          "name": "Object",
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
                  "start": 773,
                  "end": 782,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 776,
                    "end": 782
                  }
                }
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
      "start": 784,
      "end": 814,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 788,
          "end": 813,
          "id": {
            "type": "Identifier",
            "start": 788,
            "end": 813,
            "name": "s2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 790,
              "end": 813,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 792,
                "end": 813,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 793,
                    "end": 802,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 794,
                      "end": 802,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 796,
                        "end": 802
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 804,
                  "end": 813,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 807,
                    "end": 813
                  }
                }
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
      "start": 816,
      "end": 837,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 820,
          "end": 836,
          "id": {
            "type": "Identifier",
            "start": 820,
            "end": 822,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 825,
            "end": 836,
            "callee": {
              "type": "Identifier",
              "start": 825,
              "end": 828,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 829,
                "end": 831,
                "name": "s1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 833,
                "end": 835,
                "name": "s2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 864,
      "end": 885,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 868,
          "end": 884,
          "id": {
            "type": "Identifier",
            "start": 868,
            "end": 870,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 873,
            "end": 884,
            "callee": {
              "type": "Identifier",
              "start": 873,
              "end": 876,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 877,
                "end": 879,
                "name": "s2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 881,
                "end": 883,
                "name": "s1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
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

genericCallWithNonSymmetricSubtypes.ts
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
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 260,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
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
            "type": "ReturnStatement",
            "start": 266,
            "end": 275,
            "argument": {
              "type": "Identifier",
              "start": 273,
              "end": 274,
              "decorators": [],
              "name": "r",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 230,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 234,
          "end": 238,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 240,
          "end": 244,
          "decorators": [],
          "name": "y",
          "optional": false,
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
        "start": 230,
        "end": 233,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 231,
            "end": 232,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
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
      "type": "VariableDeclaration",
      "start": 279,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 312,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 312,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 288,
                      "end": 289,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 289,
                      "end": 297,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 291,
                        "end": 297
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 299,
                    "end": 310,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 300,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 301,
                      "end": 309,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 303,
                        "end": 309
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
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 347,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 323,
                      "end": 324,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 324,
                      "end": 332,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 326,
                        "end": 332
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 334,
                    "end": 345,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 335,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 336,
                      "end": 344,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 338,
                        "end": 344
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
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 354,
            "end": 355,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 358,
            "end": 367,
            "arguments": [
              {
                "type": "Identifier",
                "start": 362,
                "end": 363,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 365,
                "end": 366,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 358,
              "end": 361,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 404,
            "end": 406,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 409,
            "end": 418,
            "arguments": [
              {
                "type": "Identifier",
                "start": 413,
                "end": 414,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 416,
                "end": 417,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 409,
              "end": 412,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 456,
            "end": 473,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 461,
                      "end": 462,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 462,
                      "end": 470,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 464,
                        "end": 470
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
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 479,
            "end": 497,
            "decorators": [],
            "name": "y",
            "optional": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 484,
                      "end": 485,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 486,
                      "end": 494,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 488,
                        "end": 494
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
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 504,
            "end": 506,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 509,
            "end": 518,
            "arguments": [
              {
                "type": "Identifier",
                "start": 513,
                "end": 514,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 516,
                "end": 517,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 509,
              "end": 512,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 555,
            "end": 557,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 560,
            "end": 569,
            "arguments": [
              {
                "type": "Identifier",
                "start": 564,
                "end": 565,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 567,
                "end": 568,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 560,
              "end": 563,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 595,
            "end": 597,
            "decorators": [],
            "name": "r5",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 600,
            "end": 609,
            "arguments": [
              {
                "type": "Identifier",
                "start": 604,
                "end": 605,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 607,
                "end": 608,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 600,
              "end": 603,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 635,
            "end": 637,
            "decorators": [],
            "name": "r5",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 640,
            "end": 649,
            "arguments": [
              {
                "type": "Identifier",
                "start": 644,
                "end": 645,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 647,
                "end": 648,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 640,
              "end": 643,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 676,
            "end": 678,
            "decorators": [],
            "name": "r6",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 681,
            "end": 690,
            "arguments": [
              {
                "type": "Identifier",
                "start": 685,
                "end": 686,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 688,
                "end": 689,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 681,
              "end": 684,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 716,
            "end": 718,
            "decorators": [],
            "name": "r6",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 721,
            "end": 730,
            "arguments": [
              {
                "type": "Identifier",
                "start": 725,
                "end": 726,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 728,
                "end": 729,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 721,
              "end": 724,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 757,
            "end": 782,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 759,
              "end": 782,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 761,
                "end": 782,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 762,
                    "end": 771,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
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
                          "decorators": [],
                          "name": "Object",
                          "optional": false
                        }
                      }
                    }
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
      "start": 784,
      "end": 814,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 788,
          "end": 813,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 788,
            "end": 813,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 790,
              "end": 813,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 792,
                "end": 813,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 793,
                    "end": 802,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 794,
                      "end": 802,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 796,
                        "end": 802
                      }
                    }
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
      "start": 816,
      "end": 837,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 820,
          "end": 836,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 820,
            "end": 822,
            "decorators": [],
            "name": "r7",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 825,
            "end": 836,
            "arguments": [
              {
                "type": "Identifier",
                "start": 829,
                "end": 831,
                "decorators": [],
                "name": "s1",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 833,
                "end": 835,
                "decorators": [],
                "name": "s2",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 825,
              "end": 828,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 868,
            "end": 870,
            "decorators": [],
            "name": "r8",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 873,
            "end": 884,
            "arguments": [
              {
                "type": "Identifier",
                "start": 877,
                "end": 879,
                "decorators": [],
                "name": "s2",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 881,
                "end": 883,
                "decorators": [],
                "name": "s1",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 873,
              "end": 876,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
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

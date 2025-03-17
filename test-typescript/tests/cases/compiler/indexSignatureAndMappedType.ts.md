__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 122,
  "end": 689,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 122,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 133,
        "name": "f1",
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
          "start": 155,
          "end": 178,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 156,
            "end": 178,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 158,
              "end": 178,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 160,
                  "end": 176,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 161,
                      "end": 172,
                      "name": "key",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 164,
                        "end": 172,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 166,
                          "end": 172
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 173,
                    "end": 176,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 175,
                      "end": 176,
                      "typeName": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 176,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 180,
          "end": 195,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 181,
            "end": 195,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 183,
              "end": 195,
              "typeName": {
                "type": "Identifier",
                "start": 183,
                "end": 189,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 189,
                "end": 195,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 190,
                    "end": 191,
                    "typeName": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 191,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 193,
                    "end": 194,
                    "typeName": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 194,
                      "name": "T",
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 197,
        "end": 232,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 203,
            "end": 209,
            "expression": {
              "type": "AssignmentExpression",
              "start": 203,
              "end": 208,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 207,
                "end": 208,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 214,
            "end": 220,
            "expression": {
              "type": "AssignmentExpression",
              "start": 214,
              "end": 219,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 214,
                "end": 215,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 218,
                "end": 219,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 133,
        "end": 154,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 134,
            "end": 135,
            "name": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
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
            "start": 137,
            "end": 153,
            "name": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 147,
              "end": 153
            },
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
      "type": "FunctionDeclaration",
      "start": 234,
      "end": 321,
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 245,
        "name": "f2",
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
          "start": 249,
          "end": 272,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 250,
            "end": 272,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 252,
              "end": 272,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 254,
                  "end": 270,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 255,
                      "end": 266,
                      "name": "key",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 258,
                        "end": 266,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 260,
                          "end": 266
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 267,
                    "end": 270,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 269,
                      "end": 270,
                      "typeName": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 270,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 274,
          "end": 294,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 275,
            "end": 294,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 277,
              "end": 294,
              "typeName": {
                "type": "Identifier",
                "start": 277,
                "end": 283,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 283,
                "end": 294,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 284,
                    "end": 290
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 292,
                    "end": 293,
                    "typeName": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 293,
                      "name": "T",
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 296,
        "end": 321,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 302,
            "end": 308,
            "expression": {
              "type": "AssignmentExpression",
              "start": 302,
              "end": 307,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 302,
                "end": 303,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 306,
                "end": 307,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 313,
            "end": 319,
            "expression": {
              "type": "AssignmentExpression",
              "start": 313,
              "end": 318,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 313,
                "end": 314,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 317,
                "end": 318,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 245,
        "end": 248,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 246,
            "end": 247,
            "name": {
              "type": "Identifier",
              "start": 246,
              "end": 247,
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
      "type": "FunctionDeclaration",
      "start": 323,
      "end": 446,
      "id": {
        "type": "Identifier",
        "start": 332,
        "end": 334,
        "name": "f3",
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
          "start": 359,
          "end": 382,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 360,
            "end": 382,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 362,
              "end": 382,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 364,
                  "end": 380,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 365,
                      "end": 376,
                      "name": "key",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 368,
                        "end": 376,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 370,
                          "end": 376
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 377,
                    "end": 380,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 379,
                      "end": 380,
                      "typeName": {
                        "type": "Identifier",
                        "start": 379,
                        "end": 380,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 384,
          "end": 399,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 385,
            "end": 399,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 387,
              "end": 399,
              "typeName": {
                "type": "Identifier",
                "start": 387,
                "end": 393,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 393,
                "end": 399,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 394,
                    "end": 395,
                    "typeName": {
                      "type": "Identifier",
                      "start": 394,
                      "end": 395,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 397,
                    "end": 398,
                    "typeName": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 398,
                      "name": "U",
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 401,
        "end": 446,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 407,
            "end": 413,
            "expression": {
              "type": "AssignmentExpression",
              "start": 407,
              "end": 412,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 407,
                "end": 408,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 411,
                "end": 412,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 428,
            "end": 434,
            "expression": {
              "type": "AssignmentExpression",
              "start": 428,
              "end": 433,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 428,
                "end": 429,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 432,
                "end": 433,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 334,
        "end": 358,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 335,
            "end": 336,
            "name": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
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
            "start": 338,
            "end": 339,
            "name": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
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
            "start": 341,
            "end": 357,
            "name": {
              "type": "Identifier",
              "start": 341,
              "end": 342,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 351,
              "end": 357
            },
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
      "type": "TSTypeAliasDeclaration",
      "start": 470,
      "end": 519,
      "id": {
        "type": "Identifier",
        "start": 475,
        "end": 485,
        "name": "Dictionary",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 488,
        "end": 518,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 494,
            "end": 516,
            "parameters": [
              {
                "type": "Identifier",
                "start": 495,
                "end": 506,
                "name": "key",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 498,
                  "end": 506,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 500,
                    "end": 506
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 507,
              "end": 515,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 509,
                "end": 515
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 521,
      "end": 592,
      "id": {
        "type": "Identifier",
        "start": 531,
        "end": 542,
        "name": "IBaseEntity",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 543,
        "end": 592,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 549,
            "end": 562,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 549,
              "end": 553,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 553,
              "end": 561,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 555,
                "end": 561
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 567,
            "end": 590,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 567,
              "end": 577,
              "name": "properties",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 577,
              "end": 589,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 579,
                "end": 589,
                "typeName": {
                  "type": "Identifier",
                  "start": 579,
                  "end": 589,
                  "name": "Dictionary",
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
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 594,
      "end": 688,
      "id": {
        "type": "Identifier",
        "start": 604,
        "end": 611,
        "name": "IEntity",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 638,
          "end": 649,
          "expression": {
            "type": "Identifier",
            "start": 638,
            "end": 649,
            "name": "IBaseEntity",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 611,
        "end": 629,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 612,
            "end": 628,
            "name": {
              "type": "Identifier",
              "start": 612,
              "end": 613,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 622,
              "end": 628
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 650,
        "end": 688,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 656,
            "end": 686,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 656,
              "end": 666,
              "name": "properties",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 666,
              "end": 685,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 668,
                "end": 685,
                "typeName": {
                  "type": "Identifier",
                  "start": 668,
                  "end": 674,
                  "name": "Record",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 674,
                  "end": 685,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 675,
                      "end": 676,
                      "typeName": {
                        "type": "Identifier",
                        "start": 675,
                        "end": 676,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 678,
                      "end": 684
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

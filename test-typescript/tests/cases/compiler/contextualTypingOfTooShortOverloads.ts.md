__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 27,
  "end": 1149,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 44,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 44,
            "name": "use",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 44,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 36,
                "end": 44,
                "typeName": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 44,
                  "name": "Overload",
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
      "type": "ExpressionStatement",
      "start": 46,
      "end": 68,
      "expression": {
        "type": "CallExpression",
        "start": 46,
        "end": 67,
        "callee": {
          "type": "Identifier",
          "start": 46,
          "end": 49,
          "name": "use",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 50,
            "end": 66,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 51,
                "end": 54,
                "name": "req",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 56,
                "end": 59,
                "name": "res",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 64,
              "end": 66,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 70,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 88,
        "name": "Overload",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 89,
        "end": 198,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 95,
            "end": 136,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 96,
                "end": 128,
                "name": "handler1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 104,
                  "end": 128,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 106,
                    "end": 128,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 107,
                        "end": 119,
                        "name": "req1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 111,
                          "end": 119,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 113,
                            "end": 119
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 121,
                      "end": 128,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 124,
                        "end": 128
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
              "start": 129,
              "end": 135,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 131,
                "end": 135
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 141,
            "end": 196,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 142,
                "end": 188,
                "name": "handler2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 150,
                  "end": 188,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 152,
                    "end": 188,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 153,
                        "end": 165,
                        "name": "req2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 157,
                          "end": 165,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 159,
                            "end": 165
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 167,
                        "end": 179,
                        "name": "res2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 171,
                          "end": 179,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 173,
                            "end": 179
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 181,
                      "end": 188,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 184,
                        "end": 188
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
              "start": 189,
              "end": 195,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 191,
                "end": 195
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 227,
      "end": 242,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 241,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 241,
            "name": "app",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 241,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 236,
                "end": 241,
                "typeName": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 241,
                  "name": "MyApp",
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 243,
      "end": 294,
      "expression": {
        "type": "CallExpression",
        "start": 243,
        "end": 293,
        "callee": {
          "type": "MemberExpression",
          "start": 243,
          "end": 250,
          "object": {
            "type": "Identifier",
            "start": 243,
            "end": 246,
            "name": "app",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 247,
            "end": 250,
            "name": "use",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 251,
            "end": 292,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 252,
                "end": 260,
                "name": "err",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 255,
                  "end": 260,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 257,
                    "end": 260
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 262,
                "end": 265,
                "name": "req",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 267,
                "end": 270,
                "name": "res",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 272,
                "end": 276,
                "name": "next",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 281,
              "end": 292,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 283,
                  "end": 290,
                  "argument": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 297,
      "end": 370,
      "id": {
        "type": "Identifier",
        "start": 307,
        "end": 312,
        "name": "MyApp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 313,
        "end": 370,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 319,
            "end": 368,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 319,
              "end": 322,
              "name": "use",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 322,
              "end": 367,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 324,
                "end": 367,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 324,
                    "end": 344,
                    "typeName": {
                      "type": "Identifier",
                      "start": 324,
                      "end": 338,
                      "name": "IRouterHandler",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 338,
                      "end": 344,
                      "params": [
                        {
                          "type": "TSThisType",
                          "start": 339,
                          "end": 343
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 347,
                    "end": 367,
                    "typeName": {
                      "type": "Identifier",
                      "start": 347,
                      "end": 361,
                      "name": "IRouterMatcher",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 361,
                      "end": 367,
                      "params": [
                        {
                          "type": "TSThisType",
                          "start": 362,
                          "end": 366
                        }
                      ]
                    }
                  }
                ]
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
      "start": 372,
      "end": 489,
      "id": {
        "type": "Identifier",
        "start": 382,
        "end": 396,
        "name": "IRouterHandler",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 396,
        "end": 399,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 397,
            "end": 398,
            "name": {
              "type": "Identifier",
              "start": 397,
              "end": 398,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 400,
        "end": 489,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 406,
            "end": 441,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 407,
                "end": 436,
                "argument": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 418,
                  "name": "handlers",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 418,
                  "end": 436,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 420,
                    "end": 436,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 420,
                      "end": 434,
                      "typeName": {
                        "type": "Identifier",
                        "start": 420,
                        "end": 434,
                        "name": "RequestHandler",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 437,
              "end": 440,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 439,
                "end": 440,
                "typeName": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 440,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 446,
            "end": 487,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 447,
                "end": 482,
                "argument": {
                  "type": "Identifier",
                  "start": 450,
                  "end": 458,
                  "name": "handlers",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 458,
                  "end": 482,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 460,
                    "end": 482,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 460,
                      "end": 480,
                      "typeName": {
                        "type": "Identifier",
                        "start": 460,
                        "end": 480,
                        "name": "RequestHandlerParams",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 483,
              "end": 486,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 485,
                "end": 486,
                "typeName": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 486,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 491,
      "end": 644,
      "id": {
        "type": "Identifier",
        "start": 501,
        "end": 515,
        "name": "IRouterMatcher",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 515,
        "end": 518,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 516,
            "end": 517,
            "name": {
              "type": "Identifier",
              "start": 516,
              "end": 517,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 519,
        "end": 644,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 525,
            "end": 578,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 526,
                "end": 542,
                "name": "path",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 530,
                  "end": 542,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 532,
                    "end": 542,
                    "typeName": {
                      "type": "Identifier",
                      "start": 532,
                      "end": 542,
                      "name": "PathParams",
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
                "start": 544,
                "end": 573,
                "argument": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 555,
                  "name": "handlers",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 555,
                  "end": 573,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 557,
                    "end": 573,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 557,
                      "end": 571,
                      "typeName": {
                        "type": "Identifier",
                        "start": 557,
                        "end": 571,
                        "name": "RequestHandler",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 574,
              "end": 577,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 576,
                "end": 577,
                "typeName": {
                  "type": "Identifier",
                  "start": 576,
                  "end": 577,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 583,
            "end": 642,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 584,
                "end": 600,
                "name": "path",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 588,
                  "end": 600,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 590,
                    "end": 600,
                    "typeName": {
                      "type": "Identifier",
                      "start": 590,
                      "end": 600,
                      "name": "PathParams",
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
                "start": 602,
                "end": 637,
                "argument": {
                  "type": "Identifier",
                  "start": 605,
                  "end": 613,
                  "name": "handlers",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 613,
                  "end": 637,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 615,
                    "end": 637,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 615,
                      "end": 635,
                      "typeName": {
                        "type": "Identifier",
                        "start": 615,
                        "end": 635,
                        "name": "RequestHandlerParams",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 638,
              "end": 641,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 640,
                "end": 641,
                "typeName": {
                  "type": "Identifier",
                  "start": 640,
                  "end": 641,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 646,
      "end": 702,
      "id": {
        "type": "Identifier",
        "start": 651,
        "end": 661,
        "name": "PathParams",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 664,
        "end": 701,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 664,
            "end": 670
          },
          {
            "type": "TSTypeReference",
            "start": 673,
            "end": 679,
            "typeName": {
              "type": "Identifier",
              "start": 673,
              "end": 679,
              "name": "RegExp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSArrayType",
            "start": 682,
            "end": 701,
            "elementType": {
              "type": "TSUnionType",
              "start": 683,
              "end": 698,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 683,
                  "end": 689
                },
                {
                  "type": "TSTypeReference",
                  "start": 692,
                  "end": 698,
                  "typeName": {
                    "type": "Identifier",
                    "start": 692,
                    "end": 698,
                    "name": "RegExp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 703,
      "end": 811,
      "id": {
        "type": "Identifier",
        "start": 708,
        "end": 728,
        "name": "RequestHandlerParams",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 731,
        "end": 810,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 731,
            "end": 745,
            "typeName": {
              "type": "Identifier",
              "start": 731,
              "end": 745,
              "name": "RequestHandler",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 748,
            "end": 767,
            "typeName": {
              "type": "Identifier",
              "start": 748,
              "end": 767,
              "name": "ErrorRequestHandler",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSArrayType",
            "start": 770,
            "end": 810,
            "elementType": {
              "type": "TSUnionType",
              "start": 771,
              "end": 807,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 771,
                  "end": 785,
                  "typeName": {
                    "type": "Identifier",
                    "start": 771,
                    "end": 785,
                    "name": "RequestHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 788,
                  "end": 807,
                  "typeName": {
                    "type": "Identifier",
                    "start": 788,
                    "end": 807,
                    "name": "ErrorRequestHandler",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 813,
      "end": 901,
      "id": {
        "type": "Identifier",
        "start": 823,
        "end": 837,
        "name": "RequestHandler",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 838,
        "end": 901,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 844,
            "end": 899,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 845,
                "end": 857,
                "name": "req",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 848,
                  "end": 857,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 850,
                    "end": 857,
                    "typeName": {
                      "type": "Identifier",
                      "start": 850,
                      "end": 857,
                      "name": "Request",
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
                "start": 859,
                "end": 872,
                "name": "res",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 862,
                  "end": 872,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 864,
                    "end": 872,
                    "typeName": {
                      "type": "Identifier",
                      "start": 864,
                      "end": 872,
                      "name": "Response",
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
                "start": 874,
                "end": 892,
                "name": "next",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 878,
                  "end": 892,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 880,
                    "end": 892,
                    "typeName": {
                      "type": "Identifier",
                      "start": 880,
                      "end": 892,
                      "name": "NextFunction",
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
              "start": 893,
              "end": 898,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 895,
                "end": 898
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 903,
      "end": 1006,
      "id": {
        "type": "Identifier",
        "start": 913,
        "end": 932,
        "name": "ErrorRequestHandler",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 933,
        "end": 1006,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 939,
            "end": 1004,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 940,
                "end": 948,
                "name": "err",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 943,
                  "end": 948,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 945,
                    "end": 948
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 950,
                "end": 962,
                "name": "req",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 953,
                  "end": 962,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 955,
                    "end": 962,
                    "typeName": {
                      "type": "Identifier",
                      "start": 955,
                      "end": 962,
                      "name": "Request",
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
                "start": 964,
                "end": 977,
                "name": "res",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 967,
                  "end": 977,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 969,
                    "end": 977,
                    "typeName": {
                      "type": "Identifier",
                      "start": 969,
                      "end": 977,
                      "name": "Response",
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
                "start": 979,
                "end": 997,
                "name": "next",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 983,
                  "end": 997,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 985,
                    "end": 997,
                    "typeName": {
                      "type": "Identifier",
                      "start": 985,
                      "end": 997,
                      "name": "NextFunction",
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
              "start": 998,
              "end": 1003,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1000,
                "end": 1003
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1008,
      "end": 1049,
      "id": {
        "type": "Identifier",
        "start": 1018,
        "end": 1025,
        "name": "Request",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1026,
        "end": 1049,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1032,
            "end": 1047,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1032,
              "end": 1038,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1038,
              "end": 1046,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1040,
                "end": 1046
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
      "start": 1051,
      "end": 1097,
      "id": {
        "type": "Identifier",
        "start": 1061,
        "end": 1069,
        "name": "Response",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1070,
        "end": 1097,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1076,
            "end": 1095,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1076,
              "end": 1086,
              "name": "statusCode",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1086,
              "end": 1094,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1088,
                "end": 1094
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
      "start": 1099,
      "end": 1148,
      "id": {
        "type": "Identifier",
        "start": 1109,
        "end": 1121,
        "name": "NextFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1122,
        "end": 1148,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1128,
            "end": 1146,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1129,
                "end": 1138,
                "name": "err",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1133,
                  "end": 1138,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1135,
                    "end": 1138
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1139,
              "end": 1145,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1141,
                "end": 1145
              }
            }
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

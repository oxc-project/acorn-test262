__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 27,
  "end": 1148,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 44,
            "decorators": [],
            "name": "use",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 44,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 36,
                "end": 44,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 44,
                  "decorators": [],
                  "name": "Overload",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 46,
      "end": 68,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 46,
        "end": 67,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 50,
            "end": 66,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 64,
              "end": 66,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 51,
                "end": 54,
                "decorators": [],
                "name": "req",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 56,
                "end": 59,
                "decorators": [],
                "name": "res",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 46,
          "end": 49,
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 70,
      "end": 198,
      "body": {
        "type": "TSInterfaceBody",
        "start": 89,
        "end": 198,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 95,
            "end": 136,
            "params": [
              {
                "type": "Identifier",
                "start": 96,
                "end": 128,
                "decorators": [],
                "name": "handler1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 104,
                  "end": 128,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 106,
                    "end": 128,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 107,
                        "end": 119,
                        "decorators": [],
                        "name": "req1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 111,
                          "end": 119,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 113,
                            "end": 119
                          }
                        }
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
                    },
                    "typeParameters": null
                  }
                }
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
            },
            "typeParameters": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 141,
            "end": 196,
            "params": [
              {
                "type": "Identifier",
                "start": 142,
                "end": 188,
                "decorators": [],
                "name": "handler2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 150,
                  "end": 188,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 152,
                    "end": 188,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 153,
                        "end": 165,
                        "decorators": [],
                        "name": "req2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 157,
                          "end": 165,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 159,
                            "end": 165
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 167,
                        "end": 179,
                        "decorators": [],
                        "name": "res2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 171,
                          "end": 179,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 173,
                            "end": 179
                          }
                        }
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
                    },
                    "typeParameters": null
                  }
                }
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
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 88,
        "decorators": [],
        "name": "Overload",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 241,
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 241,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 236,
                "end": 241,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 241,
                  "decorators": [],
                  "name": "MyApp",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 243,
      "end": 294,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 243,
        "end": 293,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 251,
            "end": 292,
            "async": false,
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
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 252,
                "end": 260,
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 255,
                  "end": 260,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 257,
                    "end": 260
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 262,
                "end": 265,
                "decorators": [],
                "name": "req",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 267,
                "end": 270,
                "decorators": [],
                "name": "res",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 272,
                "end": 276,
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 243,
          "end": 250,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 243,
            "end": 246,
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 247,
            "end": 250,
            "decorators": [],
            "name": "use",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 297,
      "end": 370,
      "body": {
        "type": "TSInterfaceBody",
        "start": 313,
        "end": 370,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 319,
            "end": 368,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 319,
              "end": 322,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 324,
                      "end": 338,
                      "decorators": [],
                      "name": "IRouterHandler",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 347,
                    "end": 367,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 347,
                      "end": 361,
                      "decorators": [],
                      "name": "IRouterMatcher",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 307,
        "end": 312,
        "decorators": [],
        "name": "MyApp",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 372,
      "end": 489,
      "body": {
        "type": "TSInterfaceBody",
        "start": 400,
        "end": 489,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 406,
            "end": 441,
            "params": [
              {
                "type": "RestElement",
                "start": 407,
                "end": 436,
                "argument": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 418,
                  "decorators": [],
                  "name": "handlers",
                  "optional": false,
                  "typeAnnotation": null
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 420,
                        "end": 434,
                        "decorators": [],
                        "name": "RequestHandler",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 440,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 446,
            "end": 487,
            "params": [
              {
                "type": "RestElement",
                "start": 447,
                "end": 482,
                "argument": {
                  "type": "Identifier",
                  "start": 450,
                  "end": 458,
                  "decorators": [],
                  "name": "handlers",
                  "optional": false,
                  "typeAnnotation": null
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 460,
                        "end": 480,
                        "decorators": [],
                        "name": "RequestHandlerParams",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 486,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 382,
        "end": 396,
        "decorators": [],
        "name": "IRouterHandler",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 396,
        "end": 399,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 397,
            "end": 398,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 397,
              "end": 398,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 491,
      "end": 644,
      "body": {
        "type": "TSInterfaceBody",
        "start": 519,
        "end": 644,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 525,
            "end": 578,
            "params": [
              {
                "type": "Identifier",
                "start": 526,
                "end": 542,
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 530,
                  "end": 542,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 532,
                    "end": 542,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 532,
                      "end": 542,
                      "decorators": [],
                      "name": "PathParams",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 544,
                "end": 573,
                "argument": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 555,
                  "decorators": [],
                  "name": "handlers",
                  "optional": false,
                  "typeAnnotation": null
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 557,
                        "end": 571,
                        "decorators": [],
                        "name": "RequestHandler",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 576,
                  "end": 577,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 583,
            "end": 642,
            "params": [
              {
                "type": "Identifier",
                "start": 584,
                "end": 600,
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 588,
                  "end": 600,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 590,
                    "end": 600,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 590,
                      "end": 600,
                      "decorators": [],
                      "name": "PathParams",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 602,
                "end": 637,
                "argument": {
                  "type": "Identifier",
                  "start": 605,
                  "end": 613,
                  "decorators": [],
                  "name": "handlers",
                  "optional": false,
                  "typeAnnotation": null
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 615,
                        "end": 635,
                        "decorators": [],
                        "name": "RequestHandlerParams",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 640,
                  "end": 641,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 501,
        "end": 515,
        "decorators": [],
        "name": "IRouterMatcher",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 515,
        "end": 518,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 516,
            "end": 517,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 516,
              "end": 517,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 646,
      "end": 702,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 651,
        "end": 661,
        "decorators": [],
        "name": "PathParams",
        "optional": false,
        "typeAnnotation": null
      },
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
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 673,
              "end": 679,
              "decorators": [],
              "name": "RegExp",
              "optional": false,
              "typeAnnotation": null
            }
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 692,
                    "end": 698,
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 703,
      "end": 811,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 708,
        "end": 728,
        "decorators": [],
        "name": "RequestHandlerParams",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 731,
        "end": 810,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 731,
            "end": 745,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 731,
              "end": 745,
              "decorators": [],
              "name": "RequestHandler",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 748,
            "end": 767,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 748,
              "end": 767,
              "decorators": [],
              "name": "ErrorRequestHandler",
              "optional": false,
              "typeAnnotation": null
            }
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 771,
                    "end": 785,
                    "decorators": [],
                    "name": "RequestHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 788,
                  "end": 807,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 788,
                    "end": 807,
                    "decorators": [],
                    "name": "ErrorRequestHandler",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 813,
      "end": 901,
      "body": {
        "type": "TSInterfaceBody",
        "start": 838,
        "end": 901,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 844,
            "end": 899,
            "params": [
              {
                "type": "Identifier",
                "start": 845,
                "end": 857,
                "decorators": [],
                "name": "req",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 848,
                  "end": 857,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 850,
                    "end": 857,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 850,
                      "end": 857,
                      "decorators": [],
                      "name": "Request",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 859,
                "end": 872,
                "decorators": [],
                "name": "res",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 862,
                  "end": 872,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 864,
                    "end": 872,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 864,
                      "end": 872,
                      "decorators": [],
                      "name": "Response",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 874,
                "end": 892,
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 878,
                  "end": 892,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 880,
                    "end": 892,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 880,
                      "end": 892,
                      "decorators": [],
                      "name": "NextFunction",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
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
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 823,
        "end": 837,
        "decorators": [],
        "name": "RequestHandler",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 903,
      "end": 1006,
      "body": {
        "type": "TSInterfaceBody",
        "start": 933,
        "end": 1006,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 939,
            "end": 1004,
            "params": [
              {
                "type": "Identifier",
                "start": 940,
                "end": 948,
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 943,
                  "end": 948,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 945,
                    "end": 948
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 950,
                "end": 962,
                "decorators": [],
                "name": "req",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 953,
                  "end": 962,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 955,
                    "end": 962,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 955,
                      "end": 962,
                      "decorators": [],
                      "name": "Request",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 964,
                "end": 977,
                "decorators": [],
                "name": "res",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 967,
                  "end": 977,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 969,
                    "end": 977,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 969,
                      "end": 977,
                      "decorators": [],
                      "name": "Response",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 979,
                "end": 997,
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 983,
                  "end": 997,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 985,
                    "end": 997,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 985,
                      "end": 997,
                      "decorators": [],
                      "name": "NextFunction",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
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
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 913,
        "end": 932,
        "decorators": [],
        "name": "ErrorRequestHandler",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1008,
      "end": 1049,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1026,
        "end": 1049,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1032,
            "end": 1047,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1032,
              "end": 1038,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1038,
              "end": 1046,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1040,
                "end": 1046
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1018,
        "end": 1025,
        "decorators": [],
        "name": "Request",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1051,
      "end": 1097,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1070,
        "end": 1097,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1076,
            "end": 1095,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1076,
              "end": 1086,
              "decorators": [],
              "name": "statusCode",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1086,
              "end": 1094,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1088,
                "end": 1094
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1061,
        "end": 1069,
        "decorators": [],
        "name": "Response",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1099,
      "end": 1148,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1122,
        "end": 1148,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1128,
            "end": 1146,
            "params": [
              {
                "type": "Identifier",
                "start": 1129,
                "end": 1138,
                "decorators": [],
                "name": "err",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1133,
                  "end": 1138,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1135,
                    "end": 1138
                  }
                }
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
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1109,
        "end": 1121,
        "decorators": [],
        "name": "NextFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

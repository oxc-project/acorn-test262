__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "use",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Overload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 36,
                  "end": 44
                },
                "typeArguments": null,
                "start": 36,
                "end": 44
              },
              "start": 34,
              "end": 44
            },
            "start": 31,
            "end": 44
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 44
        }
      ],
      "declare": false,
      "start": 27,
      "end": 45
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 49
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "req",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 54
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "res",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 59
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 64,
              "end": 66
            },
            "id": null,
            "generator": false,
            "start": 50,
            "end": 66
          }
        ],
        "optional": false,
        "start": 46,
        "end": 67
      },
      "directive": null,
      "start": 46,
      "end": 68
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Overload",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 88
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "handler1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "req1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 113,
                            "end": 119
                          },
                          "start": 111,
                          "end": 119
                        },
                        "start": 107,
                        "end": 119
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 124,
                        "end": 128
                      },
                      "start": 121,
                      "end": 128
                    },
                    "start": 106,
                    "end": 128
                  },
                  "start": 104,
                  "end": 128
                },
                "start": 96,
                "end": 128
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 131,
                "end": 135
              },
              "start": 129,
              "end": 135
            },
            "start": 95,
            "end": 136
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "handler2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "req2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 159,
                            "end": 165
                          },
                          "start": 157,
                          "end": 165
                        },
                        "start": 153,
                        "end": 165
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "res2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 173,
                            "end": 179
                          },
                          "start": 171,
                          "end": 179
                        },
                        "start": 167,
                        "end": 179
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 184,
                        "end": 188
                      },
                      "start": 181,
                      "end": 188
                    },
                    "start": 152,
                    "end": 188
                  },
                  "start": 150,
                  "end": 188
                },
                "start": 142,
                "end": 188
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 191,
                "end": 195
              },
              "start": 189,
              "end": 195
            },
            "start": 141,
            "end": 196
          }
        ],
        "start": 89,
        "end": 198
      },
      "declare": false,
      "start": 70,
      "end": 198
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyApp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 241
                },
                "typeArguments": null,
                "start": 236,
                "end": 241
              },
              "start": 234,
              "end": 241
            },
            "start": 231,
            "end": 241
          },
          "init": null,
          "definite": false,
          "start": 231,
          "end": 241
        }
      ],
      "declare": false,
      "start": 227,
      "end": 242
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 246
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "use",
            "optional": false,
            "typeAnnotation": null,
            "start": 247,
            "end": 250
          },
          "optional": false,
          "computed": false,
          "start": 243,
          "end": 250
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 257,
                    "end": 260
                  },
                  "start": 255,
                  "end": 260
                },
                "start": 252,
                "end": 260
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "req",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 265
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "res",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 270
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 276
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 283,
                  "end": 290
                }
              ],
              "start": 281,
              "end": 292
            },
            "id": null,
            "generator": false,
            "start": 251,
            "end": 292
          }
        ],
        "optional": false,
        "start": 243,
        "end": 293
      },
      "directive": null,
      "start": 243,
      "end": 294
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyApp",
        "optional": false,
        "typeAnnotation": null,
        "start": 307,
        "end": 312
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 322
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IRouterHandler",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 324,
                      "end": 338
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSThisType",
                          "start": 339,
                          "end": 343
                        }
                      ],
                      "start": 338,
                      "end": 344
                    },
                    "start": 324,
                    "end": 344
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IRouterMatcher",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 347,
                      "end": 361
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSThisType",
                          "start": 362,
                          "end": 366
                        }
                      ],
                      "start": 361,
                      "end": 367
                    },
                    "start": 347,
                    "end": 367
                  }
                ],
                "start": 324,
                "end": 367
              },
              "start": 322,
              "end": 367
            },
            "accessibility": null,
            "static": false,
            "start": 319,
            "end": 368
          }
        ],
        "start": 313,
        "end": 370
      },
      "declare": false,
      "start": 297,
      "end": 370
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IRouterHandler",
        "optional": false,
        "typeAnnotation": null,
        "start": 382,
        "end": 396
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 398
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 397,
            "end": 398
          }
        ],
        "start": 396,
        "end": 399
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "handlers",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 418
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RequestHandler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 420,
                        "end": 434
                      },
                      "typeArguments": null,
                      "start": 420,
                      "end": 434
                    },
                    "start": 420,
                    "end": 436
                  },
                  "start": 418,
                  "end": 436
                },
                "value": null,
                "start": 407,
                "end": 436
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 439,
                  "end": 440
                },
                "typeArguments": null,
                "start": 439,
                "end": 440
              },
              "start": 437,
              "end": 440
            },
            "start": 406,
            "end": 441
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "handlers",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 450,
                  "end": 458
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RequestHandlerParams",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 460,
                        "end": 480
                      },
                      "typeArguments": null,
                      "start": 460,
                      "end": 480
                    },
                    "start": 460,
                    "end": 482
                  },
                  "start": 458,
                  "end": 482
                },
                "value": null,
                "start": 447,
                "end": 482
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 485,
                  "end": 486
                },
                "typeArguments": null,
                "start": 485,
                "end": 486
              },
              "start": 483,
              "end": 486
            },
            "start": 446,
            "end": 487
          }
        ],
        "start": 400,
        "end": 489
      },
      "declare": false,
      "start": 372,
      "end": 489
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IRouterMatcher",
        "optional": false,
        "typeAnnotation": null,
        "start": 501,
        "end": 515
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 516,
              "end": 517
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 516,
            "end": 517
          }
        ],
        "start": 515,
        "end": 518
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PathParams",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 532,
                      "end": 542
                    },
                    "typeArguments": null,
                    "start": 532,
                    "end": 542
                  },
                  "start": 530,
                  "end": 542
                },
                "start": 526,
                "end": 542
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "handlers",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 555
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RequestHandler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 557,
                        "end": 571
                      },
                      "typeArguments": null,
                      "start": 557,
                      "end": 571
                    },
                    "start": 557,
                    "end": 573
                  },
                  "start": 555,
                  "end": 573
                },
                "value": null,
                "start": 544,
                "end": 573
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 576,
                  "end": 577
                },
                "typeArguments": null,
                "start": 576,
                "end": 577
              },
              "start": 574,
              "end": 577
            },
            "start": 525,
            "end": 578
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PathParams",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 590,
                      "end": 600
                    },
                    "typeArguments": null,
                    "start": 590,
                    "end": 600
                  },
                  "start": 588,
                  "end": 600
                },
                "start": 584,
                "end": 600
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "handlers",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 605,
                  "end": 613
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RequestHandlerParams",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 615,
                        "end": 635
                      },
                      "typeArguments": null,
                      "start": 615,
                      "end": 635
                    },
                    "start": 615,
                    "end": 637
                  },
                  "start": 613,
                  "end": 637
                },
                "value": null,
                "start": 602,
                "end": 637
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 640,
                  "end": 641
                },
                "typeArguments": null,
                "start": 640,
                "end": 641
              },
              "start": 638,
              "end": 641
            },
            "start": 583,
            "end": 642
          }
        ],
        "start": 519,
        "end": 644
      },
      "declare": false,
      "start": 491,
      "end": 644
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PathParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 651,
        "end": 661
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 664,
            "end": 670
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "RegExp",
              "optional": false,
              "typeAnnotation": null,
              "start": 673,
              "end": 679
            },
            "typeArguments": null,
            "start": 673,
            "end": 679
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 683,
                  "end": 689
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 692,
                    "end": 698
                  },
                  "typeArguments": null,
                  "start": 692,
                  "end": 698
                }
              ],
              "start": 683,
              "end": 698
            },
            "start": 682,
            "end": 701
          }
        ],
        "start": 664,
        "end": 701
      },
      "declare": false,
      "start": 646,
      "end": 702
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RequestHandlerParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 708,
        "end": 728
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "RequestHandler",
              "optional": false,
              "typeAnnotation": null,
              "start": 731,
              "end": 745
            },
            "typeArguments": null,
            "start": 731,
            "end": 745
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ErrorRequestHandler",
              "optional": false,
              "typeAnnotation": null,
              "start": 748,
              "end": 767
            },
            "typeArguments": null,
            "start": 748,
            "end": 767
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RequestHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 771,
                    "end": 785
                  },
                  "typeArguments": null,
                  "start": 771,
                  "end": 785
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ErrorRequestHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 788,
                    "end": 807
                  },
                  "typeArguments": null,
                  "start": 788,
                  "end": 807
                }
              ],
              "start": 771,
              "end": 807
            },
            "start": 770,
            "end": 810
          }
        ],
        "start": 731,
        "end": 810
      },
      "declare": false,
      "start": 703,
      "end": 811
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RequestHandler",
        "optional": false,
        "typeAnnotation": null,
        "start": 823,
        "end": 837
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "req",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Request",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 850,
                      "end": 857
                    },
                    "typeArguments": null,
                    "start": 850,
                    "end": 857
                  },
                  "start": 848,
                  "end": 857
                },
                "start": 845,
                "end": 857
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "res",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Response",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 864,
                      "end": 872
                    },
                    "typeArguments": null,
                    "start": 864,
                    "end": 872
                  },
                  "start": 862,
                  "end": 872
                },
                "start": 859,
                "end": 872
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NextFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 880,
                      "end": 892
                    },
                    "typeArguments": null,
                    "start": 880,
                    "end": 892
                  },
                  "start": 878,
                  "end": 892
                },
                "start": 874,
                "end": 892
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 895,
                "end": 898
              },
              "start": 893,
              "end": 898
            },
            "start": 844,
            "end": 899
          }
        ],
        "start": 838,
        "end": 901
      },
      "declare": false,
      "start": 813,
      "end": 901
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ErrorRequestHandler",
        "optional": false,
        "typeAnnotation": null,
        "start": 913,
        "end": 932
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 945,
                    "end": 948
                  },
                  "start": 943,
                  "end": 948
                },
                "start": 940,
                "end": 948
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "req",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Request",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 955,
                      "end": 962
                    },
                    "typeArguments": null,
                    "start": 955,
                    "end": 962
                  },
                  "start": 953,
                  "end": 962
                },
                "start": 950,
                "end": 962
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "res",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Response",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 969,
                      "end": 977
                    },
                    "typeArguments": null,
                    "start": 969,
                    "end": 977
                  },
                  "start": 967,
                  "end": 977
                },
                "start": 964,
                "end": 977
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NextFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 985,
                      "end": 997
                    },
                    "typeArguments": null,
                    "start": 985,
                    "end": 997
                  },
                  "start": 983,
                  "end": 997
                },
                "start": 979,
                "end": 997
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1000,
                "end": 1003
              },
              "start": 998,
              "end": 1003
            },
            "start": 939,
            "end": 1004
          }
        ],
        "start": 933,
        "end": 1006
      },
      "declare": false,
      "start": 903,
      "end": 1006
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Request",
        "optional": false,
        "typeAnnotation": null,
        "start": 1018,
        "end": 1025
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1038
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1040,
                "end": 1046
              },
              "start": 1038,
              "end": 1046
            },
            "accessibility": null,
            "static": false,
            "start": 1032,
            "end": 1047
          }
        ],
        "start": 1026,
        "end": 1049
      },
      "declare": false,
      "start": 1008,
      "end": 1049
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Response",
        "optional": false,
        "typeAnnotation": null,
        "start": 1061,
        "end": 1069
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "statusCode",
              "optional": false,
              "typeAnnotation": null,
              "start": 1076,
              "end": 1086
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1088,
                "end": 1094
              },
              "start": 1086,
              "end": 1094
            },
            "accessibility": null,
            "static": false,
            "start": 1076,
            "end": 1095
          }
        ],
        "start": 1070,
        "end": 1097
      },
      "declare": false,
      "start": 1051,
      "end": 1097
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NextFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 1109,
        "end": 1121
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1135,
                    "end": 1138
                  },
                  "start": 1133,
                  "end": 1138
                },
                "start": 1129,
                "end": 1138
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1141,
                "end": 1145
              },
              "start": 1139,
              "end": 1145
            },
            "start": 1128,
            "end": 1146
          }
        ],
        "start": 1122,
        "end": 1148
      },
      "declare": false,
      "start": 1099,
      "end": 1148
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 27,
  "end": 1148
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 27,
    "end": 30,
    "range": [
      27,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 31,
    "end": 34,
    "range": [
      31,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "Overload",
    "start": 36,
    "end": 44,
    "range": [
      36,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 46,
    "end": 49,
    "range": [
      46,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 51,
    "end": 54,
    "range": [
      51,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 56,
    "end": 59,
    "range": [
      56,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 61,
    "end": 63,
    "range": [
      61,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 70,
    "end": 79,
    "range": [
      70,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "Overload",
    "start": 80,
    "end": 88,
    "range": [
      80,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "handler1",
    "start": 96,
    "end": 104,
    "range": [
      96,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "req1",
    "start": 107,
    "end": 111,
    "range": [
      107,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 113,
    "end": 119,
    "range": [
      113,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 121,
    "end": 123,
    "range": [
      121,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 124,
    "end": 128,
    "range": [
      124,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 131,
    "end": 135,
    "range": [
      131,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "handler2",
    "start": 142,
    "end": 150,
    "range": [
      142,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "req2",
    "start": 153,
    "end": 157,
    "range": [
      153,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 159,
    "end": 165,
    "range": [
      159,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "res2",
    "start": 167,
    "end": 171,
    "range": [
      167,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 173,
    "end": 179,
    "range": [
      173,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 181,
    "end": 183,
    "range": [
      181,
      183
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 184,
    "end": 188,
    "range": [
      184,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 191,
    "end": 195,
    "range": [
      191,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 227,
    "end": 230,
    "range": [
      227,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 231,
    "end": 234,
    "range": [
      231,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "MyApp",
    "start": 236,
    "end": 241,
    "range": [
      236,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 243,
    "end": 246,
    "range": [
      243,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 247,
    "end": 250,
    "range": [
      247,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 252,
    "end": 255,
    "range": [
      252,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 257,
    "end": 260,
    "range": [
      257,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 262,
    "end": 265,
    "range": [
      262,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 267,
    "end": 270,
    "range": [
      267,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 272,
    "end": 276,
    "range": [
      272,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 278,
    "end": 280,
    "range": [
      278,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 283,
    "end": 289,
    "range": [
      283,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 297,
    "end": 306,
    "range": [
      297,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "MyApp",
    "start": 307,
    "end": 312,
    "range": [
      307,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 319,
    "end": 322,
    "range": [
      319,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "IRouterHandler",
    "start": 324,
    "end": 338,
    "range": [
      324,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 339,
    "end": 343,
    "range": [
      339,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Identifier",
    "value": "IRouterMatcher",
    "start": 347,
    "end": 361,
    "range": [
      347,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 362,
    "end": 366,
    "range": [
      362,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 372,
    "end": 381,
    "range": [
      372,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "IRouterHandler",
    "start": 382,
    "end": 396,
    "range": [
      382,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 407,
    "end": 410,
    "range": [
      407,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "handlers",
    "start": 410,
    "end": 418,
    "range": [
      410,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "RequestHandler",
    "start": 420,
    "end": 434,
    "range": [
      420,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 447,
    "end": 450,
    "range": [
      447,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "handlers",
    "start": 450,
    "end": 458,
    "range": [
      450,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "RequestHandlerParams",
    "start": 460,
    "end": 480,
    "range": [
      460,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 491,
    "end": 500,
    "range": [
      491,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "IRouterMatcher",
    "start": 501,
    "end": 515,
    "range": [
      501,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 526,
    "end": 530,
    "range": [
      526,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "PathParams",
    "start": 532,
    "end": 542,
    "range": [
      532,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 544,
    "end": 547,
    "range": [
      544,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "handlers",
    "start": 547,
    "end": 555,
    "range": [
      547,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "RequestHandler",
    "start": 557,
    "end": 571,
    "range": [
      557,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 584,
    "end": 588,
    "range": [
      584,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Identifier",
    "value": "PathParams",
    "start": 590,
    "end": 600,
    "range": [
      590,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 602,
    "end": 605,
    "range": [
      602,
      605
    ]
  },
  {
    "type": "Identifier",
    "value": "handlers",
    "start": 605,
    "end": 613,
    "range": [
      605,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "RequestHandlerParams",
    "start": 615,
    "end": 635,
    "range": [
      615,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 646,
    "end": 650,
    "range": [
      646,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "PathParams",
    "start": 651,
    "end": 661,
    "range": [
      651,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 664,
    "end": 670,
    "range": [
      664,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 673,
    "end": 679,
    "range": [
      673,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 683,
    "end": 689,
    "range": [
      683,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 692,
    "end": 698,
    "range": [
      692,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 703,
    "end": 707,
    "range": [
      703,
      707
    ]
  },
  {
    "type": "Identifier",
    "value": "RequestHandlerParams",
    "start": 708,
    "end": 728,
    "range": [
      708,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "RequestHandler",
    "start": 731,
    "end": 745,
    "range": [
      731,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Identifier",
    "value": "ErrorRequestHandler",
    "start": 748,
    "end": 767,
    "range": [
      748,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "RequestHandler",
    "start": 771,
    "end": 785,
    "range": [
      771,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "ErrorRequestHandler",
    "start": 788,
    "end": 807,
    "range": [
      788,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 813,
    "end": 822,
    "range": [
      813,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "RequestHandler",
    "start": 823,
    "end": 837,
    "range": [
      823,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 845,
    "end": 848,
    "range": [
      845,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 850,
    "end": 857,
    "range": [
      850,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 859,
    "end": 862,
    "range": [
      859,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Identifier",
    "value": "Response",
    "start": 864,
    "end": 872,
    "range": [
      864,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 874,
    "end": 878,
    "range": [
      874,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "NextFunction",
    "start": 880,
    "end": 892,
    "range": [
      880,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 895,
    "end": 898,
    "range": [
      895,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 903,
    "end": 912,
    "range": [
      903,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "ErrorRequestHandler",
    "start": 913,
    "end": 932,
    "range": [
      913,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 940,
    "end": 943,
    "range": [
      940,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 945,
    "end": 948,
    "range": [
      945,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 950,
    "end": 953,
    "range": [
      950,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 955,
    "end": 962,
    "range": [
      955,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 964,
    "end": 967,
    "range": [
      964,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Identifier",
    "value": "Response",
    "start": 969,
    "end": 977,
    "range": [
      969,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 979,
    "end": 983,
    "range": [
      979,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Identifier",
    "value": "NextFunction",
    "start": 985,
    "end": 997,
    "range": [
      985,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1000,
    "end": 1003,
    "range": [
      1000,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1008,
    "end": 1017,
    "range": [
      1008,
      1017
    ]
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 1018,
    "end": 1025,
    "range": [
      1018,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1032,
    "end": 1038,
    "range": [
      1032,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1040,
    "end": 1046,
    "range": [
      1040,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1051,
    "end": 1060,
    "range": [
      1051,
      1060
    ]
  },
  {
    "type": "Identifier",
    "value": "Response",
    "start": 1061,
    "end": 1069,
    "range": [
      1061,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Identifier",
    "value": "statusCode",
    "start": 1076,
    "end": 1086,
    "range": [
      1076,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1088,
    "end": 1094,
    "range": [
      1088,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1099,
    "end": 1108,
    "range": [
      1099,
      1108
    ]
  },
  {
    "type": "Identifier",
    "value": "NextFunction",
    "start": 1109,
    "end": 1121,
    "range": [
      1109,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 1129,
    "end": 1132,
    "range": [
      1129,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1135,
    "end": 1138,
    "range": [
      1135,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1141,
    "end": 1145,
    "range": [
      1141,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  }
]
```

__ESTREE_TEST__:PASS:
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

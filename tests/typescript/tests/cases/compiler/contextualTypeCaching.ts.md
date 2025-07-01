__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Event",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 44
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
                "start": 45,
                "end": 46
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 45,
              "end": 46
            }
          ],
          "start": 44,
          "end": 47
        },
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
                "name": "callback",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 62
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "response",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 75,
                            "end": 76
                          },
                          "typeArguments": null,
                          "start": 75,
                          "end": 76
                        },
                        "start": 73,
                        "end": 76
                      },
                      "start": 65,
                      "end": 76
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 81,
                      "end": 85
                    },
                    "start": 78,
                    "end": 85
                  },
                  "start": 64,
                  "end": 85
                },
                "start": 62,
                "end": 85
              },
              "accessibility": null,
              "static": false,
              "start": 54,
              "end": 86
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 97
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nestedCallback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 109,
                        "end": 123
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "response",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 136,
                                    "end": 137
                                  },
                                  "typeArguments": null,
                                  "start": 136,
                                  "end": 137
                                },
                                "start": 134,
                                "end": 137
                              },
                              "start": 126,
                              "end": 137
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 142,
                              "end": 146
                            },
                            "start": 139,
                            "end": 146
                          },
                          "start": 125,
                          "end": 146
                        },
                        "start": 123,
                        "end": 146
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 109,
                      "end": 147
                    }
                  ],
                  "start": 99,
                  "end": 153
                },
                "start": 97,
                "end": 153
              },
              "accessibility": null,
              "static": false,
              "start": 91,
              "end": 153
            }
          ],
          "start": 48,
          "end": 155
        },
        "declare": false,
        "start": 29,
        "end": 155
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 22,
      "end": 155
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CustomEvents",
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 181
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 191
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Event",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 193,
                    "end": 198
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 199,
                        "end": 205
                      }
                    ],
                    "start": 198,
                    "end": 206
                  },
                  "start": 193,
                  "end": 206
                },
                "start": 191,
                "end": 206
              },
              "accessibility": null,
              "static": false,
              "start": 190,
              "end": 206
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 212
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Event",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 219
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 220,
                        "end": 226
                      }
                    ],
                    "start": 219,
                    "end": 227
                  },
                  "start": 214,
                  "end": 227
                },
                "start": 212,
                "end": 227
              },
              "accessibility": null,
              "static": false,
              "start": 211,
              "end": 227
            }
          ],
          "start": 184,
          "end": 229
        },
        "declare": false,
        "start": 164,
        "end": 230
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 157,
      "end": 230
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "emit",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 253
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 254,
              "end": 255
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CustomEvents",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 282
                },
                "typeArguments": null,
                "start": 270,
                "end": 282
              },
              "start": 264,
              "end": 282
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 254,
            "end": 282
          }
        ],
        "start": 253,
        "end": 283
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 291
              },
              "typeArguments": null,
              "start": 290,
              "end": 291
            },
            "start": 288,
            "end": 291
          },
          "start": 284,
          "end": 291
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CustomEvents",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 311
                },
                "typeArguments": null,
                "start": 299,
                "end": 311
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 313
                },
                "typeArguments": null,
                "start": 312,
                "end": 313
              },
              "start": 299,
              "end": 314
            },
            "start": 297,
            "end": 314
          },
          "start": 293,
          "end": 314
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 317,
          "end": 321
        },
        "start": 315,
        "end": 321
      },
      "body": null,
      "expression": false,
      "start": 232,
      "end": 321
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "emit",
          "optional": false,
          "typeAnnotation": null,
          "start": 323,
          "end": 327
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 328,
            "end": 331
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 347
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 351
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 356,
                    "end": 358
                  },
                  "id": null,
                  "generator": false,
                  "start": 349,
                  "end": 358
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 339,
                "end": 358
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 370
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nestedCallback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 382,
                        "end": 396
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "r",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 399,
                            "end": 400
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 405,
                          "end": 407
                        },
                        "id": null,
                        "generator": false,
                        "start": 398,
                        "end": 407
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 382,
                      "end": 407
                    }
                  ],
                  "start": 372,
                  "end": 414
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 364,
                "end": 414
              }
            ],
            "start": 333,
            "end": 417
          }
        ],
        "optional": false,
        "start": 323,
        "end": 418
      },
      "directive": null,
      "start": 323,
      "end": 419
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyCompiler",
        "optional": false,
        "typeAnnotation": null,
        "start": 490,
        "end": 500
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "compile",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 512
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 516,
                  "end": 520
                },
                "start": 514,
                "end": 520
              },
              "body": null,
              "expression": false,
              "start": 512,
              "end": 521
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 505,
            "end": 521
          }
        ],
        "start": 501,
        "end": 523
      },
      "abstract": false,
      "declare": true,
      "start": 476,
      "end": 523
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WebpackPluginInstance",
        "optional": false,
        "typeAnnotation": null,
        "start": 534,
        "end": 555
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
              "name": "apply",
              "optional": false,
              "typeAnnotation": null,
              "start": 560,
              "end": 565
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "compiler",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyCompiler",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 578,
                          "end": 588
                        },
                        "typeArguments": null,
                        "start": 578,
                        "end": 588
                      },
                      "start": 576,
                      "end": 588
                    },
                    "start": 568,
                    "end": 588
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 593,
                    "end": 597
                  },
                  "start": 590,
                  "end": 597
                },
                "start": 567,
                "end": 597
              },
              "start": 565,
              "end": 597
            },
            "accessibility": null,
            "static": false,
            "start": 560,
            "end": 598
          }
        ],
        "start": 556,
        "end": 600
      },
      "declare": false,
      "start": 524,
      "end": 600
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WebpackPluginFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 606,
        "end": 627
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyCompiler",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 637,
                  "end": 647
                },
                "typeArguments": null,
                "start": 637,
                "end": 647
              },
              "start": 635,
              "end": 647
            },
            "start": 631,
            "end": 647
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "compiler",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyCompiler",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 659,
                  "end": 669
                },
                "typeArguments": null,
                "start": 659,
                "end": 669
              },
              "start": 657,
              "end": 669
            },
            "start": 649,
            "end": 669
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 674,
            "end": 678
          },
          "start": 671,
          "end": 678
        },
        "start": 630,
        "end": 678
      },
      "declare": false,
      "start": 601,
      "end": 679
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Optimization",
        "optional": false,
        "typeAnnotation": null,
        "start": 690,
        "end": 702
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "minimizer",
              "optional": false,
              "typeAnnotation": null,
              "start": 707,
              "end": 716
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WebpackPluginInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 720,
                        "end": 741
                      },
                      "typeArguments": null,
                      "start": 720,
                      "end": 741
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WebpackPluginFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 744,
                        "end": 765
                      },
                      "typeArguments": null,
                      "start": 744,
                      "end": 765
                    }
                  ],
                  "start": 720,
                  "end": 765
                },
                "start": 719,
                "end": 768
              },
              "start": 717,
              "end": 768
            },
            "accessibility": null,
            "static": false,
            "start": 707,
            "end": 769
          }
        ],
        "start": 703,
        "end": 771
      },
      "declare": false,
      "start": 680,
      "end": 771
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 790,
                        "end": 791
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 790,
                      "end": 791
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 793,
                        "end": 794
                      },
                      "constraint": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 809,
                            "end": 810
                          },
                          "typeArguments": null,
                          "start": 809,
                          "end": 810
                        },
                        "start": 803,
                        "end": 810
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 793,
                      "end": 810
                    }
                  ],
                  "start": 789,
                  "end": 811
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 820,
                          "end": 821
                        },
                        "typeArguments": null,
                        "start": 820,
                        "end": 821
                      },
                      "start": 818,
                      "end": 821
                    },
                    "start": 815,
                    "end": 821
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 831,
                          "end": 832
                        },
                        "typeArguments": null,
                        "start": 831,
                        "end": 832
                      },
                      "start": 829,
                      "end": 832
                    },
                    "start": 825,
                    "end": 832
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "factory",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 851,
                                "end": 852
                              },
                              "typeArguments": null,
                              "start": 851,
                              "end": 852
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 853,
                                "end": 854
                              },
                              "typeArguments": null,
                              "start": 853,
                              "end": 854
                            },
                            "start": 851,
                            "end": 855
                          },
                          "start": 848,
                          "end": 855
                        },
                        "start": 845,
                        "end": 855
                      },
                      "start": 843,
                      "end": 855
                    },
                    "start": 836,
                    "end": 855
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 861,
                    "end": 865
                  },
                  "start": 858,
                  "end": 865
                },
                "start": 789,
                "end": 865
              },
              "start": 787,
              "end": 865
            },
            "start": 786,
            "end": 865
          },
          "init": null,
          "definite": false,
          "start": 786,
          "end": 865
        }
      ],
      "declare": true,
      "start": 772,
      "end": 866
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "applyOptimizationDefaults",
              "optional": false,
              "typeAnnotation": null,
              "start": 880,
              "end": 905
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optimization",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Optimization",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 923,
                        "end": 935
                      },
                      "typeArguments": null,
                      "start": 923,
                      "end": 935
                    },
                    "start": 921,
                    "end": 935
                  },
                  "start": 909,
                  "end": 935
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 944,
                        "end": 945
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "optimization",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 946,
                          "end": 958
                        },
                        {
                          "type": "Literal",
                          "value": "minimizer",
                          "raw": "\"minimizer\"",
                          "start": 960,
                          "end": 971
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "apply",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 993,
                                      "end": 998
                                    },
                                    "value": {
                                      "type": "ArrowFunctionExpression",
                                      "expression": false,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "compiler",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1001,
                                          "end": 1009
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [],
                                        "start": 1014,
                                        "end": 1016
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 1000,
                                      "end": 1016
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 993,
                                    "end": 1016
                                  }
                                ],
                                "start": 985,
                                "end": 1023
                              }
                            ],
                            "start": 979,
                            "end": 1028
                          },
                          "id": null,
                          "generator": false,
                          "start": 973,
                          "end": 1028
                        }
                      ],
                      "optional": false,
                      "start": 944,
                      "end": 1029
                    },
                    "directive": null,
                    "start": 944,
                    "end": 1030
                  }
                ],
                "start": 940,
                "end": 1032
              },
              "id": null,
              "generator": false,
              "start": 908,
              "end": 1032
            },
            "definite": false,
            "start": 880,
            "end": 1032
          }
        ],
        "declare": false,
        "start": 874,
        "end": 1033
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 867,
      "end": 1033
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 1033
}
```

__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 33
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 40
            },
            "constraint": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 51,
                    "end": 55
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 57,
                      "end": 63
                    },
                    "start": 55,
                    "end": 63
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 51,
                  "end": 63
                }
              ],
              "start": 49,
              "end": 65
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 34,
            "end": 65
          }
        ],
        "start": 33,
        "end": 66
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ev",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TEvent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 80
                },
                "typeArguments": null,
                "start": 74,
                "end": 80
              },
              "start": 72,
              "end": 80
            },
            "start": 70,
            "end": 80
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 85,
            "end": 89
          },
          "start": 82,
          "end": 89
        },
        "start": 69,
        "end": 89
      },
      "declare": false,
      "start": 22,
      "end": 90
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MachineConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 115
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 122
            },
            "constraint": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 137
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 139,
                      "end": 145
                    },
                    "start": 137,
                    "end": 145
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 133,
                  "end": 145
                }
              ],
              "start": 131,
              "end": 147
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 116,
            "end": 147
          }
        ],
        "start": 115,
        "end": 148
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
              "name": "schema",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 159
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
                      "name": "events",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 167,
                      "end": 173
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 175,
                          "end": 181
                        },
                        "typeArguments": null,
                        "start": 175,
                        "end": 181
                      },
                      "start": 173,
                      "end": 181
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 167,
                    "end": 182
                  }
                ],
                "start": 161,
                "end": 186
              },
              "start": 159,
              "end": 186
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 187
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "on",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 192
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 203
                    },
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 207,
                          "end": 213
                        },
                        "typeArguments": null,
                        "start": 207,
                        "end": 213
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "type",
                          "raw": "\"type\"",
                          "start": 214,
                          "end": 220
                        },
                        "start": 214,
                        "end": 220
                      },
                      "start": 207,
                      "end": 221
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Action",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 225,
                        "end": 231
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TEvent",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 232,
                                "end": 238
                              },
                              "typeArguments": null,
                              "start": 232,
                              "end": 238
                            },
                            "extendsType": {
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
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 249,
                                    "end": 253
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "K",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 255,
                                        "end": 256
                                      },
                                      "typeArguments": null,
                                      "start": 255,
                                      "end": 256
                                    },
                                    "start": 253,
                                    "end": 256
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 249,
                                  "end": 256
                                }
                              ],
                              "start": 247,
                              "end": 258
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TEvent",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 261,
                                "end": 267
                              },
                              "typeArguments": null,
                              "start": 261,
                              "end": 267
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "start": 270,
                              "end": 275
                            },
                            "start": 232,
                            "end": 275
                          }
                        ],
                        "start": 231,
                        "end": 276
                      },
                      "start": 225,
                      "end": 276
                    },
                    "optional": true,
                    "readonly": null,
                    "start": 195,
                    "end": 281
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Literal",
                          "value": "*",
                          "raw": "\"*\"",
                          "start": 290,
                          "end": 293
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Action",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 296,
                              "end": 302
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TEvent",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 303,
                                    "end": 309
                                  },
                                  "typeArguments": null,
                                  "start": 303,
                                  "end": 309
                                }
                              ],
                              "start": 302,
                              "end": 310
                            },
                            "start": 296,
                            "end": 310
                          },
                          "start": 294,
                          "end": 310
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 290,
                        "end": 311
                      }
                    ],
                    "start": 284,
                    "end": 315
                  }
                ],
                "start": 195,
                "end": 315
              },
              "start": 193,
              "end": 315
            },
            "accessibility": null,
            "static": false,
            "start": 190,
            "end": 316
          }
        ],
        "start": 149,
        "end": 318
      },
      "declare": false,
      "start": 92,
      "end": 318
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createMachine",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 350
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
              "name": "TEvent",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 357
            },
            "constraint": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 372
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 374,
                      "end": 380
                    },
                    "start": 372,
                    "end": 380
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 368,
                  "end": 380
                }
              ],
              "start": 366,
              "end": 382
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 351,
            "end": 382
          }
        ],
        "start": 350,
        "end": 383
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MachineConfig",
                "optional": false,
                "typeAnnotation": null,
                "start": 395,
                "end": 408
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TEvent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 409,
                      "end": 415
                    },
                    "typeArguments": null,
                    "start": 409,
                    "end": 415
                  }
                ],
                "start": 408,
                "end": 416
              },
              "start": 395,
              "end": 416
            },
            "start": 393,
            "end": 416
          },
          "start": 387,
          "end": 416
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 420,
          "end": 424
        },
        "start": 418,
        "end": 424
      },
      "body": null,
      "expression": false,
      "start": 320,
      "end": 425
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMachine",
          "optional": false,
          "typeAnnotation": null,
          "start": 427,
          "end": 440
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 445,
                  "end": 451
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
                        "name": "events",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 459,
                        "end": 465
                      },
                      "value": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 467,
                          "end": 469
                        },
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
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
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 475,
                                    "end": 479
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": "FOO",
                                        "raw": "\"FOO\"",
                                        "start": 481,
                                        "end": 486
                                      },
                                      "start": 481,
                                      "end": 486
                                    },
                                    "start": 479,
                                    "end": 486
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 475,
                                  "end": 486
                                }
                              ],
                              "start": 473,
                              "end": 488
                            },
                            {
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
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 493,
                                    "end": 497
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": "BAR",
                                        "raw": "\"BAR\"",
                                        "start": 499,
                                        "end": 504
                                      },
                                      "start": 499,
                                      "end": 504
                                    },
                                    "start": 497,
                                    "end": 504
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 493,
                                  "end": 504
                                }
                              ],
                              "start": 491,
                              "end": 506
                            }
                          ],
                          "start": 473,
                          "end": 506
                        },
                        "start": 467,
                        "end": 506
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 459,
                      "end": 506
                    }
                  ],
                  "start": 453,
                  "end": 511
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 445,
                "end": 511
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "on",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 517
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
                        "name": "FOO",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 525,
                        "end": 528
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
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 531,
                            "end": 533
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 546,
                                  "end": 548
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 549,
                                  "end": 553
                                },
                                "optional": false,
                                "computed": false,
                                "start": 546,
                                "end": 553
                              },
                              "directive": null,
                              "start": 546,
                              "end": 554
                            }
                          ],
                          "start": 538,
                          "end": 579
                        },
                        "id": null,
                        "generator": false,
                        "start": 530,
                        "end": 579
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 525,
                      "end": 579
                    }
                  ],
                  "start": 519,
                  "end": 584
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 515,
                "end": 584
              }
            ],
            "start": 441,
            "end": 587
          }
        ],
        "optional": false,
        "start": 427,
        "end": 588
      },
      "directive": null,
      "start": 427,
      "end": 589
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMachine",
          "optional": false,
          "typeAnnotation": null,
          "start": 591,
          "end": 604
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 609,
                  "end": 615
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
                        "name": "events",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 623,
                        "end": 629
                      },
                      "value": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 631,
                          "end": 633
                        },
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
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
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 639,
                                    "end": 643
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": "FOO",
                                        "raw": "\"FOO\"",
                                        "start": 645,
                                        "end": 650
                                      },
                                      "start": 645,
                                      "end": 650
                                    },
                                    "start": 643,
                                    "end": 650
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 639,
                                  "end": 650
                                }
                              ],
                              "start": 637,
                              "end": 652
                            },
                            {
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
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 657,
                                    "end": 661
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": "BAR",
                                        "raw": "\"BAR\"",
                                        "start": 663,
                                        "end": 668
                                      },
                                      "start": 663,
                                      "end": 668
                                    },
                                    "start": 661,
                                    "end": 668
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 657,
                                  "end": 668
                                }
                              ],
                              "start": 655,
                              "end": 670
                            }
                          ],
                          "start": 637,
                          "end": 670
                        },
                        "start": 631,
                        "end": 670
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 623,
                      "end": 670
                    }
                  ],
                  "start": 617,
                  "end": 675
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 609,
                "end": 675
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "on",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 679,
                  "end": 681
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "*",
                        "raw": "\"*\"",
                        "start": 689,
                        "end": 692
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
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 695,
                            "end": 697
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 710,
                                  "end": 712
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 713,
                                  "end": 717
                                },
                                "optional": false,
                                "computed": false,
                                "start": 710,
                                "end": 717
                              },
                              "directive": null,
                              "start": 710,
                              "end": 718
                            }
                          ],
                          "start": 702,
                          "end": 751
                        },
                        "id": null,
                        "generator": false,
                        "start": 694,
                        "end": 751
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 689,
                      "end": 751
                    }
                  ],
                  "start": 683,
                  "end": 756
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 679,
                "end": 756
              }
            ],
            "start": 605,
            "end": 759
          }
        ],
        "optional": false,
        "start": 591,
        "end": 760
      },
      "directive": null,
      "start": 591,
      "end": 761
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MachineConfig2",
        "optional": false,
        "typeAnnotation": null,
        "start": 773,
        "end": 787
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEvent",
              "optional": false,
              "typeAnnotation": null,
              "start": 788,
              "end": 794
            },
            "constraint": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 809
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 811,
                      "end": 817
                    },
                    "start": 809,
                    "end": 817
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 805,
                  "end": 817
                }
              ],
              "start": 803,
              "end": 819
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 788,
            "end": 819
          }
        ],
        "start": 787,
        "end": 820
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
              "name": "schema",
              "optional": false,
              "typeAnnotation": null,
              "start": 825,
              "end": 831
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
                      "name": "events",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 839,
                      "end": 845
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 847,
                          "end": 853
                        },
                        "typeArguments": null,
                        "start": 847,
                        "end": 853
                      },
                      "start": 845,
                      "end": 853
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 839,
                    "end": 854
                  }
                ],
                "start": 833,
                "end": 858
              },
              "start": 831,
              "end": 858
            },
            "accessibility": null,
            "static": false,
            "start": 825,
            "end": 859
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "on",
              "optional": false,
              "typeAnnotation": null,
              "start": 862,
              "end": 864
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 874,
                      "end": 875
                    },
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TEvent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 879,
                          "end": 885
                        },
                        "typeArguments": null,
                        "start": 879,
                        "end": 885
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "type",
                          "raw": "\"type\"",
                          "start": 886,
                          "end": 892
                        },
                        "start": 886,
                        "end": 892
                      },
                      "start": 879,
                      "end": 893
                    },
                    "nameType": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 897,
                          "end": 898
                        },
                        "typeArguments": null,
                        "start": 897,
                        "end": 898
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Uppercase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 907,
                          "end": 916
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 917,
                              "end": 923
                            }
                          ],
                          "start": 916,
                          "end": 924
                        },
                        "start": 907,
                        "end": 924
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 927,
                          "end": 928
                        },
                        "typeArguments": null,
                        "start": 927,
                        "end": 928
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 931,
                        "end": 936
                      },
                      "start": 897,
                      "end": 936
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Action",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 940,
                        "end": 946
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TEvent",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 947,
                                "end": 953
                              },
                              "typeArguments": null,
                              "start": 947,
                              "end": 953
                            },
                            "extendsType": {
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
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 964,
                                    "end": 968
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "K",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 970,
                                        "end": 971
                                      },
                                      "typeArguments": null,
                                      "start": 970,
                                      "end": 971
                                    },
                                    "start": 968,
                                    "end": 971
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 964,
                                  "end": 971
                                }
                              ],
                              "start": 962,
                              "end": 973
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TEvent",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 976,
                                "end": 982
                              },
                              "typeArguments": null,
                              "start": 976,
                              "end": 982
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "start": 985,
                              "end": 990
                            },
                            "start": 947,
                            "end": 990
                          }
                        ],
                        "start": 946,
                        "end": 991
                      },
                      "start": 940,
                      "end": 991
                    },
                    "optional": true,
                    "readonly": null,
                    "start": 867,
                    "end": 996
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Literal",
                          "value": "*",
                          "raw": "\"*\"",
                          "start": 1005,
                          "end": 1008
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Action",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1011,
                              "end": 1017
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TEvent",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1018,
                                    "end": 1024
                                  },
                                  "typeArguments": null,
                                  "start": 1018,
                                  "end": 1024
                                }
                              ],
                              "start": 1017,
                              "end": 1025
                            },
                            "start": 1011,
                            "end": 1025
                          },
                          "start": 1009,
                          "end": 1025
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1005,
                        "end": 1026
                      }
                    ],
                    "start": 999,
                    "end": 1030
                  }
                ],
                "start": 867,
                "end": 1030
              },
              "start": 865,
              "end": 1030
            },
            "accessibility": null,
            "static": false,
            "start": 862,
            "end": 1031
          }
        ],
        "start": 821,
        "end": 1033
      },
      "declare": false,
      "start": 763,
      "end": 1033
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createMachine2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1052,
        "end": 1066
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
              "name": "TEvent",
              "optional": false,
              "typeAnnotation": null,
              "start": 1067,
              "end": 1073
            },
            "constraint": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1084,
                    "end": 1088
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1090,
                      "end": 1096
                    },
                    "start": 1088,
                    "end": 1096
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1084,
                  "end": 1096
                }
              ],
              "start": 1082,
              "end": 1098
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1067,
            "end": 1098
          }
        ],
        "start": 1066,
        "end": 1099
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MachineConfig2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1111,
                "end": 1125
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TEvent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1126,
                      "end": 1132
                    },
                    "typeArguments": null,
                    "start": 1126,
                    "end": 1132
                  }
                ],
                "start": 1125,
                "end": 1133
              },
              "start": 1111,
              "end": 1133
            },
            "start": 1109,
            "end": 1133
          },
          "start": 1103,
          "end": 1133
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1137,
          "end": 1141
        },
        "start": 1135,
        "end": 1141
      },
      "body": null,
      "expression": false,
      "start": 1035,
      "end": 1142
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMachine2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1144,
          "end": 1158
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1163,
                  "end": 1169
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
                        "name": "events",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1177,
                        "end": 1183
                      },
                      "value": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 1185,
                          "end": 1187
                        },
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
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
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1193,
                                    "end": 1197
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": "FOO",
                                        "raw": "\"FOO\"",
                                        "start": 1199,
                                        "end": 1204
                                      },
                                      "start": 1199,
                                      "end": 1204
                                    },
                                    "start": 1197,
                                    "end": 1204
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 1193,
                                  "end": 1204
                                }
                              ],
                              "start": 1191,
                              "end": 1206
                            },
                            {
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
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1211,
                                    "end": 1215
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": "bar",
                                        "raw": "\"bar\"",
                                        "start": 1217,
                                        "end": 1222
                                      },
                                      "start": 1217,
                                      "end": 1222
                                    },
                                    "start": 1215,
                                    "end": 1222
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 1211,
                                  "end": 1222
                                }
                              ],
                              "start": 1209,
                              "end": 1224
                            }
                          ],
                          "start": 1191,
                          "end": 1224
                        },
                        "start": 1185,
                        "end": 1224
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1177,
                      "end": 1224
                    }
                  ],
                  "start": 1171,
                  "end": 1229
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1163,
                "end": 1229
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "on",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1233,
                  "end": 1235
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
                        "name": "FOO",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1243,
                        "end": 1246
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
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1249,
                            "end": 1251
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1264,
                                  "end": 1266
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1267,
                                  "end": 1271
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1264,
                                "end": 1271
                              },
                              "directive": null,
                              "start": 1264,
                              "end": 1272
                            }
                          ],
                          "start": 1256,
                          "end": 1297
                        },
                        "id": null,
                        "generator": false,
                        "start": 1248,
                        "end": 1297
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1243,
                      "end": 1297
                    }
                  ],
                  "start": 1237,
                  "end": 1302
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1233,
                "end": 1302
              }
            ],
            "start": 1159,
            "end": 1305
          }
        ],
        "optional": false,
        "start": 1144,
        "end": 1306
      },
      "directive": null,
      "start": 1144,
      "end": 1307
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMachine2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1309,
          "end": 1323
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1328,
                  "end": 1334
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
                        "name": "events",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1342,
                        "end": 1348
                      },
                      "value": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 1350,
                          "end": 1352
                        },
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
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
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1358,
                                    "end": 1362
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": "FOO",
                                        "raw": "\"FOO\"",
                                        "start": 1364,
                                        "end": 1369
                                      },
                                      "start": 1364,
                                      "end": 1369
                                    },
                                    "start": 1362,
                                    "end": 1369
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 1358,
                                  "end": 1369
                                }
                              ],
                              "start": 1356,
                              "end": 1371
                            },
                            {
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
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1376,
                                    "end": 1380
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": "bar",
                                        "raw": "\"bar\"",
                                        "start": 1382,
                                        "end": 1387
                                      },
                                      "start": 1382,
                                      "end": 1387
                                    },
                                    "start": 1380,
                                    "end": 1387
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 1376,
                                  "end": 1387
                                }
                              ],
                              "start": 1374,
                              "end": 1389
                            }
                          ],
                          "start": 1356,
                          "end": 1389
                        },
                        "start": 1350,
                        "end": 1389
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1342,
                      "end": 1389
                    }
                  ],
                  "start": 1336,
                  "end": 1394
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1328,
                "end": 1394
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "on",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1398,
                  "end": 1400
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "*",
                        "raw": "\"*\"",
                        "start": 1408,
                        "end": 1411
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
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1414,
                            "end": 1416
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1429,
                                  "end": 1431
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1432,
                                  "end": 1436
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1429,
                                "end": 1436
                              },
                              "directive": null,
                              "start": 1429,
                              "end": 1437
                            }
                          ],
                          "start": 1421,
                          "end": 1470
                        },
                        "id": null,
                        "generator": false,
                        "start": 1413,
                        "end": 1470
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1408,
                      "end": 1470
                    }
                  ],
                  "start": 1402,
                  "end": 1475
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1398,
                "end": 1475
              }
            ],
            "start": 1324,
            "end": 1478
          }
        ],
        "optional": false,
        "start": 1309,
        "end": 1479
      },
      "directive": null,
      "start": 1309,
      "end": 1480
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMachine2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1482,
          "end": 1496
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1501,
                  "end": 1507
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
                        "name": "events",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1515,
                        "end": 1521
                      },
                      "value": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 1523,
                          "end": 1525
                        },
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
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
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1531,
                                    "end": 1535
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": "FOO",
                                        "raw": "\"FOO\"",
                                        "start": 1537,
                                        "end": 1542
                                      },
                                      "start": 1537,
                                      "end": 1542
                                    },
                                    "start": 1535,
                                    "end": 1542
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 1531,
                                  "end": 1542
                                }
                              ],
                              "start": 1529,
                              "end": 1544
                            },
                            {
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
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1549,
                                    "end": 1553
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSLiteralType",
                                      "literal": {
                                        "type": "Literal",
                                        "value": "bar",
                                        "raw": "\"bar\"",
                                        "start": 1555,
                                        "end": 1560
                                      },
                                      "start": 1555,
                                      "end": 1560
                                    },
                                    "start": 1553,
                                    "end": 1560
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 1549,
                                  "end": 1560
                                }
                              ],
                              "start": 1547,
                              "end": 1562
                            }
                          ],
                          "start": 1529,
                          "end": 1562
                        },
                        "start": 1523,
                        "end": 1562
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1515,
                      "end": 1562
                    }
                  ],
                  "start": 1509,
                  "end": 1567
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1501,
                "end": 1567
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "on",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1571,
                  "end": 1573
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
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1581,
                        "end": 1584
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
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1587,
                            "end": 1589
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ev",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1602,
                                "end": 1604
                              },
                              "directive": null,
                              "start": 1602,
                              "end": 1604
                            }
                          ],
                          "start": 1594,
                          "end": 1617
                        },
                        "id": null,
                        "generator": false,
                        "start": 1586,
                        "end": 1617
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1581,
                      "end": 1617
                    }
                  ],
                  "start": 1575,
                  "end": 1622
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1571,
                "end": 1622
              }
            ],
            "start": 1497,
            "end": 1625
          }
        ],
        "optional": false,
        "start": 1482,
        "end": 1626
      },
      "directive": null,
      "start": 1482,
      "end": 1627
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createSlice",
        "optional": false,
        "typeAnnotation": null,
        "start": 1692,
        "end": 1703
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
              "start": 1704,
              "end": 1705
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1704,
            "end": 1705
          }
        ],
        "start": 1703,
        "end": 1706
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "reducers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1726,
                              "end": 1732
                            },
                            "start": 1724,
                            "end": 1732
                          },
                          "start": 1723,
                          "end": 1732
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1743,
                                  "end": 1749
                                },
                                "start": 1741,
                                "end": 1749
                              },
                              "start": 1736,
                              "end": 1749
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1754,
                              "end": 1758
                            },
                            "start": 1751,
                            "end": 1758
                          },
                          "start": 1735,
                          "end": 1758
                        },
                        "start": 1733,
                        "end": 1758
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 1722,
                      "end": 1758
                    }
                  ],
                  "start": 1720,
                  "end": 1760
                },
                {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1770,
                    "end": 1771
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
                        "start": 1781,
                        "end": 1782
                      },
                      "typeArguments": null,
                      "start": 1781,
                      "end": 1782
                    },
                    "start": 1775,
                    "end": 1782
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 1785,
                    "end": 1791
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 1763,
                  "end": 1796
                }
              ],
              "start": 1720,
              "end": 1796
            },
            "start": 1718,
            "end": 1796
          },
          "start": 1710,
          "end": 1796
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1800,
          "end": 1804
        },
        "start": 1798,
        "end": 1804
      },
      "body": null,
      "expression": false,
      "start": 1675,
      "end": 1805
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createSlice",
          "optional": false,
          "typeAnnotation": null,
          "start": 1807,
          "end": 1818
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1823,
                  "end": 1824
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1825,
                      "end": 1826
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1828,
                    "end": 1830
                  },
                  "expression": false,
                  "start": 1824,
                  "end": 1830
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1823,
                "end": 1830
              }
            ],
            "start": 1819,
            "end": 1833
          }
        ],
        "optional": false,
        "start": 1807,
        "end": 1834
      },
      "directive": null,
      "start": 1807,
      "end": 1835
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Validate",
        "optional": false,
        "typeAnnotation": null,
        "start": 1888,
        "end": 1896
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
              "start": 1897,
              "end": 1898
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1897,
            "end": 1898
          }
        ],
        "start": 1896,
        "end": 1899
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1902,
              "end": 1903
            },
            "typeArguments": null,
            "start": 1902,
            "end": 1903
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1909,
              "end": 1910
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
                  "start": 1920,
                  "end": 1921
                },
                "typeArguments": null,
                "start": 1920,
                "end": 1921
              },
              "start": 1914,
              "end": 1921
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 1924,
              "end": 1930
            },
            "optional": false,
            "readonly": null,
            "start": 1906,
            "end": 1932
          }
        ],
        "start": 1902,
        "end": 1932
      },
      "declare": false,
      "start": 1883,
      "end": 1932
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1950,
        "end": 1951
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1952,
              "end": 1953
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1952,
            "end": 1953
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1955,
              "end": 1956
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 1965,
                "end": 1971
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1972,
                    "end": 1978
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "state",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1988,
                              "end": 1989
                            },
                            "typeArguments": null,
                            "start": 1988,
                            "end": 1989
                          },
                          "start": 1986,
                          "end": 1989
                        },
                        "start": 1981,
                        "end": 1989
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1994,
                        "end": 1997
                      },
                      "start": 1991,
                      "end": 1997
                    },
                    "start": 1980,
                    "end": 1997
                  }
                ],
                "start": 1971,
                "end": 1998
              },
              "start": 1965,
              "end": 1998
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1955,
            "end": 1998
          }
        ],
        "start": 1951,
        "end": 1999
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 2003,
                "end": 2004
              },
              "typeArguments": null,
              "start": 2003,
              "end": 2004
            },
            "start": 2001,
            "end": 2004
          },
          "start": 2000,
          "end": 2004
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Validate",
                "optional": false,
                "typeAnnotation": null,
                "start": 2009,
                "end": 2017
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2018,
                      "end": 2019
                    },
                    "typeArguments": null,
                    "start": 2018,
                    "end": 2019
                  }
                ],
                "start": 2017,
                "end": 2020
              },
              "start": 2009,
              "end": 2020
            },
            "start": 2007,
            "end": 2020
          },
          "start": 2006,
          "end": 2020
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2023,
          "end": 2027
        },
        "start": 2021,
        "end": 2027
      },
      "body": null,
      "expression": false,
      "start": 1933,
      "end": 2028
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 2030,
          "end": 2031
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 2032,
            "end": 2033
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2039,
                  "end": 2042
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2044,
                      "end": 2045
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2049,
                      "end": 2050
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2053,
                      "end": 2054
                    },
                    "start": 2049,
                    "end": 2054
                  },
                  "id": null,
                  "generator": false,
                  "start": 2044,
                  "end": 2054
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2039,
                "end": 2054
              }
            ],
            "start": 2035,
            "end": 2057
          }
        ],
        "optional": false,
        "start": 2030,
        "end": 2058
      },
      "directive": null,
      "start": 2030,
      "end": 2058
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SliceCaseReducers",
        "optional": false,
        "typeAnnotation": null,
        "start": 2110,
        "end": 2127
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 2128,
              "end": 2133
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2128,
            "end": 2133
          }
        ],
        "start": 2127,
        "end": 2134
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 2137,
          "end": 2143
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2144,
              "end": 2150
            },
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "State",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2160,
                        "end": 2165
                      },
                      "typeArguments": null,
                      "start": 2160,
                      "end": 2165
                    },
                    "start": 2158,
                    "end": 2165
                  },
                  "start": 2153,
                  "end": 2165
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "State",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2170,
                        "end": 2175
                      },
                      "typeArguments": null,
                      "start": 2170,
                      "end": 2175
                    },
                    {
                      "type": "TSVoidKeyword",
                      "start": 2178,
                      "end": 2182
                    }
                  ],
                  "start": 2170,
                  "end": 2182
                },
                "start": 2167,
                "end": 2182
              },
              "start": 2152,
              "end": 2182
            }
          ],
          "start": 2143,
          "end": 2183
        },
        "start": 2137,
        "end": 2183
      },
      "declare": false,
      "start": 2105,
      "end": 2184
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ValidateSliceCaseReducers",
        "optional": false,
        "typeAnnotation": null,
        "start": 2191,
        "end": 2216
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 2217,
              "end": 2218
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2217,
            "end": 2218
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ACR",
              "optional": false,
              "typeAnnotation": null,
              "start": 2220,
              "end": 2223
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SliceCaseReducers",
                "optional": false,
                "typeAnnotation": null,
                "start": 2232,
                "end": 2249
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2250,
                      "end": 2251
                    },
                    "typeArguments": null,
                    "start": 2250,
                    "end": 2251
                  }
                ],
                "start": 2249,
                "end": 2252
              },
              "start": 2232,
              "end": 2252
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2220,
            "end": 2252
          }
        ],
        "start": 2216,
        "end": 2253
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ACR",
              "optional": false,
              "typeAnnotation": null,
              "start": 2256,
              "end": 2259
            },
            "typeArguments": null,
            "start": 2256,
            "end": 2259
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2267,
              "end": 2268
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ACR",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2278,
                  "end": 2281
                },
                "typeArguments": null,
                "start": 2278,
                "end": 2281
              },
              "start": 2272,
              "end": 2281
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ACR",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2284,
                    "end": 2287
                  },
                  "typeArguments": null,
                  "start": 2284,
                  "end": 2287
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2288,
                    "end": 2289
                  },
                  "typeArguments": null,
                  "start": 2288,
                  "end": 2289
                },
                "start": 2284,
                "end": 2290
              },
              "extendsType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reducer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2305,
                      "end": 2312
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2316,
                              "end": 2317
                            },
                            "typeArguments": null,
                            "start": 2316,
                            "end": 2317
                          },
                          "start": 2314,
                          "end": 2317
                        },
                        "start": 2313,
                        "end": 2317
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "action",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSInferType",
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2334,
                                "end": 2335
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 2334,
                              "end": 2335
                            },
                            "start": 2328,
                            "end": 2335
                          },
                          "start": 2326,
                          "end": 2335
                        },
                        "start": 2319,
                        "end": 2335
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2338,
                        "end": 2341
                      },
                      "start": 2336,
                      "end": 2341
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2305,
                    "end": 2342
                  }
                ],
                "start": 2299,
                "end": 2346
              },
              "trueType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prepare",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2363,
                      "end": 2370
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2374,
                          "end": 2375
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSNeverKeyword",
                              "start": 2377,
                              "end": 2382
                            },
                            "start": 2377,
                            "end": 2384
                          },
                          "start": 2375,
                          "end": 2384
                        },
                        "value": null,
                        "start": 2371,
                        "end": 2384
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Omit",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2387,
                          "end": 2391
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2392,
                                "end": 2393
                              },
                              "typeArguments": null,
                              "start": 2392,
                              "end": 2393
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "type",
                                "raw": "\"type\"",
                                "start": 2395,
                                "end": 2401
                              },
                              "start": 2395,
                              "end": 2401
                            }
                          ],
                          "start": 2391,
                          "end": 2402
                        },
                        "start": 2387,
                        "end": 2402
                      },
                      "start": 2385,
                      "end": 2402
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2363,
                    "end": 2403
                  }
                ],
                "start": 2353,
                "end": 2411
              },
              "falseType": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 2418,
                "end": 2420
              },
              "start": 2284,
              "end": 2420
            },
            "optional": false,
            "readonly": null,
            "start": 2262,
            "end": 2423
          }
        ],
        "start": 2256,
        "end": 2423
      },
      "declare": false,
      "start": 2186,
      "end": 2424
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createSlice",
        "optional": false,
        "typeAnnotation": null,
        "start": 2443,
        "end": 2454
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
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 2458,
              "end": 2463
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2458,
            "end": 2463
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "CaseReducers",
              "optional": false,
              "typeAnnotation": null,
              "start": 2467,
              "end": 2479
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SliceCaseReducers",
                "optional": false,
                "typeAnnotation": null,
                "start": 2488,
                "end": 2505
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "State",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2506,
                      "end": 2511
                    },
                    "typeArguments": null,
                    "start": 2506,
                    "end": 2511
                  }
                ],
                "start": 2505,
                "end": 2512
              },
              "start": 2488,
              "end": 2512
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2467,
            "end": 2512
          }
        ],
        "start": 2454,
        "end": 2514
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
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
                    "name": "initialState",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2528,
                    "end": 2540
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2542,
                            "end": 2547
                          },
                          "typeArguments": null,
                          "start": 2542,
                          "end": 2547
                        },
                        {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "State",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2557,
                                "end": 2562
                              },
                              "typeArguments": null,
                              "start": 2557,
                              "end": 2562
                            },
                            "start": 2554,
                            "end": 2562
                          },
                          "start": 2551,
                          "end": 2562
                        }
                      ],
                      "start": 2542,
                      "end": 2563
                    },
                    "start": 2540,
                    "end": 2563
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2528,
                  "end": 2564
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducers",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2567,
                    "end": 2575
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ValidateSliceCaseReducers",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2577,
                        "end": 2602
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "State",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2603,
                              "end": 2608
                            },
                            "typeArguments": null,
                            "start": 2603,
                            "end": 2608
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CaseReducers",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2610,
                              "end": 2622
                            },
                            "typeArguments": null,
                            "start": 2610,
                            "end": 2622
                          }
                        ],
                        "start": 2602,
                        "end": 2623
                      },
                      "start": 2577,
                      "end": 2623
                    },
                    "start": 2575,
                    "end": 2623
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2567,
                  "end": 2624
                }
              ],
              "start": 2524,
              "end": 2626
            },
            "start": 2522,
            "end": 2626
          },
          "start": 2515,
          "end": 2626
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2629,
          "end": 2633
        },
        "start": 2627,
        "end": 2633
      },
      "body": null,
      "expression": false,
      "start": 2426,
      "end": 2634
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
              "name": "clientSlice",
              "optional": false,
              "typeAnnotation": null,
              "start": 2649,
              "end": 2660
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "createSlice",
                "optional": false,
                "typeAnnotation": null,
                "start": 2663,
                "end": 2674
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "initialState",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2679,
                        "end": 2691
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
                              "name": "username",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2699,
                              "end": 2707
                            },
                            "value": {
                              "type": "Literal",
                              "value": "",
                              "raw": "\"\"",
                              "start": 2709,
                              "end": 2711
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2699,
                            "end": 2711
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "isLoggedIn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2717,
                              "end": 2727
                            },
                            "value": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 2729,
                              "end": 2734
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2717,
                            "end": 2734
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "userId",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2740,
                              "end": 2746
                            },
                            "value": {
                              "type": "Literal",
                              "value": "",
                              "raw": "\"\"",
                              "start": 2748,
                              "end": 2750
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2740,
                            "end": 2750
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "avatar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2756,
                              "end": 2762
                            },
                            "value": {
                              "type": "Literal",
                              "value": "",
                              "raw": "\"\"",
                              "start": 2764,
                              "end": 2766
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2756,
                            "end": 2766
                          }
                        ],
                        "start": 2693,
                        "end": 2771
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2679,
                      "end": 2771
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "reducers",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2775,
                        "end": 2783
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
                              "name": "onClientUserChanged",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2791,
                              "end": 2810
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "state",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2811,
                                  "end": 2816
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 2818,
                                "end": 2820
                              },
                              "expression": false,
                              "start": 2810,
                              "end": 2820
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2791,
                            "end": 2820
                          }
                        ],
                        "start": 2785,
                        "end": 2825
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2775,
                      "end": 2825
                    }
                  ],
                  "start": 2675,
                  "end": 2828
                }
              ],
              "optional": false,
              "start": 2663,
              "end": 2829
            },
            "definite": false,
            "start": 2649,
            "end": 2829
          }
        ],
        "declare": false,
        "start": 2643,
        "end": 2830
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2636,
      "end": 2830
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 2831
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26,
    "range": [
      22,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 27,
    "end": 33,
    "range": [
      27,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 34,
    "end": 40,
    "range": [
      34,
      40
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 41,
    "end": 48,
    "range": [
      41,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 51,
    "end": 55,
    "range": [
      51,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 57,
    "end": 63,
    "range": [
      57,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 70,
    "end": 72,
    "range": [
      70,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 74,
    "end": 80,
    "range": [
      74,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 82,
    "end": 84,
    "range": [
      82,
      84
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 85,
    "end": 89,
    "range": [
      85,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 92,
    "end": 101,
    "range": [
      92,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "MachineConfig",
    "start": 102,
    "end": 115,
    "range": [
      102,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 116,
    "end": 122,
    "range": [
      116,
      122
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 123,
    "end": 130,
    "range": [
      123,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 133,
    "end": 137,
    "range": [
      133,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 139,
    "end": 145,
    "range": [
      139,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 153,
    "end": 159,
    "range": [
      153,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 167,
    "end": 173,
    "range": [
      167,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 175,
    "end": 181,
    "range": [
      175,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "on",
    "start": 190,
    "end": 192,
    "range": [
      190,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 204,
    "end": 206,
    "range": [
      204,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 207,
    "end": 213,
    "range": [
      207,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 214,
    "end": 220,
    "range": [
      214,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 225,
    "end": 231,
    "range": [
      225,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 232,
    "end": 238,
    "range": [
      232,
      238
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 239,
    "end": 246,
    "range": [
      239,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 249,
    "end": 253,
    "range": [
      249,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 261,
    "end": 267,
    "range": [
      261,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 270,
    "end": 275,
    "range": [
      270,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "String",
    "value": "\"*\"",
    "start": 290,
    "end": 293,
    "range": [
      290,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 296,
    "end": 302,
    "range": [
      296,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 303,
    "end": 309,
    "range": [
      303,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 320,
    "end": 327,
    "range": [
      320,
      327
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 328,
    "end": 336,
    "range": [
      328,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "createMachine",
    "start": 337,
    "end": 350,
    "range": [
      337,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 351,
    "end": 357,
    "range": [
      351,
      357
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 358,
    "end": 365,
    "range": [
      358,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 368,
    "end": 372,
    "range": [
      368,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 374,
    "end": 380,
    "range": [
      374,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 387,
    "end": 393,
    "range": [
      387,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "MachineConfig",
    "start": 395,
    "end": 408,
    "range": [
      395,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 409,
    "end": 415,
    "range": [
      409,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418,
    "range": [
      417,
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
    "type": "Keyword",
    "value": "void",
    "start": 420,
    "end": 424,
    "range": [
      420,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "createMachine",
    "start": 427,
    "end": 440,
    "range": [
      427,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 445,
    "end": 451,
    "range": [
      445,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 459,
    "end": 465,
    "range": [
      459,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 470,
    "end": 472,
    "range": [
      470,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 475,
    "end": 479,
    "range": [
      475,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "String",
    "value": "\"FOO\"",
    "start": 481,
    "end": 486,
    "range": [
      481,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 493,
    "end": 497,
    "range": [
      493,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "String",
    "value": "\"BAR\"",
    "start": 499,
    "end": 504,
    "range": [
      499,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "on",
    "start": 515,
    "end": 517,
    "range": [
      515,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "FOO",
    "start": 525,
    "end": 528,
    "range": [
      525,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 531,
    "end": 533,
    "range": [
      531,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 535,
    "end": 537,
    "range": [
      535,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 546,
    "end": 548,
    "range": [
      546,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 549,
    "end": 553,
    "range": [
      549,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Identifier",
    "value": "createMachine",
    "start": 591,
    "end": 604,
    "range": [
      591,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 609,
    "end": 615,
    "range": [
      609,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 623,
    "end": 629,
    "range": [
      623,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 634,
    "end": 636,
    "range": [
      634,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 639,
    "end": 643,
    "range": [
      639,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "String",
    "value": "\"FOO\"",
    "start": 645,
    "end": 650,
    "range": [
      645,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 657,
    "end": 661,
    "range": [
      657,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "String",
    "value": "\"BAR\"",
    "start": 663,
    "end": 668,
    "range": [
      663,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "on",
    "start": 679,
    "end": 681,
    "range": [
      679,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "String",
    "value": "\"*\"",
    "start": 689,
    "end": 692,
    "range": [
      689,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 695,
    "end": 697,
    "range": [
      695,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 699,
    "end": 701,
    "range": [
      699,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 710,
    "end": 712,
    "range": [
      710,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 713,
    "end": 717,
    "range": [
      713,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 763,
    "end": 772,
    "range": [
      763,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "MachineConfig2",
    "start": 773,
    "end": 787,
    "range": [
      773,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 788,
    "end": 794,
    "range": [
      788,
      794
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 795,
    "end": 802,
    "range": [
      795,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 805,
    "end": 809,
    "range": [
      805,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 811,
    "end": 817,
    "range": [
      811,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 825,
    "end": 831,
    "range": [
      825,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 839,
    "end": 845,
    "range": [
      839,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 847,
    "end": 853,
    "range": [
      847,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "on",
    "start": 862,
    "end": 864,
    "range": [
      862,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 876,
    "end": 878,
    "range": [
      876,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 879,
    "end": 885,
    "range": [
      879,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 886,
    "end": 892,
    "range": [
      886,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 894,
    "end": 896,
    "range": [
      894,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 899,
    "end": 906,
    "range": [
      899,
      906
    ]
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 907,
    "end": 916,
    "range": [
      907,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 917,
    "end": 923,
    "range": [
      917,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 931,
    "end": 936,
    "range": [
      931,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 940,
    "end": 946,
    "range": [
      940,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 947,
    "end": 953,
    "range": [
      947,
      953
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 954,
    "end": 961,
    "range": [
      954,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 964,
    "end": 968,
    "range": [
      964,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 976,
    "end": 982,
    "range": [
      976,
      982
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
    "value": "never",
    "start": 985,
    "end": 990,
    "range": [
      985,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "String",
    "value": "\"*\"",
    "start": 1005,
    "end": 1008,
    "range": [
      1005,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 1011,
    "end": 1017,
    "range": [
      1011,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 1018,
    "end": 1024,
    "range": [
      1018,
      1024
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1035,
    "end": 1042,
    "range": [
      1035,
      1042
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1043,
    "end": 1051,
    "range": [
      1043,
      1051
    ]
  },
  {
    "type": "Identifier",
    "value": "createMachine2",
    "start": 1052,
    "end": 1066,
    "range": [
      1052,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 1067,
    "end": 1073,
    "range": [
      1067,
      1073
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1074,
    "end": 1081,
    "range": [
      1074,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1084,
    "end": 1088,
    "range": [
      1084,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1090,
    "end": 1096,
    "range": [
      1090,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 1103,
    "end": 1109,
    "range": [
      1103,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Identifier",
    "value": "MachineConfig2",
    "start": 1111,
    "end": 1125,
    "range": [
      1111,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "TEvent",
    "start": 1126,
    "end": 1132,
    "range": [
      1126,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1137,
    "end": 1141,
    "range": [
      1137,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Identifier",
    "value": "createMachine2",
    "start": 1144,
    "end": 1158,
    "range": [
      1144,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 1163,
    "end": 1169,
    "range": [
      1163,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 1177,
    "end": 1183,
    "range": [
      1177,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1188,
    "end": 1190,
    "range": [
      1188,
      1190
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1193,
    "end": 1197,
    "range": [
      1193,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "String",
    "value": "\"FOO\"",
    "start": 1199,
    "end": 1204,
    "range": [
      1199,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1211,
    "end": 1215,
    "range": [
      1211,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 1217,
    "end": 1222,
    "range": [
      1217,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Identifier",
    "value": "on",
    "start": 1233,
    "end": 1235,
    "range": [
      1233,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Identifier",
    "value": "FOO",
    "start": 1243,
    "end": 1246,
    "range": [
      1243,
      1246
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 1249,
    "end": 1251,
    "range": [
      1249,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1253,
    "end": 1255,
    "range": [
      1253,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 1264,
    "end": 1266,
    "range": [
      1264,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1267,
    "end": 1271,
    "range": [
      1267,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Identifier",
    "value": "createMachine2",
    "start": 1309,
    "end": 1323,
    "range": [
      1309,
      1323
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 1328,
    "end": 1334,
    "range": [
      1328,
      1334
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 1342,
    "end": 1348,
    "range": [
      1342,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1353,
    "end": 1355,
    "range": [
      1353,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1358,
    "end": 1362,
    "range": [
      1358,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "String",
    "value": "\"FOO\"",
    "start": 1364,
    "end": 1369,
    "range": [
      1364,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1376,
    "end": 1380,
    "range": [
      1376,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 1382,
    "end": 1387,
    "range": [
      1382,
      1387
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Identifier",
    "value": "on",
    "start": 1398,
    "end": 1400,
    "range": [
      1398,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "String",
    "value": "\"*\"",
    "start": 1408,
    "end": 1411,
    "range": [
      1408,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 1414,
    "end": 1416,
    "range": [
      1414,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1418,
    "end": 1420,
    "range": [
      1418,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 1429,
    "end": 1431,
    "range": [
      1429,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1432,
    "end": 1436,
    "range": [
      1432,
      1436
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1477,
    "end": 1478,
    "range": [
      1477,
      1478
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Identifier",
    "value": "createMachine2",
    "start": 1482,
    "end": 1496,
    "range": [
      1482,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 1501,
    "end": 1507,
    "range": [
      1501,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Identifier",
    "value": "events",
    "start": 1515,
    "end": 1521,
    "range": [
      1515,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1521,
    "end": 1522,
    "range": [
      1521,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1523,
    "end": 1524,
    "range": [
      1523,
      1524
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1524,
    "end": 1525,
    "range": [
      1524,
      1525
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1526,
    "end": 1528,
    "range": [
      1526,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1531,
    "end": 1535,
    "range": [
      1531,
      1535
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1535,
    "end": 1536,
    "range": [
      1535,
      1536
    ]
  },
  {
    "type": "String",
    "value": "\"FOO\"",
    "start": 1537,
    "end": 1542,
    "range": [
      1537,
      1542
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1549,
    "end": 1553,
    "range": [
      1549,
      1553
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 1555,
    "end": 1560,
    "range": [
      1555,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1566,
    "end": 1567,
    "range": [
      1566,
      1567
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1567,
    "end": 1568,
    "range": [
      1567,
      1568
    ]
  },
  {
    "type": "Identifier",
    "value": "on",
    "start": 1571,
    "end": 1573,
    "range": [
      1571,
      1573
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1573,
    "end": 1574,
    "range": [
      1573,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1581,
    "end": 1584,
    "range": [
      1581,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 1587,
    "end": 1589,
    "range": [
      1587,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1591,
    "end": 1593,
    "range": [
      1591,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 1602,
    "end": 1604,
    "range": [
      1602,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1616,
    "end": 1617,
    "range": [
      1616,
      1617
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1675,
    "end": 1682,
    "range": [
      1675,
      1682
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1683,
    "end": 1691,
    "range": [
      1683,
      1691
    ]
  },
  {
    "type": "Identifier",
    "value": "createSlice",
    "start": 1692,
    "end": 1703,
    "range": [
      1692,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Identifier",
    "value": "reducers",
    "start": 1710,
    "end": 1718,
    "range": [
      1710,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1720,
    "end": 1721,
    "range": [
      1720,
      1721
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1726,
    "end": 1732,
    "range": [
      1726,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1732,
    "end": 1733,
    "range": [
      1732,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1736,
    "end": 1741,
    "range": [
      1736,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1743,
    "end": 1749,
    "range": [
      1743,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1751,
    "end": 1753,
    "range": [
      1751,
      1753
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1754,
    "end": 1758,
    "range": [
      1754,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1759,
    "end": 1760,
    "range": [
      1759,
      1760
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1772,
    "end": 1774,
    "range": [
      1772,
      1774
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1775,
    "end": 1780,
    "range": [
      1775,
      1780
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1785,
    "end": 1791,
    "range": [
      1785,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1800,
    "end": 1804,
    "range": [
      1800,
      1804
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Identifier",
    "value": "createSlice",
    "start": 1807,
    "end": 1818,
    "range": [
      1807,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1819,
    "end": 1820,
    "range": [
      1819,
      1820
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1823,
    "end": 1824,
    "range": [
      1823,
      1824
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1826,
    "end": 1827,
    "range": [
      1826,
      1827
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1828,
    "end": 1829,
    "range": [
      1828,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1830,
    "end": 1831,
    "range": [
      1830,
      1831
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1832,
    "end": 1833,
    "range": [
      1832,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1883,
    "end": 1887,
    "range": [
      1883,
      1887
    ]
  },
  {
    "type": "Identifier",
    "value": "Validate",
    "start": 1888,
    "end": 1896,
    "range": [
      1888,
      1896
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1896,
    "end": 1897,
    "range": [
      1896,
      1897
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1897,
    "end": 1898,
    "range": [
      1897,
      1898
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1898,
    "end": 1899,
    "range": [
      1898,
      1899
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1908,
    "end": 1909,
    "range": [
      1908,
      1909
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1911,
    "end": 1913,
    "range": [
      1911,
      1913
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1914,
    "end": 1919,
    "range": [
      1914,
      1919
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1920,
    "end": 1921,
    "range": [
      1920,
      1921
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1924,
    "end": 1930,
    "range": [
      1924,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1933,
    "end": 1940,
    "range": [
      1933,
      1940
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1941,
    "end": 1949,
    "range": [
      1941,
      1949
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1950,
    "end": 1951,
    "range": [
      1950,
      1951
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1957,
    "end": 1964,
    "range": [
      1957,
      1964
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1965,
    "end": 1971,
    "range": [
      1965,
      1971
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1972,
    "end": 1978,
    "range": [
      1972,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1980,
    "end": 1981,
    "range": [
      1980,
      1981
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 1981,
    "end": 1986,
    "range": [
      1981,
      1986
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1986,
    "end": 1987,
    "range": [
      1986,
      1987
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1988,
    "end": 1989,
    "range": [
      1988,
      1989
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1989,
    "end": 1990,
    "range": [
      1989,
      1990
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1991,
    "end": 1993,
    "range": [
      1991,
      1993
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1994,
    "end": 1997,
    "range": [
      1994,
      1997
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1997,
    "end": 1998,
    "range": [
      1997,
      1998
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1998,
    "end": 1999,
    "range": [
      1998,
      1999
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1999,
    "end": 2000,
    "range": [
      1999,
      2000
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2001,
    "end": 2002,
    "range": [
      2001,
      2002
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2003,
    "end": 2004,
    "range": [
      2003,
      2004
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2004,
    "end": 2005,
    "range": [
      2004,
      2005
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Identifier",
    "value": "Validate",
    "start": 2009,
    "end": 2017,
    "range": [
      2009,
      2017
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2017,
    "end": 2018,
    "range": [
      2017,
      2018
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2018,
    "end": 2019,
    "range": [
      2018,
      2019
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2019,
    "end": 2020,
    "range": [
      2019,
      2020
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2020,
    "end": 2021,
    "range": [
      2020,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2023,
    "end": 2027,
    "range": [
      2023,
      2027
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2027,
    "end": 2028,
    "range": [
      2027,
      2028
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2033,
    "end": 2034,
    "range": [
      2033,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2035,
    "end": 2036,
    "range": [
      2035,
      2036
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2039,
    "end": 2042,
    "range": [
      2039,
      2042
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2044,
    "end": 2045,
    "range": [
      2044,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2046,
    "end": 2048,
    "range": [
      2046,
      2048
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2053,
    "end": 2054,
    "range": [
      2053,
      2054
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2054,
    "end": 2055,
    "range": [
      2054,
      2055
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2105,
    "end": 2109,
    "range": [
      2105,
      2109
    ]
  },
  {
    "type": "Identifier",
    "value": "SliceCaseReducers",
    "start": 2110,
    "end": 2127,
    "range": [
      2110,
      2127
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 2128,
    "end": 2133,
    "range": [
      2128,
      2133
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2135,
    "end": 2136,
    "range": [
      2135,
      2136
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2137,
    "end": 2143,
    "range": [
      2137,
      2143
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2143,
    "end": 2144,
    "range": [
      2143,
      2144
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2144,
    "end": 2150,
    "range": [
      2144,
      2150
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2150,
    "end": 2151,
    "range": [
      2150,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2152,
    "end": 2153,
    "range": [
      2152,
      2153
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 2153,
    "end": 2158,
    "range": [
      2153,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 2160,
    "end": 2165,
    "range": [
      2160,
      2165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2165,
    "end": 2166,
    "range": [
      2165,
      2166
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2167,
    "end": 2169,
    "range": [
      2167,
      2169
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 2170,
    "end": 2175,
    "range": [
      2170,
      2175
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2178,
    "end": 2182,
    "range": [
      2178,
      2182
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2182,
    "end": 2183,
    "range": [
      2182,
      2183
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2183,
    "end": 2184,
    "range": [
      2183,
      2184
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2186,
    "end": 2190,
    "range": [
      2186,
      2190
    ]
  },
  {
    "type": "Identifier",
    "value": "ValidateSliceCaseReducers",
    "start": 2191,
    "end": 2216,
    "range": [
      2191,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2216,
    "end": 2217,
    "range": [
      2216,
      2217
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2218,
    "end": 2219,
    "range": [
      2218,
      2219
    ]
  },
  {
    "type": "Identifier",
    "value": "ACR",
    "start": 2220,
    "end": 2223,
    "range": [
      2220,
      2223
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2224,
    "end": 2231,
    "range": [
      2224,
      2231
    ]
  },
  {
    "type": "Identifier",
    "value": "SliceCaseReducers",
    "start": 2232,
    "end": 2249,
    "range": [
      2232,
      2249
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2249,
    "end": 2250,
    "range": [
      2249,
      2250
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2250,
    "end": 2251,
    "range": [
      2250,
      2251
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2252,
    "end": 2253,
    "range": [
      2252,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2254,
    "end": 2255,
    "range": [
      2254,
      2255
    ]
  },
  {
    "type": "Identifier",
    "value": "ACR",
    "start": 2256,
    "end": 2259,
    "range": [
      2256,
      2259
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2260,
    "end": 2261,
    "range": [
      2260,
      2261
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2262,
    "end": 2263,
    "range": [
      2262,
      2263
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2266,
    "end": 2267,
    "range": [
      2266,
      2267
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2267,
    "end": 2268,
    "range": [
      2267,
      2268
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2269,
    "end": 2271,
    "range": [
      2269,
      2271
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2272,
    "end": 2277,
    "range": [
      2272,
      2277
    ]
  },
  {
    "type": "Identifier",
    "value": "ACR",
    "start": 2278,
    "end": 2281,
    "range": [
      2278,
      2281
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2281,
    "end": 2282,
    "range": [
      2281,
      2282
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2282,
    "end": 2283,
    "range": [
      2282,
      2283
    ]
  },
  {
    "type": "Identifier",
    "value": "ACR",
    "start": 2284,
    "end": 2287,
    "range": [
      2284,
      2287
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2287,
    "end": 2288,
    "range": [
      2287,
      2288
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2288,
    "end": 2289,
    "range": [
      2288,
      2289
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2291,
    "end": 2298,
    "range": [
      2291,
      2298
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2299,
    "end": 2300,
    "range": [
      2299,
      2300
    ]
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 2305,
    "end": 2312,
    "range": [
      2305,
      2312
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2312,
    "end": 2313,
    "range": [
      2312,
      2313
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2313,
    "end": 2314,
    "range": [
      2313,
      2314
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2314,
    "end": 2315,
    "range": [
      2314,
      2315
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2316,
    "end": 2317,
    "range": [
      2316,
      2317
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 2319,
    "end": 2325,
    "range": [
      2319,
      2325
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2325,
    "end": 2326,
    "range": [
      2325,
      2326
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2326,
    "end": 2327,
    "range": [
      2326,
      2327
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2328,
    "end": 2333,
    "range": [
      2328,
      2333
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2334,
    "end": 2335,
    "range": [
      2334,
      2335
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2335,
    "end": 2336,
    "range": [
      2335,
      2336
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2338,
    "end": 2341,
    "range": [
      2338,
      2341
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2341,
    "end": 2342,
    "range": [
      2341,
      2342
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2345,
    "end": 2346,
    "range": [
      2345,
      2346
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "Identifier",
    "value": "prepare",
    "start": 2363,
    "end": 2370,
    "range": [
      2363,
      2370
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2370,
    "end": 2371,
    "range": [
      2370,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2371,
    "end": 2374,
    "range": [
      2371,
      2374
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2374,
    "end": 2375,
    "range": [
      2374,
      2375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2375,
    "end": 2376,
    "range": [
      2375,
      2376
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2377,
    "end": 2382,
    "range": [
      2377,
      2382
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2382,
    "end": 2383,
    "range": [
      2382,
      2383
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2383,
    "end": 2384,
    "range": [
      2383,
      2384
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2384,
    "end": 2385,
    "range": [
      2384,
      2385
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2385,
    "end": 2386,
    "range": [
      2385,
      2386
    ]
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 2387,
    "end": 2391,
    "range": [
      2387,
      2391
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2392,
    "end": 2393,
    "range": [
      2392,
      2393
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2393,
    "end": 2394,
    "range": [
      2393,
      2394
    ]
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 2395,
    "end": 2401,
    "range": [
      2395,
      2401
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2401,
    "end": 2402,
    "range": [
      2401,
      2402
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2402,
    "end": 2403,
    "range": [
      2402,
      2403
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2410,
    "end": 2411,
    "range": [
      2410,
      2411
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2416,
    "end": 2417,
    "range": [
      2416,
      2417
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2418,
    "end": 2419,
    "range": [
      2418,
      2419
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2419,
    "end": 2420,
    "range": [
      2419,
      2420
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2422,
    "end": 2423,
    "range": [
      2422,
      2423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2423,
    "end": 2424,
    "range": [
      2423,
      2424
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2426,
    "end": 2433,
    "range": [
      2426,
      2433
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2434,
    "end": 2442,
    "range": [
      2434,
      2442
    ]
  },
  {
    "type": "Identifier",
    "value": "createSlice",
    "start": 2443,
    "end": 2454,
    "range": [
      2443,
      2454
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2454,
    "end": 2455,
    "range": [
      2454,
      2455
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 2458,
    "end": 2463,
    "range": [
      2458,
      2463
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2463,
    "end": 2464,
    "range": [
      2463,
      2464
    ]
  },
  {
    "type": "Identifier",
    "value": "CaseReducers",
    "start": 2467,
    "end": 2479,
    "range": [
      2467,
      2479
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2480,
    "end": 2487,
    "range": [
      2480,
      2487
    ]
  },
  {
    "type": "Identifier",
    "value": "SliceCaseReducers",
    "start": 2488,
    "end": 2505,
    "range": [
      2488,
      2505
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2505,
    "end": 2506,
    "range": [
      2505,
      2506
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 2506,
    "end": 2511,
    "range": [
      2506,
      2511
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2511,
    "end": 2512,
    "range": [
      2511,
      2512
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2513,
    "end": 2514,
    "range": [
      2513,
      2514
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2514,
    "end": 2515,
    "range": [
      2514,
      2515
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 2515,
    "end": 2522,
    "range": [
      2515,
      2522
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2522,
    "end": 2523,
    "range": [
      2522,
      2523
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Identifier",
    "value": "initialState",
    "start": 2528,
    "end": 2540,
    "range": [
      2528,
      2540
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2540,
    "end": 2541,
    "range": [
      2540,
      2541
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 2542,
    "end": 2547,
    "range": [
      2542,
      2547
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2550,
    "end": 2551,
    "range": [
      2550,
      2551
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2551,
    "end": 2552,
    "range": [
      2551,
      2552
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2552,
    "end": 2553,
    "range": [
      2552,
      2553
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2554,
    "end": 2556,
    "range": [
      2554,
      2556
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 2557,
    "end": 2562,
    "range": [
      2557,
      2562
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2562,
    "end": 2563,
    "range": [
      2562,
      2563
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2563,
    "end": 2564,
    "range": [
      2563,
      2564
    ]
  },
  {
    "type": "Identifier",
    "value": "reducers",
    "start": 2567,
    "end": 2575,
    "range": [
      2567,
      2575
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2575,
    "end": 2576,
    "range": [
      2575,
      2576
    ]
  },
  {
    "type": "Identifier",
    "value": "ValidateSliceCaseReducers",
    "start": 2577,
    "end": 2602,
    "range": [
      2577,
      2602
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2602,
    "end": 2603,
    "range": [
      2602,
      2603
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 2603,
    "end": 2608,
    "range": [
      2603,
      2608
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2608,
    "end": 2609,
    "range": [
      2608,
      2609
    ]
  },
  {
    "type": "Identifier",
    "value": "CaseReducers",
    "start": 2610,
    "end": 2622,
    "range": [
      2610,
      2622
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2622,
    "end": 2623,
    "range": [
      2622,
      2623
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2623,
    "end": 2624,
    "range": [
      2623,
      2624
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2625,
    "end": 2626,
    "range": [
      2625,
      2626
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2626,
    "end": 2627,
    "range": [
      2626,
      2627
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2627,
    "end": 2628,
    "range": [
      2627,
      2628
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2629,
    "end": 2633,
    "range": [
      2629,
      2633
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2633,
    "end": 2634,
    "range": [
      2633,
      2634
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2636,
    "end": 2642,
    "range": [
      2636,
      2642
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2643,
    "end": 2648,
    "range": [
      2643,
      2648
    ]
  },
  {
    "type": "Identifier",
    "value": "clientSlice",
    "start": 2649,
    "end": 2660,
    "range": [
      2649,
      2660
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2661,
    "end": 2662,
    "range": [
      2661,
      2662
    ]
  },
  {
    "type": "Identifier",
    "value": "createSlice",
    "start": 2663,
    "end": 2674,
    "range": [
      2663,
      2674
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2674,
    "end": 2675,
    "range": [
      2674,
      2675
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2675,
    "end": 2676,
    "range": [
      2675,
      2676
    ]
  },
  {
    "type": "Identifier",
    "value": "initialState",
    "start": 2679,
    "end": 2691,
    "range": [
      2679,
      2691
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2691,
    "end": 2692,
    "range": [
      2691,
      2692
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2693,
    "end": 2694,
    "range": [
      2693,
      2694
    ]
  },
  {
    "type": "Identifier",
    "value": "username",
    "start": 2699,
    "end": 2707,
    "range": [
      2699,
      2707
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2707,
    "end": 2708,
    "range": [
      2707,
      2708
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2709,
    "end": 2711,
    "range": [
      2709,
      2711
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2711,
    "end": 2712,
    "range": [
      2711,
      2712
    ]
  },
  {
    "type": "Identifier",
    "value": "isLoggedIn",
    "start": 2717,
    "end": 2727,
    "range": [
      2717,
      2727
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2727,
    "end": 2728,
    "range": [
      2727,
      2728
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2729,
    "end": 2734,
    "range": [
      2729,
      2734
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2734,
    "end": 2735,
    "range": [
      2734,
      2735
    ]
  },
  {
    "type": "Identifier",
    "value": "userId",
    "start": 2740,
    "end": 2746,
    "range": [
      2740,
      2746
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2746,
    "end": 2747,
    "range": [
      2746,
      2747
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2748,
    "end": 2750,
    "range": [
      2748,
      2750
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2750,
    "end": 2751,
    "range": [
      2750,
      2751
    ]
  },
  {
    "type": "Identifier",
    "value": "avatar",
    "start": 2756,
    "end": 2762,
    "range": [
      2756,
      2762
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2762,
    "end": 2763,
    "range": [
      2762,
      2763
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2764,
    "end": 2766,
    "range": [
      2764,
      2766
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2766,
    "end": 2767,
    "range": [
      2766,
      2767
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2770,
    "end": 2771,
    "range": [
      2770,
      2771
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2771,
    "end": 2772,
    "range": [
      2771,
      2772
    ]
  },
  {
    "type": "Identifier",
    "value": "reducers",
    "start": 2775,
    "end": 2783,
    "range": [
      2775,
      2783
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2783,
    "end": 2784,
    "range": [
      2783,
      2784
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2785,
    "end": 2786,
    "range": [
      2785,
      2786
    ]
  },
  {
    "type": "Identifier",
    "value": "onClientUserChanged",
    "start": 2791,
    "end": 2810,
    "range": [
      2791,
      2810
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2810,
    "end": 2811,
    "range": [
      2810,
      2811
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 2811,
    "end": 2816,
    "range": [
      2811,
      2816
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2816,
    "end": 2817,
    "range": [
      2816,
      2817
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2818,
    "end": 2819,
    "range": [
      2818,
      2819
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2819,
    "end": 2820,
    "range": [
      2819,
      2820
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2820,
    "end": 2821,
    "range": [
      2820,
      2821
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2824,
    "end": 2825,
    "range": [
      2824,
      2825
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2825,
    "end": 2826,
    "range": [
      2825,
      2826
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2827,
    "end": 2828,
    "range": [
      2827,
      2828
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2828,
    "end": 2829,
    "range": [
      2828,
      2829
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2829,
    "end": 2830,
    "range": [
      2829,
      2830
    ]
  }
]
```

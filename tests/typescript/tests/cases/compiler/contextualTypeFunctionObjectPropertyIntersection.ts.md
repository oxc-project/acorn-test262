__ESTREE_TEST__:PASS:
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

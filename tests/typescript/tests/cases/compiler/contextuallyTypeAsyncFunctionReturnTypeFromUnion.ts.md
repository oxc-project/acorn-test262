__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StateMachine",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 43
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
              "start": 44,
              "end": 45
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 45
          }
        ],
        "start": 43,
        "end": 46
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onDone",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 57
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
                    "name": "a",
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
                          "start": 63,
                          "end": 64
                        },
                        "typeArguments": null,
                        "start": 63,
                        "end": 64
                      },
                      "start": 61,
                      "end": 64
                    },
                    "start": 60,
                    "end": 64
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 69,
                    "end": 73
                  },
                  "start": 66,
                  "end": 73
                },
                "start": 59,
                "end": 73
              },
              "start": 57,
              "end": 73
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 51,
            "end": 74
          }
        ],
        "start": 47,
        "end": 76
      },
      "abstract": false,
      "declare": true,
      "start": 17,
      "end": 76
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createMachine",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 108
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
              "start": 109,
              "end": 110
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 109,
            "end": 110
          }
        ],
        "start": 108,
        "end": 111
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "implementations",
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
                    "name": "services",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 141
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 143,
                        "end": 149
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 150,
                            "end": 156
                          },
                          {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [],
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
                                      "name": "Promise",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 164,
                                      "end": 171
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
                                            "start": 172,
                                            "end": 173
                                          },
                                          "typeArguments": null,
                                          "start": 172,
                                          "end": 173
                                        }
                                      ],
                                      "start": 171,
                                      "end": 174
                                    },
                                    "start": 164,
                                    "end": 174
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "StateMachine",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 177,
                                      "end": 189
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
                                            "start": 190,
                                            "end": 191
                                          },
                                          "typeArguments": null,
                                          "start": 190,
                                          "end": 191
                                        }
                                      ],
                                      "start": 189,
                                      "end": 192
                                    },
                                    "start": 177,
                                    "end": 192
                                  }
                                ],
                                "start": 164,
                                "end": 192
                              },
                              "start": 161,
                              "end": 192
                            },
                            "start": 158,
                            "end": 192
                          }
                        ],
                        "start": 149,
                        "end": 193
                      },
                      "start": 143,
                      "end": 193
                    },
                    "start": 141,
                    "end": 193
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 133,
                  "end": 194
                }
              ],
              "start": 129,
              "end": 196
            },
            "start": 127,
            "end": 196
          },
          "start": 112,
          "end": 196
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 199,
          "end": 203
        },
        "start": 197,
        "end": 203
      },
      "body": null,
      "expression": false,
      "start": 78,
      "end": 204
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
          "start": 206,
          "end": 219
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 227
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 229,
                      "end": 235
                    },
                    "start": 227,
                    "end": 235
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 222,
                  "end": 235
                }
              ],
              "start": 220,
              "end": 237
            }
          ],
          "start": 219,
          "end": 238
        },
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
                  "name": "services",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 251
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
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 259,
                        "end": 263
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": true,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 277,
                              "end": 284
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "reject",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 285,
                              "end": 291
                            },
                            "optional": false,
                            "computed": false,
                            "start": 277,
                            "end": 291
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "some err",
                              "raw": "\"some err\"",
                              "start": 292,
                              "end": 302
                            }
                          ],
                          "optional": false,
                          "start": 277,
                          "end": 303
                        },
                        "id": null,
                        "generator": false,
                        "start": 265,
                        "end": 303
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 259,
                      "end": 303
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 315,
                        "end": 320
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": true,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 338,
                                    "end": 345
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "reject",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 346,
                                    "end": 352
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 338,
                                  "end": 352
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "some err",
                                    "raw": "\"some err\"",
                                    "start": 353,
                                    "end": 363
                                  }
                                ],
                                "optional": false,
                                "start": 338,
                                "end": 364
                              },
                              "start": 331,
                              "end": 365
                            }
                          ],
                          "start": 323,
                          "end": 371
                        },
                        "expression": false,
                        "start": 320,
                        "end": 371
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 309,
                      "end": 371
                    }
                  ],
                  "start": 253,
                  "end": 376
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 243,
                "end": 376
              }
            ],
            "start": 239,
            "end": 379
          }
        ],
        "optional": false,
        "start": 206,
        "end": 380
      },
      "directive": null,
      "start": 206,
      "end": 381
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 392,
        "end": 395
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
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
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 405,
                    "end": 412
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
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
                              "name": "count",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 415,
                              "end": 420
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 422,
                                "end": 428
                              },
                              "start": 420,
                              "end": 428
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 415,
                            "end": 428
                          }
                        ],
                        "start": 413,
                        "end": 430
                      }
                    ],
                    "start": 412,
                    "end": 431
                  },
                  "start": 405,
                  "end": 431
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StateMachine",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 434,
                    "end": 446
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
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
                              "name": "count",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 449,
                              "end": 454
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 456,
                                "end": 462
                              },
                              "start": 454,
                              "end": 462
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 449,
                            "end": 462
                          }
                        ],
                        "start": 447,
                        "end": 464
                      }
                    ],
                    "start": 446,
                    "end": 465
                  },
                  "start": 434,
                  "end": 465
                }
              ],
              "start": 405,
              "end": 465
            },
            "start": 402,
            "end": 465
          },
          "start": 399,
          "end": 465
        },
        "start": 397,
        "end": 465
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 489,
                    "end": 496
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 497,
                    "end": 503
                  },
                  "optional": false,
                  "computed": false,
                  "start": 489,
                  "end": 503
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "some err",
                    "raw": "'some err'",
                    "start": 504,
                    "end": 514
                  }
                ],
                "optional": false,
                "start": 489,
                "end": 515
              },
              "id": null,
              "generator": false,
              "start": 477,
              "end": 515
            },
            "start": 470,
            "end": 515
          }
        ],
        "start": 466,
        "end": 517
      },
      "expression": false,
      "start": 383,
      "end": 517
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "load",
        "optional": false,
        "typeAnnotation": null,
        "start": 577,
        "end": 581
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 592
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSBooleanKeyword",
                "start": 593,
                "end": 600
              }
            ],
            "start": 592,
            "end": 601
          },
          "start": 585,
          "end": 601
        },
        "start": 583,
        "end": 601
      },
      "body": null,
      "expression": false,
      "start": 560,
      "end": 602
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LoadCallback",
        "optional": false,
        "typeAnnotation": null,
        "start": 609,
        "end": 621
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
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
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 637
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 638,
                      "end": 645
                    }
                  ],
                  "start": 637,
                  "end": 646
                },
                "start": 630,
                "end": 646
              },
              {
                "type": "TSStringKeyword",
                "start": 649,
                "end": 655
              }
            ],
            "start": 630,
            "end": 655
          },
          "start": 627,
          "end": 655
        },
        "start": 624,
        "end": 655
      },
      "declare": false,
      "start": 604,
      "end": 656
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
            "name": "cb1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LoadCallback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 732,
                  "end": 744
                },
                "typeArguments": null,
                "start": 732,
                "end": 744
              },
              "start": 730,
              "end": 744
            },
            "start": 727,
            "end": 744
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "load",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 759,
                    "end": 763
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 759,
                  "end": 765
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 766,
                  "end": 770
                },
                "optional": false,
                "computed": false,
                "start": 759,
                "end": 770
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 771,
                      "end": 772
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 776,
                    "end": 777
                  },
                  "id": null,
                  "generator": false,
                  "start": 771,
                  "end": 777
                }
              ],
              "optional": false,
              "start": 759,
              "end": 778
            },
            "id": null,
            "generator": false,
            "start": 747,
            "end": 778
          },
          "definite": false,
          "start": 727,
          "end": 778
        }
      ],
      "declare": false,
      "start": 721,
      "end": 779
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
            "name": "cb2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LoadCallback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 791,
                  "end": 803
                },
                "typeArguments": null,
                "start": 791,
                "end": 803
              },
              "start": 789,
              "end": 803
            },
            "start": 786,
            "end": 803
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "load",
                "optional": false,
                "typeAnnotation": null,
                "start": 818,
                "end": 822
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 818,
              "end": 824
            },
            "id": null,
            "generator": false,
            "start": 806,
            "end": 824
          },
          "definite": false,
          "start": 786,
          "end": 824
        }
      ],
      "declare": false,
      "start": 780,
      "end": 825
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
            "name": "cb3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LoadCallback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 837,
                  "end": 849
                },
                "typeArguments": null,
                "start": 837,
                "end": 849
              },
              "start": 835,
              "end": 849
            },
            "start": 832,
            "end": 849
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "load",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 858,
                    "end": 862
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 858,
                  "end": 864
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 865,
                  "end": 869
                },
                "optional": false,
                "computed": false,
                "start": 858,
                "end": 869
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 870,
                      "end": 871
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 875,
                    "end": 876
                  },
                  "id": null,
                  "generator": false,
                  "start": 870,
                  "end": 876
                }
              ],
              "optional": false,
              "start": 858,
              "end": 877
            },
            "id": null,
            "generator": false,
            "start": 852,
            "end": 877
          },
          "definite": false,
          "start": 832,
          "end": 877
        }
      ],
      "declare": false,
      "start": 826,
      "end": 878
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 878
}
```

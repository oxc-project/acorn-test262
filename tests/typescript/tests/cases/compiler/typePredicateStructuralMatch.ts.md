__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getResults1",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 33
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 34,
            "end": 36
          }
        ],
        "optional": false,
        "start": 22,
        "end": 37
      },
      "directive": null,
      "start": 22,
      "end": 38
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getResults1",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 50
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
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 56
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 58,
                  "end": 60
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 52,
                "end": 60
              }
            ],
            "start": 51,
            "end": 61
          }
        ],
        "optional": false,
        "start": 39,
        "end": 62
      },
      "directive": null,
      "start": 39,
      "end": 63
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getResults2",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 76
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 77,
            "end": 79
          }
        ],
        "optional": false,
        "start": 65,
        "end": 80
      },
      "directive": null,
      "start": 65,
      "end": 81
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getResults2",
          "optional": false,
          "typeAnnotation": null,
          "start": 82,
          "end": 93
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
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 99
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 101,
                  "end": 103
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 95,
                "end": 103
              }
            ],
            "start": 94,
            "end": 104
          }
        ],
        "optional": false,
        "start": 82,
        "end": 105
      },
      "directive": null,
      "start": 82,
      "end": 106
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 119
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 129
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 131,
                "end": 137
              },
              "start": 129,
              "end": 137
            },
            "accessibility": null,
            "static": false,
            "start": 124,
            "end": 137
          }
        ],
        "start": 122,
        "end": 139
      },
      "declare": false,
      "start": 108,
      "end": 140
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Results",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 153
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Result",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 162
          },
          "typeArguments": null,
          "start": 156,
          "end": 162
        },
        "start": 156,
        "end": 164
      },
      "declare": false,
      "start": 141,
      "end": 165
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isResponseInData",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 192
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 193,
              "end": 194
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 193,
            "end": 194
          }
        ],
        "start": 192,
        "end": 195
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 203,
                    "end": 204
                  },
                  "typeArguments": null,
                  "start": 203,
                  "end": 204
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 209,
                        "end": 213
                      },
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
                            "start": 215,
                            "end": 216
                          },
                          "typeArguments": null,
                          "start": 215,
                          "end": 216
                        },
                        "start": 213,
                        "end": 216
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 209,
                      "end": 216
                    }
                  ],
                  "start": 207,
                  "end": 217
                }
              ],
              "start": 203,
              "end": 217
            },
            "start": 201,
            "end": 217
          },
          "start": 196,
          "end": 217
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 225
          },
          "asserts": false,
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
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 231,
                    "end": 235
                  },
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
                        "start": 237,
                        "end": 238
                      },
                      "typeArguments": null,
                      "start": 237,
                      "end": 238
                    },
                    "start": 235,
                    "end": 238
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 231,
                  "end": 238
                }
              ],
              "start": 229,
              "end": 240
            },
            "start": 229,
            "end": 240
          },
          "start": 220,
          "end": 240
        },
        "start": 218,
        "end": 240
      },
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 259
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasOwnProperty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 274
                },
                "optional": false,
                "computed": false,
                "start": 254,
                "end": 274
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "data",
                  "raw": "'data'",
                  "start": 275,
                  "end": 281
                }
              ],
              "optional": false,
              "start": 254,
              "end": 282
            },
            "start": 247,
            "end": 283
          }
        ],
        "start": 241,
        "end": 285
      },
      "expression": false,
      "start": 167,
      "end": 285
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getResults1",
        "optional": false,
        "typeAnnotation": null,
        "start": 296,
        "end": 307
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
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
                    "name": "Results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 315,
                    "end": 322
                  },
                  "typeArguments": null,
                  "start": 315,
                  "end": 322
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 327,
                        "end": 331
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Results",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 333,
                            "end": 340
                          },
                          "typeArguments": null,
                          "start": 333,
                          "end": 340
                        },
                        "start": 331,
                        "end": 340
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 327,
                      "end": 340
                    }
                  ],
                  "start": 325,
                  "end": 342
                }
              ],
              "start": 315,
              "end": 342
            },
            "start": 313,
            "end": 342
          },
          "start": 308,
          "end": 342
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Results",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 352
          },
          "typeArguments": null,
          "start": 345,
          "end": 352
        },
        "start": 343,
        "end": 352
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isResponseInData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 382
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 383,
                    "end": 388
                  }
                ],
                "optional": false,
                "start": 366,
                "end": 389
              },
              "consequent": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 397
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 398,
                  "end": 402
                },
                "optional": false,
                "computed": false,
                "start": 392,
                "end": 402
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 405,
                "end": 410
              },
              "start": 366,
              "end": 410
            },
            "start": 359,
            "end": 411
          }
        ],
        "start": 353,
        "end": 413
      },
      "expression": false,
      "start": 287,
      "end": 413
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isPlainResponse",
        "optional": false,
        "typeAnnotation": null,
        "start": 424,
        "end": 439
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 440,
              "end": 441
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 440,
            "end": 441
          }
        ],
        "start": 439,
        "end": 442
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 450,
                    "end": 451
                  },
                  "typeArguments": null,
                  "start": 450,
                  "end": 451
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 456,
                        "end": 460
                      },
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
                            "start": 462,
                            "end": 463
                          },
                          "typeArguments": null,
                          "start": 462,
                          "end": 463
                        },
                        "start": 460,
                        "end": 463
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 456,
                      "end": 463
                    }
                  ],
                  "start": 454,
                  "end": 464
                }
              ],
              "start": 450,
              "end": 464
            },
            "start": 448,
            "end": 464
          },
          "start": 443,
          "end": 464
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 472
          },
          "asserts": false,
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
                "start": 476,
                "end": 477
              },
              "typeArguments": null,
              "start": 476,
              "end": 477
            },
            "start": 476,
            "end": 477
          },
          "start": 467,
          "end": 477
        },
        "start": 465,
        "end": 477
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 492,
                    "end": 497
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hasOwnProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 498,
                    "end": 512
                  },
                  "optional": false,
                  "computed": false,
                  "start": 492,
                  "end": 512
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "data",
                    "raw": "'data'",
                    "start": 513,
                    "end": 519
                  }
                ],
                "optional": false,
                "start": 492,
                "end": 520
              },
              "prefix": true,
              "start": 491,
              "end": 520
            },
            "start": 484,
            "end": 521
          }
        ],
        "start": 478,
        "end": 523
      },
      "expression": false,
      "start": 415,
      "end": 523
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getResults2",
        "optional": false,
        "typeAnnotation": null,
        "start": 534,
        "end": 545
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
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
                    "name": "Results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 553,
                    "end": 560
                  },
                  "typeArguments": null,
                  "start": 553,
                  "end": 560
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 565,
                        "end": 569
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Results",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 571,
                            "end": 578
                          },
                          "typeArguments": null,
                          "start": 571,
                          "end": 578
                        },
                        "start": 569,
                        "end": 578
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 565,
                      "end": 578
                    }
                  ],
                  "start": 563,
                  "end": 580
                }
              ],
              "start": 553,
              "end": 580
            },
            "start": 551,
            "end": 580
          },
          "start": 546,
          "end": 580
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Results",
            "optional": false,
            "typeAnnotation": null,
            "start": 583,
            "end": 590
          },
          "typeArguments": null,
          "start": 583,
          "end": 590
        },
        "start": 581,
        "end": 590
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isPlainResponse",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 604,
                  "end": 619
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 620,
                    "end": 625
                  }
                ],
                "optional": false,
                "start": 604,
                "end": 626
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 629,
                "end": 634
              },
              "alternate": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 637,
                  "end": 642
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 643,
                  "end": 647
                },
                "optional": false,
                "computed": false,
                "start": 637,
                "end": 647
              },
              "start": 604,
              "end": 647
            },
            "start": 597,
            "end": 648
          }
        ],
        "start": 591,
        "end": 650
      },
      "expression": false,
      "start": 525,
      "end": 650
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 650
}
```

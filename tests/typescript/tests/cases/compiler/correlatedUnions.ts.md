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
        "name": "RecordMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 45
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 53,
                "end": 59
              },
              "start": 51,
              "end": 59
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 60
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
            },
            "accessibility": null,
            "static": false,
            "start": 61,
            "end": 71
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
              "start": 72,
              "end": 73
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 75,
                "end": 82
              },
              "start": 73,
              "end": 82
            },
            "accessibility": null,
            "static": false,
            "start": 72,
            "end": 82
          }
        ],
        "start": 48,
        "end": 84
      },
      "declare": false,
      "start": 31,
      "end": 85
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 102
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecordMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 128
                },
                "typeArguments": null,
                "start": 119,
                "end": 128
              },
              "start": 113,
              "end": 128
            },
            "default": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecordMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 146
                },
                "typeArguments": null,
                "start": 137,
                "end": 146
              },
              "start": 131,
              "end": 146
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 103,
            "end": 146
          }
        ],
        "start": 102,
        "end": 147
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 154
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 159
            },
            "typeArguments": null,
            "start": 158,
            "end": 159
          },
          "nameType": null,
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 172
                },
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
                      "start": 174,
                      "end": 175
                    },
                    "typeArguments": null,
                    "start": 174,
                    "end": 175
                  },
                  "start": 172,
                  "end": 175
                },
                "accessibility": null,
                "static": false,
                "start": 168,
                "end": 176
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 182
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RecordMap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 184,
                        "end": 193
                      },
                      "typeArguments": null,
                      "start": 184,
                      "end": 193
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 194,
                        "end": 195
                      },
                      "typeArguments": null,
                      "start": 194,
                      "end": 195
                    },
                    "start": 184,
                    "end": 196
                  },
                  "start": 182,
                  "end": 196
                },
                "accessibility": null,
                "static": false,
                "start": 181,
                "end": 197
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 202,
                  "end": 203
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
                        "name": "v",
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
                                "name": "RecordMap",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 209,
                                "end": 218
                              },
                              "typeArguments": null,
                              "start": 209,
                              "end": 218
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 219,
                                "end": 220
                              },
                              "typeArguments": null,
                              "start": 219,
                              "end": 220
                            },
                            "start": 209,
                            "end": 221
                          },
                          "start": 207,
                          "end": 221
                        },
                        "start": 206,
                        "end": 221
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 226,
                        "end": 230
                      },
                      "start": 223,
                      "end": 230
                    },
                    "start": 205,
                    "end": 230
                  },
                  "start": 203,
                  "end": 230
                },
                "accessibility": null,
                "static": false,
                "start": 202,
                "end": 230
              }
            ],
            "start": 162,
            "end": 232
          },
          "optional": false,
          "readonly": null,
          "start": 150,
          "end": 233
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 235
          },
          "typeArguments": null,
          "start": 234,
          "end": 235
        },
        "start": 150,
        "end": 236
      },
      "declare": false,
      "start": 86,
      "end": 237
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "processRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 261
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 263
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecordMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 287
                },
                "typeArguments": null,
                "start": 278,
                "end": 287
              },
              "start": 272,
              "end": 287
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 262,
            "end": 287
          }
        ],
        "start": 261,
        "end": 288
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "rec",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnionRecord",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 305
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 306,
                      "end": 307
                    },
                    "typeArguments": null,
                    "start": 306,
                    "end": 307
                  }
                ],
                "start": 305,
                "end": 308
              },
              "start": 294,
              "end": 308
            },
            "start": 292,
            "end": 308
          },
          "start": 289,
          "end": 308
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 319
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 320,
                  "end": 321
                },
                "optional": false,
                "computed": false,
                "start": 316,
                "end": 321
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 322,
                    "end": 325
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 327
                  },
                  "optional": false,
                  "computed": false,
                  "start": 322,
                  "end": 327
                }
              ],
              "optional": false,
              "start": 316,
              "end": 328
            },
            "directive": null,
            "start": 316,
            "end": 329
          }
        ],
        "start": 310,
        "end": 331
      },
      "expression": false,
      "start": 239,
      "end": 331
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnionRecord",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 362
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "n",
                        "raw": "'n'",
                        "start": 363,
                        "end": 366
                      },
                      "start": 363,
                      "end": 366
                    }
                  ],
                  "start": 362,
                  "end": 367
                },
                "start": 351,
                "end": 367
              },
              "start": 349,
              "end": 367
            },
            "start": 347,
            "end": 367
          },
          "init": null,
          "definite": false,
          "start": 347,
          "end": 367
        }
      ],
      "declare": true,
      "start": 333,
      "end": 368
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnionRecord",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 440,
                  "end": 451
                },
                "typeArguments": null,
                "start": 440,
                "end": 451
              },
              "start": 438,
              "end": 451
            },
            "start": 436,
            "end": 451
          },
          "init": null,
          "definite": false,
          "start": 436,
          "end": 451
        }
      ],
      "declare": true,
      "start": 422,
      "end": 452
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "processRecord",
          "optional": false,
          "typeAnnotation": null,
          "start": 519,
          "end": 532
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 533,
            "end": 535
          }
        ],
        "optional": false,
        "start": 519,
        "end": 536
      },
      "directive": null,
      "start": 519,
      "end": 537
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "processRecord",
          "optional": false,
          "typeAnnotation": null,
          "start": 538,
          "end": 551
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 552,
            "end": 554
          }
        ],
        "optional": false,
        "start": 538,
        "end": 555
      },
      "directive": null,
      "start": 538,
      "end": 556
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "processRecord",
          "optional": false,
          "typeAnnotation": null,
          "start": 557,
          "end": 570
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 573,
                  "end": 577
                },
                "value": {
                  "type": "Literal",
                  "value": "n",
                  "raw": "'n'",
                  "start": 579,
                  "end": 582
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 573,
                "end": 582
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 584,
                  "end": 585
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 587,
                  "end": 589
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 584,
                "end": 589
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 591,
                  "end": 592
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
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 594,
                      "end": 595
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 599,
                        "end": 600
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toExponential",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 601,
                        "end": 614
                      },
                      "optional": false,
                      "computed": false,
                      "start": 599,
                      "end": 614
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 599,
                    "end": 616
                  },
                  "id": null,
                  "generator": false,
                  "start": 594,
                  "end": 616
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 591,
                "end": 616
              }
            ],
            "start": 571,
            "end": 618
          }
        ],
        "optional": false,
        "start": 557,
        "end": 619
      },
      "directive": null,
      "start": 557,
      "end": 620
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TextFieldData",
        "optional": false,
        "typeAnnotation": null,
        "start": 640,
        "end": 653
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
              "start": 658,
              "end": 663
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 665,
                "end": 671
              },
              "start": 663,
              "end": 671
            },
            "accessibility": null,
            "static": false,
            "start": 658,
            "end": 671
          }
        ],
        "start": 656,
        "end": 673
      },
      "declare": false,
      "start": 635,
      "end": 673
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SelectFieldData",
        "optional": false,
        "typeAnnotation": null,
        "start": 679,
        "end": 694
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
              "name": "options",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 706
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 708,
                  "end": 714
                },
                "start": 708,
                "end": 716
              },
              "start": 706,
              "end": 716
            },
            "accessibility": null,
            "static": false,
            "start": 699,
            "end": 717
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "selectedValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 718,
              "end": 731
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 733,
                "end": 739
              },
              "start": 731,
              "end": 739
            },
            "accessibility": null,
            "static": false,
            "start": 718,
            "end": 739
          }
        ],
        "start": 697,
        "end": 741
      },
      "declare": false,
      "start": 674,
      "end": 741
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FieldMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 748,
        "end": 756
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
              "name": "text",
              "optional": false,
              "typeAnnotation": null,
              "start": 765,
              "end": 769
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TextFieldData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 784
                },
                "typeArguments": null,
                "start": 771,
                "end": 784
              },
              "start": 769,
              "end": 784
            },
            "accessibility": null,
            "static": false,
            "start": 765,
            "end": 785
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 790,
              "end": 796
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SelectFieldData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 798,
                  "end": 813
                },
                "typeArguments": null,
                "start": 798,
                "end": 813
              },
              "start": 796,
              "end": 813
            },
            "accessibility": null,
            "static": false,
            "start": 790,
            "end": 814
          }
        ],
        "start": 759,
        "end": 816
      },
      "declare": false,
      "start": 743,
      "end": 816
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FormField",
        "optional": false,
        "typeAnnotation": null,
        "start": 823,
        "end": 832
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 833,
              "end": 834
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FieldMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 849,
                  "end": 857
                },
                "typeArguments": null,
                "start": 849,
                "end": 857
              },
              "start": 843,
              "end": 857
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 833,
            "end": 857
          }
        ],
        "start": 832,
        "end": 858
      },
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 863,
              "end": 867
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
                  "start": 869,
                  "end": 870
                },
                "typeArguments": null,
                "start": 869,
                "end": 870
              },
              "start": 867,
              "end": 870
            },
            "accessibility": null,
            "static": false,
            "start": 863,
            "end": 871
          },
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
              "start": 872,
              "end": 876
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FieldMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 878,
                    "end": 886
                  },
                  "typeArguments": null,
                  "start": 878,
                  "end": 886
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 887,
                    "end": 888
                  },
                  "typeArguments": null,
                  "start": 887,
                  "end": 888
                },
                "start": 878,
                "end": 889
              },
              "start": 876,
              "end": 889
            },
            "accessibility": null,
            "static": false,
            "start": 872,
            "end": 889
          }
        ],
        "start": 861,
        "end": 891
      },
      "declare": false,
      "start": 818,
      "end": 892
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RenderFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 899,
        "end": 909
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 910,
              "end": 911
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FieldMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 926,
                  "end": 934
                },
                "typeArguments": null,
                "start": 926,
                "end": 934
              },
              "start": 920,
              "end": 934
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 910,
            "end": 934
          }
        ],
        "start": 909,
        "end": 935
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
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
                    "name": "FieldMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 946,
                    "end": 954
                  },
                  "typeArguments": null,
                  "start": 946,
                  "end": 954
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 955,
                    "end": 956
                  },
                  "typeArguments": null,
                  "start": 955,
                  "end": 956
                },
                "start": 946,
                "end": 957
              },
              "start": 944,
              "end": 957
            },
            "start": 939,
            "end": 957
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 962,
            "end": 966
          },
          "start": 959,
          "end": 966
        },
        "start": 938,
        "end": 966
      },
      "declare": false,
      "start": 894,
      "end": 967
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RenderFuncMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 973,
        "end": 986
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 992,
          "end": 993
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FieldMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 1003,
              "end": 1011
            },
            "typeArguments": null,
            "start": 1003,
            "end": 1011
          },
          "start": 997,
          "end": 1011
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RenderFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 1014,
            "end": 1024
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1025,
                  "end": 1026
                },
                "typeArguments": null,
                "start": 1025,
                "end": 1026
              }
            ],
            "start": 1024,
            "end": 1027
          },
          "start": 1014,
          "end": 1027
        },
        "optional": false,
        "readonly": null,
        "start": 989,
        "end": 1029
      },
      "declare": false,
      "start": 968,
      "end": 1030
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "renderTextField",
        "optional": false,
        "typeAnnotation": null,
        "start": 1041,
        "end": 1056
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TextFieldData",
                "optional": false,
                "typeAnnotation": null,
                "start": 1064,
                "end": 1077
              },
              "typeArguments": null,
              "start": 1064,
              "end": 1077
            },
            "start": 1062,
            "end": 1077
          },
          "start": 1057,
          "end": 1077
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1079,
        "end": 1081
      },
      "expression": false,
      "start": 1032,
      "end": 1081
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "renderSelectField",
        "optional": false,
        "typeAnnotation": null,
        "start": 1091,
        "end": 1108
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SelectFieldData",
                "optional": false,
                "typeAnnotation": null,
                "start": 1116,
                "end": 1131
              },
              "typeArguments": null,
              "start": 1116,
              "end": 1131
            },
            "start": 1114,
            "end": 1131
          },
          "start": 1109,
          "end": 1131
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1133,
        "end": 1135
      },
      "expression": false,
      "start": 1082,
      "end": 1135
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
            "name": "renderFuncs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RenderFuncMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1156,
                  "end": 1169
                },
                "typeArguments": null,
                "start": 1156,
                "end": 1169
              },
              "start": 1154,
              "end": 1169
            },
            "start": 1143,
            "end": 1169
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "text",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1178,
                  "end": 1182
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "renderTextField",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1184,
                  "end": 1199
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1178,
                "end": 1199
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "select",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1205,
                  "end": 1211
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "renderSelectField",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1213,
                  "end": 1230
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1205,
                "end": 1230
              }
            ],
            "start": 1172,
            "end": 1233
          },
          "definite": false,
          "start": 1143,
          "end": 1233
        }
      ],
      "declare": false,
      "start": 1137,
      "end": 1234
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "renderField",
        "optional": false,
        "typeAnnotation": null,
        "start": 1245,
        "end": 1256
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1257,
              "end": 1258
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FieldMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1273,
                  "end": 1281
                },
                "typeArguments": null,
                "start": 1273,
                "end": 1281
              },
              "start": 1267,
              "end": 1281
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1257,
            "end": 1281
          }
        ],
        "start": 1256,
        "end": 1282
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "field",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FormField",
                "optional": false,
                "typeAnnotation": null,
                "start": 1290,
                "end": 1299
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1300,
                      "end": 1301
                    },
                    "typeArguments": null,
                    "start": 1300,
                    "end": 1301
                  }
                ],
                "start": 1299,
                "end": 1302
              },
              "start": 1290,
              "end": 1302
            },
            "start": 1288,
            "end": 1302
          },
          "start": 1283,
          "end": 1302
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "renderFn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1316,
                  "end": 1324
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "renderFuncs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1327,
                    "end": 1338
                  },
                  "property": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "field",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1339,
                      "end": 1344
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1345,
                      "end": 1349
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1339,
                    "end": 1349
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1327,
                  "end": 1350
                },
                "definite": false,
                "start": 1316,
                "end": 1350
              }
            ],
            "declare": false,
            "start": 1310,
            "end": 1351
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "renderFn",
                "optional": false,
                "typeAnnotation": null,
                "start": 1356,
                "end": 1364
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "field",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1365,
                    "end": 1370
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1371,
                    "end": 1375
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1365,
                  "end": 1375
                }
              ],
              "optional": false,
              "start": 1356,
              "end": 1376
            },
            "directive": null,
            "start": 1356,
            "end": 1377
          }
        ],
        "start": 1304,
        "end": 1379
      },
      "expression": false,
      "start": 1236,
      "end": 1379
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 1399,
        "end": 1406
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1415,
              "end": 1418
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1420,
                "end": 1426
              },
              "start": 1418,
              "end": 1426
            },
            "accessibility": null,
            "static": false,
            "start": 1415,
            "end": 1427
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1432,
              "end": 1435
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1437,
                "end": 1443
              },
              "start": 1435,
              "end": 1443
            },
            "accessibility": null,
            "static": false,
            "start": 1432,
            "end": 1443
          }
        ],
        "start": 1409,
        "end": 1445
      },
      "declare": false,
      "start": 1394,
      "end": 1446
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Keys",
        "optional": false,
        "typeAnnotation": null,
        "start": 1453,
        "end": 1457
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 1466,
            "end": 1473
          },
          "typeArguments": null,
          "start": 1466,
          "end": 1473
        },
        "start": 1460,
        "end": 1473
      },
      "declare": false,
      "start": 1448,
      "end": 1474
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HandlerMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 1481,
        "end": 1491
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1497,
          "end": 1498
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Keys",
            "optional": false,
            "typeAnnotation": null,
            "start": 1502,
            "end": 1506
          },
          "typeArguments": null,
          "start": 1502,
          "end": 1506
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
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
                      "name": "TypeMap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1513,
                      "end": 1520
                    },
                    "typeArguments": null,
                    "start": 1513,
                    "end": 1520
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1521,
                      "end": 1522
                    },
                    "typeArguments": null,
                    "start": 1521,
                    "end": 1522
                  },
                  "start": 1513,
                  "end": 1523
                },
                "start": 1511,
                "end": 1523
              },
              "start": 1510,
              "end": 1523
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1528,
              "end": 1532
            },
            "start": 1525,
            "end": 1532
          },
          "start": 1509,
          "end": 1532
        },
        "optional": false,
        "readonly": null,
        "start": 1494,
        "end": 1534
      },
      "declare": false,
      "start": 1476,
      "end": 1535
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
            "name": "handlers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HandlerMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1553,
                  "end": 1563
                },
                "typeArguments": null,
                "start": 1553,
                "end": 1563
              },
              "start": 1551,
              "end": 1563
            },
            "start": 1543,
            "end": 1563
          },
          "init": {
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
                  "start": 1572,
                  "end": 1575
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
                      "start": 1577,
                      "end": 1578
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1582,
                      "end": 1583
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1584,
                      "end": 1590
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1582,
                    "end": 1590
                  },
                  "id": null,
                  "generator": false,
                  "start": 1577,
                  "end": 1590
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1572,
                "end": 1590
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1596,
                  "end": 1599
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1601,
                      "end": 1602
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1606,
                        "end": 1607
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1608,
                        "end": 1615
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1606,
                      "end": 1615
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1616,
                        "end": 1617
                      }
                    ],
                    "optional": false,
                    "start": 1606,
                    "end": 1618
                  },
                  "id": null,
                  "generator": false,
                  "start": 1601,
                  "end": 1618
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1596,
                "end": 1618
              }
            ],
            "start": 1566,
            "end": 1620
          },
          "definite": false,
          "start": 1543,
          "end": 1620
        }
      ],
      "declare": false,
      "start": 1537,
      "end": 1621
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DataEntry",
        "optional": false,
        "typeAnnotation": null,
        "start": 1628,
        "end": 1637
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1638,
              "end": 1639
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 1648,
                "end": 1652
              },
              "typeArguments": null,
              "start": 1648,
              "end": 1652
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 1655,
                "end": 1659
              },
              "typeArguments": null,
              "start": 1655,
              "end": 1659
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1638,
            "end": 1659
          }
        ],
        "start": 1637,
        "end": 1660
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1666,
            "end": 1667
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1671,
              "end": 1672
            },
            "typeArguments": null,
            "start": 1671,
            "end": 1672
          },
          "nameType": null,
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1681,
                  "end": 1685
                },
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
                      "start": 1687,
                      "end": 1688
                    },
                    "typeArguments": null,
                    "start": 1687,
                    "end": 1688
                  },
                  "start": 1685,
                  "end": 1688
                },
                "accessibility": null,
                "static": false,
                "start": 1681,
                "end": 1689
              },
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
                  "start": 1694,
                  "end": 1698
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TypeMap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1700,
                        "end": 1707
                      },
                      "typeArguments": null,
                      "start": 1700,
                      "end": 1707
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1708,
                        "end": 1709
                      },
                      "typeArguments": null,
                      "start": 1708,
                      "end": 1709
                    },
                    "start": 1700,
                    "end": 1710
                  },
                  "start": 1698,
                  "end": 1710
                },
                "accessibility": null,
                "static": false,
                "start": 1694,
                "end": 1710
              }
            ],
            "start": 1675,
            "end": 1712
          },
          "optional": false,
          "readonly": null,
          "start": 1663,
          "end": 1713
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 1714,
            "end": 1715
          },
          "typeArguments": null,
          "start": 1714,
          "end": 1715
        },
        "start": 1663,
        "end": 1716
      },
      "declare": false,
      "start": 1623,
      "end": 1717
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
            "name": "data",
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
                    "name": "DataEntry",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1731,
                    "end": 1740
                  },
                  "typeArguments": null,
                  "start": 1731,
                  "end": 1740
                },
                "start": 1731,
                "end": 1742
              },
              "start": 1729,
              "end": 1742
            },
            "start": 1725,
            "end": 1742
          },
          "init": {
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1753,
                      "end": 1757
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 1759,
                      "end": 1764
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1753,
                    "end": 1764
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1766,
                      "end": 1770
                    },
                    "value": {
                      "type": "Literal",
                      "value": "abc",
                      "raw": "'abc'",
                      "start": 1772,
                      "end": 1777
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1766,
                    "end": 1777
                  }
                ],
                "start": 1751,
                "end": 1779
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1787,
                      "end": 1791
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 1793,
                      "end": 1798
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1787,
                    "end": 1798
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1800,
                      "end": 1804
                    },
                    "value": {
                      "type": "Literal",
                      "value": "def",
                      "raw": "'def'",
                      "start": 1806,
                      "end": 1811
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1800,
                    "end": 1811
                  }
                ],
                "start": 1785,
                "end": 1813
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1821,
                      "end": 1825
                    },
                    "value": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "'bar'",
                      "start": 1827,
                      "end": 1832
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1821,
                    "end": 1832
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1834,
                      "end": 1838
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 1840,
                      "end": 1842
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1834,
                    "end": 1842
                  }
                ],
                "start": 1819,
                "end": 1844
              }
            ],
            "start": 1745,
            "end": 1847
          },
          "definite": false,
          "start": 1725,
          "end": 1847
        }
      ],
      "declare": false,
      "start": 1719,
      "end": 1848
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "process",
        "optional": false,
        "typeAnnotation": null,
        "start": 1859,
        "end": 1866
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1867,
              "end": 1868
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 1877,
                "end": 1881
              },
              "typeArguments": null,
              "start": 1877,
              "end": 1881
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1867,
            "end": 1881
          }
        ],
        "start": 1866,
        "end": 1882
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
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
                  "name": "DataEntry",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1889,
                  "end": 1898
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1899,
                        "end": 1900
                      },
                      "typeArguments": null,
                      "start": 1899,
                      "end": 1900
                    }
                  ],
                  "start": 1898,
                  "end": 1901
                },
                "start": 1889,
                "end": 1901
              },
              "start": 1889,
              "end": 1903
            },
            "start": 1887,
            "end": 1903
          },
          "start": 1883,
          "end": 1903
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1911,
                  "end": 1915
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1916,
                  "end": 1923
                },
                "optional": false,
                "computed": false,
                "start": 1911,
                "end": 1923
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
                      "name": "block",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1924,
                      "end": 1929
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "block",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1947,
                              "end": 1952
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1953,
                              "end": 1957
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1947,
                            "end": 1957
                          },
                          "operator": "in",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "handlers",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1961,
                            "end": 1969
                          },
                          "start": 1947,
                          "end": 1969
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "handlers",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1985,
                                    "end": 1993
                                  },
                                  "property": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "block",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1994,
                                      "end": 1999
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "type",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2000,
                                      "end": 2004
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1994,
                                    "end": 2004
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 1985,
                                  "end": 2005
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "block",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2006,
                                      "end": 2011
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2012,
                                      "end": 2016
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2006,
                                    "end": 2016
                                  }
                                ],
                                "optional": false,
                                "start": 1985,
                                "end": 2017
                              },
                              "directive": null,
                              "start": 1985,
                              "end": 2017
                            }
                          ],
                          "start": 1971,
                          "end": 2027
                        },
                        "alternate": null,
                        "start": 1943,
                        "end": 2027
                      }
                    ],
                    "start": 1933,
                    "end": 2033
                  },
                  "id": null,
                  "generator": false,
                  "start": 1924,
                  "end": 2033
                }
              ],
              "optional": false,
              "start": 1911,
              "end": 2034
            },
            "directive": null,
            "start": 1911,
            "end": 2035
          }
        ],
        "start": 1905,
        "end": 2037
      },
      "expression": false,
      "start": 1850,
      "end": 2037
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "process",
          "optional": false,
          "typeAnnotation": null,
          "start": 2039,
          "end": 2046
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null,
            "start": 2047,
            "end": 2051
          }
        ],
        "optional": false,
        "start": 2039,
        "end": 2052
      },
      "directive": null,
      "start": 2039,
      "end": 2053
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "process",
          "optional": false,
          "typeAnnotation": null,
          "start": 2054,
          "end": 2061
        },
        "typeArguments": null,
        "arguments": [
          {
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2065,
                      "end": 2069
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 2071,
                      "end": 2076
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2065,
                    "end": 2076
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2078,
                      "end": 2082
                    },
                    "value": {
                      "type": "Literal",
                      "value": "abc",
                      "raw": "'abc'",
                      "start": 2084,
                      "end": 2089
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2078,
                    "end": 2089
                  }
                ],
                "start": 2063,
                "end": 2091
              }
            ],
            "start": 2062,
            "end": 2092
          }
        ],
        "optional": false,
        "start": 2054,
        "end": 2093
      },
      "directive": null,
      "start": 2054,
      "end": 2094
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LetterMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 2114,
        "end": 2123
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 2128,
              "end": 2129
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2131,
                "end": 2137
              },
              "start": 2129,
              "end": 2137
            },
            "accessibility": null,
            "static": false,
            "start": 2128,
            "end": 2138
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 2139,
              "end": 2140
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2142,
                "end": 2148
              },
              "start": 2140,
              "end": 2148
            },
            "accessibility": null,
            "static": false,
            "start": 2139,
            "end": 2148
          }
        ],
        "start": 2126,
        "end": 2150
      },
      "declare": false,
      "start": 2109,
      "end": 2150
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LetterCaller",
        "optional": false,
        "typeAnnotation": null,
        "start": 2156,
        "end": 2168
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2169,
              "end": 2170
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LetterMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2185,
                  "end": 2194
                },
                "typeArguments": null,
                "start": 2185,
                "end": 2194
              },
              "start": 2179,
              "end": 2194
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2169,
            "end": 2194
          }
        ],
        "start": 2168,
        "end": 2195
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 2201,
            "end": 2202
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2206,
              "end": 2207
            },
            "typeArguments": null,
            "start": 2206,
            "end": 2207
          },
          "nameType": null,
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
                  "name": "letter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2212,
                  "end": 2218
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
                      "start": 2220,
                      "end": 2226
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2227,
                            "end": 2228
                          },
                          "typeArguments": null,
                          "start": 2227,
                          "end": 2228
                        },
                        {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "LetterMap",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2230,
                              "end": 2239
                            },
                            "typeArguments": null,
                            "start": 2230,
                            "end": 2239
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2240,
                              "end": 2241
                            },
                            "typeArguments": null,
                            "start": 2240,
                            "end": 2241
                          },
                          "start": 2230,
                          "end": 2242
                        }
                      ],
                      "start": 2226,
                      "end": 2243
                    },
                    "start": 2220,
                    "end": 2243
                  },
                  "start": 2218,
                  "end": 2243
                },
                "accessibility": null,
                "static": false,
                "start": 2212,
                "end": 2244
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "caller",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2245,
                  "end": 2251
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
                        "name": "x",
                        "optional": false,
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
                              "start": 2257,
                              "end": 2263
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2264,
                                    "end": 2265
                                  },
                                  "typeArguments": null,
                                  "start": 2264,
                                  "end": 2265
                                },
                                {
                                  "type": "TSIndexedAccessType",
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "LetterMap",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2267,
                                      "end": 2276
                                    },
                                    "typeArguments": null,
                                    "start": 2267,
                                    "end": 2276
                                  },
                                  "indexType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "P",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2277,
                                      "end": 2278
                                    },
                                    "typeArguments": null,
                                    "start": 2277,
                                    "end": 2278
                                  },
                                  "start": 2267,
                                  "end": 2279
                                }
                              ],
                              "start": 2263,
                              "end": 2280
                            },
                            "start": 2257,
                            "end": 2280
                          },
                          "start": 2255,
                          "end": 2280
                        },
                        "start": 2254,
                        "end": 2280
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2285,
                        "end": 2289
                      },
                      "start": 2282,
                      "end": 2289
                    },
                    "start": 2253,
                    "end": 2289
                  },
                  "start": 2251,
                  "end": 2289
                },
                "accessibility": null,
                "static": false,
                "start": 2245,
                "end": 2289
              }
            ],
            "start": 2210,
            "end": 2291
          },
          "optional": false,
          "readonly": null,
          "start": 2198,
          "end": 2293
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 2294,
            "end": 2295
          },
          "typeArguments": null,
          "start": 2294,
          "end": 2295
        },
        "start": 2198,
        "end": 2296
      },
      "declare": false,
      "start": 2151,
      "end": 2297
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "call",
        "optional": false,
        "typeAnnotation": null,
        "start": 2308,
        "end": 2312
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2313,
              "end": 2314
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LetterMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2329,
                  "end": 2338
                },
                "typeArguments": null,
                "start": 2329,
                "end": 2338
              },
              "start": 2323,
              "end": 2338
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2313,
            "end": 2338
          }
        ],
        "start": 2312,
        "end": 2339
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "letter",
                "optional": false,
                "typeAnnotation": null,
                "start": 2342,
                "end": 2348
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "letter",
                "optional": false,
                "typeAnnotation": null,
                "start": 2342,
                "end": 2348
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 2342,
              "end": 2348
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "caller",
                "optional": false,
                "typeAnnotation": null,
                "start": 2350,
                "end": 2356
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "caller",
                "optional": false,
                "typeAnnotation": null,
                "start": 2350,
                "end": 2356
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 2350,
              "end": 2356
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "LetterCaller",
                "optional": false,
                "typeAnnotation": null,
                "start": 2360,
                "end": 2372
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2373,
                      "end": 2374
                    },
                    "typeArguments": null,
                    "start": 2373,
                    "end": 2374
                  }
                ],
                "start": 2372,
                "end": 2375
              },
              "start": 2360,
              "end": 2375
            },
            "start": 2358,
            "end": 2375
          },
          "start": 2340,
          "end": 2375
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2378,
          "end": 2382
        },
        "start": 2376,
        "end": 2382
      },
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
                "name": "caller",
                "optional": false,
                "typeAnnotation": null,
                "start": 2387,
                "end": 2393
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "letter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2394,
                  "end": 2400
                }
              ],
              "optional": false,
              "start": 2387,
              "end": 2401
            },
            "directive": null,
            "start": 2387,
            "end": 2402
          }
        ],
        "start": 2383,
        "end": 2404
      },
      "expression": false,
      "start": 2299,
      "end": 2404
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 2411,
        "end": 2412
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 2417,
              "end": 2418
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2420,
                "end": 2426
              },
              "start": 2418,
              "end": 2426
            },
            "accessibility": null,
            "static": false,
            "start": 2417,
            "end": 2426
          }
        ],
        "start": 2415,
        "end": 2428
      },
      "declare": false,
      "start": 2406,
      "end": 2429
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 2435,
        "end": 2436
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
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 2441,
              "end": 2442
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2444,
                "end": 2450
              },
              "start": 2442,
              "end": 2450
            },
            "accessibility": null,
            "static": false,
            "start": 2441,
            "end": 2450
          }
        ],
        "start": 2439,
        "end": 2452
      },
      "declare": false,
      "start": 2430,
      "end": 2453
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ACaller",
        "optional": false,
        "typeAnnotation": null,
        "start": 2459,
        "end": 2466
      },
      "typeParameters": null,
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
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2473,
                  "end": 2474
                },
                "typeArguments": null,
                "start": 2473,
                "end": 2474
              },
              "start": 2471,
              "end": 2474
            },
            "start": 2470,
            "end": 2474
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 2479,
            "end": 2483
          },
          "start": 2476,
          "end": 2483
        },
        "start": 2469,
        "end": 2483
      },
      "declare": false,
      "start": 2454,
      "end": 2484
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BCaller",
        "optional": false,
        "typeAnnotation": null,
        "start": 2490,
        "end": 2497
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2504,
                  "end": 2505
                },
                "typeArguments": null,
                "start": 2504,
                "end": 2505
              },
              "start": 2502,
              "end": 2505
            },
            "start": 2501,
            "end": 2505
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 2510,
            "end": 2514
          },
          "start": 2507,
          "end": 2514
        },
        "start": 2500,
        "end": 2514
      },
      "declare": false,
      "start": 2485,
      "end": 2515
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
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                          "name": "letter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2537,
                          "end": 2543
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2545,
                              "end": 2546
                            },
                            "typeArguments": null,
                            "start": 2545,
                            "end": 2546
                          },
                          "start": 2543,
                          "end": 2546
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2537,
                        "end": 2547
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "caller",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2548,
                          "end": 2554
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ACaller",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2556,
                              "end": 2563
                            },
                            "typeArguments": null,
                            "start": 2556,
                            "end": 2563
                          },
                          "start": 2554,
                          "end": 2563
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2548,
                        "end": 2563
                      }
                    ],
                    "start": 2535,
                    "end": 2565
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
                          "name": "letter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2570,
                          "end": 2576
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2578,
                              "end": 2579
                            },
                            "typeArguments": null,
                            "start": 2578,
                            "end": 2579
                          },
                          "start": 2576,
                          "end": 2579
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2570,
                        "end": 2580
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "caller",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2581,
                          "end": 2587
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "BCaller",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2589,
                              "end": 2596
                            },
                            "typeArguments": null,
                            "start": 2589,
                            "end": 2596
                          },
                          "start": 2587,
                          "end": 2596
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2581,
                        "end": 2596
                      }
                    ],
                    "start": 2568,
                    "end": 2598
                  }
                ],
                "start": 2535,
                "end": 2598
              },
              "start": 2533,
              "end": 2598
            },
            "start": 2531,
            "end": 2598
          },
          "init": null,
          "definite": false,
          "start": 2531,
          "end": 2598
        }
      ],
      "declare": true,
      "start": 2517,
      "end": 2599
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 2601,
          "end": 2605
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": null,
            "start": 2606,
            "end": 2608
          }
        ],
        "optional": false,
        "start": 2601,
        "end": 2609
      },
      "directive": null,
      "start": 2601,
      "end": 2610
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ev",
        "optional": false,
        "typeAnnotation": null,
        "start": 2630,
        "end": 2632
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2633,
              "end": 2634
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DocumentEventMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2649,
                  "end": 2665
                },
                "typeArguments": null,
                "start": 2649,
                "end": 2665
              },
              "start": 2643,
              "end": 2665
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2633,
            "end": 2665
          }
        ],
        "start": 2632,
        "end": 2666
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 2672,
            "end": 2673
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2677,
              "end": 2678
            },
            "typeArguments": null,
            "start": 2677,
            "end": 2678
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2696,
                  "end": 2700
                },
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
                      "start": 2702,
                      "end": 2703
                    },
                    "typeArguments": null,
                    "start": 2702,
                    "end": 2703
                  },
                  "start": 2700,
                  "end": 2703
                },
                "accessibility": null,
                "static": false,
                "start": 2687,
                "end": 2704
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "once",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2718,
                  "end": 2722
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2725,
                    "end": 2732
                  },
                  "start": 2723,
                  "end": 2732
                },
                "accessibility": null,
                "static": false,
                "start": 2709,
                "end": 2733
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2747,
                  "end": 2755
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
                        "name": "ev",
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
                                "name": "DocumentEventMap",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2762,
                                "end": 2778
                              },
                              "typeArguments": null,
                              "start": 2762,
                              "end": 2778
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2779,
                                "end": 2780
                              },
                              "typeArguments": null,
                              "start": 2779,
                              "end": 2780
                            },
                            "start": 2762,
                            "end": 2781
                          },
                          "start": 2760,
                          "end": 2781
                        },
                        "start": 2758,
                        "end": 2781
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2786,
                        "end": 2790
                      },
                      "start": 2783,
                      "end": 2790
                    },
                    "start": 2757,
                    "end": 2790
                  },
                  "start": 2755,
                  "end": 2790
                },
                "accessibility": null,
                "static": false,
                "start": 2738,
                "end": 2791
              }
            ],
            "start": 2681,
            "end": 2793
          },
          "optional": false,
          "readonly": null,
          "start": 2669,
          "end": 2794
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 2795,
            "end": 2796
          },
          "typeArguments": null,
          "start": 2795,
          "end": 2796
        },
        "start": 2669,
        "end": 2797
      },
      "declare": false,
      "start": 2625,
      "end": 2798
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "processEvents",
        "optional": false,
        "typeAnnotation": null,
        "start": 2809,
        "end": 2822
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2823,
              "end": 2824
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DocumentEventMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2839,
                  "end": 2855
                },
                "typeArguments": null,
                "start": 2839,
                "end": 2855
              },
              "start": 2833,
              "end": 2855
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2823,
            "end": 2855
          }
        ],
        "start": 2822,
        "end": 2856
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "events",
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
                  "name": "Ev",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2865,
                  "end": 2867
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2868,
                        "end": 2869
                      },
                      "typeArguments": null,
                      "start": 2868,
                      "end": 2869
                    }
                  ],
                  "start": 2867,
                  "end": 2870
                },
                "start": 2865,
                "end": 2870
              },
              "start": 2865,
              "end": 2872
            },
            "start": 2863,
            "end": 2872
          },
          "start": 2857,
          "end": 2872
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "event",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2891,
                    "end": 2896
                  },
                  "init": null,
                  "definite": false,
                  "start": 2891,
                  "end": 2896
                }
              ],
              "declare": false,
              "start": 2885,
              "end": 2896
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "events",
              "optional": false,
              "typeAnnotation": null,
              "start": 2900,
              "end": 2906
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "document",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2918,
                        "end": 2926
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "addEventListener",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2927,
                        "end": 2943
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2918,
                      "end": 2943
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "event",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2944,
                          "end": 2949
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2950,
                          "end": 2954
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2944,
                        "end": 2954
                      },
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2957,
                            "end": 2959
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "event",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2964,
                              "end": 2969
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "callback",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2970,
                              "end": 2978
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2964,
                            "end": 2978
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ev",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2979,
                              "end": 2981
                            }
                          ],
                          "optional": false,
                          "start": 2964,
                          "end": 2982
                        },
                        "id": null,
                        "generator": false,
                        "start": 2956,
                        "end": 2982
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
                              "name": "once",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2986,
                              "end": 2990
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "event",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2992,
                                "end": 2997
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "once",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2998,
                                "end": 3002
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2992,
                              "end": 3002
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2986,
                            "end": 3002
                          }
                        ],
                        "start": 2984,
                        "end": 3004
                      }
                    ],
                    "optional": false,
                    "start": 2918,
                    "end": 3005
                  },
                  "directive": null,
                  "start": 2918,
                  "end": 3006
                }
              ],
              "start": 2908,
              "end": 3012
            },
            "start": 2880,
            "end": 3012
          }
        ],
        "start": 2874,
        "end": 3014
      },
      "expression": false,
      "start": 2800,
      "end": 3014
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createEventListener",
        "optional": false,
        "typeAnnotation": null,
        "start": 3025,
        "end": 3044
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3045,
              "end": 3046
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DocumentEventMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3061,
                  "end": 3077
                },
                "typeArguments": null,
                "start": 3061,
                "end": 3077
              },
              "start": 3055,
              "end": 3077
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3045,
            "end": 3077
          }
        ],
        "start": 3044,
        "end": 3078
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 3081,
                "end": 3085
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 3081,
                "end": 3085
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 3081,
              "end": 3085
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "once",
                "optional": false,
                "typeAnnotation": null,
                "start": 3087,
                "end": 3091
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "once",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3087,
                  "end": 3091
                },
                "right": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 3094,
                  "end": 3099
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 3087,
                "end": 3099
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 3087,
              "end": 3099
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null,
                "start": 3101,
                "end": 3109
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null,
                "start": 3101,
                "end": 3109
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 3101,
              "end": 3109
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Ev",
                "optional": false,
                "typeAnnotation": null,
                "start": 3113,
                "end": 3115
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3116,
                      "end": 3117
                    },
                    "typeArguments": null,
                    "start": 3116,
                    "end": 3117
                  }
                ],
                "start": 3115,
                "end": 3118
              },
              "start": 3113,
              "end": 3118
            },
            "start": 3111,
            "end": 3118
          },
          "start": 3079,
          "end": 3118
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Ev",
            "optional": false,
            "typeAnnotation": null,
            "start": 3121,
            "end": 3123
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3124,
                  "end": 3125
                },
                "typeArguments": null,
                "start": 3124,
                "end": 3125
              }
            ],
            "start": 3123,
            "end": 3126
          },
          "start": 3121,
          "end": 3126
        },
        "start": 3119,
        "end": 3126
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3142,
                    "end": 3146
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3142,
                    "end": 3146
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3142,
                  "end": 3146
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "once",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3148,
                    "end": 3152
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "once",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3148,
                    "end": 3152
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3148,
                  "end": 3152
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "callback",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3154,
                    "end": 3162
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "callback",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3154,
                    "end": 3162
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3154,
                  "end": 3162
                }
              ],
              "start": 3140,
              "end": 3164
            },
            "start": 3133,
            "end": 3165
          }
        ],
        "start": 3127,
        "end": 3167
      },
      "expression": false,
      "start": 3016,
      "end": 3167
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
            "name": "clickEvent",
            "optional": false,
            "typeAnnotation": null,
            "start": 3175,
            "end": 3185
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createEventListener",
              "optional": false,
              "typeAnnotation": null,
              "start": 3188,
              "end": 3207
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3214,
                      "end": 3218
                    },
                    "value": {
                      "type": "Literal",
                      "value": "click",
                      "raw": "\"click\"",
                      "start": 3220,
                      "end": 3227
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3214,
                    "end": 3227
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3233,
                      "end": 3241
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
                          "name": "ev",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3243,
                          "end": 3245
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3249,
                            "end": 3256
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3257,
                            "end": 3260
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3249,
                          "end": 3260
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3261,
                            "end": 3263
                          }
                        ],
                        "optional": false,
                        "start": 3249,
                        "end": 3264
                      },
                      "id": null,
                      "generator": false,
                      "start": 3243,
                      "end": 3264
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3233,
                    "end": 3264
                  }
                ],
                "start": 3208,
                "end": 3267
              }
            ],
            "optional": false,
            "start": 3188,
            "end": 3268
          },
          "definite": false,
          "start": 3175,
          "end": 3268
        }
      ],
      "declare": false,
      "start": 3169,
      "end": 3269
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
            "name": "scrollEvent",
            "optional": false,
            "typeAnnotation": null,
            "start": 3277,
            "end": 3288
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createEventListener",
              "optional": false,
              "typeAnnotation": null,
              "start": 3291,
              "end": 3310
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3317,
                      "end": 3321
                    },
                    "value": {
                      "type": "Literal",
                      "value": "scroll",
                      "raw": "\"scroll\"",
                      "start": 3323,
                      "end": 3331
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3317,
                    "end": 3331
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3337,
                      "end": 3345
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
                          "name": "ev",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3347,
                          "end": 3349
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3353,
                            "end": 3360
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3361,
                            "end": 3364
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3353,
                          "end": 3364
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3365,
                            "end": 3367
                          }
                        ],
                        "optional": false,
                        "start": 3353,
                        "end": 3368
                      },
                      "id": null,
                      "generator": false,
                      "start": 3347,
                      "end": 3368
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3337,
                    "end": 3368
                  }
                ],
                "start": 3311,
                "end": 3371
              }
            ],
            "optional": false,
            "start": 3291,
            "end": 3372
          },
          "definite": false,
          "start": 3277,
          "end": 3372
        }
      ],
      "declare": false,
      "start": 3271,
      "end": 3373
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "processEvents",
          "optional": false,
          "typeAnnotation": null,
          "start": 3375,
          "end": 3388
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "clickEvent",
                "optional": false,
                "typeAnnotation": null,
                "start": 3390,
                "end": 3400
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "scrollEvent",
                "optional": false,
                "typeAnnotation": null,
                "start": 3402,
                "end": 3413
              }
            ],
            "start": 3389,
            "end": 3414
          }
        ],
        "optional": false,
        "start": 3375,
        "end": 3415
      },
      "directive": null,
      "start": 3375,
      "end": 3416
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "processEvents",
          "optional": false,
          "typeAnnotation": null,
          "start": 3418,
          "end": 3431
        },
        "typeArguments": null,
        "arguments": [
          {
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3440,
                      "end": 3444
                    },
                    "value": {
                      "type": "Literal",
                      "value": "click",
                      "raw": "\"click\"",
                      "start": 3446,
                      "end": 3453
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3440,
                    "end": 3453
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3455,
                      "end": 3463
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
                          "name": "ev",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3465,
                          "end": 3467
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3471,
                            "end": 3478
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3479,
                            "end": 3482
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3471,
                          "end": 3482
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3483,
                            "end": 3485
                          }
                        ],
                        "optional": false,
                        "start": 3471,
                        "end": 3486
                      },
                      "id": null,
                      "generator": false,
                      "start": 3465,
                      "end": 3486
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3455,
                    "end": 3486
                  }
                ],
                "start": 3438,
                "end": 3488
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3496,
                      "end": 3500
                    },
                    "value": {
                      "type": "Literal",
                      "value": "scroll",
                      "raw": "\"scroll\"",
                      "start": 3502,
                      "end": 3510
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3496,
                    "end": 3510
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3512,
                      "end": 3520
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
                          "name": "ev",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3522,
                          "end": 3524
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3528,
                            "end": 3535
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3536,
                            "end": 3539
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3528,
                          "end": 3539
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3540,
                            "end": 3542
                          }
                        ],
                        "optional": false,
                        "start": 3528,
                        "end": 3543
                      },
                      "id": null,
                      "generator": false,
                      "start": 3522,
                      "end": 3543
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3512,
                    "end": 3543
                  }
                ],
                "start": 3494,
                "end": 3545
              }
            ],
            "start": 3432,
            "end": 3548
          }
        ],
        "optional": false,
        "start": 3418,
        "end": 3549
      },
      "directive": null,
      "start": 3418,
      "end": 3550
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3574,
        "end": 3577
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArgMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 3591,
              "end": 3597
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
                    "name": "sum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3610,
                    "end": 3613
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3616,
                            "end": 3617
                          },
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 3619,
                            "end": 3625
                          },
                          "optional": false,
                          "start": 3616,
                          "end": 3625
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3627,
                            "end": 3628
                          },
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 3630,
                            "end": 3636
                          },
                          "optional": false,
                          "start": 3627,
                          "end": 3636
                        }
                      ],
                      "start": 3615,
                      "end": 3637
                    },
                    "start": 3613,
                    "end": 3637
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3610,
                  "end": 3638
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "concat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3647,
                    "end": 3653
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3656,
                            "end": 3657
                          },
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 3659,
                            "end": 3665
                          },
                          "optional": false,
                          "start": 3656,
                          "end": 3665
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3667,
                            "end": 3668
                          },
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 3670,
                            "end": 3676
                          },
                          "optional": false,
                          "start": 3667,
                          "end": 3676
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3678,
                            "end": 3679
                          },
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 3681,
                            "end": 3687
                          },
                          "optional": false,
                          "start": 3678,
                          "end": 3687
                        }
                      ],
                      "start": 3655,
                      "end": 3688
                    },
                    "start": 3653,
                    "end": 3688
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3647,
                  "end": 3688
                }
              ],
              "start": 3600,
              "end": 3694
            },
            "declare": false,
            "start": 3586,
            "end": 3694
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Keys",
              "optional": false,
              "typeAnnotation": null,
              "start": 3704,
              "end": 3708
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3717,
                  "end": 3723
                },
                "typeArguments": null,
                "start": 3717,
                "end": 3723
              },
              "start": 3711,
              "end": 3723
            },
            "declare": false,
            "start": 3699,
            "end": 3724
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
                  "name": "funs",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3744,
                        "end": 3745
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Keys",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3749,
                          "end": 3753
                        },
                        "typeArguments": null,
                        "start": 3749,
                        "end": 3753
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3760,
                              "end": 3764
                            },
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
                                    "name": "ArgMap",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3766,
                                    "end": 3772
                                  },
                                  "typeArguments": null,
                                  "start": 3766,
                                  "end": 3772
                                },
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3773,
                                    "end": 3774
                                  },
                                  "typeArguments": null,
                                  "start": 3773,
                                  "end": 3774
                                },
                                "start": 3766,
                                "end": 3775
                              },
                              "start": 3764,
                              "end": 3775
                            },
                            "value": null,
                            "start": 3757,
                            "end": 3775
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 3780,
                            "end": 3784
                          },
                          "start": 3777,
                          "end": 3784
                        },
                        "start": 3756,
                        "end": 3784
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 3741,
                      "end": 3786
                    },
                    "start": 3739,
                    "end": 3786
                  },
                  "start": 3735,
                  "end": 3786
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3799,
                        "end": 3802
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3805,
                            "end": 3806
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3808,
                            "end": 3809
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3814,
                            "end": 3815
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3818,
                            "end": 3819
                          },
                          "start": 3814,
                          "end": 3819
                        },
                        "id": null,
                        "generator": false,
                        "start": 3804,
                        "end": 3819
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3799,
                      "end": 3819
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "concat",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3829,
                        "end": 3835
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3838,
                            "end": 3839
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3841,
                            "end": 3842
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3844,
                            "end": 3845
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3850,
                              "end": 3851
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3854,
                              "end": 3855
                            },
                            "start": 3850,
                            "end": 3855
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3858,
                            "end": 3859
                          },
                          "start": 3850,
                          "end": 3859
                        },
                        "id": null,
                        "generator": false,
                        "start": 3837,
                        "end": 3859
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3829,
                      "end": 3859
                    }
                  ],
                  "start": 3789,
                  "end": 3865
                },
                "definite": false,
                "start": 3735,
                "end": 3865
              }
            ],
            "declare": false,
            "start": 3729,
            "end": 3865
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null,
              "start": 3879,
              "end": 3884
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
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3885,
                    "end": 3886
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Keys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3895,
                      "end": 3899
                    },
                    "typeArguments": null,
                    "start": 3895,
                    "end": 3899
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3885,
                  "end": 3899
                }
              ],
              "start": 3884,
              "end": 3900
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "funKey",
                "optional": false,
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
                      "start": 3909,
                      "end": 3910
                    },
                    "typeArguments": null,
                    "start": 3909,
                    "end": 3910
                  },
                  "start": 3907,
                  "end": 3910
                },
                "start": 3901,
                "end": 3910
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3915,
                  "end": 3919
                },
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
                        "name": "ArgMap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3921,
                        "end": 3927
                      },
                      "typeArguments": null,
                      "start": 3921,
                      "end": 3927
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3928,
                        "end": 3929
                      },
                      "typeArguments": null,
                      "start": 3928,
                      "end": 3929
                    },
                    "start": 3921,
                    "end": 3930
                  },
                  "start": 3919,
                  "end": 3930
                },
                "value": null,
                "start": 3912,
                "end": 3930
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3948,
                        "end": 3950
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "funs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3953,
                          "end": 3957
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "funKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3958,
                          "end": 3964
                        },
                        "optional": false,
                        "computed": true,
                        "start": 3953,
                        "end": 3965
                      },
                      "definite": false,
                      "start": 3948,
                      "end": 3965
                    }
                  ],
                  "declare": false,
                  "start": 3942,
                  "end": 3966
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3975,
                      "end": 3977
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3981,
                          "end": 3985
                        },
                        "start": 3978,
                        "end": 3985
                      }
                    ],
                    "optional": false,
                    "start": 3975,
                    "end": 3986
                  },
                  "directive": null,
                  "start": 3975,
                  "end": 3987
                }
              ],
              "start": 3932,
              "end": 3993
            },
            "expression": false,
            "start": 3870,
            "end": 3993
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4004,
                  "end": 4006
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "apply",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4009,
                    "end": 4014
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "sum",
                      "raw": "'sum'",
                      "start": 4015,
                      "end": 4020
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4022,
                      "end": 4023
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 4025,
                      "end": 4026
                    }
                  ],
                  "optional": false,
                  "start": 4009,
                  "end": 4027
                },
                "definite": false,
                "start": 4004,
                "end": 4027
              }
            ],
            "declare": false,
            "start": 3998,
            "end": 4027
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4038,
                  "end": 4040
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "apply",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4043,
                    "end": 4048
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "concat",
                      "raw": "'concat'",
                      "start": 4049,
                      "end": 4057
                    },
                    {
                      "type": "Literal",
                      "value": "str1",
                      "raw": "'str1'",
                      "start": 4059,
                      "end": 4065
                    },
                    {
                      "type": "Literal",
                      "value": "str2",
                      "raw": "'str2'",
                      "start": 4067,
                      "end": 4073
                    },
                    {
                      "type": "Literal",
                      "value": "str3",
                      "raw": "'str3'",
                      "start": 4075,
                      "end": 4081
                    }
                  ],
                  "optional": false,
                  "start": 4043,
                  "end": 4083
                },
                "definite": false,
                "start": 4038,
                "end": 4083
              }
            ],
            "declare": false,
            "start": 4032,
            "end": 4083
          }
        ],
        "start": 3580,
        "end": 4085
      },
      "expression": false,
      "start": 3565,
      "end": 4085
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArgMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 4114,
        "end": 4120
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
              "start": 4125,
              "end": 4126
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4128,
                "end": 4134
              },
              "start": 4126,
              "end": 4134
            },
            "accessibility": null,
            "static": false,
            "start": 4125,
            "end": 4135
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
              "start": 4136,
              "end": 4137
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4139,
                "end": 4145
              },
              "start": 4137,
              "end": 4145
            },
            "accessibility": null,
            "static": false,
            "start": 4136,
            "end": 4145
          }
        ],
        "start": 4123,
        "end": 4147
      },
      "declare": false,
      "start": 4109,
      "end": 4148
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func",
        "optional": false,
        "typeAnnotation": null,
        "start": 4154,
        "end": 4158
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4159,
              "end": 4160
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4175,
                  "end": 4181
                },
                "typeArguments": null,
                "start": 4175,
                "end": 4181
              },
              "start": 4169,
              "end": 4181
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4159,
            "end": 4181
          }
        ],
        "start": 4158,
        "end": 4182
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
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
                    "name": "ArgMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4189,
                    "end": 4195
                  },
                  "typeArguments": null,
                  "start": 4189,
                  "end": 4195
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4196,
                    "end": 4197
                  },
                  "typeArguments": null,
                  "start": 4196,
                  "end": 4197
                },
                "start": 4189,
                "end": 4198
              },
              "start": 4187,
              "end": 4198
            },
            "start": 4186,
            "end": 4198
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 4203,
            "end": 4207
          },
          "start": 4200,
          "end": 4207
        },
        "start": 4185,
        "end": 4207
      },
      "declare": false,
      "start": 4149,
      "end": 4208
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Funcs",
        "optional": false,
        "typeAnnotation": null,
        "start": 4214,
        "end": 4219
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 4225,
          "end": 4226
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArgMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 4236,
              "end": 4242
            },
            "typeArguments": null,
            "start": 4236,
            "end": 4242
          },
          "start": 4230,
          "end": 4242
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Func",
            "optional": false,
            "typeAnnotation": null,
            "start": 4245,
            "end": 4249
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4250,
                  "end": 4251
                },
                "typeArguments": null,
                "start": 4250,
                "end": 4251
              }
            ],
            "start": 4249,
            "end": 4252
          },
          "start": 4245,
          "end": 4252
        },
        "optional": false,
        "readonly": null,
        "start": 4222,
        "end": 4254
      },
      "declare": false,
      "start": 4209,
      "end": 4255
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4266,
        "end": 4268
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4269,
              "end": 4270
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4285,
                  "end": 4291
                },
                "typeArguments": null,
                "start": 4285,
                "end": 4291
              },
              "start": 4279,
              "end": 4291
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4269,
            "end": 4291
          }
        ],
        "start": 4268,
        "end": 4292
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "funcs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Funcs",
                "optional": false,
                "typeAnnotation": null,
                "start": 4300,
                "end": 4305
              },
              "typeArguments": null,
              "start": 4300,
              "end": 4305
            },
            "start": 4298,
            "end": 4305
          },
          "start": 4293,
          "end": 4305
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
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
                "start": 4312,
                "end": 4313
              },
              "typeArguments": null,
              "start": 4312,
              "end": 4313
            },
            "start": 4310,
            "end": 4313
          },
          "start": 4307,
          "end": 4313
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4320,
                  "end": 4326
                },
                "typeArguments": null,
                "start": 4320,
                "end": 4326
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4327,
                  "end": 4328
                },
                "typeArguments": null,
                "start": 4327,
                "end": 4328
              },
              "start": 4320,
              "end": 4329
            },
            "start": 4318,
            "end": 4329
          },
          "start": 4315,
          "end": 4329
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "funcs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4337,
                  "end": 4342
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4343,
                  "end": 4346
                },
                "optional": false,
                "computed": true,
                "start": 4337,
                "end": 4347
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4348,
                  "end": 4351
                }
              ],
              "optional": false,
              "start": 4337,
              "end": 4352
            },
            "directive": null,
            "start": 4337,
            "end": 4353
          }
        ],
        "start": 4331,
        "end": 4355
      },
      "expression": false,
      "start": 4257,
      "end": 4355
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4366,
        "end": 4368
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4369,
              "end": 4370
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4385,
                  "end": 4391
                },
                "typeArguments": null,
                "start": 4385,
                "end": 4391
              },
              "start": 4379,
              "end": 4391
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4369,
            "end": 4391
          }
        ],
        "start": 4368,
        "end": 4392
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "funcs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Funcs",
                "optional": false,
                "typeAnnotation": null,
                "start": 4400,
                "end": 4405
              },
              "typeArguments": null,
              "start": 4400,
              "end": 4405
            },
            "start": 4398,
            "end": 4405
          },
          "start": 4393,
          "end": 4405
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
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
                "start": 4412,
                "end": 4413
              },
              "typeArguments": null,
              "start": 4412,
              "end": 4413
            },
            "start": 4410,
            "end": 4413
          },
          "start": 4407,
          "end": 4413
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4420,
                  "end": 4426
                },
                "typeArguments": null,
                "start": 4420,
                "end": 4426
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4427,
                  "end": 4428
                },
                "typeArguments": null,
                "start": 4427,
                "end": 4428
              },
              "start": 4420,
              "end": 4429
            },
            "start": 4418,
            "end": 4429
          },
          "start": 4415,
          "end": 4429
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4443,
                  "end": 4447
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "funcs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4450,
                    "end": 4455
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4456,
                    "end": 4459
                  },
                  "optional": false,
                  "computed": true,
                  "start": 4450,
                  "end": 4460
                },
                "definite": false,
                "start": 4443,
                "end": 4460
              }
            ],
            "declare": false,
            "start": 4437,
            "end": 4461
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 4484,
                "end": 4488
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4489,
                  "end": 4492
                }
              ],
              "optional": false,
              "start": 4484,
              "end": 4493
            },
            "directive": null,
            "start": 4484,
            "end": 4494
          }
        ],
        "start": 4431,
        "end": 4496
      },
      "expression": false,
      "start": 4357,
      "end": 4496
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 4507,
        "end": 4509
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4510,
              "end": 4511
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4526,
                  "end": 4532
                },
                "typeArguments": null,
                "start": 4526,
                "end": 4532
              },
              "start": 4520,
              "end": 4532
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4510,
            "end": 4532
          }
        ],
        "start": 4509,
        "end": 4533
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "funcs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Funcs",
                "optional": false,
                "typeAnnotation": null,
                "start": 4541,
                "end": 4546
              },
              "typeArguments": null,
              "start": 4541,
              "end": 4546
            },
            "start": 4539,
            "end": 4546
          },
          "start": 4534,
          "end": 4546
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
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
                "start": 4553,
                "end": 4554
              },
              "typeArguments": null,
              "start": 4553,
              "end": 4554
            },
            "start": 4551,
            "end": 4554
          },
          "start": 4548,
          "end": 4554
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4561,
                  "end": 4567
                },
                "typeArguments": null,
                "start": 4561,
                "end": 4567
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4568,
                  "end": 4569
                },
                "typeArguments": null,
                "start": 4568,
                "end": 4569
              },
              "start": 4561,
              "end": 4570
            },
            "start": 4559,
            "end": 4570
          },
          "start": 4556,
          "end": 4570
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Func",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4590,
                        "end": 4594
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4595,
                              "end": 4596
                            },
                            "typeArguments": null,
                            "start": 4595,
                            "end": 4596
                          }
                        ],
                        "start": 4594,
                        "end": 4597
                      },
                      "start": 4590,
                      "end": 4597
                    },
                    "start": 4588,
                    "end": 4597
                  },
                  "start": 4584,
                  "end": 4597
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "funcs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4600,
                    "end": 4605
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4606,
                    "end": 4609
                  },
                  "optional": false,
                  "computed": true,
                  "start": 4600,
                  "end": 4610
                },
                "definite": false,
                "start": 4584,
                "end": 4610
              }
            ],
            "declare": false,
            "start": 4578,
            "end": 4611
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 4616,
                "end": 4620
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4621,
                  "end": 4624
                }
              ],
              "optional": false,
              "start": 4616,
              "end": 4625
            },
            "directive": null,
            "start": 4616,
            "end": 4626
          }
        ],
        "start": 4572,
        "end": 4628
      },
      "expression": false,
      "start": 4498,
      "end": 4628
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 4639,
        "end": 4641
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4642,
              "end": 4643
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4658,
                  "end": 4664
                },
                "typeArguments": null,
                "start": 4658,
                "end": 4664
              },
              "start": 4652,
              "end": 4664
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4642,
            "end": 4664
          }
        ],
        "start": 4641,
        "end": 4665
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                  "name": "Funcs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4669,
                  "end": 4674
                },
                "typeArguments": null,
                "start": 4669,
                "end": 4674
              },
              "indexType": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ArgMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4681,
                    "end": 4687
                  },
                  "typeArguments": null,
                  "start": 4681,
                  "end": 4687
                },
                "start": 4675,
                "end": 4687
              },
              "start": 4669,
              "end": 4688
            },
            "start": 4667,
            "end": 4688
          },
          "start": 4666,
          "end": 4688
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                  "name": "Funcs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4693,
                  "end": 4698
                },
                "typeArguments": null,
                "start": 4693,
                "end": 4698
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4699,
                  "end": 4700
                },
                "typeArguments": null,
                "start": 4699,
                "end": 4700
              },
              "start": 4693,
              "end": 4701
            },
            "start": 4691,
            "end": 4701
          },
          "start": 4690,
          "end": 4701
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 4709,
                "end": 4710
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 4713,
                "end": 4714
              },
              "start": 4709,
              "end": 4714
            },
            "directive": null,
            "start": 4709,
            "end": 4715
          }
        ],
        "start": 4703,
        "end": 4717
      },
      "expression": false,
      "start": 4630,
      "end": 4717
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 4751,
        "end": 4756
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
              "name": "someKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 4763,
              "end": 4770
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4780,
                      "end": 4784
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4786,
                        "end": 4792
                      },
                      "start": 4784,
                      "end": 4792
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4780,
                    "end": 4793
                  }
                ],
                "start": 4772,
                "end": 4799
              },
              "start": 4770,
              "end": 4799
            },
            "accessibility": null,
            "static": false,
            "start": 4763,
            "end": 4799
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "someOtherKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 4804,
              "end": 4816
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4826,
                      "end": 4830
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4832,
                        "end": 4838
                      },
                      "start": 4830,
                      "end": 4838
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4826,
                    "end": 4839
                  }
                ],
                "start": 4818,
                "end": 4845
              },
              "start": 4816,
              "end": 4845
            },
            "accessibility": null,
            "static": false,
            "start": 4804,
            "end": 4845
          }
        ],
        "start": 4757,
        "end": 4847
      },
      "declare": false,
      "start": 4741,
      "end": 4847
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
            "name": "ref",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyObj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4860,
                  "end": 4865
                },
                "typeArguments": null,
                "start": 4860,
                "end": 4865
              },
              "start": 4858,
              "end": 4865
            },
            "start": 4855,
            "end": 4865
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4874,
                  "end": 4881
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4885,
                        "end": 4889
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 4891,
                        "end": 4893
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4885,
                      "end": 4893
                    }
                  ],
                  "start": 4883,
                  "end": 4895
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4874,
                "end": 4895
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someOtherKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4901,
                  "end": 4913
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4917,
                        "end": 4921
                      },
                      "value": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 4923,
                        "end": 4925
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4917,
                      "end": 4925
                    }
                  ],
                  "start": 4915,
                  "end": 4927
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4901,
                "end": 4927
              }
            ],
            "start": 4868,
            "end": 4929
          },
          "definite": false,
          "start": 4855,
          "end": 4929
        }
      ],
      "declare": false,
      "start": 4849,
      "end": 4930
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 4941,
        "end": 4945
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4946,
              "end": 4947
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyObj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4962,
                  "end": 4967
                },
                "typeArguments": null,
                "start": 4962,
                "end": 4967
              },
              "start": 4956,
              "end": 4967
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4946,
            "end": 4967
          }
        ],
        "start": 4945,
        "end": 4968
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
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
                "start": 4972,
                "end": 4973
              },
              "typeArguments": null,
              "start": 4972,
              "end": 4973
            },
            "start": 4970,
            "end": 4973
          },
          "start": 4969,
          "end": 4973
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyObj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4976,
                    "end": 4981
                  },
                  "typeArguments": null,
                  "start": 4976,
                  "end": 4981
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4982,
                    "end": 4983
                  },
                  "typeArguments": null,
                  "start": 4982,
                  "end": 4983
                },
                "start": 4976,
                "end": 4984
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "name",
                  "raw": "'name'",
                  "start": 4985,
                  "end": 4991
                },
                "start": 4985,
                "end": 4991
              },
              "start": 4976,
              "end": 4992
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 4995,
              "end": 5004
            }
          ],
          "start": 4976,
          "end": 5004
        },
        "start": 4974,
        "end": 5004
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "myObj",
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
                          "name": "Partial",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5024,
                          "end": 5031
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyObj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5032,
                                "end": 5037
                              },
                              "typeArguments": null,
                              "start": 5032,
                              "end": 5037
                            }
                          ],
                          "start": 5031,
                          "end": 5038
                        },
                        "start": 5024,
                        "end": 5038
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5039,
                          "end": 5040
                        },
                        "typeArguments": null,
                        "start": 5039,
                        "end": 5040
                      },
                      "start": 5024,
                      "end": 5041
                    },
                    "start": 5022,
                    "end": 5041
                  },
                  "start": 5017,
                  "end": 5041
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ref",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5044,
                    "end": 5047
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5048,
                    "end": 5049
                  },
                  "optional": false,
                  "computed": true,
                  "start": 5044,
                  "end": 5050
                },
                "definite": false,
                "start": 5017,
                "end": 5050
              }
            ],
            "declare": false,
            "start": 5011,
            "end": 5051
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "myObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 5060,
              "end": 5065
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myObj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5082,
                      "end": 5087
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5088,
                      "end": 5092
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5082,
                    "end": 5092
                  },
                  "start": 5075,
                  "end": 5093
                }
              ],
              "start": 5067,
              "end": 5099
            },
            "alternate": null,
            "start": 5056,
            "end": 5099
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
                  "name": "myObj2",
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
                          "name": "Partial",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5118,
                          "end": 5125
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyObj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5126,
                                "end": 5131
                              },
                              "typeArguments": null,
                              "start": 5126,
                              "end": 5131
                            }
                          ],
                          "start": 5125,
                          "end": 5132
                        },
                        "start": 5118,
                        "end": 5132
                      },
                      "indexType": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyObj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5139,
                            "end": 5144
                          },
                          "typeArguments": null,
                          "start": 5139,
                          "end": 5144
                        },
                        "start": 5133,
                        "end": 5144
                      },
                      "start": 5118,
                      "end": 5145
                    },
                    "start": 5116,
                    "end": 5145
                  },
                  "start": 5110,
                  "end": 5145
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ref",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5148,
                    "end": 5151
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5152,
                    "end": 5153
                  },
                  "optional": false,
                  "computed": true,
                  "start": 5148,
                  "end": 5154
                },
                "definite": false,
                "start": 5110,
                "end": 5154
              }
            ],
            "declare": false,
            "start": 5104,
            "end": 5155
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "myObj2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5164,
              "end": 5170
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myObj2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5187,
                      "end": 5193
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5194,
                      "end": 5198
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5187,
                    "end": 5198
                  },
                  "start": 5180,
                  "end": 5199
                }
              ],
              "start": 5172,
              "end": 5205
            },
            "alternate": null,
            "start": 5160,
            "end": 5205
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 5217,
              "end": 5226
            },
            "start": 5210,
            "end": 5227
          }
        ],
        "start": 5005,
        "end": 5229
      },
      "expression": false,
      "start": 4932,
      "end": 5229
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5263,
        "end": 5266
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 5273,
              "end": 5276
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5279,
                "end": 5285
              },
              "start": 5277,
              "end": 5285
            },
            "accessibility": null,
            "static": false,
            "start": 5273,
            "end": 5285
          }
        ],
        "start": 5267,
        "end": 5287
      },
      "declare": false,
      "start": 5253,
      "end": 5287
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5298,
        "end": 5301
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
              "start": 5302,
              "end": 5303
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5318,
                  "end": 5321
                },
                "typeArguments": null,
                "start": 5318,
                "end": 5321
              },
              "start": 5312,
              "end": 5321
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5302,
            "end": 5321
          }
        ],
        "start": 5301,
        "end": 5322
      },
      "params": [
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5329,
                "end": 5330
              },
              "typeArguments": null,
              "start": 5329,
              "end": 5330
            },
            "start": 5327,
            "end": 5330
          },
          "start": 5323,
          "end": 5330
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Required",
                "optional": false,
                "typeAnnotation": null,
                "start": 5335,
                "end": 5343
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5344,
                      "end": 5347
                    },
                    "typeArguments": null,
                    "start": 5344,
                    "end": 5347
                  }
                ],
                "start": 5343,
                "end": 5348
              },
              "start": 5335,
              "end": 5348
            },
            "start": 5333,
            "end": 5348
          },
          "start": 5332,
          "end": 5348
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
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 5356,
                "end": 5359
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5360,
                    "end": 5361
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5362,
                    "end": 5366
                  },
                  "optional": false,
                  "computed": true,
                  "start": 5360,
                  "end": 5367
                }
              ],
              "optional": false,
              "start": 5356,
              "end": 5368
            },
            "directive": null,
            "start": 5356,
            "end": 5369
          }
        ],
        "start": 5350,
        "end": 5371
      },
      "expression": false,
      "start": 5289,
      "end": 5371
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 5390,
        "end": 5393
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 5397,
              "end": 5403
            },
            "start": 5395,
            "end": 5403
          },
          "start": 5394,
          "end": 5403
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 5406,
          "end": 5410
        },
        "start": 5404,
        "end": 5410
      },
      "body": null,
      "expression": false,
      "start": 5373,
      "end": 5411
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeCompleteLookupMapping",
        "optional": false,
        "typeAnnotation": null,
        "start": 5452,
        "end": 5477
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
              "start": 5478,
              "end": 5479
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 5488,
                "end": 5501
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 5502,
                    "end": 5505
                  }
                ],
                "start": 5501,
                "end": 5506
              },
              "start": 5488,
              "end": 5506
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5478,
            "end": 5506
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Attr",
              "optional": false,
              "typeAnnotation": null,
              "start": 5508,
              "end": 5512
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
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
                    "start": 5527,
                    "end": 5528
                  },
                  "typeArguments": null,
                  "start": 5527,
                  "end": 5528
                },
                "indexType": {
                  "type": "TSNumberKeyword",
                  "start": 5529,
                  "end": 5535
                },
                "start": 5527,
                "end": 5536
              },
              "start": 5521,
              "end": 5536
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5508,
            "end": 5536
          }
        ],
        "start": 5477,
        "end": 5537
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ops",
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
                "start": 5548,
                "end": 5549
              },
              "typeArguments": null,
              "start": 5548,
              "end": 5549
            },
            "start": 5546,
            "end": 5549
          },
          "start": 5543,
          "end": 5549
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attr",
                "optional": false,
                "typeAnnotation": null,
                "start": 5557,
                "end": 5561
              },
              "typeArguments": null,
              "start": 5557,
              "end": 5561
            },
            "start": 5555,
            "end": 5561
          },
          "start": 5551,
          "end": 5561
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "Item",
            "optional": false,
            "typeAnnotation": null,
            "start": 5567,
            "end": 5571
          },
          "constraint": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5575,
                "end": 5576
              },
              "typeArguments": null,
              "start": 5575,
              "end": 5576
            },
            "indexType": {
              "type": "TSNumberKeyword",
              "start": 5577,
              "end": 5583
            },
            "start": 5575,
            "end": 5584
          },
          "nameType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null,
                "start": 5587,
                "end": 5591
              },
              "typeArguments": null,
              "start": 5587,
              "end": 5591
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attr",
                "optional": false,
                "typeAnnotation": null,
                "start": 5592,
                "end": 5596
              },
              "typeArguments": null,
              "start": 5592,
              "end": 5596
            },
            "start": 5587,
            "end": 5597
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 5600,
              "end": 5604
            },
            "typeArguments": null,
            "start": 5600,
            "end": 5604
          },
          "optional": false,
          "readonly": null,
          "start": 5564,
          "end": 5606
        },
        "start": 5562,
        "end": 5606
      },
      "body": null,
      "expression": false,
      "start": 5435,
      "end": 5607
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
            "name": "ALL_BARS",
            "optional": false,
            "typeAnnotation": null,
            "start": 5615,
            "end": 5623
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5629,
                        "end": 5633
                      },
                      "value": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 5635,
                        "end": 5638
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 5629,
                      "end": 5638
                    }
                  ],
                  "start": 5627,
                  "end": 5639
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5642,
                        "end": 5646
                      },
                      "value": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 5648,
                        "end": 5651
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 5642,
                      "end": 5651
                    }
                  ],
                  "start": 5641,
                  "end": 5652
                }
              ],
              "start": 5626,
              "end": 5653
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 5657,
                "end": 5662
              },
              "typeArguments": null,
              "start": 5657,
              "end": 5662
            },
            "start": 5626,
            "end": 5662
          },
          "definite": false,
          "start": 5615,
          "end": 5662
        }
      ],
      "declare": false,
      "start": 5609,
      "end": 5663
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
            "name": "BAR_LOOKUP",
            "optional": false,
            "typeAnnotation": null,
            "start": 5671,
            "end": 5681
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeCompleteLookupMapping",
              "optional": false,
              "typeAnnotation": null,
              "start": 5684,
              "end": 5709
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ALL_BARS",
                "optional": false,
                "typeAnnotation": null,
                "start": 5710,
                "end": 5718
              },
              {
                "type": "Literal",
                "value": "name",
                "raw": "'name'",
                "start": 5720,
                "end": 5726
              }
            ],
            "optional": false,
            "start": 5684,
            "end": 5727
          },
          "definite": false,
          "start": 5671,
          "end": 5727
        }
      ],
      "declare": false,
      "start": 5665,
      "end": 5728
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BarLookup",
        "optional": false,
        "typeAnnotation": null,
        "start": 5735,
        "end": 5744
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BAR_LOOKUP",
          "optional": false,
          "typeAnnotation": null,
          "start": 5754,
          "end": 5764
        },
        "typeArguments": null,
        "start": 5747,
        "end": 5764
      },
      "declare": false,
      "start": 5730,
      "end": 5765
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 5772,
        "end": 5775
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 5781,
          "end": 5782
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BarLookup",
              "optional": false,
              "typeAnnotation": null,
              "start": 5792,
              "end": 5801
            },
            "typeArguments": null,
            "start": 5792,
            "end": 5801
          },
          "start": 5786,
          "end": 5801
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BarLookup",
                "optional": false,
                "typeAnnotation": null,
                "start": 5804,
                "end": 5813
              },
              "typeArguments": null,
              "start": 5804,
              "end": 5813
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 5814,
                "end": 5815
              },
              "typeArguments": null,
              "start": 5814,
              "end": 5815
            },
            "start": 5804,
            "end": 5816
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "name",
              "raw": "'name'",
              "start": 5817,
              "end": 5823
            },
            "start": 5817,
            "end": 5823
          },
          "start": 5804,
          "end": 5824
        },
        "optional": false,
        "readonly": null,
        "start": 5778,
        "end": 5826
      },
      "declare": false,
      "start": 5767,
      "end": 5827
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Original",
        "optional": false,
        "typeAnnotation": null,
        "start": 5861,
        "end": 5869
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5874,
              "end": 5879
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
                      "name": "subProp1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5887,
                      "end": 5895
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 5897,
                        "end": 5903
                      },
                      "start": 5895,
                      "end": 5903
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 5887,
                    "end": 5904
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "subProp2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5909,
                      "end": 5917
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 5919,
                        "end": 5925
                      },
                      "start": 5917,
                      "end": 5925
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 5909,
                    "end": 5926
                  }
                ],
                "start": 5881,
                "end": 5930
              },
              "start": 5879,
              "end": 5930
            },
            "accessibility": null,
            "static": false,
            "start": 5874,
            "end": 5931
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5934,
              "end": 5939
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
                      "name": "subProp3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5947,
                      "end": 5955
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 5957,
                        "end": 5963
                      },
                      "start": 5955,
                      "end": 5963
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 5947,
                    "end": 5964
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "subProp4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5969,
                      "end": 5977
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 5979,
                        "end": 5985
                      },
                      "start": 5977,
                      "end": 5985
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 5969,
                    "end": 5986
                  }
                ],
                "start": 5941,
                "end": 5990
              },
              "start": 5939,
              "end": 5990
            },
            "accessibility": null,
            "static": false,
            "start": 5934,
            "end": 5991
          }
        ],
        "start": 5870,
        "end": 5993
      },
      "declare": false,
      "start": 5851,
      "end": 5993
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeyOfOriginal",
        "optional": false,
        "typeAnnotation": null,
        "start": 5999,
        "end": 6012
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Original",
            "optional": false,
            "typeAnnotation": null,
            "start": 6021,
            "end": 6029
          },
          "typeArguments": null,
          "start": 6021,
          "end": 6029
        },
        "start": 6015,
        "end": 6029
      },
      "declare": false,
      "start": 5994,
      "end": 6030
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NestedKeyOfOriginalFor",
        "optional": false,
        "typeAnnotation": null,
        "start": 6036,
        "end": 6058
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
              "start": 6059,
              "end": 6060
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "KeyOfOriginal",
                "optional": false,
                "typeAnnotation": null,
                "start": 6069,
                "end": 6082
              },
              "typeArguments": null,
              "start": 6069,
              "end": 6082
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6059,
            "end": 6082
          }
        ],
        "start": 6058,
        "end": 6083
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Original",
              "optional": false,
              "typeAnnotation": null,
              "start": 6092,
              "end": 6100
            },
            "typeArguments": null,
            "start": 6092,
            "end": 6100
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 6101,
              "end": 6102
            },
            "typeArguments": null,
            "start": 6101,
            "end": 6102
          },
          "start": 6092,
          "end": 6103
        },
        "start": 6086,
        "end": 6103
      },
      "declare": false,
      "start": 6031,
      "end": 6104
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SameKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 6111,
        "end": 6119
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
              "start": 6120,
              "end": 6121
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6120,
            "end": 6121
          }
        ],
        "start": 6119,
        "end": 6122
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 6130,
          "end": 6131
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
              "start": 6141,
              "end": 6142
            },
            "typeArguments": null,
            "start": 6141,
            "end": 6142
          },
          "start": 6135,
          "end": 6142
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K2",
            "optional": false,
            "typeAnnotation": null,
            "start": 6152,
            "end": 6154
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
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
                  "start": 6164,
                  "end": 6165
                },
                "typeArguments": null,
                "start": 6164,
                "end": 6165
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6166,
                  "end": 6167
                },
                "typeArguments": null,
                "start": 6166,
                "end": 6167
              },
              "start": 6164,
              "end": 6168
            },
            "start": 6158,
            "end": 6168
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 6171,
            "end": 6177
          },
          "optional": false,
          "readonly": null,
          "start": 6145,
          "end": 6182
        },
        "optional": false,
        "readonly": null,
        "start": 6125,
        "end": 6185
      },
      "declare": false,
      "start": 6106,
      "end": 6186
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MappedFromOriginal",
        "optional": false,
        "typeAnnotation": null,
        "start": 6193,
        "end": 6211
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SameKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 6214,
          "end": 6222
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Original",
                "optional": false,
                "typeAnnotation": null,
                "start": 6223,
                "end": 6231
              },
              "typeArguments": null,
              "start": 6223,
              "end": 6231
            }
          ],
          "start": 6222,
          "end": 6232
        },
        "start": 6214,
        "end": 6232
      },
      "declare": false,
      "start": 6188,
      "end": 6233
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
            "name": "getStringAndNumberFromOriginalAndMapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 6241,
            "end": 6280
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6287,
                    "end": 6288
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "KeyOfOriginal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6297,
                      "end": 6310
                    },
                    "typeArguments": null,
                    "start": 6297,
                    "end": 6310
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6287,
                  "end": 6310
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6314,
                    "end": 6315
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NestedKeyOfOriginalFor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6324,
                      "end": 6346
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6347,
                            "end": 6348
                          },
                          "typeArguments": null,
                          "start": 6347,
                          "end": 6348
                        }
                      ],
                      "start": 6346,
                      "end": 6349
                    },
                    "start": 6324,
                    "end": 6349
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6314,
                  "end": 6349
                }
              ],
              "start": 6283,
              "end": 6351
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "original",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Original",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6365,
                      "end": 6373
                    },
                    "typeArguments": null,
                    "start": 6365,
                    "end": 6373
                  },
                  "start": 6363,
                  "end": 6373
                },
                "start": 6355,
                "end": 6373
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mappedFromOriginal",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MappedFromOriginal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6397,
                      "end": 6415
                    },
                    "typeArguments": null,
                    "start": 6397,
                    "end": 6415
                  },
                  "start": 6395,
                  "end": 6415
                },
                "start": 6377,
                "end": 6415
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
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
                      "start": 6424,
                      "end": 6425
                    },
                    "typeArguments": null,
                    "start": 6424,
                    "end": 6425
                  },
                  "start": 6422,
                  "end": 6425
                },
                "start": 6419,
                "end": 6425
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nestedKey",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6440,
                      "end": 6441
                    },
                    "typeArguments": null,
                    "start": 6440,
                    "end": 6441
                  },
                  "start": 6438,
                  "end": 6441
                },
                "start": 6429,
                "end": 6441
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Original",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6446,
                          "end": 6454
                        },
                        "typeArguments": null,
                        "start": 6446,
                        "end": 6454
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6455,
                          "end": 6456
                        },
                        "typeArguments": null,
                        "start": 6455,
                        "end": 6456
                      },
                      "start": 6446,
                      "end": 6457
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6458,
                        "end": 6459
                      },
                      "typeArguments": null,
                      "start": 6458,
                      "end": 6459
                    },
                    "start": 6446,
                    "end": 6460
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MappedFromOriginal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6462,
                          "end": 6480
                        },
                        "typeArguments": null,
                        "start": 6462,
                        "end": 6480
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6481,
                          "end": 6482
                        },
                        "typeArguments": null,
                        "start": 6481,
                        "end": 6482
                      },
                      "start": 6462,
                      "end": 6483
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6484,
                        "end": 6485
                      },
                      "typeArguments": null,
                      "start": 6484,
                      "end": 6485
                    },
                    "start": 6462,
                    "end": 6486
                  }
                ],
                "start": 6445,
                "end": 6487
              },
              "start": 6443,
              "end": 6487
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "original",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6503,
                            "end": 6511
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6512,
                            "end": 6515
                          },
                          "optional": false,
                          "computed": true,
                          "start": 6503,
                          "end": 6516
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nestedKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6517,
                          "end": 6526
                        },
                        "optional": false,
                        "computed": true,
                        "start": 6503,
                        "end": 6527
                      },
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mappedFromOriginal",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6529,
                            "end": 6547
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6548,
                            "end": 6551
                          },
                          "optional": false,
                          "computed": true,
                          "start": 6529,
                          "end": 6552
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nestedKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6553,
                          "end": 6562
                        },
                        "optional": false,
                        "computed": true,
                        "start": 6529,
                        "end": 6563
                      }
                    ],
                    "start": 6502,
                    "end": 6564
                  },
                  "start": 6495,
                  "end": 6565
                }
              ],
              "start": 6491,
              "end": 6567
            },
            "id": null,
            "generator": false,
            "start": 6283,
            "end": 6567
          },
          "definite": false,
          "start": 6241,
          "end": 6567
        }
      ],
      "declare": false,
      "start": 6235,
      "end": 6568
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Config",
        "optional": false,
        "typeAnnotation": null,
        "start": 6601,
        "end": 6607
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
              "name": "string",
              "optional": false,
              "typeAnnotation": null,
              "start": 6612,
              "end": 6618
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6620,
                "end": 6626
              },
              "start": 6618,
              "end": 6626
            },
            "accessibility": null,
            "static": false,
            "start": 6612,
            "end": 6627
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null,
              "start": 6630,
              "end": 6636
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6638,
                "end": 6644
              },
              "start": 6636,
              "end": 6644
            },
            "accessibility": null,
            "static": false,
            "start": 6630,
            "end": 6645
          }
        ],
        "start": 6608,
        "end": 6647
      },
      "declare": false,
      "start": 6591,
      "end": 6647
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getConfigOrDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 6658,
        "end": 6676
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
              "start": 6677,
              "end": 6678
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Config",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6693,
                  "end": 6699
                },
                "typeArguments": null,
                "start": 6693,
                "end": 6699
              },
              "start": 6687,
              "end": 6699
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6677,
            "end": 6699
          }
        ],
        "start": 6676,
        "end": 6700
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "userConfig",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 6716,
                "end": 6723
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Config",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6724,
                      "end": 6730
                    },
                    "typeArguments": null,
                    "start": 6724,
                    "end": 6730
                  }
                ],
                "start": 6723,
                "end": 6731
              },
              "start": 6716,
              "end": 6731
            },
            "start": 6714,
            "end": 6731
          },
          "start": 6704,
          "end": 6731
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
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
                "start": 6740,
                "end": 6741
              },
              "typeArguments": null,
              "start": 6740,
              "end": 6741
            },
            "start": 6738,
            "end": 6741
          },
          "start": 6735,
          "end": 6741
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "defaultValue",
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
                  "name": "Config",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6759,
                  "end": 6765
                },
                "typeArguments": null,
                "start": 6759,
                "end": 6765
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6766,
                  "end": 6767
                },
                "typeArguments": null,
                "start": 6766,
                "end": 6767
              },
              "start": 6759,
              "end": 6768
            },
            "start": 6757,
            "end": 6768
          },
          "start": 6745,
          "end": 6768
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Config",
              "optional": false,
              "typeAnnotation": null,
              "start": 6772,
              "end": 6778
            },
            "typeArguments": null,
            "start": 6772,
            "end": 6778
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 6779,
              "end": 6780
            },
            "typeArguments": null,
            "start": 6779,
            "end": 6780
          },
          "start": 6772,
          "end": 6781
        },
        "start": 6770,
        "end": 6781
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "userValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6792,
                  "end": 6801
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "userConfig",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6804,
                    "end": 6814
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6815,
                    "end": 6818
                  },
                  "optional": false,
                  "computed": true,
                  "start": 6804,
                  "end": 6819
                },
                "definite": false,
                "start": 6792,
                "end": 6819
              }
            ],
            "declare": false,
            "start": 6786,
            "end": 6820
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
                  "name": "assertedCheck",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6830,
                  "end": 6843
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "userValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6846,
                    "end": 6855
                  },
                  "consequent": {
                    "type": "TSNonNullExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "userValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6858,
                      "end": 6867
                    },
                    "start": 6858,
                    "end": 6868
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "defaultValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6871,
                    "end": 6883
                  },
                  "start": 6846,
                  "end": 6883
                },
                "definite": false,
                "start": 6830,
                "end": 6883
              }
            ],
            "declare": false,
            "start": 6824,
            "end": 6884
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "assertedCheck",
              "optional": false,
              "typeAnnotation": null,
              "start": 6894,
              "end": 6907
            },
            "start": 6887,
            "end": 6908
          }
        ],
        "start": 6782,
        "end": 6910
      },
      "expression": false,
      "start": 6649,
      "end": 6910
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6939,
        "end": 6943
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 6950,
              "end": 6951
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6953,
                "end": 6959
              },
              "start": 6951,
              "end": 6959
            },
            "accessibility": null,
            "static": false,
            "start": 6950,
            "end": 6960
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 6963,
              "end": 6964
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6966,
                "end": 6972
              },
              "start": 6964,
              "end": 6972
            },
            "accessibility": null,
            "static": false,
            "start": 6963,
            "end": 6973
          }
        ],
        "start": 6946,
        "end": 6975
      },
      "declare": false,
      "start": 6934,
      "end": 6976
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getValueConcrete",
        "optional": false,
        "typeAnnotation": null,
        "start": 6987,
        "end": 7003
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 7004,
              "end": 7005
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7020,
                  "end": 7024
                },
                "typeArguments": null,
                "start": 7020,
                "end": 7024
              },
              "start": 7014,
              "end": 7024
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 7004,
            "end": 7024
          }
        ],
        "start": 7003,
        "end": 7025
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 7032,
                "end": 7039
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7040,
                      "end": 7044
                    },
                    "typeArguments": null,
                    "start": 7040,
                    "end": 7044
                  }
                ],
                "start": 7039,
                "end": 7045
              },
              "start": 7032,
              "end": 7045
            },
            "start": 7030,
            "end": 7045
          },
          "start": 7029,
          "end": 7045
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
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
                "start": 7052,
                "end": 7053
              },
              "typeArguments": null,
              "start": 7052,
              "end": 7053
            },
            "start": 7050,
            "end": 7053
          },
          "start": 7049,
          "end": 7053
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7057,
                  "end": 7061
                },
                "typeArguments": null,
                "start": 7057,
                "end": 7061
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7062,
                  "end": 7063
                },
                "typeArguments": null,
                "start": 7062,
                "end": 7063
              },
              "start": 7057,
              "end": 7064
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 7067,
              "end": 7076
            }
          ],
          "start": 7057,
          "end": 7076
        },
        "start": 7055,
        "end": 7076
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 7088,
                "end": 7089
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 7090,
                "end": 7091
              },
              "optional": false,
              "computed": true,
              "start": 7088,
              "end": 7092
            },
            "start": 7081,
            "end": 7093
          }
        ],
        "start": 7077,
        "end": 7095
      },
      "expression": false,
      "start": 6978,
      "end": 7095
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 31,
  "end": 7095
}
```

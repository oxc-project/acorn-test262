__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestConfig",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 84
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
              "name": "TConfig",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 98
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 109,
                    "end": 110
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 113,
                      "end": 116
                    },
                    "start": 111,
                    "end": 116
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 109,
                  "end": 117
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 119
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 122,
                      "end": 125
                    },
                    "start": 120,
                    "end": 125
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 118,
                  "end": 126
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 128
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 131,
                      "end": 134
                    },
                    "start": 129,
                    "end": 134
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 127,
                  "end": 134
                }
              ],
              "start": 107,
              "end": 136
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 85,
            "end": 136
          }
        ],
        "start": 84,
        "end": 137
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
                "name": "TConfig",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 156
              },
              "typeArguments": null,
              "start": 149,
              "end": 156
            },
            "start": 147,
            "end": 156
          },
          "start": 141,
          "end": 156
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Omit",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 176
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TConfig",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 177,
                          "end": 184
                        },
                        "typeArguments": null,
                        "start": 177,
                        "end": 184
                      },
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "a",
                              "raw": "\"a\"",
                              "start": 186,
                              "end": 189
                            },
                            "start": 186,
                            "end": 189
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "b",
                              "raw": "\"b\"",
                              "start": 192,
                              "end": 195
                            },
                            "start": 192,
                            "end": 195
                          }
                        ],
                        "start": 186,
                        "end": 195
                      }
                    ],
                    "start": 176,
                    "end": 196
                  },
                  "start": 172,
                  "end": 196
                },
                "start": 166,
                "end": 196
              },
              "extendsType": {
                "type": "TSNeverKeyword",
                "start": 205,
                "end": 210
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 213,
                  "end": 217
                },
                "start": 213,
                "end": 217
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 220,
                  "end": 225
                },
                "start": 220,
                "end": 225
              },
              "start": 166,
              "end": 225
            },
            "start": 164,
            "end": 225
          },
          "start": 160,
          "end": 225
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 230,
          "end": 234
        },
        "start": 228,
        "end": 234
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 235
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestConfig",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 247
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 258
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 260,
                  "end": 267
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 257,
                "end": 267
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 274
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 303,
                          "end": 306
                        },
                        "start": 296,
                        "end": 307
                      }
                    ],
                    "start": 288,
                    "end": 313
                  },
                  "expression": false,
                  "start": 276,
                  "end": 313
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 273,
                "end": 313
              }
            ],
            "start": 251,
            "end": 318
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 322,
            "end": 326
          }
        ],
        "optional": false,
        "start": 237,
        "end": 329
      },
      "directive": null,
      "start": 237,
      "end": 330
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestConfig",
          "optional": false,
          "typeAnnotation": null,
          "start": 332,
          "end": 342
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 353
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 355,
                  "end": 362
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 352,
                "end": 362
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 369
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 398,
                          "end": 401
                        },
                        "start": 391,
                        "end": 402
                      }
                    ],
                    "start": 383,
                    "end": 408
                  },
                  "expression": false,
                  "start": 371,
                  "end": 408
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 368,
                "end": 408
              }
            ],
            "start": 346,
            "end": 413
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 417,
            "end": 422
          }
        ],
        "optional": false,
        "start": 332,
        "end": 434
      },
      "directive": null,
      "start": 332,
      "end": 435
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubscribeFieldOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 503,
        "end": 524
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Event",
              "optional": false,
              "typeAnnotation": null,
              "start": 525,
              "end": 530
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 525,
            "end": 530
          }
        ],
        "start": 524,
        "end": 531
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
              "name": "subscribe",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 545
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "Event",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 553,
                      "end": 558
                    },
                    "typeArguments": null,
                    "start": 553,
                    "end": 558
                  },
                  "start": 550,
                  "end": 558
                },
                "start": 547,
                "end": 558
              },
              "start": 545,
              "end": 558
            },
            "accessibility": null,
            "static": false,
            "start": 536,
            "end": 559
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "resolve",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 569
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
                    "name": "event",
                    "optional": false,
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
                          "start": 579,
                          "end": 584
                        },
                        "typeArguments": null,
                        "start": 579,
                        "end": 584
                      },
                      "start": 577,
                      "end": 584
                    },
                    "start": 572,
                    "end": 584
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 589,
                    "end": 595
                  },
                  "start": 586,
                  "end": 595
                },
                "start": 571,
                "end": 595
              },
              "start": 569,
              "end": 595
            },
            "accessibility": null,
            "static": false,
            "start": 562,
            "end": 596
          }
        ],
        "start": 532,
        "end": 598
      },
      "declare": false,
      "start": 493,
      "end": 598
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defineOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 617,
        "end": 630
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
              "name": "Event",
              "optional": false,
              "typeAnnotation": null,
              "start": 631,
              "end": 636
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 631,
            "end": 636
          }
        ],
        "start": 630,
        "end": 637
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SubscribeFieldOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 650,
                "end": 671
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Event",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 672,
                      "end": 677
                    },
                    "typeArguments": null,
                    "start": 672,
                    "end": 677
                  }
                ],
                "start": 671,
                "end": 678
              },
              "start": 650,
              "end": 678
            },
            "start": 648,
            "end": 678
          },
          "start": 641,
          "end": 678
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 683,
          "end": 687
        },
        "start": 681,
        "end": 687
      },
      "body": null,
      "expression": false,
      "start": 600,
      "end": 688
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "defineOptions",
          "optional": false,
          "typeAnnotation": null,
          "start": 690,
          "end": 703
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
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 708,
                  "end": 715
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
                      "name": "event",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 718,
                      "end": 723
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "event",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 728,
                    "end": 733
                  },
                  "id": null,
                  "generator": false,
                  "start": 717,
                  "end": 733
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 708,
                "end": 733
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subscribe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 747,
                  "end": 756
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 772,
                          "end": 775
                        },
                        "start": 765,
                        "end": 776
                      }
                    ],
                    "start": 759,
                    "end": 780
                  },
                  "expression": false,
                  "start": 756,
                  "end": 780
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 747,
                "end": 780
              }
            ],
            "start": 704,
            "end": 783
          }
        ],
        "optional": false,
        "start": 690,
        "end": 784
      },
      "directive": null,
      "start": 690,
      "end": 785
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "defineOptions",
          "optional": false,
          "typeAnnotation": null,
          "start": 787,
          "end": 800
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
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 805,
                  "end": 812
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
                      "name": "event",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 815,
                      "end": 820
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "event",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 825,
                    "end": 830
                  },
                  "id": null,
                  "generator": false,
                  "start": 814,
                  "end": 830
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 805,
                "end": 830
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subscribe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 844,
                  "end": 853
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 880,
                          "end": 883
                        },
                        "start": 873,
                        "end": 884
                      }
                    ],
                    "start": 867,
                    "end": 888
                  },
                  "expression": false,
                  "start": 855,
                  "end": 888
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 844,
                "end": 888
              }
            ],
            "start": 801,
            "end": 891
          }
        ],
        "optional": false,
        "start": 787,
        "end": 892
      },
      "directive": null,
      "start": 787,
      "end": 893
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StateFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 964,
          "end": 977
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
                "start": 978,
                "end": 983
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 978,
              "end": 983
            }
          ],
          "start": 977,
          "end": 984
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
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
                    "name": "State",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 991,
                    "end": 996
                  },
                  "typeArguments": null,
                  "start": 991,
                  "end": 996
                },
                "start": 989,
                "end": 996
              },
              "start": 988,
              "end": 996
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
                "start": 1001,
                "end": 1005
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 1007,
                    "end": 1010
                  },
                  "start": 1007,
                  "end": 1012
                },
                "start": 1005,
                "end": 1012
              },
              "value": null,
              "start": 998,
              "end": 1012
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1017,
              "end": 1020
            },
            "start": 1014,
            "end": 1020
          },
          "start": 987,
          "end": 1020
        },
        "declare": false,
        "start": 959,
        "end": 1021
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 952,
      "end": 1021
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "VuexStoreOptions",
          "optional": false,
          "typeAnnotation": null,
          "start": 1035,
          "end": 1051
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
                "start": 1052,
                "end": 1057
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1052,
              "end": 1057
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Modules",
                "optional": false,
                "typeAnnotation": null,
                "start": 1059,
                "end": 1066
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1059,
              "end": 1066
            }
          ],
          "start": 1051,
          "end": 1067
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "state",
                "optional": false,
                "typeAnnotation": null,
                "start": 1074,
                "end": 1079
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
                        "start": 1082,
                        "end": 1087
                      },
                      "typeArguments": null,
                      "start": 1082,
                      "end": 1087
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
                            "start": 1097,
                            "end": 1102
                          },
                          "typeArguments": null,
                          "start": 1097,
                          "end": 1102
                        },
                        "start": 1094,
                        "end": 1102
                      },
                      "start": 1091,
                      "end": 1102
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
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
                                "start": 1112,
                                "end": 1117
                              },
                              "typeArguments": null,
                              "start": 1112,
                              "end": 1117
                            },
                            "start": 1110,
                            "end": 1117
                          },
                          "start": 1108,
                          "end": 1117
                        }
                      ],
                      "start": 1106,
                      "end": 1119
                    }
                  ],
                  "start": 1082,
                  "end": 1119
                },
                "start": 1080,
                "end": 1119
              },
              "accessibility": null,
              "static": false,
              "start": 1074,
              "end": 1120
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "mutations",
                "optional": false,
                "typeAnnotation": null,
                "start": 1123,
                "end": 1132
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
                    "start": 1135,
                    "end": 1141
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1142,
                        "end": 1148
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "StateFunction",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1150,
                          "end": 1163
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
                                "start": 1164,
                                "end": 1169
                              },
                              "typeArguments": null,
                              "start": 1164,
                              "end": 1169
                            }
                          ],
                          "start": 1163,
                          "end": 1170
                        },
                        "start": 1150,
                        "end": 1170
                      }
                    ],
                    "start": 1141,
                    "end": 1171
                  },
                  "start": 1135,
                  "end": 1171
                },
                "start": 1133,
                "end": 1171
              },
              "accessibility": null,
              "static": false,
              "start": 1123,
              "end": 1172
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "modules",
                "optional": false,
                "typeAnnotation": null,
                "start": 1175,
                "end": 1182
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1192,
                    "end": 1193
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Modules",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1203,
                        "end": 1210
                      },
                      "typeArguments": null,
                      "start": 1203,
                      "end": 1210
                    },
                    "start": 1197,
                    "end": 1210
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "VuexStoreOptions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1213,
                      "end": 1229
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Modules",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1230,
                              "end": 1237
                            },
                            "typeArguments": null,
                            "start": 1230,
                            "end": 1237
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1238,
                              "end": 1239
                            },
                            "typeArguments": null,
                            "start": 1238,
                            "end": 1239
                          },
                          "start": 1230,
                          "end": 1240
                        },
                        {
                          "type": "TSNeverKeyword",
                          "start": 1242,
                          "end": 1247
                        }
                      ],
                      "start": 1229,
                      "end": 1248
                    },
                    "start": 1213,
                    "end": 1248
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 1185,
                  "end": 1253
                },
                "start": 1183,
                "end": 1253
              },
              "accessibility": null,
              "static": false,
              "start": 1175,
              "end": 1254
            }
          ],
          "start": 1070,
          "end": 1256
        },
        "declare": false,
        "start": 1030,
        "end": 1257
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1023,
      "end": 1257
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createStore",
          "optional": false,
          "typeAnnotation": null,
          "start": 1275,
          "end": 1286
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
                "name": "State",
                "optional": false,
                "typeAnnotation": null,
                "start": 1290,
                "end": 1295
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1304,
                  "end": 1310
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1311,
                      "end": 1317
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 1319,
                      "end": 1326
                    }
                  ],
                  "start": 1310,
                  "end": 1327
                },
                "start": 1304,
                "end": 1327
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1290,
              "end": 1327
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Modules",
                "optional": false,
                "typeAnnotation": null,
                "start": 1331,
                "end": 1338
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1347,
                  "end": 1353
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1354,
                      "end": 1360
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1362,
                        "end": 1368
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1369,
                            "end": 1375
                          },
                          {
                            "type": "TSUnknownKeyword",
                            "start": 1377,
                            "end": 1384
                          }
                        ],
                        "start": 1368,
                        "end": 1385
                      },
                      "start": 1362,
                      "end": 1385
                    }
                  ],
                  "start": 1353,
                  "end": 1386
                },
                "start": 1347,
                "end": 1386
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1331,
              "end": 1386
            }
          ],
          "start": 1286,
          "end": 1389
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VuexStoreOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1399,
                  "end": 1415
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
                        "start": 1416,
                        "end": 1421
                      },
                      "typeArguments": null,
                      "start": 1416,
                      "end": 1421
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Modules",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1423,
                        "end": 1430
                      },
                      "typeArguments": null,
                      "start": 1423,
                      "end": 1430
                    }
                  ],
                  "start": 1415,
                  "end": 1431
                },
                "start": 1399,
                "end": 1431
              },
              "start": 1397,
              "end": 1431
            },
            "start": 1390,
            "end": 1431
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 1433,
          "end": 1435
        },
        "expression": false,
        "start": 1266,
        "end": 1435
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1259,
      "end": 1435
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
            "name": "store",
            "optional": false,
            "typeAnnotation": null,
            "start": 1443,
            "end": 1448
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createStore",
              "optional": false,
              "typeAnnotation": null,
              "start": 1451,
              "end": 1462
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
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1467,
                      "end": 1472
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                                    "name": "bar2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1490,
                                    "end": 1494
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 1496,
                                    "end": 1497
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1490,
                                  "end": 1497
                                }
                              ],
                              "start": 1488,
                              "end": 1499
                            },
                            "start": 1481,
                            "end": 1500
                          }
                        ],
                        "start": 1475,
                        "end": 1504
                      },
                      "expression": false,
                      "start": 1472,
                      "end": 1504
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1467,
                    "end": 1504
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mutations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1508,
                      "end": 1517
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
                            "name": "inc",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1521,
                            "end": 1524
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
                                "name": "state123",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1527,
                                "end": 1535
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "UpdateExpression",
                              "operator": "++",
                              "prefix": false,
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "state123",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1540,
                                  "end": 1548
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "bar2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1549,
                                  "end": 1553
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1540,
                                "end": 1553
                              },
                              "start": 1540,
                              "end": 1555
                            },
                            "id": null,
                            "generator": false,
                            "start": 1526,
                            "end": 1555
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1521,
                          "end": 1555
                        }
                      ],
                      "start": 1519,
                      "end": 1557
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1508,
                    "end": 1557
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "modules",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1561,
                      "end": 1568
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
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1576,
                            "end": 1579
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
                                  "name": "state",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1589,
                                  "end": 1594
                                },
                                "value": {
                                  "type": "FunctionExpression",
                                  "id": null,
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
                                                "name": "bar2",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1616,
                                                "end": 1620
                                              },
                                              "value": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1",
                                                "start": 1622,
                                                "end": 1623
                                              },
                                              "method": false,
                                              "shorthand": false,
                                              "computed": false,
                                              "optional": false,
                                              "start": 1616,
                                              "end": 1623
                                            }
                                          ],
                                          "start": 1614,
                                          "end": 1625
                                        },
                                        "start": 1607,
                                        "end": 1626
                                      }
                                    ],
                                    "start": 1597,
                                    "end": 1634
                                  },
                                  "expression": false,
                                  "start": 1594,
                                  "end": 1634
                                },
                                "method": true,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1589,
                                "end": 1634
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "mutations",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1642,
                                  "end": 1651
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
                                        "name": "inc",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1655,
                                        "end": 1658
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
                                            "name": "state",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1661,
                                            "end": 1666
                                          }
                                        ],
                                        "returnType": null,
                                        "body": {
                                          "type": "UpdateExpression",
                                          "operator": "++",
                                          "prefix": false,
                                          "argument": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "state",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1671,
                                              "end": 1676
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "bar2",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1677,
                                              "end": 1681
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 1671,
                                            "end": 1681
                                          },
                                          "start": 1671,
                                          "end": 1683
                                        },
                                        "id": null,
                                        "generator": false,
                                        "start": 1660,
                                        "end": 1683
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1655,
                                      "end": 1683
                                    }
                                  ],
                                  "start": 1653,
                                  "end": 1685
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1642,
                                "end": 1685
                              }
                            ],
                            "start": 1581,
                            "end": 1692
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1576,
                          "end": 1692
                        }
                      ],
                      "start": 1570,
                      "end": 1697
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1561,
                    "end": 1697
                  }
                ],
                "start": 1463,
                "end": 1700
              }
            ],
            "optional": false,
            "start": 1451,
            "end": 1701
          },
          "definite": false,
          "start": 1443,
          "end": 1701
        }
      ],
      "declare": false,
      "start": 1437,
      "end": 1702
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1766,
        "end": 1767
      },
      "typeParameters": null,
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
                "name": "Methods",
                "optional": false,
                "typeAnnotation": null,
                "start": 1771,
                "end": 1778
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1771,
              "end": 1778
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attached",
                "optional": false,
                "typeAnnotation": null,
                "start": 1780,
                "end": 1788
              },
              "constraint": null,
              "default": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "methods",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Methods",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1801,
                          "end": 1808
                        },
                        "typeArguments": null,
                        "start": 1801,
                        "end": 1808
                      },
                      "start": 1799,
                      "end": 1808
                    },
                    "start": 1792,
                    "end": 1808
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1813,
                    "end": 1817
                  },
                  "start": 1810,
                  "end": 1817
                },
                "start": 1791,
                "end": 1817
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1780,
              "end": 1817
            }
          ],
          "start": 1770,
          "end": 1818
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
                      "name": "methods",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1832,
                      "end": 1839
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Methods",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1841,
                          "end": 1848
                        },
                        "typeArguments": null,
                        "start": 1841,
                        "end": 1848
                      },
                      "start": 1839,
                      "end": 1848
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1832,
                    "end": 1849
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "attached",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1852,
                      "end": 1860
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Attached",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1862,
                          "end": 1870
                        },
                        "typeArguments": null,
                        "start": 1862,
                        "end": 1870
                      },
                      "start": 1860,
                      "end": 1870
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1852,
                    "end": 1871
                  }
                ],
                "start": 1828,
                "end": 1873
              },
              "start": 1826,
              "end": 1873
            },
            "start": 1819,
            "end": 1873
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 1878,
            "end": 1881
          },
          "start": 1875,
          "end": 1881
        },
        "start": 1770,
        "end": 1881
      },
      "declare": false,
      "start": 1761,
      "end": 1882
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1899,
                  "end": 1900
                },
                "typeArguments": null,
                "start": 1899,
                "end": 1900
              },
              "start": 1897,
              "end": 1900
            },
            "start": 1888,
            "end": 1900
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1909,
              "end": 1911
            },
            "id": null,
            "generator": false,
            "start": 1903,
            "end": 1911
          },
          "definite": false,
          "start": 1888,
          "end": 1911
        }
      ],
      "declare": false,
      "start": 1884,
      "end": 1912
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 1914,
          "end": 1923
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
                  "name": "attached",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1928,
                  "end": 1936
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
                      "name": "methods",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1937,
                      "end": 1944
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
                              "name": "methods",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1952,
                              "end": 1959
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bbb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1960,
                              "end": 1963
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1952,
                            "end": 1963
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1952,
                          "end": 1965
                        },
                        "directive": null,
                        "start": 1952,
                        "end": 1966
                      }
                    ],
                    "start": 1946,
                    "end": 1976
                  },
                  "expression": false,
                  "start": 1936,
                  "end": 1976
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1928,
                "end": 1976
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "methods",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1980,
                  "end": 1987
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
                        "name": "bbb",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1995,
                        "end": 1998
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 2001,
                          "end": 2003
                        },
                        "expression": false,
                        "start": 1998,
                        "end": 2003
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1995,
                      "end": 2003
                    }
                  ],
                  "start": 1989,
                  "end": 2008
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1980,
                "end": 2008
              }
            ],
            "start": 1924,
            "end": 2011
          }
        ],
        "optional": false,
        "start": 1914,
        "end": 2012
      },
      "directive": null,
      "start": 1914,
      "end": 2013
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 2015,
          "end": 2024
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
                  "name": "attached",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2029,
                  "end": 2037
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
                      "name": "methods",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2038,
                      "end": 2045
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
                              "name": "methods",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2053,
                              "end": 2060
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bbb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2061,
                              "end": 2064
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2053,
                            "end": 2064
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 2053,
                          "end": 2066
                        },
                        "directive": null,
                        "start": 2053,
                        "end": 2067
                      }
                    ],
                    "start": 2047,
                    "end": 2077
                  },
                  "expression": false,
                  "start": 2037,
                  "end": 2077
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2029,
                "end": 2077
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "methods",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2081,
                  "end": 2088
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
                        "name": "bbb",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2096,
                        "end": 2099
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 2107,
                          "end": 2109
                        },
                        "id": null,
                        "generator": false,
                        "start": 2101,
                        "end": 2109
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2096,
                      "end": 2109
                    }
                  ],
                  "start": 2090,
                  "end": 2114
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2081,
                "end": 2114
              }
            ],
            "start": 2025,
            "end": 2117
          }
        ],
        "optional": false,
        "start": 2015,
        "end": 2118
      },
      "directive": null,
      "start": 2015,
      "end": 2119
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "create56067",
        "optional": false,
        "typeAnnotation": null,
        "start": 2195,
        "end": 2206
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
              "start": 2210,
              "end": 2215
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 2224,
                "end": 2230
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2231,
                    "end": 2237
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 2239,
                    "end": 2242
                  }
                ],
                "start": 2230,
                "end": 2243
              },
              "start": 2224,
              "end": 2243
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2210,
            "end": 2243
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 2247,
              "end": 2251
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 2260,
                "end": 2266
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2267,
                    "end": 2273
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 2275,
                    "end": 2278
                  }
                ],
                "start": 2266,
                "end": 2279
              },
              "start": 2260,
              "end": 2279
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2247,
            "end": 2279
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Actions",
              "optional": false,
              "typeAnnotation": null,
              "start": 2283,
              "end": 2290
            },
            "constraint": {
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
                        "start": 2307,
                        "end": 2312
                      },
                      "typeArguments": null,
                      "start": 2307,
                      "end": 2312
                    },
                    "start": 2305,
                    "end": 2312
                  },
                  "start": 2300,
                  "end": 2312
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2320,
                        "end": 2324
                      },
                      "typeArguments": null,
                      "start": 2320,
                      "end": 2324
                    },
                    "start": 2318,
                    "end": 2324
                  },
                  "start": 2314,
                  "end": 2324
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2329,
                    "end": 2335
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2336,
                        "end": 2342
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 2344,
                        "end": 2347
                      }
                    ],
                    "start": 2335,
                    "end": 2348
                  },
                  "start": 2329,
                  "end": 2348
                },
                "start": 2326,
                "end": 2348
              },
              "start": 2299,
              "end": 2348
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2283,
            "end": 2348
          }
        ],
        "start": 2206,
        "end": 2351
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                    "name": "getState",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2360,
                    "end": 2368
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
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
                            "start": 2376,
                            "end": 2381
                          },
                          "typeArguments": null,
                          "start": 2376,
                          "end": 2381
                        },
                        "start": 2373,
                        "end": 2381
                      },
                      "start": 2370,
                      "end": 2381
                    },
                    "start": 2368,
                    "end": 2381
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2360,
                  "end": 2382
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "actions",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2383,
                    "end": 2390
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Actions",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2392,
                        "end": 2399
                      },
                      "typeArguments": null,
                      "start": 2392,
                      "end": 2399
                    },
                    "start": 2390,
                    "end": 2399
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2383,
                  "end": 2400
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2401,
                    "end": 2408
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
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
                            "name": "Data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2416,
                            "end": 2420
                          },
                          "typeArguments": null,
                          "start": 2416,
                          "end": 2420
                        },
                        "start": 2413,
                        "end": 2420
                      },
                      "start": 2410,
                      "end": 2420
                    },
                    "start": 2408,
                    "end": 2420
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2401,
                  "end": 2420
                }
              ],
              "start": 2358,
              "end": 2422
            },
            "start": 2356,
            "end": 2422
          },
          "start": 2352,
          "end": 2422
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2425,
          "end": 2429
        },
        "start": 2423,
        "end": 2429
      },
      "body": null,
      "expression": false,
      "start": 2178,
      "end": 2430
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "create56067",
          "optional": false,
          "typeAnnotation": null,
          "start": 2432,
          "end": 2443
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
                  "name": "getState",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2448,
                  "end": 2456
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2474,
                                "end": 2475
                              },
                              "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 2477,
                                "end": 2478
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 2474,
                              "end": 2478
                            }
                          ],
                          "start": 2472,
                          "end": 2480
                        },
                        "start": 2465,
                        "end": 2481
                      }
                    ],
                    "start": 2459,
                    "end": 2485
                  },
                  "expression": false,
                  "start": 2456,
                  "end": 2485
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2448,
                "end": 2485
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2489,
                  "end": 2496
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2519,
                                "end": 2520
                              },
                              "value": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 2522,
                                "end": 2523
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 2519,
                              "end": 2523
                            }
                          ],
                          "start": 2517,
                          "end": 2525
                        },
                        "start": 2510,
                        "end": 2526
                      }
                    ],
                    "start": 2504,
                    "end": 2530
                  },
                  "id": null,
                  "generator": false,
                  "start": 2498,
                  "end": 2530
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2489,
                "end": 2530
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "actions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2534,
                  "end": 2541
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
                      "start": 2542,
                      "end": 2547
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2549,
                      "end": 2553
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
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2561,
                          "end": 2566
                        },
                        "directive": null,
                        "start": 2561,
                        "end": 2566
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2588,
                          "end": 2592
                        },
                        "directive": null,
                        "start": 2588,
                        "end": 2593
                      },
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
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2630,
                                "end": 2631
                              },
                              "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 2633,
                                "end": 2634
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 2630,
                              "end": 2634
                            }
                          ],
                          "start": 2622,
                          "end": 2641
                        },
                        "start": 2615,
                        "end": 2642
                      }
                    ],
                    "start": 2555,
                    "end": 2646
                  },
                  "expression": false,
                  "start": 2541,
                  "end": 2646
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2534,
                "end": 2646
              }
            ],
            "start": 2444,
            "end": 2649
          }
        ],
        "optional": false,
        "start": 2432,
        "end": 2650
      },
      "directive": null,
      "start": 2432,
      "end": 2651
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonStringIterable",
        "optional": false,
        "typeAnnotation": null,
        "start": 2714,
        "end": 2731
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
              "start": 2732,
              "end": 2733
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2732,
            "end": 2733
          }
        ],
        "start": 2731,
        "end": 2734
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2740,
            "end": 2741
          },
          "typeArguments": null,
          "start": 2740,
          "end": 2741
        },
        "extendsType": {
          "type": "TSStringKeyword",
          "start": 2750,
          "end": 2756
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 2759,
          "end": 2764
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2767,
              "end": 2768
            },
            "typeArguments": null,
            "start": 2767,
            "end": 2768
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Iterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 2777,
              "end": 2785
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 2786,
                  "end": 2789
                }
              ],
              "start": 2785,
              "end": 2790
            },
            "start": 2777,
            "end": 2790
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2793,
              "end": 2794
            },
            "typeArguments": null,
            "start": 2793,
            "end": 2794
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2797,
            "end": 2802
          },
          "start": 2767,
          "end": 2802
        },
        "start": 2740,
        "end": 2802
      },
      "declare": false,
      "start": 2709,
      "end": 2803
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "typeAnnotation": null,
        "start": 2822,
        "end": 2833
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
              "start": 2834,
              "end": 2835
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2834,
            "end": 2835
          }
        ],
        "start": 2833,
        "end": 2836
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NonStringIterable",
                "optional": false,
                "typeAnnotation": null,
                "start": 2844,
                "end": 2861
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
                      "start": 2862,
                      "end": 2863
                    },
                    "typeArguments": null,
                    "start": 2862,
                    "end": 2863
                  }
                ],
                "start": 2861,
                "end": 2864
              },
              "start": 2844,
              "end": 2864
            },
            "start": 2842,
            "end": 2864
          },
          "start": 2837,
          "end": 2864
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
            "start": 2867,
            "end": 2868
          },
          "typeArguments": null,
          "start": 2867,
          "end": 2868
        },
        "start": 2865,
        "end": 2868
      },
      "body": null,
      "expression": false,
      "start": 2805,
      "end": 2869
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 2877,
            "end": 2878
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
                  "start": 2883,
                  "end": 2886
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 2889,
                    "end": 2891
                  },
                  "expression": false,
                  "start": 2886,
                  "end": 2891
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2883,
                "end": 2891
              }
            ],
            "start": 2881,
            "end": 2893
          },
          "definite": false,
          "start": 2877,
          "end": 2893
        }
      ],
      "declare": false,
      "start": 2871,
      "end": 2894
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 2896,
          "end": 2907
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "value",
            "raw": "'value'",
            "start": 2908,
            "end": 2915
          }
        ],
        "optional": false,
        "start": 2896,
        "end": 2916
      },
      "directive": null,
      "start": 2896,
      "end": 2917
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 2927,
          "end": 2938
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "v",
                "raw": "'v'",
                "start": 2940,
                "end": 2943
              }
            ],
            "start": 2939,
            "end": 2944
          }
        ],
        "optional": false,
        "start": 2927,
        "end": 2945
      },
      "directive": null,
      "start": 2927,
      "end": 2946
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 2953,
          "end": 2964
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 2966,
                "end": 2967
              }
            ],
            "start": 2965,
            "end": 2968
          }
        ],
        "optional": false,
        "start": 2953,
        "end": 2969
      },
      "directive": null,
      "start": 2953,
      "end": 2970
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 2977,
          "end": 2988
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2992,
                      "end": 2995
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2998,
                        "end": 3000
                      },
                      "expression": false,
                      "start": 2995,
                      "end": 3000
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2992,
                    "end": 3000
                  }
                ],
                "start": 2990,
                "end": 3002
              }
            ],
            "start": 2989,
            "end": 3003
          }
        ],
        "optional": false,
        "start": 2977,
        "end": 3004
      },
      "directive": null,
      "start": 2977,
      "end": 3005
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Values",
        "optional": false,
        "typeAnnotation": null,
        "start": 3074,
        "end": 3080
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
              "start": 3081,
              "end": 3082
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3081,
            "end": 3082
          }
        ],
        "start": 3080,
        "end": 3083
      },
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
            "start": 3086,
            "end": 3087
          },
          "typeArguments": null,
          "start": 3086,
          "end": 3087
        },
        "indexType": {
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
              "start": 3094,
              "end": 3095
            },
            "typeArguments": null,
            "start": 3094,
            "end": 3095
          },
          "start": 3088,
          "end": 3095
        },
        "start": 3086,
        "end": 3096
      },
      "declare": false,
      "start": 3069,
      "end": 3097
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractFields",
        "optional": false,
        "typeAnnotation": null,
        "start": 3103,
        "end": 3116
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 3117,
              "end": 3124
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3117,
            "end": 3124
          }
        ],
        "start": 3116,
        "end": 3125
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Values",
          "optional": false,
          "typeAnnotation": null,
          "start": 3128,
          "end": 3134
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3140,
                "end": 3141
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3151,
                    "end": 3158
                  },
                  "typeArguments": null,
                  "start": 3151,
                  "end": 3158
                },
                "start": 3145,
                "end": 3158
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
                      "name": "Options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3161,
                      "end": 3168
                    },
                    "typeArguments": null,
                    "start": 3161,
                    "end": 3168
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3169,
                      "end": 3170
                    },
                    "typeArguments": null,
                    "start": 3169,
                    "end": 3170
                  },
                  "start": 3161,
                  "end": 3171
                },
                "extendsType": {
                  "type": "TSObjectKeyword",
                  "start": 3180,
                  "end": 3186
                },
                "trueType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3195,
                        "end": 3202
                      },
                      "typeArguments": null,
                      "start": 3195,
                      "end": 3202
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3203,
                        "end": 3204
                      },
                      "typeArguments": null,
                      "start": 3203,
                      "end": 3204
                    },
                    "start": 3195,
                    "end": 3205
                  },
                  "start": 3189,
                  "end": 3205
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 3208,
                  "end": 3213
                },
                "start": 3161,
                "end": 3213
              },
              "optional": false,
              "readonly": null,
              "start": 3135,
              "end": 3216
            }
          ],
          "start": 3134,
          "end": 3217
        },
        "start": 3128,
        "end": 3217
      },
      "declare": false,
      "start": 3098,
      "end": 3218
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetType",
        "optional": false,
        "typeAnnotation": null,
        "start": 3224,
        "end": 3231
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 3232,
              "end": 3239
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3232,
            "end": 3239
          }
        ],
        "start": 3231,
        "end": 3240
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3253,
                    "end": 3259
                  },
                  "start": 3251,
                  "end": 3259
                },
                "start": 3248,
                "end": 3259
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3262,
                "end": 3265
              },
              "start": 3260,
              "end": 3265
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 3247,
            "end": 3266
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null,
              "start": 3269,
              "end": 3275
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExtractFields",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3278,
                  "end": 3291
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3292,
                        "end": 3299
                      },
                      "typeArguments": null,
                      "start": 3292,
                      "end": 3299
                    }
                  ],
                  "start": 3291,
                  "end": 3300
                },
                "start": 3278,
                "end": 3300
              },
              "start": 3276,
              "end": 3300
            },
            "accessibility": null,
            "static": false,
            "start": 3269,
            "end": 3301
          }
        ],
        "start": 3243,
        "end": 3303
      },
      "declare": false,
      "start": 3219,
      "end": 3304
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test55124",
        "optional": false,
        "typeAnnotation": null,
        "start": 3323,
        "end": 3332
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
              "name": "OptionsData",
              "optional": false,
              "typeAnnotation": null,
              "start": 3333,
              "end": 3344
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SetType",
                "optional": false,
                "typeAnnotation": null,
                "start": 3353,
                "end": 3360
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OptionsData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3361,
                      "end": 3372
                    },
                    "typeArguments": null,
                    "start": 3361,
                    "end": 3372
                  }
                ],
                "start": 3360,
                "end": 3373
              },
              "start": 3353,
              "end": 3373
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3333,
            "end": 3373
          }
        ],
        "start": 3332,
        "end": 3374
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OptionsData",
                "optional": false,
                "typeAnnotation": null,
                "start": 3387,
                "end": 3398
              },
              "typeArguments": null,
              "start": 3387,
              "end": 3398
            },
            "start": 3385,
            "end": 3398
          },
          "start": 3378,
          "end": 3398
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3403,
          "end": 3407
        },
        "start": 3401,
        "end": 3407
      },
      "body": null,
      "expression": false,
      "start": 3306,
      "end": 3408
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test55124",
          "optional": false,
          "typeAnnotation": null,
          "start": 3410,
          "end": 3419
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
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3424,
                  "end": 3430
                },
                "value": {
                  "type": "Literal",
                  "value": "$test4",
                  "raw": "\"$test4\"",
                  "start": 3432,
                  "end": 3440
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3424,
                "end": 3440
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3450,
                  "end": 3455
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
                        "name": "$test1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3463,
                        "end": 3469
                      },
                      "value": {
                        "type": "Literal",
                        "value": 111,
                        "raw": "111",
                        "start": 3471,
                        "end": 3474
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3463,
                      "end": 3474
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$test2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3480,
                        "end": 3486
                      },
                      "value": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 3488,
                        "end": 3492
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3480,
                      "end": 3492
                    }
                  ],
                  "start": 3457,
                  "end": 3497
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3450,
                "end": 3497
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3501,
                  "end": 3506
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
                        "name": "$test3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3514,
                        "end": 3520
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 3522,
                        "end": 3524
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3514,
                      "end": 3524
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$test4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3530,
                        "end": 3536
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 3544,
                          "end": 3546
                        },
                        "id": null,
                        "generator": false,
                        "start": 3538,
                        "end": 3546
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3530,
                      "end": 3546
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$test5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3552,
                        "end": 3558
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 3561,
                          "end": 3563
                        },
                        "expression": false,
                        "start": 3558,
                        "end": 3563
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3552,
                      "end": 3563
                    }
                  ],
                  "start": 3508,
                  "end": 3568
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3501,
                "end": 3568
              }
            ],
            "start": 3420,
            "end": 3571
          }
        ],
        "optional": false,
        "start": 3410,
        "end": 3572
      },
      "directive": null,
      "start": 3410,
      "end": 3573
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test55124",
          "optional": false,
          "typeAnnotation": null,
          "start": 3575,
          "end": 3584
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
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3589,
                  "end": 3595
                },
                "value": {
                  "type": "Literal",
                  "value": "$test6",
                  "raw": "\"$test6\"",
                  "start": 3597,
                  "end": 3605
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3589,
                "end": 3605
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3618,
                  "end": 3623
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
                        "name": "$test1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3631,
                        "end": 3637
                      },
                      "value": {
                        "type": "Literal",
                        "value": 111,
                        "raw": "111",
                        "start": 3639,
                        "end": 3642
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3631,
                      "end": 3642
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$test2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3648,
                        "end": 3654
                      },
                      "value": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 3656,
                        "end": 3660
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3648,
                      "end": 3660
                    }
                  ],
                  "start": 3625,
                  "end": 3665
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3618,
                "end": 3665
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3669,
                  "end": 3674
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
                        "name": "$test3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3682,
                        "end": 3688
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 3690,
                        "end": 3692
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3682,
                      "end": 3692
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$test4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3698,
                        "end": 3704
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 3712,
                          "end": 3714
                        },
                        "id": null,
                        "generator": false,
                        "start": 3706,
                        "end": 3714
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3698,
                      "end": 3714
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$test5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3720,
                        "end": 3726
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 3729,
                          "end": 3731
                        },
                        "expression": false,
                        "start": 3726,
                        "end": 3731
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3720,
                      "end": 3731
                    }
                  ],
                  "start": 3676,
                  "end": 3736
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3669,
                "end": 3736
              }
            ],
            "start": 3585,
            "end": 3739
          }
        ],
        "optional": false,
        "start": 3575,
        "end": 3740
      },
      "directive": null,
      "start": 3575,
      "end": 3741
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test53924",
        "optional": false,
        "typeAnnotation": null,
        "start": 3808,
        "end": 3817
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
              "start": 3818,
              "end": 3819
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 3822,
              "end": 3829
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3818,
            "end": 3829
          }
        ],
        "start": 3817,
        "end": 3830
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3842,
                    "end": 3843
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
                          "name": "c",
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
                                "start": 3849,
                                "end": 3850
                              },
                              "typeArguments": null,
                              "start": 3849,
                              "end": 3850
                            },
                            "start": 3847,
                            "end": 3850
                          },
                          "start": 3846,
                          "end": 3850
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 3855,
                          "end": 3859
                        },
                        "start": 3852,
                        "end": 3859
                      },
                      "start": 3845,
                      "end": 3859
                    },
                    "start": 3843,
                    "end": 3859
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3842,
                  "end": 3860
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
                    "start": 3861,
                    "end": 3862
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3870,
                            "end": 3871
                          },
                          "typeArguments": null,
                          "start": 3870,
                          "end": 3871
                        },
                        "start": 3867,
                        "end": 3871
                      },
                      "start": 3864,
                      "end": 3871
                    },
                    "start": 3862,
                    "end": 3871
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3861,
                  "end": 3871
                }
              ],
              "start": 3840,
              "end": 3873
            },
            "start": 3838,
            "end": 3873
          },
          "start": 3831,
          "end": 3873
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3875,
        "end": 3877
      },
      "expression": false,
      "start": 3799,
      "end": 3877
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test53924",
          "optional": false,
          "typeAnnotation": null,
          "start": 3879,
          "end": 3888
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3893,
                  "end": 3894
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3897,
                      "end": 3898
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3909,
                          "end": 3910
                        },
                        "directive": null,
                        "start": 3909,
                        "end": 3911
                      }
                    ],
                    "start": 3903,
                    "end": 3926
                  },
                  "id": null,
                  "generator": false,
                  "start": 3896,
                  "end": 3926
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3893,
                "end": 3926
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3930,
                  "end": 3931
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 3939,
                    "end": 3942
                  },
                  "id": null,
                  "generator": false,
                  "start": 3933,
                  "end": 3942
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3930,
                "end": 3942
              }
            ],
            "start": 3889,
            "end": 3945
          }
        ],
        "optional": false,
        "start": 3879,
        "end": 3946
      },
      "directive": null,
      "start": 3879,
      "end": 3947
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test53924",
          "optional": false,
          "typeAnnotation": null,
          "start": 3949,
          "end": 3958
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3963,
                  "end": 3964
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 3972,
                    "end": 3975
                  },
                  "id": null,
                  "generator": false,
                  "start": 3966,
                  "end": 3975
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3963,
                "end": 3975
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3979,
                  "end": 3980
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3983,
                      "end": 3984
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4002,
                          "end": 4003
                        },
                        "start": 3995,
                        "end": 4004
                      }
                    ],
                    "start": 3989,
                    "end": 4018
                  },
                  "id": null,
                  "generator": false,
                  "start": 3982,
                  "end": 4018
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3979,
                "end": 4018
              }
            ],
            "start": 3959,
            "end": 4021
          }
        ],
        "optional": false,
        "start": 3949,
        "end": 4022
      },
      "directive": null,
      "start": 3949,
      "end": 4023
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test53924",
          "optional": false,
          "typeAnnotation": null,
          "start": 4025,
          "end": 4034
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4039,
                  "end": 4040
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 4056,
                          "end": 4059
                        },
                        "start": 4049,
                        "end": 4060
                      }
                    ],
                    "start": 4043,
                    "end": 4064
                  },
                  "expression": false,
                  "start": 4040,
                  "end": 4064
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4039,
                "end": 4064
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4068,
                  "end": 4069
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4070,
                      "end": 4071
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4086,
                          "end": 4087
                        },
                        "start": 4079,
                        "end": 4088
                      }
                    ],
                    "start": 4073,
                    "end": 4102
                  },
                  "expression": false,
                  "start": 4069,
                  "end": 4102
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4068,
                "end": 4102
              }
            ],
            "start": 4035,
            "end": 4105
          }
        ],
        "optional": false,
        "start": 4025,
        "end": 4106
      },
      "directive": null,
      "start": 4025,
      "end": 4107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test53924",
          "optional": false,
          "typeAnnotation": null,
          "start": 4109,
          "end": 4118
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4123,
                  "end": 4124
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4125,
                      "end": 4126
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4141,
                          "end": 4142
                        },
                        "start": 4134,
                        "end": 4143
                      }
                    ],
                    "start": 4128,
                    "end": 4157
                  },
                  "expression": false,
                  "start": 4124,
                  "end": 4157
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4123,
                "end": 4157
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4161,
                  "end": 4162
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 4178,
                          "end": 4181
                        },
                        "start": 4171,
                        "end": 4182
                      }
                    ],
                    "start": 4165,
                    "end": 4186
                  },
                  "expression": false,
                  "start": 4162,
                  "end": 4186
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4161,
                "end": 4186
              }
            ],
            "start": 4119,
            "end": 4189
          }
        ],
        "optional": false,
        "start": 4109,
        "end": 4190
      },
      "directive": null,
      "start": 4109,
      "end": 4191
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "monitor",
        "optional": false,
        "typeAnnotation": null,
        "start": 4266,
        "end": 4273
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
              "start": 4274,
              "end": 4275
            },
            "constraint": {
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
                    "start": 4288,
                    "end": 4292
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 4294,
                      "end": 4297
                    },
                    "start": 4292,
                    "end": 4297
                  },
                  "value": null,
                  "start": 4285,
                  "end": 4297
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 4302,
                  "end": 4305
                },
                "start": 4299,
                "end": 4305
              },
              "start": 4284,
              "end": 4305
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4274,
            "end": 4305
          }
        ],
        "start": 4273,
        "end": 4306
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "extractor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                    "start": 4325,
                    "end": 4329
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Parameters",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4331,
                        "end": 4341
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
                              "start": 4342,
                              "end": 4343
                            },
                            "typeArguments": null,
                            "start": 4342,
                            "end": 4343
                          }
                        ],
                        "start": 4341,
                        "end": 4344
                      },
                      "start": 4331,
                      "end": 4344
                    },
                    "start": 4329,
                    "end": 4344
                  },
                  "value": null,
                  "start": 4322,
                  "end": 4344
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4349,
                    "end": 4355
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4356,
                        "end": 4362
                      },
                      {
                        "type": "TSUnknownKeyword",
                        "start": 4364,
                        "end": 4371
                      }
                    ],
                    "start": 4355,
                    "end": 4372
                  },
                  "start": 4349,
                  "end": 4372
                },
                "start": 4346,
                "end": 4372
              },
              "start": 4321,
              "end": 4372
            },
            "start": 4319,
            "end": 4372
          },
          "start": 4310,
          "end": 4372
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "executor",
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
                "start": 4386,
                "end": 4387
              },
              "typeArguments": null,
              "start": 4386,
              "end": 4387
            },
            "start": 4384,
            "end": 4387
          },
          "start": 4376,
          "end": 4387
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
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
                "start": 4396,
                "end": 4400
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Parameters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4402,
                    "end": 4412
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
                          "start": 4413,
                          "end": 4414
                        },
                        "typeArguments": null,
                        "start": 4413,
                        "end": 4414
                      }
                    ],
                    "start": 4412,
                    "end": 4415
                  },
                  "start": 4402,
                  "end": 4415
                },
                "start": 4400,
                "end": 4415
              },
              "value": null,
              "start": 4393,
              "end": 4415
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReturnType",
                "optional": false,
                "typeAnnotation": null,
                "start": 4420,
                "end": 4430
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
                      "start": 4431,
                      "end": 4432
                    },
                    "typeArguments": null,
                    "start": 4431,
                    "end": 4432
                  }
                ],
                "start": 4430,
                "end": 4433
              },
              "start": 4420,
              "end": 4433
            },
            "start": 4417,
            "end": 4433
          },
          "start": 4392,
          "end": 4433
        },
        "start": 4390,
        "end": 4433
      },
      "body": null,
      "expression": false,
      "start": 4249,
      "end": 4434
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "monitor",
          "optional": false,
          "typeAnnotation": null,
          "start": 4436,
          "end": 4443
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
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4448,
                "end": 4449
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4457,
                    "end": 4458
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4457,
                    "end": 4458
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 4457,
                  "end": 4458
                }
              ],
              "start": 4455,
              "end": 4460
            },
            "id": null,
            "generator": false,
            "start": 4447,
            "end": 4461
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
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 4486,
                    "end": 4492
                  },
                  "start": 4484,
                  "end": 4492
                },
                "start": 4483,
                "end": 4492
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 4497,
              "end": 4498
            },
            "id": null,
            "generator": false,
            "start": 4482,
            "end": 4498
          }
        ],
        "optional": false,
        "start": 4436,
        "end": 4501
      },
      "directive": null,
      "start": 4436,
      "end": 4502
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "monitor",
          "optional": false,
          "typeAnnotation": null,
          "start": 4503,
          "end": 4510
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
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 4515,
                "end": 4516
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4524,
                    "end": 4525
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4524,
                    "end": 4525
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 4524,
                  "end": 4525
                }
              ],
              "start": 4522,
              "end": 4527
            },
            "id": null,
            "generator": false,
            "start": 4514,
            "end": 4528
          },
          {
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
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 4562,
                    "end": 4568
                  },
                  "start": 4560,
                  "end": 4568
                },
                "start": 4559,
                "end": 4568
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4583,
                    "end": 4584
                  },
                  "start": 4576,
                  "end": 4585
                }
              ],
              "start": 4570,
              "end": 4589
            },
            "expression": false,
            "start": 4549,
            "end": 4589
          }
        ],
        "optional": false,
        "start": 4503,
        "end": 4592
      },
      "directive": null,
      "start": 4503,
      "end": 4593
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 4593
}
```

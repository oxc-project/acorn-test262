__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 24,
                  "end": 27
                },
                "start": 24,
                "end": 27
              },
              "start": 22,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 28
          },
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
              "start": 33,
              "end": 38
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              },
              "start": 38,
              "end": 46
            },
            "accessibility": null,
            "static": false,
            "start": 33,
            "end": 47
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 58
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 62,
                "end": 66
              },
              "start": 60,
              "end": 66
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 52,
            "end": 67
          }
        ],
        "start": 12,
        "end": 69
      },
      "declare": false,
      "start": 0,
      "end": 69
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 82
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 93
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 95,
                  "end": 98
                },
                "start": 95,
                "end": 98
              },
              "start": 93,
              "end": 98
            },
            "accessibility": null,
            "static": false,
            "start": 89,
            "end": 99
          },
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
              "start": 104,
              "end": 109
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "none",
                      "raw": "'none'",
                      "start": 111,
                      "end": 117
                    },
                    "start": 111,
                    "end": 117
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "done",
                      "raw": "'done'",
                      "start": 120,
                      "end": 126
                    },
                    "start": 120,
                    "end": 126
                  }
                ],
                "start": 111,
                "end": 126
              },
              "start": 109,
              "end": 126
            },
            "accessibility": null,
            "static": false,
            "start": 104,
            "end": 127
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 138
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 142,
                "end": 146
              },
              "start": 140,
              "end": 146
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 132,
            "end": 147
          }
        ],
        "start": 83,
        "end": 149
      },
      "declare": false,
      "start": 71,
      "end": 149
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 163
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 170
                  },
                  "typeArguments": null,
                  "start": 169,
                  "end": 170
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 173,
                    "end": 174
                  },
                  "typeArguments": null,
                  "start": 173,
                  "end": 174
                }
              ],
              "start": 169,
              "end": 174
            },
            "start": 167,
            "end": 174
          },
          "start": 164,
          "end": 174
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 176,
        "end": 179
      },
      "expression": false,
      "start": 151,
      "end": 179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 184
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 195
                },
                "value": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 197,
                  "end": 200
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 191,
                "end": 200
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 211
                },
                "value": {
                  "type": "Literal",
                  "value": "done",
                  "raw": "'done'",
                  "start": 213,
                  "end": 219
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 206,
                "end": 219
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 231
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "ThisExpression",
                          "start": 244,
                          "end": 248
                        },
                        "directive": null,
                        "start": 244,
                        "end": 249
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 258,
                            "end": 262
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 263,
                            "end": 267
                          },
                          "optional": false,
                          "computed": false,
                          "start": 258,
                          "end": 267
                        },
                        "directive": null,
                        "start": 258,
                        "end": 268
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 277,
                            "end": 281
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 282,
                            "end": 287
                          },
                          "optional": false,
                          "computed": false,
                          "start": 277,
                          "end": 287
                        },
                        "directive": null,
                        "start": 277,
                        "end": 288
                      }
                    ],
                    "start": 234,
                    "end": 294
                  },
                  "expression": false,
                  "start": 231,
                  "end": 294
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 225,
                "end": 294
              }
            ],
            "start": 185,
            "end": 296
          }
        ],
        "optional": false,
        "start": 181,
        "end": 297
      },
      "directive": null,
      "start": 181,
      "end": 298
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
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
              "name": "type1",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 324
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 326,
                  "end": 329
                },
                "start": 326,
                "end": 329
              },
              "start": 324,
              "end": 329
            },
            "accessibility": null,
            "static": false,
            "start": 319,
            "end": 330
          },
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
              "start": 335,
              "end": 340
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              },
              "start": 340,
              "end": 348
            },
            "accessibility": null,
            "static": false,
            "start": 335,
            "end": 349
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 360
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 364,
                "end": 368
              },
              "start": 362,
              "end": 368
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 354,
            "end": 369
          }
        ],
        "start": 313,
        "end": 371
      },
      "declare": false,
      "start": 300,
      "end": 371
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y2",
        "optional": false,
        "typeAnnotation": null,
        "start": 383,
        "end": 385
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
              "name": "type2",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 397
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 399,
                  "end": 402
                },
                "start": 399,
                "end": 402
              },
              "start": 397,
              "end": 402
            },
            "accessibility": null,
            "static": false,
            "start": 392,
            "end": 403
          },
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
              "start": 408,
              "end": 413
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "none",
                      "raw": "'none'",
                      "start": 415,
                      "end": 421
                    },
                    "start": 415,
                    "end": 421
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "done",
                      "raw": "'done'",
                      "start": 424,
                      "end": 430
                    },
                    "start": 424,
                    "end": 430
                  }
                ],
                "start": 415,
                "end": 430
              },
              "start": 413,
              "end": 430
            },
            "accessibility": null,
            "static": false,
            "start": 408,
            "end": 431
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 442
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 446,
                "end": 450
              },
              "start": 444,
              "end": 450
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 436,
            "end": 451
          }
        ],
        "start": 386,
        "end": 453
      },
      "declare": false,
      "start": 373,
      "end": 453
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 464,
        "end": 468
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
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
                    "name": "X2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 474,
                    "end": 476
                  },
                  "typeArguments": null,
                  "start": 474,
                  "end": 476
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 479,
                    "end": 481
                  },
                  "typeArguments": null,
                  "start": 479,
                  "end": 481
                }
              ],
              "start": 474,
              "end": 481
            },
            "start": 472,
            "end": 481
          },
          "start": 469,
          "end": 481
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 483,
        "end": 486
      },
      "expression": false,
      "start": 455,
      "end": 486
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 488,
          "end": 492
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
                  "name": "type2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 504
                },
                "value": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 506,
                  "end": 509
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 499,
                "end": 509
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 520
                },
                "value": {
                  "type": "Literal",
                  "value": "done",
                  "raw": "'done'",
                  "start": 522,
                  "end": 528
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 515,
                "end": 528
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 534,
                  "end": 540
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "ThisExpression",
                          "start": 553,
                          "end": 557
                        },
                        "directive": null,
                        "start": 553,
                        "end": 558
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 567,
                            "end": 571
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 572,
                            "end": 577
                          },
                          "optional": false,
                          "computed": false,
                          "start": 567,
                          "end": 577
                        },
                        "directive": null,
                        "start": 567,
                        "end": 578
                      }
                    ],
                    "start": 543,
                    "end": 584
                  },
                  "expression": false,
                  "start": 540,
                  "end": 584
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 534,
                "end": 584
              }
            ],
            "start": 493,
            "end": 586
          }
        ],
        "optional": false,
        "start": 488,
        "end": 587
      },
      "directive": null,
      "start": 488,
      "end": 588
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X3",
        "optional": false,
        "typeAnnotation": null,
        "start": 600,
        "end": 602
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 613
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 615,
                  "end": 618
                },
                "start": 615,
                "end": 618
              },
              "start": 613,
              "end": 618
            },
            "accessibility": null,
            "static": false,
            "start": 609,
            "end": 619
          },
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
              "start": 624,
              "end": 629
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 631,
                      "end": 632
                    },
                    "start": 631,
                    "end": 632
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 635,
                      "end": 636
                    },
                    "start": 635,
                    "end": 636
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 639,
                      "end": 640
                    },
                    "start": 639,
                    "end": 640
                  }
                ],
                "start": 631,
                "end": 640
              },
              "start": 629,
              "end": 640
            },
            "accessibility": null,
            "static": false,
            "start": 624,
            "end": 641
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "xtra",
              "optional": false,
              "typeAnnotation": null,
              "start": 646,
              "end": 650
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 652,
                "end": 658
              },
              "start": 650,
              "end": 658
            },
            "accessibility": null,
            "static": false,
            "start": 646,
            "end": 659
          }
        ],
        "start": 603,
        "end": 661
      },
      "declare": false,
      "start": 590,
      "end": 661
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y3",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 675
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 686
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 688,
                  "end": 691
                },
                "start": 688,
                "end": 691
              },
              "start": 686,
              "end": 691
            },
            "accessibility": null,
            "static": false,
            "start": 682,
            "end": 692
          },
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
              "start": 697,
              "end": 702
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 11,
                      "raw": "11",
                      "start": 704,
                      "end": 706
                    },
                    "start": 704,
                    "end": 706
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 709,
                      "end": 711
                    },
                    "start": 709,
                    "end": 711
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 13,
                      "raw": "13",
                      "start": 714,
                      "end": 716
                    },
                    "start": 714,
                    "end": 716
                  }
                ],
                "start": 704,
                "end": 716
              },
              "start": 702,
              "end": 716
            },
            "accessibility": null,
            "static": false,
            "start": 697,
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
              "name": "ytra",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 726
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 728,
                "end": 734
              },
              "start": 726,
              "end": 734
            },
            "accessibility": null,
            "static": false,
            "start": 722,
            "end": 735
          }
        ],
        "start": 676,
        "end": 737
      },
      "declare": false,
      "start": 663,
      "end": 737
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
            "name": "xy",
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
                      "name": "X3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 747,
                      "end": 749
                    },
                    "typeArguments": null,
                    "start": 747,
                    "end": 749
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Y3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 752,
                      "end": 754
                    },
                    "typeArguments": null,
                    "start": 752,
                    "end": 754
                  }
                ],
                "start": 747,
                "end": 754
              },
              "start": 745,
              "end": 754
            },
            "start": 743,
            "end": 754
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 763,
                  "end": 767
                },
                "value": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 769,
                  "end": 772
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 763,
                "end": 772
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 778,
                  "end": 783
                },
                "value": {
                  "type": "Literal",
                  "value": 11,
                  "raw": "11",
                  "start": 785,
                  "end": 787
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 778,
                "end": 787
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ytra",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 793,
                  "end": 797
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 799,
                  "end": 801
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 793,
                "end": 801
              }
            ],
            "start": 757,
            "end": 803
          },
          "definite": false,
          "start": 743,
          "end": 803
        }
      ],
      "declare": false,
      "start": 739,
      "end": 804
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "xy",
        "optional": false,
        "typeAnnotation": null,
        "start": 806,
        "end": 808
      },
      "directive": null,
      "start": 806,
      "end": 809
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LikeA",
        "optional": false,
        "typeAnnotation": null,
        "start": 822,
        "end": 827
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 834,
              "end": 835
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 837,
                  "end": 840
                },
                "start": 837,
                "end": 840
              },
              "start": 835,
              "end": 840
            },
            "accessibility": null,
            "static": false,
            "start": 834,
            "end": 841
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
              "start": 846,
              "end": 847
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 849,
                  "end": 852
                },
                "start": 849,
                "end": 852
              },
              "start": 847,
              "end": 852
            },
            "accessibility": null,
            "static": false,
            "start": 846,
            "end": 853
          },
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
              "start": 858,
              "end": 863
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 865,
                "end": 871
              },
              "start": 863,
              "end": 871
            },
            "accessibility": null,
            "static": false,
            "start": 858,
            "end": 872
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 877,
              "end": 883
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 887,
                "end": 891
              },
              "start": 885,
              "end": 891
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 877,
            "end": 892
          }
        ],
        "start": 828,
        "end": 894
      },
      "declare": false,
      "start": 812,
      "end": 894
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LikeB",
        "optional": false,
        "typeAnnotation": null,
        "start": 906,
        "end": 911
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 918,
              "end": 919
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "xx",
                  "raw": "'xx'",
                  "start": 921,
                  "end": 925
                },
                "start": 921,
                "end": 925
              },
              "start": 919,
              "end": 925
            },
            "accessibility": null,
            "static": false,
            "start": 918,
            "end": 926
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
              "start": 931,
              "end": 932
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "yy",
                  "raw": "'yy'",
                  "start": 934,
                  "end": 938
                },
                "start": 934,
                "end": 938
              },
              "start": 932,
              "end": 938
            },
            "accessibility": null,
            "static": false,
            "start": 931,
            "end": 939
          },
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
              "start": 944,
              "end": 949
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 951,
                "end": 957
              },
              "start": 949,
              "end": 957
            },
            "accessibility": null,
            "static": false,
            "start": 944,
            "end": 958
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 963,
              "end": 969
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 973,
                "end": 977
              },
              "start": 971,
              "end": 977
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 963,
            "end": 978
          }
        ],
        "start": 912,
        "end": 980
      },
      "declare": false,
      "start": 896,
      "end": 980
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
            "name": "xyz",
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
                      "name": "LikeA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 991,
                      "end": 996
                    },
                    "typeArguments": null,
                    "start": 991,
                    "end": 996
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LikeB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 999,
                      "end": 1004
                    },
                    "typeArguments": null,
                    "start": 999,
                    "end": 1004
                  }
                ],
                "start": 991,
                "end": 1004
              },
              "start": 989,
              "end": 1004
            },
            "start": 986,
            "end": 1004
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1013,
                  "end": 1014
                },
                "value": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 1016,
                  "end": 1019
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1013,
                "end": 1019
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1025,
                  "end": 1026
                },
                "value": {
                  "type": "Literal",
                  "value": "y",
                  "raw": "'y'",
                  "start": 1028,
                  "end": 1031
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1025,
                "end": 1031
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1037,
                  "end": 1042
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 1044,
                  "end": 1049
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1037,
                "end": 1049
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1055,
                  "end": 1061
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "ThisExpression",
                          "start": 1074,
                          "end": 1078
                        },
                        "directive": null,
                        "start": 1074,
                        "end": 1079
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1088,
                            "end": 1092
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1093,
                            "end": 1094
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1088,
                          "end": 1094
                        },
                        "directive": null,
                        "start": 1088,
                        "end": 1095
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1104,
                            "end": 1108
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1109,
                            "end": 1110
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1104,
                          "end": 1110
                        },
                        "directive": null,
                        "start": 1104,
                        "end": 1111
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1120,
                            "end": 1124
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1125,
                            "end": 1130
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1120,
                          "end": 1130
                        },
                        "directive": null,
                        "start": 1120,
                        "end": 1131
                      }
                    ],
                    "start": 1064,
                    "end": 1137
                  },
                  "expression": false,
                  "start": 1061,
                  "end": 1137
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1055,
                "end": 1137
              }
            ],
            "start": 1007,
            "end": 1139
          },
          "definite": false,
          "start": 986,
          "end": 1139
        }
      ],
      "declare": false,
      "start": 982,
      "end": 1140
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "xyz",
        "optional": false,
        "typeAnnotation": null,
        "start": 1142,
        "end": 1145
      },
      "directive": null,
      "start": 1142,
      "end": 1146
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 1180,
        "end": 1190
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1195,
              "end": 1199
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 1202,
                  "end": 1210
                },
                "start": 1202,
                "end": 1210
              },
              "start": 1200,
              "end": 1210
            },
            "accessibility": null,
            "static": false,
            "start": 1195,
            "end": 1211
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "items",
              "optional": false,
              "typeAnnotation": null,
              "start": 1214,
              "end": 1219
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1231,
                            "end": 1237
                          },
                          "start": 1229,
                          "end": 1237
                        },
                        "start": 1228,
                        "end": 1237
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TestGeneric",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1240,
                          "end": 1251
                        },
                        "typeArguments": null,
                        "start": 1240,
                        "end": 1251
                      },
                      "start": 1238,
                      "end": 1251
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1227,
                    "end": 1252
                  }
                ],
                "start": 1221,
                "end": 1256
              },
              "start": 1219,
              "end": 1256
            },
            "accessibility": null,
            "static": false,
            "start": 1214,
            "end": 1257
          }
        ],
        "start": 1191,
        "end": 1259
      },
      "declare": false,
      "start": 1170,
      "end": 1259
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestString",
        "optional": false,
        "typeAnnotation": null,
        "start": 1271,
        "end": 1281
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1286,
              "end": 1290
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 1292,
                  "end": 1300
                },
                "start": 1292,
                "end": 1300
              },
              "start": 1290,
              "end": 1300
            },
            "accessibility": null,
            "static": false,
            "start": 1286,
            "end": 1301
          }
        ],
        "start": 1282,
        "end": 1303
      },
      "declare": false,
      "start": 1261,
      "end": 1303
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestGeneric",
        "optional": false,
        "typeAnnotation": null,
        "start": 1310,
        "end": 1321
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1325,
                  "end": 1335
                },
                "typeArguments": null,
                "start": 1325,
                "end": 1335
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1338,
                  "end": 1348
                },
                "typeArguments": null,
                "start": 1338,
                "end": 1348
              }
            ],
            "start": 1325,
            "end": 1348
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1358,
                        "end": 1364
                      },
                      "start": 1356,
                      "end": 1364
                    },
                    "start": 1355,
                    "end": 1364
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1367,
                    "end": 1370
                  },
                  "start": 1365,
                  "end": 1370
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 1354,
                "end": 1371
              }
            ],
            "start": 1352,
            "end": 1373
          }
        ],
        "start": 1324,
        "end": 1373
      },
      "declare": false,
      "start": 1305,
      "end": 1374
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
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestGeneric",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1388,
                  "end": 1399
                },
                "typeArguments": null,
                "start": 1388,
                "end": 1399
              },
              "start": 1386,
              "end": 1399
            },
            "start": 1382,
            "end": 1399
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
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1406,
                  "end": 1411
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
                        "name": "hello",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1419,
                        "end": 1424
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
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1428,
                              "end": 1432
                            },
                            "value": {
                              "type": "Literal",
                              "value": "string",
                              "raw": "'string'",
                              "start": 1434,
                              "end": 1442
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1428,
                            "end": 1442
                          }
                        ],
                        "start": 1426,
                        "end": 1444
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1419,
                      "end": 1444
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "world",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1450,
                        "end": 1455
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
                              "name": "items",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1465,
                              "end": 1470
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
                                    "name": "nested",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1482,
                                    "end": 1488
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
                                          "name": "type",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1492,
                                          "end": 1496
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": "string",
                                          "raw": "'string'",
                                          "start": 1498,
                                          "end": 1506
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1492,
                                        "end": 1506
                                      }
                                    ],
                                    "start": 1490,
                                    "end": 1508
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1482,
                                  "end": 1508
                                }
                              ],
                              "start": 1472,
                              "end": 1516
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1465,
                            "end": 1516
                          }
                        ],
                        "start": 1457,
                        "end": 1522
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1450,
                      "end": 1522
                    }
                  ],
                  "start": 1413,
                  "end": 1526
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1406,
                "end": 1526
              }
            ],
            "start": 1402,
            "end": 1528
          },
          "definite": false,
          "start": 1382,
          "end": 1528
        }
      ],
      "declare": false,
      "start": 1376,
      "end": 1529
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1529
}
```

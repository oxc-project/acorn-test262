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
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 29
      },
      "typeParameters": null,
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
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
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
            "start": 32,
            "end": 44
          }
        ],
        "start": 30,
        "end": 46
      },
      "abstract": false,
      "declare": false,
      "start": 21,
      "end": 46
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 55
      },
      "typeParameters": null,
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
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 64,
                  "end": 70
                },
                "start": 64,
                "end": 72
              },
              "start": 62,
              "end": 72
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
            "start": 58,
            "end": 72
          }
        ],
        "start": 56,
        "end": 74
      },
      "abstract": false,
      "declare": false,
      "start": 47,
      "end": 74
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 83
      },
      "typeParameters": null,
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
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 90
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 92,
                "end": 98
              },
              "start": 90,
              "end": 98
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
            "start": 86,
            "end": 98
          }
        ],
        "start": 84,
        "end": 100
      },
      "abstract": false,
      "declare": false,
      "start": 75,
      "end": 100
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 115
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 121
                  },
                  "typeArguments": null,
                  "start": 119,
                  "end": 121
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 126
                  },
                  "typeArguments": null,
                  "start": 124,
                  "end": 126
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 131
                  },
                  "typeArguments": null,
                  "start": 129,
                  "end": 131
                }
              ],
              "start": 119,
              "end": 131
            },
            "start": 117,
            "end": 131
          },
          "start": 116,
          "end": 131
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 134,
          "end": 140
        },
        "start": 132,
        "end": 140
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 152
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 166
              },
              "start": 151,
              "end": 166
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 185,
                      "end": 186
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 187,
                      "end": 191
                    },
                    "optional": false,
                    "computed": false,
                    "start": 185,
                    "end": 191
                  },
                  "start": 178,
                  "end": 192
                }
              ],
              "start": 168,
              "end": 198
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 213
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 227
                },
                "start": 212,
                "end": 227
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 246,
                          "end": 247
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 248,
                          "end": 252
                        },
                        "optional": false,
                        "computed": false,
                        "start": 246,
                        "end": 252
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 253,
                        "end": 254
                      },
                      "optional": false,
                      "computed": true,
                      "start": 246,
                      "end": 255
                    },
                    "start": 239,
                    "end": 256
                  }
                ],
                "start": 229,
                "end": 262
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 276,
                    "end": 277
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 289,
                    "end": 291
                  },
                  "start": 276,
                  "end": 291
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 310,
                          "end": 311
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 312,
                          "end": 316
                        },
                        "optional": false,
                        "computed": false,
                        "start": 310,
                        "end": 316
                      },
                      "start": 303,
                      "end": 317
                    }
                  ],
                  "start": 293,
                  "end": 323
                },
                "alternate": null,
                "start": 272,
                "end": 323
              },
              "start": 208,
              "end": 323
            },
            "start": 147,
            "end": 323
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "error",
              "raw": "\"error\"",
              "start": 335,
              "end": 342
            },
            "start": 328,
            "end": 343
          }
        ],
        "start": 141,
        "end": 345
      },
      "expression": false,
      "start": 102,
      "end": 345
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isC1",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 360
      },
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
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 366
                  },
                  "typeArguments": null,
                  "start": 364,
                  "end": 366
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 369,
                    "end": 371
                  },
                  "typeArguments": null,
                  "start": 369,
                  "end": 371
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 374,
                    "end": 376
                  },
                  "typeArguments": null,
                  "start": 374,
                  "end": 376
                }
              ],
              "start": 364,
              "end": 376
            },
            "start": 362,
            "end": 376
          },
          "start": 361,
          "end": 376
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 379,
            "end": 380
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 384,
                "end": 386
              },
              "typeArguments": null,
              "start": 384,
              "end": 386
            },
            "start": 384,
            "end": 386
          },
          "start": 379,
          "end": 386
        },
        "start": 377,
        "end": 386
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 397
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 411
              },
              "start": 396,
              "end": 411
            },
            "start": 389,
            "end": 411
          }
        ],
        "start": 387,
        "end": 413
      },
      "expression": false,
      "start": 347,
      "end": 413
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 427
      },
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
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 431,
                    "end": 433
                  },
                  "typeArguments": null,
                  "start": 431,
                  "end": 433
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 438
                  },
                  "typeArguments": null,
                  "start": 436,
                  "end": 438
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 441,
                    "end": 443
                  },
                  "typeArguments": null,
                  "start": 441,
                  "end": 443
                }
              ],
              "start": 431,
              "end": 443
            },
            "start": 429,
            "end": 443
          },
          "start": 428,
          "end": 443
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 446,
            "end": 447
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 453
              },
              "typeArguments": null,
              "start": 451,
              "end": 453
            },
            "start": 451,
            "end": 453
          },
          "start": 446,
          "end": 453
        },
        "start": 444,
        "end": 453
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 464
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 476,
                "end": 478
              },
              "start": 463,
              "end": 478
            },
            "start": 456,
            "end": 478
          }
        ],
        "start": 454,
        "end": 480
      },
      "expression": false,
      "start": 414,
      "end": 480
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isC3",
        "optional": false,
        "typeAnnotation": null,
        "start": 490,
        "end": 494
      },
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
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 498,
                    "end": 500
                  },
                  "typeArguments": null,
                  "start": 498,
                  "end": 500
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 503,
                    "end": 505
                  },
                  "typeArguments": null,
                  "start": 503,
                  "end": 505
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 508,
                    "end": 510
                  },
                  "typeArguments": null,
                  "start": 508,
                  "end": 510
                }
              ],
              "start": 498,
              "end": 510
            },
            "start": 496,
            "end": 510
          },
          "start": 495,
          "end": 510
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 513,
            "end": 514
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3",
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 520
              },
              "typeArguments": null,
              "start": 518,
              "end": 520
            },
            "start": 518,
            "end": 520
          },
          "start": 513,
          "end": 520
        },
        "start": 511,
        "end": 520
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 530,
                "end": 531
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3",
                "optional": false,
                "typeAnnotation": null,
                "start": 543,
                "end": 545
              },
              "start": 530,
              "end": 545
            },
            "start": 523,
            "end": 545
          }
        ],
        "start": 521,
        "end": 547
      },
      "expression": false,
      "start": 481,
      "end": 547
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 558,
        "end": 562
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 566,
                    "end": 568
                  },
                  "typeArguments": null,
                  "start": 566,
                  "end": 568
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 571,
                    "end": 573
                  },
                  "typeArguments": null,
                  "start": 571,
                  "end": 573
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 576,
                    "end": 578
                  },
                  "typeArguments": null,
                  "start": 576,
                  "end": 578
                }
              ],
              "start": 566,
              "end": 578
            },
            "start": 564,
            "end": 578
          },
          "start": 563,
          "end": 578
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 581,
          "end": 587
        },
        "start": 579,
        "end": 587
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isC1",
                "optional": false,
                "typeAnnotation": null,
                "start": 598,
                "end": 602
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 603,
                  "end": 604
                }
              ],
              "optional": false,
              "start": 598,
              "end": 605
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 624,
                      "end": 625
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 626,
                      "end": 630
                    },
                    "optional": false,
                    "computed": false,
                    "start": 624,
                    "end": 630
                  },
                  "start": 617,
                  "end": 631
                }
              ],
              "start": 607,
              "end": 637
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isC2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 651,
                  "end": 655
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 656,
                    "end": 657
                  }
                ],
                "optional": false,
                "start": 651,
                "end": 658
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 677,
                          "end": 678
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 679,
                          "end": 683
                        },
                        "optional": false,
                        "computed": false,
                        "start": 677,
                        "end": 683
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 684,
                        "end": 685
                      },
                      "optional": false,
                      "computed": true,
                      "start": 677,
                      "end": 686
                    },
                    "start": 670,
                    "end": 687
                  }
                ],
                "start": 660,
                "end": 693
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isC3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 707,
                    "end": 711
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 712,
                      "end": 713
                    }
                  ],
                  "optional": false,
                  "start": 707,
                  "end": 714
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 733,
                          "end": 734
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 735,
                          "end": 739
                        },
                        "optional": false,
                        "computed": false,
                        "start": 733,
                        "end": 739
                      },
                      "start": 726,
                      "end": 740
                    }
                  ],
                  "start": 716,
                  "end": 746
                },
                "alternate": null,
                "start": 703,
                "end": 746
              },
              "start": 647,
              "end": 746
            },
            "start": 594,
            "end": 746
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "error",
              "raw": "\"error\"",
              "start": 758,
              "end": 765
            },
            "start": 751,
            "end": 766
          }
        ],
        "start": 588,
        "end": 768
      },
      "expression": false,
      "start": 549,
      "end": 768
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 791,
        "end": 792
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 796
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 798,
                "end": 804
              },
              "start": 796,
              "end": 804
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
            "start": 795,
            "end": 804
          }
        ],
        "start": 793,
        "end": 806
      },
      "abstract": false,
      "declare": false,
      "start": 785,
      "end": 806
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 813,
        "end": 815
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 824,
        "end": 825
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 826,
        "end": 829
      },
      "abstract": false,
      "declare": false,
      "start": 807,
      "end": 829
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 836,
        "end": 838
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 841,
              "end": 842
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 844,
                "end": 850
              },
              "start": 842,
              "end": 850
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
            "start": 841,
            "end": 850
          }
        ],
        "start": 839,
        "end": 852
      },
      "abstract": false,
      "declare": false,
      "start": 830,
      "end": 852
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 859,
        "end": 860
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 869,
        "end": 870
      },
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 873,
              "end": 874
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 876,
                "end": 882
              },
              "start": 874,
              "end": 882
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
            "start": 873,
            "end": 882
          }
        ],
        "start": 871,
        "end": 884
      },
      "abstract": false,
      "declare": false,
      "start": 853,
      "end": 884
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "goo",
        "optional": false,
        "typeAnnotation": null,
        "start": 895,
        "end": 898
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 902,
                "end": 903
              },
              "typeArguments": null,
              "start": 902,
              "end": 903
            },
            "start": 900,
            "end": 903
          },
          "start": 899,
          "end": 903
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 915,
                "end": 916
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 928,
                "end": 929
              },
              "start": 915,
              "end": 929
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 941,
                    "end": 942
                  },
                  "directive": null,
                  "start": 941,
                  "end": 943
                }
              ],
              "start": 931,
              "end": 955
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 975,
                    "end": 976
                  },
                  "directive": null,
                  "start": 975,
                  "end": 977
                }
              ],
              "start": 965,
              "end": 993
            },
            "start": 911,
            "end": 993
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1002,
                "end": 1003
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1015,
                "end": 1017
              },
              "start": 1002,
              "end": 1017
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1029,
                    "end": 1030
                  },
                  "directive": null,
                  "start": 1029,
                  "end": 1031
                }
              ],
              "start": 1019,
              "end": 1044
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1064,
                    "end": 1065
                  },
                  "directive": null,
                  "start": 1064,
                  "end": 1066
                }
              ],
              "start": 1054,
              "end": 1078
            },
            "start": 998,
            "end": 1078
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1087,
                "end": 1088
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1100,
                "end": 1102
              },
              "start": 1087,
              "end": 1102
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1114,
                    "end": 1115
                  },
                  "directive": null,
                  "start": 1114,
                  "end": 1116
                }
              ],
              "start": 1104,
              "end": 1129
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1149,
                    "end": 1150
                  },
                  "directive": null,
                  "start": 1149,
                  "end": 1151
                }
              ],
              "start": 1139,
              "end": 1163
            },
            "start": 1083,
            "end": 1163
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1172,
                "end": 1173
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1185,
                "end": 1186
              },
              "start": 1172,
              "end": 1186
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1198,
                    "end": 1199
                  },
                  "directive": null,
                  "start": 1198,
                  "end": 1200
                }
              ],
              "start": 1188,
              "end": 1212
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1232,
                    "end": 1233
                  },
                  "directive": null,
                  "start": 1232,
                  "end": 1234
                }
              ],
              "start": 1222,
              "end": 1246
            },
            "start": 1168,
            "end": 1246
          }
        ],
        "start": 905,
        "end": 1248
      },
      "expression": false,
      "start": 886,
      "end": 1248
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 1248
}
```

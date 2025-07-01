__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 57,
          "end": 60
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 63,
          "end": 66
        },
        "expression": false,
        "start": 48,
        "end": 66
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 41,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 128,
          "end": 145
        },
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 178,
                "end": 184
              },
              "start": 176,
              "end": 184
            },
            "start": 175,
            "end": 184
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 225,
                "end": 231
              },
              "start": 223,
              "end": 231
            },
            "start": 222,
            "end": 231
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
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
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 244
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 248
                  },
                  "definite": false,
                  "start": 243,
                  "end": 248
                }
              ],
              "declare": false,
              "start": 239,
              "end": 249
            }
          ],
          "start": 233,
          "end": 251
        },
        "expression": false,
        "start": 119,
        "end": 251
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 112,
      "end": 251
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithRestParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 268,
          "end": 289
        },
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 293,
                "end": 299
              },
              "start": 291,
              "end": 299
            },
            "start": 290,
            "end": 299
          },
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "rests",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 309
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 311,
                  "end": 317
                },
                "start": 311,
                "end": 319
              },
              "start": 309,
              "end": 319
            },
            "value": null,
            "start": 301,
            "end": 319
          }
        ],
        "returnType": null,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 335
                },
                "operator": "+",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rests",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 338,
                      "end": 343
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "join",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 344,
                      "end": 348
                    },
                    "optional": false,
                    "computed": false,
                    "start": 338,
                    "end": 348
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 349,
                      "end": 351
                    }
                  ],
                  "optional": false,
                  "start": 338,
                  "end": 352
                },
                "start": 334,
                "end": 352
              },
              "start": 327,
              "end": 353
            }
          ],
          "start": 321,
          "end": 355
        },
        "expression": false,
        "start": 259,
        "end": 355
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 252,
      "end": 355
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithOverloads",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 389
        },
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 393,
                "end": 399
              },
              "start": 391,
              "end": 399
            },
            "start": 390,
            "end": 399
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 402,
            "end": 408
          },
          "start": 400,
          "end": 408
        },
        "body": null,
        "expression": false,
        "start": 364,
        "end": 409
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 357,
      "end": 409
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithOverloads",
          "optional": false,
          "typeAnnotation": null,
          "start": 426,
          "end": 442
        },
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 446,
                "end": 452
              },
              "start": 444,
              "end": 452
            },
            "start": 443,
            "end": 452
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 455,
            "end": 461
          },
          "start": 453,
          "end": 461
        },
        "body": null,
        "expression": false,
        "start": 417,
        "end": 462
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 410,
      "end": 462
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithOverloads",
          "optional": false,
          "typeAnnotation": null,
          "start": 479,
          "end": 495
        },
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 499,
                "end": 502
              },
              "start": 497,
              "end": 502
            },
            "start": 496,
            "end": 502
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 505,
            "end": 508
          },
          "start": 503,
          "end": 508
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 523
              },
              "start": 515,
              "end": 524
            }
          ],
          "start": 509,
          "end": 526
        },
        "expression": false,
        "start": 470,
        "end": 526
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 463,
      "end": 526
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithSingleOverload",
          "optional": false,
          "typeAnnotation": null,
          "start": 544,
          "end": 565
        },
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 569,
                "end": 575
              },
              "start": 567,
              "end": 575
            },
            "start": 566,
            "end": 575
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 578,
            "end": 584
          },
          "start": 576,
          "end": 584
        },
        "body": null,
        "expression": false,
        "start": 535,
        "end": 585
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 528,
      "end": 585
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithSingleOverload",
          "optional": false,
          "typeAnnotation": null,
          "start": 602,
          "end": 623
        },
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 627,
                "end": 630
              },
              "start": 625,
              "end": 630
            },
            "start": 624,
            "end": 630
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 645,
                "end": 646
              },
              "start": 638,
              "end": 647
            }
          ],
          "start": 632,
          "end": 649
        },
        "expression": false,
        "start": 593,
        "end": 649
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 586,
      "end": 649
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithTypePredicate",
          "optional": false,
          "typeAnnotation": null,
          "start": 667,
          "end": 687
        },
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 691,
                "end": 694
              },
              "start": 689,
              "end": 694
            },
            "start": 688,
            "end": 694
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 698
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 702,
                "end": 708
              },
              "start": 702,
              "end": 708
            },
            "start": 697,
            "end": 708
          },
          "start": 695,
          "end": 708
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 722,
                "end": 726
              },
              "start": 715,
              "end": 727
            }
          ],
          "start": 709,
          "end": 729
        },
        "expression": false,
        "start": 658,
        "end": 729
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 651,
      "end": 729
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithTypePredicateAndMulitpleParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 746,
          "end": 783
        },
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 787,
                "end": 790
              },
              "start": 785,
              "end": 790
            },
            "start": 784,
            "end": 790
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 795,
                "end": 798
              },
              "start": 793,
              "end": 798
            },
            "start": 792,
            "end": 798
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 803,
                "end": 806
              },
              "start": 801,
              "end": 806
            },
            "start": 800,
            "end": 806
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 809,
              "end": 810
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 814,
                "end": 820
              },
              "start": 814,
              "end": 820
            },
            "start": 809,
            "end": 820
          },
          "start": 807,
          "end": 820
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 834,
                "end": 838
              },
              "start": 827,
              "end": 839
            }
          ],
          "start": 821,
          "end": 841
        },
        "expression": false,
        "start": 737,
        "end": 841
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 730,
      "end": 841
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithTypeTypePredicateAndGeneric",
          "optional": false,
          "typeAnnotation": null,
          "start": 858,
          "end": 892
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
                "start": 893,
                "end": 894
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 893,
              "end": 894
            }
          ],
          "start": 892,
          "end": 895
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 899,
                "end": 902
              },
              "start": 897,
              "end": 902
            },
            "start": 896,
            "end": 902
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 905,
              "end": 906
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
                  "start": 910,
                  "end": 911
                },
                "typeArguments": null,
                "start": 910,
                "end": 911
              },
              "start": 910,
              "end": 911
            },
            "start": 905,
            "end": 911
          },
          "start": 903,
          "end": 911
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 925,
                "end": 929
              },
              "start": 918,
              "end": 930
            }
          ],
          "start": 912,
          "end": 932
        },
        "expression": false,
        "start": 849,
        "end": 932
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 842,
      "end": 932
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooWithTypeTypePredicateAndRestParam",
          "optional": false,
          "typeAnnotation": null,
          "start": 949,
          "end": 985
        },
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 989,
                "end": 992
              },
              "start": 987,
              "end": 992
            },
            "start": 986,
            "end": 992
          },
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null,
              "start": 997,
              "end": 1001
            },
            "optional": false,
            "typeAnnotation": null,
            "value": null,
            "start": 994,
            "end": 1001
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1004,
              "end": 1005
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1009,
                "end": 1015
              },
              "start": 1009,
              "end": 1015
            },
            "start": 1004,
            "end": 1015
          },
          "start": 1002,
          "end": 1015
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1029,
                "end": 1033
              },
              "start": 1022,
              "end": 1034
            }
          ],
          "start": 1016,
          "end": 1036
        },
        "expression": false,
        "start": 940,
        "end": 1036
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 933,
      "end": 1036
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1099,
        "end": 1113
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1116,
        "end": 1119
      },
      "expression": false,
      "start": 1090,
      "end": 1119
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFooWithParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 1174,
        "end": 1202
      },
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1235,
              "end": 1241
            },
            "start": 1233,
            "end": 1241
          },
          "start": 1232,
          "end": 1241
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1282,
              "end": 1288
            },
            "start": 1280,
            "end": 1288
          },
          "start": 1279,
          "end": 1288
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1300,
                  "end": 1301
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1304,
                  "end": 1305
                },
                "definite": false,
                "start": 1300,
                "end": 1305
              }
            ],
            "declare": false,
            "start": 1296,
            "end": 1306
          }
        ],
        "start": 1290,
        "end": 1308
      },
      "expression": false,
      "start": 1165,
      "end": 1308
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFooWithRestParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 1318,
        "end": 1350
      },
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1354,
              "end": 1360
            },
            "start": 1352,
            "end": 1360
          },
          "start": 1351,
          "end": 1360
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rests",
            "optional": false,
            "typeAnnotation": null,
            "start": 1365,
            "end": 1370
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1372,
                "end": 1378
              },
              "start": 1372,
              "end": 1380
            },
            "start": 1370,
            "end": 1380
          },
          "value": null,
          "start": 1362,
          "end": 1380
        }
      ],
      "returnType": null,
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1395,
                "end": 1396
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1399,
                    "end": 1404
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "join",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1405,
                    "end": 1409
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1399,
                  "end": 1409
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 1410,
                    "end": 1412
                  }
                ],
                "optional": false,
                "start": 1399,
                "end": 1413
              },
              "start": 1395,
              "end": 1413
            },
            "start": 1388,
            "end": 1414
          }
        ],
        "start": 1382,
        "end": 1416
      },
      "expression": false,
      "start": 1309,
      "end": 1416
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFooWithOverloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 1427,
        "end": 1454
      },
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1458,
              "end": 1464
            },
            "start": 1456,
            "end": 1464
          },
          "start": 1455,
          "end": 1464
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1467,
          "end": 1473
        },
        "start": 1465,
        "end": 1473
      },
      "body": null,
      "expression": false,
      "start": 1418,
      "end": 1474
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFooWithOverloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 1484,
        "end": 1511
      },
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1515,
              "end": 1521
            },
            "start": 1513,
            "end": 1521
          },
          "start": 1512,
          "end": 1521
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1524,
          "end": 1530
        },
        "start": 1522,
        "end": 1530
      },
      "body": null,
      "expression": false,
      "start": 1475,
      "end": 1531
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonExportedFooWithOverloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 1541,
        "end": 1568
      },
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1572,
              "end": 1575
            },
            "start": 1570,
            "end": 1575
          },
          "start": 1569,
          "end": 1575
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1578,
          "end": 1581
        },
        "start": 1576,
        "end": 1581
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1595,
              "end": 1596
            },
            "start": 1588,
            "end": 1597
          }
        ],
        "start": 1582,
        "end": 1599
      },
      "expression": false,
      "start": 1532,
      "end": 1599
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 41,
  "end": 1600
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 59
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 62,
        "end": 65
      },
      "expression": false,
      "start": 41,
      "end": 65
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfooWithParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 143
      },
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 176,
              "end": 182
            },
            "start": 174,
            "end": 182
          },
          "start": 173,
          "end": 182
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 223,
              "end": 229
            },
            "start": 221,
            "end": 229
          },
          "start": 220,
          "end": 229
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 241,
                  "end": 242
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 246
                },
                "definite": false,
                "start": 241,
                "end": 246
              }
            ],
            "declare": false,
            "start": 237,
            "end": 247
          }
        ],
        "start": 231,
        "end": 249
      },
      "expression": false,
      "start": 111,
      "end": 249
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfooWithRestParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 286
      },
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 290,
              "end": 296
            },
            "start": 288,
            "end": 296
          },
          "start": 287,
          "end": 296
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rests",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 306
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 308,
                "end": 314
              },
              "start": 308,
              "end": 316
            },
            "start": 306,
            "end": 316
          },
          "value": null,
          "start": 298,
          "end": 316
        }
      ],
      "returnType": null,
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 332
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 335,
                    "end": 340
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "join",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 345
                  },
                  "optional": false,
                  "computed": false,
                  "start": 335,
                  "end": 345
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 346,
                    "end": 348
                  }
                ],
                "optional": false,
                "start": 335,
                "end": 349
              },
              "start": 331,
              "end": 349
            },
            "start": 324,
            "end": 350
          }
        ],
        "start": 318,
        "end": 352
      },
      "expression": false,
      "start": 250,
      "end": 352
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfooWithOverloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 384
      },
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 388,
              "end": 394
            },
            "start": 386,
            "end": 394
          },
          "start": 385,
          "end": 394
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 397,
          "end": 403
        },
        "start": 395,
        "end": 403
      },
      "body": null,
      "expression": false,
      "start": 353,
      "end": 404
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfooWithOverloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 414,
        "end": 436
      },
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 440,
              "end": 446
            },
            "start": 438,
            "end": 446
          },
          "start": 437,
          "end": 446
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 449,
          "end": 455
        },
        "start": 447,
        "end": 455
      },
      "body": null,
      "expression": false,
      "start": 405,
      "end": 456
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "globalfooWithOverloads",
        "optional": false,
        "typeAnnotation": null,
        "start": 466,
        "end": 488
      },
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 492,
              "end": 495
            },
            "start": 490,
            "end": 495
          },
          "start": 489,
          "end": 495
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 498,
          "end": 501
        },
        "start": 496,
        "end": 501
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 516
            },
            "start": 508,
            "end": 517
          }
        ],
        "start": 502,
        "end": 519
      },
      "expression": false,
      "start": 457,
      "end": 519
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 41,
  "end": 519
}
```

declFileFunctions_0.ts
```json
{
  "type": "Program",
  "start": 41,
  "end": 1600,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 41,
      "end": 66,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 48,
        "end": 66,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 63,
          "end": 66,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 57,
          "end": 60,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 112,
      "end": 251,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 119,
        "end": 251,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 233,
          "end": 251,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 239,
              "end": 249,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 243,
                  "end": 248,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 244,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 247,
                    "end": 248,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 128,
          "end": 145,
          "decorators": [],
          "name": "fooWithParameters",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 175,
            "end": 184,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 184,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 178,
                "end": 184
              }
            }
          },
          {
            "type": "Identifier",
            "start": 222,
            "end": 231,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 223,
              "end": 231,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 225,
                "end": 231
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 252,
      "end": 355,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 259,
        "end": 355,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 321,
          "end": 355,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 327,
              "end": 353,
              "argument": {
                "type": "BinaryExpression",
                "start": 334,
                "end": 352,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 335,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "right": {
                  "type": "CallExpression",
                  "start": 338,
                  "end": 352,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 349,
                      "end": 351,
                      "raw": "\"\"",
                      "value": ""
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 338,
                    "end": 348,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 338,
                      "end": 343,
                      "decorators": [],
                      "name": "rests",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 344,
                      "end": 348,
                      "decorators": [],
                      "name": "join",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 268,
          "end": 289,
          "decorators": [],
          "name": "fooWithRestParameters",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 290,
            "end": 299,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 299,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 293,
                "end": 299
              }
            }
          },
          {
            "type": "RestElement",
            "start": 301,
            "end": 319,
            "argument": {
              "type": "Identifier",
              "start": 304,
              "end": 309,
              "decorators": [],
              "name": "rests",
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 309,
              "end": 319,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 311,
                "end": 319,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 311,
                  "end": 317
                }
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 357,
      "end": 409,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 364,
        "end": 409,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 373,
          "end": 389,
          "decorators": [],
          "name": "fooWithOverloads",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 390,
            "end": 399,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 391,
              "end": 399,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 393,
                "end": 399
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 400,
          "end": 408,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 402,
            "end": 408
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 410,
      "end": 462,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 417,
        "end": 462,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 426,
          "end": 442,
          "decorators": [],
          "name": "fooWithOverloads",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 443,
            "end": 452,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 444,
              "end": 452,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 446,
                "end": 452
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 453,
          "end": 461,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 455,
            "end": 461
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 463,
      "end": 526,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 470,
        "end": 526,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 509,
          "end": 526,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 515,
              "end": 524,
              "argument": {
                "type": "Identifier",
                "start": 522,
                "end": 523,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 479,
          "end": 495,
          "decorators": [],
          "name": "fooWithOverloads",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 496,
            "end": 502,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 497,
              "end": 502,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 499,
                "end": 502
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 503,
          "end": 508,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 505,
            "end": 508
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 528,
      "end": 585,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 535,
        "end": 585,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 544,
          "end": 565,
          "decorators": [],
          "name": "fooWithSingleOverload",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 566,
            "end": 575,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 567,
              "end": 575,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 569,
                "end": 575
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 576,
          "end": 584,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 578,
            "end": 584
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 586,
      "end": 649,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 593,
        "end": 649,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 632,
          "end": 649,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 638,
              "end": 647,
              "argument": {
                "type": "Identifier",
                "start": 645,
                "end": 646,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 602,
          "end": 623,
          "decorators": [],
          "name": "fooWithSingleOverload",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 624,
            "end": 630,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 625,
              "end": 630,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 627,
                "end": 630
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 651,
      "end": 729,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 658,
        "end": 729,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 709,
          "end": 729,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 715,
              "end": 727,
              "argument": {
                "type": "Literal",
                "start": 722,
                "end": 726,
                "raw": "true",
                "value": true
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 667,
          "end": 687,
          "decorators": [],
          "name": "fooWithTypePredicate",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 688,
            "end": 694,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 689,
              "end": 694,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 691,
                "end": 694
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 695,
          "end": 708,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 697,
            "end": 708,
            "asserts": false,
            "parameterName": {
              "type": "Identifier",
              "start": 697,
              "end": 698,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 702,
              "end": 708,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 702,
                "end": 708
              }
            }
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 730,
      "end": 841,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 737,
        "end": 841,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 821,
          "end": 841,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 827,
              "end": 839,
              "argument": {
                "type": "Literal",
                "start": 834,
                "end": 838,
                "raw": "true",
                "value": true
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 746,
          "end": 783,
          "decorators": [],
          "name": "fooWithTypePredicateAndMulitpleParams",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 784,
            "end": 790,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 785,
              "end": 790,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 787,
                "end": 790
              }
            }
          },
          {
            "type": "Identifier",
            "start": 792,
            "end": 798,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 793,
              "end": 798,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 795,
                "end": 798
              }
            }
          },
          {
            "type": "Identifier",
            "start": 800,
            "end": 806,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 801,
              "end": 806,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 803,
                "end": 806
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 807,
          "end": 820,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 809,
            "end": 820,
            "asserts": false,
            "parameterName": {
              "type": "Identifier",
              "start": 809,
              "end": 810,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 814,
              "end": 820,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 814,
                "end": 820
              }
            }
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 842,
      "end": 932,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 849,
        "end": 932,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 912,
          "end": 932,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 918,
              "end": 930,
              "argument": {
                "type": "Literal",
                "start": 925,
                "end": 929,
                "raw": "true",
                "value": true
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 858,
          "end": 892,
          "decorators": [],
          "name": "fooWithTypeTypePredicateAndGeneric",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 896,
            "end": 902,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 897,
              "end": 902,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 899,
                "end": 902
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 903,
          "end": 911,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 905,
            "end": 911,
            "asserts": false,
            "parameterName": {
              "type": "Identifier",
              "start": 905,
              "end": 906,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 910,
              "end": 911,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 910,
                "end": 911,
                "typeName": {
                  "type": "Identifier",
                  "start": 910,
                  "end": 911,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 892,
          "end": 895,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 893,
              "end": 894,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 893,
                "end": 894,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 933,
      "end": 1036,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 940,
        "end": 1036,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 1016,
          "end": 1036,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 1022,
              "end": 1034,
              "argument": {
                "type": "Literal",
                "start": 1029,
                "end": 1033,
                "raw": "true",
                "value": true
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 949,
          "end": 985,
          "decorators": [],
          "name": "fooWithTypeTypePredicateAndRestParam",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 986,
            "end": 992,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 987,
              "end": 992,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 989,
                "end": 992
              }
            }
          },
          {
            "type": "RestElement",
            "start": 994,
            "end": 1001,
            "argument": {
              "type": "Identifier",
              "start": 997,
              "end": 1001,
              "decorators": [],
              "name": "rest",
              "optional": false
            },
            "decorators": [],
            "optional": false
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1002,
          "end": 1015,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 1004,
            "end": 1015,
            "asserts": false,
            "parameterName": {
              "type": "Identifier",
              "start": 1004,
              "end": 1005,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1009,
              "end": 1015,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1009,
                "end": 1015
              }
            }
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1090,
      "end": 1119,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1116,
        "end": 1119,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1099,
        "end": 1113,
        "decorators": [],
        "name": "nonExportedFoo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1165,
      "end": 1308,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1290,
        "end": 1308,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1296,
            "end": 1306,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1300,
                "end": 1305,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1300,
                  "end": 1301,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1304,
                  "end": 1305,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1174,
        "end": 1202,
        "decorators": [],
        "name": "nonExportedFooWithParameters",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1232,
          "end": 1241,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1233,
            "end": 1241,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1235,
              "end": 1241
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1279,
          "end": 1288,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1280,
            "end": 1288,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1282,
              "end": 1288
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1309,
      "end": 1416,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1382,
        "end": 1416,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1388,
            "end": 1414,
            "argument": {
              "type": "BinaryExpression",
              "start": 1395,
              "end": 1413,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1395,
                "end": 1396,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1399,
                "end": 1413,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1410,
                    "end": 1412,
                    "raw": "\"\"",
                    "value": ""
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 1399,
                  "end": 1409,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1399,
                    "end": 1404,
                    "decorators": [],
                    "name": "rests",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1405,
                    "end": 1409,
                    "decorators": [],
                    "name": "join",
                    "optional": false
                  }
                },
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1318,
        "end": 1350,
        "decorators": [],
        "name": "nonExportedFooWithRestParameters",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1351,
          "end": 1360,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1352,
            "end": 1360,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1354,
              "end": 1360
            }
          }
        },
        {
          "type": "RestElement",
          "start": 1362,
          "end": 1380,
          "argument": {
            "type": "Identifier",
            "start": 1365,
            "end": 1370,
            "decorators": [],
            "name": "rests",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1370,
            "end": 1380,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1372,
              "end": 1380,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1372,
                "end": 1378
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1418,
      "end": 1474,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1427,
        "end": 1454,
        "decorators": [],
        "name": "nonExportedFooWithOverloads",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1455,
          "end": 1464,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1456,
            "end": 1464,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1458,
              "end": 1464
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1465,
        "end": 1473,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1467,
          "end": 1473
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1475,
      "end": 1531,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1484,
        "end": 1511,
        "decorators": [],
        "name": "nonExportedFooWithOverloads",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1512,
          "end": 1521,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1513,
            "end": 1521,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1515,
              "end": 1521
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1522,
        "end": 1530,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1524,
          "end": 1530
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1532,
      "end": 1599,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1582,
        "end": 1599,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1588,
            "end": 1597,
            "argument": {
              "type": "Identifier",
              "start": 1595,
              "end": 1596,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1541,
        "end": 1568,
        "decorators": [],
        "name": "nonExportedFooWithOverloads",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1569,
          "end": 1575,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1570,
            "end": 1575,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1572,
              "end": 1575
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1576,
        "end": 1581,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1578,
          "end": 1581
        }
      }
    }
  ],
  "sourceType": "module"
}
```
declFileFunctions_1.ts
```json
{
  "type": "Program",
  "start": 41,
  "end": 519,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 65,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 62,
        "end": 65,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 59,
        "decorators": [],
        "name": "globalfoo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 111,
      "end": 249,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 231,
        "end": 249,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 237,
            "end": 247,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 241,
                "end": 246,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 242,
                  "decorators": [],
                  "name": "d",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 246,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 143,
        "decorators": [],
        "name": "globalfooWithParameters",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 173,
          "end": 182,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 174,
            "end": 182,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 176,
              "end": 182
            }
          }
        },
        {
          "type": "Identifier",
          "start": 220,
          "end": 229,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 221,
            "end": 229,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 223,
              "end": 229
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 250,
      "end": 352,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 318,
        "end": 352,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 324,
            "end": 350,
            "argument": {
              "type": "BinaryExpression",
              "start": 331,
              "end": 349,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 331,
                "end": 332,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 335,
                "end": 349,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 346,
                    "end": 348,
                    "raw": "\"\"",
                    "value": ""
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 335,
                  "end": 345,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 335,
                    "end": 340,
                    "decorators": [],
                    "name": "rests",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 345,
                    "decorators": [],
                    "name": "join",
                    "optional": false
                  }
                },
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 286,
        "decorators": [],
        "name": "globalfooWithRestParameters",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 287,
          "end": 296,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 288,
            "end": 296,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 290,
              "end": 296
            }
          }
        },
        {
          "type": "RestElement",
          "start": 298,
          "end": 316,
          "argument": {
            "type": "Identifier",
            "start": 301,
            "end": 306,
            "decorators": [],
            "name": "rests",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 306,
            "end": 316,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 308,
              "end": 316,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 308,
                "end": 314
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 353,
      "end": 404,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 362,
        "end": 384,
        "decorators": [],
        "name": "globalfooWithOverloads",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 385,
          "end": 394,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 386,
            "end": 394,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 388,
              "end": 394
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 395,
        "end": 403,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 397,
          "end": 403
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 405,
      "end": 456,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 414,
        "end": 436,
        "decorators": [],
        "name": "globalfooWithOverloads",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 437,
          "end": 446,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 438,
            "end": 446,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 440,
              "end": 446
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 447,
        "end": 455,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 449,
          "end": 455
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 457,
      "end": 519,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 502,
        "end": 519,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 508,
            "end": 517,
            "argument": {
              "type": "Identifier",
              "start": 515,
              "end": 516,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 466,
        "end": 488,
        "decorators": [],
        "name": "globalfooWithOverloads",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 489,
          "end": 495,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 490,
            "end": 495,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 492,
              "end": 495
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 496,
        "end": 501,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 498,
          "end": 501
        }
      }
    }
  ],
  "sourceType": "module"
}
```

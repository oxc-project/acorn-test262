__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 111,
  "end": 2183,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 111,
      "end": 123,
      "body": {
        "type": "TSEnumBody",
        "start": 118,
        "end": 123,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 120,
            "end": 121,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 117,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 125,
      "end": 202,
      "body": {
        "type": "TSInterfaceBody",
        "start": 138,
        "end": 202,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 144,
            "end": 159,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 145,
                "end": 154,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 146,
                  "end": 154,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 148,
                    "end": 154
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 158,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 157,
                "end": 158,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 164,
            "end": 171,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 164,
              "end": 167,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 170,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 169,
                "end": 170,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 137,
        "decorators": [],
        "name": "I0",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 205,
      "end": 235,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 225,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 226,
          "end": 230,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 227,
            "end": 230,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 229,
              "end": 230,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 231,
        "end": 234,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 233,
          "end": 234,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 233,
            "end": 234,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 236,
      "end": 276,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 253,
        "end": 256,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 257,
          "end": 266,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 258,
            "end": 266,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 260,
              "end": 266
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 267,
        "end": 275,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 269,
          "end": 275
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 277,
      "end": 311,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 297,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 298,
          "end": 304,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 299,
            "end": 304,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 301,
              "end": 304
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 305,
        "end": 310,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 307,
          "end": 310
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 312,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 328,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 317,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 320,
            "end": 328,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 324,
                "end": 327,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 325,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 320,
              "end": 323,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 335,
      "end": 351,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 350,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 341,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 344,
            "end": 350,
            "arguments": [
              {
                "type": "Literal",
                "start": 348,
                "end": 349,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 344,
              "end": 347,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 362,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 366,
          "end": 385,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 366,
            "end": 368,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 371,
            "end": 385,
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "start": 375,
                "end": 384,
                "expression": {
                  "type": "Literal",
                  "start": 380,
                  "end": 384,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 376,
                  "end": 379
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 371,
              "end": 374,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 395,
      "end": 436,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 412,
        "end": 416,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 417,
          "end": 426,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 418,
            "end": 426,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 420,
              "end": 426
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 427,
        "end": 435,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 429,
          "end": 435
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 437,
      "end": 468,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 454,
        "end": 458,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 459,
          "end": 463,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 460,
            "end": 463,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 462,
              "end": 463,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 462,
                "end": 463,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 464,
        "end": 467,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 466,
          "end": 467,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 466,
            "end": 467,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 470,
      "end": 489,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 474,
          "end": 488,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 474,
            "end": 476,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 479,
            "end": 488,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 484,
                "end": 487,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 485,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 486,
                  "end": 487,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 479,
              "end": 483,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 491,
      "end": 534,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 508,
        "end": 512,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 513,
          "end": 523,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 514,
            "end": 523,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 516,
              "end": 523
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 524,
        "end": 533,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 526,
          "end": 533
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 535,
      "end": 566,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 552,
        "end": 556,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 557,
          "end": 561,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 558,
            "end": 561,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 560,
              "end": 561,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 560,
                "end": 561,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 562,
        "end": 565,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 564,
          "end": 565,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 564,
            "end": 565,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 568,
      "end": 587,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 572,
          "end": 586,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 574,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 577,
            "end": 586,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 582,
                "end": 585,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 583,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 584,
                  "end": 585,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 577,
              "end": 581,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 589,
      "end": 626,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 606,
        "end": 610,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 611,
          "end": 618,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 612,
            "end": 618,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 614,
              "end": 618,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 614,
                "end": 618,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 619,
        "end": 625,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 621,
          "end": 625,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 621,
            "end": 625,
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 627,
      "end": 658,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 644,
        "end": 648,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 649,
          "end": 653,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 650,
            "end": 653,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 652,
              "end": 653,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 652,
                "end": 653,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 654,
        "end": 657,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 656,
          "end": 657,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 656,
            "end": 657,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 660,
      "end": 679,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 664,
          "end": 678,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 664,
            "end": 666,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 669,
            "end": 678,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 674,
                "end": 677,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 674,
                  "end": 675,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 676,
                  "end": 677,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 669,
              "end": 673,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 681,
      "end": 722,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 698,
        "end": 702,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 703,
          "end": 712,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 704,
            "end": 712,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 706,
              "end": 712,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 706,
                "end": 712,
                "decorators": [],
                "name": "RegExp",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 713,
        "end": 721,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 715,
          "end": 721,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 715,
            "end": 721,
            "decorators": [],
            "name": "RegExp",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 723,
      "end": 754,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 740,
        "end": 744,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 745,
          "end": 749,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 746,
            "end": 749,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 748,
              "end": 749,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 748,
                "end": 749,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 750,
        "end": 753,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 752,
          "end": 753,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 752,
            "end": 753,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 756,
      "end": 775,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 760,
          "end": 774,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 760,
            "end": 762,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 765,
            "end": 774,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 770,
                "end": 773,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 770,
                  "end": 771,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 772,
                  "end": 773,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 765,
              "end": 769,
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 777,
      "end": 836,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 794,
        "end": 798,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 799,
          "end": 817,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 800,
            "end": 817,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 802,
              "end": 817,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 804,
                  "end": 815,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 804,
                    "end": 807,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 807,
                    "end": 815,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 809,
                      "end": 815
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 818,
        "end": 835,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 820,
          "end": 835,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 822,
              "end": 833,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 822,
                "end": 825,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 825,
                "end": 833,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 827,
                  "end": 833
                }
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 837,
      "end": 868,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 854,
        "end": 858,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 859,
          "end": 863,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 860,
            "end": 863,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 862,
              "end": 863,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 862,
                "end": 863,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 864,
        "end": 867,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 866,
          "end": 867,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 866,
            "end": 867,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 870,
      "end": 889,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 874,
          "end": 888,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 874,
            "end": 876,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 879,
            "end": 888,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 884,
                "end": 887,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 884,
                  "end": 885,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 886,
                  "end": 887,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 879,
              "end": 883,
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 891,
      "end": 936,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 908,
        "end": 912,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 913,
          "end": 924,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 914,
            "end": 924,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 916,
              "end": 924,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 916,
                "end": 922
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 925,
        "end": 935,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 927,
          "end": 935,
          "elementType": {
            "type": "TSNumberKeyword",
            "start": 927,
            "end": 933
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 937,
      "end": 968,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 954,
        "end": 958,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 959,
          "end": 963,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 960,
            "end": 963,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 962,
              "end": 963,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 962,
                "end": 963,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 964,
        "end": 967,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 966,
          "end": 967,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 966,
            "end": 967,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 970,
      "end": 989,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 974,
          "end": 988,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 974,
            "end": 976,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 979,
            "end": 988,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 984,
                "end": 987,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 984,
                  "end": 985,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 986,
                  "end": 987,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 979,
              "end": 983,
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 991,
      "end": 1020,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1004,
        "end": 1020,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1006,
            "end": 1018,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1006,
              "end": 1009,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1009,
              "end": 1017,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1011,
                "end": 1017
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1001,
        "end": 1003,
        "decorators": [],
        "name": "I8",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1021,
      "end": 1054,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1038,
        "end": 1042,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1043,
          "end": 1048,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1044,
            "end": 1048,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1046,
              "end": 1048,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1046,
                "end": 1048,
                "decorators": [],
                "name": "I8",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1049,
        "end": 1053,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1051,
          "end": 1053,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1051,
            "end": 1053,
            "decorators": [],
            "name": "I8",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1055,
      "end": 1086,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1072,
        "end": 1076,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1077,
          "end": 1081,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1078,
            "end": 1081,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1080,
              "end": 1081,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1080,
                "end": 1081,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1082,
        "end": 1085,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1084,
          "end": 1085,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1084,
            "end": 1085,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1088,
      "end": 1107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1092,
          "end": 1106,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1092,
            "end": 1094,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1097,
            "end": 1106,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 1102,
                "end": 1105,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1102,
                  "end": 1103,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1104,
                  "end": 1105,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1097,
              "end": 1101,
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 1109,
      "end": 1133,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1117,
        "end": 1133,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1119,
            "end": 1131,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1119,
              "end": 1122,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1122,
              "end": 1130,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1124,
                "end": 1130
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1115,
        "end": 1116,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1134,
      "end": 1165,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1151,
        "end": 1155,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1156,
          "end": 1160,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1157,
            "end": 1160,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1159,
              "end": 1160,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1159,
                "end": 1160,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1161,
        "end": 1164,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1163,
          "end": 1164,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1163,
            "end": 1164,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1166,
      "end": 1197,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1183,
        "end": 1187,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1188,
          "end": 1192,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1189,
            "end": 1192,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1191,
              "end": 1192,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1191,
                "end": 1192,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1193,
        "end": 1196,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1195,
          "end": 1196,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1195,
            "end": 1196,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1199,
      "end": 1218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1203,
          "end": 1217,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1203,
            "end": 1205,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1208,
            "end": 1217,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 1213,
                "end": 1216,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1213,
                  "end": 1214,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1215,
                  "end": 1216,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1208,
              "end": 1212,
              "decorators": [],
              "name": "foo9",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 1220,
      "end": 1243,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1232,
        "end": 1243,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1234,
            "end": 1241,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1234,
              "end": 1237,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1237,
              "end": 1240,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1239,
                "end": 1240,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1239,
                  "end": 1240,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1226,
        "end": 1228,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1228,
        "end": 1231,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1229,
            "end": 1230,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1229,
              "end": 1230,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1244,
      "end": 1294,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1261,
        "end": 1266,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1267,
          "end": 1280,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1268,
            "end": 1280,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1270,
              "end": 1280,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1272,
                "end": 1280,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1273,
                    "end": 1279
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1270,
                "end": 1272,
                "decorators": [],
                "name": "A2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1281,
        "end": 1293,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1283,
          "end": 1293,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1285,
            "end": 1293,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1286,
                "end": 1292
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1283,
            "end": 1285,
            "decorators": [],
            "name": "A2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1295,
      "end": 1327,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1312,
        "end": 1317,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1318,
          "end": 1322,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1319,
            "end": 1322,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1321,
              "end": 1322,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1321,
                "end": 1322,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1323,
        "end": 1326,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1325,
          "end": 1326,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1325,
            "end": 1326,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1329,
      "end": 1349,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1333,
          "end": 1348,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1333,
            "end": 1335,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1338,
            "end": 1348,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 1344,
                "end": 1347,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1344,
                  "end": 1345,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1346,
                  "end": 1347,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1338,
              "end": 1343,
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 1351,
      "end": 1407,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1368,
        "end": 1373,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1374,
          "end": 1390,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1375,
            "end": 1390,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1377,
              "end": 1390,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1378,
                  "end": 1379,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1381,
                "end": 1390,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1384,
                  "end": 1390
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1391,
        "end": 1406,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1393,
          "end": 1406,
          "params": [
            {
              "type": "Identifier",
              "start": 1394,
              "end": 1395,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1397,
            "end": 1406,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1400,
              "end": 1406
            }
          },
          "typeParameters": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1408,
      "end": 1440,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1425,
        "end": 1430,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1431,
          "end": 1435,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1432,
            "end": 1435,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1434,
              "end": 1435,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1434,
                "end": 1435,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1436,
        "end": 1439,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1438,
          "end": 1439,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1438,
            "end": 1439,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1442,
      "end": 1462,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1446,
          "end": 1461,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1446,
            "end": 1448,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1451,
            "end": 1461,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 1457,
                "end": 1460,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1457,
                  "end": 1458,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1459,
                  "end": 1460,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1451,
              "end": 1456,
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 1464,
      "end": 1522,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1481,
        "end": 1486,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1487,
          "end": 1504,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1488,
            "end": 1504,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1490,
              "end": 1504,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1494,
                  "end": 1498,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1495,
                    "end": 1498,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1497,
                      "end": 1498,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1497,
                        "end": 1498,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1500,
                "end": 1504,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1503,
                  "end": 1504,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1503,
                    "end": 1504,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1490,
                "end": 1493,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1491,
                    "end": 1492,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1491,
                      "end": 1492,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1505,
        "end": 1521,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1507,
          "end": 1521,
          "params": [
            {
              "type": "Identifier",
              "start": 1511,
              "end": 1515,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1512,
                "end": 1515,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1514,
                  "end": 1515,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1514,
                    "end": 1515,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1517,
            "end": 1521,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1520,
              "end": 1521,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1520,
                "end": 1521,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 1507,
            "end": 1510,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 1508,
                "end": 1509,
                "const": false,
                "constraint": null,
                "default": null,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 1508,
                  "end": 1509,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "out": false
              }
            ]
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1523,
      "end": 1555,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1540,
        "end": 1545,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1546,
          "end": 1550,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1547,
            "end": 1550,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1549,
              "end": 1550,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1549,
                "end": 1550,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1551,
        "end": 1554,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1553,
          "end": 1554,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1553,
            "end": 1554,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1557,
      "end": 1577,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1561,
          "end": 1576,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1561,
            "end": 1563,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1566,
            "end": 1576,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 1572,
                "end": 1575,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1572,
                  "end": 1573,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1574,
                  "end": 1575,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1566,
              "end": 1571,
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1579,
      "end": 1592,
      "body": {
        "type": "TSEnumBody",
        "start": 1587,
        "end": 1592,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1589,
            "end": 1590,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1589,
              "end": 1590,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1584,
        "end": 1586,
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1593,
      "end": 1627,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1610,
        "end": 1615,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1616,
          "end": 1621,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1617,
            "end": 1621,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1619,
              "end": 1621,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1619,
                "end": 1621,
                "decorators": [],
                "name": "E2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1622,
        "end": 1626,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1624,
          "end": 1626,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1624,
            "end": 1626,
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1628,
      "end": 1660,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1645,
        "end": 1650,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1651,
          "end": 1655,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1652,
            "end": 1655,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1654,
              "end": 1655,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1654,
                "end": 1655,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1656,
        "end": 1659,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1658,
          "end": 1659,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1658,
            "end": 1659,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1662,
      "end": 1682,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1666,
          "end": 1681,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1666,
            "end": 1668,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1671,
            "end": 1681,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 1677,
                "end": 1680,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1677,
                  "end": 1678,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1679,
                  "end": 1680,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1671,
              "end": 1676,
              "decorators": [],
              "name": "foo13",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1684,
      "end": 1700,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1697,
        "end": 1700,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1693,
        "end": 1694,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1701,
      "end": 1737,
      "body": {
        "type": "TSModuleBlock",
        "start": 1710,
        "end": 1737,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1716,
            "end": 1735,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1723,
              "end": 1735,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1727,
                  "end": 1734,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1727,
                    "end": 1730,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1733,
                    "end": 1734,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1708,
        "end": 1709,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSDeclareFunction",
      "start": 1738,
      "end": 1784,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1755,
        "end": 1760,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1761,
          "end": 1772,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1762,
            "end": 1772,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1764,
              "end": 1772,
              "exprName": {
                "type": "Identifier",
                "start": 1771,
                "end": 1772,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1773,
        "end": 1783,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1775,
          "end": 1783,
          "exprName": {
            "type": "Identifier",
            "start": 1782,
            "end": 1783,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1785,
      "end": 1817,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1802,
        "end": 1807,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1808,
          "end": 1812,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1809,
            "end": 1812,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1811,
              "end": 1812,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1811,
                "end": 1812,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1813,
        "end": 1816,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1815,
          "end": 1816,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1815,
            "end": 1816,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1819,
      "end": 1839,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1823,
          "end": 1838,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1823,
            "end": 1825,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1828,
            "end": 1838,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 1834,
                "end": 1837,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1834,
                  "end": 1835,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1836,
                  "end": 1837,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1828,
              "end": 1833,
              "decorators": [],
              "name": "foo14",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 1841,
      "end": 1865,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1850,
        "end": 1865,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1852,
            "end": 1863,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1852,
              "end": 1855,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1855,
              "end": 1863,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1857,
                "end": 1863
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1847,
        "end": 1849,
        "decorators": [],
        "name": "CC",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1866,
      "end": 1903,
      "body": {
        "type": "TSModuleBlock",
        "start": 1876,
        "end": 1903,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1882,
            "end": 1901,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1889,
              "end": 1901,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1893,
                  "end": 1900,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1893,
                    "end": 1896,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1899,
                    "end": 1900,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1873,
        "end": 1875,
        "decorators": [],
        "name": "CC",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSDeclareFunction",
      "start": 1904,
      "end": 1938,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1921,
        "end": 1926,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1927,
          "end": 1932,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1928,
            "end": 1932,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1930,
              "end": 1932,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1930,
                "end": 1932,
                "decorators": [],
                "name": "CC",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1933,
        "end": 1937,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1935,
          "end": 1937,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1935,
            "end": 1937,
            "decorators": [],
            "name": "CC",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1939,
      "end": 1971,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1956,
        "end": 1961,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1962,
          "end": 1966,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1963,
            "end": 1966,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1965,
              "end": 1966,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1965,
                "end": 1966,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1967,
        "end": 1970,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1969,
          "end": 1970,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1969,
            "end": 1970,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1973,
      "end": 1993,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1977,
          "end": 1992,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1977,
            "end": 1979,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1982,
            "end": 1992,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 1988,
                "end": 1991,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1988,
                  "end": 1989,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1990,
                  "end": 1991,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1982,
              "end": 1987,
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 1995,
      "end": 2037,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2012,
        "end": 2017,
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2018,
          "end": 2027,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2019,
            "end": 2027,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2021,
              "end": 2027,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2021,
                "end": 2027,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2028,
        "end": 2036,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2030,
          "end": 2036,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 2030,
            "end": 2036,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2038,
      "end": 2070,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2055,
        "end": 2060,
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2061,
          "end": 2065,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2062,
            "end": 2065,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2064,
              "end": 2065,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2064,
                "end": 2065,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2066,
        "end": 2069,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2068,
          "end": 2069,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 2068,
            "end": 2069,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2072,
      "end": 2092,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2076,
          "end": 2091,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2076,
            "end": 2078,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2081,
            "end": 2091,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 2087,
                "end": 2090,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2087,
                  "end": 2088,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2089,
                  "end": 2090,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2081,
              "end": 2086,
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 2094,
      "end": 2128,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2111,
        "end": 2116,
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2117,
          "end": 2122,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2118,
            "end": 2122,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2120,
              "end": 2122,
              "members": []
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2123,
        "end": 2127,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 2125,
          "end": 2127,
          "members": []
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2129,
      "end": 2161,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2146,
        "end": 2151,
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2152,
          "end": 2156,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2153,
            "end": 2156,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2155,
              "end": 2156,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2155,
                "end": 2156,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2157,
        "end": 2160,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2159,
          "end": 2160,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 2159,
            "end": 2160,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2163,
      "end": 2183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2167,
          "end": 2182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2167,
            "end": 2169,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2172,
            "end": 2182,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 2178,
                "end": 2181,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2178,
                  "end": 2179,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2180,
                  "end": 2181,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2172,
              "end": 2177,
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

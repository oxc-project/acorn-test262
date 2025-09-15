__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 117
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 121
            },
            "initializer": null,
            "computed": false,
            "start": 120,
            "end": 121
          }
        ],
        "start": 118,
        "end": 123
      },
      "const": false,
      "declare": false,
      "start": 111,
      "end": 123
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I0",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 137
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 148,
                    "end": 154
                  },
                  "start": 146,
                  "end": 154
                },
                "start": 145,
                "end": 154
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 158
                },
                "typeArguments": null,
                "start": 157,
                "end": 158
              },
              "start": 155,
              "end": 158
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 144,
            "end": 159
          },
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
              "start": 164,
              "end": 167
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 170
                },
                "typeArguments": null,
                "start": 169,
                "end": 170
              },
              "start": 167,
              "end": 170
            },
            "accessibility": null,
            "static": false,
            "start": 164,
            "end": 171
          }
        ],
        "start": 138,
        "end": 202
      },
      "declare": false,
      "start": 125,
      "end": 202
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 222,
        "end": 225
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 230
              },
              "typeArguments": null,
              "start": 229,
              "end": 230
            },
            "start": 227,
            "end": 230
          },
          "start": 226,
          "end": 230
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 234
          },
          "typeArguments": null,
          "start": 233,
          "end": 234
        },
        "start": 231,
        "end": 234
      },
      "body": null,
      "expression": false,
      "start": 205,
      "end": 235
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 253,
        "end": 256
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 260,
              "end": 266
            },
            "start": 258,
            "end": 266
          },
          "start": 257,
          "end": 266
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 269,
          "end": 275
        },
        "start": 267,
        "end": 275
      },
      "body": null,
      "expression": false,
      "start": 236,
      "end": 276
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 294,
        "end": 297
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 301,
              "end": 304
            },
            "start": 299,
            "end": 304
          },
          "start": 298,
          "end": 304
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 307,
          "end": 310
        },
        "start": 305,
        "end": 310
      },
      "body": null,
      "expression": false,
      "start": 277,
      "end": 311
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 317
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 323
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 325
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 327
                },
                "optional": false,
                "computed": false,
                "start": 324,
                "end": 327
              }
            ],
            "optional": false,
            "start": 320,
            "end": 328
          },
          "definite": false,
          "start": 316,
          "end": 328
        }
      ],
      "declare": false,
      "start": 312,
      "end": 329
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 339,
            "end": 341
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 347
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 348,
                "end": 349
              }
            ],
            "optional": false,
            "start": 344,
            "end": 350
          },
          "definite": false,
          "start": 339,
          "end": 350
        }
      ],
      "declare": false,
      "start": 335,
      "end": 351
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 366,
            "end": 368
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 371,
              "end": 374
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 376,
                  "end": 379
                },
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 380,
                  "end": 384
                },
                "start": 375,
                "end": 384
              }
            ],
            "optional": false,
            "start": 371,
            "end": 385
          },
          "definite": false,
          "start": 366,
          "end": 385
        }
      ],
      "declare": false,
      "start": 362,
      "end": 386
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 412,
        "end": 416
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSStringKeyword",
              "start": 420,
              "end": 426
            },
            "start": 418,
            "end": 426
          },
          "start": 417,
          "end": 426
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 429,
          "end": 435
        },
        "start": 427,
        "end": 435
      },
      "body": null,
      "expression": false,
      "start": 395,
      "end": 436
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 454,
        "end": 458
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
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
          "start": 459,
          "end": 463
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 467
          },
          "typeArguments": null,
          "start": 466,
          "end": 467
        },
        "start": 464,
        "end": 467
      },
      "body": null,
      "expression": false,
      "start": 437,
      "end": 468
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 476
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 479,
              "end": 483
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 484,
                  "end": 485
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 486,
                  "end": 487
                },
                "optional": false,
                "computed": false,
                "start": 484,
                "end": 487
              }
            ],
            "optional": false,
            "start": 479,
            "end": 488
          },
          "definite": false,
          "start": 474,
          "end": 488
        }
      ],
      "declare": false,
      "start": 470,
      "end": 489
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 508,
        "end": 512
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSBooleanKeyword",
              "start": 516,
              "end": 523
            },
            "start": 514,
            "end": 523
          },
          "start": 513,
          "end": 523
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 526,
          "end": 533
        },
        "start": 524,
        "end": 533
      },
      "body": null,
      "expression": false,
      "start": 491,
      "end": 534
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 552,
        "end": 556
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 561
              },
              "typeArguments": null,
              "start": 560,
              "end": 561
            },
            "start": 558,
            "end": 561
          },
          "start": 557,
          "end": 561
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 564,
            "end": 565
          },
          "typeArguments": null,
          "start": 564,
          "end": 565
        },
        "start": 562,
        "end": 565
      },
      "body": null,
      "expression": false,
      "start": 535,
      "end": 566
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 572,
            "end": 574
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 577,
              "end": 581
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 582,
                  "end": 583
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 584,
                  "end": 585
                },
                "optional": false,
                "computed": false,
                "start": 582,
                "end": 585
              }
            ],
            "optional": false,
            "start": 577,
            "end": 586
          },
          "definite": false,
          "start": 572,
          "end": 586
        }
      ],
      "declare": false,
      "start": 568,
      "end": 587
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 606,
        "end": 610
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 614,
                "end": 618
              },
              "typeArguments": null,
              "start": 614,
              "end": 618
            },
            "start": 612,
            "end": 618
          },
          "start": 611,
          "end": 618
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null,
            "start": 621,
            "end": 625
          },
          "typeArguments": null,
          "start": 621,
          "end": 625
        },
        "start": 619,
        "end": 625
      },
      "body": null,
      "expression": false,
      "start": 589,
      "end": 626
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 644,
        "end": 648
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 652,
                "end": 653
              },
              "typeArguments": null,
              "start": 652,
              "end": 653
            },
            "start": 650,
            "end": 653
          },
          "start": 649,
          "end": 653
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 656,
            "end": 657
          },
          "typeArguments": null,
          "start": 656,
          "end": 657
        },
        "start": 654,
        "end": 657
      },
      "body": null,
      "expression": false,
      "start": 627,
      "end": 658
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 664,
            "end": 666
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 669,
              "end": 673
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 674,
                  "end": 675
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 676,
                  "end": 677
                },
                "optional": false,
                "computed": false,
                "start": 674,
                "end": 677
              }
            ],
            "optional": false,
            "start": 669,
            "end": 678
          },
          "definite": false,
          "start": 664,
          "end": 678
        }
      ],
      "declare": false,
      "start": 660,
      "end": 679
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 698,
        "end": 702
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "RegExp",
                "optional": false,
                "typeAnnotation": null,
                "start": 706,
                "end": 712
              },
              "typeArguments": null,
              "start": 706,
              "end": 712
            },
            "start": 704,
            "end": 712
          },
          "start": 703,
          "end": 712
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RegExp",
            "optional": false,
            "typeAnnotation": null,
            "start": 715,
            "end": 721
          },
          "typeArguments": null,
          "start": 715,
          "end": 721
        },
        "start": 713,
        "end": 721
      },
      "body": null,
      "expression": false,
      "start": 681,
      "end": 722
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 740,
        "end": 744
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 749
              },
              "typeArguments": null,
              "start": 748,
              "end": 749
            },
            "start": 746,
            "end": 749
          },
          "start": 745,
          "end": 749
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 752,
            "end": 753
          },
          "typeArguments": null,
          "start": 752,
          "end": 753
        },
        "start": 750,
        "end": 753
      },
      "body": null,
      "expression": false,
      "start": 723,
      "end": 754
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 760,
            "end": 762
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 765,
              "end": 769
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 770,
                  "end": 771
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 772,
                  "end": 773
                },
                "optional": false,
                "computed": false,
                "start": 770,
                "end": 773
              }
            ],
            "optional": false,
            "start": 765,
            "end": 774
          },
          "definite": false,
          "start": 760,
          "end": 774
        }
      ],
      "declare": false,
      "start": 756,
      "end": 775
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 794,
        "end": 798
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 804,
                    "end": 807
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 809,
                      "end": 815
                    },
                    "start": 807,
                    "end": 815
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 804,
                  "end": 815
                }
              ],
              "start": 802,
              "end": 817
            },
            "start": 800,
            "end": 817
          },
          "start": 799,
          "end": 817
        }
      ],
      "returnType": {
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
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 822,
                "end": 825
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 827,
                  "end": 833
                },
                "start": 825,
                "end": 833
              },
              "accessibility": null,
              "static": false,
              "start": 822,
              "end": 833
            }
          ],
          "start": 820,
          "end": 835
        },
        "start": 818,
        "end": 835
      },
      "body": null,
      "expression": false,
      "start": 777,
      "end": 836
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 854,
        "end": 858
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 862,
                "end": 863
              },
              "typeArguments": null,
              "start": 862,
              "end": 863
            },
            "start": 860,
            "end": 863
          },
          "start": 859,
          "end": 863
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 866,
            "end": 867
          },
          "typeArguments": null,
          "start": 866,
          "end": 867
        },
        "start": 864,
        "end": 867
      },
      "body": null,
      "expression": false,
      "start": 837,
      "end": 868
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 874,
            "end": 876
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 879,
              "end": 883
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 884,
                  "end": 885
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 886,
                  "end": 887
                },
                "optional": false,
                "computed": false,
                "start": 884,
                "end": 887
              }
            ],
            "optional": false,
            "start": 879,
            "end": 888
          },
          "definite": false,
          "start": 874,
          "end": 888
        }
      ],
      "declare": false,
      "start": 870,
      "end": 889
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 908,
        "end": 912
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 916,
                "end": 922
              },
              "start": 916,
              "end": 924
            },
            "start": 914,
            "end": 924
          },
          "start": 913,
          "end": 924
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSNumberKeyword",
            "start": 927,
            "end": 933
          },
          "start": 927,
          "end": 935
        },
        "start": 925,
        "end": 935
      },
      "body": null,
      "expression": false,
      "start": 891,
      "end": 936
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 954,
        "end": 958
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 962,
                "end": 963
              },
              "typeArguments": null,
              "start": 962,
              "end": 963
            },
            "start": 960,
            "end": 963
          },
          "start": 959,
          "end": 963
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 966,
            "end": 967
          },
          "typeArguments": null,
          "start": 966,
          "end": 967
        },
        "start": 964,
        "end": 967
      },
      "body": null,
      "expression": false,
      "start": 937,
      "end": 968
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 974,
            "end": 976
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 979,
              "end": 983
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 984,
                  "end": 985
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 986,
                  "end": 987
                },
                "optional": false,
                "computed": false,
                "start": 984,
                "end": 987
              }
            ],
            "optional": false,
            "start": 979,
            "end": 988
          },
          "definite": false,
          "start": 974,
          "end": 988
        }
      ],
      "declare": false,
      "start": 970,
      "end": 989
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1001,
        "end": 1003
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1006,
              "end": 1009
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1011,
                "end": 1017
              },
              "start": 1009,
              "end": 1017
            },
            "accessibility": null,
            "static": false,
            "start": 1006,
            "end": 1018
          }
        ],
        "start": 1004,
        "end": 1020
      },
      "declare": false,
      "start": 991,
      "end": 1020
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1038,
        "end": 1042
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "I8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1046,
                "end": 1048
              },
              "typeArguments": null,
              "start": 1046,
              "end": 1048
            },
            "start": 1044,
            "end": 1048
          },
          "start": 1043,
          "end": 1048
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1051,
            "end": 1053
          },
          "typeArguments": null,
          "start": 1051,
          "end": 1053
        },
        "start": 1049,
        "end": 1053
      },
      "body": null,
      "expression": false,
      "start": 1021,
      "end": 1054
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1072,
        "end": 1076
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1080,
                "end": 1081
              },
              "typeArguments": null,
              "start": 1080,
              "end": 1081
            },
            "start": 1078,
            "end": 1081
          },
          "start": 1077,
          "end": 1081
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 1084,
            "end": 1085
          },
          "typeArguments": null,
          "start": 1084,
          "end": 1085
        },
        "start": 1082,
        "end": 1085
      },
      "body": null,
      "expression": false,
      "start": 1055,
      "end": 1086
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1092,
            "end": 1094
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1097,
              "end": 1101
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1102,
                  "end": 1103
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1104,
                  "end": 1105
                },
                "optional": false,
                "computed": false,
                "start": 1102,
                "end": 1105
              }
            ],
            "optional": false,
            "start": 1097,
            "end": 1106
          },
          "definite": false,
          "start": 1092,
          "end": 1106
        }
      ],
      "declare": false,
      "start": 1088,
      "end": 1107
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
        "start": 1115,
        "end": 1116
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1119,
              "end": 1122
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1124,
                "end": 1130
              },
              "start": 1122,
              "end": 1130
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
            "start": 1119,
            "end": 1131
          }
        ],
        "start": 1117,
        "end": 1133
      },
      "abstract": false,
      "declare": false,
      "start": 1109,
      "end": 1133
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1151,
        "end": 1155
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "start": 1159,
                "end": 1160
              },
              "typeArguments": null,
              "start": 1159,
              "end": 1160
            },
            "start": 1157,
            "end": 1160
          },
          "start": 1156,
          "end": 1160
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 1163,
            "end": 1164
          },
          "typeArguments": null,
          "start": 1163,
          "end": 1164
        },
        "start": 1161,
        "end": 1164
      },
      "body": null,
      "expression": false,
      "start": 1134,
      "end": 1165
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1183,
        "end": 1187
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1191,
                "end": 1192
              },
              "typeArguments": null,
              "start": 1191,
              "end": 1192
            },
            "start": 1189,
            "end": 1192
          },
          "start": 1188,
          "end": 1192
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 1195,
            "end": 1196
          },
          "typeArguments": null,
          "start": 1195,
          "end": 1196
        },
        "start": 1193,
        "end": 1196
      },
      "body": null,
      "expression": false,
      "start": 1166,
      "end": 1197
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1203,
            "end": 1205
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo9",
              "optional": false,
              "typeAnnotation": null,
              "start": 1208,
              "end": 1212
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1213,
                  "end": 1214
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1215,
                  "end": 1216
                },
                "optional": false,
                "computed": false,
                "start": 1213,
                "end": 1216
              }
            ],
            "optional": false,
            "start": 1208,
            "end": 1217
          },
          "definite": false,
          "start": 1203,
          "end": 1217
        }
      ],
      "declare": false,
      "start": 1199,
      "end": 1218
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
        "start": 1226,
        "end": 1228
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
              "start": 1229,
              "end": 1230
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1229,
            "end": 1230
          }
        ],
        "start": 1228,
        "end": 1231
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1234,
              "end": 1237
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
                  "start": 1239,
                  "end": 1240
                },
                "typeArguments": null,
                "start": 1239,
                "end": 1240
              },
              "start": 1237,
              "end": 1240
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
            "start": 1234,
            "end": 1241
          }
        ],
        "start": 1232,
        "end": 1243
      },
      "abstract": false,
      "declare": false,
      "start": 1220,
      "end": 1243
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1261,
        "end": 1266
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "A2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1270,
                "end": 1272
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1273,
                    "end": 1279
                  }
                ],
                "start": 1272,
                "end": 1280
              },
              "start": 1270,
              "end": 1280
            },
            "start": 1268,
            "end": 1280
          },
          "start": 1267,
          "end": 1280
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1283,
            "end": 1285
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1286,
                "end": 1292
              }
            ],
            "start": 1285,
            "end": 1293
          },
          "start": 1283,
          "end": 1293
        },
        "start": 1281,
        "end": 1293
      },
      "body": null,
      "expression": false,
      "start": 1244,
      "end": 1294
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1312,
        "end": 1317
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1321,
                "end": 1322
              },
              "typeArguments": null,
              "start": 1321,
              "end": 1322
            },
            "start": 1319,
            "end": 1322
          },
          "start": 1318,
          "end": 1322
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 1325,
            "end": 1326
          },
          "typeArguments": null,
          "start": 1325,
          "end": 1326
        },
        "start": 1323,
        "end": 1326
      },
      "body": null,
      "expression": false,
      "start": 1295,
      "end": 1327
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1333,
            "end": 1335
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1338,
              "end": 1343
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1344,
                  "end": 1345
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1346,
                  "end": 1347
                },
                "optional": false,
                "computed": false,
                "start": 1344,
                "end": 1347
              }
            ],
            "optional": false,
            "start": 1338,
            "end": 1348
          },
          "definite": false,
          "start": 1333,
          "end": 1348
        }
      ],
      "declare": false,
      "start": 1329,
      "end": 1349
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1368,
        "end": 1373
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1378,
                  "end": 1379
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1384,
                  "end": 1390
                },
                "start": 1381,
                "end": 1390
              },
              "start": 1377,
              "end": 1390
            },
            "start": 1375,
            "end": 1390
          },
          "start": 1374,
          "end": 1390
        }
      ],
      "returnType": {
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
              "typeAnnotation": null,
              "start": 1394,
              "end": 1395
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1400,
              "end": 1406
            },
            "start": 1397,
            "end": 1406
          },
          "start": 1393,
          "end": 1406
        },
        "start": 1391,
        "end": 1406
      },
      "body": null,
      "expression": false,
      "start": 1351,
      "end": 1407
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1425,
        "end": 1430
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1434,
                "end": 1435
              },
              "typeArguments": null,
              "start": 1434,
              "end": 1435
            },
            "start": 1432,
            "end": 1435
          },
          "start": 1431,
          "end": 1435
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 1438,
            "end": 1439
          },
          "typeArguments": null,
          "start": 1438,
          "end": 1439
        },
        "start": 1436,
        "end": 1439
      },
      "body": null,
      "expression": false,
      "start": 1408,
      "end": 1440
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1446,
            "end": 1448
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1451,
              "end": 1456
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1457,
                  "end": 1458
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1459,
                  "end": 1460
                },
                "optional": false,
                "computed": false,
                "start": 1457,
                "end": 1460
              }
            ],
            "optional": false,
            "start": 1451,
            "end": 1461
          },
          "definite": false,
          "start": 1446,
          "end": 1461
        }
      ],
      "declare": false,
      "start": 1442,
      "end": 1462
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1481,
        "end": 1486
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSFunctionType",
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
                      "start": 1491,
                      "end": 1492
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1491,
                    "end": 1492
                  }
                ],
                "start": 1490,
                "end": 1493
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1497,
                        "end": 1498
                      },
                      "typeArguments": null,
                      "start": 1497,
                      "end": 1498
                    },
                    "start": 1495,
                    "end": 1498
                  },
                  "start": 1494,
                  "end": 1498
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
                    "start": 1503,
                    "end": 1504
                  },
                  "typeArguments": null,
                  "start": 1503,
                  "end": 1504
                },
                "start": 1500,
                "end": 1504
              },
              "start": 1490,
              "end": 1504
            },
            "start": 1488,
            "end": 1504
          },
          "start": 1487,
          "end": 1504
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1508,
                  "end": 1509
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1508,
                "end": 1509
              }
            ],
            "start": 1507,
            "end": 1510
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1514,
                    "end": 1515
                  },
                  "typeArguments": null,
                  "start": 1514,
                  "end": 1515
                },
                "start": 1512,
                "end": 1515
              },
              "start": 1511,
              "end": 1515
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
                "start": 1520,
                "end": 1521
              },
              "typeArguments": null,
              "start": 1520,
              "end": 1521
            },
            "start": 1517,
            "end": 1521
          },
          "start": 1507,
          "end": 1521
        },
        "start": 1505,
        "end": 1521
      },
      "body": null,
      "expression": false,
      "start": 1464,
      "end": 1522
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1540,
        "end": 1545
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1549,
                "end": 1550
              },
              "typeArguments": null,
              "start": 1549,
              "end": 1550
            },
            "start": 1547,
            "end": 1550
          },
          "start": 1546,
          "end": 1550
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 1553,
            "end": 1554
          },
          "typeArguments": null,
          "start": 1553,
          "end": 1554
        },
        "start": 1551,
        "end": 1554
      },
      "body": null,
      "expression": false,
      "start": 1523,
      "end": 1555
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1561,
            "end": 1563
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1566,
              "end": 1571
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1572,
                  "end": 1573
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1574,
                  "end": 1575
                },
                "optional": false,
                "computed": false,
                "start": 1572,
                "end": 1575
              }
            ],
            "optional": false,
            "start": 1566,
            "end": 1576
          },
          "definite": false,
          "start": 1561,
          "end": 1576
        }
      ],
      "declare": false,
      "start": 1557,
      "end": 1577
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1584,
        "end": 1586
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1589,
              "end": 1590
            },
            "initializer": null,
            "computed": false,
            "start": 1589,
            "end": 1590
          }
        ],
        "start": 1587,
        "end": 1592
      },
      "const": false,
      "declare": false,
      "start": 1579,
      "end": 1592
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1610,
        "end": 1615
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1619,
                "end": 1621
              },
              "typeArguments": null,
              "start": 1619,
              "end": 1621
            },
            "start": 1617,
            "end": 1621
          },
          "start": 1616,
          "end": 1621
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1624,
            "end": 1626
          },
          "typeArguments": null,
          "start": 1624,
          "end": 1626
        },
        "start": 1622,
        "end": 1626
      },
      "body": null,
      "expression": false,
      "start": 1593,
      "end": 1627
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1645,
        "end": 1650
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1654,
                "end": 1655
              },
              "typeArguments": null,
              "start": 1654,
              "end": 1655
            },
            "start": 1652,
            "end": 1655
          },
          "start": 1651,
          "end": 1655
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 1658,
            "end": 1659
          },
          "typeArguments": null,
          "start": 1658,
          "end": 1659
        },
        "start": 1656,
        "end": 1659
      },
      "body": null,
      "expression": false,
      "start": 1628,
      "end": 1660
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1666,
            "end": 1668
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo13",
              "optional": false,
              "typeAnnotation": null,
              "start": 1671,
              "end": 1676
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1677,
                  "end": 1678
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1679,
                  "end": 1680
                },
                "optional": false,
                "computed": false,
                "start": 1677,
                "end": 1680
              }
            ],
            "optional": false,
            "start": 1671,
            "end": 1681
          },
          "definite": false,
          "start": 1666,
          "end": 1681
        }
      ],
      "declare": false,
      "start": 1662,
      "end": 1682
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1693,
        "end": 1694
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
        "start": 1697,
        "end": 1700
      },
      "expression": false,
      "start": 1684,
      "end": 1700
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1711,
        "end": 1712
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1730,
                    "end": 1733
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1736,
                    "end": 1737
                  },
                  "definite": false,
                  "start": 1730,
                  "end": 1737
                }
              ],
              "declare": false,
              "start": 1726,
              "end": 1738
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1719,
            "end": 1738
          }
        ],
        "start": 1713,
        "end": 1740
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1701,
      "end": 1740
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1758,
        "end": 1763
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1774,
                "end": 1775
              },
              "typeArguments": null,
              "start": 1767,
              "end": 1775
            },
            "start": 1765,
            "end": 1775
          },
          "start": 1764,
          "end": 1775
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1785,
            "end": 1786
          },
          "typeArguments": null,
          "start": 1778,
          "end": 1786
        },
        "start": 1776,
        "end": 1786
      },
      "body": null,
      "expression": false,
      "start": 1741,
      "end": 1787
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1805,
        "end": 1810
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1814,
                "end": 1815
              },
              "typeArguments": null,
              "start": 1814,
              "end": 1815
            },
            "start": 1812,
            "end": 1815
          },
          "start": 1811,
          "end": 1815
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 1818,
            "end": 1819
          },
          "typeArguments": null,
          "start": 1818,
          "end": 1819
        },
        "start": 1816,
        "end": 1819
      },
      "body": null,
      "expression": false,
      "start": 1788,
      "end": 1820
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1826,
            "end": 1828
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo14",
              "optional": false,
              "typeAnnotation": null,
              "start": 1831,
              "end": 1836
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1837,
                  "end": 1838
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1839,
                  "end": 1840
                },
                "optional": false,
                "computed": false,
                "start": 1837,
                "end": 1840
              }
            ],
            "optional": false,
            "start": 1831,
            "end": 1841
          },
          "definite": false,
          "start": 1826,
          "end": 1841
        }
      ],
      "declare": false,
      "start": 1822,
      "end": 1842
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CC",
        "optional": false,
        "typeAnnotation": null,
        "start": 1850,
        "end": 1852
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 1855,
              "end": 1858
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1860,
                "end": 1866
              },
              "start": 1858,
              "end": 1866
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
            "start": 1855,
            "end": 1866
          }
        ],
        "start": 1853,
        "end": 1868
      },
      "abstract": false,
      "declare": false,
      "start": 1844,
      "end": 1868
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CC",
        "optional": false,
        "typeAnnotation": null,
        "start": 1879,
        "end": 1881
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1899,
                    "end": 1902
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1905,
                    "end": 1906
                  },
                  "definite": false,
                  "start": 1899,
                  "end": 1906
                }
              ],
              "declare": false,
              "start": 1895,
              "end": 1907
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1888,
            "end": 1907
          }
        ],
        "start": 1882,
        "end": 1909
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1869,
      "end": 1909
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1927,
        "end": 1932
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "CC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1936,
                "end": 1938
              },
              "typeArguments": null,
              "start": 1936,
              "end": 1938
            },
            "start": 1934,
            "end": 1938
          },
          "start": 1933,
          "end": 1938
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "CC",
            "optional": false,
            "typeAnnotation": null,
            "start": 1941,
            "end": 1943
          },
          "typeArguments": null,
          "start": 1941,
          "end": 1943
        },
        "start": 1939,
        "end": 1943
      },
      "body": null,
      "expression": false,
      "start": 1910,
      "end": 1944
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1962,
        "end": 1967
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1971,
                "end": 1972
              },
              "typeArguments": null,
              "start": 1971,
              "end": 1972
            },
            "start": 1969,
            "end": 1972
          },
          "start": 1968,
          "end": 1972
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 1975,
            "end": 1976
          },
          "typeArguments": null,
          "start": 1975,
          "end": 1976
        },
        "start": 1973,
        "end": 1976
      },
      "body": null,
      "expression": false,
      "start": 1945,
      "end": 1977
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1983,
            "end": 1985
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1988,
              "end": 1993
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1994,
                  "end": 1995
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1996,
                  "end": 1997
                },
                "optional": false,
                "computed": false,
                "start": 1994,
                "end": 1997
              }
            ],
            "optional": false,
            "start": 1988,
            "end": 1998
          },
          "definite": false,
          "start": 1983,
          "end": 1998
        }
      ],
      "declare": false,
      "start": 1979,
      "end": 1999
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2018,
        "end": 2023
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 2027,
                "end": 2033
              },
              "typeArguments": null,
              "start": 2027,
              "end": 2033
            },
            "start": 2025,
            "end": 2033
          },
          "start": 2024,
          "end": 2033
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 2036,
            "end": 2042
          },
          "typeArguments": null,
          "start": 2036,
          "end": 2042
        },
        "start": 2034,
        "end": 2042
      },
      "body": null,
      "expression": false,
      "start": 2001,
      "end": 2043
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2061,
        "end": 2066
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 2070,
                "end": 2071
              },
              "typeArguments": null,
              "start": 2070,
              "end": 2071
            },
            "start": 2068,
            "end": 2071
          },
          "start": 2067,
          "end": 2071
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 2074,
            "end": 2075
          },
          "typeArguments": null,
          "start": 2074,
          "end": 2075
        },
        "start": 2072,
        "end": 2075
      },
      "body": null,
      "expression": false,
      "start": 2044,
      "end": 2076
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2082,
            "end": 2084
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 2087,
              "end": 2092
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2093,
                  "end": 2094
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2095,
                  "end": 2096
                },
                "optional": false,
                "computed": false,
                "start": 2093,
                "end": 2096
              }
            ],
            "optional": false,
            "start": 2087,
            "end": 2097
          },
          "definite": false,
          "start": 2082,
          "end": 2097
        }
      ],
      "declare": false,
      "start": 2078,
      "end": 2098
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2117,
        "end": 2122
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSTypeLiteral",
              "members": [],
              "start": 2126,
              "end": 2128
            },
            "start": 2124,
            "end": 2128
          },
          "start": 2123,
          "end": 2128
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 2131,
          "end": 2133
        },
        "start": 2129,
        "end": 2133
      },
      "body": null,
      "expression": false,
      "start": 2100,
      "end": 2134
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2152,
        "end": 2157
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 2161,
                "end": 2162
              },
              "typeArguments": null,
              "start": 2161,
              "end": 2162
            },
            "start": 2159,
            "end": 2162
          },
          "start": 2158,
          "end": 2162
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 2165,
            "end": 2166
          },
          "typeArguments": null,
          "start": 2165,
          "end": 2166
        },
        "start": 2163,
        "end": 2166
      },
      "body": null,
      "expression": false,
      "start": 2135,
      "end": 2167
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2173,
            "end": 2175
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 2178,
              "end": 2183
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2184,
                  "end": 2185
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2186,
                  "end": 2187
                },
                "optional": false,
                "computed": false,
                "start": 2184,
                "end": 2187
              }
            ],
            "optional": false,
            "start": 2178,
            "end": 2188
          },
          "definite": false,
          "start": 2173,
          "end": 2188
        }
      ],
      "declare": false,
      "start": 2169,
      "end": 2189
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 111,
  "end": 2189
}
```

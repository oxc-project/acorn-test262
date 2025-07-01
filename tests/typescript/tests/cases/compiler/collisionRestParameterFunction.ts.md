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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 29,
              "end": 35
            },
            "start": 27,
            "end": 35
          },
          "start": 25,
          "end": 35
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "restParameters",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 54
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 37,
          "end": 54
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 82
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 85,
                  "end": 87
                },
                "definite": false,
                "start": 80,
                "end": 87
              }
            ],
            "declare": false,
            "start": 76,
            "end": 88
          }
        ],
        "start": 56,
        "end": 102
      },
      "expression": false,
      "start": 13,
      "end": 102
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 121
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 126,
              "end": 132
            },
            "start": 124,
            "end": 132
          },
          "start": 122,
          "end": 132
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 158
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 161,
                  "end": 163
                },
                "definite": false,
                "start": 156,
                "end": 163
              }
            ],
            "declare": false,
            "start": 152,
            "end": 164
          }
        ],
        "start": 134,
        "end": 178
      },
      "expression": false,
      "start": 103,
      "end": 178
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 199
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 204,
              "end": 210
            },
            "start": 202,
            "end": 210
          },
          "start": 200,
          "end": 210
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "restParameters",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 229
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 212,
          "end": 229
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 180,
      "end": 231
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 275,
        "end": 284
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 289,
              "end": 295
            },
            "start": 287,
            "end": 295
          },
          "start": 285,
          "end": 295
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 258,
      "end": 297
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 322
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "restParameters",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 340
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 323,
          "end": 340
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
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 354
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 357,
                  "end": 359
                },
                "definite": false,
                "start": 352,
                "end": 359
              }
            ],
            "declare": false,
            "start": 348,
            "end": 360
          }
        ],
        "start": 342,
        "end": 374
      },
      "expression": false,
      "start": 311,
      "end": 374
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 384,
        "end": 393
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 408
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 411,
                  "end": 413
                },
                "definite": false,
                "start": 406,
                "end": 413
              }
            ],
            "declare": false,
            "start": 402,
            "end": 414
          }
        ],
        "start": 396,
        "end": 428
      },
      "expression": false,
      "start": 375,
      "end": 428
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 439,
        "end": 441
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
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
          "start": 442,
          "end": 452
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
            "start": 457,
            "end": 461
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 454,
          "end": 461
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 430,
      "end": 463
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 498
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 503,
              "end": 509
            },
            "start": 501,
            "end": 509
          },
          "start": 499,
          "end": 509
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
            "start": 514,
            "end": 518
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 511,
          "end": 518
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 487,
      "end": 520
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 553,
        "end": 555
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 560,
              "end": 563
            },
            "start": 558,
            "end": 563
          },
          "start": 556,
          "end": 563
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
            "start": 568,
            "end": 572
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 565,
          "end": 572
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 574,
        "end": 586
      },
      "expression": false,
      "start": 544,
      "end": 586
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 597,
        "end": 606
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 611,
              "end": 617
            },
            "start": 609,
            "end": 617
          },
          "start": 607,
          "end": 617
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 588,
      "end": 619
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 641,
        "end": 650
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 655,
              "end": 661
            },
            "start": 653,
            "end": 661
          },
          "start": 651,
          "end": 661
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 632,
      "end": 663
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 685,
        "end": 694
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 699,
              "end": 702
            },
            "start": 697,
            "end": 702
          },
          "start": 695,
          "end": 702
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 704,
        "end": 719
      },
      "expression": false,
      "start": 676,
      "end": 719
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 738,
        "end": 740
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 745,
              "end": 751
            },
            "start": 743,
            "end": 751
          },
          "start": 741,
          "end": 751
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
            "start": 756,
            "end": 760
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 753,
          "end": 760
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 721,
      "end": 762
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 803,
        "end": 805
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 810,
              "end": 816
            },
            "start": 808,
            "end": 816
          },
          "start": 806,
          "end": 816
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
            "start": 821,
            "end": 825
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 818,
          "end": 825
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 786,
      "end": 827
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 869,
        "end": 871
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 876,
              "end": 882
            },
            "start": 874,
            "end": 882
          },
          "start": 872,
          "end": 882
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 852,
      "end": 884
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 925,
        "end": 927
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_i",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 932,
              "end": 938
            },
            "start": 930,
            "end": 938
          },
          "start": 928,
          "end": 938
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 908,
      "end": 940
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 13,
  "end": 963
}
```

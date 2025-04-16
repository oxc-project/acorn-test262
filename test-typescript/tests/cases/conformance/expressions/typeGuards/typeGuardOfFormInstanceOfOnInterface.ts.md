__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 329,
  "end": 1054,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 329,
      "end": 392,
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 341,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 342,
        "end": 392,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 348,
            "end": 355,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 354,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 352,
                "end": 354,
                "typeName": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 354,
                  "name": "C1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 360,
            "end": 374,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 360,
              "end": 369,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 369,
              "end": 373,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 371,
                "end": 373,
                "typeName": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 373,
                  "name": "C1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 379,
            "end": 390,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 379,
              "end": 381,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 381,
              "end": 389,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 383,
                "end": 389
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 393,
      "end": 456,
      "id": {
        "type": "Identifier",
        "start": 403,
        "end": 405,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 406,
        "end": 456,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 412,
            "end": 419,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 414,
              "end": 418,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 416,
                "end": 418,
                "typeName": {
                  "type": "Identifier",
                  "start": 416,
                  "end": 418,
                  "name": "C2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 424,
            "end": 438,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 424,
              "end": 433,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 433,
              "end": 437,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 435,
                "end": 437,
                "typeName": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 437,
                  "name": "C2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 443,
            "end": 454,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 443,
              "end": 445,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 453,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 447,
                "end": 453
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 457,
      "end": 519,
      "id": {
        "type": "Identifier",
        "start": 467,
        "end": 469,
        "name": "D1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 478,
          "end": 480,
          "expression": {
            "type": "Identifier",
            "start": 478,
            "end": 480,
            "name": "C1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 481,
        "end": 519,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 487,
            "end": 501,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 487,
              "end": 496,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 496,
              "end": 500,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 498,
                "end": 500,
                "typeName": {
                  "type": "Identifier",
                  "start": 498,
                  "end": 500,
                  "name": "D1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 506,
            "end": 517,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 506,
              "end": 508,
              "name": "p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 508,
              "end": 516,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 510,
                "end": 516
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 520,
      "end": 536,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 524,
          "end": 535,
          "id": {
            "type": "Identifier",
            "start": 524,
            "end": 535,
            "name": "str",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 527,
              "end": 535,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 529,
                "end": 535
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 537,
      "end": 553,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 541,
          "end": 552,
          "id": {
            "type": "Identifier",
            "start": 541,
            "end": 552,
            "name": "num",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 544,
              "end": 552,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 546,
                "end": 552
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 554,
      "end": 584,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 558,
          "end": 583,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 583,
            "name": "strOrNum",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 566,
              "end": 583,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 568,
                "end": 583,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 568,
                    "end": 574
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 577,
                    "end": 583
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 586,
      "end": 597,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 590,
          "end": 596,
          "id": {
            "type": "Identifier",
            "start": 590,
            "end": 596,
            "name": "c1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 592,
              "end": 596,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 594,
                "end": 596,
                "typeName": {
                  "type": "Identifier",
                  "start": 594,
                  "end": 596,
                  "name": "C1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 598,
      "end": 609,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 602,
          "end": 608,
          "id": {
            "type": "Identifier",
            "start": 602,
            "end": 608,
            "name": "c2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 604,
              "end": 608,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 606,
                "end": 608,
                "typeName": {
                  "type": "Identifier",
                  "start": 606,
                  "end": 608,
                  "name": "C2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 610,
      "end": 621,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 614,
          "end": 620,
          "id": {
            "type": "Identifier",
            "start": 614,
            "end": 620,
            "name": "d1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 616,
              "end": 620,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 618,
                "end": 620,
                "typeName": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 620,
                  "name": "D1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 622,
      "end": 642,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 626,
          "end": 641,
          "id": {
            "type": "Identifier",
            "start": 626,
            "end": 641,
            "name": "c1Orc2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 632,
              "end": 641,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 634,
                "end": 641,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 634,
                    "end": 636,
                    "typeName": {
                      "type": "Identifier",
                      "start": 634,
                      "end": 636,
                      "name": "C1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 639,
                    "end": 641,
                    "typeName": {
                      "type": "Identifier",
                      "start": 639,
                      "end": 641,
                      "name": "C2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 643,
      "end": 683,
      "expression": {
        "type": "AssignmentExpression",
        "start": 643,
        "end": 682,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 643,
          "end": 646,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 649,
          "end": 682,
          "left": {
            "type": "BinaryExpression",
            "start": 649,
            "end": 669,
            "left": {
              "type": "Identifier",
              "start": 649,
              "end": 655,
              "name": "c1Orc2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 667,
              "end": 669,
              "name": "c1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 673,
            "end": 682,
            "object": {
              "type": "Identifier",
              "start": 673,
              "end": 679,
              "name": "c1Orc2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 680,
              "end": 682,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 690,
      "end": 730,
      "expression": {
        "type": "AssignmentExpression",
        "start": 690,
        "end": 729,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 690,
          "end": 693,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 696,
          "end": 729,
          "left": {
            "type": "BinaryExpression",
            "start": 696,
            "end": 716,
            "left": {
              "type": "Identifier",
              "start": 696,
              "end": 702,
              "name": "c1Orc2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 714,
              "end": 716,
              "name": "c2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 720,
            "end": 729,
            "object": {
              "type": "Identifier",
              "start": 720,
              "end": 726,
              "name": "c1Orc2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 727,
              "end": 729,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 737,
      "end": 777,
      "expression": {
        "type": "AssignmentExpression",
        "start": 737,
        "end": 776,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 737,
          "end": 740,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 743,
          "end": 776,
          "left": {
            "type": "BinaryExpression",
            "start": 743,
            "end": 763,
            "left": {
              "type": "Identifier",
              "start": 743,
              "end": 749,
              "name": "c1Orc2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 761,
              "end": 763,
              "name": "d1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 767,
            "end": 776,
            "object": {
              "type": "Identifier",
              "start": 767,
              "end": 773,
              "name": "c1Orc2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 774,
              "end": 776,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 784,
      "end": 824,
      "expression": {
        "type": "AssignmentExpression",
        "start": 784,
        "end": 823,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 784,
          "end": 787,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 790,
          "end": 823,
          "left": {
            "type": "BinaryExpression",
            "start": 790,
            "end": 810,
            "left": {
              "type": "Identifier",
              "start": 790,
              "end": 796,
              "name": "c1Orc2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 808,
              "end": 810,
              "name": "d1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 814,
            "end": 823,
            "object": {
              "type": "Identifier",
              "start": 814,
              "end": 820,
              "name": "c1Orc2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 821,
              "end": 823,
              "name": "p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 832,
      "end": 852,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 836,
          "end": 851,
          "id": {
            "type": "Identifier",
            "start": 836,
            "end": 851,
            "name": "c2Ord1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 842,
              "end": 851,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 844,
                "end": 851,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 844,
                    "end": 846,
                    "typeName": {
                      "type": "Identifier",
                      "start": 844,
                      "end": 846,
                      "name": "C2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 849,
                    "end": 851,
                    "typeName": {
                      "type": "Identifier",
                      "start": 849,
                      "end": 851,
                      "name": "D1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 853,
      "end": 893,
      "expression": {
        "type": "AssignmentExpression",
        "start": 853,
        "end": 892,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 853,
          "end": 856,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 859,
          "end": 892,
          "left": {
            "type": "BinaryExpression",
            "start": 859,
            "end": 879,
            "left": {
              "type": "Identifier",
              "start": 859,
              "end": 865,
              "name": "c2Ord1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 877,
              "end": 879,
              "name": "c2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 883,
            "end": 892,
            "object": {
              "type": "Identifier",
              "start": 883,
              "end": 889,
              "name": "c2Ord1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 890,
              "end": 892,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 900,
      "end": 940,
      "expression": {
        "type": "AssignmentExpression",
        "start": 900,
        "end": 939,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 900,
          "end": 903,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 906,
          "end": 939,
          "left": {
            "type": "BinaryExpression",
            "start": 906,
            "end": 926,
            "left": {
              "type": "Identifier",
              "start": 906,
              "end": 912,
              "name": "c2Ord1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 924,
              "end": 926,
              "name": "d1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 930,
            "end": 939,
            "object": {
              "type": "Identifier",
              "start": 930,
              "end": 936,
              "name": "c2Ord1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 937,
              "end": 939,
              "name": "p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 947,
      "end": 987,
      "expression": {
        "type": "AssignmentExpression",
        "start": 947,
        "end": 986,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 947,
          "end": 950,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 953,
          "end": 986,
          "left": {
            "type": "BinaryExpression",
            "start": 953,
            "end": 973,
            "left": {
              "type": "Identifier",
              "start": 953,
              "end": 959,
              "name": "c2Ord1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 971,
              "end": 973,
              "name": "d1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 977,
            "end": 986,
            "object": {
              "type": "Identifier",
              "start": 977,
              "end": 983,
              "name": "c2Ord1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 984,
              "end": 986,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 994,
      "end": 1043,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 998,
          "end": 1042,
          "id": {
            "type": "Identifier",
            "start": 998,
            "end": 1009,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1000,
              "end": 1009,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1002,
                "end": 1009,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1002,
                    "end": 1004,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1002,
                      "end": 1004,
                      "name": "D1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1007,
                    "end": 1009,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1007,
                      "end": 1009,
                      "name": "C2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1012,
            "end": 1042,
            "left": {
              "type": "BinaryExpression",
              "start": 1012,
              "end": 1032,
              "left": {
                "type": "Identifier",
                "start": 1012,
                "end": 1018,
                "name": "c2Ord1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 1030,
                "end": 1032,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1036,
              "end": 1042,
              "name": "c2Ord1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

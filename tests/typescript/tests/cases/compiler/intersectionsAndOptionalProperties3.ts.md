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
        "name": "A_Primitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 16
      },
      "typeParameters": null,
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
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 31
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 34,
                    "end": 41
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 44,
                    "end": 53
                  }
                ],
                "start": 34,
                "end": 53
              },
              "start": 32,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 54
          }
        ],
        "start": 19,
        "end": 56
      },
      "declare": false,
      "start": 0,
      "end": 57
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B_Primitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 75
      },
      "typeParameters": null,
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
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 90
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 93,
                "end": 100
              },
              "start": 91,
              "end": 100
            },
            "accessibility": null,
            "static": false,
            "start": 82,
            "end": 101
          }
        ],
        "start": 78,
        "end": 103
      },
      "declare": false,
      "start": 59,
      "end": 104
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C_Primitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 122
      },
      "typeParameters": null,
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
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 137
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 140,
                    "end": 147
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 150,
                    "end": 159
                  }
                ],
                "start": 140,
                "end": 159
              },
              "start": 138,
              "end": 159
            },
            "accessibility": null,
            "static": false,
            "start": 129,
            "end": 160
          }
        ],
        "start": 125,
        "end": 162
      },
      "declare": false,
      "start": 106,
      "end": 163
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
            "name": "ab_primitive",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A_Primitive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 193,
                      "end": 204
                    },
                    "typeArguments": null,
                    "start": 193,
                    "end": 204
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B_Primitive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 218
                    },
                    "typeArguments": null,
                    "start": 207,
                    "end": 218
                  }
                ],
                "start": 193,
                "end": 218
              },
              "start": 191,
              "end": 218
            },
            "start": 179,
            "end": 218
          },
          "init": null,
          "definite": false,
          "start": 179,
          "end": 218
        }
      ],
      "declare": true,
      "start": 165,
      "end": 219
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
            "name": "ac_primitive",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A_Primitive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 259
                    },
                    "typeArguments": null,
                    "start": 248,
                    "end": 259
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C_Primitive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 273
                    },
                    "typeArguments": null,
                    "start": 262,
                    "end": 273
                  }
                ],
                "start": 248,
                "end": 273
              },
              "start": 246,
              "end": 273
            },
            "start": 234,
            "end": 273
          },
          "init": null,
          "definite": false,
          "start": 234,
          "end": 273
        }
      ],
      "declare": true,
      "start": 220,
      "end": 274
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
            "name": "ab_disabled_read",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 298
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab_primitive",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 313
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 322
            },
            "optional": false,
            "computed": false,
            "start": 301,
            "end": 322
          },
          "definite": false,
          "start": 282,
          "end": 322
        }
      ],
      "declare": false,
      "start": 276,
      "end": 323
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
            "name": "ac_disabled_read",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 346
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ac_primitive",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 361
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 370
            },
            "optional": false,
            "computed": false,
            "start": 349,
            "end": 370
          },
          "definite": false,
          "start": 330,
          "end": 370
        }
      ],
      "declare": false,
      "start": 324,
      "end": 371
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ab_primitive",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 385
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "disabled",
            "optional": false,
            "typeAnnotation": null,
            "start": 386,
            "end": 394
          },
          "optional": false,
          "computed": false,
          "start": 373,
          "end": 394
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 397,
          "end": 406
        },
        "start": 373,
        "end": 406
      },
      "directive": null,
      "start": 373,
      "end": 407
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ac_primitive",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 420
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "disabled",
            "optional": false,
            "typeAnnotation": null,
            "start": 421,
            "end": 429
          },
          "optional": false,
          "computed": false,
          "start": 408,
          "end": 429
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 432,
          "end": 441
        },
        "start": 408,
        "end": 441
      },
      "directive": null,
      "start": 408,
      "end": 442
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 452
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 463
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 465,
                "end": 472
              },
              "start": 463,
              "end": 472
            },
            "accessibility": null,
            "static": false,
            "start": 459,
            "end": 473
          }
        ],
        "start": 455,
        "end": 475
      },
      "declare": false,
      "start": 444,
      "end": 476
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A_Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 483,
        "end": 488
      },
      "typeParameters": null,
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 499
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
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 502,
                      "end": 505
                    },
                    "typeArguments": null,
                    "start": 502,
                    "end": 505
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 508,
                    "end": 517
                  }
                ],
                "start": 502,
                "end": 517
              },
              "start": 500,
              "end": 517
            },
            "accessibility": null,
            "static": false,
            "start": 495,
            "end": 518
          }
        ],
        "start": 491,
        "end": 520
      },
      "declare": false,
      "start": 478,
      "end": 521
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B_Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 528,
        "end": 533
      },
      "typeParameters": null,
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 544
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 550
                },
                "typeArguments": null,
                "start": 547,
                "end": 550
              },
              "start": 545,
              "end": 550
            },
            "accessibility": null,
            "static": false,
            "start": 540,
            "end": 551
          }
        ],
        "start": 536,
        "end": 553
      },
      "declare": false,
      "start": 523,
      "end": 554
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C_Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 561,
        "end": 566
      },
      "typeParameters": null,
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 573,
              "end": 577
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
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 580,
                      "end": 583
                    },
                    "typeArguments": null,
                    "start": 580,
                    "end": 583
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 586,
                    "end": 595
                  }
                ],
                "start": 580,
                "end": 595
              },
              "start": 578,
              "end": 595
            },
            "accessibility": null,
            "static": false,
            "start": 573,
            "end": 596
          }
        ],
        "start": 569,
        "end": 598
      },
      "declare": false,
      "start": 556,
      "end": 599
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
            "name": "ab_obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A_Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 623,
                      "end": 628
                    },
                    "typeArguments": null,
                    "start": 623,
                    "end": 628
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B_Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 631,
                      "end": 636
                    },
                    "typeArguments": null,
                    "start": 631,
                    "end": 636
                  }
                ],
                "start": 623,
                "end": 636
              },
              "start": 621,
              "end": 636
            },
            "start": 615,
            "end": 636
          },
          "init": null,
          "definite": false,
          "start": 615,
          "end": 636
        }
      ],
      "declare": true,
      "start": 601,
      "end": 637
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
            "name": "ac_obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A_Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 660,
                      "end": 665
                    },
                    "typeArguments": null,
                    "start": 660,
                    "end": 665
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C_Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 668,
                      "end": 673
                    },
                    "typeArguments": null,
                    "start": 668,
                    "end": 673
                  }
                ],
                "start": 660,
                "end": 673
              },
              "start": 658,
              "end": 673
            },
            "start": 652,
            "end": 673
          },
          "init": null,
          "definite": false,
          "start": 652,
          "end": 673
        }
      ],
      "declare": true,
      "start": 638,
      "end": 674
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
            "name": "ab_prop_read",
            "optional": false,
            "typeAnnotation": null,
            "start": 682,
            "end": 694
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab_obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 703
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 704,
              "end": 708
            },
            "optional": false,
            "computed": false,
            "start": 697,
            "end": 708
          },
          "definite": false,
          "start": 682,
          "end": 708
        }
      ],
      "declare": false,
      "start": 676,
      "end": 709
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
            "name": "ac_prop_read",
            "optional": false,
            "typeAnnotation": null,
            "start": 716,
            "end": 728
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ac_obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 731,
              "end": 737
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 742
            },
            "optional": false,
            "computed": false,
            "start": 731,
            "end": 742
          },
          "definite": false,
          "start": 716,
          "end": 742
        }
      ],
      "declare": false,
      "start": 710,
      "end": 743
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ab_obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 745,
            "end": 751
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 752,
            "end": 756
          },
          "optional": false,
          "computed": false,
          "start": 745,
          "end": 756
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 759,
          "end": 768
        },
        "start": 745,
        "end": 768
      },
      "directive": null,
      "start": 745,
      "end": 769
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ac_obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 770,
            "end": 776
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 777,
            "end": 781
          },
          "optional": false,
          "computed": false,
          "start": 770,
          "end": 781
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 784,
          "end": 793
        },
        "start": 770,
        "end": 793
      },
      "directive": null,
      "start": 770,
      "end": 794
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 794
}
```

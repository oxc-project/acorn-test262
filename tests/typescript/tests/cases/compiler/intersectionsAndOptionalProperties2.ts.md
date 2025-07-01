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
        "start": 62,
        "end": 73
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
              "start": 80,
              "end": 88
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 91,
                "end": 98
              },
              "start": 89,
              "end": 98
            },
            "accessibility": null,
            "static": false,
            "start": 80,
            "end": 99
          }
        ],
        "start": 76,
        "end": 101
      },
      "declare": false,
      "start": 57,
      "end": 102
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B_Primitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 120
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
              "start": 127,
              "end": 135
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 138,
                    "end": 145
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 148,
                    "end": 157
                  }
                ],
                "start": 138,
                "end": 157
              },
              "start": 136,
              "end": 157
            },
            "accessibility": null,
            "static": false,
            "start": 127,
            "end": 158
          }
        ],
        "start": 123,
        "end": 160
      },
      "declare": false,
      "start": 104,
      "end": 161
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C_Primitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 179
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
              "start": 186,
              "end": 194
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 197,
                "end": 204
              },
              "start": 195,
              "end": 204
            },
            "accessibility": null,
            "static": false,
            "start": 186,
            "end": 205
          }
        ],
        "start": 182,
        "end": 207
      },
      "declare": false,
      "start": 163,
      "end": 208
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
                      "start": 238,
                      "end": 249
                    },
                    "typeArguments": null,
                    "start": 238,
                    "end": 249
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B_Primitive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 252,
                      "end": 263
                    },
                    "typeArguments": null,
                    "start": 252,
                    "end": 263
                  }
                ],
                "start": 238,
                "end": 263
              },
              "start": 236,
              "end": 263
            },
            "start": 224,
            "end": 263
          },
          "init": null,
          "definite": false,
          "start": 224,
          "end": 263
        }
      ],
      "declare": true,
      "start": 210,
      "end": 264
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
                      "start": 293,
                      "end": 304
                    },
                    "typeArguments": null,
                    "start": 293,
                    "end": 304
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C_Primitive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 307,
                      "end": 318
                    },
                    "typeArguments": null,
                    "start": 307,
                    "end": 318
                  }
                ],
                "start": 293,
                "end": 318
              },
              "start": 291,
              "end": 318
            },
            "start": 279,
            "end": 318
          },
          "init": null,
          "definite": false,
          "start": 279,
          "end": 318
        }
      ],
      "declare": true,
      "start": 265,
      "end": 319
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
            "start": 327,
            "end": 343
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab_primitive",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 358
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 367
            },
            "optional": false,
            "computed": false,
            "start": 346,
            "end": 367
          },
          "definite": false,
          "start": 327,
          "end": 367
        }
      ],
      "declare": false,
      "start": 321,
      "end": 368
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
            "start": 375,
            "end": 391
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ac_primitive",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 406
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 415
            },
            "optional": false,
            "computed": false,
            "start": 394,
            "end": 415
          },
          "definite": false,
          "start": 375,
          "end": 415
        }
      ],
      "declare": false,
      "start": 369,
      "end": 416
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
            "start": 418,
            "end": 430
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "disabled",
            "optional": false,
            "typeAnnotation": null,
            "start": 431,
            "end": 439
          },
          "optional": false,
          "computed": false,
          "start": 418,
          "end": 439
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 451
        },
        "start": 418,
        "end": 451
      },
      "directive": null,
      "start": 418,
      "end": 452
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
            "start": 453,
            "end": 465
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "disabled",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 474
          },
          "optional": false,
          "computed": false,
          "start": 453,
          "end": 474
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 477,
          "end": 486
        },
        "start": 453,
        "end": 486
      },
      "directive": null,
      "start": 453,
      "end": 487
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 494,
        "end": 497
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
              "start": 504,
              "end": 508
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 510,
                "end": 517
              },
              "start": 508,
              "end": 517
            },
            "accessibility": null,
            "static": false,
            "start": 504,
            "end": 518
          }
        ],
        "start": 500,
        "end": 520
      },
      "declare": false,
      "start": 489,
      "end": 521
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A_Obj",
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
        "name": "B_Obj",
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
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C_Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 606,
        "end": 611
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
              "start": 618,
              "end": 622
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
                  "start": 625,
                  "end": 628
                },
                "typeArguments": null,
                "start": 625,
                "end": 628
              },
              "start": 623,
              "end": 628
            },
            "accessibility": null,
            "static": false,
            "start": 618,
            "end": 629
          }
        ],
        "start": 614,
        "end": 631
      },
      "declare": false,
      "start": 601,
      "end": 632
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
                      "start": 656,
                      "end": 661
                    },
                    "typeArguments": null,
                    "start": 656,
                    "end": 661
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B_Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 664,
                      "end": 669
                    },
                    "typeArguments": null,
                    "start": 664,
                    "end": 669
                  }
                ],
                "start": 656,
                "end": 669
              },
              "start": 654,
              "end": 669
            },
            "start": 648,
            "end": 669
          },
          "init": null,
          "definite": false,
          "start": 648,
          "end": 669
        }
      ],
      "declare": true,
      "start": 634,
      "end": 670
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
                      "start": 693,
                      "end": 698
                    },
                    "typeArguments": null,
                    "start": 693,
                    "end": 698
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C_Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 701,
                      "end": 706
                    },
                    "typeArguments": null,
                    "start": 701,
                    "end": 706
                  }
                ],
                "start": 693,
                "end": 706
              },
              "start": 691,
              "end": 706
            },
            "start": 685,
            "end": 706
          },
          "init": null,
          "definite": false,
          "start": 685,
          "end": 706
        }
      ],
      "declare": true,
      "start": 671,
      "end": 707
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
            "start": 715,
            "end": 727
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ab_obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 730,
              "end": 736
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 737,
              "end": 741
            },
            "optional": false,
            "computed": false,
            "start": 730,
            "end": 741
          },
          "definite": false,
          "start": 715,
          "end": 741
        }
      ],
      "declare": false,
      "start": 709,
      "end": 742
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
            "start": 749,
            "end": 761
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ac_obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 764,
              "end": 770
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 771,
              "end": 775
            },
            "optional": false,
            "computed": false,
            "start": 764,
            "end": 775
          },
          "definite": false,
          "start": 749,
          "end": 775
        }
      ],
      "declare": false,
      "start": 743,
      "end": 776
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
            "start": 778,
            "end": 784
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 785,
            "end": 789
          },
          "optional": false,
          "computed": false,
          "start": 778,
          "end": 789
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 792,
          "end": 801
        },
        "start": 778,
        "end": 801
      },
      "directive": null,
      "start": 778,
      "end": 802
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
            "start": 803,
            "end": 809
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 810,
            "end": 814
          },
          "optional": false,
          "computed": false,
          "start": 803,
          "end": 814
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 817,
          "end": 826
        },
        "start": 803,
        "end": 826
      },
      "directive": null,
      "start": 803,
      "end": 827
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 827
}
```

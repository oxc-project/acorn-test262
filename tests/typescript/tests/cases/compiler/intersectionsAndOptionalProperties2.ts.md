__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61,
    "range": [
      57,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "A_Primitive",
    "start": 62,
    "end": 73,
    "range": [
      62,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 80,
    "end": 88,
    "range": [
      80,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 91,
    "end": 98,
    "range": [
      91,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 104,
    "end": 108,
    "range": [
      104,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "B_Primitive",
    "start": 109,
    "end": 120,
    "range": [
      109,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 127,
    "end": 135,
    "range": [
      127,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 138,
    "end": 145,
    "range": [
      138,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 148,
    "end": 157,
    "range": [
      148,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 163,
    "end": 167,
    "range": [
      163,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "C_Primitive",
    "start": 168,
    "end": 179,
    "range": [
      168,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 186,
    "end": 194,
    "range": [
      186,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 197,
    "end": 204,
    "range": [
      197,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 210,
    "end": 217,
    "range": [
      210,
      217
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 218,
    "end": 223,
    "range": [
      218,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "ab_primitive",
    "start": 224,
    "end": 236,
    "range": [
      224,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "A_Primitive",
    "start": 238,
    "end": 249,
    "range": [
      238,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "B_Primitive",
    "start": 252,
    "end": 263,
    "range": [
      252,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 265,
    "end": 272,
    "range": [
      265,
      272
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 273,
    "end": 278,
    "range": [
      273,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "ac_primitive",
    "start": 279,
    "end": 291,
    "range": [
      279,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "A_Primitive",
    "start": 293,
    "end": 304,
    "range": [
      293,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "C_Primitive",
    "start": 307,
    "end": 318,
    "range": [
      307,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 321,
    "end": 326,
    "range": [
      321,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "ab_disabled_read",
    "start": 327,
    "end": 343,
    "range": [
      327,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "ab_primitive",
    "start": 346,
    "end": 358,
    "range": [
      346,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 359,
    "end": 367,
    "range": [
      359,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 369,
    "end": 374,
    "range": [
      369,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "ac_disabled_read",
    "start": 375,
    "end": 391,
    "range": [
      375,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "ac_primitive",
    "start": 394,
    "end": 406,
    "range": [
      394,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 407,
    "end": 415,
    "range": [
      407,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "ab_primitive",
    "start": 418,
    "end": 430,
    "range": [
      418,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 431,
    "end": 439,
    "range": [
      431,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 442,
    "end": 451,
    "range": [
      442,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "ac_primitive",
    "start": 453,
    "end": 465,
    "range": [
      453,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "disabled",
    "start": 466,
    "end": 474,
    "range": [
      466,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 477,
    "end": 486,
    "range": [
      477,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 489,
    "end": 493,
    "range": [
      489,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 494,
    "end": 497,
    "range": [
      494,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 504,
    "end": 508,
    "range": [
      504,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 510,
    "end": 517,
    "range": [
      510,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 523,
    "end": 527,
    "range": [
      523,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "A_Obj",
    "start": 528,
    "end": 533,
    "range": [
      528,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 540,
    "end": 544,
    "range": [
      540,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 547,
    "end": 550,
    "range": [
      547,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 556,
    "end": 560,
    "range": [
      556,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "B_Obj",
    "start": 561,
    "end": 566,
    "range": [
      561,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 573,
    "end": 577,
    "range": [
      573,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 580,
    "end": 583,
    "range": [
      580,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 586,
    "end": 595,
    "range": [
      586,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 601,
    "end": 605,
    "range": [
      601,
      605
    ]
  },
  {
    "type": "Identifier",
    "value": "C_Obj",
    "start": 606,
    "end": 611,
    "range": [
      606,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 618,
    "end": 622,
    "range": [
      618,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 625,
    "end": 628,
    "range": [
      625,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 634,
    "end": 641,
    "range": [
      634,
      641
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 642,
    "end": 647,
    "range": [
      642,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "ab_obj",
    "start": 648,
    "end": 654,
    "range": [
      648,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "A_Obj",
    "start": 656,
    "end": 661,
    "range": [
      656,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "B_Obj",
    "start": 664,
    "end": 669,
    "range": [
      664,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 671,
    "end": 678,
    "range": [
      671,
      678
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 679,
    "end": 684,
    "range": [
      679,
      684
    ]
  },
  {
    "type": "Identifier",
    "value": "ac_obj",
    "start": 685,
    "end": 691,
    "range": [
      685,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Identifier",
    "value": "A_Obj",
    "start": 693,
    "end": 698,
    "range": [
      693,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Identifier",
    "value": "C_Obj",
    "start": 701,
    "end": 706,
    "range": [
      701,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 709,
    "end": 714,
    "range": [
      709,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "ab_prop_read",
    "start": 715,
    "end": 727,
    "range": [
      715,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "ab_obj",
    "start": 730,
    "end": 736,
    "range": [
      730,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 737,
    "end": 741,
    "range": [
      737,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 743,
    "end": 748,
    "range": [
      743,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "ac_prop_read",
    "start": 749,
    "end": 761,
    "range": [
      749,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "ac_obj",
    "start": 764,
    "end": 770,
    "range": [
      764,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 771,
    "end": 775,
    "range": [
      771,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "ab_obj",
    "start": 778,
    "end": 784,
    "range": [
      778,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 785,
    "end": 789,
    "range": [
      785,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 792,
    "end": 801,
    "range": [
      792,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "ac_obj",
    "start": 803,
    "end": 809,
    "range": [
      803,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 810,
    "end": 814,
    "range": [
      810,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 817,
    "end": 826,
    "range": [
      817,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  }
]
```

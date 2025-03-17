__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 828,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 73,
        "name": "A_Primitive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 76,
        "end": 101,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 80,
            "end": 99,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 88,
              "name": "disabled",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 98,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 91,
                "end": 98
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
      "type": "TSTypeAliasDeclaration",
      "start": 104,
      "end": 161,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 120,
        "name": "B_Primitive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 123,
        "end": 160,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 127,
            "end": 158,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 135,
              "name": "disabled",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 157,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 138,
                "end": 157,
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
                ]
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
      "type": "TSTypeAliasDeclaration",
      "start": 163,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 179,
        "name": "C_Primitive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 182,
        "end": 207,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 186,
            "end": 205,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 194,
              "name": "disabled",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 204,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 197,
                "end": 204
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
      "start": 210,
      "end": 264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 263,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 263,
            "name": "ab_primitive",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 263,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 238,
                "end": 263,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 238,
                    "end": 249,
                    "typeName": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 249,
                      "name": "A_Primitive",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 252,
                    "end": 263,
                    "typeName": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 263,
                      "name": "B_Primitive",
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 318,
            "name": "ac_primitive",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 318,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 293,
                "end": 318,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 293,
                    "end": 304,
                    "typeName": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 304,
                      "name": "A_Primitive",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 307,
                    "end": 318,
                    "typeName": {
                      "type": "Identifier",
                      "start": 307,
                      "end": 318,
                      "name": "C_Primitive",
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 321,
      "end": 368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 367,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 343,
            "name": "ab_disabled_read",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 346,
            "end": 367,
            "object": {
              "type": "Identifier",
              "start": 346,
              "end": 358,
              "name": "ab_primitive",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 359,
              "end": 367,
              "name": "disabled",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 369,
      "end": 416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 375,
          "end": 415,
          "id": {
            "type": "Identifier",
            "start": 375,
            "end": 391,
            "name": "ac_disabled_read",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 394,
            "end": 415,
            "object": {
              "type": "Identifier",
              "start": 394,
              "end": 406,
              "name": "ac_primitive",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 407,
              "end": 415,
              "name": "disabled",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 418,
      "end": 452,
      "expression": {
        "type": "AssignmentExpression",
        "start": 418,
        "end": 451,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 418,
          "end": 439,
          "object": {
            "type": "Identifier",
            "start": 418,
            "end": 430,
            "name": "ab_primitive",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 431,
            "end": 439,
            "name": "disabled",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 442,
          "end": 451,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 453,
      "end": 487,
      "expression": {
        "type": "AssignmentExpression",
        "start": 453,
        "end": 486,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 453,
          "end": 474,
          "object": {
            "type": "Identifier",
            "start": 453,
            "end": 465,
            "name": "ac_primitive",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 466,
            "end": 474,
            "name": "disabled",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 477,
          "end": 486,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 489,
      "end": 521,
      "id": {
        "type": "Identifier",
        "start": 494,
        "end": 497,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 500,
        "end": 520,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 504,
            "end": 518,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 504,
              "end": 508,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 508,
              "end": 517,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 510,
                "end": 517
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
      "type": "TSTypeAliasDeclaration",
      "start": 523,
      "end": 554,
      "id": {
        "type": "Identifier",
        "start": 528,
        "end": 533,
        "name": "A_Obj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 536,
        "end": 553,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 540,
            "end": 551,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 540,
              "end": 544,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 545,
              "end": 550,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 547,
                "end": 550,
                "typeName": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 550,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 556,
      "end": 599,
      "id": {
        "type": "Identifier",
        "start": 561,
        "end": 566,
        "name": "B_Obj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 569,
        "end": 598,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 573,
            "end": 596,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 573,
              "end": 577,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 578,
              "end": 595,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 580,
                "end": 595,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 580,
                    "end": 583,
                    "typeName": {
                      "type": "Identifier",
                      "start": 580,
                      "end": 583,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 586,
                    "end": 595
                  }
                ]
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
      "type": "TSTypeAliasDeclaration",
      "start": 601,
      "end": 632,
      "id": {
        "type": "Identifier",
        "start": 606,
        "end": 611,
        "name": "C_Obj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 614,
        "end": 631,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 618,
            "end": 629,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 618,
              "end": 622,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 623,
              "end": 628,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 625,
                "end": 628,
                "typeName": {
                  "type": "Identifier",
                  "start": 625,
                  "end": 628,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 634,
      "end": 670,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 648,
          "end": 669,
          "id": {
            "type": "Identifier",
            "start": 648,
            "end": 669,
            "name": "ab_obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 654,
              "end": 669,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 656,
                "end": 669,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 656,
                    "end": 661,
                    "typeName": {
                      "type": "Identifier",
                      "start": 656,
                      "end": 661,
                      "name": "A_Obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 664,
                    "end": 669,
                    "typeName": {
                      "type": "Identifier",
                      "start": 664,
                      "end": 669,
                      "name": "B_Obj",
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 671,
      "end": 707,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 685,
          "end": 706,
          "id": {
            "type": "Identifier",
            "start": 685,
            "end": 706,
            "name": "ac_obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 691,
              "end": 706,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 693,
                "end": 706,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 693,
                    "end": 698,
                    "typeName": {
                      "type": "Identifier",
                      "start": 693,
                      "end": 698,
                      "name": "A_Obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 701,
                    "end": 706,
                    "typeName": {
                      "type": "Identifier",
                      "start": 701,
                      "end": 706,
                      "name": "C_Obj",
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 709,
      "end": 742,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 715,
          "end": 741,
          "id": {
            "type": "Identifier",
            "start": 715,
            "end": 727,
            "name": "ab_prop_read",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 730,
            "end": 741,
            "object": {
              "type": "Identifier",
              "start": 730,
              "end": 736,
              "name": "ab_obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 737,
              "end": 741,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 743,
      "end": 776,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 749,
          "end": 775,
          "id": {
            "type": "Identifier",
            "start": 749,
            "end": 761,
            "name": "ac_prop_read",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 764,
            "end": 775,
            "object": {
              "type": "Identifier",
              "start": 764,
              "end": 770,
              "name": "ac_obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 771,
              "end": 775,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 778,
      "end": 802,
      "expression": {
        "type": "AssignmentExpression",
        "start": 778,
        "end": 801,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 778,
          "end": 789,
          "object": {
            "type": "Identifier",
            "start": 778,
            "end": 784,
            "name": "ab_obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 785,
            "end": 789,
            "name": "prop",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 792,
          "end": 801,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 803,
      "end": 827,
      "expression": {
        "type": "AssignmentExpression",
        "start": 803,
        "end": 826,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 803,
          "end": 814,
          "object": {
            "type": "Identifier",
            "start": 803,
            "end": 809,
            "name": "ac_obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 810,
            "end": 814,
            "name": "prop",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 817,
          "end": 826,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

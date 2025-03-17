__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 795,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "name": "A_Primitive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 19,
        "end": 56,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 54,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 31,
              "name": "disabled",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 53,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 34,
                "end": 53,
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
      "start": 59,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 75,
        "name": "B_Primitive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 78,
        "end": 103,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 82,
            "end": 101,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 90,
              "name": "disabled",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 100,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 93,
                "end": 100
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
      "start": 106,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 122,
        "name": "C_Primitive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 125,
        "end": 162,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 129,
            "end": 160,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 137,
              "name": "disabled",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 159,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 140,
                "end": 159,
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
      "type": "VariableDeclaration",
      "start": 165,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 218,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 218,
            "name": "ab_primitive",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 218,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 193,
                "end": 218,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 193,
                    "end": 204,
                    "typeName": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 204,
                      "name": "A_Primitive",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 207,
                    "end": 218,
                    "typeName": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 218,
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
      "start": 220,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 273,
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 273,
            "name": "ac_primitive",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 273,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 248,
                "end": 273,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 248,
                    "end": 259,
                    "typeName": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 259,
                      "name": "A_Primitive",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 262,
                    "end": 273,
                    "typeName": {
                      "type": "Identifier",
                      "start": 262,
                      "end": 273,
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
      "start": 276,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 322,
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 298,
            "name": "ab_disabled_read",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 301,
            "end": 322,
            "object": {
              "type": "Identifier",
              "start": 301,
              "end": 313,
              "name": "ab_primitive",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 314,
              "end": 322,
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
      "start": 324,
      "end": 371,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 330,
          "end": 370,
          "id": {
            "type": "Identifier",
            "start": 330,
            "end": 346,
            "name": "ac_disabled_read",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 349,
            "end": 370,
            "object": {
              "type": "Identifier",
              "start": 349,
              "end": 361,
              "name": "ac_primitive",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 362,
              "end": 370,
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
      "start": 373,
      "end": 407,
      "expression": {
        "type": "AssignmentExpression",
        "start": 373,
        "end": 406,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 373,
          "end": 394,
          "object": {
            "type": "Identifier",
            "start": 373,
            "end": 385,
            "name": "ab_primitive",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 386,
            "end": 394,
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
          "start": 397,
          "end": 406,
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
      "start": 408,
      "end": 442,
      "expression": {
        "type": "AssignmentExpression",
        "start": 408,
        "end": 441,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 408,
          "end": 429,
          "object": {
            "type": "Identifier",
            "start": 408,
            "end": 420,
            "name": "ac_primitive",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 421,
            "end": 429,
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
          "start": 432,
          "end": 441,
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
      "start": 444,
      "end": 476,
      "id": {
        "type": "Identifier",
        "start": 449,
        "end": 452,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 455,
        "end": 475,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 459,
            "end": 473,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 459,
              "end": 463,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 463,
              "end": 472,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 465,
                "end": 472
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
      "start": 478,
      "end": 521,
      "id": {
        "type": "Identifier",
        "start": 483,
        "end": 488,
        "name": "A_Obj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 491,
        "end": 520,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 495,
            "end": 518,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 495,
              "end": 499,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 500,
              "end": 517,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 502,
                "end": 517,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 502,
                    "end": 505,
                    "typeName": {
                      "type": "Identifier",
                      "start": 502,
                      "end": 505,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 508,
                    "end": 517
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
      "start": 523,
      "end": 554,
      "id": {
        "type": "Identifier",
        "start": 528,
        "end": 533,
        "name": "B_Obj",
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
        "name": "C_Obj",
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
      "type": "VariableDeclaration",
      "start": 601,
      "end": 637,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 615,
          "end": 636,
          "id": {
            "type": "Identifier",
            "start": 615,
            "end": 636,
            "name": "ab_obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 621,
              "end": 636,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 623,
                "end": 636,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 623,
                    "end": 628,
                    "typeName": {
                      "type": "Identifier",
                      "start": 623,
                      "end": 628,
                      "name": "A_Obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 631,
                    "end": 636,
                    "typeName": {
                      "type": "Identifier",
                      "start": 631,
                      "end": 636,
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
      "start": 638,
      "end": 674,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 652,
          "end": 673,
          "id": {
            "type": "Identifier",
            "start": 652,
            "end": 673,
            "name": "ac_obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 658,
              "end": 673,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 660,
                "end": 673,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 660,
                    "end": 665,
                    "typeName": {
                      "type": "Identifier",
                      "start": 660,
                      "end": 665,
                      "name": "A_Obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 668,
                    "end": 673,
                    "typeName": {
                      "type": "Identifier",
                      "start": 668,
                      "end": 673,
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
      "start": 676,
      "end": 709,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 682,
          "end": 708,
          "id": {
            "type": "Identifier",
            "start": 682,
            "end": 694,
            "name": "ab_prop_read",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 697,
            "end": 708,
            "object": {
              "type": "Identifier",
              "start": 697,
              "end": 703,
              "name": "ab_obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 704,
              "end": 708,
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
      "start": 710,
      "end": 743,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 716,
          "end": 742,
          "id": {
            "type": "Identifier",
            "start": 716,
            "end": 728,
            "name": "ac_prop_read",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 731,
            "end": 742,
            "object": {
              "type": "Identifier",
              "start": 731,
              "end": 737,
              "name": "ac_obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 738,
              "end": 742,
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
      "start": 745,
      "end": 769,
      "expression": {
        "type": "AssignmentExpression",
        "start": 745,
        "end": 768,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 745,
          "end": 756,
          "object": {
            "type": "Identifier",
            "start": 745,
            "end": 751,
            "name": "ab_obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 752,
            "end": 756,
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
          "start": 759,
          "end": 768,
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
      "start": 770,
      "end": 794,
      "expression": {
        "type": "AssignmentExpression",
        "start": 770,
        "end": 793,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 770,
          "end": 781,
          "object": {
            "type": "Identifier",
            "start": 770,
            "end": 776,
            "name": "ac_obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 777,
            "end": 781,
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
          "start": 784,
          "end": 793,
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

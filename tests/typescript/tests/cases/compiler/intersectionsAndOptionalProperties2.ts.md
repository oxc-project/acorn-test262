__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 827,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 102,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 73,
        "decorators": [],
        "name": "A_Primitive",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 76,
        "end": 101,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 80,
            "end": 99,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 88,
              "decorators": [],
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 98,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 91,
                "end": 98
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 104,
      "end": 161,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 120,
        "decorators": [],
        "name": "B_Primitive",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 123,
        "end": 160,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 127,
            "end": 158,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 135,
              "decorators": [],
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
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
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 163,
      "end": 208,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 179,
        "decorators": [],
        "name": "C_Primitive",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 182,
        "end": 207,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 186,
            "end": 205,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 194,
              "decorators": [],
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 204,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 197,
                "end": 204
              }
            }
          }
        ]
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 263,
            "decorators": [],
            "name": "ab_primitive",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 249,
                      "decorators": [],
                      "name": "A_Primitive",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 252,
                    "end": 263,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 263,
                      "decorators": [],
                      "name": "B_Primitive",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 318,
            "decorators": [],
            "name": "ac_primitive",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 304,
                      "decorators": [],
                      "name": "A_Primitive",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 307,
                    "end": 318,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 307,
                      "end": 318,
                      "decorators": [],
                      "name": "C_Primitive",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 343,
            "decorators": [],
            "name": "ab_disabled_read",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 346,
            "end": 367,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 346,
              "end": 358,
              "decorators": [],
              "name": "ab_primitive",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 359,
              "end": 367,
              "decorators": [],
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 375,
            "end": 391,
            "decorators": [],
            "name": "ac_disabled_read",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 394,
            "end": 415,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 394,
              "end": 406,
              "decorators": [],
              "name": "ac_primitive",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 407,
              "end": 415,
              "decorators": [],
              "name": "disabled",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 418,
      "end": 452,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 418,
        "end": 451,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 418,
          "end": 439,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 418,
            "end": 430,
            "decorators": [],
            "name": "ab_primitive",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 431,
            "end": 439,
            "decorators": [],
            "name": "disabled",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 442,
          "end": 451,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 453,
      "end": 487,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 453,
        "end": 486,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 453,
          "end": 474,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 453,
            "end": 465,
            "decorators": [],
            "name": "ac_primitive",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 466,
            "end": 474,
            "decorators": [],
            "name": "disabled",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 477,
          "end": 486,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 489,
      "end": 521,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 494,
        "end": 497,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 500,
        "end": 520,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 504,
            "end": 518,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 504,
              "end": 508,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 508,
              "end": 517,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 510,
                "end": 517
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 523,
      "end": 554,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 528,
        "end": 533,
        "decorators": [],
        "name": "A_Obj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 536,
        "end": 553,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 540,
            "end": 551,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 540,
              "end": 544,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 545,
              "end": 550,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 547,
                "end": 550,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 550,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 556,
      "end": 599,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 561,
        "end": 566,
        "decorators": [],
        "name": "B_Obj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 569,
        "end": 598,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 573,
            "end": 596,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 573,
              "end": 577,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 580,
                      "end": 583,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 586,
                    "end": 595
                  }
                ]
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 601,
      "end": 632,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 606,
        "end": 611,
        "decorators": [],
        "name": "C_Obj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 614,
        "end": 631,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 618,
            "end": 629,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 618,
              "end": 622,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 623,
              "end": 628,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 625,
                "end": 628,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 625,
                  "end": 628,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 648,
            "end": 669,
            "decorators": [],
            "name": "ab_obj",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 656,
                      "end": 661,
                      "decorators": [],
                      "name": "A_Obj",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 664,
                    "end": 669,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 664,
                      "end": 669,
                      "decorators": [],
                      "name": "B_Obj",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 685,
            "end": 706,
            "decorators": [],
            "name": "ac_obj",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 693,
                      "end": 698,
                      "decorators": [],
                      "name": "A_Obj",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 701,
                    "end": 706,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 701,
                      "end": 706,
                      "decorators": [],
                      "name": "C_Obj",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 715,
            "end": 727,
            "decorators": [],
            "name": "ab_prop_read",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 730,
            "end": 741,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 730,
              "end": 736,
              "decorators": [],
              "name": "ab_obj",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 737,
              "end": 741,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 749,
            "end": 761,
            "decorators": [],
            "name": "ac_prop_read",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 764,
            "end": 775,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 764,
              "end": 770,
              "decorators": [],
              "name": "ac_obj",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 771,
              "end": 775,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 778,
      "end": 802,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 778,
        "end": 801,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 778,
          "end": 789,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 778,
            "end": 784,
            "decorators": [],
            "name": "ab_obj",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 785,
            "end": 789,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 792,
          "end": 801,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 803,
      "end": 827,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 803,
        "end": 826,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 803,
          "end": 814,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 803,
            "end": 809,
            "decorators": [],
            "name": "ac_obj",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 810,
            "end": 814,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 817,
          "end": 826,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

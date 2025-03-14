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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "decorators": [],
        "name": "A_Primitive",
        "optional": false
      },
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
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 31,
              "decorators": [],
              "name": "disabled",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
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
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 59,
      "end": 104,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 75,
        "decorators": [],
        "name": "B_Primitive",
        "optional": false
      },
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
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 90,
              "decorators": [],
              "name": "disabled",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 100,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 93,
                "end": 100
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 106,
      "end": 163,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 122,
        "decorators": [],
        "name": "C_Primitive",
        "optional": false
      },
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
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 137,
              "decorators": [],
              "name": "disabled",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
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
            }
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 218,
            "decorators": [],
            "name": "ab_primitive",
            "optional": false,
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
                      "decorators": [],
                      "name": "A_Primitive",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 207,
                    "end": 218,
                    "typeName": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 218,
                      "decorators": [],
                      "name": "B_Primitive",
                      "optional": false
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
      "start": 220,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 273,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 273,
            "decorators": [],
            "name": "ac_primitive",
            "optional": false,
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
                      "decorators": [],
                      "name": "A_Primitive",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 262,
                    "end": 273,
                    "typeName": {
                      "type": "Identifier",
                      "start": 262,
                      "end": 273,
                      "decorators": [],
                      "name": "C_Primitive",
                      "optional": false
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
      "start": 276,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 322,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 298,
            "decorators": [],
            "name": "ab_disabled_read",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 301,
            "end": 322,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 301,
              "end": 313,
              "decorators": [],
              "name": "ab_primitive",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 314,
              "end": 322,
              "decorators": [],
              "name": "disabled",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 330,
            "end": 346,
            "decorators": [],
            "name": "ac_disabled_read",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 349,
            "end": 370,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 349,
              "end": 361,
              "decorators": [],
              "name": "ac_primitive",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 362,
              "end": 370,
              "decorators": [],
              "name": "disabled",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 373,
            "end": 385,
            "decorators": [],
            "name": "ab_primitive",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 386,
            "end": 394,
            "decorators": [],
            "name": "disabled",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 397,
          "end": 406,
          "decorators": [],
          "name": "undefined",
          "optional": false
        }
      }
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 408,
            "end": 420,
            "decorators": [],
            "name": "ac_primitive",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 421,
            "end": 429,
            "decorators": [],
            "name": "disabled",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 432,
          "end": 441,
          "decorators": [],
          "name": "undefined",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 444,
      "end": 476,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 449,
        "end": 452,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
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
            "key": {
              "type": "Identifier",
              "start": 459,
              "end": 463,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 463,
              "end": 472,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 465,
                "end": 472
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 478,
      "end": 521,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 483,
        "end": 488,
        "decorators": [],
        "name": "A_Obj",
        "optional": false
      },
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
            "key": {
              "type": "Identifier",
              "start": 495,
              "end": 499,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
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
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 508,
                    "end": 517
                  }
                ]
              }
            }
          }
        ]
      }
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
        "name": "B_Obj",
        "optional": false
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 540,
              "end": 544,
              "decorators": [],
              "name": "prop",
              "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 550,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          }
        ]
      }
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
        "name": "C_Obj",
        "optional": false
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 573,
              "end": 577,
              "decorators": [],
              "name": "prop",
              "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 580,
                      "end": 583,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
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
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 615,
            "end": 636,
            "decorators": [],
            "name": "ab_obj",
            "optional": false,
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
                      "decorators": [],
                      "name": "A_Obj",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 631,
                    "end": 636,
                    "typeName": {
                      "type": "Identifier",
                      "start": 631,
                      "end": 636,
                      "decorators": [],
                      "name": "B_Obj",
                      "optional": false
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
      "start": 638,
      "end": 674,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 652,
          "end": 673,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 652,
            "end": 673,
            "decorators": [],
            "name": "ac_obj",
            "optional": false,
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
                      "decorators": [],
                      "name": "A_Obj",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 668,
                    "end": 673,
                    "typeName": {
                      "type": "Identifier",
                      "start": 668,
                      "end": 673,
                      "decorators": [],
                      "name": "C_Obj",
                      "optional": false
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
      "start": 676,
      "end": 709,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 682,
          "end": 708,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 682,
            "end": 694,
            "decorators": [],
            "name": "ab_prop_read",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 697,
            "end": 708,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 697,
              "end": 703,
              "decorators": [],
              "name": "ab_obj",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 704,
              "end": 708,
              "decorators": [],
              "name": "prop",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 716,
            "end": 728,
            "decorators": [],
            "name": "ac_prop_read",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 731,
            "end": 742,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 731,
              "end": 737,
              "decorators": [],
              "name": "ac_obj",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 738,
              "end": 742,
              "decorators": [],
              "name": "prop",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 745,
            "end": 751,
            "decorators": [],
            "name": "ab_obj",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 752,
            "end": 756,
            "decorators": [],
            "name": "prop",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 759,
          "end": 768,
          "decorators": [],
          "name": "undefined",
          "optional": false
        }
      }
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 770,
            "end": 776,
            "decorators": [],
            "name": "ac_obj",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 777,
            "end": 781,
            "decorators": [],
            "name": "prop",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 784,
          "end": 793,
          "decorators": [],
          "name": "undefined",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

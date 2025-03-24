__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 1445,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 39,
            "decorators": [],
            "name": "unionNumberString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 39,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 24,
                "end": 39,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 24,
                    "end": 30
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 33,
                    "end": 39
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 41,
      "end": 52,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 52,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 53,
      "end": 85,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 71,
        "end": 85,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 83,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 77,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 83,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 80,
                "end": 83,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 86,
      "end": 118,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 118,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 116,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 110,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 110,
              "end": 116,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 113,
                "end": 116,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 137,
            "decorators": [],
            "name": "unionDE",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 137,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 132,
                "end": 137,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 132,
                    "end": 133,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 133,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 136,
                    "end": 137,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "decorators": [],
                      "name": "E",
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
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 155,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 155,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 149,
                "end": 155
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 157,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 161,
          "end": 172,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 161,
            "end": 172,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 172,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 166,
                "end": 172
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 182,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 181,
                "end": 182,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 184,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 192,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 192,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 192,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 191,
                "end": 192,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 202,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 202,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 202,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 202,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 286,
      "end": 292,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 286,
        "end": 291,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 286,
          "end": 287,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 290,
          "end": 291,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 293,
      "end": 299,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 293,
        "end": 298,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 293,
          "end": 294,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 297,
          "end": 298,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 300,
      "end": 312,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 300,
        "end": 311,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 300,
          "end": 301,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 304,
          "end": 311,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 319,
      "end": 325,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 319,
        "end": 324,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 319,
          "end": 320,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 326,
      "end": 332,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 326,
        "end": 331,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 326,
          "end": 327,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 330,
          "end": 331,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 333,
      "end": 345,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 333,
        "end": 344,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 333,
          "end": 334,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 337,
          "end": 344,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 380,
      "end": 386,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 380,
        "end": 385,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 380,
          "end": 381,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 384,
          "end": 385,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 387,
      "end": 393,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 387,
        "end": 392,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 387,
          "end": 388,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 391,
          "end": 392,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 394,
      "end": 406,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 394,
        "end": 405,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 394,
          "end": 395,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 398,
          "end": 405,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 441,
      "end": 451,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 441,
        "end": 450,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 441,
          "end": 444,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 447,
          "end": 450,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 452,
      "end": 462,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 452,
        "end": 461,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 452,
          "end": 455,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 458,
          "end": 461,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 463,
      "end": 487,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 463,
        "end": 486,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 463,
          "end": 466,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 469,
          "end": 486,
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 532,
      "end": 542,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 532,
        "end": 541,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 532,
          "end": 535,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 538,
          "end": 541,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 543,
      "end": 553,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 543,
        "end": 552,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 543,
          "end": 546,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 549,
          "end": 552,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 554,
      "end": 578,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 554,
        "end": 577,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 554,
          "end": 557,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 560,
          "end": 577,
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 710,
      "end": 716,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 710,
        "end": 715,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 710,
          "end": 711,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 714,
          "end": 715,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 717,
      "end": 723,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 717,
        "end": 722,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 717,
          "end": 718,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 721,
          "end": 722,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 724,
      "end": 736,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 724,
        "end": 735,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 724,
          "end": 731,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 734,
          "end": 735,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 788,
      "end": 794,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 788,
        "end": 793,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 788,
          "end": 789,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 792,
          "end": 793,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 795,
      "end": 801,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 795,
        "end": 800,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 795,
          "end": 796,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 799,
          "end": 800,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 802,
      "end": 814,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 802,
        "end": 813,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 802,
          "end": 809,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 812,
          "end": 813,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 821,
      "end": 827,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 821,
        "end": 826,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 821,
          "end": 822,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 825,
          "end": 826,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 828,
      "end": 834,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 828,
        "end": 833,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 828,
          "end": 829,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 832,
          "end": 833,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 835,
      "end": 847,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 835,
        "end": 846,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 835,
          "end": 842,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 845,
          "end": 846,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 854,
      "end": 864,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 854,
        "end": 863,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 854,
          "end": 857,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 860,
          "end": 863,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 865,
      "end": 875,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 865,
        "end": 874,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 865,
          "end": 868,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 871,
          "end": 874,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 876,
      "end": 900,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 876,
        "end": 899,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 876,
          "end": 893,
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 896,
          "end": 899,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 908,
      "end": 918,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 908,
        "end": 917,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 908,
          "end": 911,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 914,
          "end": 917,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 919,
      "end": 929,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 919,
        "end": 928,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 919,
          "end": 922,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 925,
          "end": 928,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 930,
      "end": 954,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 930,
        "end": 953,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 930,
          "end": 947,
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 950,
          "end": 953,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 969,
      "end": 985,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 973,
          "end": 984,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 973,
            "end": 984,
            "decorators": [],
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 979,
              "end": 984,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 981,
                "end": 984
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 986,
      "end": 1003,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 986,
        "end": 1002,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 986,
          "end": 992,
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 995,
          "end": 1002,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1004,
      "end": 1031,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1004,
        "end": 1030,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1004,
          "end": 1010,
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1013,
          "end": 1030,
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1032,
      "end": 1049,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1032,
        "end": 1048,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1032,
          "end": 1039,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1042,
          "end": 1048,
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1050,
      "end": 1077,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1050,
        "end": 1076,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1050,
          "end": 1067,
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1070,
          "end": 1076,
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1087,
      "end": 1102,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1087,
        "end": 1101,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1087,
          "end": 1094,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1097,
          "end": 1101,
          "raw": "null",
          "value": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1103,
      "end": 1128,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1103,
        "end": 1127,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1103,
          "end": 1120,
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1123,
          "end": 1127,
          "raw": "null",
          "value": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1143,
      "end": 1163,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1143,
        "end": 1162,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1143,
          "end": 1150,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1153,
          "end": 1162,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1164,
      "end": 1194,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1164,
        "end": 1193,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1164,
          "end": 1181,
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1184,
          "end": 1193,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1215,
      "end": 1445,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1246,
        "end": 1445,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1252,
            "end": 1258,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1252,
              "end": 1257,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1252,
                "end": 1253,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1256,
                "end": 1257,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1272,
            "end": 1278,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1272,
              "end": 1277,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1272,
                "end": 1273,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1276,
                "end": 1277,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1292,
            "end": 1306,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1296,
                "end": 1305,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1296,
                  "end": 1305,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1298,
                    "end": 1305,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1300,
                      "end": 1305,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1300,
                          "end": 1301,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1300,
                            "end": 1301,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1304,
                          "end": 1305,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1304,
                            "end": 1305,
                            "decorators": [],
                            "name": "U",
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
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 1311,
            "end": 1317,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1311,
              "end": 1316,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1311,
                "end": 1312,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1315,
                "end": 1316,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1328,
            "end": 1334,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1328,
              "end": 1333,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1328,
                "end": 1329,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1332,
                "end": 1333,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1345,
            "end": 1359,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1345,
              "end": 1358,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1345,
                "end": 1346,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1349,
                "end": 1358,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1364,
            "end": 1370,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1364,
              "end": 1369,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1364,
                "end": 1365,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1368,
                "end": 1369,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1406,
            "end": 1412,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1406,
              "end": 1411,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1406,
                "end": 1407,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1410,
                "end": 1411,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1224,
        "end": 1227,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1234,
          "end": 1238,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1235,
            "end": 1238,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1237,
              "end": 1238,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1237,
                "end": 1238,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1240,
          "end": 1244,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1241,
            "end": 1244,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1243,
              "end": 1244,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1243,
                "end": 1244,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1227,
        "end": 1233,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1228,
            "end": 1229,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1228,
              "end": 1229,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1231,
            "end": 1232,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1231,
              "end": 1232,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

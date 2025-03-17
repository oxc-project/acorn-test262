__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 1446,
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
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 39,
            "name": "unionNumberString",
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
      "type": "ClassDeclaration",
      "start": 41,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 52,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 53,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 71,
        "end": 85,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 83,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 77,
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 83,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 80,
                "end": 83,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 86,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 118,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 116,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 110,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 110,
              "end": 116,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 113,
                "end": 116,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 137,
            "name": "unionDE",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 133,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 136,
                    "end": 137,
                    "typeName": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "name": "E",
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
      "type": "VariableDeclaration",
      "start": 140,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 155,
            "name": "num",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 155,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 149,
                "end": 155
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
      "start": 157,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 161,
          "end": 172,
          "id": {
            "type": "Identifier",
            "start": 161,
            "end": 172,
            "name": "str",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 172,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 166,
                "end": 172
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
      "start": 174,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 182,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 182,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 181,
                "end": 182,
                "typeName": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "name": "C",
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
      "start": 184,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 192,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 192,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 191,
                "end": 192,
                "typeName": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
                  "name": "D",
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
      "start": 194,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 202,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 202,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 202,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 202,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "name": "E",
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
      "type": "ExpressionStatement",
      "start": 286,
      "end": 292,
      "expression": {
        "type": "AssignmentExpression",
        "start": 286,
        "end": 291,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 286,
          "end": 287,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 290,
          "end": 291,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 293,
      "end": 299,
      "expression": {
        "type": "AssignmentExpression",
        "start": 293,
        "end": 298,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 293,
          "end": 294,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 297,
          "end": 298,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 300,
      "end": 312,
      "expression": {
        "type": "AssignmentExpression",
        "start": 300,
        "end": 311,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 300,
          "end": 301,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 304,
          "end": 311,
          "name": "unionDE",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 319,
      "end": 325,
      "expression": {
        "type": "AssignmentExpression",
        "start": 319,
        "end": 324,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 319,
          "end": 320,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 326,
      "end": 332,
      "expression": {
        "type": "AssignmentExpression",
        "start": 326,
        "end": 331,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 326,
          "end": 327,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 330,
          "end": 331,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 333,
      "end": 345,
      "expression": {
        "type": "AssignmentExpression",
        "start": 333,
        "end": 344,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 333,
          "end": 334,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 337,
          "end": 344,
          "name": "unionDE",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 380,
      "end": 386,
      "expression": {
        "type": "AssignmentExpression",
        "start": 380,
        "end": 385,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 380,
          "end": 381,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 384,
          "end": 385,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 387,
      "end": 393,
      "expression": {
        "type": "AssignmentExpression",
        "start": 387,
        "end": 392,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 387,
          "end": 388,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 391,
          "end": 392,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 394,
      "end": 406,
      "expression": {
        "type": "AssignmentExpression",
        "start": 394,
        "end": 405,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 394,
          "end": 395,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 398,
          "end": 405,
          "name": "unionDE",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 441,
      "end": 451,
      "expression": {
        "type": "AssignmentExpression",
        "start": 441,
        "end": 450,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 441,
          "end": 444,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 447,
          "end": 450,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 452,
      "end": 462,
      "expression": {
        "type": "AssignmentExpression",
        "start": 452,
        "end": 461,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 452,
          "end": 455,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 458,
          "end": 461,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 463,
      "end": 487,
      "expression": {
        "type": "AssignmentExpression",
        "start": 463,
        "end": 486,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 463,
          "end": 466,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 469,
          "end": 486,
          "name": "unionNumberString",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 532,
      "end": 542,
      "expression": {
        "type": "AssignmentExpression",
        "start": 532,
        "end": 541,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 532,
          "end": 535,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 538,
          "end": 541,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 543,
      "end": 553,
      "expression": {
        "type": "AssignmentExpression",
        "start": 543,
        "end": 552,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 543,
          "end": 546,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 549,
          "end": 552,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 554,
      "end": 578,
      "expression": {
        "type": "AssignmentExpression",
        "start": 554,
        "end": 577,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 554,
          "end": 557,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 560,
          "end": 577,
          "name": "unionNumberString",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 710,
      "end": 716,
      "expression": {
        "type": "AssignmentExpression",
        "start": 710,
        "end": 715,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 710,
          "end": 711,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 714,
          "end": 715,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 717,
      "end": 723,
      "expression": {
        "type": "AssignmentExpression",
        "start": 717,
        "end": 722,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 717,
          "end": 718,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 721,
          "end": 722,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 724,
      "end": 736,
      "expression": {
        "type": "AssignmentExpression",
        "start": 724,
        "end": 735,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 724,
          "end": 731,
          "name": "unionDE",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 734,
          "end": 735,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 788,
      "end": 794,
      "expression": {
        "type": "AssignmentExpression",
        "start": 788,
        "end": 793,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 788,
          "end": 789,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 792,
          "end": 793,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 795,
      "end": 801,
      "expression": {
        "type": "AssignmentExpression",
        "start": 795,
        "end": 800,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 795,
          "end": 796,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 799,
          "end": 800,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 802,
      "end": 814,
      "expression": {
        "type": "AssignmentExpression",
        "start": 802,
        "end": 813,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 802,
          "end": 809,
          "name": "unionDE",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 812,
          "end": 813,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 821,
      "end": 827,
      "expression": {
        "type": "AssignmentExpression",
        "start": 821,
        "end": 826,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 821,
          "end": 822,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 825,
          "end": 826,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 828,
      "end": 834,
      "expression": {
        "type": "AssignmentExpression",
        "start": 828,
        "end": 833,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 828,
          "end": 829,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 832,
          "end": 833,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 835,
      "end": 847,
      "expression": {
        "type": "AssignmentExpression",
        "start": 835,
        "end": 846,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 835,
          "end": 842,
          "name": "unionDE",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 845,
          "end": 846,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 854,
      "end": 864,
      "expression": {
        "type": "AssignmentExpression",
        "start": 854,
        "end": 863,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 854,
          "end": 857,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 860,
          "end": 863,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 865,
      "end": 875,
      "expression": {
        "type": "AssignmentExpression",
        "start": 865,
        "end": 874,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 865,
          "end": 868,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 871,
          "end": 874,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 876,
      "end": 900,
      "expression": {
        "type": "AssignmentExpression",
        "start": 876,
        "end": 899,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 876,
          "end": 893,
          "name": "unionNumberString",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 896,
          "end": 899,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 908,
      "end": 918,
      "expression": {
        "type": "AssignmentExpression",
        "start": 908,
        "end": 917,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 908,
          "end": 911,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 914,
          "end": 917,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 919,
      "end": 929,
      "expression": {
        "type": "AssignmentExpression",
        "start": 919,
        "end": 928,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 919,
          "end": 922,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 925,
          "end": 928,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 930,
      "end": 954,
      "expression": {
        "type": "AssignmentExpression",
        "start": 930,
        "end": 953,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 930,
          "end": 947,
          "name": "unionNumberString",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 950,
          "end": 953,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 973,
            "end": 984,
            "name": "anyVar",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 979,
              "end": 984,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 981,
                "end": 984
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
      "start": 986,
      "end": 1003,
      "expression": {
        "type": "AssignmentExpression",
        "start": 986,
        "end": 1002,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 986,
          "end": 992,
          "name": "anyVar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 995,
          "end": 1002,
          "name": "unionDE",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1004,
      "end": 1031,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1004,
        "end": 1030,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1004,
          "end": 1010,
          "name": "anyVar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1013,
          "end": 1030,
          "name": "unionNumberString",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1032,
      "end": 1049,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1032,
        "end": 1048,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1032,
          "end": 1039,
          "name": "unionDE",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1042,
          "end": 1048,
          "name": "anyVar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1050,
      "end": 1077,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1050,
        "end": 1076,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1050,
          "end": 1067,
          "name": "unionNumberString",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1070,
          "end": 1076,
          "name": "anyVar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1087,
      "end": 1102,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1087,
        "end": 1101,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1087,
          "end": 1094,
          "name": "unionDE",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1097,
          "end": 1101,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1103,
      "end": 1128,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1103,
        "end": 1127,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1103,
          "end": 1120,
          "name": "unionNumberString",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1123,
          "end": 1127,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1143,
      "end": 1163,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1143,
        "end": 1162,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1143,
          "end": 1150,
          "name": "unionDE",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1153,
          "end": 1162,
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
      "start": 1164,
      "end": 1194,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1164,
        "end": 1193,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1164,
          "end": 1181,
          "name": "unionNumberString",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1184,
          "end": 1193,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1215,
      "end": 1445,
      "id": {
        "type": "Identifier",
        "start": 1224,
        "end": 1227,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1234,
          "end": 1238,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1235,
            "end": 1238,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1237,
              "end": 1238,
              "typeName": {
                "type": "Identifier",
                "start": 1237,
                "end": 1238,
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 1240,
          "end": 1244,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1241,
            "end": 1244,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1243,
              "end": 1244,
              "typeName": {
                "type": "Identifier",
                "start": 1243,
                "end": 1244,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1246,
        "end": 1445,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1252,
            "end": 1258,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1252,
              "end": 1257,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1252,
                "end": 1253,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1256,
                "end": 1257,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1272,
            "end": 1278,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1272,
              "end": 1277,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1272,
                "end": 1273,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1276,
                "end": 1277,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "id": {
                  "type": "Identifier",
                  "start": 1296,
                  "end": 1305,
                  "name": "x",
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 1300,
                            "end": 1301,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1304,
                          "end": 1305,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1304,
                            "end": 1305,
                            "name": "U",
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
            "start": 1311,
            "end": 1317,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1311,
              "end": 1316,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1311,
                "end": 1312,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1315,
                "end": 1316,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1328,
            "end": 1334,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1328,
              "end": 1333,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1328,
                "end": 1329,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1332,
                "end": 1333,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1345,
            "end": 1359,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1345,
              "end": 1358,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1345,
                "end": 1346,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1349,
                "end": 1358,
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
            "start": 1364,
            "end": 1370,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1364,
              "end": 1369,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1364,
                "end": 1365,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1368,
                "end": 1369,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1406,
            "end": 1412,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1406,
              "end": 1411,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1406,
                "end": 1407,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1410,
                "end": 1411,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1227,
        "end": 1233,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1228,
            "end": 1229,
            "name": {
              "type": "Identifier",
              "start": 1228,
              "end": 1229,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1231,
            "end": 1232,
            "name": {
              "type": "Identifier",
              "start": 1231,
              "end": 1232,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

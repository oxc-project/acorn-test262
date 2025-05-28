__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1444,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 38,
            "decorators": [],
            "name": "unionNumberString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 38,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 23,
                "end": 38,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 23,
                    "end": 29
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 32,
                    "end": 38
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 51,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 51,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 84,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 70,
        "end": 84,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 72,
            "end": 82,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 76,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 82,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 82,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 85,
      "end": 117,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 101,
        "end": 102,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 117,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 115,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 109,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 109,
              "end": 115,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 115,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 137,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 136,
            "decorators": [],
            "name": "unionDE",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 136,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 131,
                "end": 136,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 131,
                    "end": 132,
                    "typeName": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 132,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 135,
                    "end": 136,
                    "typeName": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 136,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 155,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 154,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 154,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 154,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 148,
                "end": 154
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 172,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 171,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 171,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 171,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 165,
                "end": 171
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 182,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 181,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 181,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 180,
                "end": 181,
                "typeName": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 181,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 183,
      "end": 192,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 187,
          "end": 191,
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 191,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 191,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 190,
                "end": 191,
                "typeName": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 191,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 202,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 201,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 201,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 201,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 200,
                "end": 201,
                "typeName": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 201,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 291,
      "expression": {
        "type": "AssignmentExpression",
        "start": 285,
        "end": 290,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 285,
          "end": 286,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 289,
          "end": 290,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 292,
      "end": 298,
      "expression": {
        "type": "AssignmentExpression",
        "start": 292,
        "end": 297,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 292,
          "end": 293,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 296,
          "end": 297,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 299,
      "end": 311,
      "expression": {
        "type": "AssignmentExpression",
        "start": 299,
        "end": 310,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 299,
          "end": 300,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 303,
          "end": 310,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 318,
      "end": 324,
      "expression": {
        "type": "AssignmentExpression",
        "start": 318,
        "end": 323,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 318,
          "end": 319,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 322,
          "end": 323,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 325,
      "end": 331,
      "expression": {
        "type": "AssignmentExpression",
        "start": 325,
        "end": 330,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 325,
          "end": 326,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 329,
          "end": 330,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 332,
      "end": 344,
      "expression": {
        "type": "AssignmentExpression",
        "start": 332,
        "end": 343,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 332,
          "end": 333,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 336,
          "end": 343,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 379,
      "end": 385,
      "expression": {
        "type": "AssignmentExpression",
        "start": 379,
        "end": 384,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 379,
          "end": 380,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 383,
          "end": 384,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 386,
      "end": 392,
      "expression": {
        "type": "AssignmentExpression",
        "start": 386,
        "end": 391,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 386,
          "end": 387,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 390,
          "end": 391,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 393,
      "end": 405,
      "expression": {
        "type": "AssignmentExpression",
        "start": 393,
        "end": 404,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 393,
          "end": 394,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 397,
          "end": 404,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 440,
      "end": 450,
      "expression": {
        "type": "AssignmentExpression",
        "start": 440,
        "end": 449,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 440,
          "end": 443,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 446,
          "end": 449,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 451,
      "end": 461,
      "expression": {
        "type": "AssignmentExpression",
        "start": 451,
        "end": 460,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 451,
          "end": 454,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 457,
          "end": 460,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 462,
      "end": 486,
      "expression": {
        "type": "AssignmentExpression",
        "start": 462,
        "end": 485,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 462,
          "end": 465,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 468,
          "end": 485,
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 531,
      "end": 541,
      "expression": {
        "type": "AssignmentExpression",
        "start": 531,
        "end": 540,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 531,
          "end": 534,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 537,
          "end": 540,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 542,
      "end": 552,
      "expression": {
        "type": "AssignmentExpression",
        "start": 542,
        "end": 551,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 542,
          "end": 545,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 548,
          "end": 551,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 553,
      "end": 577,
      "expression": {
        "type": "AssignmentExpression",
        "start": 553,
        "end": 576,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 553,
          "end": 556,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 559,
          "end": 576,
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 709,
      "end": 715,
      "expression": {
        "type": "AssignmentExpression",
        "start": 709,
        "end": 714,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 709,
          "end": 710,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 713,
          "end": 714,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 716,
      "end": 722,
      "expression": {
        "type": "AssignmentExpression",
        "start": 716,
        "end": 721,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 716,
          "end": 717,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 720,
          "end": 721,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 723,
      "end": 735,
      "expression": {
        "type": "AssignmentExpression",
        "start": 723,
        "end": 734,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 723,
          "end": 730,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 733,
          "end": 734,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 787,
      "end": 793,
      "expression": {
        "type": "AssignmentExpression",
        "start": 787,
        "end": 792,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 787,
          "end": 788,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 791,
          "end": 792,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 794,
      "end": 800,
      "expression": {
        "type": "AssignmentExpression",
        "start": 794,
        "end": 799,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 794,
          "end": 795,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 798,
          "end": 799,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 801,
      "end": 813,
      "expression": {
        "type": "AssignmentExpression",
        "start": 801,
        "end": 812,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 801,
          "end": 808,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 811,
          "end": 812,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 820,
      "end": 826,
      "expression": {
        "type": "AssignmentExpression",
        "start": 820,
        "end": 825,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 820,
          "end": 821,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 824,
          "end": 825,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 827,
      "end": 833,
      "expression": {
        "type": "AssignmentExpression",
        "start": 827,
        "end": 832,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 827,
          "end": 828,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 831,
          "end": 832,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 834,
      "end": 846,
      "expression": {
        "type": "AssignmentExpression",
        "start": 834,
        "end": 845,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 834,
          "end": 841,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 844,
          "end": 845,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 853,
      "end": 863,
      "expression": {
        "type": "AssignmentExpression",
        "start": 853,
        "end": 862,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 853,
          "end": 856,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 859,
          "end": 862,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 864,
      "end": 874,
      "expression": {
        "type": "AssignmentExpression",
        "start": 864,
        "end": 873,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 864,
          "end": 867,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 870,
          "end": 873,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 875,
      "end": 899,
      "expression": {
        "type": "AssignmentExpression",
        "start": 875,
        "end": 898,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 875,
          "end": 892,
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 895,
          "end": 898,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 907,
      "end": 917,
      "expression": {
        "type": "AssignmentExpression",
        "start": 907,
        "end": 916,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 907,
          "end": 910,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 913,
          "end": 916,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 918,
      "end": 928,
      "expression": {
        "type": "AssignmentExpression",
        "start": 918,
        "end": 927,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 918,
          "end": 921,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 924,
          "end": 927,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 929,
      "end": 953,
      "expression": {
        "type": "AssignmentExpression",
        "start": 929,
        "end": 952,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 929,
          "end": 946,
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 949,
          "end": 952,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 968,
      "end": 984,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 972,
          "end": 983,
          "id": {
            "type": "Identifier",
            "start": 972,
            "end": 983,
            "decorators": [],
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 978,
              "end": 983,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 980,
                "end": 983
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 985,
      "end": 1002,
      "expression": {
        "type": "AssignmentExpression",
        "start": 985,
        "end": 1001,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 985,
          "end": 991,
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 994,
          "end": 1001,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1003,
      "end": 1030,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1003,
        "end": 1029,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1003,
          "end": 1009,
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1012,
          "end": 1029,
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1031,
      "end": 1048,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1031,
        "end": 1047,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1031,
          "end": 1038,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1041,
          "end": 1047,
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1049,
      "end": 1076,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1049,
        "end": 1075,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1049,
          "end": 1066,
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1069,
          "end": 1075,
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1086,
      "end": 1101,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1086,
        "end": 1100,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1086,
          "end": 1093,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1096,
          "end": 1100,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1102,
      "end": 1127,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1102,
        "end": 1126,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1102,
          "end": 1119,
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1122,
          "end": 1126,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1142,
      "end": 1162,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1142,
        "end": 1161,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1142,
          "end": 1149,
          "decorators": [],
          "name": "unionDE",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1152,
          "end": 1161,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1163,
      "end": 1193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1163,
        "end": 1192,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1163,
          "end": 1180,
          "decorators": [],
          "name": "unionNumberString",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1183,
          "end": 1192,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1214,
      "end": 1444,
      "id": {
        "type": "Identifier",
        "start": 1223,
        "end": 1226,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1226,
        "end": 1232,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1227,
            "end": 1228,
            "name": {
              "type": "Identifier",
              "start": 1227,
              "end": 1228,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1230,
            "end": 1231,
            "name": {
              "type": "Identifier",
              "start": 1230,
              "end": 1231,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1233,
          "end": 1237,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1234,
            "end": 1237,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1236,
              "end": 1237,
              "typeName": {
                "type": "Identifier",
                "start": 1236,
                "end": 1237,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1239,
          "end": 1243,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1240,
            "end": 1243,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1242,
              "end": 1243,
              "typeName": {
                "type": "Identifier",
                "start": 1242,
                "end": 1243,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1245,
        "end": 1444,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1251,
            "end": 1257,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1251,
              "end": 1256,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1251,
                "end": 1252,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1255,
                "end": 1256,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1271,
            "end": 1277,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1271,
              "end": 1276,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1271,
                "end": 1272,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1275,
                "end": 1276,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1291,
            "end": 1305,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1295,
                "end": 1304,
                "id": {
                  "type": "Identifier",
                  "start": 1295,
                  "end": 1304,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1297,
                    "end": 1304,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1299,
                      "end": 1304,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1299,
                          "end": 1300,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1299,
                            "end": 1300,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1303,
                          "end": 1304,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1303,
                            "end": 1304,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1310,
            "end": 1316,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1310,
              "end": 1315,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1310,
                "end": 1311,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1314,
                "end": 1315,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1327,
            "end": 1333,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1327,
              "end": 1332,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1327,
                "end": 1328,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1331,
                "end": 1332,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1344,
            "end": 1358,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1344,
              "end": 1357,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1344,
                "end": 1345,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1348,
                "end": 1357,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1363,
            "end": 1369,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1363,
              "end": 1368,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1363,
                "end": 1364,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1367,
                "end": 1368,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1405,
            "end": 1411,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1405,
              "end": 1410,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1405,
                "end": 1406,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1409,
                "end": 1410,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

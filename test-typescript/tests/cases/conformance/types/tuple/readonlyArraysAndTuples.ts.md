__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 918,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 20,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "T10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "start": 11,
        "end": 19,
        "elementType": {
          "type": "TSStringKeyword",
          "start": 11,
          "end": 17
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 21,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 29,
        "name": "T11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 32,
        "end": 45,
        "typeName": {
          "type": "Identifier",
          "start": 32,
          "end": 37,
          "name": "Array",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 37,
          "end": 45,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 38,
              "end": 44
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 47,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 55,
        "name": "T12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 58,
        "end": 75,
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 67,
          "end": 75,
          "elementType": {
            "type": "TSStringKeyword",
            "start": 67,
            "end": 73
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 77,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 85,
        "name": "T13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 88,
        "end": 109,
        "typeName": {
          "type": "Identifier",
          "start": 88,
          "end": 101,
          "name": "ReadonlyArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 101,
          "end": 109,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 102,
              "end": 108
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 112,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 120,
        "name": "T20",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 123,
        "end": 139,
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 124,
            "end": 130
          },
          {
            "type": "TSNumberKeyword",
            "start": 132,
            "end": 138
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 141,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 149,
        "name": "T21",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 152,
        "end": 177,
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 161,
          "end": 177,
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "start": 162,
              "end": 168
            },
            {
              "type": "TSNumberKeyword",
              "start": 170,
              "end": 176
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 180,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 188,
        "name": "T30",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 191,
        "end": 206,
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 200,
          "end": 206
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 218,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 226,
        "name": "T31",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 226,
        "end": 229,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 227,
            "end": 228,
            "name": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 232,
        "end": 242,
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 241,
          "end": 242,
          "typeName": {
            "type": "Identifier",
            "start": 241,
            "end": 242,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 254,
      "end": 292,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 262,
        "name": "T32",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 265,
        "end": 291,
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 274,
          "end": 291,
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "start": 283,
            "end": 291,
            "elementType": {
              "type": "TSStringKeyword",
              "start": 283,
              "end": 289
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 303,
      "end": 337,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 311,
        "name": "T33",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 314,
        "end": 336,
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 323,
          "end": 336,
          "typeName": {
            "type": "Identifier",
            "start": 323,
            "end": 328,
            "name": "Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 328,
            "end": 336,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 329,
                "end": 335
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 349,
      "end": 680,
      "id": {
        "type": "Identifier",
        "start": 358,
        "end": 360,
        "name": "f1",
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
          "start": 361,
          "end": 373,
          "name": "ma",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 363,
            "end": 373,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 365,
              "end": 373,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 365,
                "end": 371
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 375,
          "end": 396,
          "name": "ra",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 377,
            "end": 396,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 379,
              "end": 396,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 388,
                "end": 396,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 388,
                  "end": 394
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 398,
          "end": 418,
          "name": "mt",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 400,
            "end": 418,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 402,
              "end": 418,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 403,
                  "end": 409
                },
                {
                  "type": "TSStringKeyword",
                  "start": 411,
                  "end": 417
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 420,
          "end": 449,
          "name": "rt",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 422,
            "end": 449,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 424,
              "end": 449,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 433,
                "end": 449,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 434,
                    "end": 440
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 442,
                    "end": 448
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 451,
        "end": 680,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 457,
            "end": 465,
            "expression": {
              "type": "AssignmentExpression",
              "start": 457,
              "end": 464,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 457,
                "end": 459,
                "name": "ma",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 462,
                "end": 464,
                "name": "ra",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 480,
            "end": 488,
            "expression": {
              "type": "AssignmentExpression",
              "start": 480,
              "end": 487,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 480,
                "end": 482,
                "name": "ma",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 485,
                "end": 487,
                "name": "mt",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 493,
            "end": 501,
            "expression": {
              "type": "AssignmentExpression",
              "start": 493,
              "end": 500,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 493,
                "end": 495,
                "name": "ma",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 498,
                "end": 500,
                "name": "rt",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 516,
            "end": 524,
            "expression": {
              "type": "AssignmentExpression",
              "start": 516,
              "end": 523,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 516,
                "end": 518,
                "name": "ra",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 521,
                "end": 523,
                "name": "ma",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 529,
            "end": 537,
            "expression": {
              "type": "AssignmentExpression",
              "start": 529,
              "end": 536,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 529,
                "end": 531,
                "name": "ra",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 534,
                "end": 536,
                "name": "mt",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 542,
            "end": 550,
            "expression": {
              "type": "AssignmentExpression",
              "start": 542,
              "end": 549,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 542,
                "end": 544,
                "name": "ra",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 547,
                "end": 549,
                "name": "rt",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 555,
            "end": 563,
            "expression": {
              "type": "AssignmentExpression",
              "start": 555,
              "end": 562,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 555,
                "end": 557,
                "name": "mt",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 560,
                "end": 562,
                "name": "ma",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 578,
            "end": 586,
            "expression": {
              "type": "AssignmentExpression",
              "start": 578,
              "end": 585,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 578,
                "end": 580,
                "name": "mt",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 583,
                "end": 585,
                "name": "ra",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 601,
            "end": 609,
            "expression": {
              "type": "AssignmentExpression",
              "start": 601,
              "end": 608,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 601,
                "end": 603,
                "name": "mt",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 606,
                "end": 608,
                "name": "rt",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 624,
            "end": 632,
            "expression": {
              "type": "AssignmentExpression",
              "start": 624,
              "end": 631,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 624,
                "end": 626,
                "name": "rt",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 629,
                "end": 631,
                "name": "ma",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 647,
            "end": 655,
            "expression": {
              "type": "AssignmentExpression",
              "start": 647,
              "end": 654,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 647,
                "end": 649,
                "name": "rt",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 652,
                "end": 654,
                "name": "ra",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 670,
            "end": 678,
            "expression": {
              "type": "AssignmentExpression",
              "start": 670,
              "end": 677,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 670,
                "end": 672,
                "name": "rt",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 675,
                "end": 677,
                "name": "mt",
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
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 682,
      "end": 735,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 694,
          "end": 734,
          "id": {
            "type": "Identifier",
            "start": 694,
            "end": 734,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 695,
              "end": 734,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 697,
                "end": 734,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 705,
                  "end": 734,
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 706,
                      "end": 712
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 714,
                      "end": 720
                    },
                    {
                      "type": "TSRestType",
                      "start": 722,
                      "end": 733,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 725,
                        "end": 733,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 725,
                          "end": 731
                        }
                      }
                    }
                  ]
                }
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 736,
      "end": 745,
      "expression": {
        "type": "AssignmentExpression",
        "start": 736,
        "end": 744,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 736,
          "end": 740,
          "object": {
            "type": "Identifier",
            "start": 736,
            "end": 737,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 738,
            "end": 739,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 743,
          "end": 744,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 762,
      "end": 771,
      "expression": {
        "type": "AssignmentExpression",
        "start": 762,
        "end": 770,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 762,
          "end": 766,
          "object": {
            "type": "Identifier",
            "start": 762,
            "end": 763,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 764,
            "end": 765,
            "value": 1,
            "raw": "1"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 769,
          "end": 770,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 788,
      "end": 797,
      "expression": {
        "type": "AssignmentExpression",
        "start": 788,
        "end": 796,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 788,
          "end": 792,
          "object": {
            "type": "Identifier",
            "start": 788,
            "end": 789,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 790,
            "end": 791,
            "value": 2,
            "raw": "2"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 795,
          "end": 796,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 814,
      "end": 826,
      "expression": {
        "type": "UnaryExpression",
        "start": 814,
        "end": 825,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 821,
          "end": 825,
          "object": {
            "type": "Identifier",
            "start": 821,
            "end": 822,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 823,
            "end": 824,
            "value": 2,
            "raw": "2"
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 840,
      "end": 853,
      "expression": {
        "type": "AssignmentExpression",
        "start": 840,
        "end": 852,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 840,
          "end": 848,
          "object": {
            "type": "Identifier",
            "start": 840,
            "end": 841,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "BinaryExpression",
            "start": 842,
            "end": 847,
            "left": {
              "type": "Literal",
              "start": 842,
              "end": 843,
              "value": 0,
              "raw": "0"
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 846,
              "end": 847,
              "value": 1,
              "raw": "1"
            }
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 851,
          "end": 852,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 866,
      "end": 879,
      "expression": {
        "type": "AssignmentExpression",
        "start": 866,
        "end": 878,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 866,
          "end": 874,
          "object": {
            "type": "Identifier",
            "start": 866,
            "end": 867,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "BinaryExpression",
            "start": 868,
            "end": 873,
            "left": {
              "type": "Literal",
              "start": 868,
              "end": 869,
              "value": 0,
              "raw": "0"
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 872,
              "end": 873,
              "value": 2,
              "raw": "2"
            }
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 877,
          "end": 878,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 892,
      "end": 908,
      "expression": {
        "type": "UnaryExpression",
        "start": 892,
        "end": 907,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 899,
          "end": 907,
          "object": {
            "type": "Identifier",
            "start": 899,
            "end": 900,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "BinaryExpression",
            "start": 901,
            "end": 906,
            "left": {
              "type": "Literal",
              "start": 901,
              "end": 902,
              "value": 0,
              "raw": "0"
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 905,
              "end": 906,
              "value": 1,
              "raw": "1"
            }
          },
          "computed": true,
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

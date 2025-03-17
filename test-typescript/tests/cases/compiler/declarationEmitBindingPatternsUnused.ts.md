__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3513,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "name": "Named",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 13,
        "end": 29,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 27,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 19,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
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
      "type": "FunctionDeclaration",
      "start": 164,
      "end": 235,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 193,
        "name": "duplicateIndetifiers",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 194,
          "end": 230,
          "properties": [
            {
              "type": "Property",
              "start": 196,
              "end": 207,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 196,
                "end": 200,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 202,
                "end": 207,
                "name": "alias",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 209,
              "end": 221,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 209,
                "end": 213,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 215,
                "end": 221,
                "name": "alias2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 223,
            "end": 230,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 225,
              "end": 230,
              "typeName": {
                "type": "Identifier",
                "start": 225,
                "end": 230,
                "name": "Named",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 232,
        "end": 235,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 236,
      "end": 308,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 266,
        "name": "duplicateIndetifiers2",
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
          "start": 267,
          "end": 279,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 271,
            "end": 279,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 273,
              "end": 279
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "ObjectPattern",
          "start": 281,
          "end": 303,
          "properties": [
            {
              "type": "Property",
              "start": 283,
              "end": 294,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 283,
                "end": 287,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 289,
                "end": 294,
                "name": "alias",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 296,
            "end": 303,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 298,
              "end": 303,
              "typeName": {
                "type": "Identifier",
                "start": 298,
                "end": 303,
                "name": "Named",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 305,
        "end": 308,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 309,
      "end": 392,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 339,
        "name": "duplicateIndetifiers3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 340,
          "end": 362,
          "properties": [
            {
              "type": "Property",
              "start": 342,
              "end": 353,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 342,
                "end": 346,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 348,
                "end": 353,
                "name": "alias",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 355,
            "end": 362,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 357,
              "end": 362,
              "typeName": {
                "type": "Identifier",
                "start": 357,
                "end": 362,
                "name": "Named",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "ObjectPattern",
          "start": 364,
          "end": 387,
          "properties": [
            {
              "type": "Property",
              "start": 366,
              "end": 378,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 366,
                "end": 370,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 372,
                "end": 378,
                "name": "alias2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 380,
            "end": 387,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 382,
              "end": 387,
              "typeName": {
                "type": "Identifier",
                "start": 382,
                "end": 387,
                "name": "Named",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 389,
        "end": 392,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 394,
      "end": 409,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 408,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 403,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 406,
            "end": 408,
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 473,
      "end": 566,
      "id": {
        "type": "Identifier",
        "start": 482,
        "end": 498,
        "name": "shadowedVariable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 499,
          "end": 534,
          "properties": [
            {
              "type": "Property",
              "start": 501,
              "end": 513,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 501,
                "end": 506,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 508,
                "end": 513,
                "name": "alias",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 515,
            "end": 534,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 517,
              "end": 534,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 519,
                  "end": 532,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 519,
                    "end": 524,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 524,
                    "end": 532,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 526,
                      "end": 532
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 550,
        "end": 566,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 552,
            "end": 564,
            "argument": {
              "type": "Identifier",
              "start": 559,
              "end": 564,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 535,
        "end": 549,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 537,
          "end": 549,
          "exprName": {
            "type": "Identifier",
            "start": 544,
            "end": 549,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 568,
      "end": 619,
      "id": {
        "type": "Identifier",
        "start": 577,
        "end": 590,
        "name": "notReferenced",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 591,
          "end": 613,
          "properties": [
            {
              "type": "Property",
              "start": 593,
              "end": 604,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 593,
                "end": 597,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 599,
                "end": 604,
                "name": "alias",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 606,
            "end": 613,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 608,
              "end": 613,
              "typeName": {
                "type": "Identifier",
                "start": 608,
                "end": 613,
                "name": "Named",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 615,
        "end": 619,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 620,
      "end": 695,
      "id": {
        "type": "Identifier",
        "start": 629,
        "end": 653,
        "name": "notReferencedNestedAlias",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 654,
          "end": 690,
          "properties": [
            {
              "type": "Property",
              "start": 656,
              "end": 674,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 656,
                "end": 657,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectPattern",
                "start": 659,
                "end": 674,
                "properties": [
                  {
                    "type": "Property",
                    "start": 661,
                    "end": 672,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 661,
                      "end": 665,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 667,
                      "end": 672,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 676,
            "end": 690,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 678,
              "end": 690,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 680,
                  "end": 688,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 680,
                    "end": 681,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 681,
                    "end": 688,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 683,
                      "end": 688,
                      "typeName": {
                        "type": "Identifier",
                        "start": 683,
                        "end": 688,
                        "name": "Named",
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
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 692,
        "end": 695,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 696,
      "end": 766,
      "id": {
        "type": "Identifier",
        "start": 705,
        "end": 728,
        "name": "notReferencedArrayAlias",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 729,
          "end": 761,
          "elements": [
            {
              "type": "Identifier",
              "start": 730,
              "end": 731,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 733,
              "end": 734,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ObjectPattern",
              "start": 736,
              "end": 751,
              "properties": [
                {
                  "type": "Property",
                  "start": 738,
                  "end": 749,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 738,
                    "end": 742,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 744,
                    "end": 749,
                    "name": "alias",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 752,
            "end": 761,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 754,
              "end": 761,
              "elementType": {
                "type": "TSTypeReference",
                "start": 754,
                "end": 759,
                "typeName": {
                  "type": "Identifier",
                  "start": 754,
                  "end": 759,
                  "name": "Named",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 763,
        "end": 766,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 768,
      "end": 839,
      "id": {
        "type": "Identifier",
        "start": 777,
        "end": 793,
        "name": "referencedInCode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 794,
          "end": 816,
          "properties": [
            {
              "type": "Property",
              "start": 796,
              "end": 807,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 796,
                "end": 800,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 802,
                "end": 807,
                "name": "alias",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 809,
            "end": 816,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 811,
              "end": 816,
              "typeName": {
                "type": "Identifier",
                "start": 811,
                "end": 816,
                "name": "Named",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 818,
        "end": 839,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 824,
            "end": 837,
            "argument": {
              "type": "Identifier",
              "start": 831,
              "end": 836,
              "name": "alias",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 841,
      "end": 932,
      "id": {
        "type": "Identifier",
        "start": 850,
        "end": 872,
        "name": "referencedInSignarture",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 873,
          "end": 895,
          "properties": [
            {
              "type": "Property",
              "start": 875,
              "end": 886,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 875,
                "end": 879,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 881,
                "end": 886,
                "name": "alias",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 888,
            "end": 895,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 890,
              "end": 895,
              "typeName": {
                "type": "Identifier",
                "start": 890,
                "end": 895,
                "name": "Named",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 911,
        "end": 932,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 917,
            "end": 930,
            "argument": {
              "type": "Identifier",
              "start": 924,
              "end": 929,
              "name": "alias",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 896,
        "end": 910,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 898,
          "end": 910,
          "exprName": {
            "type": "Identifier",
            "start": 905,
            "end": 910,
            "name": "alias",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 934,
      "end": 1051,
      "id": {
        "type": "Identifier",
        "start": 943,
        "end": 972,
        "name": "referencedInSignartureKeyword",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 973,
          "end": 1014,
          "properties": [
            {
              "type": "Property",
              "start": 975,
              "end": 990,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 975,
                "end": 983,
                "name": "function",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 985,
                "end": 990,
                "name": "alias",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 992,
            "end": 1014,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 994,
              "end": 1014,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 996,
                  "end": 1012,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 996,
                    "end": 1004,
                    "name": "function",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1004,
                    "end": 1012,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1006,
                      "end": 1012
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1030,
        "end": 1051,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1036,
            "end": 1049,
            "argument": {
              "type": "TSNonNullExpression",
              "start": 1043,
              "end": 1048,
              "expression": {
                "type": "Literal",
                "start": 1043,
                "end": 1047,
                "value": null,
                "raw": "null"
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1015,
        "end": 1029,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1017,
          "end": 1029,
          "exprName": {
            "type": "Identifier",
            "start": 1024,
            "end": 1029,
            "name": "alias",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1053,
      "end": 1182,
      "id": {
        "type": "Identifier",
        "start": 1062,
        "end": 1086,
        "name": "referencedInInferredType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 1087,
          "end": 1109,
          "properties": [
            {
              "type": "Property",
              "start": 1089,
              "end": 1100,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1089,
                "end": 1093,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 1095,
                "end": 1100,
                "name": "alias",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1102,
            "end": 1109,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1104,
              "end": 1109,
              "typeName": {
                "type": "Identifier",
                "start": 1104,
                "end": 1109,
                "name": "Named",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1111,
        "end": 1182,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1117,
            "end": 1153,
            "id": {
              "type": "Identifier",
              "start": 1122,
              "end": 1128,
              "name": "Named2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1131,
              "end": 1153,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1133,
                  "end": 1151,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1133,
                    "end": 1137,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1137,
                    "end": 1151,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1139,
                      "end": 1151,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1146,
                        "end": 1151,
                        "name": "alias",
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
            "type": "ReturnStatement",
            "start": 1158,
            "end": 1180,
            "argument": {
              "type": "TSAsExpression",
              "start": 1165,
              "end": 1180,
              "expression": {
                "type": "TSNonNullExpression",
                "start": 1165,
                "end": 1170,
                "expression": {
                  "type": "Literal",
                  "start": 1165,
                  "end": 1169,
                  "value": null,
                  "raw": "null"
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1174,
                "end": 1180,
                "typeName": {
                  "type": "Identifier",
                  "start": 1174,
                  "end": 1180,
                  "name": "Named2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1184,
      "end": 1293,
      "id": {
        "type": "Identifier",
        "start": 1193,
        "end": 1219,
        "name": "referencedInNestedFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 1220,
          "end": 1242,
          "properties": [
            {
              "type": "Property",
              "start": 1222,
              "end": 1233,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1222,
                "end": 1226,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 1228,
                "end": 1233,
                "name": "alias",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1235,
            "end": 1242,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1237,
              "end": 1242,
              "typeName": {
                "type": "Identifier",
                "start": 1237,
                "end": 1242,
                "name": "Named",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1244,
        "end": 1293,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1250,
            "end": 1291,
            "argument": {
              "type": "FunctionExpression",
              "start": 1257,
              "end": 1291,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1266,
                  "end": 1281,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1267,
                    "end": 1281,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1269,
                      "end": 1281,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1276,
                        "end": 1281,
                        "name": "alias",
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
                "start": 1283,
                "end": 1291,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1295,
      "end": 1396,
      "id": {
        "type": "Identifier",
        "start": 1304,
        "end": 1325,
        "name": "referencedNestedAlias",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 1326,
          "end": 1362,
          "properties": [
            {
              "type": "Property",
              "start": 1328,
              "end": 1346,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1328,
                "end": 1329,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "ObjectPattern",
                "start": 1331,
                "end": 1346,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1333,
                    "end": 1344,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1333,
                      "end": 1337,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1339,
                      "end": 1344,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1348,
            "end": 1362,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1350,
              "end": 1362,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1352,
                  "end": 1360,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1352,
                    "end": 1353,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1353,
                    "end": 1360,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1355,
                      "end": 1360,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1355,
                        "end": 1360,
                        "name": "Named",
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
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1378,
        "end": 1396,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1381,
            "end": 1394,
            "argument": {
              "type": "Identifier",
              "start": 1388,
              "end": 1393,
              "name": "alias",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1363,
        "end": 1377,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1365,
          "end": 1377,
          "exprName": {
            "type": "Identifier",
            "start": 1372,
            "end": 1377,
            "name": "alias",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1398,
      "end": 1494,
      "id": {
        "type": "Identifier",
        "start": 1407,
        "end": 1427,
        "name": "referencedArrayAlias",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 1428,
          "end": 1460,
          "elements": [
            {
              "type": "Identifier",
              "start": 1429,
              "end": 1430,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 1432,
              "end": 1433,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "ObjectPattern",
              "start": 1435,
              "end": 1450,
              "properties": [
                {
                  "type": "Property",
                  "start": 1437,
                  "end": 1448,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1437,
                    "end": 1441,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1443,
                    "end": 1448,
                    "name": "alias",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1451,
            "end": 1460,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1453,
              "end": 1460,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1453,
                "end": 1458,
                "typeName": {
                  "type": "Identifier",
                  "start": 1453,
                  "end": 1458,
                  "name": "Named",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1476,
        "end": 1494,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1479,
            "end": 1492,
            "argument": {
              "type": "Identifier",
              "start": 1486,
              "end": 1491,
              "name": "alias",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1461,
        "end": 1475,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 1463,
          "end": 1475,
          "exprName": {
            "type": "Identifier",
            "start": 1470,
            "end": 1475,
            "name": "alias",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1497,
      "end": 1697,
      "id": {
        "type": "Identifier",
        "start": 1503,
        "end": 1521,
        "name": "NotReferencedClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1522,
        "end": 1697,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1525,
            "end": 1565,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1525,
              "end": 1536,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1536,
              "end": 1565,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 1537,
                  "end": 1559,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1539,
                      "end": 1550,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1539,
                        "end": 1543,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1545,
                        "end": 1550,
                        "name": "alias",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1552,
                    "end": 1559,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1554,
                      "end": 1559,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1554,
                        "end": 1559,
                        "name": "Named",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1561,
                "end": 1565,
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
          },
          {
            "type": "MethodDefinition",
            "start": 1567,
            "end": 1632,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1571,
              "end": 1572,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1572,
              "end": 1632,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 1573,
                  "end": 1595,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1575,
                      "end": 1586,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1575,
                        "end": 1579,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1581,
                        "end": 1586,
                        "name": "alias",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1588,
                    "end": 1595,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1590,
                      "end": 1595,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1590,
                        "end": 1595,
                        "name": "Named",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1597,
                "end": 1632,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1607,
                    "end": 1626,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1607,
                      "end": 1625,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1607,
                        "end": 1618,
                        "object": {
                          "type": "Identifier",
                          "start": 1607,
                          "end": 1614,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1615,
                          "end": 1618,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1619,
                          "end": 1624,
                          "name": "alias",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1634,
            "end": 1695,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1634,
              "end": 1635,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1635,
              "end": 1695,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 1636,
                  "end": 1658,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1638,
                      "end": 1649,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1638,
                        "end": 1642,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1644,
                        "end": 1649,
                        "name": "alias",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1651,
                    "end": 1658,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1653,
                      "end": 1658,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1653,
                        "end": 1658,
                        "name": "Named",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1660,
                "end": 1695,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1670,
                    "end": 1689,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1670,
                      "end": 1688,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1670,
                        "end": 1681,
                        "object": {
                          "type": "Identifier",
                          "start": 1670,
                          "end": 1677,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1678,
                          "end": 1681,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1682,
                          "end": 1687,
                          "name": "alias",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
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
      "start": 1699,
      "end": 1923,
      "id": {
        "type": "Identifier",
        "start": 1705,
        "end": 1725,
        "name": "ReferencedInCodeClas",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1726,
        "end": 1923,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1729,
            "end": 1791,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1729,
              "end": 1740,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1740,
              "end": 1791,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 1741,
                  "end": 1763,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1743,
                      "end": 1754,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1743,
                        "end": 1747,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1749,
                        "end": 1754,
                        "name": "alias",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1756,
                    "end": 1763,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1758,
                      "end": 1763,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1758,
                        "end": 1763,
                        "name": "Named",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1765,
                "end": 1791,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1769,
                    "end": 1788,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1769,
                      "end": 1787,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1769,
                        "end": 1780,
                        "object": {
                          "type": "Identifier",
                          "start": 1769,
                          "end": 1776,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1777,
                          "end": 1780,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1781,
                          "end": 1786,
                          "name": "alias",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1793,
            "end": 1858,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1797,
              "end": 1798,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1798,
              "end": 1858,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 1799,
                  "end": 1821,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1801,
                      "end": 1812,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1801,
                        "end": 1805,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1807,
                        "end": 1812,
                        "name": "alias",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1814,
                    "end": 1821,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1816,
                      "end": 1821,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1816,
                        "end": 1821,
                        "name": "Named",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1823,
                "end": 1858,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1833,
                    "end": 1852,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1833,
                      "end": 1851,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1833,
                        "end": 1844,
                        "object": {
                          "type": "Identifier",
                          "start": 1833,
                          "end": 1840,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1841,
                          "end": 1844,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1845,
                          "end": 1850,
                          "name": "alias",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1860,
            "end": 1921,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1860,
              "end": 1861,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1861,
              "end": 1921,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 1862,
                  "end": 1884,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1864,
                      "end": 1875,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1864,
                        "end": 1868,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1870,
                        "end": 1875,
                        "name": "alias",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1877,
                    "end": 1884,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1879,
                      "end": 1884,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1879,
                        "end": 1884,
                        "name": "Named",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1886,
                "end": 1921,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1896,
                    "end": 1915,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1896,
                      "end": 1914,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1896,
                        "end": 1907,
                        "object": {
                          "type": "Identifier",
                          "start": 1896,
                          "end": 1903,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1904,
                          "end": 1907,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1908,
                          "end": 1913,
                          "name": "alias",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
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
      "start": 1925,
      "end": 2378,
      "id": {
        "type": "Identifier",
        "start": 1931,
        "end": 1958,
        "name": "ReferencedInSignartureClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1959,
        "end": 2378,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1962,
            "end": 2041,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1962,
              "end": 1973,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1973,
              "end": 2041,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 1974,
                  "end": 1996,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1976,
                      "end": 1987,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1976,
                        "end": 1980,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 1982,
                        "end": 1987,
                        "name": "alias",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1989,
                    "end": 1996,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1991,
                      "end": 1996,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1991,
                        "end": 1996,
                        "name": "Named",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1998,
                  "end": 2013,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1999,
                    "end": 2013,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 2001,
                      "end": 2013,
                      "exprName": {
                        "type": "Identifier",
                        "start": 2008,
                        "end": 2013,
                        "name": "alias",
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
                "start": 2015,
                "end": 2041,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2019,
                    "end": 2038,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2019,
                      "end": 2037,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2019,
                        "end": 2030,
                        "object": {
                          "type": "Identifier",
                          "start": 2019,
                          "end": 2026,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2027,
                          "end": 2030,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2031,
                          "end": 2036,
                          "name": "alias",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2043,
            "end": 2111,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2047,
              "end": 2048,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 2048,
              "end": 2111,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 2049,
                  "end": 2093,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2051,
                      "end": 2062,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2051,
                        "end": 2055,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2057,
                        "end": 2062,
                        "name": "alias",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2064,
                    "end": 2093,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 2066,
                      "end": 2093,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 2066,
                          "end": 2071,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2066,
                            "end": 2071,
                            "name": "Named",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 2074,
                          "end": 2093,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 2076,
                              "end": 2091,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 2076,
                                "end": 2077,
                                "name": "o",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 2077,
                                "end": 2091,
                                "typeAnnotation": {
                                  "type": "TSTypeQuery",
                                  "start": 2079,
                                  "end": 2091,
                                  "exprName": {
                                    "type": "Identifier",
                                    "start": 2086,
                                    "end": 2091,
                                    "name": "alias",
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
                        }
                      ]
                    }
                  }
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2095,
                "end": 2111,
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
          },
          {
            "type": "MethodDefinition",
            "start": 2113,
            "end": 2191,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2113,
              "end": 2124,
              "name": "mReturnType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2124,
              "end": 2191,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 2125,
                  "end": 2147,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2127,
                      "end": 2138,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2127,
                        "end": 2131,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2133,
                        "end": 2138,
                        "name": "alias",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2140,
                    "end": 2147,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2142,
                      "end": 2147,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2142,
                        "end": 2147,
                        "name": "Named",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2163,
                "end": 2191,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2173,
                    "end": 2185,
                    "argument": {
                      "type": "TSNonNullExpression",
                      "start": 2180,
                      "end": 2185,
                      "expression": {
                        "type": "Literal",
                        "start": 2180,
                        "end": 2184,
                        "value": null,
                        "raw": "null"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2148,
                "end": 2162,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 2150,
                  "end": 2162,
                  "exprName": {
                    "type": "Identifier",
                    "start": 2157,
                    "end": 2162,
                    "name": "alias",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2193,
            "end": 2291,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2193,
              "end": 2211,
              "name": "mRerturnTypeNested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2211,
              "end": 2291,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 2212,
                  "end": 2234,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2214,
                      "end": 2225,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2214,
                        "end": 2218,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2220,
                        "end": 2225,
                        "name": "alias",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2227,
                    "end": 2234,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2229,
                      "end": 2234,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2229,
                        "end": 2234,
                        "name": "Named",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2263,
                "end": 2291,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2273,
                    "end": 2285,
                    "argument": {
                      "type": "TSNonNullExpression",
                      "start": 2280,
                      "end": 2285,
                      "expression": {
                        "type": "Literal",
                        "start": 2280,
                        "end": 2284,
                        "value": null,
                        "raw": "null"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2235,
                "end": 2262,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2237,
                  "end": 2262,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2237,
                    "end": 2248,
                    "name": "NonNullable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2248,
                    "end": 2262,
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "start": 2249,
                        "end": 2261,
                        "exprName": {
                          "type": "Identifier",
                          "start": 2256,
                          "end": 2261,
                          "name": "alias",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2296,
            "end": 2376,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2296,
              "end": 2306,
              "name": "mParameter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2306,
              "end": 2376,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "ObjectPattern",
                  "start": 2307,
                  "end": 2329,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2309,
                      "end": 2320,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2309,
                        "end": 2313,
                        "name": "name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2315,
                        "end": 2320,
                        "name": "alias",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2322,
                    "end": 2329,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2324,
                      "end": 2329,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2324,
                        "end": 2329,
                        "name": "Named",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2331,
                  "end": 2346,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2332,
                    "end": 2346,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 2334,
                      "end": 2346,
                      "exprName": {
                        "type": "Identifier",
                        "start": 2341,
                        "end": 2346,
                        "name": "alias",
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
                "start": 2348,
                "end": 2376,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2358,
                    "end": 2370,
                    "argument": {
                      "type": "TSNonNullExpression",
                      "start": 2365,
                      "end": 2370,
                      "expression": {
                        "type": "Literal",
                        "start": 2365,
                        "end": 2369,
                        "value": null,
                        "raw": "null"
                      }
                    }
                  }
                ]
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
      "start": 2380,
      "end": 2438,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2384,
          "end": 2437,
          "id": {
            "type": "Identifier",
            "start": 2384,
            "end": 2437,
            "name": "notReferencedFnType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2403,
              "end": 2437,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2405,
                "end": 2437,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 2406,
                    "end": 2428,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2408,
                        "end": 2419,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2408,
                          "end": 2412,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 2414,
                          "end": 2419,
                          "name": "alias",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2421,
                      "end": 2428,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2423,
                        "end": 2428,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2423,
                          "end": 2428,
                          "name": "Named",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2430,
                  "end": 2437,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2433,
                    "end": 2437
                  }
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2439,
      "end": 2524,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2443,
          "end": 2523,
          "id": {
            "type": "Identifier",
            "start": 2443,
            "end": 2523,
            "name": "referencedInSignartureReturnTypeFnType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2481,
              "end": 2523,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2483,
                "end": 2523,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 2484,
                    "end": 2506,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2486,
                        "end": 2497,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2486,
                          "end": 2490,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 2492,
                          "end": 2497,
                          "name": "alias",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2499,
                      "end": 2506,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2501,
                        "end": 2506,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2501,
                          "end": 2506,
                          "name": "Named",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2508,
                  "end": 2523,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 2511,
                    "end": 2523,
                    "exprName": {
                      "type": "Identifier",
                      "start": 2518,
                      "end": 2523,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2525,
      "end": 2618,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2529,
          "end": 2617,
          "id": {
            "type": "Identifier",
            "start": 2529,
            "end": 2617,
            "name": "referencedInSignartureParamTypeFnType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2566,
              "end": 2617,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 2568,
                "end": 2617,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 2569,
                    "end": 2591,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2571,
                        "end": 2582,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2571,
                          "end": 2575,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 2577,
                          "end": 2582,
                          "name": "alias",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2584,
                      "end": 2591,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2586,
                        "end": 2591,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2586,
                          "end": 2591,
                          "name": "Named",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2593,
                    "end": 2608,
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2594,
                      "end": 2608,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 2596,
                        "end": 2608,
                        "exprName": {
                          "type": "Identifier",
                          "start": 2603,
                          "end": 2608,
                          "name": "alias",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2610,
                  "end": 2617,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2613,
                    "end": 2617
                  }
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2620,
      "end": 2684,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2624,
          "end": 2683,
          "id": {
            "type": "Identifier",
            "start": 2624,
            "end": 2683,
            "name": "notReferencedCtorType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2645,
              "end": 2683,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2647,
                "end": 2683,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 2652,
                    "end": 2674,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2654,
                        "end": 2665,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2654,
                          "end": 2658,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 2660,
                          "end": 2665,
                          "name": "alias",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2667,
                      "end": 2674,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2669,
                        "end": 2674,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2669,
                          "end": 2674,
                          "name": "Named",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2676,
                  "end": 2683,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2679,
                    "end": 2683
                  }
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2685,
      "end": 2776,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2689,
          "end": 2775,
          "id": {
            "type": "Identifier",
            "start": 2689,
            "end": 2775,
            "name": "referencedInSignartureReturnTypeCtorType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2729,
              "end": 2775,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2731,
                "end": 2775,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 2736,
                    "end": 2758,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2738,
                        "end": 2749,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2738,
                          "end": 2742,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 2744,
                          "end": 2749,
                          "name": "alias",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2751,
                      "end": 2758,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2753,
                        "end": 2758,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2753,
                          "end": 2758,
                          "name": "Named",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2760,
                  "end": 2775,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 2763,
                    "end": 2775,
                    "exprName": {
                      "type": "Identifier",
                      "start": 2770,
                      "end": 2775,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2777,
      "end": 2877,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2781,
          "end": 2876,
          "id": {
            "type": "Identifier",
            "start": 2781,
            "end": 2876,
            "name": "referencedInSignartureParamTypeCtorType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2820,
              "end": 2876,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2822,
                "end": 2876,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 2828,
                    "end": 2850,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2830,
                        "end": 2841,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2830,
                          "end": 2834,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 2836,
                          "end": 2841,
                          "name": "alias",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2843,
                      "end": 2850,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2845,
                        "end": 2850,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2845,
                          "end": 2850,
                          "name": "Named",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2852,
                    "end": 2867,
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2853,
                      "end": 2867,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 2855,
                        "end": 2867,
                        "exprName": {
                          "type": "Identifier",
                          "start": 2862,
                          "end": 2867,
                          "name": "alias",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2869,
                  "end": 2876,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2872,
                    "end": 2876
                  }
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2880,
      "end": 3044,
      "id": {
        "type": "Identifier",
        "start": 2890,
        "end": 2912,
        "name": "NotReferencedInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2913,
        "end": 3044,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 2916,
            "end": 2946,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 2917,
                "end": 2939,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2919,
                    "end": 2930,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2919,
                      "end": 2923,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2925,
                      "end": 2930,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2932,
                  "end": 2939,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2934,
                    "end": 2939,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2934,
                      "end": 2939,
                      "name": "Named",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2940,
              "end": 2946,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2942,
                "end": 2946
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 2948,
            "end": 2982,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 2953,
                "end": 2975,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2955,
                    "end": 2966,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2955,
                      "end": 2959,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2961,
                      "end": 2966,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2968,
                  "end": 2975,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2970,
                    "end": 2975,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2970,
                      "end": 2975,
                      "name": "Named",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2976,
              "end": 2982,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2978,
                "end": 2982
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 2984,
            "end": 3014,
            "key": {
              "type": "Identifier",
              "start": 2988,
              "end": 2989,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 2990,
                "end": 3012,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2992,
                    "end": 3003,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2992,
                      "end": 2996,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2998,
                      "end": 3003,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3005,
                  "end": 3012,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3007,
                    "end": 3012,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3007,
                      "end": 3012,
                      "name": "Named",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 3016,
            "end": 3042,
            "key": {
              "type": "Identifier",
              "start": 3016,
              "end": 3017,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 3018,
                "end": 3040,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3020,
                    "end": 3031,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3020,
                      "end": 3024,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 3026,
                      "end": 3031,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3033,
                  "end": 3040,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3035,
                    "end": 3040,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3035,
                      "end": 3040,
                      "name": "Named",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3046,
      "end": 3513,
      "id": {
        "type": "Identifier",
        "start": 3056,
        "end": 3087,
        "name": "ReferencedInSignartureInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 3088,
        "end": 3513,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 3091,
            "end": 3138,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 3092,
                "end": 3114,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3094,
                    "end": 3105,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3094,
                      "end": 3098,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 3100,
                      "end": 3105,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3107,
                  "end": 3114,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3109,
                    "end": 3114,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3109,
                      "end": 3114,
                      "name": "Named",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 3116,
                "end": 3131,
                "name": "p",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3117,
                  "end": 3131,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 3119,
                    "end": 3131,
                    "exprName": {
                      "type": "Identifier",
                      "start": 3126,
                      "end": 3131,
                      "name": "alias",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3132,
              "end": 3138,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3134,
                "end": 3138
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 3140,
            "end": 3178,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 3141,
                "end": 3163,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3143,
                    "end": 3154,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3143,
                      "end": 3147,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 3149,
                      "end": 3154,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3156,
                  "end": 3163,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3158,
                    "end": 3163,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3158,
                      "end": 3163,
                      "name": "Named",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3164,
              "end": 3178,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 3166,
                "end": 3178,
                "exprName": {
                  "type": "Identifier",
                  "start": 3173,
                  "end": 3178,
                  "name": "alias",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 3182,
            "end": 3233,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 3187,
                "end": 3209,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3189,
                    "end": 3200,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3189,
                      "end": 3193,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 3195,
                      "end": 3200,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3202,
                  "end": 3209,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3204,
                    "end": 3209,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3204,
                      "end": 3209,
                      "name": "Named",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 3211,
                "end": 3226,
                "name": "p",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3212,
                  "end": 3226,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 3214,
                    "end": 3226,
                    "exprName": {
                      "type": "Identifier",
                      "start": 3221,
                      "end": 3226,
                      "name": "alias",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3227,
              "end": 3233,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3229,
                "end": 3233
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 3235,
            "end": 3277,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 3240,
                "end": 3262,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3242,
                    "end": 3253,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3242,
                      "end": 3246,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 3248,
                      "end": 3253,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3255,
                  "end": 3262,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3257,
                    "end": 3262,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3257,
                      "end": 3262,
                      "name": "Named",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3263,
              "end": 3277,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 3265,
                "end": 3277,
                "exprName": {
                  "type": "Identifier",
                  "start": 3272,
                  "end": 3277,
                  "name": "alias",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 3279,
            "end": 3330,
            "key": {
              "type": "Identifier",
              "start": 3283,
              "end": 3284,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 3285,
                "end": 3329,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3287,
                    "end": 3298,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3287,
                      "end": 3291,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 3293,
                      "end": 3298,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3300,
                  "end": 3329,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 3302,
                    "end": 3329,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 3302,
                        "end": 3307,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3302,
                          "end": 3307,
                          "name": "Named",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 3310,
                        "end": 3329,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 3312,
                            "end": 3327,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3312,
                              "end": 3313,
                              "name": "o",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3313,
                              "end": 3327,
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "start": 3315,
                                "end": 3327,
                                "exprName": {
                                  "type": "Identifier",
                                  "start": 3322,
                                  "end": 3327,
                                  "name": "alias",
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
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 3332,
            "end": 3382,
            "key": {
              "type": "Identifier",
              "start": 3332,
              "end": 3343,
              "name": "mReturnType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 3344,
                "end": 3366,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3346,
                    "end": 3357,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3346,
                      "end": 3350,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 3352,
                      "end": 3357,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3359,
                  "end": 3366,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3361,
                    "end": 3366,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3361,
                      "end": 3366,
                      "name": "Named",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3367,
              "end": 3381,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 3369,
                "end": 3381,
                "exprName": {
                  "type": "Identifier",
                  "start": 3376,
                  "end": 3381,
                  "name": "alias",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 3384,
            "end": 3454,
            "key": {
              "type": "Identifier",
              "start": 3384,
              "end": 3402,
              "name": "mRerturnTypeNested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 3403,
                "end": 3425,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3405,
                    "end": 3416,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3405,
                      "end": 3409,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 3411,
                      "end": 3416,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3418,
                  "end": 3425,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3420,
                    "end": 3425,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3420,
                      "end": 3425,
                      "name": "Named",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3426,
              "end": 3453,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3428,
                "end": 3453,
                "typeName": {
                  "type": "Identifier",
                  "start": 3428,
                  "end": 3439,
                  "name": "NonNullable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3439,
                  "end": 3453,
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "start": 3440,
                      "end": 3452,
                      "exprName": {
                        "type": "Identifier",
                        "start": 3447,
                        "end": 3452,
                        "name": "alias",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 3459,
            "end": 3511,
            "key": {
              "type": "Identifier",
              "start": 3459,
              "end": 3469,
              "name": "mParameter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 3470,
                "end": 3492,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3472,
                    "end": 3483,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3472,
                      "end": 3476,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 3478,
                      "end": 3483,
                      "name": "alias",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3485,
                  "end": 3492,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3487,
                    "end": 3492,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3487,
                      "end": 3492,
                      "name": "Named",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 3494,
                "end": 3509,
                "name": "p",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3495,
                  "end": 3509,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 3497,
                    "end": 3509,
                    "exprName": {
                      "type": "Identifier",
                      "start": 3504,
                      "end": 3509,
                      "name": "alias",
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
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

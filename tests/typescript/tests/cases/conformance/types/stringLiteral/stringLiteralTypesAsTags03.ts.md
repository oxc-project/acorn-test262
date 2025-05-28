__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 863,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 21,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Kind",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 12,
        "end": 21,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 12,
            "end": 15,
            "literal": {
              "type": "Literal",
              "start": 12,
              "end": 15,
              "value": "A",
              "raw": "\"A\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 18,
            "end": 21,
            "literal": {
              "type": "Literal",
              "start": 18,
              "end": 21,
              "value": "B",
              "raw": "\"B\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 23,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 39,
        "decorators": [],
        "name": "Entity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 40,
        "end": 59,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 57,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 50,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 56,
                  "decorators": [],
                  "name": "Kind",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "TSInterfaceDeclaration",
      "start": 61,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 81,
          "end": 87,
          "expression": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 88,
        "end": 121,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 94,
            "end": 104,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 98,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 103,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 100,
                "end": 103,
                "literal": {
                  "type": "Literal",
                  "start": 100,
                  "end": 103,
                  "value": "A",
                  "raw": "\"A\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 109,
            "end": 119,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 118,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 112,
                "end": 118
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
      "type": "TSInterfaceDeclaration",
      "start": 123,
      "end": 183,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 134,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 143,
          "end": 149,
          "expression": {
            "type": "Identifier",
            "start": 143,
            "end": 149,
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 150,
        "end": 183,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 156,
            "end": 166,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 160,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 165,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 162,
                "end": 165,
                "literal": {
                  "type": "Literal",
                  "start": 162,
                  "end": 165,
                  "value": "B",
                  "raw": "\"B\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 171,
            "end": 181,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 180,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 174,
                "end": 180
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
      "type": "TSDeclareFunction",
      "start": 462,
      "end": 525,
      "id": {
        "type": "Identifier",
        "start": 471,
        "end": 478,
        "decorators": [],
        "name": "hasKind",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 479,
          "end": 493,
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 485,
            "end": 493,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 487,
              "end": 493,
              "typeName": {
                "type": "Identifier",
                "start": 487,
                "end": 493,
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 495,
          "end": 510,
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 499,
            "end": 510,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 501,
              "end": 510,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 501,
                  "end": 504,
                  "literal": {
                    "type": "Literal",
                    "start": 501,
                    "end": 504,
                    "value": "A",
                    "raw": "\"A\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 507,
                  "end": 510,
                  "literal": {
                    "type": "Literal",
                    "start": 507,
                    "end": 510,
                    "value": "A",
                    "raw": "\"A\""
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 511,
        "end": 524,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 513,
          "end": 524,
          "parameterName": {
            "type": "Identifier",
            "start": 513,
            "end": 519,
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 523,
            "end": 524,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 523,
              "end": 524,
              "typeName": {
                "type": "Identifier",
                "start": 523,
                "end": 524,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 526,
      "end": 589,
      "id": {
        "type": "Identifier",
        "start": 535,
        "end": 542,
        "decorators": [],
        "name": "hasKind",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 543,
          "end": 557,
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 549,
            "end": 557,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 551,
              "end": 557,
              "typeName": {
                "type": "Identifier",
                "start": 551,
                "end": 557,
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 559,
          "end": 574,
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 563,
            "end": 574,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 565,
              "end": 574,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 565,
                  "end": 568,
                  "literal": {
                    "type": "Literal",
                    "start": 565,
                    "end": 568,
                    "value": "B",
                    "raw": "\"B\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 571,
                  "end": 574,
                  "literal": {
                    "type": "Literal",
                    "start": 571,
                    "end": 574,
                    "value": "B",
                    "raw": "\"B\""
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 575,
        "end": 588,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 577,
          "end": 588,
          "parameterName": {
            "type": "Identifier",
            "start": 577,
            "end": 583,
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 587,
            "end": 588,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 587,
              "end": 588,
              "typeName": {
                "type": "Identifier",
                "start": 587,
                "end": 588,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 590,
      "end": 689,
      "id": {
        "type": "Identifier",
        "start": 599,
        "end": 606,
        "decorators": [],
        "name": "hasKind",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 607,
          "end": 621,
          "decorators": [],
          "name": "entity",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 613,
            "end": 621,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 615,
              "end": 621,
              "typeName": {
                "type": "Identifier",
                "start": 615,
                "end": 621,
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 623,
          "end": 633,
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 627,
            "end": 633,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 629,
              "end": 633,
              "typeName": {
                "type": "Identifier",
                "start": 629,
                "end": 633,
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 634,
        "end": 652,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 636,
          "end": 652,
          "parameterName": {
            "type": "Identifier",
            "start": 636,
            "end": 642,
            "decorators": [],
            "name": "entity",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 646,
            "end": 652,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 646,
              "end": 652,
              "typeName": {
                "type": "Identifier",
                "start": 646,
                "end": 652,
                "decorators": [],
                "name": "Entity",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 653,
        "end": 689,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 659,
            "end": 687,
            "argument": {
              "type": "BinaryExpression",
              "start": 666,
              "end": 686,
              "left": {
                "type": "MemberExpression",
                "start": 666,
                "end": 677,
                "object": {
                  "type": "Identifier",
                  "start": 666,
                  "end": 672,
                  "decorators": [],
                  "name": "entity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 673,
                  "end": 677,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 682,
                "end": 686,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 691,
      "end": 732,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 695,
          "end": 732,
          "id": {
            "type": "Identifier",
            "start": 695,
            "end": 699,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 696,
              "end": 699,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 698,
                "end": 699,
                "typeName": {
                  "type": "Identifier",
                  "start": 698,
                  "end": 699,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 702,
            "end": 732,
            "properties": [
              {
                "type": "Property",
                "start": 708,
                "end": 717,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 708,
                  "end": 712,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 714,
                  "end": 717,
                  "value": "A",
                  "raw": "\"A\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 723,
                "end": 729,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 723,
                  "end": 724,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 726,
                  "end": 729,
                  "value": 100,
                  "raw": "100"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 734,
      "end": 797,
      "test": {
        "type": "CallExpression",
        "start": 738,
        "end": 753,
        "callee": {
          "type": "Identifier",
          "start": 738,
          "end": 745,
          "decorators": [],
          "name": "hasKind",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 746,
            "end": 747,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 749,
            "end": 752,
            "value": "A",
            "raw": "\"A\""
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 755,
        "end": 773,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 761,
            "end": 771,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 765,
                "end": 770,
                "id": {
                  "type": "Identifier",
                  "start": 765,
                  "end": 766,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 770,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 779,
        "end": 797,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 785,
            "end": 795,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 789,
                "end": 794,
                "id": {
                  "type": "Identifier",
                  "start": 789,
                  "end": 790,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 793,
                  "end": 794,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 799,
      "end": 863,
      "test": {
        "type": "UnaryExpression",
        "start": 803,
        "end": 819,
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "start": 804,
          "end": 819,
          "callee": {
            "type": "Identifier",
            "start": 804,
            "end": 811,
            "decorators": [],
            "name": "hasKind",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "start": 812,
              "end": 813,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Literal",
              "start": 815,
              "end": 818,
              "value": "B",
              "raw": "\"B\""
            }
          ],
          "optional": false
        },
        "prefix": true
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 821,
        "end": 839,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 827,
            "end": 837,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 831,
                "end": 836,
                "id": {
                  "type": "Identifier",
                  "start": 831,
                  "end": 832,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 836,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 845,
        "end": 863,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 851,
            "end": 861,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 855,
                "end": 860,
                "id": {
                  "type": "Identifier",
                  "start": 855,
                  "end": 856,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 859,
                  "end": 860,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

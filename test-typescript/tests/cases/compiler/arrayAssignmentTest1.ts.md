__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2502,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 31,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 16,
            "end": 29,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "name": "IM1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 28,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 22,
                "end": 28,
                "elementType": {
                  "type": "TSVoidKeyword",
                  "start": 22,
                  "end": 26
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 33,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 41,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 118,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 60,
            "end": 87,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 63,
              "name": "IM1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 87,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 87,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 74,
                    "end": 86,
                    "argument": {
                      "type": "Literal",
                      "start": 81,
                      "end": 85,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 65,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 66,
                  "end": 72,
                  "elementType": {
                    "type": "TSVoidKeyword",
                    "start": 66,
                    "end": 70
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
            "start": 89,
            "end": 115,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 93,
              "name": "C1M1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 93,
              "end": 115,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 115,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 102,
                    "end": 114,
                    "argument": {
                      "type": "Literal",
                      "start": 109,
                      "end": 113,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 95,
                "end": 100,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 96,
                  "end": 100,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 96,
                    "end": 98,
                    "typeName": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 98,
                      "name": "C1",
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
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 53,
          "end": 55,
          "expression": {
            "type": "Identifier",
            "start": 53,
            "end": 55,
            "name": "I1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 119,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 127,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 136,
        "end": 138,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 139,
        "end": 174,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 172,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 149,
              "name": "C2M1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 149,
              "end": 172,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 157,
                "end": 172,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 159,
                    "end": 171,
                    "argument": {
                      "type": "Literal",
                      "start": 166,
                      "end": 170,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 151,
                "end": 156,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 152,
                  "end": 156,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 152,
                    "end": 154,
                    "typeName": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 154,
                      "name": "C2",
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
      "start": 176,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 184,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 185,
        "end": 213,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 191,
            "end": 211,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 196,
              "name": "CM3M1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 196,
              "end": 211,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 199,
                "end": 211,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 201,
                    "end": 210,
                    "argument": {
                      "type": "Literal",
                      "start": 208,
                      "end": 209,
                      "value": 3,
                      "raw": "3"
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
      "start": 498,
      "end": 518,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 502,
          "end": 517,
          "id": {
            "type": "Identifier",
            "start": 502,
            "end": 510,
            "name": "a1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 505,
              "end": 510,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 507,
                "end": 510
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 513,
            "end": 517,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 519,
      "end": 542,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 523,
          "end": 541,
          "id": {
            "type": "Identifier",
            "start": 523,
            "end": 530,
            "name": "c1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 526,
              "end": 530,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 528,
                "end": 530,
                "typeName": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 530,
                  "name": "C1",
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
          "init": {
            "type": "NewExpression",
            "start": 533,
            "end": 541,
            "callee": {
              "type": "Identifier",
              "start": 537,
              "end": 539,
              "name": "C1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 543,
      "end": 560,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 547,
          "end": 559,
          "id": {
            "type": "Identifier",
            "start": 547,
            "end": 554,
            "name": "i1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 550,
              "end": 554,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 552,
                "end": 554,
                "typeName": {
                  "type": "Identifier",
                  "start": 552,
                  "end": 554,
                  "name": "I1",
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
          "init": {
            "type": "Identifier",
            "start": 557,
            "end": 559,
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 561,
      "end": 584,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 565,
          "end": 583,
          "id": {
            "type": "Identifier",
            "start": 565,
            "end": 572,
            "name": "c2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 568,
              "end": 572,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 570,
                "end": 572,
                "typeName": {
                  "type": "Identifier",
                  "start": 570,
                  "end": 572,
                  "name": "C2",
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
          "init": {
            "type": "NewExpression",
            "start": 575,
            "end": 583,
            "callee": {
              "type": "Identifier",
              "start": 579,
              "end": 581,
              "name": "C2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 585,
      "end": 608,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 589,
          "end": 607,
          "id": {
            "type": "Identifier",
            "start": 589,
            "end": 596,
            "name": "c3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 592,
              "end": 596,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 594,
                "end": 596,
                "typeName": {
                  "type": "Identifier",
                  "start": 594,
                  "end": 596,
                  "name": "C3",
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
          "init": {
            "type": "NewExpression",
            "start": 599,
            "end": 607,
            "callee": {
              "type": "Identifier",
              "start": 603,
              "end": 605,
              "name": "C3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 609,
      "end": 628,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 613,
          "end": 627,
          "id": {
            "type": "Identifier",
            "start": 613,
            "end": 615,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 618,
            "end": 627,
            "properties": [
              {
                "type": "Property",
                "start": 619,
                "end": 626,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 619,
                  "end": 622,
                  "name": "one",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 625,
                  "end": 626,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 629,
      "end": 669,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 633,
          "end": 669,
          "id": {
            "type": "Identifier",
            "start": 633,
            "end": 635,
            "name": "f1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 638,
            "end": 669,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 650,
              "end": 669,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 652,
                  "end": 668,
                  "argument": {
                    "type": "NewExpression",
                    "start": 659,
                    "end": 667,
                    "callee": {
                      "type": "Identifier",
                      "start": 663,
                      "end": 665,
                      "name": "C1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 671,
      "end": 695,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 675,
          "end": 694,
          "id": {
            "type": "Identifier",
            "start": 675,
            "end": 689,
            "name": "arr_any",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 682,
              "end": 689,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 684,
                "end": 689,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 684,
                  "end": 687
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 692,
            "end": 694,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 696,
      "end": 718,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 700,
          "end": 717,
          "id": {
            "type": "Identifier",
            "start": 700,
            "end": 712,
            "name": "arr_i1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 706,
              "end": 712,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 708,
                "end": 712,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 708,
                  "end": 710,
                  "typeName": {
                    "type": "Identifier",
                    "start": 708,
                    "end": 710,
                    "name": "I1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 715,
            "end": 717,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 719,
      "end": 741,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 723,
          "end": 740,
          "id": {
            "type": "Identifier",
            "start": 723,
            "end": 735,
            "name": "arr_c1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 729,
              "end": 735,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 731,
                "end": 735,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 731,
                  "end": 733,
                  "typeName": {
                    "type": "Identifier",
                    "start": 731,
                    "end": 733,
                    "name": "C1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 738,
            "end": 740,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 742,
      "end": 764,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 746,
          "end": 763,
          "id": {
            "type": "Identifier",
            "start": 746,
            "end": 758,
            "name": "arr_c2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 752,
              "end": 758,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 754,
                "end": 758,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 754,
                  "end": 756,
                  "typeName": {
                    "type": "Identifier",
                    "start": 754,
                    "end": 756,
                    "name": "C2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 761,
            "end": 763,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 765,
      "end": 789,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 769,
          "end": 788,
          "id": {
            "type": "Identifier",
            "start": 769,
            "end": 783,
            "name": "arr_i1_2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 777,
              "end": 783,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 779,
                "end": 783,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 779,
                  "end": 781,
                  "typeName": {
                    "type": "Identifier",
                    "start": 779,
                    "end": 781,
                    "name": "I1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 786,
            "end": 788,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 790,
      "end": 814,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 794,
          "end": 813,
          "id": {
            "type": "Identifier",
            "start": 794,
            "end": 808,
            "name": "arr_c1_2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 802,
              "end": 808,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 804,
                "end": 808,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 804,
                  "end": 806,
                  "typeName": {
                    "type": "Identifier",
                    "start": 804,
                    "end": 806,
                    "name": "C1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 811,
            "end": 813,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 815,
      "end": 839,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 819,
          "end": 838,
          "id": {
            "type": "Identifier",
            "start": 819,
            "end": 833,
            "name": "arr_c2_2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 827,
              "end": 833,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 829,
                "end": 833,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 829,
                  "end": 831,
                  "typeName": {
                    "type": "Identifier",
                    "start": 829,
                    "end": 831,
                    "name": "C2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 836,
            "end": 838,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 840,
      "end": 862,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 844,
          "end": 861,
          "id": {
            "type": "Identifier",
            "start": 844,
            "end": 856,
            "name": "arr_c3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 850,
              "end": 856,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 852,
                "end": 856,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 852,
                  "end": 854,
                  "typeName": {
                    "type": "Identifier",
                    "start": 852,
                    "end": 854,
                    "name": "C3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 859,
            "end": 861,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 864,
      "end": 886,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 868,
          "end": 885,
          "id": {
            "type": "Identifier",
            "start": 868,
            "end": 880,
            "name": "i1_error",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 876,
              "end": 880,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 878,
                "end": 880,
                "typeName": {
                  "type": "Identifier",
                  "start": 878,
                  "end": 880,
                  "name": "I1",
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
          "init": {
            "type": "ArrayExpression",
            "start": 883,
            "end": 885,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 914,
      "end": 936,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 918,
          "end": 935,
          "id": {
            "type": "Identifier",
            "start": 918,
            "end": 930,
            "name": "c1_error",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 926,
              "end": 930,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 928,
                "end": 930,
                "typeName": {
                  "type": "Identifier",
                  "start": 928,
                  "end": 930,
                  "name": "C1",
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
          "init": {
            "type": "ArrayExpression",
            "start": 933,
            "end": 935,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 964,
      "end": 986,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 968,
          "end": 985,
          "id": {
            "type": "Identifier",
            "start": 968,
            "end": 980,
            "name": "c2_error",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 976,
              "end": 980,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 978,
                "end": 980,
                "typeName": {
                  "type": "Identifier",
                  "start": 978,
                  "end": 980,
                  "name": "C2",
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
          "init": {
            "type": "ArrayExpression",
            "start": 983,
            "end": 985,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1014,
      "end": 1036,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1018,
          "end": 1035,
          "id": {
            "type": "Identifier",
            "start": 1018,
            "end": 1030,
            "name": "c3_error",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1026,
              "end": 1030,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1028,
                "end": 1030,
                "typeName": {
                  "type": "Identifier",
                  "start": 1028,
                  "end": 1030,
                  "name": "C3",
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
          "init": {
            "type": "ArrayExpression",
            "start": 1033,
            "end": 1035,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1066,
      "end": 1083,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1066,
        "end": 1082,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1066,
          "end": 1073,
          "name": "arr_any",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1076,
          "end": 1082,
          "name": "arr_i1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1105,
      "end": 1122,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1105,
        "end": 1121,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1105,
          "end": 1112,
          "name": "arr_any",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1115,
          "end": 1121,
          "name": "arr_c1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1144,
      "end": 1161,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1144,
        "end": 1160,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1144,
          "end": 1151,
          "name": "arr_any",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1154,
          "end": 1160,
          "name": "arr_c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1183,
      "end": 1200,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1183,
        "end": 1199,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1183,
          "end": 1190,
          "name": "arr_any",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1193,
          "end": 1199,
          "name": "arr_c3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1223,
      "end": 1239,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1223,
        "end": 1238,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1223,
          "end": 1229,
          "name": "arr_i1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1232,
          "end": 1238,
          "name": "arr_i1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1284,
      "end": 1300,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1284,
        "end": 1299,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1284,
          "end": 1290,
          "name": "arr_i1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1293,
          "end": 1299,
          "name": "arr_c1",
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
      "end": 1361,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1345,
        "end": 1360,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1345,
          "end": 1351,
          "name": "arr_i1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1354,
          "end": 1360,
          "name": "arr_c2",
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
      "end": 1422,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1406,
        "end": 1421,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1406,
          "end": 1412,
          "name": "arr_i1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1415,
          "end": 1421,
          "name": "arr_c3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1451,
      "end": 1467,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1451,
        "end": 1466,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1451,
          "end": 1457,
          "name": "arr_c1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1460,
          "end": 1466,
          "name": "arr_c1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1512,
      "end": 1528,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1512,
        "end": 1527,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1512,
          "end": 1518,
          "name": "arr_c1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1521,
          "end": 1527,
          "name": "arr_c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1573,
      "end": 1589,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1573,
        "end": 1588,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1573,
          "end": 1579,
          "name": "arr_c1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1582,
          "end": 1588,
          "name": "arr_i1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1617,
      "end": 1633,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1617,
        "end": 1632,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1617,
          "end": 1623,
          "name": "arr_c1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1626,
          "end": 1632,
          "name": "arr_c3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1662,
      "end": 1678,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1662,
        "end": 1677,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1662,
          "end": 1668,
          "name": "arr_c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1671,
          "end": 1677,
          "name": "arr_c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1723,
      "end": 1739,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1723,
        "end": 1738,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1723,
          "end": 1729,
          "name": "arr_c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1732,
          "end": 1738,
          "name": "arr_c1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1790,
      "end": 1806,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1790,
        "end": 1805,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1790,
          "end": 1796,
          "name": "arr_c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1799,
          "end": 1805,
          "name": "arr_i1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1857,
      "end": 1873,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1857,
        "end": 1872,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1857,
          "end": 1863,
          "name": "arr_c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1866,
          "end": 1872,
          "name": "arr_c3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2083,
      "end": 2101,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2083,
        "end": 2100,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2083,
          "end": 2089,
          "name": "arr_c3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2092,
          "end": 2100,
          "name": "arr_c2_2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2129,
      "end": 2147,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2129,
        "end": 2146,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2129,
          "end": 2135,
          "name": "arr_c3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2138,
          "end": 2146,
          "name": "arr_c1_2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2175,
      "end": 2193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2175,
        "end": 2192,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2175,
          "end": 2181,
          "name": "arr_c3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2184,
          "end": 2192,
          "name": "arr_i1_2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2222,
      "end": 2235,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2222,
        "end": 2234,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2222,
          "end": 2229,
          "name": "arr_any",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2232,
          "end": 2234,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2263,
      "end": 2276,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2263,
        "end": 2275,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2263,
          "end": 2270,
          "name": "arr_any",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2273,
          "end": 2275,
          "name": "o1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2304,
      "end": 2317,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2304,
        "end": 2316,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2304,
          "end": 2311,
          "name": "arr_any",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2314,
          "end": 2316,
          "name": "a1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2339,
      "end": 2352,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2339,
        "end": 2351,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2339,
          "end": 2346,
          "name": "arr_any",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2349,
          "end": 2351,
          "name": "c1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2380,
      "end": 2393,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2380,
        "end": 2392,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2380,
          "end": 2387,
          "name": "arr_any",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2390,
          "end": 2392,
          "name": "c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2421,
      "end": 2434,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2421,
        "end": 2433,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2421,
          "end": 2428,
          "name": "arr_any",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2431,
          "end": 2433,
          "name": "c3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2462,
      "end": 2475,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2462,
        "end": 2474,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2462,
          "end": 2469,
          "name": "arr_any",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 2472,
          "end": 2474,
          "name": "i1",
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

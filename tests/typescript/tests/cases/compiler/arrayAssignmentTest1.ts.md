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
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "IM1",
              "optional": false,
              "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 41,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 53,
          "end": 55,
          "expression": {
            "type": "Identifier",
            "start": 53,
            "end": 55,
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 118,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 60,
            "end": 87,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 63,
              "decorators": [],
              "name": "IM1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 87,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
              },
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 89,
            "end": 115,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 93,
              "decorators": [],
              "name": "C1M1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 93,
              "end": 115,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
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
      "start": 119,
      "end": 174,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 127,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 136,
        "end": 138,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 139,
        "end": 174,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 172,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 149,
              "decorators": [],
              "name": "C2M1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 149,
              "end": 172,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
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
      "start": 176,
      "end": 213,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 184,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 185,
        "end": 213,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 191,
            "end": 211,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 196,
              "decorators": [],
              "name": "CM3M1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 196,
              "end": 211,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
      "start": 498,
      "end": 518,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 502,
          "end": 517,
          "id": {
            "type": "Identifier",
            "start": 502,
            "end": 510,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 505,
              "end": 510,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 507,
                "end": 510
              }
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 519,
      "end": 542,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 523,
          "end": 541,
          "id": {
            "type": "Identifier",
            "start": 523,
            "end": 530,
            "decorators": [],
            "name": "c1",
            "optional": false,
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
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 533,
            "end": 541,
            "callee": {
              "type": "Identifier",
              "start": 537,
              "end": 539,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 543,
      "end": 560,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 547,
          "end": 559,
          "id": {
            "type": "Identifier",
            "start": 547,
            "end": 554,
            "decorators": [],
            "name": "i1",
            "optional": false,
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
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 557,
            "end": 559,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 561,
      "end": 584,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 565,
          "end": 583,
          "id": {
            "type": "Identifier",
            "start": 565,
            "end": 572,
            "decorators": [],
            "name": "c2",
            "optional": false,
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
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 575,
            "end": 583,
            "callee": {
              "type": "Identifier",
              "start": 579,
              "end": 581,
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 585,
      "end": 608,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 589,
          "end": 607,
          "id": {
            "type": "Identifier",
            "start": 589,
            "end": 596,
            "decorators": [],
            "name": "c3",
            "optional": false,
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
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 599,
            "end": 607,
            "callee": {
              "type": "Identifier",
              "start": 603,
              "end": 605,
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 609,
      "end": 628,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 613,
          "end": 627,
          "id": {
            "type": "Identifier",
            "start": 613,
            "end": 615,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 619,
                  "end": 622,
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 625,
                  "end": 626,
                  "value": 1,
                  "raw": "1"
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
      "type": "VariableDeclaration",
      "start": 629,
      "end": 669,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 633,
          "end": 669,
          "id": {
            "type": "Identifier",
            "start": 633,
            "end": 635,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 638,
            "end": 669,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
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
                      "decorators": [],
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 671,
      "end": 695,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 675,
          "end": 694,
          "id": {
            "type": "Identifier",
            "start": 675,
            "end": 689,
            "decorators": [],
            "name": "arr_any",
            "optional": false,
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
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 696,
      "end": 718,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 700,
          "end": 717,
          "id": {
            "type": "Identifier",
            "start": 700,
            "end": 712,
            "decorators": [],
            "name": "arr_i1",
            "optional": false,
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
                    "decorators": [],
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 719,
      "end": 741,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 723,
          "end": 740,
          "id": {
            "type": "Identifier",
            "start": 723,
            "end": 735,
            "decorators": [],
            "name": "arr_c1",
            "optional": false,
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
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 742,
      "end": 764,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 746,
          "end": 763,
          "id": {
            "type": "Identifier",
            "start": 746,
            "end": 758,
            "decorators": [],
            "name": "arr_c2",
            "optional": false,
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
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 765,
      "end": 789,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 769,
          "end": 788,
          "id": {
            "type": "Identifier",
            "start": 769,
            "end": 783,
            "decorators": [],
            "name": "arr_i1_2",
            "optional": false,
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
                    "decorators": [],
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 790,
      "end": 814,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 794,
          "end": 813,
          "id": {
            "type": "Identifier",
            "start": 794,
            "end": 808,
            "decorators": [],
            "name": "arr_c1_2",
            "optional": false,
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
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 815,
      "end": 839,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 819,
          "end": 838,
          "id": {
            "type": "Identifier",
            "start": 819,
            "end": 833,
            "decorators": [],
            "name": "arr_c2_2",
            "optional": false,
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
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 840,
      "end": 862,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 844,
          "end": 861,
          "id": {
            "type": "Identifier",
            "start": 844,
            "end": 856,
            "decorators": [],
            "name": "arr_c3",
            "optional": false,
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
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 864,
      "end": 886,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 868,
          "end": 885,
          "id": {
            "type": "Identifier",
            "start": 868,
            "end": 880,
            "decorators": [],
            "name": "i1_error",
            "optional": false,
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
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 914,
      "end": 936,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 918,
          "end": 935,
          "id": {
            "type": "Identifier",
            "start": 918,
            "end": 930,
            "decorators": [],
            "name": "c1_error",
            "optional": false,
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
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 964,
      "end": 986,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 968,
          "end": 985,
          "id": {
            "type": "Identifier",
            "start": 968,
            "end": 980,
            "decorators": [],
            "name": "c2_error",
            "optional": false,
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
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1014,
      "end": 1036,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1018,
          "end": 1035,
          "id": {
            "type": "Identifier",
            "start": 1018,
            "end": 1030,
            "decorators": [],
            "name": "c3_error",
            "optional": false,
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
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
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
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1076,
          "end": 1082,
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1115,
          "end": 1121,
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1154,
          "end": 1160,
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1193,
          "end": 1199,
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1232,
          "end": 1238,
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1293,
          "end": 1299,
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1354,
          "end": 1360,
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1415,
          "end": 1421,
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1460,
          "end": 1466,
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1521,
          "end": 1527,
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1582,
          "end": 1588,
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1626,
          "end": 1632,
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1671,
          "end": 1677,
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1732,
          "end": 1738,
          "decorators": [],
          "name": "arr_c1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1799,
          "end": 1805,
          "decorators": [],
          "name": "arr_i1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_c2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1866,
          "end": 1872,
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2092,
          "end": 2100,
          "decorators": [],
          "name": "arr_c2_2",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2138,
          "end": 2146,
          "decorators": [],
          "name": "arr_c1_2",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2184,
          "end": 2192,
          "decorators": [],
          "name": "arr_i1_2",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2232,
          "end": 2234,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2273,
          "end": 2275,
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2314,
          "end": 2316,
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2349,
          "end": 2351,
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2390,
          "end": 2392,
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2431,
          "end": 2433,
          "decorators": [],
          "name": "c3",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 2472,
          "end": 2474,
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

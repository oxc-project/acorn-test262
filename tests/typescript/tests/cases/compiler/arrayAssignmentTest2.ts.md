__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1383,
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
      "end": 171,
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
        "end": 171,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 169,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 146,
              "decorators": [],
              "name": "C2M1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 146,
              "end": 169,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 148,
                "end": 153,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 149,
                  "end": 153,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 149,
                    "end": 151,
                    "typeName": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 151,
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
                "start": 154,
                "end": 169,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 156,
                    "end": 168,
                    "argument": {
                      "type": "Literal",
                      "start": 163,
                      "end": 167,
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
      "start": 173,
      "end": 207,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 181,
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
        "start": 182,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 185,
            "end": 205,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 190,
              "decorators": [],
              "name": "CM3M1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 190,
              "end": 205,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 193,
                "end": 205,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 195,
                    "end": 204,
                    "argument": {
                      "type": "Literal",
                      "start": 202,
                      "end": 203,
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
      "start": 492,
      "end": 512,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 511,
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 504,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 499,
              "end": 504,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 501,
                "end": 504
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 507,
            "end": 511,
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
      "start": 513,
      "end": 536,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 517,
          "end": 535,
          "id": {
            "type": "Identifier",
            "start": 517,
            "end": 524,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 520,
              "end": 524,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 522,
                "end": 524,
                "typeName": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 524,
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
            "start": 527,
            "end": 535,
            "callee": {
              "type": "Identifier",
              "start": 531,
              "end": 533,
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
      "start": 537,
      "end": 554,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 541,
          "end": 553,
          "id": {
            "type": "Identifier",
            "start": 541,
            "end": 548,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 544,
              "end": 548,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 546,
                "end": 548,
                "typeName": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 548,
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
            "start": 551,
            "end": 553,
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
      "start": 555,
      "end": 578,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 559,
          "end": 577,
          "id": {
            "type": "Identifier",
            "start": 559,
            "end": 566,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 562,
              "end": 566,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 564,
                "end": 566,
                "typeName": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 566,
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
            "start": 569,
            "end": 577,
            "callee": {
              "type": "Identifier",
              "start": 573,
              "end": 575,
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
      "start": 579,
      "end": 602,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 583,
          "end": 601,
          "id": {
            "type": "Identifier",
            "start": 583,
            "end": 590,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 586,
              "end": 590,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 588,
                "end": 590,
                "typeName": {
                  "type": "Identifier",
                  "start": 588,
                  "end": 590,
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
            "start": 593,
            "end": 601,
            "callee": {
              "type": "Identifier",
              "start": 597,
              "end": 599,
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
      "start": 603,
      "end": 622,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 607,
          "end": 621,
          "id": {
            "type": "Identifier",
            "start": 607,
            "end": 609,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 612,
            "end": 621,
            "properties": [
              {
                "type": "Property",
                "start": 613,
                "end": 620,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 613,
                  "end": 616,
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 619,
                  "end": 620,
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
      "start": 623,
      "end": 663,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 627,
          "end": 663,
          "id": {
            "type": "Identifier",
            "start": 627,
            "end": 629,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 632,
            "end": 663,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 644,
              "end": 663,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 646,
                  "end": 662,
                  "argument": {
                    "type": "NewExpression",
                    "start": 653,
                    "end": 661,
                    "callee": {
                      "type": "Identifier",
                      "start": 657,
                      "end": 659,
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
      "start": 665,
      "end": 689,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 669,
          "end": 688,
          "id": {
            "type": "Identifier",
            "start": 669,
            "end": 683,
            "decorators": [],
            "name": "arr_any",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 676,
              "end": 683,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 678,
                "end": 683,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 678,
                  "end": 681
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 686,
            "end": 688,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 690,
      "end": 712,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 694,
          "end": 711,
          "id": {
            "type": "Identifier",
            "start": 694,
            "end": 706,
            "decorators": [],
            "name": "arr_i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 700,
              "end": 706,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 702,
                "end": 706,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 702,
                  "end": 704,
                  "typeName": {
                    "type": "Identifier",
                    "start": 702,
                    "end": 704,
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
            "start": 709,
            "end": 711,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 713,
      "end": 735,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 717,
          "end": 734,
          "id": {
            "type": "Identifier",
            "start": 717,
            "end": 729,
            "decorators": [],
            "name": "arr_c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 723,
              "end": 729,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 725,
                "end": 729,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 725,
                  "end": 727,
                  "typeName": {
                    "type": "Identifier",
                    "start": 725,
                    "end": 727,
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
            "start": 732,
            "end": 734,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 736,
      "end": 758,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 740,
          "end": 757,
          "id": {
            "type": "Identifier",
            "start": 740,
            "end": 752,
            "decorators": [],
            "name": "arr_c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 746,
              "end": 752,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 748,
                "end": 752,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 748,
                  "end": 750,
                  "typeName": {
                    "type": "Identifier",
                    "start": 748,
                    "end": 750,
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
            "start": 755,
            "end": 757,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 759,
      "end": 783,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 763,
          "end": 782,
          "id": {
            "type": "Identifier",
            "start": 763,
            "end": 777,
            "decorators": [],
            "name": "arr_i1_2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 771,
              "end": 777,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 773,
                "end": 777,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 773,
                  "end": 775,
                  "typeName": {
                    "type": "Identifier",
                    "start": 773,
                    "end": 775,
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
            "start": 780,
            "end": 782,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 784,
      "end": 808,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 788,
          "end": 807,
          "id": {
            "type": "Identifier",
            "start": 788,
            "end": 802,
            "decorators": [],
            "name": "arr_c1_2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 796,
              "end": 802,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 798,
                "end": 802,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 798,
                  "end": 800,
                  "typeName": {
                    "type": "Identifier",
                    "start": 798,
                    "end": 800,
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
            "start": 805,
            "end": 807,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 809,
      "end": 833,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 813,
          "end": 832,
          "id": {
            "type": "Identifier",
            "start": 813,
            "end": 827,
            "decorators": [],
            "name": "arr_c2_2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 821,
              "end": 827,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 823,
                "end": 827,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 823,
                  "end": 825,
                  "typeName": {
                    "type": "Identifier",
                    "start": 823,
                    "end": 825,
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
            "start": 830,
            "end": 832,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 834,
      "end": 856,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 838,
          "end": 855,
          "id": {
            "type": "Identifier",
            "start": 838,
            "end": 850,
            "decorators": [],
            "name": "arr_c3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 844,
              "end": 850,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 846,
                "end": 850,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 846,
                  "end": 848,
                  "typeName": {
                    "type": "Identifier",
                    "start": 846,
                    "end": 848,
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
            "start": 853,
            "end": 855,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 899,
      "end": 917,
      "expression": {
        "type": "AssignmentExpression",
        "start": 899,
        "end": 916,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 899,
          "end": 905,
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 908,
          "end": 916,
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
      "start": 945,
      "end": 963,
      "expression": {
        "type": "AssignmentExpression",
        "start": 945,
        "end": 962,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 945,
          "end": 951,
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 954,
          "end": 962,
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
      "start": 991,
      "end": 1009,
      "expression": {
        "type": "AssignmentExpression",
        "start": 991,
        "end": 1008,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 991,
          "end": 997,
          "decorators": [],
          "name": "arr_c3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1000,
          "end": 1008,
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
      "start": 1038,
      "end": 1051,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1038,
        "end": 1050,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1038,
          "end": 1045,
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1048,
          "end": 1050,
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
      "start": 1079,
      "end": 1116,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1079,
        "end": 1116,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1079,
          "end": 1086,
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1089,
          "end": 1116,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 1101,
            "end": 1116,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 1103,
                "end": 1115,
                "argument": {
                  "type": "Literal",
                  "start": 1110,
                  "end": 1114,
                  "value": null,
                  "raw": "null"
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1144,
      "end": 1157,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1144,
        "end": 1156,
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
          "end": 1156,
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
      "start": 1185,
      "end": 1198,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1185,
        "end": 1197,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1185,
          "end": 1192,
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1195,
          "end": 1197,
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
      "start": 1220,
      "end": 1233,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1220,
        "end": 1232,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1220,
          "end": 1227,
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1230,
          "end": 1232,
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
      "start": 1261,
      "end": 1274,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1261,
        "end": 1273,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1261,
          "end": 1268,
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1271,
          "end": 1273,
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
      "start": 1302,
      "end": 1315,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1302,
        "end": 1314,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1302,
          "end": 1309,
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1312,
          "end": 1314,
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
      "start": 1343,
      "end": 1356,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1343,
        "end": 1355,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1343,
          "end": 1350,
          "decorators": [],
          "name": "arr_any",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1353,
          "end": 1355,
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

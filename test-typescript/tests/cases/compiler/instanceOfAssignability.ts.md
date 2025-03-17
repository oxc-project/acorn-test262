__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1515,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 59,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 37,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 36,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 23,
                "end": 36,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 23,
                    "end": 29
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 30,
                    "end": 36
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 39,
            "end": 57,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 47,
              "name": "optional",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 56,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 50,
                "end": 56
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
      "type": "ClassDeclaration",
      "start": 118,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 132,
        "name": "Derived1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 149,
        "end": 166,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 152,
            "end": 164,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 155,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 163,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 144,
          "end": 148,
          "expression": {
            "type": "Identifier",
            "start": 144,
            "end": 148,
            "name": "Base",
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
      "start": 235,
      "end": 302,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 249,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 266,
        "end": 302,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 269,
            "end": 281,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 272,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 272,
              "end": 280,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 274,
                "end": 280
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 283,
            "end": 300,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 291,
              "name": "optional",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 299,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 293,
                "end": 299
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 261,
          "end": 265,
          "expression": {
            "type": "Identifier",
            "start": 261,
            "end": 265,
            "name": "Base",
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
      "start": 304,
      "end": 327,
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 316,
        "name": "Animal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 317,
        "end": 327,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 320,
            "end": 325,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 320,
              "end": 324,
              "name": "move",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "start": 328,
      "end": 365,
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 340,
        "name": "Mammal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 349,
        "end": 355,
        "name": "Animal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 356,
        "end": 365,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 358,
            "end": 363,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 358,
              "end": 362,
              "name": "milk",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "start": 366,
      "end": 404,
      "id": {
        "type": "Identifier",
        "start": 372,
        "end": 379,
        "name": "Giraffe",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 388,
        "end": 394,
        "name": "Mammal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 395,
        "end": 404,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 397,
            "end": 402,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 397,
              "end": 401,
              "name": "neck",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "FunctionDeclaration",
      "start": 406,
      "end": 587,
      "id": {
        "type": "Identifier",
        "start": 415,
        "end": 418,
        "name": "fn1",
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
          "start": 419,
          "end": 457,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 420,
            "end": 457,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 422,
              "end": 457,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 422,
                  "end": 435,
                  "typeName": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 427,
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 427,
                    "end": 435,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 428,
                        "end": 434
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 436,
                  "end": 449,
                  "typeName": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 441,
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 441,
                    "end": 449,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 442,
                        "end": 448
                      }
                    ]
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 450,
                  "end": 457
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 459,
        "end": 587,
        "body": [
          {
            "type": "IfStatement",
            "start": 462,
            "end": 585,
            "test": {
              "type": "BinaryExpression",
              "start": 465,
              "end": 483,
              "left": {
                "type": "Identifier",
                "start": 465,
                "end": 466,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 478,
                "end": 483,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 485,
              "end": 585,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 572,
                  "end": 582,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 576,
                      "end": 581,
                      "id": {
                        "type": "Identifier",
                        "start": 576,
                        "end": 577,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 580,
                        "end": 581,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 589,
      "end": 700,
      "id": {
        "type": "Identifier",
        "start": 598,
        "end": 601,
        "name": "fn2",
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
          "start": 602,
          "end": 609,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 603,
            "end": 609,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 605,
              "end": 609,
              "typeName": {
                "type": "Identifier",
                "start": 605,
                "end": 609,
                "name": "Base",
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
        "start": 611,
        "end": 700,
        "body": [
          {
            "type": "IfStatement",
            "start": 614,
            "end": 698,
            "test": {
              "type": "BinaryExpression",
              "start": 617,
              "end": 638,
              "left": {
                "type": "Identifier",
                "start": 617,
                "end": 618,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 630,
                "end": 638,
                "name": "Derived1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 640,
              "end": 698,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 685,
                  "end": 695,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 689,
                      "end": 694,
                      "id": {
                        "type": "Identifier",
                        "start": 689,
                        "end": 690,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 693,
                        "end": 694,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 702,
      "end": 823,
      "id": {
        "type": "Identifier",
        "start": 711,
        "end": 714,
        "name": "fn3",
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
          "start": 715,
          "end": 731,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 716,
            "end": 731,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 718,
              "end": 731,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 718,
                  "end": 722,
                  "typeName": {
                    "type": "Identifier",
                    "start": 718,
                    "end": 722,
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 723,
                  "end": 731,
                  "typeName": {
                    "type": "Identifier",
                    "start": 723,
                    "end": 731,
                    "name": "Derived1",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 733,
        "end": 823,
        "body": [
          {
            "type": "IfStatement",
            "start": 736,
            "end": 821,
            "test": {
              "type": "BinaryExpression",
              "start": 739,
              "end": 760,
              "left": {
                "type": "Identifier",
                "start": 739,
                "end": 740,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 752,
                "end": 760,
                "name": "Derived2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 762,
              "end": 821,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 808,
                  "end": 818,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 812,
                      "end": 817,
                      "id": {
                        "type": "Identifier",
                        "start": 812,
                        "end": 813,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 816,
                        "end": 817,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 825,
      "end": 940,
      "id": {
        "type": "Identifier",
        "start": 834,
        "end": 837,
        "name": "fn4",
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
          "start": 838,
          "end": 854,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 839,
            "end": 854,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 841,
              "end": 854,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 841,
                  "end": 845,
                  "typeName": {
                    "type": "Identifier",
                    "start": 841,
                    "end": 845,
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 846,
                  "end": 854,
                  "typeName": {
                    "type": "Identifier",
                    "start": 846,
                    "end": 854,
                    "name": "Derived2",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 856,
        "end": 940,
        "body": [
          {
            "type": "IfStatement",
            "start": 859,
            "end": 938,
            "test": {
              "type": "BinaryExpression",
              "start": 862,
              "end": 883,
              "left": {
                "type": "Identifier",
                "start": 862,
                "end": 863,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 875,
                "end": 883,
                "name": "Derived1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 885,
              "end": 938,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 925,
                  "end": 935,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 929,
                      "end": 934,
                      "id": {
                        "type": "Identifier",
                        "start": 929,
                        "end": 930,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 933,
                        "end": 934,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 942,
      "end": 1053,
      "id": {
        "type": "Identifier",
        "start": 951,
        "end": 954,
        "name": "fn5",
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
          "start": 955,
          "end": 966,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 956,
            "end": 966,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 958,
              "end": 966,
              "typeName": {
                "type": "Identifier",
                "start": 958,
                "end": 966,
                "name": "Derived1",
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
        "start": 968,
        "end": 1053,
        "body": [
          {
            "type": "IfStatement",
            "start": 971,
            "end": 1051,
            "test": {
              "type": "BinaryExpression",
              "start": 974,
              "end": 995,
              "left": {
                "type": "Identifier",
                "start": 974,
                "end": 975,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 987,
                "end": 995,
                "name": "Derived2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 997,
              "end": 1051,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1038,
                  "end": 1048,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1042,
                      "end": 1047,
                      "id": {
                        "type": "Identifier",
                        "start": 1042,
                        "end": 1043,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1046,
                        "end": 1047,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1055,
      "end": 1170,
      "id": {
        "type": "Identifier",
        "start": 1064,
        "end": 1067,
        "name": "fn6",
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
          "start": 1068,
          "end": 1084,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1069,
            "end": 1084,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1071,
              "end": 1084,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1071,
                  "end": 1077,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1071,
                    "end": 1077,
                    "name": "Animal",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1078,
                  "end": 1084,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1078,
                    "end": 1084,
                    "name": "Mammal",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1086,
        "end": 1170,
        "body": [
          {
            "type": "IfStatement",
            "start": 1089,
            "end": 1168,
            "test": {
              "type": "BinaryExpression",
              "start": 1092,
              "end": 1112,
              "left": {
                "type": "Identifier",
                "start": 1092,
                "end": 1093,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 1105,
                "end": 1112,
                "name": "Giraffe",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1114,
              "end": 1168,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1155,
                  "end": 1165,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1159,
                      "end": 1164,
                      "id": {
                        "type": "Identifier",
                        "start": 1159,
                        "end": 1160,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1163,
                        "end": 1164,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1172,
      "end": 1345,
      "id": {
        "type": "Identifier",
        "start": 1181,
        "end": 1184,
        "name": "fn7",
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
          "start": 1185,
          "end": 1215,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1186,
            "end": 1215,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1188,
              "end": 1215,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1188,
                  "end": 1201,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1188,
                    "end": 1193,
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1193,
                    "end": 1201,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1194,
                        "end": 1200
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1202,
                  "end": 1215,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1202,
                    "end": 1207,
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1207,
                    "end": 1215,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1208,
                        "end": 1214
                      }
                    ]
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1217,
        "end": 1345,
        "body": [
          {
            "type": "IfStatement",
            "start": 1220,
            "end": 1343,
            "test": {
              "type": "BinaryExpression",
              "start": 1223,
              "end": 1241,
              "left": {
                "type": "Identifier",
                "start": 1223,
                "end": 1224,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 1236,
                "end": 1241,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1243,
              "end": 1343,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1330,
                  "end": 1340,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1334,
                      "end": 1339,
                      "id": {
                        "type": "Identifier",
                        "start": 1334,
                        "end": 1335,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1338,
                        "end": 1339,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1347,
      "end": 1368,
      "id": {
        "type": "Identifier",
        "start": 1357,
        "end": 1362,
        "name": "Alpha",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1363,
        "end": 1368,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1365,
            "end": 1366,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1365,
              "end": 1366,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1369,
      "end": 1389,
      "id": {
        "type": "Identifier",
        "start": 1379,
        "end": 1383,
        "name": "Beta",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1384,
        "end": 1389,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1386,
            "end": 1387,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1386,
              "end": 1387,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1390,
      "end": 1411,
      "id": {
        "type": "Identifier",
        "start": 1400,
        "end": 1405,
        "name": "Gamma",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1406,
        "end": 1411,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1408,
            "end": 1409,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1408,
              "end": 1409,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1412,
      "end": 1434,
      "id": {
        "type": "Identifier",
        "start": 1418,
        "end": 1421,
        "name": "ABC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1422,
        "end": 1434,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1424,
            "end": 1426,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1424,
              "end": 1425,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1427,
            "end": 1429,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1427,
              "end": 1428,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1430,
            "end": 1432,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1430,
              "end": 1431,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "FunctionDeclaration",
      "start": 1435,
      "end": 1512,
      "id": {
        "type": "Identifier",
        "start": 1444,
        "end": 1447,
        "name": "fn8",
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
          "start": 1448,
          "end": 1467,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1449,
            "end": 1467,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1451,
              "end": 1467,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1451,
                  "end": 1456,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1451,
                    "end": 1456,
                    "name": "Alpha",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1457,
                  "end": 1461,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1457,
                    "end": 1461,
                    "name": "Beta",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1462,
                  "end": 1467,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1462,
                    "end": 1467,
                    "name": "Gamma",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1469,
        "end": 1512,
        "body": [
          {
            "type": "IfStatement",
            "start": 1472,
            "end": 1510,
            "test": {
              "type": "BinaryExpression",
              "start": 1475,
              "end": 1491,
              "left": {
                "type": "Identifier",
                "start": 1475,
                "end": 1476,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 1488,
                "end": 1491,
                "name": "ABC",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1493,
              "end": 1510,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1497,
                  "end": 1507,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1501,
                      "end": 1506,
                      "id": {
                        "type": "Identifier",
                        "start": 1501,
                        "end": 1502,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1505,
                        "end": 1506,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

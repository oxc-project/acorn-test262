__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 137,
  "end": 1436,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 137,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 147,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 148,
        "end": 164,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 150,
            "end": 162,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 153,
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
              "start": 153,
              "end": 161,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 155,
                "end": 161
              }
            },
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
      "start": 165,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 178,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 187,
        "end": 191,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 192,
        "end": 208,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 194,
            "end": 206,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 194,
              "end": 197,
              "name": "bar",
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
              "start": 197,
              "end": 205,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 199,
                "end": 205
              }
            },
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
      "start": 209,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 223,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 232,
        "end": 239,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 240,
        "end": 256,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 242,
            "end": 254,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 245,
              "name": "baz",
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
              "start": 245,
              "end": 253,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 247,
                "end": 253
              }
            },
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
      "type": "TSModuleDeclaration",
      "start": 258,
      "end": 823,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 282,
        "name": "TargetHasOptional",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 283,
        "end": 823,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 304,
            "end": 342,
            "id": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 316,
              "end": 342,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 326,
                  "end": 336,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 329,
                    "name": "opt",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 330,
                    "end": 336,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 332,
                      "end": 336,
                      "typeName": {
                        "type": "Identifier",
                        "start": 332,
                        "end": 336,
                        "name": "Base",
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
            "type": "VariableDeclaration",
            "start": 347,
            "end": 356,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 351,
                "end": 355,
                "id": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 355,
                  "name": "c",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 352,
                    "end": 355,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 354,
                      "end": 355,
                      "typeName": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 355,
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
            "start": 362,
            "end": 384,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 366,
                "end": 384,
                "id": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 384,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 367,
                    "end": 384,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 369,
                      "end": 384,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 371,
                          "end": 382,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 371,
                            "end": 374,
                            "name": "opt",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 375,
                            "end": 381,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 377,
                              "end": 381,
                              "typeName": {
                                "type": "Identifier",
                                "start": 377,
                                "end": 381,
                                "name": "Base",
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
            "start": 389,
            "end": 426,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 393,
                "end": 426,
                "id": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 404,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 394,
                    "end": 404,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 396,
                      "end": 404,
                      "exprName": {
                        "type": "Identifier",
                        "start": 403,
                        "end": 404,
                        "name": "a",
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
                  "type": "ObjectExpression",
                  "start": 407,
                  "end": 426,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 409,
                      "end": 424,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 412,
                        "name": "opt",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "NewExpression",
                        "start": 414,
                        "end": 424,
                        "callee": {
                          "type": "Identifier",
                          "start": 418,
                          "end": 422,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
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
            "type": "TSInterfaceDeclaration",
            "start": 447,
            "end": 487,
            "id": {
              "type": "Identifier",
              "start": 457,
              "end": 458,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 459,
              "end": 487,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 469,
                  "end": 481,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 469,
                    "end": 474,
                    "name": "other",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 474,
                    "end": 480,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 476,
                      "end": 480,
                      "typeName": {
                        "type": "Identifier",
                        "start": 476,
                        "end": 480,
                        "name": "Base",
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
            "type": "TSInterfaceDeclaration",
            "start": 492,
            "end": 535,
            "id": {
              "type": "Identifier",
              "start": 502,
              "end": 503,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 504,
              "end": 535,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 514,
                  "end": 529,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 514,
                    "end": 519,
                    "name": "other",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 519,
                    "end": 528,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 521,
                      "end": 528,
                      "typeName": {
                        "type": "Identifier",
                        "start": 521,
                        "end": 528,
                        "name": "Derived",
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
            "type": "TSInterfaceDeclaration",
            "start": 540,
            "end": 584,
            "id": {
              "type": "Identifier",
              "start": 550,
              "end": 551,
              "name": "F",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 552,
              "end": 584,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 562,
                  "end": 578,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 562,
                    "end": 567,
                    "name": "other",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 568,
                    "end": 577,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 570,
                      "end": 577,
                      "typeName": {
                        "type": "Identifier",
                        "start": 570,
                        "end": 577,
                        "name": "Derived",
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
            "type": "VariableDeclaration",
            "start": 589,
            "end": 598,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 593,
                "end": 597,
                "id": {
                  "type": "Identifier",
                  "start": 593,
                  "end": 597,
                  "name": "d",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 594,
                    "end": 597,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 596,
                      "end": 597,
                      "typeName": {
                        "type": "Identifier",
                        "start": 596,
                        "end": 597,
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
            "start": 603,
            "end": 612,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 607,
                "end": 611,
                "id": {
                  "type": "Identifier",
                  "start": 607,
                  "end": 611,
                  "name": "e",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 608,
                    "end": 611,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 610,
                      "end": 611,
                      "typeName": {
                        "type": "Identifier",
                        "start": 610,
                        "end": 611,
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
            "type": "VariableDeclaration",
            "start": 617,
            "end": 626,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 621,
                "end": 625,
                "id": {
                  "type": "Identifier",
                  "start": 621,
                  "end": 625,
                  "name": "f",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 622,
                    "end": 625,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 624,
                      "end": 625,
                      "typeName": {
                        "type": "Identifier",
                        "start": 624,
                        "end": 625,
                        "name": "F",
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
            "start": 672,
            "end": 678,
            "expression": {
              "type": "AssignmentExpression",
              "start": 672,
              "end": 677,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 672,
                "end": 673,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 676,
                "end": 677,
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
            "start": 683,
            "end": 689,
            "expression": {
              "type": "AssignmentExpression",
              "start": 683,
              "end": 688,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 683,
                "end": 684,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 687,
                "end": 688,
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
            "start": 694,
            "end": 700,
            "expression": {
              "type": "AssignmentExpression",
              "start": 694,
              "end": 699,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 694,
                "end": 695,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 698,
                "end": 699,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 705,
            "end": 711,
            "expression": {
              "type": "AssignmentExpression",
              "start": 705,
              "end": 710,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 705,
                "end": 706,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 709,
                "end": 710,
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 720,
                "end": 721,
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
            "start": 727,
            "end": 733,
            "expression": {
              "type": "AssignmentExpression",
              "start": 727,
              "end": 732,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 727,
                "end": 728,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 731,
                "end": 732,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 738,
            "end": 744,
            "expression": {
              "type": "AssignmentExpression",
              "start": 738,
              "end": 743,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 738,
                "end": 739,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 742,
                "end": 743,
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
            "start": 749,
            "end": 755,
            "expression": {
              "type": "AssignmentExpression",
              "start": 749,
              "end": 754,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 749,
                "end": 750,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 753,
                "end": 754,
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
            "start": 760,
            "end": 766,
            "expression": {
              "type": "AssignmentExpression",
              "start": 760,
              "end": 765,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 760,
                "end": 761,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 764,
                "end": 765,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 782,
            "end": 788,
            "expression": {
              "type": "AssignmentExpression",
              "start": 782,
              "end": 787,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 782,
                "end": 783,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 786,
                "end": 787,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 793,
            "end": 799,
            "expression": {
              "type": "AssignmentExpression",
              "start": 793,
              "end": 798,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 793,
                "end": 794,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 797,
                "end": 798,
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
            "start": 804,
            "end": 810,
            "expression": {
              "type": "AssignmentExpression",
              "start": 804,
              "end": 809,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 804,
                "end": 805,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 808,
                "end": 809,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 815,
            "end": 821,
            "expression": {
              "type": "AssignmentExpression",
              "start": 815,
              "end": 820,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 815,
                "end": 816,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 819,
                "end": 820,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 825,
      "end": 1435,
      "id": {
        "type": "Identifier",
        "start": 832,
        "end": 849,
        "name": "SourceHasOptional",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 850,
        "end": 1435,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 871,
            "end": 908,
            "id": {
              "type": "Identifier",
              "start": 881,
              "end": 882,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 883,
              "end": 908,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 893,
                  "end": 902,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 893,
                    "end": 896,
                    "name": "opt",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 896,
                    "end": 902,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 898,
                      "end": 902,
                      "typeName": {
                        "type": "Identifier",
                        "start": 898,
                        "end": 902,
                        "name": "Base",
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
            "type": "VariableDeclaration",
            "start": 913,
            "end": 922,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 917,
                "end": 921,
                "id": {
                  "type": "Identifier",
                  "start": 917,
                  "end": 921,
                  "name": "c",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 918,
                    "end": 921,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 920,
                      "end": 921,
                      "typeName": {
                        "type": "Identifier",
                        "start": 920,
                        "end": 921,
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
            "start": 928,
            "end": 949,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 932,
                "end": 949,
                "id": {
                  "type": "Identifier",
                  "start": 932,
                  "end": 949,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 933,
                    "end": 949,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 935,
                      "end": 949,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 937,
                          "end": 947,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 937,
                            "end": 940,
                            "name": "opt",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 940,
                            "end": 946,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 942,
                              "end": 946,
                              "typeName": {
                                "type": "Identifier",
                                "start": 942,
                                "end": 946,
                                "name": "Base",
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
            "start": 954,
            "end": 981,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 958,
                "end": 981,
                "id": {
                  "type": "Identifier",
                  "start": 958,
                  "end": 959,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 962,
                  "end": 981,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 964,
                      "end": 979,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 964,
                        "end": 967,
                        "name": "opt",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "NewExpression",
                        "start": 969,
                        "end": 979,
                        "callee": {
                          "type": "Identifier",
                          "start": 973,
                          "end": 977,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
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
            "type": "TSInterfaceDeclaration",
            "start": 1002,
            "end": 1043,
            "id": {
              "type": "Identifier",
              "start": 1012,
              "end": 1013,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1014,
              "end": 1043,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1024,
                  "end": 1037,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1024,
                    "end": 1029,
                    "name": "other",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1030,
                    "end": 1036,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1032,
                      "end": 1036,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1032,
                        "end": 1036,
                        "name": "Base",
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
            "type": "TSInterfaceDeclaration",
            "start": 1048,
            "end": 1092,
            "id": {
              "type": "Identifier",
              "start": 1058,
              "end": 1059,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1060,
              "end": 1092,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1070,
                  "end": 1086,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1070,
                    "end": 1075,
                    "name": "other",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1076,
                    "end": 1085,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1078,
                      "end": 1085,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1078,
                        "end": 1085,
                        "name": "Derived",
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
            "type": "TSInterfaceDeclaration",
            "start": 1097,
            "end": 1140,
            "id": {
              "type": "Identifier",
              "start": 1107,
              "end": 1108,
              "name": "F",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1109,
              "end": 1140,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1119,
                  "end": 1134,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1119,
                    "end": 1124,
                    "name": "other",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1124,
                    "end": 1133,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1126,
                      "end": 1133,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1126,
                        "end": 1133,
                        "name": "Derived",
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
            "type": "VariableDeclaration",
            "start": 1145,
            "end": 1154,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1149,
                "end": 1153,
                "id": {
                  "type": "Identifier",
                  "start": 1149,
                  "end": 1153,
                  "name": "d",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1150,
                    "end": 1153,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1152,
                      "end": 1153,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1152,
                        "end": 1153,
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
            "start": 1159,
            "end": 1168,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1163,
                "end": 1167,
                "id": {
                  "type": "Identifier",
                  "start": 1163,
                  "end": 1167,
                  "name": "e",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1164,
                    "end": 1167,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1166,
                      "end": 1167,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1166,
                        "end": 1167,
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
            "type": "VariableDeclaration",
            "start": 1173,
            "end": 1182,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1177,
                "end": 1181,
                "id": {
                  "type": "Identifier",
                  "start": 1177,
                  "end": 1181,
                  "name": "f",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1178,
                    "end": 1181,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1180,
                      "end": 1181,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1180,
                        "end": 1181,
                        "name": "F",
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
            "start": 1188,
            "end": 1194,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1188,
              "end": 1193,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1188,
                "end": 1189,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1192,
                "end": 1193,
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
            "start": 1208,
            "end": 1214,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1208,
              "end": 1213,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1208,
                "end": 1209,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1212,
                "end": 1213,
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
            "start": 1228,
            "end": 1234,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1228,
              "end": 1233,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1228,
                "end": 1229,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1232,
                "end": 1233,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1248,
            "end": 1254,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1248,
              "end": 1253,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1248,
                "end": 1249,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1252,
                "end": 1253,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1266,
            "end": 1272,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1266,
              "end": 1271,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1266,
                "end": 1267,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1270,
                "end": 1271,
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
            "start": 1286,
            "end": 1292,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1286,
              "end": 1291,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1286,
                "end": 1287,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1290,
                "end": 1291,
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
            "start": 1306,
            "end": 1312,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1306,
              "end": 1311,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1306,
                "end": 1307,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1310,
                "end": 1311,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1326,
            "end": 1332,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1326,
              "end": 1331,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1326,
                "end": 1327,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1330,
                "end": 1331,
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
            "start": 1344,
            "end": 1350,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1344,
              "end": 1349,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1344,
                "end": 1345,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1348,
                "end": 1349,
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1368,
                "end": 1369,
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
            "start": 1384,
            "end": 1390,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1384,
              "end": 1389,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1384,
                "end": 1385,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1388,
                "end": 1389,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1404,
            "end": 1410,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1404,
              "end": 1409,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1404,
                "end": 1405,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1408,
                "end": 1409,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1421,
            "end": 1427,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1421,
              "end": 1426,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1421,
                "end": 1422,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1425,
                "end": 1426,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

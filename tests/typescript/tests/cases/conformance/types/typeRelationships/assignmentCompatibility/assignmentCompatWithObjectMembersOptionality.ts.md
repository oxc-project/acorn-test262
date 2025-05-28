__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 1310,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 68,
      "end": 95,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 78,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 95,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 81,
            "end": 93,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 84,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 92,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 86,
                "end": 92
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 139,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 109,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 118,
        "end": 122,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 123,
        "end": 139,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 137,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 128,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 136,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 130,
                "end": 136
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 140,
      "end": 187,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 154,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 163,
        "end": 170,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 171,
        "end": 187,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 173,
            "end": 185,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 176,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 184,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 178,
                "end": 184
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 189,
      "end": 713,
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 213,
        "decorators": [],
        "name": "TargetHasOptional",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 214,
        "end": 713,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 235,
            "end": 273,
            "id": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 247,
              "end": 273,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 257,
                  "end": 267,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 260,
                    "decorators": [],
                    "name": "opt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 261,
                    "end": 267,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 263,
                      "end": 267,
                      "typeName": {
                        "type": "Identifier",
                        "start": 263,
                        "end": 267,
                        "decorators": [],
                        "name": "Base",
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
            "type": "VariableDeclaration",
            "start": 278,
            "end": 287,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 282,
                "end": 286,
                "id": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 286,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 283,
                    "end": 286,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 285,
                      "end": 286,
                      "typeName": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 286,
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
            "start": 293,
            "end": 315,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 297,
                "end": 315,
                "id": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 315,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 298,
                    "end": 315,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 300,
                      "end": 315,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 302,
                          "end": 313,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 302,
                            "end": 305,
                            "decorators": [],
                            "name": "opt",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 306,
                            "end": 312,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 308,
                              "end": 312,
                              "typeName": {
                                "type": "Identifier",
                                "start": 308,
                                "end": 312,
                                "decorators": [],
                                "name": "Base",
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
            "start": 320,
            "end": 357,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 324,
                "end": 357,
                "id": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 335,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 325,
                    "end": 335,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 327,
                      "end": 335,
                      "exprName": {
                        "type": "Identifier",
                        "start": 334,
                        "end": 335,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 338,
                  "end": 357,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 340,
                      "end": 355,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 340,
                        "end": 343,
                        "decorators": [],
                        "name": "opt",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "NewExpression",
                        "start": 345,
                        "end": 355,
                        "callee": {
                          "type": "Identifier",
                          "start": 349,
                          "end": 353,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": []
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
            "type": "TSInterfaceDeclaration",
            "start": 378,
            "end": 416,
            "id": {
              "type": "Identifier",
              "start": 388,
              "end": 389,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 390,
              "end": 416,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 400,
                  "end": 410,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 400,
                    "end": 403,
                    "decorators": [],
                    "name": "opt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 403,
                    "end": 409,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 405,
                      "end": 409,
                      "typeName": {
                        "type": "Identifier",
                        "start": 405,
                        "end": 409,
                        "decorators": [],
                        "name": "Base",
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
            "start": 421,
            "end": 462,
            "id": {
              "type": "Identifier",
              "start": 431,
              "end": 432,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 433,
              "end": 462,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 443,
                  "end": 456,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 443,
                    "end": 446,
                    "decorators": [],
                    "name": "opt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 446,
                    "end": 455,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 448,
                      "end": 455,
                      "typeName": {
                        "type": "Identifier",
                        "start": 448,
                        "end": 455,
                        "decorators": [],
                        "name": "Derived",
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
            "start": 467,
            "end": 509,
            "id": {
              "type": "Identifier",
              "start": 477,
              "end": 478,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 479,
              "end": 509,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 489,
                  "end": 503,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 492,
                    "decorators": [],
                    "name": "opt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 493,
                    "end": 502,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 495,
                      "end": 502,
                      "typeName": {
                        "type": "Identifier",
                        "start": 495,
                        "end": 502,
                        "decorators": [],
                        "name": "Derived",
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
            "type": "VariableDeclaration",
            "start": 514,
            "end": 523,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 518,
                "end": 522,
                "id": {
                  "type": "Identifier",
                  "start": 518,
                  "end": 522,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 519,
                    "end": 522,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 521,
                      "end": 522,
                      "typeName": {
                        "type": "Identifier",
                        "start": 521,
                        "end": 522,
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
            "start": 528,
            "end": 537,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 532,
                "end": 536,
                "id": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 536,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 533,
                    "end": 536,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 535,
                      "end": 536,
                      "typeName": {
                        "type": "Identifier",
                        "start": 535,
                        "end": 536,
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
            "type": "VariableDeclaration",
            "start": 542,
            "end": 551,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 546,
                "end": 550,
                "id": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 550,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 547,
                    "end": 550,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 549,
                      "end": 550,
                      "typeName": {
                        "type": "Identifier",
                        "start": 549,
                        "end": 550,
                        "decorators": [],
                        "name": "F",
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
            "start": 571,
            "end": 577,
            "expression": {
              "type": "AssignmentExpression",
              "start": 571,
              "end": 576,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 571,
                "end": 572,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 575,
                "end": 576,
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
            "start": 582,
            "end": 588,
            "expression": {
              "type": "AssignmentExpression",
              "start": 582,
              "end": 587,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 582,
                "end": 583,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 586,
                "end": 587,
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
            "start": 593,
            "end": 599,
            "expression": {
              "type": "AssignmentExpression",
              "start": 593,
              "end": 598,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 593,
                "end": 594,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 597,
                "end": 598,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 604,
            "end": 610,
            "expression": {
              "type": "AssignmentExpression",
              "start": 604,
              "end": 609,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 604,
                "end": 605,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 608,
                "end": 609,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 616,
            "end": 622,
            "expression": {
              "type": "AssignmentExpression",
              "start": 616,
              "end": 621,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 616,
                "end": 617,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 620,
                "end": 621,
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
            "start": 627,
            "end": 633,
            "expression": {
              "type": "AssignmentExpression",
              "start": 627,
              "end": 632,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 627,
                "end": 628,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 631,
                "end": 632,
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
            "start": 638,
            "end": 644,
            "expression": {
              "type": "AssignmentExpression",
              "start": 638,
              "end": 643,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 638,
                "end": 639,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 642,
                "end": 643,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 649,
            "end": 655,
            "expression": {
              "type": "AssignmentExpression",
              "start": 649,
              "end": 654,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 649,
                "end": 650,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 653,
                "end": 654,
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
            "start": 661,
            "end": 667,
            "expression": {
              "type": "AssignmentExpression",
              "start": 661,
              "end": 666,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 661,
                "end": 662,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 665,
                "end": 666,
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
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 676,
                "end": 677,
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
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 687,
                "end": 688,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 698,
                "end": 699,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 709,
                "end": 710,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
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
      "start": 715,
      "end": 1310,
      "id": {
        "type": "Identifier",
        "start": 722,
        "end": 739,
        "decorators": [],
        "name": "SourceHasOptional",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 740,
        "end": 1310,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 761,
            "end": 798,
            "id": {
              "type": "Identifier",
              "start": 771,
              "end": 772,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 773,
              "end": 798,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 783,
                  "end": 792,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 783,
                    "end": 786,
                    "decorators": [],
                    "name": "opt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 786,
                    "end": 792,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 788,
                      "end": 792,
                      "typeName": {
                        "type": "Identifier",
                        "start": 788,
                        "end": 792,
                        "decorators": [],
                        "name": "Base",
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
            "type": "VariableDeclaration",
            "start": 803,
            "end": 812,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 807,
                "end": 811,
                "id": {
                  "type": "Identifier",
                  "start": 807,
                  "end": 811,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 808,
                    "end": 811,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 810,
                      "end": 811,
                      "typeName": {
                        "type": "Identifier",
                        "start": 810,
                        "end": 811,
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
            "start": 818,
            "end": 839,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 822,
                "end": 839,
                "id": {
                  "type": "Identifier",
                  "start": 822,
                  "end": 839,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 823,
                    "end": 839,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 825,
                      "end": 839,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 827,
                          "end": 837,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 827,
                            "end": 830,
                            "decorators": [],
                            "name": "opt",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 830,
                            "end": 836,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 832,
                              "end": 836,
                              "typeName": {
                                "type": "Identifier",
                                "start": 832,
                                "end": 836,
                                "decorators": [],
                                "name": "Base",
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
            "start": 844,
            "end": 871,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 848,
                "end": 871,
                "id": {
                  "type": "Identifier",
                  "start": 848,
                  "end": 849,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 852,
                  "end": 871,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 854,
                      "end": 869,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 854,
                        "end": 857,
                        "decorators": [],
                        "name": "opt",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "NewExpression",
                        "start": 859,
                        "end": 869,
                        "callee": {
                          "type": "Identifier",
                          "start": 863,
                          "end": 867,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": []
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
            "type": "TSInterfaceDeclaration",
            "start": 892,
            "end": 931,
            "id": {
              "type": "Identifier",
              "start": 902,
              "end": 903,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 904,
              "end": 931,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 914,
                  "end": 925,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 914,
                    "end": 917,
                    "decorators": [],
                    "name": "opt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 918,
                    "end": 924,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 920,
                      "end": 924,
                      "typeName": {
                        "type": "Identifier",
                        "start": 920,
                        "end": 924,
                        "decorators": [],
                        "name": "Base",
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
            "start": 936,
            "end": 978,
            "id": {
              "type": "Identifier",
              "start": 946,
              "end": 947,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 948,
              "end": 978,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 958,
                  "end": 972,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 958,
                    "end": 961,
                    "decorators": [],
                    "name": "opt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 962,
                    "end": 971,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 964,
                      "end": 971,
                      "typeName": {
                        "type": "Identifier",
                        "start": 964,
                        "end": 971,
                        "decorators": [],
                        "name": "Derived",
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
            "start": 983,
            "end": 1024,
            "id": {
              "type": "Identifier",
              "start": 993,
              "end": 994,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 995,
              "end": 1024,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1005,
                  "end": 1018,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1005,
                    "end": 1008,
                    "decorators": [],
                    "name": "opt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1008,
                    "end": 1017,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1010,
                      "end": 1017,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1010,
                        "end": 1017,
                        "decorators": [],
                        "name": "Derived",
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
            "type": "VariableDeclaration",
            "start": 1029,
            "end": 1038,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1033,
                "end": 1037,
                "id": {
                  "type": "Identifier",
                  "start": 1033,
                  "end": 1037,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1034,
                    "end": 1037,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1036,
                      "end": 1037,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1036,
                        "end": 1037,
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
            "start": 1043,
            "end": 1052,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1047,
                "end": 1051,
                "id": {
                  "type": "Identifier",
                  "start": 1047,
                  "end": 1051,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1048,
                    "end": 1051,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1050,
                      "end": 1051,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1050,
                        "end": 1051,
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
            "type": "VariableDeclaration",
            "start": 1057,
            "end": 1066,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1061,
                "end": 1065,
                "id": {
                  "type": "Identifier",
                  "start": 1061,
                  "end": 1065,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1062,
                    "end": 1065,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1064,
                      "end": 1065,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1064,
                        "end": 1065,
                        "decorators": [],
                        "name": "F",
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
            "start": 1072,
            "end": 1078,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1072,
              "end": 1077,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1072,
                "end": 1073,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1076,
                "end": 1077,
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
            "start": 1092,
            "end": 1098,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1092,
              "end": 1097,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1092,
                "end": 1093,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1096,
                "end": 1097,
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
            "start": 1112,
            "end": 1118,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1112,
              "end": 1117,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1112,
                "end": 1113,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1116,
                "end": 1117,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1129,
            "end": 1135,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1129,
              "end": 1134,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1129,
                "end": 1130,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1133,
                "end": 1134,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1147,
            "end": 1153,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1147,
              "end": 1152,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1147,
                "end": 1148,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1151,
                "end": 1152,
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
            "start": 1167,
            "end": 1173,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1167,
              "end": 1172,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1167,
                "end": 1168,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1171,
                "end": 1172,
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
            "start": 1187,
            "end": 1193,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1187,
              "end": 1192,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1187,
                "end": 1188,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1191,
                "end": 1192,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1204,
            "end": 1210,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1204,
              "end": 1209,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1204,
                "end": 1205,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1208,
                "end": 1209,
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
            "start": 1222,
            "end": 1228,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1222,
              "end": 1227,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1222,
                "end": 1223,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1226,
                "end": 1227,
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
            "start": 1242,
            "end": 1248,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1242,
              "end": 1247,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1242,
                "end": 1243,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1246,
                "end": 1247,
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
            "start": 1262,
            "end": 1268,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1262,
              "end": 1267,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1262,
                "end": 1263,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1266,
                "end": 1267,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1279,
            "end": 1285,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1279,
              "end": 1284,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1279,
                "end": 1280,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1283,
                "end": 1284,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1296,
            "end": 1302,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1296,
              "end": 1301,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1296,
                "end": 1297,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1300,
                "end": 1301,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
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

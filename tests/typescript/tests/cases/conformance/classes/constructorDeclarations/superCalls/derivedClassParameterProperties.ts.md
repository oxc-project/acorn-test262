__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 94,
  "end": 1512,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 94,
      "end": 123,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 104,
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
        "start": 105,
        "end": 123,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 111,
            "end": 121,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 120,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 114,
                "end": 120
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
      "start": 125,
      "end": 226,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 138,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 147,
        "end": 151,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 152,
        "end": 226,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 158,
            "end": 224,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 169,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 169,
              "end": 224,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 170,
                  "end": 179,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 171,
                    "end": 179,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 173,
                      "end": 179
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 224,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 191,
                    "end": 201,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 195,
                        "end": 200,
                        "id": {
                          "type": "Identifier",
                          "start": 195,
                          "end": 196,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 199,
                          "end": 200,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 210,
                    "end": 218,
                    "expression": {
                      "type": "CallExpression",
                      "start": 210,
                      "end": 217,
                      "callee": {
                        "type": "Super",
                        "start": 210,
                        "end": 215
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "start": 228,
      "end": 337,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 242,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 251,
        "end": 255,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 256,
        "end": 337,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 262,
            "end": 335,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 262,
              "end": 273,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 273,
              "end": 335,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 274,
                  "end": 290,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 281,
                    "end": 290,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 282,
                      "end": 290,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 284,
                        "end": 290
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 292,
                "end": 335,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 302,
                    "end": 312,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 306,
                        "end": 311,
                        "id": {
                          "type": "Identifier",
                          "start": 306,
                          "end": 307,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 310,
                          "end": 311,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 321,
                    "end": 329,
                    "expression": {
                      "type": "CallExpression",
                      "start": 321,
                      "end": 328,
                      "callee": {
                        "type": "Super",
                        "start": 321,
                        "end": 326
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "start": 339,
      "end": 448,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 353,
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 362,
        "end": 366,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 367,
        "end": 448,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 373,
            "end": 446,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 373,
              "end": 384,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 384,
              "end": 446,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 385,
                  "end": 401,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 401,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 393,
                      "end": 401,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 395,
                        "end": 401
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 403,
                "end": 446,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 413,
                    "end": 421,
                    "expression": {
                      "type": "CallExpression",
                      "start": 413,
                      "end": 420,
                      "callee": {
                        "type": "Super",
                        "start": 413,
                        "end": 418
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 430,
                    "end": 440,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 434,
                        "end": 439,
                        "id": {
                          "type": "Identifier",
                          "start": 434,
                          "end": 435,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 438,
                          "end": 439,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "start": 450,
      "end": 563,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 456,
        "end": 464,
        "decorators": [],
        "name": "Derived4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 473,
        "end": 477,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 478,
        "end": 563,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 484,
            "end": 490,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 484,
              "end": 485,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 488,
              "end": 489,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 495,
            "end": 561,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 495,
              "end": 506,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 506,
              "end": 561,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 507,
                  "end": 516,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 508,
                    "end": 516,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 510,
                      "end": 516
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 518,
                "end": 561,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 528,
                    "end": 538,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 532,
                        "end": 537,
                        "id": {
                          "type": "Identifier",
                          "start": 532,
                          "end": 533,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 536,
                          "end": 537,
                          "value": 2,
                          "raw": "2"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 547,
                    "end": 555,
                    "expression": {
                      "type": "CallExpression",
                      "start": 547,
                      "end": 554,
                      "callee": {
                        "type": "Super",
                        "start": 547,
                        "end": 552
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "start": 565,
      "end": 678,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 571,
        "end": 579,
        "decorators": [],
        "name": "Derived5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 588,
        "end": 592,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 593,
        "end": 678,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 599,
            "end": 605,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 599,
              "end": 600,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 603,
              "end": 604,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 610,
            "end": 676,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 610,
              "end": 621,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 621,
              "end": 676,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 622,
                  "end": 631,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 623,
                    "end": 631,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 625,
                      "end": 631
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 633,
                "end": 676,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 643,
                    "end": 651,
                    "expression": {
                      "type": "CallExpression",
                      "start": 643,
                      "end": 650,
                      "callee": {
                        "type": "Super",
                        "start": 643,
                        "end": 648
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 660,
                    "end": 670,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 664,
                        "end": 669,
                        "id": {
                          "type": "Identifier",
                          "start": 664,
                          "end": 665,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 668,
                          "end": 669,
                          "value": 2,
                          "raw": "2"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "start": 680,
      "end": 817,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 686,
        "end": 694,
        "decorators": [],
        "name": "Derived6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 703,
        "end": 707,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 708,
        "end": 817,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 714,
            "end": 724,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 714,
              "end": 715,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 715,
              "end": 723,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 717,
                "end": 723
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
          },
          {
            "type": "MethodDefinition",
            "start": 729,
            "end": 815,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 729,
              "end": 740,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 740,
              "end": 815,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 741,
                  "end": 750,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 742,
                    "end": 750,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 744,
                      "end": 750
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 752,
                "end": 815,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 762,
                    "end": 773,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 762,
                      "end": 772,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 762,
                        "end": 768,
                        "object": {
                          "type": "ThisExpression",
                          "start": 762,
                          "end": 766
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 767,
                          "end": 768,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 771,
                        "end": 772,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 782,
                    "end": 792,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 786,
                        "end": 791,
                        "id": {
                          "type": "Identifier",
                          "start": 786,
                          "end": 787,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 790,
                          "end": 791,
                          "value": 2,
                          "raw": "2"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 801,
                    "end": 809,
                    "expression": {
                      "type": "CallExpression",
                      "start": 801,
                      "end": 808,
                      "callee": {
                        "type": "Super",
                        "start": 801,
                        "end": 806
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "start": 819,
      "end": 968,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 825,
        "end": 833,
        "decorators": [],
        "name": "Derived7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 842,
        "end": 846,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 847,
        "end": 968,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 853,
            "end": 859,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 853,
              "end": 854,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 857,
              "end": 858,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 864,
            "end": 874,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 864,
              "end": 865,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 865,
              "end": 873,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 867,
                "end": 873
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
          },
          {
            "type": "MethodDefinition",
            "start": 879,
            "end": 966,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 879,
              "end": 890,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 890,
              "end": 966,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 891,
                  "end": 900,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 892,
                    "end": 900,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 894,
                      "end": 900
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 902,
                "end": 966,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 912,
                    "end": 923,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 912,
                      "end": 922,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 912,
                        "end": 918,
                        "object": {
                          "type": "ThisExpression",
                          "start": 912,
                          "end": 916
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 917,
                          "end": 918,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 921,
                        "end": 922,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 932,
                    "end": 943,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 932,
                      "end": 942,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 932,
                        "end": 938,
                        "object": {
                          "type": "ThisExpression",
                          "start": 932,
                          "end": 936
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 937,
                          "end": 938,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 941,
                        "end": 942,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 952,
                    "end": 960,
                    "expression": {
                      "type": "CallExpression",
                      "start": 952,
                      "end": 959,
                      "callee": {
                        "type": "Super",
                        "start": 952,
                        "end": 957
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "start": 970,
      "end": 1127,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 976,
        "end": 984,
        "decorators": [],
        "name": "Derived8",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 993,
        "end": 997,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 998,
        "end": 1127,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1004,
            "end": 1010,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1004,
              "end": 1005,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1008,
              "end": 1009,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1015,
            "end": 1025,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1015,
              "end": 1016,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1016,
              "end": 1024,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1018,
                "end": 1024
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
          },
          {
            "type": "MethodDefinition",
            "start": 1030,
            "end": 1125,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1030,
              "end": 1041,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1041,
              "end": 1125,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1042,
                  "end": 1051,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1043,
                    "end": 1051,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1045,
                      "end": 1051
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1053,
                "end": 1125,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1063,
                    "end": 1071,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1063,
                      "end": 1070,
                      "callee": {
                        "type": "Super",
                        "start": 1063,
                        "end": 1068
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1080,
                    "end": 1091,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1080,
                      "end": 1090,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1080,
                        "end": 1086,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1080,
                          "end": 1084
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1085,
                          "end": 1086,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1089,
                        "end": 1090,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1100,
                    "end": 1111,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1100,
                      "end": 1110,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1100,
                        "end": 1106,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1100,
                          "end": 1104
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1105,
                          "end": 1106,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1109,
                        "end": 1110,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "start": 1171,
      "end": 1195,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1177,
        "end": 1182,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1182,
        "end": 1185,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1183,
            "end": 1184,
            "name": {
              "type": "Identifier",
              "start": 1183,
              "end": 1184,
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
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1186,
        "end": 1195,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1188,
            "end": 1193,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1188,
              "end": 1189,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1189,
              "end": 1192,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1191,
                "end": 1192,
                "typeName": {
                  "type": "Identifier",
                  "start": 1191,
                  "end": 1192,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 1197,
      "end": 1353,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1203,
        "end": 1211,
        "decorators": [],
        "name": "Derived9",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1211,
        "end": 1214,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1212,
            "end": 1213,
            "name": {
              "type": "Identifier",
              "start": 1212,
              "end": 1213,
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
          }
        ]
      },
      "superClass": {
        "type": "Identifier",
        "start": 1223,
        "end": 1228,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1228,
        "end": 1231,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1229,
            "end": 1230,
            "typeName": {
              "type": "Identifier",
              "start": 1229,
              "end": 1230,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1232,
        "end": 1353,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1238,
            "end": 1244,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1238,
              "end": 1239,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1242,
              "end": 1243,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1249,
            "end": 1259,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1249,
              "end": 1250,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1250,
              "end": 1258,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1252,
                "end": 1258
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
          },
          {
            "type": "MethodDefinition",
            "start": 1264,
            "end": 1351,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1264,
              "end": 1275,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1275,
              "end": 1351,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1276,
                  "end": 1285,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1277,
                    "end": 1285,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1279,
                      "end": 1285
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1287,
                "end": 1351,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1297,
                    "end": 1308,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1297,
                      "end": 1307,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1297,
                        "end": 1303,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1297,
                          "end": 1301
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1302,
                          "end": 1303,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1306,
                        "end": 1307,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1317,
                    "end": 1328,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1317,
                      "end": 1327,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1317,
                        "end": 1323,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1317,
                          "end": 1321
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1322,
                          "end": 1323,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1326,
                        "end": 1327,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1337,
                    "end": 1345,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1337,
                      "end": 1344,
                      "callee": {
                        "type": "Super",
                        "start": 1337,
                        "end": 1342
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "start": 1355,
      "end": 1512,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1361,
        "end": 1370,
        "decorators": [],
        "name": "Derived10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1370,
        "end": 1373,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1371,
            "end": 1372,
            "name": {
              "type": "Identifier",
              "start": 1371,
              "end": 1372,
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
          }
        ]
      },
      "superClass": {
        "type": "Identifier",
        "start": 1382,
        "end": 1387,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 1387,
        "end": 1390,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 1388,
            "end": 1389,
            "typeName": {
              "type": "Identifier",
              "start": 1388,
              "end": 1389,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1391,
        "end": 1512,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1397,
            "end": 1403,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1397,
              "end": 1398,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1401,
              "end": 1402,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1408,
            "end": 1418,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1408,
              "end": 1409,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1409,
              "end": 1417,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1411,
                "end": 1417
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
          },
          {
            "type": "MethodDefinition",
            "start": 1423,
            "end": 1510,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1423,
              "end": 1434,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1434,
              "end": 1510,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1435,
                  "end": 1444,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1436,
                    "end": 1444,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1438,
                      "end": 1444
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1446,
                "end": 1510,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1456,
                    "end": 1464,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1456,
                      "end": 1463,
                      "callee": {
                        "type": "Super",
                        "start": 1456,
                        "end": 1461
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1473,
                    "end": 1484,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1473,
                      "end": 1483,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1473,
                        "end": 1479,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1473,
                          "end": 1477
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1478,
                          "end": 1479,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1482,
                        "end": 1483,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1493,
                    "end": 1504,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1493,
                      "end": 1503,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1493,
                        "end": 1499,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1493,
                          "end": 1497
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1498,
                          "end": 1499,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1502,
                        "end": 1503,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 896,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 94,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 34,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "name": "x",
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
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            },
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 92,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 92,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 92,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 71,
                    "end": 86,
                    "argument": {
                      "type": "Literal",
                      "start": 78,
                      "end": 85,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 52,
                "end": 60,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 54,
                  "end": 60
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
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
      "start": 96,
      "end": 847,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 114,
        "end": 847,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 120,
            "end": 140,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "name": "y",
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
              "start": 131,
              "end": 139,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 133,
                "end": 139
              }
            },
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 845,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 146,
              "end": 845,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 149,
                "end": 845,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 159,
                    "end": 175,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 163,
                        "end": 174,
                        "id": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 165,
                          "name": "t1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 168,
                          "end": 174,
                          "object": {
                            "type": "ThisExpression",
                            "start": 168,
                            "end": 172
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 174,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
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
                    "start": 184,
                    "end": 202,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 188,
                        "end": 201,
                        "id": {
                          "type": "Identifier",
                          "start": 188,
                          "end": 190,
                          "name": "t2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 193,
                          "end": 201,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 193,
                            "end": 199,
                            "object": {
                              "type": "ThisExpression",
                              "start": 193,
                              "end": 197
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 198,
                              "end": 199,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
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
                    "start": 211,
                    "end": 227,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 215,
                        "end": 226,
                        "id": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 217,
                          "name": "t3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 220,
                          "end": 226,
                          "object": {
                            "type": "ThisExpression",
                            "start": 220,
                            "end": 224
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 225,
                            "end": 226,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
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
                    "start": 236,
                    "end": 252,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 240,
                        "end": 251,
                        "id": {
                          "type": "Identifier",
                          "start": 240,
                          "end": 242,
                          "name": "t4",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 245,
                          "end": 251,
                          "object": {
                            "type": "ThisExpression",
                            "start": 245,
                            "end": 249
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 250,
                            "end": 251,
                            "name": "z",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
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
                    "start": 275,
                    "end": 292,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 279,
                        "end": 291,
                        "id": {
                          "type": "Identifier",
                          "start": 279,
                          "end": 281,
                          "name": "s1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 284,
                          "end": 291,
                          "object": {
                            "type": "Super",
                            "start": 284,
                            "end": 289
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 290,
                            "end": 291,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
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
                    "start": 313,
                    "end": 332,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 317,
                        "end": 331,
                        "id": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 319,
                          "name": "s2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 322,
                          "end": 331,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 322,
                            "end": 329,
                            "object": {
                              "type": "Super",
                              "start": 322,
                              "end": 327
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 328,
                              "end": 329,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
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
                    "start": 341,
                    "end": 358,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 345,
                        "end": 357,
                        "id": {
                          "type": "Identifier",
                          "start": 345,
                          "end": 347,
                          "name": "s3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 350,
                          "end": 357,
                          "object": {
                            "type": "Super",
                            "start": 350,
                            "end": 355
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 356,
                            "end": 357,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
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
                    "start": 379,
                    "end": 396,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 383,
                        "end": 395,
                        "id": {
                          "type": "Identifier",
                          "start": 383,
                          "end": 385,
                          "name": "s4",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 388,
                          "end": 395,
                          "object": {
                            "type": "Super",
                            "start": 388,
                            "end": 393
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 394,
                            "end": 395,
                            "name": "z",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
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
                    "start": 418,
                    "end": 427,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 422,
                        "end": 426,
                        "id": {
                          "type": "Identifier",
                          "start": 422,
                          "end": 426,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 423,
                            "end": 426,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 425,
                              "end": 426,
                              "typeName": {
                                "type": "Identifier",
                                "start": 425,
                                "end": 426,
                                "name": "A",
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
                    "start": 436,
                    "end": 449,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 440,
                        "end": 448,
                        "id": {
                          "type": "Identifier",
                          "start": 440,
                          "end": 442,
                          "name": "a1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 445,
                          "end": 448,
                          "object": {
                            "type": "Identifier",
                            "start": 445,
                            "end": 446,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 447,
                            "end": 448,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
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
                    "start": 470,
                    "end": 485,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 474,
                        "end": 484,
                        "id": {
                          "type": "Identifier",
                          "start": 474,
                          "end": 476,
                          "name": "a2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 479,
                          "end": 484,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 479,
                            "end": 482,
                            "object": {
                              "type": "Identifier",
                              "start": 479,
                              "end": 480,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 481,
                              "end": 482,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
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
                    "start": 504,
                    "end": 517,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 508,
                        "end": 516,
                        "id": {
                          "type": "Identifier",
                          "start": 508,
                          "end": 510,
                          "name": "a3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 513,
                          "end": 516,
                          "object": {
                            "type": "Identifier",
                            "start": 513,
                            "end": 514,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 515,
                            "end": 516,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
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
                    "start": 538,
                    "end": 551,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 542,
                        "end": 550,
                        "id": {
                          "type": "Identifier",
                          "start": 542,
                          "end": 544,
                          "name": "a4",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 547,
                          "end": 550,
                          "object": {
                            "type": "Identifier",
                            "start": 547,
                            "end": 548,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 549,
                            "end": 550,
                            "name": "z",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
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
                    "start": 573,
                    "end": 582,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 577,
                        "end": 581,
                        "id": {
                          "type": "Identifier",
                          "start": 577,
                          "end": 581,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 578,
                            "end": 581,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 580,
                              "end": 581,
                              "typeName": {
                                "type": "Identifier",
                                "start": 580,
                                "end": 581,
                                "name": "B",
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
                    "start": 591,
                    "end": 604,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 595,
                        "end": 603,
                        "id": {
                          "type": "Identifier",
                          "start": 595,
                          "end": 597,
                          "name": "b1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 600,
                          "end": 603,
                          "object": {
                            "type": "Identifier",
                            "start": 600,
                            "end": 601,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 602,
                            "end": 603,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
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
                    "start": 613,
                    "end": 628,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 617,
                        "end": 627,
                        "id": {
                          "type": "Identifier",
                          "start": 617,
                          "end": 619,
                          "name": "b2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 622,
                          "end": 627,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 622,
                            "end": 625,
                            "object": {
                              "type": "Identifier",
                              "start": 622,
                              "end": 623,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 624,
                              "end": 625,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
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
                    "start": 637,
                    "end": 650,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 641,
                        "end": 649,
                        "id": {
                          "type": "Identifier",
                          "start": 641,
                          "end": 643,
                          "name": "b3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 646,
                          "end": 649,
                          "object": {
                            "type": "Identifier",
                            "start": 646,
                            "end": 647,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 648,
                            "end": 649,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
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
                    "start": 659,
                    "end": 672,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 663,
                        "end": 671,
                        "id": {
                          "type": "Identifier",
                          "start": 663,
                          "end": 665,
                          "name": "b4",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 668,
                          "end": 671,
                          "object": {
                            "type": "Identifier",
                            "start": 668,
                            "end": 669,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 670,
                            "end": 671,
                            "name": "z",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
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
                    "start": 694,
                    "end": 703,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 698,
                        "end": 702,
                        "id": {
                          "type": "Identifier",
                          "start": 698,
                          "end": 702,
                          "name": "c",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 699,
                            "end": 702,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 701,
                              "end": 702,
                              "typeName": {
                                "type": "Identifier",
                                "start": 701,
                                "end": 702,
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
                    "start": 712,
                    "end": 725,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 716,
                        "end": 724,
                        "id": {
                          "type": "Identifier",
                          "start": 716,
                          "end": 718,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 721,
                          "end": 724,
                          "object": {
                            "type": "Identifier",
                            "start": 721,
                            "end": 722,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 723,
                            "end": 724,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
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
                    "start": 746,
                    "end": 761,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 750,
                        "end": 760,
                        "id": {
                          "type": "Identifier",
                          "start": 750,
                          "end": 752,
                          "name": "c2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 755,
                          "end": 760,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 755,
                            "end": 758,
                            "object": {
                              "type": "Identifier",
                              "start": 755,
                              "end": 756,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 757,
                              "end": 758,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
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
                    "start": 780,
                    "end": 793,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 784,
                        "end": 792,
                        "id": {
                          "type": "Identifier",
                          "start": 784,
                          "end": 786,
                          "name": "c3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 789,
                          "end": 792,
                          "object": {
                            "type": "Identifier",
                            "start": 789,
                            "end": 790,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 791,
                            "end": 792,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
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
                    "start": 814,
                    "end": 827,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 818,
                        "end": 826,
                        "id": {
                          "type": "Identifier",
                          "start": 818,
                          "end": 820,
                          "name": "c4",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 823,
                          "end": 826,
                          "object": {
                            "type": "Identifier",
                            "start": 823,
                            "end": 824,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 825,
                            "end": 826,
                            "name": "z",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
      "start": 849,
      "end": 895,
      "id": {
        "type": "Identifier",
        "start": 855,
        "end": 856,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 865,
        "end": 866,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 867,
        "end": 895,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 873,
            "end": 893,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 883,
              "end": 884,
              "name": "z",
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
              "start": 884,
              "end": 892,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 886,
                "end": 892
              }
            },
            "accessibility": "protected"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

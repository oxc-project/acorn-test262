__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 895,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 94,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 94,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 34,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 92,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 92,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 52,
                "end": 60,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 54,
                  "end": 60
                }
              },
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 847,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 114,
        "end": 847,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 120,
            "end": 140,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 845,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 146,
              "end": 845,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 149,
                "end": 845,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 159,
                    "end": 175,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 163,
                        "end": 174,
                        "id": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 165,
                          "decorators": [],
                          "name": "t1",
                          "optional": false,
                          "typeAnnotation": null
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
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 184,
                    "end": 202,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 188,
                        "end": 201,
                        "id": {
                          "type": "Identifier",
                          "start": 188,
                          "end": 190,
                          "decorators": [],
                          "name": "t2",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 211,
                    "end": 227,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 215,
                        "end": 226,
                        "id": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 217,
                          "decorators": [],
                          "name": "t3",
                          "optional": false,
                          "typeAnnotation": null
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
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 236,
                    "end": 252,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 240,
                        "end": 251,
                        "id": {
                          "type": "Identifier",
                          "start": 240,
                          "end": 242,
                          "decorators": [],
                          "name": "t4",
                          "optional": false,
                          "typeAnnotation": null
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
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 275,
                    "end": 292,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 279,
                        "end": 291,
                        "id": {
                          "type": "Identifier",
                          "start": 279,
                          "end": 281,
                          "decorators": [],
                          "name": "s1",
                          "optional": false,
                          "typeAnnotation": null
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
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 313,
                    "end": 332,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 317,
                        "end": 331,
                        "id": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 319,
                          "decorators": [],
                          "name": "s2",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 341,
                    "end": 358,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 345,
                        "end": 357,
                        "id": {
                          "type": "Identifier",
                          "start": 345,
                          "end": 347,
                          "decorators": [],
                          "name": "s3",
                          "optional": false,
                          "typeAnnotation": null
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
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 379,
                    "end": 396,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 383,
                        "end": 395,
                        "id": {
                          "type": "Identifier",
                          "start": 383,
                          "end": 385,
                          "decorators": [],
                          "name": "s4",
                          "optional": false,
                          "typeAnnotation": null
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
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 418,
                    "end": 427,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 422,
                        "end": 426,
                        "id": {
                          "type": "Identifier",
                          "start": 422,
                          "end": 426,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
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
                                "decorators": [],
                                "name": "A",
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
                    "start": 436,
                    "end": 449,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 440,
                        "end": 448,
                        "id": {
                          "type": "Identifier",
                          "start": 440,
                          "end": 442,
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 445,
                          "end": 448,
                          "object": {
                            "type": "Identifier",
                            "start": 445,
                            "end": 446,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 447,
                            "end": 448,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 470,
                    "end": 485,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 474,
                        "end": 484,
                        "id": {
                          "type": "Identifier",
                          "start": 474,
                          "end": 476,
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 481,
                              "end": 482,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 504,
                    "end": 517,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 508,
                        "end": 516,
                        "id": {
                          "type": "Identifier",
                          "start": 508,
                          "end": 510,
                          "decorators": [],
                          "name": "a3",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 513,
                          "end": 516,
                          "object": {
                            "type": "Identifier",
                            "start": 513,
                            "end": 514,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 515,
                            "end": 516,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 538,
                    "end": 551,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 542,
                        "end": 550,
                        "id": {
                          "type": "Identifier",
                          "start": 542,
                          "end": 544,
                          "decorators": [],
                          "name": "a4",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 547,
                          "end": 550,
                          "object": {
                            "type": "Identifier",
                            "start": 547,
                            "end": 548,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 549,
                            "end": 550,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 573,
                    "end": 582,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 577,
                        "end": 581,
                        "id": {
                          "type": "Identifier",
                          "start": 577,
                          "end": 581,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
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
                                "decorators": [],
                                "name": "B",
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
                    "start": 591,
                    "end": 604,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 595,
                        "end": 603,
                        "id": {
                          "type": "Identifier",
                          "start": 595,
                          "end": 597,
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 600,
                          "end": 603,
                          "object": {
                            "type": "Identifier",
                            "start": 600,
                            "end": 601,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 602,
                            "end": 603,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 613,
                    "end": 628,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 617,
                        "end": 627,
                        "id": {
                          "type": "Identifier",
                          "start": 617,
                          "end": 619,
                          "decorators": [],
                          "name": "b2",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 624,
                              "end": 625,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 637,
                    "end": 650,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 641,
                        "end": 649,
                        "id": {
                          "type": "Identifier",
                          "start": 641,
                          "end": 643,
                          "decorators": [],
                          "name": "b3",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 646,
                          "end": 649,
                          "object": {
                            "type": "Identifier",
                            "start": 646,
                            "end": 647,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 648,
                            "end": 649,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 659,
                    "end": 672,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 663,
                        "end": 671,
                        "id": {
                          "type": "Identifier",
                          "start": 663,
                          "end": 665,
                          "decorators": [],
                          "name": "b4",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 668,
                          "end": 671,
                          "object": {
                            "type": "Identifier",
                            "start": 668,
                            "end": 669,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 670,
                            "end": 671,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 694,
                    "end": 703,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 698,
                        "end": 702,
                        "id": {
                          "type": "Identifier",
                          "start": 698,
                          "end": 702,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
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
                    "start": 712,
                    "end": 725,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 716,
                        "end": 724,
                        "id": {
                          "type": "Identifier",
                          "start": 716,
                          "end": 718,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 721,
                          "end": 724,
                          "object": {
                            "type": "Identifier",
                            "start": 721,
                            "end": 722,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 723,
                            "end": 724,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 746,
                    "end": 761,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 750,
                        "end": 760,
                        "id": {
                          "type": "Identifier",
                          "start": 750,
                          "end": 752,
                          "decorators": [],
                          "name": "c2",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 757,
                              "end": 758,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 780,
                    "end": 793,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 784,
                        "end": 792,
                        "id": {
                          "type": "Identifier",
                          "start": 784,
                          "end": 786,
                          "decorators": [],
                          "name": "c3",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 789,
                          "end": 792,
                          "object": {
                            "type": "Identifier",
                            "start": 789,
                            "end": 790,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 791,
                            "end": 792,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 814,
                    "end": 827,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 818,
                        "end": 826,
                        "id": {
                          "type": "Identifier",
                          "start": 818,
                          "end": 820,
                          "decorators": [],
                          "name": "c4",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 823,
                          "end": 826,
                          "object": {
                            "type": "Identifier",
                            "start": 823,
                            "end": 824,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 825,
                            "end": 826,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
      "start": 849,
      "end": 895,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 855,
        "end": 856,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 865,
        "end": 866,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 867,
        "end": 895,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 873,
            "end": 893,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 883,
              "end": 884,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
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

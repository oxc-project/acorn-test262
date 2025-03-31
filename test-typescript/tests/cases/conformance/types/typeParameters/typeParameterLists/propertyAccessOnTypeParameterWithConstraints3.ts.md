__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 84,
  "end": 1362,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 84,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 92,
        "end": 128,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 98,
            "end": 126,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 101,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 101,
              "end": 126,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 126,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 114,
                    "end": 124,
                    "argument": {
                      "type": "Literal",
                      "start": 121,
                      "end": 123,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 103,
                "end": 111,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 105,
                  "end": 111
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
      "start": 130,
      "end": 196,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 146,
        "end": 147,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 148,
        "end": 196,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 154,
            "end": 194,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 157,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 157,
              "end": 194,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 168,
                "end": 194,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 178,
                    "end": 188,
                    "argument": {
                      "type": "Literal",
                      "start": 185,
                      "end": 187,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 159,
                "end": 167,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 161,
                  "end": 167
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
      "start": 198,
      "end": 486,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 205,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 232,
        "end": 486,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 238,
            "end": 365,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 239,
              "end": 365,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 242,
                "end": 365,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 252,
                    "end": 261,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 256,
                        "end": 260,
                        "id": {
                          "type": "Identifier",
                          "start": 256,
                          "end": 260,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 257,
                            "end": 260,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 259,
                              "end": 260,
                              "typeName": {
                                "type": "Identifier",
                                "start": 259,
                                "end": 260,
                                "name": "T",
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
                    "start": 292,
                    "end": 311,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 296,
                        "end": 310,
                        "id": {
                          "type": "Identifier",
                          "start": 296,
                          "end": 297,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 300,
                          "end": 310,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 300,
                            "end": 308,
                            "object": {
                              "type": "Identifier",
                              "start": 300,
                              "end": 301,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Literal",
                              "start": 302,
                              "end": 307,
                              "value": "foo",
                              "raw": "'foo'"
                            },
                            "computed": true,
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
                    "type": "ReturnStatement",
                    "start": 340,
                    "end": 359,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 347,
                      "end": 358,
                      "left": {
                        "type": "Identifier",
                        "start": 347,
                        "end": 348,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "start": 351,
                        "end": 358,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 351,
                          "end": 356,
                          "object": {
                            "type": "Identifier",
                            "start": 351,
                            "end": 352,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 353,
                            "end": 356,
                            "name": "foo",
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
                      }
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
          },
          {
            "type": "MethodDefinition",
            "start": 371,
            "end": 484,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 371,
              "end": 372,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 372,
              "end": 484,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 373,
                  "end": 377,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 374,
                    "end": 377,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 376,
                      "end": 377,
                      "typeName": {
                        "type": "Identifier",
                        "start": 376,
                        "end": 377,
                        "name": "U",
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
                "start": 379,
                "end": 484,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 411,
                    "end": 430,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 415,
                        "end": 429,
                        "id": {
                          "type": "Identifier",
                          "start": 415,
                          "end": 416,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 419,
                          "end": 429,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 419,
                            "end": 427,
                            "object": {
                              "type": "Identifier",
                              "start": 419,
                              "end": 420,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Literal",
                              "start": 421,
                              "end": 426,
                              "value": "foo",
                              "raw": "'foo'"
                            },
                            "computed": true,
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
                    "type": "ReturnStatement",
                    "start": 459,
                    "end": 478,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 466,
                      "end": 477,
                      "left": {
                        "type": "Identifier",
                        "start": 466,
                        "end": 467,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "start": 470,
                        "end": 477,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 470,
                          "end": 475,
                          "object": {
                            "type": "Identifier",
                            "start": 470,
                            "end": 471,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 472,
                            "end": 475,
                            "name": "foo",
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
                      }
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 205,
        "end": 231,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 206,
            "end": 217,
            "name": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 216,
              "end": 217,
              "typeName": {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 219,
            "end": 230,
            "name": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 229,
              "end": 230,
              "typeName": {
                "type": "Identifier",
                "start": 229,
                "end": 230,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 488,
      "end": 518,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 492,
          "end": 517,
          "id": {
            "type": "Identifier",
            "start": 492,
            "end": 495,
            "name": "r1a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 498,
            "end": 517,
            "callee": {
              "type": "MemberExpression",
              "start": 498,
              "end": 515,
              "object": {
                "type": "NewExpression",
                "start": 499,
                "end": 512,
                "callee": {
                  "type": "Identifier",
                  "start": 503,
                  "end": 504,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 504,
                  "end": 510,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 505,
                      "end": 506,
                      "typeName": {
                        "type": "Identifier",
                        "start": 505,
                        "end": 506,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 508,
                      "end": 509,
                      "typeName": {
                        "type": "Identifier",
                        "start": 508,
                        "end": 509,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "property": {
                "type": "Identifier",
                "start": 514,
                "end": 515,
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
      "start": 519,
      "end": 556,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 523,
          "end": 555,
          "id": {
            "type": "Identifier",
            "start": 523,
            "end": 526,
            "name": "r1b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 529,
            "end": 555,
            "callee": {
              "type": "MemberExpression",
              "start": 529,
              "end": 546,
              "object": {
                "type": "NewExpression",
                "start": 530,
                "end": 543,
                "callee": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 535,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 535,
                  "end": 541,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 536,
                      "end": 537,
                      "typeName": {
                        "type": "Identifier",
                        "start": 536,
                        "end": 537,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 539,
                      "end": 540,
                      "typeName": {
                        "type": "Identifier",
                        "start": 539,
                        "end": 540,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "property": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 547,
                "end": 554,
                "callee": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 552,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ],
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
      "type": "TSInterfaceDeclaration",
      "start": 558,
      "end": 611,
      "id": {
        "type": "Identifier",
        "start": 568,
        "end": 569,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 569,
        "end": 595,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 570,
            "end": 581,
            "name": {
              "type": "Identifier",
              "start": 570,
              "end": 571,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 580,
              "end": 581,
              "typeName": {
                "type": "Identifier",
                "start": 580,
                "end": 581,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 583,
            "end": 594,
            "name": {
              "type": "Identifier",
              "start": 583,
              "end": 584,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 593,
              "end": 594,
              "typeName": {
                "type": "Identifier",
                "start": 593,
                "end": 594,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 596,
        "end": 611,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 602,
            "end": 609,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 602,
              "end": 605,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 605,
              "end": 608,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 607,
                "end": 608,
                "typeName": {
                  "type": "Identifier",
                  "start": 607,
                  "end": 608,
                  "name": "T",
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
      "start": 612,
      "end": 627,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 616,
          "end": 626,
          "id": {
            "type": "Identifier",
            "start": 616,
            "end": 626,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 617,
              "end": 626,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 619,
                "end": 626,
                "typeName": {
                  "type": "Identifier",
                  "start": 619,
                  "end": 620,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 620,
                  "end": 626,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 621,
                      "end": 622,
                      "typeName": {
                        "type": "Identifier",
                        "start": 621,
                        "end": 622,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 624,
                      "end": 625,
                      "typeName": {
                        "type": "Identifier",
                        "start": 624,
                        "end": 625,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
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
      "start": 628,
      "end": 649,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 632,
          "end": 648,
          "id": {
            "type": "Identifier",
            "start": 632,
            "end": 634,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 637,
            "end": 648,
            "callee": {
              "type": "MemberExpression",
              "start": 637,
              "end": 646,
              "object": {
                "type": "MemberExpression",
                "start": 637,
                "end": 642,
                "object": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 638,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 642,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 643,
                "end": 646,
                "name": "foo",
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
      "start": 650,
      "end": 675,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 674,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 657,
            "name": "r2b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 660,
            "end": 674,
            "callee": {
              "type": "MemberExpression",
              "start": 660,
              "end": 672,
              "object": {
                "type": "MemberExpression",
                "start": 660,
                "end": 665,
                "object": {
                  "type": "Identifier",
                  "start": 660,
                  "end": 661,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 662,
                  "end": 665,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 666,
                "end": 671,
                "value": "foo",
                "raw": "'foo'"
              },
              "computed": true,
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
      "start": 677,
      "end": 765,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 681,
          "end": 765,
          "id": {
            "type": "Identifier",
            "start": 681,
            "end": 765,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 682,
              "end": 765,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 684,
                "end": 765,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 690,
                    "end": 722,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 690,
                      "end": 716,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 691,
                          "end": 702,
                          "name": {
                            "type": "Identifier",
                            "start": 691,
                            "end": 692,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 701,
                            "end": 702,
                            "typeName": {
                              "type": "Identifier",
                              "start": 701,
                              "end": 702,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 704,
                          "end": 715,
                          "name": {
                            "type": "Identifier",
                            "start": 704,
                            "end": 705,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 714,
                            "end": 715,
                            "typeName": {
                              "type": "Identifier",
                              "start": 714,
                              "end": 715,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 718,
                      "end": 721,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 720,
                        "end": 721,
                        "typeName": {
                          "type": "Identifier",
                          "start": 720,
                          "end": 721,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 727,
                    "end": 763,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 727,
                      "end": 753,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 728,
                          "end": 739,
                          "name": {
                            "type": "Identifier",
                            "start": 728,
                            "end": 729,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 738,
                            "end": 739,
                            "typeName": {
                              "type": "Identifier",
                              "start": 738,
                              "end": 739,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 741,
                          "end": 752,
                          "name": {
                            "type": "Identifier",
                            "start": 741,
                            "end": 742,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 751,
                            "end": 752,
                            "typeName": {
                              "type": "Identifier",
                              "start": 751,
                              "end": 752,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 754,
                        "end": 758,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 755,
                          "end": 758,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 757,
                            "end": 758,
                            "typeName": {
                              "type": "Identifier",
                              "start": 757,
                              "end": 758,
                              "name": "U",
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 759,
                      "end": 762,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 761,
                        "end": 762,
                        "typeName": {
                          "type": "Identifier",
                          "start": 761,
                          "end": 762,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
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
      "start": 766,
      "end": 785,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 770,
          "end": 784,
          "id": {
            "type": "Identifier",
            "start": 770,
            "end": 772,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 775,
            "end": 784,
            "callee": {
              "type": "MemberExpression",
              "start": 775,
              "end": 782,
              "object": {
                "type": "CallExpression",
                "start": 775,
                "end": 778,
                "callee": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 776,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 779,
                "end": 782,
                "name": "foo",
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
      "start": 849,
      "end": 872,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 853,
          "end": 871,
          "id": {
            "type": "Identifier",
            "start": 853,
            "end": 856,
            "name": "r3b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 859,
            "end": 871,
            "callee": {
              "type": "MemberExpression",
              "start": 859,
              "end": 869,
              "object": {
                "type": "CallExpression",
                "start": 859,
                "end": 862,
                "callee": {
                  "type": "Identifier",
                  "start": 859,
                  "end": 860,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Literal",
                "start": 863,
                "end": 868,
                "value": "foo",
                "raw": "'foo'"
              },
              "computed": true,
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
      "start": 929,
      "end": 956,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 933,
          "end": 955,
          "id": {
            "type": "Identifier",
            "start": 933,
            "end": 936,
            "name": "r3c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 939,
            "end": 955,
            "callee": {
              "type": "MemberExpression",
              "start": 939,
              "end": 953,
              "object": {
                "type": "CallExpression",
                "start": 939,
                "end": 949,
                "callee": {
                  "type": "Identifier",
                  "start": 939,
                  "end": 940,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "NewExpression",
                    "start": 941,
                    "end": 948,
                    "callee": {
                      "type": "Identifier",
                      "start": 945,
                      "end": 946,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 950,
                "end": 953,
                "name": "foo",
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
      "start": 1031,
      "end": 1061,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1035,
          "end": 1060,
          "id": {
            "type": "Identifier",
            "start": 1035,
            "end": 1038,
            "name": "r3d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1041,
            "end": 1060,
            "callee": {
              "type": "MemberExpression",
              "start": 1041,
              "end": 1058,
              "object": {
                "type": "CallExpression",
                "start": 1041,
                "end": 1051,
                "callee": {
                  "type": "Identifier",
                  "start": 1041,
                  "end": 1042,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "NewExpression",
                    "start": 1043,
                    "end": 1050,
                    "callee": {
                      "type": "Identifier",
                      "start": 1047,
                      "end": 1048,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Literal",
                "start": 1052,
                "end": 1057,
                "value": "foo",
                "raw": "'foo'"
              },
              "computed": true,
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
      "start": 1137,
      "end": 1299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1141,
          "end": 1299,
          "id": {
            "type": "Identifier",
            "start": 1141,
            "end": 1142,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1145,
            "end": 1299,
            "properties": [
              {
                "type": "Property",
                "start": 1151,
                "end": 1297,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1151,
                  "end": 1154,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1156,
                  "end": 1297,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1183,
                      "end": 1187,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1184,
                        "end": 1187,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1186,
                          "end": 1187,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1186,
                            "end": 1187,
                            "name": "T",
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
                    "start": 1192,
                    "end": 1297,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1224,
                        "end": 1243,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1228,
                            "end": 1242,
                            "id": {
                              "type": "Identifier",
                              "start": 1228,
                              "end": 1229,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 1232,
                              "end": 1242,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1232,
                                "end": 1240,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1232,
                                  "end": 1233,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Literal",
                                  "start": 1234,
                                  "end": 1239,
                                  "value": "foo",
                                  "raw": "'foo'"
                                },
                                "computed": true,
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
                        "type": "ReturnStatement",
                        "start": 1272,
                        "end": 1291,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 1279,
                          "end": 1290,
                          "left": {
                            "type": "Identifier",
                            "start": 1279,
                            "end": 1280,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "start": 1283,
                            "end": 1290,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1283,
                              "end": 1288,
                              "object": {
                                "type": "Identifier",
                                "start": 1283,
                                "end": 1284,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1285,
                                "end": 1288,
                                "name": "foo",
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
                          }
                        }
                      }
                    ]
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1156,
                    "end": 1182,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1157,
                        "end": 1168,
                        "name": {
                          "type": "Identifier",
                          "start": 1157,
                          "end": 1158,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1167,
                          "end": 1168,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1167,
                            "end": 1168,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1170,
                        "end": 1181,
                        "name": {
                          "type": "Identifier",
                          "start": 1170,
                          "end": 1171,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1180,
                          "end": 1181,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1180,
                            "end": 1181,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "returnType": null
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
      "start": 1301,
      "end": 1325,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1305,
          "end": 1324,
          "id": {
            "type": "Identifier",
            "start": 1305,
            "end": 1307,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1310,
            "end": 1324,
            "callee": {
              "type": "MemberExpression",
              "start": 1310,
              "end": 1315,
              "object": {
                "type": "Identifier",
                "start": 1310,
                "end": 1311,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1312,
                "end": 1315,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 1316,
                "end": 1323,
                "callee": {
                  "type": "Identifier",
                  "start": 1320,
                  "end": 1321,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

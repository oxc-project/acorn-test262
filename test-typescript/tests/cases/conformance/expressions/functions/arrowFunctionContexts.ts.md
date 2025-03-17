__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 41,
  "end": 2258,
  "body": [
    {
      "type": "WithStatement",
      "start": 41,
      "end": 82,
      "object": {
        "type": "Identifier",
        "start": 47,
        "end": 53,
        "name": "window",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 55,
        "end": 82,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 61,
            "end": 80,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 65,
                "end": 79,
                "id": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 66,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 69,
                  "end": 79,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "ThisExpression",
                    "start": 75,
                    "end": 79
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 128,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 138,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 139,
        "end": 170,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 168,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 156,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 156,
              "end": 168,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 157,
                  "end": 163,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 158,
                    "end": 163,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 160,
                      "end": 163
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 165,
                "end": 168,
                "body": []
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
      "start": 172,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 185,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 194,
        "end": 198,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 199,
        "end": 255,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 205,
            "end": 253,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 205,
              "end": 216,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 216,
              "end": 253,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 219,
                "end": 253,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 229,
                    "end": 247,
                    "expression": {
                      "type": "CallExpression",
                      "start": 229,
                      "end": 246,
                      "callee": {
                        "type": "Super",
                        "start": 229,
                        "end": 234
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 235,
                          "end": 245,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "ThisExpression",
                            "start": 241,
                            "end": 245
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
      "type": "ExpressionStatement",
      "start": 296,
      "end": 331,
      "expression": {
        "type": "CallExpression",
        "start": 296,
        "end": 330,
        "callee": {
          "type": "MemberExpression",
          "start": 296,
          "end": 313,
          "object": {
            "type": "Identifier",
            "start": 296,
            "end": 302,
            "name": "window",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 303,
            "end": 313,
            "name": "setTimeout",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 314,
            "end": 324,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Literal",
              "start": 320,
              "end": 324,
              "value": null,
              "raw": "null"
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 326,
            "end": 329,
            "value": 100,
            "raw": "100"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 378,
      "end": 406,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 405,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 385,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 388,
            "end": 405,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 389,
                "end": 398,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 390,
                  "end": 398,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 392,
                    "end": 398
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 403,
              "end": 405,
              "value": "",
              "raw": "''"
            },
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
      "start": 407,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 411,
          "end": 440,
          "id": {
            "type": "Identifier",
            "start": 411,
            "end": 440,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 414,
              "end": 440,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 416,
                "end": 440,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 418,
                    "end": 438,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 419,
                        "end": 428,
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 420,
                          "end": 428,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 422,
                            "end": 428
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 429,
                      "end": 437,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 431,
                        "end": 437
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
      "start": 449,
      "end": 479,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 453,
          "end": 478,
          "id": {
            "type": "Identifier",
            "start": 453,
            "end": 456,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 459,
            "end": 478,
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "start": 460,
                "end": 477,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 461,
                    "end": 470,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 462,
                      "end": 470,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 464,
                        "end": 470
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Literal",
                  "start": 475,
                  "end": 477,
                  "value": "",
                  "raw": "''"
                },
                "typeParameters": null,
                "returnType": null
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
      "start": 480,
      "end": 516,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 484,
          "end": 515,
          "id": {
            "type": "Identifier",
            "start": 484,
            "end": 515,
            "name": "arr",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 487,
              "end": 515,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 489,
                "end": 515,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 489,
                  "end": 513,
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 491,
                      "end": 511,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 492,
                          "end": 501,
                          "name": "n",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 493,
                            "end": 501,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 495,
                              "end": 501
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 502,
                        "end": 510,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 504,
                          "end": 510
                        }
                      }
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
      "type": "TSEnumDeclaration",
      "start": 587,
      "end": 693,
      "id": {
        "type": "Identifier",
        "start": 592,
        "end": 593,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 600,
          "end": 611,
          "id": {
            "type": "Identifier",
            "start": 600,
            "end": 601,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "ArrowFunctionExpression",
            "start": 604,
            "end": 611,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Literal",
              "start": 610,
              "end": 611,
              "value": 4,
              "raw": "4"
            },
            "typeParameters": null,
            "returnType": null
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 635,
          "end": 658,
          "id": {
            "type": "Identifier",
            "start": 635,
            "end": 636,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "MemberExpression",
            "start": 639,
            "end": 658,
            "object": {
              "type": "ArrowFunctionExpression",
              "start": 640,
              "end": 650,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "ThisExpression",
                "start": 646,
                "end": 650
              },
              "typeParameters": null,
              "returnType": null
            },
            "property": {
              "type": "Identifier",
              "start": 652,
              "end": 658,
              "name": "length",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 594,
        "end": 693,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 600,
            "end": 611,
            "id": {
              "type": "Identifier",
              "start": 600,
              "end": 601,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "ArrowFunctionExpression",
              "start": 604,
              "end": 611,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Literal",
                "start": 610,
                "end": 611,
                "value": 4,
                "raw": "4"
              },
              "typeParameters": null,
              "returnType": null
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 635,
            "end": 658,
            "id": {
              "type": "Identifier",
              "start": 635,
              "end": 636,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 639,
              "end": 658,
              "object": {
                "type": "ArrowFunctionExpression",
                "start": 640,
                "end": 650,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "ThisExpression",
                  "start": 646,
                  "end": 650
                },
                "typeParameters": null,
                "returnType": null
              },
              "property": {
                "type": "Identifier",
                "start": 652,
                "end": 658,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 744,
      "end": 808,
      "id": {
        "type": "Identifier",
        "start": 751,
        "end": 752,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 753,
        "end": 808,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 759,
            "end": 784,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 766,
              "end": 784,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 770,
                  "end": 783,
                  "id": {
                    "type": "Identifier",
                    "start": 770,
                    "end": 771,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 774,
                    "end": 783,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 775,
                        "end": 776,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "Literal",
                      "start": 781,
                      "end": 783,
                      "value": "",
                      "raw": "''"
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 789,
            "end": 806,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 793,
                "end": 805,
                "id": {
                  "type": "Identifier",
                  "start": 793,
                  "end": 794,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 797,
                  "end": 805,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 798,
                      "end": 799,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 804,
                    "end": 805,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 898,
      "end": 1808,
      "id": {
        "type": "Identifier",
        "start": 905,
        "end": 907,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 908,
        "end": 1808,
        "body": [
          {
            "type": "WithStatement",
            "start": 959,
            "end": 1008,
            "object": {
              "type": "Identifier",
              "start": 965,
              "end": 971,
              "name": "window",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 973,
              "end": 1008,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 983,
                  "end": 1002,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 987,
                      "end": 1001,
                      "id": {
                        "type": "Identifier",
                        "start": 987,
                        "end": 988,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 991,
                        "end": 1001,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "ThisExpression",
                          "start": 997,
                          "end": 1001
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 1062,
            "end": 1112,
            "id": {
              "type": "Identifier",
              "start": 1068,
              "end": 1072,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1073,
              "end": 1112,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 1083,
                  "end": 1106,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1083,
                    "end": 1094,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1094,
                    "end": 1106,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1095,
                        "end": 1101,
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1096,
                          "end": 1101,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1098,
                            "end": 1101
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1103,
                      "end": 1106,
                      "body": []
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
            "start": 1118,
            "end": 1217,
            "id": {
              "type": "Identifier",
              "start": 1124,
              "end": 1131,
              "name": "Derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 1140,
              "end": 1144,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 1145,
              "end": 1217,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 1155,
                  "end": 1211,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1155,
                    "end": 1166,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1166,
                    "end": 1211,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1169,
                      "end": 1211,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1183,
                          "end": 1201,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1183,
                            "end": 1200,
                            "callee": {
                              "type": "Super",
                              "start": 1183,
                              "end": 1188
                            },
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 1189,
                                "end": 1199,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "ThisExpression",
                                  "start": 1195,
                                  "end": 1199
                                },
                                "typeParameters": null,
                                "returnType": null
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
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
            "type": "ExpressionStatement",
            "start": 1266,
            "end": 1301,
            "expression": {
              "type": "CallExpression",
              "start": 1266,
              "end": 1300,
              "callee": {
                "type": "MemberExpression",
                "start": 1266,
                "end": 1283,
                "object": {
                  "type": "Identifier",
                  "start": 1266,
                  "end": 1272,
                  "name": "window",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1273,
                  "end": 1283,
                  "name": "setTimeout",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1284,
                  "end": 1294,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Literal",
                    "start": 1290,
                    "end": 1294,
                    "value": null,
                    "raw": "null"
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                {
                  "type": "Literal",
                  "start": 1296,
                  "end": 1299,
                  "value": 100,
                  "raw": "100"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1356,
            "end": 1384,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1360,
                "end": 1383,
                "id": {
                  "type": "Identifier",
                  "start": 1360,
                  "end": 1363,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 1366,
                  "end": 1383,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1367,
                      "end": 1376,
                      "name": "n",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1368,
                        "end": 1376,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1370,
                          "end": 1376
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 1381,
                    "end": 1383,
                    "value": "",
                    "raw": "''"
                  },
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
            "start": 1389,
            "end": 1423,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1393,
                "end": 1422,
                "id": {
                  "type": "Identifier",
                  "start": 1393,
                  "end": 1422,
                  "name": "obj",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1396,
                    "end": 1422,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1398,
                      "end": 1422,
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 1400,
                          "end": 1420,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1401,
                              "end": 1410,
                              "name": "n",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1402,
                                "end": 1410,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1404,
                                  "end": 1410
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1411,
                            "end": 1419,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1413,
                              "end": 1419
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
            "start": 1435,
            "end": 1465,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1439,
                "end": 1464,
                "id": {
                  "type": "Identifier",
                  "start": 1439,
                  "end": 1442,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 1445,
                  "end": 1464,
                  "elements": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1446,
                      "end": 1463,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1447,
                          "end": 1456,
                          "name": "n",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1448,
                            "end": 1456,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1450,
                              "end": 1456
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 1461,
                        "end": 1463,
                        "value": "",
                        "raw": "''"
                      },
                      "typeParameters": null,
                      "returnType": null
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
            "start": 1470,
            "end": 1506,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1474,
                "end": 1505,
                "id": {
                  "type": "Identifier",
                  "start": 1474,
                  "end": 1505,
                  "name": "arr",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1477,
                    "end": 1505,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1479,
                      "end": 1505,
                      "elementType": {
                        "type": "TSTypeLiteral",
                        "start": 1479,
                        "end": 1503,
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 1481,
                            "end": 1501,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1482,
                                "end": 1491,
                                "name": "n",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1483,
                                  "end": 1491,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1485,
                                    "end": 1491
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1492,
                              "end": 1500,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1494,
                                "end": 1500
                              }
                            }
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
            "type": "TSEnumDeclaration",
            "start": 1585,
            "end": 1670,
            "id": {
              "type": "Identifier",
              "start": 1590,
              "end": 1591,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 1602,
                "end": 1613,
                "id": {
                  "type": "Identifier",
                  "start": 1602,
                  "end": 1603,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": {
                  "type": "ArrowFunctionExpression",
                  "start": 1606,
                  "end": 1613,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Literal",
                    "start": 1612,
                    "end": 1613,
                    "value": 4,
                    "raw": "4"
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "computed": false
              },
              {
                "type": "TSEnumMember",
                "start": 1641,
                "end": 1664,
                "id": {
                  "type": "Identifier",
                  "start": 1641,
                  "end": 1642,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": {
                  "type": "MemberExpression",
                  "start": 1645,
                  "end": 1664,
                  "object": {
                    "type": "ArrowFunctionExpression",
                    "start": 1646,
                    "end": 1656,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "ThisExpression",
                      "start": 1652,
                      "end": 1656
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1658,
                    "end": 1664,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "computed": false
              }
            ],
            "const": false,
            "declare": false,
            "body": {
              "type": "TSEnumBody",
              "start": 1592,
              "end": 1670,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 1602,
                  "end": 1613,
                  "id": {
                    "type": "Identifier",
                    "start": 1602,
                    "end": 1603,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "ArrowFunctionExpression",
                    "start": 1606,
                    "end": 1613,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "Literal",
                      "start": 1612,
                      "end": 1613,
                      "value": 4,
                      "raw": "4"
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 1641,
                  "end": 1664,
                  "id": {
                    "type": "Identifier",
                    "start": 1641,
                    "end": 1642,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "MemberExpression",
                    "start": 1645,
                    "end": 1664,
                    "object": {
                      "type": "ArrowFunctionExpression",
                      "start": 1646,
                      "end": 1656,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "ThisExpression",
                        "start": 1652,
                        "end": 1656
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1658,
                      "end": 1664,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "computed": false
                }
              ]
            }
          },
          {
            "type": "TSModuleDeclaration",
            "start": 1729,
            "end": 1805,
            "id": {
              "type": "Identifier",
              "start": 1736,
              "end": 1737,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 1738,
              "end": 1805,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1748,
                  "end": 1773,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 1755,
                    "end": 1773,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1759,
                        "end": 1772,
                        "id": {
                          "type": "Identifier",
                          "start": 1759,
                          "end": 1760,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 1763,
                          "end": 1772,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1764,
                              "end": 1765,
                              "name": "s",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "Literal",
                            "start": 1770,
                            "end": 1772,
                            "value": "",
                            "raw": "''"
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1782,
                  "end": 1799,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1786,
                      "end": 1798,
                      "id": {
                        "type": "Identifier",
                        "start": 1786,
                        "end": 1787,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 1790,
                        "end": 1798,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1791,
                            "end": 1792,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "Identifier",
                          "start": 1797,
                          "end": 1798,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1876,
      "end": 1908,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1880,
          "end": 1907,
          "id": {
            "type": "Identifier",
            "start": 1880,
            "end": 1888,
            "name": "generic1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1891,
            "end": 1907,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1895,
                "end": 1899,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1896,
                  "end": 1899,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1898,
                    "end": 1899,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1898,
                      "end": 1899,
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
              "type": "ArrayExpression",
              "start": 1904,
              "end": 1907,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 1905,
                  "end": 1906,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1891,
              "end": 1894,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1892,
                  "end": 1893,
                  "name": {
                    "type": "Identifier",
                    "start": 1892,
                    "end": 1893,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
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
      "start": 1909,
      "end": 1942,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1913,
          "end": 1941,
          "id": {
            "type": "Identifier",
            "start": 1913,
            "end": 1941,
            "name": "generic1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1921,
              "end": 1941,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1923,
                "end": 1941,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 1925,
                    "end": 1939,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 1925,
                      "end": 1928,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 1926,
                          "end": 1927,
                          "name": {
                            "type": "Identifier",
                            "start": 1926,
                            "end": 1927,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
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
                        "start": 1929,
                        "end": 1933,
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1930,
                          "end": 1933,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1932,
                            "end": 1933,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1932,
                              "end": 1933,
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1934,
                      "end": 1939,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1936,
                        "end": 1939,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 1936,
                          "end": 1937,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1936,
                            "end": 1937,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
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
      "start": 1974,
      "end": 2018,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1978,
          "end": 2017,
          "id": {
            "type": "Identifier",
            "start": 1978,
            "end": 1986,
            "name": "generic2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1989,
            "end": 2017,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1993,
                "end": 1997,
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1994,
                  "end": 1997,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1996,
                    "end": 1997,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1996,
                      "end": 1997,
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
              "start": 2002,
              "end": 2017,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 2004,
                  "end": 2015,
                  "argument": {
                    "type": "ArrayExpression",
                    "start": 2011,
                    "end": 2014,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 2012,
                        "end": 2013,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1989,
              "end": 1992,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1990,
                  "end": 1991,
                  "name": {
                    "type": "Identifier",
                    "start": 1990,
                    "end": 1991,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
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
      "start": 2019,
      "end": 2052,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2023,
          "end": 2051,
          "id": {
            "type": "Identifier",
            "start": 2023,
            "end": 2051,
            "name": "generic2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2031,
              "end": 2051,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2033,
                "end": 2051,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 2035,
                    "end": 2049,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 2035,
                      "end": 2038,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 2036,
                          "end": 2037,
                          "name": {
                            "type": "Identifier",
                            "start": 2036,
                            "end": 2037,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
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
                        "start": 2039,
                        "end": 2043,
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2040,
                          "end": 2043,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2042,
                            "end": 2043,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2042,
                              "end": 2043,
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2044,
                      "end": 2049,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2046,
                        "end": 2049,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 2046,
                          "end": 2047,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2046,
                            "end": 2047,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
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
      "start": 2137,
      "end": 2171,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2141,
          "end": 2170,
          "id": {
            "type": "Identifier",
            "start": 2141,
            "end": 2150,
            "name": "asserted1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 2153,
            "end": 2170,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2159,
              "end": 2169,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2160,
                  "end": 2161,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "ArrayExpression",
                "start": 2166,
                "end": 2169,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 2167,
                    "end": 2168,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2154,
              "end": 2157
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2172,
      "end": 2191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2176,
          "end": 2190,
          "id": {
            "type": "Identifier",
            "start": 2176,
            "end": 2190,
            "name": "asserted1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2185,
              "end": 2190,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2187,
                "end": 2190
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
      "start": 2192,
      "end": 2236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2196,
          "end": 2235,
          "id": {
            "type": "Identifier",
            "start": 2196,
            "end": 2205,
            "name": "asserted2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 2208,
            "end": 2235,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2214,
              "end": 2234,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2215,
                  "end": 2216,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2221,
                "end": 2234,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2223,
                    "end": 2232,
                    "argument": {
                      "type": "Identifier",
                      "start": 2230,
                      "end": 2231,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2209,
              "end": 2212
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2237,
      "end": 2256,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2241,
          "end": 2255,
          "id": {
            "type": "Identifier",
            "start": 2241,
            "end": 2255,
            "name": "asserted2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2250,
              "end": 2255,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2252,
                "end": 2255
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

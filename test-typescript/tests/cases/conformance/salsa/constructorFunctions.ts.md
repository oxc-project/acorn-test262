__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 891,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 81,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 81,
        "body": [
          {
            "type": "IfStatement",
            "start": 20,
            "end": 63,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 47,
              "end": 63,
              "argument": {
                "type": "NewExpression",
                "start": 54,
                "end": 62,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 60,
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "test": {
              "type": "UnaryExpression",
              "start": 24,
              "end": 45,
              "argument": {
                "type": "BinaryExpression",
                "start": 26,
                "end": 44,
                "operator": "instanceof",
                "left": {
                  "type": "ThisExpression",
                  "start": 26,
                  "end": 30
                },
                "right": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 44,
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 68,
            "end": 79,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 68,
              "end": 78,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 68,
                "end": 74,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 68,
                  "end": 72
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 77,
                "end": 78,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 94,
            "decorators": [],
            "name": "c1_v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 97,
            "end": 101,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 97,
              "end": 99,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 126,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 125,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 114,
            "decorators": [],
            "name": "c1_v2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 117,
            "end": 125,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 121,
              "end": 123,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 217,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 216,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 134,
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 137,
            "end": 216,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 149,
              "end": 216,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 155,
                  "end": 198,
                  "alternate": null,
                  "consequent": {
                    "type": "ReturnStatement",
                    "start": 182,
                    "end": 198,
                    "argument": {
                      "type": "NewExpression",
                      "start": 189,
                      "end": 197,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 193,
                        "end": 195,
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "start": 159,
                    "end": 180,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 161,
                      "end": 179,
                      "operator": "instanceof",
                      "left": {
                        "type": "ThisExpression",
                        "start": 161,
                        "end": 165
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 179,
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "!",
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 203,
                  "end": 214,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 203,
                    "end": 213,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 203,
                      "end": 209,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 203,
                        "end": 207
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 208,
                        "end": 209,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 212,
                      "end": 213,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 219,
      "end": 238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 237,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 230,
            "decorators": [],
            "name": "c2_v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 233,
            "end": 237,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 233,
              "end": 235,
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 239,
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 261,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 250,
            "decorators": [],
            "name": "c2_v2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 253,
            "end": 261,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 257,
              "end": 259,
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 278,
      "end": 343,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 292,
        "end": 343,
        "body": [
          {
            "type": "IfStatement",
            "start": 298,
            "end": 341,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 325,
              "end": 341,
              "argument": {
                "type": "NewExpression",
                "start": 332,
                "end": 340,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 338,
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "test": {
              "type": "UnaryExpression",
              "start": 302,
              "end": 323,
              "argument": {
                "type": "BinaryExpression",
                "start": 304,
                "end": 322,
                "operator": "instanceof",
                "left": {
                  "type": "ThisExpression",
                  "start": 304,
                  "end": 308
                },
                "right": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 322,
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "!",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 289,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 343,
      "end": 344
    },
    {
      "type": "VariableDeclaration",
      "start": 346,
      "end": 365,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 352,
          "end": 364,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 352,
            "end": 357,
            "decorators": [],
            "name": "c3_v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 360,
            "end": 364,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 360,
              "end": 362,
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 425,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 424,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 413,
            "decorators": [],
            "name": "c3_v2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 416,
            "end": 424,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 420,
              "end": 422,
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 441,
      "end": 514,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 445,
          "end": 513,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 447,
            "decorators": [],
            "name": "C4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 450,
            "end": 513,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 462,
              "end": 513,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 468,
                  "end": 511,
                  "alternate": null,
                  "consequent": {
                    "type": "ReturnStatement",
                    "start": 495,
                    "end": 511,
                    "argument": {
                      "type": "NewExpression",
                      "start": 502,
                      "end": 510,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 506,
                        "end": 508,
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "start": 472,
                    "end": 493,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 474,
                      "end": 492,
                      "operator": "instanceof",
                      "left": {
                        "type": "ThisExpression",
                        "start": 474,
                        "end": 478
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 490,
                        "end": 492,
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "!",
                    "prefix": true
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 516,
      "end": 535,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 522,
          "end": 534,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 522,
            "end": 527,
            "decorators": [],
            "name": "c4_v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 530,
            "end": 534,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 530,
              "end": 532,
              "decorators": [],
              "name": "C4",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 572,
      "end": 595,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 578,
          "end": 594,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 578,
            "end": 583,
            "decorators": [],
            "name": "c4_v2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 586,
            "end": 594,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 590,
              "end": 592,
              "decorators": [],
              "name": "C4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 597,
      "end": 607,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 601,
          "end": 606,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 601,
            "end": 606,
            "decorators": [],
            "name": "c5_v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 608,
      "end": 633,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 608,
        "end": 632,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 608,
          "end": 613,
          "decorators": [],
          "name": "c5_v1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "FunctionExpression",
          "start": 616,
          "end": 632,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 629,
            "end": 632,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": {
            "type": "Identifier",
            "start": 625,
            "end": 626,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 634,
      "end": 646,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 634,
        "end": 645,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 638,
          "end": 643,
          "decorators": [],
          "name": "c5_v1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 648,
      "end": 658,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 652,
          "end": 657,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 652,
            "end": 657,
            "decorators": [],
            "name": "c5_v2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 659,
      "end": 677,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 659,
        "end": 676,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 659,
          "end": 664,
          "decorators": [],
          "name": "c5_v2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ClassExpression",
          "start": 667,
          "end": 676,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 673,
            "end": 676,
            "body": []
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 678,
      "end": 690,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 678,
        "end": 689,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 682,
          "end": 687,
          "decorators": [],
          "name": "c5_v2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 706,
      "end": 775,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 720,
        "end": 775,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 724,
            "end": 773,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 724,
              "end": 773,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 724,
                "end": 738,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 724,
                  "end": 728
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 738,
                  "decorators": [],
                  "name": "functions",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "ArrayExpression",
                "start": 741,
                "end": 773,
                "elements": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 742,
                    "end": 748,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 747,
                      "end": 748,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 742,
                        "end": 743,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 750,
                    "end": 760,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 755,
                      "end": 760,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 755,
                        "end": 756,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 759,
                        "end": 760,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 750,
                        "end": 751,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 762,
                    "end": 772,
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "start": 767,
                      "end": 772,
                      "operator": "-",
                      "left": {
                        "type": "Identifier",
                        "start": 767,
                        "end": 768,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 771,
                        "end": 772,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 762,
                        "end": 763,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 715,
        "end": 717,
        "decorators": [],
        "name": "C6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 775,
      "end": 776
    },
    {
      "type": "VariableDeclaration",
      "start": 778,
      "end": 799,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 782,
          "end": 798,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 782,
            "end": 787,
            "decorators": [],
            "name": "c6_v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 790,
            "end": 798,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 794,
              "end": 796,
              "decorators": [],
              "name": "C6",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 849,
      "end": 868,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 866,
        "end": 868,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 858,
        "end": 860,
        "decorators": [],
        "name": "C7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 861,
          "end": 864,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 870,
      "end": 891,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 874,
          "end": 890,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 874,
            "end": 879,
            "decorators": [],
            "name": "c7_v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 882,
            "end": 890,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 886,
              "end": 888,
              "decorators": [],
              "name": "C7",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

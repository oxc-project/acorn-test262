__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 781,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "my",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 9,
            "end": 17,
            "left": {
              "type": "Identifier",
              "start": 9,
              "end": 11,
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "ObjectExpression",
              "start": 15,
              "end": 17,
              "properties": []
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 89,
      "expression": {
        "type": "AssignmentExpression",
        "start": 44,
        "end": 89,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 44,
          "end": 53,
          "object": {
            "type": "Identifier",
            "start": 44,
            "end": 46,
            "decorators": [],
            "name": "my",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 47,
            "end": 53,
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 56,
          "end": 89,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 68,
            "end": 89,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 74,
                "end": 87,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 81,
                  "end": 86,
                  "left": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 85,
                    "end": 86,
                    "value": 1,
                    "raw": "1"
                  }
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
      "start": 90,
      "end": 104,
      "expression": {
        "type": "AssignmentExpression",
        "start": 90,
        "end": 103,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 90,
          "end": 99,
          "object": {
            "type": "Identifier",
            "start": 90,
            "end": 92,
            "decorators": [],
            "name": "my",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 93,
            "end": 99,
            "decorators": [],
            "name": "number",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 102,
          "end": 103,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 120,
      "expression": {
        "type": "AssignmentExpression",
        "start": 105,
        "end": 119,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 105,
          "end": 114,
          "object": {
            "type": "Identifier",
            "start": 105,
            "end": 107,
            "decorators": [],
            "name": "my",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 108,
            "end": 114,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 117,
          "end": 119,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 155,
      "expression": {
        "type": "AssignmentExpression",
        "start": 121,
        "end": 154,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 121,
          "end": 133,
          "object": {
            "type": "Identifier",
            "start": 121,
            "end": 123,
            "decorators": [],
            "name": "my",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 133,
            "decorators": [],
            "name": "predicate",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 136,
          "end": 154,
          "left": {
            "type": "MemberExpression",
            "start": 136,
            "end": 148,
            "object": {
              "type": "Identifier",
              "start": 136,
              "end": 138,
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 139,
              "end": 148,
              "decorators": [],
              "name": "predicate",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "operator": "||",
          "right": {
            "type": "ObjectExpression",
            "start": 152,
            "end": 154,
            "properties": []
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 237,
      "expression": {
        "type": "AssignmentExpression",
        "start": 156,
        "end": 236,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 156,
          "end": 174,
          "object": {
            "type": "MemberExpression",
            "start": 156,
            "end": 168,
            "object": {
              "type": "Identifier",
              "start": 156,
              "end": 158,
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 159,
              "end": 168,
              "decorators": [],
              "name": "predicate",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 169,
            "end": 174,
            "decorators": [],
            "name": "query",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 177,
          "end": 236,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 189,
            "end": 236,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 195,
                "end": 209,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 199,
                    "end": 208,
                    "id": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 201,
                      "decorators": [],
                      "name": "me",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ThisExpression",
                      "start": 204,
                      "end": 208
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 214,
                "end": 234,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 214,
                  "end": 233,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 214,
                    "end": 225,
                    "object": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 216,
                      "decorators": [],
                      "name": "me",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 225,
                      "decorators": [],
                      "name": "property",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 228,
                    "end": 233,
                    "value": false,
                    "raw": "false"
                  }
                },
                "directive": null
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 238,
      "end": 271,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 243,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 246,
            "end": 270,
            "callee": {
              "type": "MemberExpression",
              "start": 250,
              "end": 268,
              "object": {
                "type": "MemberExpression",
                "start": 250,
                "end": 262,
                "object": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 252,
                  "decorators": [],
                  "name": "my",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 262,
                  "decorators": [],
                  "name": "predicate",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 263,
                "end": 268,
                "decorators": [],
                "name": "query",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
      "type": "ExpressionStatement",
      "start": 272,
      "end": 330,
      "expression": {
        "type": "AssignmentExpression",
        "start": 272,
        "end": 330,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 272,
          "end": 298,
          "object": {
            "type": "MemberExpression",
            "start": 272,
            "end": 290,
            "object": {
              "type": "MemberExpression",
              "start": 272,
              "end": 284,
              "object": {
                "type": "Identifier",
                "start": 272,
                "end": 274,
                "decorators": [],
                "name": "my",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 275,
                "end": 284,
                "decorators": [],
                "name": "predicate",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 285,
              "end": 290,
              "decorators": [],
              "name": "query",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 291,
            "end": 298,
            "decorators": [],
            "name": "another",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 301,
          "end": 330,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 313,
            "end": 330,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 319,
                "end": 328,
                "argument": {
                  "type": "Literal",
                  "start": 326,
                  "end": 327,
                  "value": 1,
                  "raw": "1"
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
      "start": 331,
      "end": 365,
      "expression": {
        "type": "AssignmentExpression",
        "start": 331,
        "end": 365,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 331,
          "end": 356,
          "object": {
            "type": "MemberExpression",
            "start": 331,
            "end": 349,
            "object": {
              "type": "MemberExpression",
              "start": 331,
              "end": 343,
              "object": {
                "type": "Identifier",
                "start": 331,
                "end": 333,
                "decorators": [],
                "name": "my",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 334,
                "end": 343,
                "decorators": [],
                "name": "predicate",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 344,
              "end": 349,
              "decorators": [],
              "name": "query",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 350,
            "end": 356,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 359,
          "end": 365,
          "value": "none",
          "raw": "'none'"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 423,
      "end": 536,
      "expression": {
        "type": "AssignmentExpression",
        "start": 423,
        "end": 536,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 423,
          "end": 440,
          "object": {
            "type": "MemberExpression",
            "start": 423,
            "end": 435,
            "object": {
              "type": "Identifier",
              "start": 423,
              "end": 425,
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 426,
              "end": 435,
              "decorators": [],
              "name": "predicate",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 436,
            "end": 440,
            "decorators": [],
            "name": "sort",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 443,
          "end": 536,
          "left": {
            "type": "MemberExpression",
            "start": 443,
            "end": 460,
            "object": {
              "type": "MemberExpression",
              "start": 443,
              "end": 455,
              "object": {
                "type": "Identifier",
                "start": 443,
                "end": 445,
                "decorators": [],
                "name": "my",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 446,
                "end": 455,
                "decorators": [],
                "name": "predicate",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 456,
              "end": 460,
              "decorators": [],
              "name": "sort",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "operator": "||",
          "right": {
            "type": "FunctionExpression",
            "start": 464,
            "end": 536,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 474,
                "end": 479,
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 481,
                "end": 487,
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 489,
              "end": 536,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 495,
                  "end": 534,
                  "argument": {
                    "type": "ConditionalExpression",
                    "start": 502,
                    "end": 533,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 502,
                      "end": 516,
                      "left": {
                        "type": "Identifier",
                        "start": 502,
                        "end": 507,
                        "decorators": [],
                        "name": "first",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": ">",
                      "right": {
                        "type": "Identifier",
                        "start": 510,
                        "end": 516,
                        "decorators": [],
                        "name": "second",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "consequent": {
                      "type": "Identifier",
                      "start": 519,
                      "end": 524,
                      "decorators": [],
                      "name": "first",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "alternate": {
                      "type": "Identifier",
                      "start": 527,
                      "end": 533,
                      "decorators": [],
                      "name": "second",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "expression": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 537,
      "end": 590,
      "expression": {
        "type": "AssignmentExpression",
        "start": 537,
        "end": 590,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 537,
          "end": 554,
          "object": {
            "type": "MemberExpression",
            "start": 537,
            "end": 549,
            "object": {
              "type": "Identifier",
              "start": 537,
              "end": 539,
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 540,
              "end": 549,
              "decorators": [],
              "name": "predicate",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 550,
            "end": 554,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ClassExpression",
          "start": 557,
          "end": 590,
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 563,
            "end": 590,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 569,
                "end": 588,
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "start": 569,
                  "end": 570,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 570,
                  "end": 588,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 573,
                    "end": 588,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 575,
                        "end": 586,
                        "argument": {
                          "type": "Literal",
                          "start": 582,
                          "end": 585,
                          "value": 101,
                          "raw": "101"
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
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 616,
      "end": 643,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 620,
          "end": 642,
          "id": {
            "type": "Identifier",
            "start": 620,
            "end": 623,
            "decorators": [],
            "name": "min",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 626,
            "end": 642,
            "left": {
              "type": "MemberExpression",
              "start": 626,
              "end": 636,
              "object": {
                "type": "Identifier",
                "start": 626,
                "end": 632,
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 633,
                "end": 636,
                "decorators": [],
                "name": "min",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "||",
            "right": {
              "type": "ObjectExpression",
              "start": 640,
              "end": 642,
              "properties": []
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 644,
      "end": 688,
      "expression": {
        "type": "AssignmentExpression",
        "start": 644,
        "end": 687,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 644,
          "end": 652,
          "object": {
            "type": "Identifier",
            "start": 644,
            "end": 647,
            "decorators": [],
            "name": "min",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 648,
            "end": 652,
            "decorators": [],
            "name": "nest",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 655,
          "end": 687,
          "left": {
            "type": "MemberExpression",
            "start": 655,
            "end": 668,
            "object": {
              "type": "MemberExpression",
              "start": 655,
              "end": 663,
              "object": {
                "type": "ThisExpression",
                "start": 655,
                "end": 659
              },
              "property": {
                "type": "Identifier",
                "start": 660,
                "end": 663,
                "decorators": [],
                "name": "min",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 664,
              "end": 668,
              "decorators": [],
              "name": "nest",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "operator": "||",
          "right": {
            "type": "FunctionExpression",
            "start": 672,
            "end": 687,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 684,
              "end": 687,
              "body": []
            },
            "expression": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 689,
      "end": 739,
      "expression": {
        "type": "AssignmentExpression",
        "start": 689,
        "end": 738,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 689,
          "end": 703,
          "object": {
            "type": "MemberExpression",
            "start": 689,
            "end": 697,
            "object": {
              "type": "Identifier",
              "start": 689,
              "end": 692,
              "decorators": [],
              "name": "min",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 693,
              "end": 697,
              "decorators": [],
              "name": "nest",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 698,
            "end": 703,
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 706,
          "end": 738,
          "left": {
            "type": "MemberExpression",
            "start": 706,
            "end": 725,
            "object": {
              "type": "MemberExpression",
              "start": 706,
              "end": 719,
              "object": {
                "type": "MemberExpression",
                "start": 706,
                "end": 714,
                "object": {
                  "type": "Identifier",
                  "start": 706,
                  "end": 710,
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 711,
                  "end": 714,
                  "decorators": [],
                  "name": "min",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 715,
                "end": 719,
                "decorators": [],
                "name": "nest",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 720,
              "end": 725,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "operator": "||",
          "right": {
            "type": "ClassExpression",
            "start": 729,
            "end": 738,
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 735,
              "end": 738,
              "body": []
            },
            "abstract": false,
            "declare": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 740,
      "end": 781,
      "expression": {
        "type": "AssignmentExpression",
        "start": 740,
        "end": 780,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 740,
          "end": 752,
          "object": {
            "type": "Identifier",
            "start": 740,
            "end": 743,
            "decorators": [],
            "name": "min",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 744,
            "end": 752,
            "decorators": [],
            "name": "property",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 755,
          "end": 780,
          "left": {
            "type": "MemberExpression",
            "start": 755,
            "end": 774,
            "object": {
              "type": "MemberExpression",
              "start": 755,
              "end": 765,
              "object": {
                "type": "Identifier",
                "start": 755,
                "end": 761,
                "decorators": [],
                "name": "global",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 762,
                "end": 765,
                "decorators": [],
                "name": "min",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 766,
              "end": 774,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "operator": "||",
          "right": {
            "type": "ObjectExpression",
            "start": 778,
            "end": 780,
            "properties": []
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

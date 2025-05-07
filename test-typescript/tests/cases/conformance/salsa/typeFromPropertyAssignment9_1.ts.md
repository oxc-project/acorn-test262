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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
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
            "operator": "??",
            "left": {
              "type": "Identifier",
              "start": 9,
              "end": 11,
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "ObjectExpression",
              "start": 15,
              "end": 17,
              "properties": []
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 89,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 44,
        "end": 89,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 44,
          "end": 53,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 44,
            "end": 46,
            "decorators": [],
            "name": "my",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 47,
            "end": 53,
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 56,
          "end": 89,
          "async": false,
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
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 85,
                    "end": 86,
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
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 90,
      "end": 104,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 90,
        "end": 103,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 90,
          "end": 99,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 90,
            "end": 92,
            "decorators": [],
            "name": "my",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 93,
            "end": 99,
            "decorators": [],
            "name": "number",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 102,
          "end": 103,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 120,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 105,
        "end": 119,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 105,
          "end": 114,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 105,
            "end": 107,
            "decorators": [],
            "name": "my",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 108,
            "end": 114,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 117,
          "end": 119,
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 155,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 121,
        "end": 154,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 121,
          "end": 133,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 121,
            "end": 123,
            "decorators": [],
            "name": "my",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 133,
            "decorators": [],
            "name": "predicate",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "LogicalExpression",
          "start": 136,
          "end": 154,
          "operator": "??",
          "left": {
            "type": "MemberExpression",
            "start": 136,
            "end": 148,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 136,
              "end": 138,
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 139,
              "end": 148,
              "decorators": [],
              "name": "predicate",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 152,
            "end": 154,
            "properties": []
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 237,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 156,
        "end": 236,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 156,
          "end": 174,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 156,
            "end": 168,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 156,
              "end": 158,
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 159,
              "end": 168,
              "decorators": [],
              "name": "predicate",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 169,
            "end": 174,
            "decorators": [],
            "name": "query",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 177,
          "end": 236,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 189,
            "end": 236,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 195,
                "end": 209,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 199,
                    "end": 208,
                    "definite": false,
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
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              {
                "type": "ExpressionStatement",
                "start": 214,
                "end": 234,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 214,
                  "end": 233,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 214,
                    "end": 225,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 216,
                      "decorators": [],
                      "name": "me",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 225,
                      "decorators": [],
                      "name": "property",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 228,
                    "end": 233,
                    "raw": "false",
                    "value": false,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 238,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 270,
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 250,
              "end": 268,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 250,
                "end": 262,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 252,
                  "decorators": [],
                  "name": "my",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 262,
                  "decorators": [],
                  "name": "predicate",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 263,
                "end": 268,
                "decorators": [],
                "name": "query",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 272,
      "end": 330,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 272,
        "end": 330,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 272,
          "end": 298,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 272,
            "end": 290,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 272,
              "end": 284,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 272,
                "end": 274,
                "decorators": [],
                "name": "my",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 275,
                "end": 284,
                "decorators": [],
                "name": "predicate",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 285,
              "end": 290,
              "decorators": [],
              "name": "query",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 291,
            "end": 298,
            "decorators": [],
            "name": "another",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 301,
          "end": 330,
          "async": false,
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
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
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
    },
    {
      "type": "ExpressionStatement",
      "start": 331,
      "end": 365,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 331,
        "end": 365,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 331,
          "end": 356,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 331,
            "end": 349,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 331,
              "end": 343,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 331,
                "end": 333,
                "decorators": [],
                "name": "my",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 334,
                "end": 343,
                "decorators": [],
                "name": "predicate",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 344,
              "end": 349,
              "decorators": [],
              "name": "query",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 350,
            "end": 356,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 359,
          "end": 365,
          "raw": "'none'",
          "value": "none",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 423,
      "end": 536,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 423,
        "end": 536,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 423,
          "end": 440,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 423,
            "end": 435,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 423,
              "end": 425,
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 426,
              "end": 435,
              "decorators": [],
              "name": "predicate",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 436,
            "end": 440,
            "decorators": [],
            "name": "sort",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "LogicalExpression",
          "start": 443,
          "end": 536,
          "operator": "??",
          "left": {
            "type": "MemberExpression",
            "start": 443,
            "end": 460,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 443,
              "end": 455,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 443,
                "end": 445,
                "decorators": [],
                "name": "my",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 446,
                "end": 455,
                "decorators": [],
                "name": "predicate",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 456,
              "end": 460,
              "decorators": [],
              "name": "sort",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "FunctionExpression",
            "start": 464,
            "end": 536,
            "async": false,
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
                    "alternate": {
                      "type": "Identifier",
                      "start": 527,
                      "end": 533,
                      "decorators": [],
                      "name": "second",
                      "optional": false,
                      "typeAnnotation": null
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
                    "test": {
                      "type": "BinaryExpression",
                      "start": 502,
                      "end": 516,
                      "operator": ">",
                      "left": {
                        "type": "Identifier",
                        "start": 502,
                        "end": 507,
                        "decorators": [],
                        "name": "first",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 510,
                        "end": 516,
                        "decorators": [],
                        "name": "second",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 537,
      "end": 590,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 537,
        "end": 590,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 537,
          "end": 554,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 537,
            "end": 549,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 537,
              "end": 539,
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 540,
              "end": 549,
              "decorators": [],
              "name": "predicate",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 550,
            "end": 554,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 557,
          "end": 590,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 563,
            "end": 590,
            "body": [
              {
                "type": "MethodDefinition",
                "start": 569,
                "end": 588,
                "accessibility": null,
                "computed": false,
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
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 570,
                  "end": 588,
                  "async": false,
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
                          "raw": "101",
                          "value": 101,
                          "regex": null,
                          "bigint": null
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
            ]
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
      "type": "VariableDeclaration",
      "start": 616,
      "end": 643,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 620,
          "end": 642,
          "definite": false,
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
            "operator": "??",
            "left": {
              "type": "MemberExpression",
              "start": 626,
              "end": 636,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 626,
                "end": 632,
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 633,
                "end": 636,
                "decorators": [],
                "name": "min",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "ObjectExpression",
              "start": 640,
              "end": 642,
              "properties": []
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 644,
      "end": 688,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 644,
        "end": 687,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 644,
          "end": 652,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 644,
            "end": 647,
            "decorators": [],
            "name": "min",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 648,
            "end": 652,
            "decorators": [],
            "name": "nest",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "LogicalExpression",
          "start": 655,
          "end": 687,
          "operator": "??",
          "left": {
            "type": "MemberExpression",
            "start": 655,
            "end": 668,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 655,
              "end": 663,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 655,
                "end": 659
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 660,
                "end": 663,
                "decorators": [],
                "name": "min",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 664,
              "end": 668,
              "decorators": [],
              "name": "nest",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "FunctionExpression",
            "start": 672,
            "end": 687,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 684,
              "end": 687,
              "body": []
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 689,
      "end": 739,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 689,
        "end": 738,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 689,
          "end": 703,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 689,
            "end": 697,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 689,
              "end": 692,
              "decorators": [],
              "name": "min",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 693,
              "end": 697,
              "decorators": [],
              "name": "nest",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 698,
            "end": 703,
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "LogicalExpression",
          "start": 706,
          "end": 738,
          "operator": "??",
          "left": {
            "type": "MemberExpression",
            "start": 706,
            "end": 725,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 706,
              "end": 719,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 706,
                "end": 714,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 706,
                  "end": 710,
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 711,
                  "end": 714,
                  "decorators": [],
                  "name": "min",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 715,
                "end": 719,
                "decorators": [],
                "name": "nest",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 720,
              "end": 725,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "ClassExpression",
            "start": 729,
            "end": 738,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 735,
              "end": 738,
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 740,
      "end": 781,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 740,
        "end": 780,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 740,
          "end": 752,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 740,
            "end": 743,
            "decorators": [],
            "name": "min",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 744,
            "end": 752,
            "decorators": [],
            "name": "property",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "LogicalExpression",
          "start": 755,
          "end": 780,
          "operator": "??",
          "left": {
            "type": "MemberExpression",
            "start": 755,
            "end": 774,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 755,
              "end": 765,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 755,
                "end": 761,
                "decorators": [],
                "name": "global",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 762,
                "end": 765,
                "decorators": [],
                "name": "min",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 766,
              "end": 774,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 778,
            "end": 780,
            "properties": []
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

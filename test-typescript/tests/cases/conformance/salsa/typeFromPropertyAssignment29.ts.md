typeFromPropertyAssignment29.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 2000,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 60,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 60,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 38,
            "end": 58,
            "argument": {
              "type": "CallExpression",
              "start": 45,
              "end": 57,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 45,
                "end": 55,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 55,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
              },
              "optional": false
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
        "end": 20,
        "decorators": [],
        "name": "ExpandoDecl",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 30,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 24,
              "end": 30
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 81,
      "expression": {
        "type": "AssignmentExpression",
        "start": 61,
        "end": 81,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 61,
          "end": 77,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 72,
            "decorators": [],
            "name": "ExpandoDecl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 73,
            "end": 77,
            "decorators": [],
            "name": "prop",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 80,
          "end": 81,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 82,
      "end": 139,
      "expression": {
        "type": "AssignmentExpression",
        "start": 82,
        "end": 139,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 82,
          "end": 95,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 82,
            "end": 93,
            "decorators": [],
            "name": "ExpandoDecl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "decorators": [],
            "name": "m",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 98,
          "end": 139,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 118,
            "end": 139,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 124,
                "end": 137,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 131,
                  "end": 136,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 135,
                    "end": 136,
                    "raw": "1",
                    "value": 1
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
              "start": 107,
              "end": 116,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 108,
                "end": 116,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 110,
                  "end": 116
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 210,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "decorators": [],
            "name": "n",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 148,
            "end": 210,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 148,
              "end": 184,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 148,
                "end": 164,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 159,
                  "decorators": [],
                  "name": "ExpandoDecl",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 164,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                }
              },
              "right": {
                "type": "CallExpression",
                "start": 167,
                "end": 184,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 181,
                    "end": 183,
                    "raw": "12",
                    "value": 12
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 167,
                  "end": 180,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 178,
                    "decorators": [],
                    "name": "ExpandoDecl",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 180,
                    "decorators": [],
                    "name": "m",
                    "optional": false
                  }
                },
                "optional": false
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 187,
              "end": 210,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 187,
                "end": 203,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 199,
                    "end": 202,
                    "raw": "101",
                    "value": 101
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 198,
                  "decorators": [],
                  "name": "ExpandoDecl",
                  "optional": false
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 204,
                "end": 210,
                "decorators": [],
                "name": "length",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 212,
      "end": 281,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 281,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 229,
            "decorators": [],
            "name": "ExpandoExpr",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 232,
            "end": 281,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 253,
              "end": 281,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 259,
                  "end": 279,
                  "argument": {
                    "type": "CallExpression",
                    "start": 266,
                    "end": 278,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 266,
                      "end": 276,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 266,
                        "end": 267,
                        "decorators": [],
                        "name": "n",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 268,
                        "end": 276,
                        "decorators": [],
                        "name": "toString",
                        "optional": false
                      }
                    },
                    "optional": false
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
                "start": 242,
                "end": 251,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 243,
                  "end": 251,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 245,
                    "end": 251
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 282,
      "end": 309,
      "expression": {
        "type": "AssignmentExpression",
        "start": 282,
        "end": 309,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 282,
          "end": 298,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 282,
            "end": 293,
            "decorators": [],
            "name": "ExpandoExpr",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 294,
            "end": 298,
            "decorators": [],
            "name": "prop",
            "optional": false
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 301,
          "end": 309,
          "properties": [
            {
              "type": "Property",
              "start": 303,
              "end": 307,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 303,
                "end": 304,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 306,
                "end": 307,
                "raw": "2",
                "value": 2
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 310,
      "end": 338,
      "expression": {
        "type": "AssignmentExpression",
        "start": 310,
        "end": 338,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 310,
          "end": 326,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 310,
            "end": 321,
            "decorators": [],
            "name": "ExpandoExpr",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 322,
            "end": 326,
            "decorators": [],
            "name": "prop",
            "optional": false
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 329,
          "end": 338,
          "properties": [
            {
              "type": "Property",
              "start": 331,
              "end": 336,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 331,
                "end": 332,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 334,
                "end": 336,
                "raw": "\"\"",
                "value": ""
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 339,
      "end": 396,
      "expression": {
        "type": "AssignmentExpression",
        "start": 339,
        "end": 396,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 339,
          "end": 352,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 339,
            "end": 350,
            "decorators": [],
            "name": "ExpandoExpr",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 351,
            "end": 352,
            "decorators": [],
            "name": "m",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 355,
          "end": 396,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 375,
            "end": 396,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 381,
                "end": 394,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 388,
                  "end": 393,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 388,
                    "end": 389,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 392,
                    "end": 393,
                    "raw": "1",
                    "value": 1
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
              "start": 364,
              "end": 373,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 365,
                "end": 373,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 367,
                  "end": 373
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 397,
      "end": 476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 476,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 402,
            "decorators": [],
            "name": "n",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 405,
            "end": 476,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 405,
              "end": 450,
              "operator": "+",
              "left": {
                "type": "LogicalExpression",
                "start": 406,
                "end": 429,
                "operator": "||",
                "left": {
                  "type": "MemberExpression",
                  "start": 406,
                  "end": 424,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 406,
                    "end": 422,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 406,
                      "end": 417,
                      "decorators": [],
                      "name": "ExpandoExpr",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 418,
                      "end": 422,
                      "decorators": [],
                      "name": "prop",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 424,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 428,
                  "end": 429,
                  "raw": "0",
                  "value": 0
                }
              },
              "right": {
                "type": "CallExpression",
                "start": 433,
                "end": 450,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 447,
                    "end": 449,
                    "raw": "12",
                    "value": 12
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 433,
                  "end": 446,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 444,
                    "decorators": [],
                    "name": "ExpandoExpr",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 445,
                    "end": 446,
                    "decorators": [],
                    "name": "m",
                    "optional": false
                  }
                },
                "optional": false
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 453,
              "end": 476,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 453,
                "end": 469,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 465,
                    "end": 468,
                    "raw": "101",
                    "value": 101
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 464,
                  "decorators": [],
                  "name": "ExpandoExpr",
                  "optional": false
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 470,
                "end": 476,
                "decorators": [],
                "name": "length",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 478,
      "end": 527,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 484,
          "end": 526,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 484,
            "end": 496,
            "decorators": [],
            "name": "ExpandoArrow",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 499,
            "end": 526,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 514,
              "end": 526,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 514,
                "end": 524,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 515,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 516,
                  "end": 524,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 500,
                "end": 509,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 501,
                  "end": 509,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 503,
                    "end": 509
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 528,
      "end": 549,
      "expression": {
        "type": "AssignmentExpression",
        "start": 528,
        "end": 549,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 528,
          "end": 545,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 528,
            "end": 540,
            "decorators": [],
            "name": "ExpandoArrow",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 541,
            "end": 545,
            "decorators": [],
            "name": "prop",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 548,
          "end": 549,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 550,
      "end": 609,
      "expression": {
        "type": "AssignmentExpression",
        "start": 550,
        "end": 609,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 550,
          "end": 564,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 550,
            "end": 562,
            "decorators": [],
            "name": "ExpandoArrow",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 563,
            "end": 564,
            "decorators": [],
            "name": "m",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 567,
          "end": 609,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 587,
            "end": 609,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 593,
                "end": 606,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 600,
                  "end": 605,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 600,
                    "end": 601,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 604,
                    "end": 605,
                    "raw": "1",
                    "value": 1
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
              "start": 576,
              "end": 585,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 577,
                "end": 585,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 579,
                  "end": 585
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 611,
      "end": 772,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 645,
        "end": 772,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 651,
            "end": 717,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 657,
                "end": 716,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 657,
                  "end": 663,
                  "decorators": [],
                  "name": "nested",
                  "optional": false
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 666,
                  "end": 716,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 687,
                    "end": 716,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 697,
                        "end": 710,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 704,
                          "end": 709,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 704,
                            "end": 705,
                            "decorators": [],
                            "name": "n",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 708,
                            "end": 709,
                            "decorators": [],
                            "name": "m",
                            "optional": false
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
                      "start": 676,
                      "end": 685,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 677,
                        "end": 685,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 679,
                          "end": 685
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 722,
            "end": 751,
            "expression": {
              "type": "AssignmentExpression",
              "start": 722,
              "end": 750,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 722,
                "end": 734,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 722,
                  "end": 728,
                  "decorators": [],
                  "name": "nested",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 734,
                  "decorators": [],
                  "name": "total",
                  "optional": false
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 737,
                "end": 750,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 737,
                  "end": 738,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 741,
                  "end": 750,
                  "raw": "1_000_000",
                  "value": 1000000
                }
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 756,
            "end": 770,
            "argument": {
              "type": "Identifier",
              "start": 763,
              "end": 769,
              "decorators": [],
              "name": "nested",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 620,
        "end": 633,
        "decorators": [],
        "name": "ExpandoNested",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 634,
          "end": 643,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 635,
            "end": 643,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 637,
              "end": 643
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 773,
      "end": 797,
      "expression": {
        "type": "AssignmentExpression",
        "start": 773,
        "end": 796,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 773,
          "end": 791,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 773,
            "end": 786,
            "decorators": [],
            "name": "ExpandoNested",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 787,
            "end": 791,
            "decorators": [],
            "name": "also",
            "optional": false
          }
        },
        "right": {
          "type": "UnaryExpression",
          "start": 794,
          "end": 796,
          "argument": {
            "type": "Literal",
            "start": 795,
            "end": 796,
            "raw": "1",
            "value": 1
          },
          "operator": "-",
          "prefix": true
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 799,
      "end": 855,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 832,
        "end": 855,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 838,
            "end": 853,
            "argument": {
              "type": "BinaryExpression",
              "start": 845,
              "end": 852,
              "operator": "*",
              "left": {
                "type": "Identifier",
                "start": 845,
                "end": 846,
                "decorators": [],
                "name": "n",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 849,
                "end": 852,
                "raw": "100",
                "value": 100
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
        "start": 808,
        "end": 820,
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 821,
          "end": 830,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 822,
            "end": 830,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 824,
              "end": 830
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 856,
      "end": 877,
      "expression": {
        "type": "AssignmentExpression",
        "start": 856,
        "end": 877,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 856,
          "end": 871,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 856,
            "end": 868,
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 869,
            "end": 871,
            "decorators": [],
            "name": "p1",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 874,
          "end": 877,
          "raw": "111",
          "value": 111
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 878,
      "end": 929,
      "body": {
        "type": "TSModuleBlock",
        "start": 901,
        "end": 929,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 907,
            "end": 927,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 914,
              "end": 927,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 918,
                  "end": 926,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 918,
                    "end": 920,
                    "decorators": [],
                    "name": "p2",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 923,
                    "end": 926,
                    "raw": "222",
                    "value": 222
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 888,
        "end": 900,
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 930,
      "end": 981,
      "body": {
        "type": "TSModuleBlock",
        "start": 953,
        "end": 981,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 959,
            "end": 979,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 966,
              "end": 979,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 970,
                  "end": 978,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 970,
                    "end": 972,
                    "decorators": [],
                    "name": "p3",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 975,
                    "end": 978,
                    "raw": "333",
                    "value": 333
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 940,
        "end": 952,
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "VariableDeclaration",
      "start": 982,
      "end": 1060,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 986,
          "end": 1059,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 986,
            "end": 987,
            "decorators": [],
            "name": "n",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 990,
            "end": 1059,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 990,
              "end": 1041,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 990,
                "end": 1023,
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "start": 990,
                  "end": 1005,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 990,
                    "end": 1002,
                    "decorators": [],
                    "name": "ExpandoMerge",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1003,
                    "end": 1005,
                    "decorators": [],
                    "name": "p1",
                    "optional": false
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 1008,
                  "end": 1023,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1008,
                    "end": 1020,
                    "decorators": [],
                    "name": "ExpandoMerge",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1021,
                    "end": 1023,
                    "decorators": [],
                    "name": "p2",
                    "optional": false
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 1026,
                "end": 1041,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1026,
                  "end": 1038,
                  "decorators": [],
                  "name": "ExpandoMerge",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1039,
                  "end": 1041,
                  "decorators": [],
                  "name": "p3",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "CallExpression",
              "start": 1044,
              "end": 1059,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1057,
                  "end": 1058,
                  "raw": "1",
                  "value": 1
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1044,
                "end": 1056,
                "decorators": [],
                "name": "ExpandoMerge",
                "optional": false
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1062,
      "end": 1216,
      "body": {
        "type": "TSModuleBlock",
        "start": 1075,
        "end": 1216,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 1081,
            "end": 1117,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1115,
              "end": 1117,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 1090,
              "end": 1106,
              "decorators": [],
              "name": "ExpandoNamespace",
              "optional": false
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1108,
              "end": 1114,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1110,
                "end": 1114
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1122,
            "end": 1147,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1122,
              "end": 1146,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1122,
                "end": 1141,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1122,
                  "end": 1138,
                  "decorators": [],
                  "name": "ExpandoNamespace",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1139,
                  "end": 1141,
                  "decorators": [],
                  "name": "p6",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 1144,
                "end": 1146,
                "raw": "42",
                "value": 42
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1152,
            "end": 1214,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 1159,
              "end": 1214,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1174,
                "end": 1214,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1184,
                    "end": 1208,
                    "argument": {
                      "type": "Identifier",
                      "start": 1191,
                      "end": 1207,
                      "decorators": [],
                      "name": "ExpandoNamespace",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 1168,
                "end": 1171,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "params": []
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1072,
        "end": 1074,
        "decorators": [],
        "name": "Ns",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "VariableDeclaration",
      "start": 1268,
      "end": 1336,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1272,
          "end": 1336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1272,
            "end": 1284,
            "decorators": [],
            "name": "ExpandoExpr2",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1287,
            "end": 1336,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1308,
              "end": 1336,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1314,
                  "end": 1334,
                  "argument": {
                    "type": "CallExpression",
                    "start": 1321,
                    "end": 1333,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1321,
                      "end": 1331,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1321,
                        "end": 1322,
                        "decorators": [],
                        "name": "n",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1323,
                        "end": 1331,
                        "decorators": [],
                        "name": "toString",
                        "optional": false
                      }
                    },
                    "optional": false
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
                "start": 1297,
                "end": 1306,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1298,
                  "end": 1306,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1300,
                    "end": 1306
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1337,
      "end": 1358,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1337,
        "end": 1358,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1337,
          "end": 1354,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1337,
            "end": 1349,
            "decorators": [],
            "name": "ExpandoExpr2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1350,
            "end": 1354,
            "decorators": [],
            "name": "prop",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 1357,
          "end": 1358,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1359,
      "end": 1417,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1359,
        "end": 1417,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1359,
          "end": 1373,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1359,
            "end": 1371,
            "decorators": [],
            "name": "ExpandoExpr2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1372,
            "end": 1373,
            "decorators": [],
            "name": "m",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1376,
          "end": 1417,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1396,
            "end": 1417,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 1402,
                "end": 1415,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 1409,
                  "end": 1414,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 1409,
                    "end": 1410,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1413,
                    "end": 1414,
                    "raw": "1",
                    "value": 1
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
              "start": 1385,
              "end": 1394,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1386,
                "end": 1394,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1388,
                  "end": 1394
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1418,
      "end": 1491,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1422,
          "end": 1491,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1422,
            "end": 1423,
            "decorators": [],
            "name": "n",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1426,
            "end": 1491,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 1426,
              "end": 1464,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 1426,
                "end": 1443,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1426,
                  "end": 1438,
                  "decorators": [],
                  "name": "ExpandoExpr2",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1439,
                  "end": 1443,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                }
              },
              "right": {
                "type": "CallExpression",
                "start": 1446,
                "end": 1464,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1461,
                    "end": 1463,
                    "raw": "12",
                    "value": 12
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 1446,
                  "end": 1460,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1446,
                    "end": 1458,
                    "decorators": [],
                    "name": "ExpandoExpr2",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1459,
                    "end": 1460,
                    "decorators": [],
                    "name": "m",
                    "optional": false
                  }
                },
                "optional": false
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 1467,
              "end": 1491,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 1467,
                "end": 1484,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1480,
                    "end": 1483,
                    "raw": "101",
                    "value": 101
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1467,
                  "end": 1479,
                  "decorators": [],
                  "name": "ExpandoExpr2",
                  "optional": false
                },
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1485,
                "end": 1491,
                "decorators": [],
                "name": "length",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 1558,
      "end": 1594,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1577,
        "end": 1594,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1583,
            "end": 1592,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1583,
              "end": 1584,
              "decorators": [],
              "name": "n",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 1587,
              "end": 1591,
              "raw": "1001",
              "value": 1001
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1564,
        "end": 1576,
        "decorators": [],
        "name": "ExpandoClass",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1595,
      "end": 1616,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1595,
        "end": 1616,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1595,
          "end": 1612,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1595,
            "end": 1607,
            "decorators": [],
            "name": "ExpandoClass",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1608,
            "end": 1612,
            "decorators": [],
            "name": "prop",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 1615,
          "end": 1616,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1617,
      "end": 1675,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1617,
        "end": 1675,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1617,
          "end": 1631,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1617,
            "end": 1629,
            "decorators": [],
            "name": "ExpandoClass",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1630,
            "end": 1631,
            "decorators": [],
            "name": "m",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1634,
          "end": 1675,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1654,
            "end": 1675,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 1660,
                "end": 1673,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 1667,
                  "end": 1672,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 1667,
                    "end": 1668,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1671,
                    "end": 1672,
                    "raw": "1",
                    "value": 1
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
              "start": 1643,
              "end": 1652,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1644,
                "end": 1652,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1646,
                  "end": 1652
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1676,
      "end": 1745,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1680,
          "end": 1745,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1680,
            "end": 1681,
            "decorators": [],
            "name": "n",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1684,
            "end": 1745,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 1684,
              "end": 1722,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 1684,
                "end": 1701,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1684,
                  "end": 1696,
                  "decorators": [],
                  "name": "ExpandoClass",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1697,
                  "end": 1701,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                }
              },
              "right": {
                "type": "CallExpression",
                "start": 1704,
                "end": 1722,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1719,
                    "end": 1721,
                    "raw": "12",
                    "value": 12
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 1704,
                  "end": 1718,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1704,
                    "end": 1716,
                    "decorators": [],
                    "name": "ExpandoClass",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1717,
                    "end": 1718,
                    "decorators": [],
                    "name": "m",
                    "optional": false
                  }
                },
                "optional": false
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 1725,
              "end": 1745,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 1725,
                "end": 1743,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 1729,
                  "end": 1741,
                  "decorators": [],
                  "name": "ExpandoClass",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1744,
                "end": 1745,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1804,
      "end": 1847,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1808,
          "end": 1847,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1808,
            "end": 1820,
            "decorators": [],
            "name": "ExpandoExpr3",
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 1823,
            "end": 1847,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1829,
              "end": 1847,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1835,
                  "end": 1845,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1835,
                    "end": 1836,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "Literal",
                    "start": 1839,
                    "end": 1844,
                    "raw": "10001",
                    "value": 10001
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1848,
      "end": 1869,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1848,
        "end": 1869,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1848,
          "end": 1865,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1848,
            "end": 1860,
            "decorators": [],
            "name": "ExpandoExpr3",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1861,
            "end": 1865,
            "decorators": [],
            "name": "prop",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 1868,
          "end": 1869,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1870,
      "end": 1928,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1870,
        "end": 1928,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1870,
          "end": 1884,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1870,
            "end": 1882,
            "decorators": [],
            "name": "ExpandoExpr3",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1883,
            "end": 1884,
            "decorators": [],
            "name": "m",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1887,
          "end": 1928,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 1907,
            "end": 1928,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 1913,
                "end": 1926,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 1920,
                  "end": 1925,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 1920,
                    "end": 1921,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1924,
                    "end": 1925,
                    "raw": "1",
                    "value": 1
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
              "start": 1896,
              "end": 1905,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1897,
                "end": 1905,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1899,
                  "end": 1905
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1929,
      "end": 1998,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1933,
          "end": 1998,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1933,
            "end": 1934,
            "decorators": [],
            "name": "n",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1937,
            "end": 1998,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 1937,
              "end": 1975,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 1937,
                "end": 1954,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1937,
                  "end": 1949,
                  "decorators": [],
                  "name": "ExpandoExpr3",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1950,
                  "end": 1954,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                }
              },
              "right": {
                "type": "CallExpression",
                "start": 1957,
                "end": 1975,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1972,
                    "end": 1974,
                    "raw": "13",
                    "value": 13
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 1957,
                  "end": 1971,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1957,
                    "end": 1969,
                    "decorators": [],
                    "name": "ExpandoExpr3",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1970,
                    "end": 1971,
                    "decorators": [],
                    "name": "m",
                    "optional": false
                  }
                },
                "optional": false
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 1978,
              "end": 1998,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 1978,
                "end": 1996,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 1982,
                  "end": 1994,
                  "decorators": [],
                  "name": "ExpandoExpr3",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1997,
                "end": 1998,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```

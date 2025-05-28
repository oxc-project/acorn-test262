__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1999,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 20,
        "decorators": [],
        "name": "ExpandoDecl",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      ],
      "returnType": null,
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
              "callee": {
                "type": "MemberExpression",
                "start": 45,
                "end": 55,
                "object": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 55,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          }
        ]
      },
      "expression": false
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
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 72,
            "decorators": [],
            "name": "ExpandoDecl",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 73,
            "end": 77,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 80,
          "end": 81,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 82,
            "end": 93,
            "decorators": [],
            "name": "ExpandoDecl",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 98,
          "end": 139,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
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
          ],
          "returnType": null,
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
                  "left": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 135,
                    "end": 136,
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
      "type": "VariableDeclaration",
      "start": 140,
      "end": 210,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 210,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 148,
            "end": 210,
            "left": {
              "type": "BinaryExpression",
              "start": 148,
              "end": 184,
              "left": {
                "type": "MemberExpression",
                "start": 148,
                "end": 164,
                "object": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 159,
                  "decorators": [],
                  "name": "ExpandoDecl",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 164,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "start": 167,
                "end": 184,
                "callee": {
                  "type": "MemberExpression",
                  "start": 167,
                  "end": 180,
                  "object": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 178,
                    "decorators": [],
                    "name": "ExpandoDecl",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 180,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 181,
                    "end": 183,
                    "value": 12,
                    "raw": "12"
                  }
                ],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "start": 187,
              "end": 210,
              "object": {
                "type": "CallExpression",
                "start": 187,
                "end": 203,
                "callee": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 198,
                  "decorators": [],
                  "name": "ExpandoDecl",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 199,
                    "end": 202,
                    "value": 101,
                    "raw": "101"
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 204,
                "end": 210,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 212,
      "end": 281,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 281,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 229,
            "decorators": [],
            "name": "ExpandoExpr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 232,
            "end": 281,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
            ],
            "returnType": null,
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 266,
                      "end": 276,
                      "object": {
                        "type": "Identifier",
                        "start": 266,
                        "end": 267,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 268,
                        "end": 276,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 282,
            "end": 293,
            "decorators": [],
            "name": "ExpandoExpr",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 294,
            "end": 298,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 303,
                "end": 304,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 306,
                "end": 307,
                "value": 2,
                "raw": "2"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 310,
            "end": 321,
            "decorators": [],
            "name": "ExpandoExpr",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 322,
            "end": 326,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 331,
                "end": 332,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 334,
                "end": 336,
                "value": "",
                "raw": "\"\""
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 339,
            "end": 350,
            "decorators": [],
            "name": "ExpandoExpr",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 351,
            "end": 352,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 355,
          "end": 396,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
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
          ],
          "returnType": null,
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
                  "left": {
                    "type": "Identifier",
                    "start": 388,
                    "end": 389,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 392,
                    "end": 393,
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
      "type": "VariableDeclaration",
      "start": 397,
      "end": 476,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 476,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 402,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 405,
            "end": 476,
            "left": {
              "type": "BinaryExpression",
              "start": 405,
              "end": 450,
              "left": {
                "type": "LogicalExpression",
                "start": 406,
                "end": 429,
                "left": {
                  "type": "MemberExpression",
                  "start": 406,
                  "end": 424,
                  "object": {
                    "type": "MemberExpression",
                    "start": 406,
                    "end": 422,
                    "object": {
                      "type": "Identifier",
                      "start": 406,
                      "end": 417,
                      "decorators": [],
                      "name": "ExpandoExpr",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 418,
                      "end": 422,
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 424,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "||",
                "right": {
                  "type": "Literal",
                  "start": 428,
                  "end": 429,
                  "value": 0,
                  "raw": "0"
                }
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "start": 433,
                "end": 450,
                "callee": {
                  "type": "MemberExpression",
                  "start": 433,
                  "end": 446,
                  "object": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 444,
                    "decorators": [],
                    "name": "ExpandoExpr",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 445,
                    "end": 446,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 447,
                    "end": 449,
                    "value": 12,
                    "raw": "12"
                  }
                ],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "start": 453,
              "end": 476,
              "object": {
                "type": "CallExpression",
                "start": 453,
                "end": 469,
                "callee": {
                  "type": "Identifier",
                  "start": 453,
                  "end": 464,
                  "decorators": [],
                  "name": "ExpandoExpr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 465,
                    "end": 468,
                    "value": 101,
                    "raw": "101"
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 470,
                "end": 476,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 478,
      "end": 527,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 484,
          "end": 526,
          "id": {
            "type": "Identifier",
            "start": 484,
            "end": 496,
            "decorators": [],
            "name": "ExpandoArrow",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 499,
            "end": 526,
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 514,
              "end": 526,
              "callee": {
                "type": "MemberExpression",
                "start": 514,
                "end": 524,
                "object": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 515,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 516,
                  "end": 524,
                  "decorators": [],
                  "name": "toString",
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
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 528,
            "end": 540,
            "decorators": [],
            "name": "ExpandoArrow",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 541,
            "end": 545,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 548,
          "end": 549,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 550,
            "end": 562,
            "decorators": [],
            "name": "ExpandoArrow",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 563,
            "end": 564,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 567,
          "end": 609,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
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
          ],
          "returnType": null,
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
                  "left": {
                    "type": "Identifier",
                    "start": 600,
                    "end": 601,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 604,
                    "end": 605,
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
      "type": "FunctionDeclaration",
      "start": 611,
      "end": 772,
      "id": {
        "type": "Identifier",
        "start": 620,
        "end": 633,
        "decorators": [],
        "name": "ExpandoNested",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 645,
        "end": 772,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 651,
            "end": 717,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 657,
                "end": 716,
                "id": {
                  "type": "Identifier",
                  "start": 657,
                  "end": 663,
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 666,
                  "end": 716,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
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
                  ],
                  "returnType": null,
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
                          "left": {
                            "type": "Identifier",
                            "start": 704,
                            "end": 705,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "start": 708,
                            "end": 709,
                            "decorators": [],
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "definite": false
              }
            ],
            "declare": false
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
                "object": {
                  "type": "Identifier",
                  "start": 722,
                  "end": 728,
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 734,
                  "decorators": [],
                  "name": "total",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 737,
                "end": 750,
                "left": {
                  "type": "Identifier",
                  "start": 737,
                  "end": 738,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 741,
                  "end": 750,
                  "value": 1000000,
                  "raw": "1_000_000"
                }
              }
            },
            "directive": null
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
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
          "object": {
            "type": "Identifier",
            "start": 773,
            "end": 786,
            "decorators": [],
            "name": "ExpandoNested",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 787,
            "end": 791,
            "decorators": [],
            "name": "also",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 794,
          "end": 796,
          "operator": "-",
          "argument": {
            "type": "Literal",
            "start": 795,
            "end": 796,
            "value": 1,
            "raw": "1"
          },
          "prefix": true
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 799,
      "end": 855,
      "id": {
        "type": "Identifier",
        "start": 808,
        "end": 820,
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      ],
      "returnType": null,
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
              "left": {
                "type": "Identifier",
                "start": 845,
                "end": 846,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "start": 849,
                "end": 852,
                "value": 100,
                "raw": "100"
              }
            }
          }
        ]
      },
      "expression": false
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
          "object": {
            "type": "Identifier",
            "start": 856,
            "end": 868,
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 869,
            "end": 871,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 874,
          "end": 877,
          "value": 111,
          "raw": "111"
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 878,
      "end": 929,
      "id": {
        "type": "Identifier",
        "start": 888,
        "end": 900,
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 901,
        "end": 929,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 907,
            "end": 927,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 914,
              "end": 927,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 918,
                  "end": 926,
                  "id": {
                    "type": "Identifier",
                    "start": 918,
                    "end": 920,
                    "decorators": [],
                    "name": "p2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 923,
                    "end": 926,
                    "value": 222,
                    "raw": "222"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 930,
      "end": 981,
      "id": {
        "type": "Identifier",
        "start": 940,
        "end": 952,
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 953,
        "end": 981,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 959,
            "end": 979,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 966,
              "end": 979,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 970,
                  "end": 978,
                  "id": {
                    "type": "Identifier",
                    "start": 970,
                    "end": 972,
                    "decorators": [],
                    "name": "p3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 975,
                    "end": 978,
                    "value": 333,
                    "raw": "333"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 982,
      "end": 1060,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 986,
          "end": 1059,
          "id": {
            "type": "Identifier",
            "start": 986,
            "end": 987,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 990,
            "end": 1059,
            "left": {
              "type": "BinaryExpression",
              "start": 990,
              "end": 1041,
              "left": {
                "type": "BinaryExpression",
                "start": 990,
                "end": 1023,
                "left": {
                  "type": "MemberExpression",
                  "start": 990,
                  "end": 1005,
                  "object": {
                    "type": "Identifier",
                    "start": 990,
                    "end": 1002,
                    "decorators": [],
                    "name": "ExpandoMerge",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1003,
                    "end": 1005,
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "+",
                "right": {
                  "type": "MemberExpression",
                  "start": 1008,
                  "end": 1023,
                  "object": {
                    "type": "Identifier",
                    "start": 1008,
                    "end": 1020,
                    "decorators": [],
                    "name": "ExpandoMerge",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1021,
                    "end": 1023,
                    "decorators": [],
                    "name": "p2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "start": 1026,
                "end": 1041,
                "object": {
                  "type": "Identifier",
                  "start": 1026,
                  "end": 1038,
                  "decorators": [],
                  "name": "ExpandoMerge",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1039,
                  "end": 1041,
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "start": 1044,
              "end": 1059,
              "callee": {
                "type": "Identifier",
                "start": 1044,
                "end": 1056,
                "decorators": [],
                "name": "ExpandoMerge",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1057,
                  "end": 1058,
                  "value": 1,
                  "raw": "1"
                }
              ],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1062,
      "end": 1216,
      "id": {
        "type": "Identifier",
        "start": 1072,
        "end": 1074,
        "decorators": [],
        "name": "Ns",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1075,
        "end": 1216,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 1081,
            "end": 1117,
            "id": {
              "type": "Identifier",
              "start": 1090,
              "end": 1106,
              "decorators": [],
              "name": "ExpandoNamespace",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
            },
            "body": {
              "type": "BlockStatement",
              "start": 1115,
              "end": 1117,
              "body": []
            },
            "expression": false
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
                "object": {
                  "type": "Identifier",
                  "start": 1122,
                  "end": 1138,
                  "decorators": [],
                  "name": "ExpandoNamespace",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1139,
                  "end": 1141,
                  "decorators": [],
                  "name": "p6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 1144,
                "end": 1146,
                "value": 42,
                "raw": "42"
              }
            },
            "directive": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1152,
            "end": 1214,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 1159,
              "end": 1214,
              "id": {
                "type": "Identifier",
                "start": 1168,
                "end": 1171,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1268,
      "end": 1336,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1272,
          "end": 1336,
          "id": {
            "type": "Identifier",
            "start": 1272,
            "end": 1284,
            "decorators": [],
            "name": "ExpandoExpr2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1287,
            "end": 1336,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
            ],
            "returnType": null,
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1321,
                      "end": 1331,
                      "object": {
                        "type": "Identifier",
                        "start": 1321,
                        "end": 1322,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1323,
                        "end": 1331,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 1337,
            "end": 1349,
            "decorators": [],
            "name": "ExpandoExpr2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1350,
            "end": 1354,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1357,
          "end": 1358,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 1359,
            "end": 1371,
            "decorators": [],
            "name": "ExpandoExpr2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1372,
            "end": 1373,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1376,
          "end": 1417,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
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
          ],
          "returnType": null,
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
                  "left": {
                    "type": "Identifier",
                    "start": 1409,
                    "end": 1410,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 1413,
                    "end": 1414,
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
      "type": "VariableDeclaration",
      "start": 1418,
      "end": 1491,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1422,
          "end": 1491,
          "id": {
            "type": "Identifier",
            "start": 1422,
            "end": 1423,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1426,
            "end": 1491,
            "left": {
              "type": "BinaryExpression",
              "start": 1426,
              "end": 1464,
              "left": {
                "type": "MemberExpression",
                "start": 1426,
                "end": 1443,
                "object": {
                  "type": "Identifier",
                  "start": 1426,
                  "end": 1438,
                  "decorators": [],
                  "name": "ExpandoExpr2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1439,
                  "end": 1443,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "start": 1446,
                "end": 1464,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1446,
                  "end": 1460,
                  "object": {
                    "type": "Identifier",
                    "start": 1446,
                    "end": 1458,
                    "decorators": [],
                    "name": "ExpandoExpr2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1459,
                    "end": 1460,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1461,
                    "end": 1463,
                    "value": 12,
                    "raw": "12"
                  }
                ],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "start": 1467,
              "end": 1491,
              "object": {
                "type": "CallExpression",
                "start": 1467,
                "end": 1484,
                "callee": {
                  "type": "Identifier",
                  "start": 1467,
                  "end": 1479,
                  "decorators": [],
                  "name": "ExpandoExpr2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1480,
                    "end": 1483,
                    "value": 101,
                    "raw": "101"
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1485,
                "end": 1491,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1558,
      "end": 1594,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1564,
        "end": 1576,
        "decorators": [],
        "name": "ExpandoClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1577,
        "end": 1594,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1583,
            "end": 1592,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1583,
              "end": 1584,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1587,
              "end": 1591,
              "value": 1001,
              "raw": "1001"
            },
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
          "object": {
            "type": "Identifier",
            "start": 1595,
            "end": 1607,
            "decorators": [],
            "name": "ExpandoClass",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1608,
            "end": 1612,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1615,
          "end": 1616,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 1617,
            "end": 1629,
            "decorators": [],
            "name": "ExpandoClass",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1630,
            "end": 1631,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1634,
          "end": 1675,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
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
          ],
          "returnType": null,
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
                  "left": {
                    "type": "Identifier",
                    "start": 1667,
                    "end": 1668,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 1671,
                    "end": 1672,
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
      "type": "VariableDeclaration",
      "start": 1676,
      "end": 1745,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1680,
          "end": 1745,
          "id": {
            "type": "Identifier",
            "start": 1680,
            "end": 1681,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1684,
            "end": 1745,
            "left": {
              "type": "BinaryExpression",
              "start": 1684,
              "end": 1722,
              "left": {
                "type": "MemberExpression",
                "start": 1684,
                "end": 1701,
                "object": {
                  "type": "Identifier",
                  "start": 1684,
                  "end": 1696,
                  "decorators": [],
                  "name": "ExpandoClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1697,
                  "end": 1701,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "start": 1704,
                "end": 1722,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1704,
                  "end": 1718,
                  "object": {
                    "type": "Identifier",
                    "start": 1704,
                    "end": 1716,
                    "decorators": [],
                    "name": "ExpandoClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1717,
                    "end": 1718,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1719,
                    "end": 1721,
                    "value": 12,
                    "raw": "12"
                  }
                ],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "start": 1725,
              "end": 1745,
              "object": {
                "type": "NewExpression",
                "start": 1725,
                "end": 1743,
                "callee": {
                  "type": "Identifier",
                  "start": 1729,
                  "end": 1741,
                  "decorators": [],
                  "name": "ExpandoClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 1744,
                "end": 1745,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1804,
      "end": 1847,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1808,
          "end": 1847,
          "id": {
            "type": "Identifier",
            "start": 1808,
            "end": 1820,
            "decorators": [],
            "name": "ExpandoExpr3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 1823,
            "end": 1847,
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 1829,
              "end": 1847,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1835,
                  "end": 1845,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1835,
                    "end": 1836,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "start": 1839,
                    "end": 1844,
                    "value": 10001,
                    "raw": "10001"
                  },
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
          "definite": false
        }
      ],
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 1848,
            "end": 1860,
            "decorators": [],
            "name": "ExpandoExpr3",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1861,
            "end": 1865,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 1868,
          "end": 1869,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 1870,
            "end": 1882,
            "decorators": [],
            "name": "ExpandoExpr3",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1883,
            "end": 1884,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 1887,
          "end": 1928,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
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
          ],
          "returnType": null,
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
                  "left": {
                    "type": "Identifier",
                    "start": 1920,
                    "end": 1921,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 1924,
                    "end": 1925,
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
      "type": "VariableDeclaration",
      "start": 1929,
      "end": 1998,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1933,
          "end": 1998,
          "id": {
            "type": "Identifier",
            "start": 1933,
            "end": 1934,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1937,
            "end": 1998,
            "left": {
              "type": "BinaryExpression",
              "start": 1937,
              "end": 1975,
              "left": {
                "type": "MemberExpression",
                "start": 1937,
                "end": 1954,
                "object": {
                  "type": "Identifier",
                  "start": 1937,
                  "end": 1949,
                  "decorators": [],
                  "name": "ExpandoExpr3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1950,
                  "end": 1954,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "start": 1957,
                "end": 1975,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1957,
                  "end": 1971,
                  "object": {
                    "type": "Identifier",
                    "start": 1957,
                    "end": 1969,
                    "decorators": [],
                    "name": "ExpandoExpr3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1970,
                    "end": 1971,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 1972,
                    "end": 1974,
                    "value": 13,
                    "raw": "13"
                  }
                ],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "start": 1978,
              "end": 1998,
              "object": {
                "type": "NewExpression",
                "start": 1978,
                "end": 1996,
                "callee": {
                  "type": "Identifier",
                  "start": 1982,
                  "end": 1994,
                  "decorators": [],
                  "name": "ExpandoExpr3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 1997,
                "end": 1998,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

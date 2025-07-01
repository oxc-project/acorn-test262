__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoDecl",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 24,
              "end": 30
            },
            "start": 22,
            "end": 30
          },
          "start": 21,
          "end": 30
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 46
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 47,
                  "end": 55
                },
                "optional": false,
                "computed": false,
                "start": 45,
                "end": 55
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 45,
              "end": 57
            },
            "start": 38,
            "end": 58
          }
        ],
        "start": 32,
        "end": 60
      },
      "expression": false,
      "start": 0,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoDecl",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 72
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 77
          },
          "optional": false,
          "computed": false,
          "start": 61,
          "end": 77
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 80,
          "end": 81
        },
        "start": 61,
        "end": 81
      },
      "directive": null,
      "start": 61,
      "end": 81
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoDecl",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 93
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 95
          },
          "optional": false,
          "computed": false,
          "start": 82,
          "end": 95
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 110,
                  "end": 116
                },
                "start": 108,
                "end": 116
              },
              "start": 107,
              "end": 116
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 132
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 135,
                    "end": 136
                  },
                  "start": 131,
                  "end": 136
                },
                "start": 124,
                "end": 137
              }
            ],
            "start": 118,
            "end": 139
          },
          "expression": false,
          "start": 98,
          "end": 139
        },
        "start": 82,
        "end": 139
      },
      "directive": null,
      "start": 82,
      "end": 139
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoDecl",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 159
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 164
                },
                "optional": false,
                "computed": false,
                "start": 148,
                "end": 164
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoDecl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 167,
                    "end": 178
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 180
                  },
                  "optional": false,
                  "computed": false,
                  "start": 167,
                  "end": 180
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 181,
                    "end": 183
                  }
                ],
                "optional": false,
                "start": 167,
                "end": 184
              },
              "start": 148,
              "end": 184
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoDecl",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 198
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 101,
                    "raw": "101",
                    "start": 199,
                    "end": 202
                  }
                ],
                "optional": false,
                "start": 187,
                "end": 203
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 210
              },
              "optional": false,
              "computed": false,
              "start": 187,
              "end": 210
            },
            "start": 148,
            "end": 210
          },
          "definite": false,
          "start": 144,
          "end": 210
        }
      ],
      "declare": false,
      "start": 140,
      "end": 210
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoExpr",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 229
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 245,
                    "end": 251
                  },
                  "start": 243,
                  "end": 251
                },
                "start": 242,
                "end": 251
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 266,
                        "end": 267
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 268,
                        "end": 276
                      },
                      "optional": false,
                      "computed": false,
                      "start": 266,
                      "end": 276
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 266,
                    "end": 278
                  },
                  "start": 259,
                  "end": 279
                }
              ],
              "start": 253,
              "end": 281
            },
            "expression": false,
            "start": 232,
            "end": 281
          },
          "definite": false,
          "start": 218,
          "end": 281
        }
      ],
      "declare": false,
      "start": 212,
      "end": 281
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoExpr",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 293
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 298
          },
          "optional": false,
          "computed": false,
          "start": 282,
          "end": 298
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 304
              },
              "value": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 306,
                "end": 307
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 303,
              "end": 307
            }
          ],
          "start": 301,
          "end": 309
        },
        "start": 282,
        "end": 309
      },
      "directive": null,
      "start": 282,
      "end": 309
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoExpr",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 321
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 326
          },
          "optional": false,
          "computed": false,
          "start": 310,
          "end": 326
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 332
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 334,
                "end": 336
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 331,
              "end": 336
            }
          ],
          "start": 329,
          "end": 338
        },
        "start": 310,
        "end": 338
      },
      "directive": null,
      "start": 310,
      "end": 338
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoExpr",
            "optional": false,
            "typeAnnotation": null,
            "start": 339,
            "end": 350
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 351,
            "end": 352
          },
          "optional": false,
          "computed": false,
          "start": 339,
          "end": 352
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 367,
                  "end": 373
                },
                "start": 365,
                "end": 373
              },
              "start": 364,
              "end": 373
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 388,
                    "end": 389
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 392,
                    "end": 393
                  },
                  "start": 388,
                  "end": 393
                },
                "start": 381,
                "end": 394
              }
            ],
            "start": 375,
            "end": 396
          },
          "expression": false,
          "start": 355,
          "end": 396
        },
        "start": 339,
        "end": 396
      },
      "directive": null,
      "start": 339,
      "end": 396
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 402
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ExpandoExpr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 406,
                      "end": 417
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 418,
                      "end": 422
                    },
                    "optional": false,
                    "computed": false,
                    "start": 406,
                    "end": 422
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 423,
                    "end": 424
                  },
                  "optional": false,
                  "computed": false,
                  "start": 406,
                  "end": 424
                },
                "operator": "||",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 428,
                  "end": 429
                },
                "start": 406,
                "end": 429
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoExpr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 433,
                    "end": 444
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 446
                  },
                  "optional": false,
                  "computed": false,
                  "start": 433,
                  "end": 446
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 447,
                    "end": 449
                  }
                ],
                "optional": false,
                "start": 433,
                "end": 450
              },
              "start": 405,
              "end": 450
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoExpr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 464
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 101,
                    "raw": "101",
                    "start": 465,
                    "end": 468
                  }
                ],
                "optional": false,
                "start": 453,
                "end": 469
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 470,
                "end": 476
              },
              "optional": false,
              "computed": false,
              "start": 453,
              "end": 476
            },
            "start": 405,
            "end": 476
          },
          "definite": false,
          "start": 401,
          "end": 476
        }
      ],
      "declare": false,
      "start": 397,
      "end": 476
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoArrow",
            "optional": false,
            "typeAnnotation": null,
            "start": 484,
            "end": 496
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 503,
                    "end": 509
                  },
                  "start": 501,
                  "end": 509
                },
                "start": 500,
                "end": 509
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 514,
                  "end": 515
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 516,
                  "end": 524
                },
                "optional": false,
                "computed": false,
                "start": 514,
                "end": 524
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 514,
              "end": 526
            },
            "id": null,
            "generator": false,
            "start": 499,
            "end": 526
          },
          "definite": false,
          "start": 484,
          "end": 526
        }
      ],
      "declare": false,
      "start": 478,
      "end": 527
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoArrow",
            "optional": false,
            "typeAnnotation": null,
            "start": 528,
            "end": 540
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 541,
            "end": 545
          },
          "optional": false,
          "computed": false,
          "start": 528,
          "end": 545
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 548,
          "end": 549
        },
        "start": 528,
        "end": 549
      },
      "directive": null,
      "start": 528,
      "end": 549
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoArrow",
            "optional": false,
            "typeAnnotation": null,
            "start": 550,
            "end": 562
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 563,
            "end": 564
          },
          "optional": false,
          "computed": false,
          "start": 550,
          "end": 564
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 579,
                  "end": 585
                },
                "start": 577,
                "end": 585
              },
              "start": 576,
              "end": 585
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 600,
                    "end": 601
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 604,
                    "end": 605
                  },
                  "start": 600,
                  "end": 605
                },
                "start": 593,
                "end": 606
              }
            ],
            "start": 587,
            "end": 609
          },
          "expression": false,
          "start": 567,
          "end": 609
        },
        "start": 550,
        "end": 609
      },
      "directive": null,
      "start": 550,
      "end": 609
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoNested",
        "optional": false,
        "typeAnnotation": null,
        "start": 620,
        "end": 633
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 637,
              "end": 643
            },
            "start": 635,
            "end": 643
          },
          "start": 634,
          "end": 643
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 657,
                  "end": 663
                },
                "init": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 679,
                          "end": 685
                        },
                        "start": 677,
                        "end": 685
                      },
                      "start": 676,
                      "end": 685
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 704,
                            "end": 705
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 708,
                            "end": 709
                          },
                          "start": 704,
                          "end": 709
                        },
                        "start": 697,
                        "end": 710
                      }
                    ],
                    "start": 687,
                    "end": 716
                  },
                  "expression": false,
                  "start": 666,
                  "end": 716
                },
                "definite": false,
                "start": 657,
                "end": 716
              }
            ],
            "declare": false,
            "start": 651,
            "end": 717
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 722,
                  "end": 728
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "total",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 734
                },
                "optional": false,
                "computed": false,
                "start": 722,
                "end": 734
              },
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 737,
                  "end": 738
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1000000,
                  "raw": "1_000_000",
                  "start": 741,
                  "end": 750
                },
                "start": 737,
                "end": 750
              },
              "start": 722,
              "end": 750
            },
            "directive": null,
            "start": 722,
            "end": 751
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 763,
              "end": 769
            },
            "start": 756,
            "end": 770
          }
        ],
        "start": 645,
        "end": 772
      },
      "expression": false,
      "start": 611,
      "end": 772
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoNested",
            "optional": false,
            "typeAnnotation": null,
            "start": 773,
            "end": 786
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "also",
            "optional": false,
            "typeAnnotation": null,
            "start": 787,
            "end": 791
          },
          "optional": false,
          "computed": false,
          "start": 773,
          "end": 791
        },
        "right": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 795,
            "end": 796
          },
          "prefix": true,
          "start": 794,
          "end": 796
        },
        "start": 773,
        "end": 796
      },
      "directive": null,
      "start": 773,
      "end": 797
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null,
        "start": 808,
        "end": 820
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 824,
              "end": 830
            },
            "start": 822,
            "end": 830
          },
          "start": 821,
          "end": 830
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 845,
                "end": 846
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 849,
                "end": 852
              },
              "start": 845,
              "end": 852
            },
            "start": 838,
            "end": 853
          }
        ],
        "start": 832,
        "end": 855
      },
      "expression": false,
      "start": 799,
      "end": 855
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoMerge",
            "optional": false,
            "typeAnnotation": null,
            "start": 856,
            "end": 868
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 869,
            "end": 871
          },
          "optional": false,
          "computed": false,
          "start": 856,
          "end": 871
        },
        "right": {
          "type": "Literal",
          "value": 111,
          "raw": "111",
          "start": 874,
          "end": 877
        },
        "start": 856,
        "end": 877
      },
      "directive": null,
      "start": 856,
      "end": 877
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null,
        "start": 888,
        "end": 900
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 918,
                    "end": 920
                  },
                  "init": {
                    "type": "Literal",
                    "value": 222,
                    "raw": "222",
                    "start": 923,
                    "end": 926
                  },
                  "definite": false,
                  "start": 918,
                  "end": 926
                }
              ],
              "declare": false,
              "start": 914,
              "end": 927
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 907,
            "end": 927
          }
        ],
        "start": 901,
        "end": 929
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 878,
      "end": 929
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoMerge",
        "optional": false,
        "typeAnnotation": null,
        "start": 940,
        "end": 952
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 970,
                    "end": 972
                  },
                  "init": {
                    "type": "Literal",
                    "value": 333,
                    "raw": "333",
                    "start": 975,
                    "end": 978
                  },
                  "definite": false,
                  "start": 970,
                  "end": 978
                }
              ],
              "declare": false,
              "start": 966,
              "end": 979
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 959,
            "end": 979
          }
        ],
        "start": 953,
        "end": 981
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 930,
      "end": 981
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 986,
            "end": 987
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoMerge",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 990,
                    "end": 1002
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1003,
                    "end": 1005
                  },
                  "optional": false,
                  "computed": false,
                  "start": 990,
                  "end": 1005
                },
                "operator": "+",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoMerge",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1008,
                    "end": 1020
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1021,
                    "end": 1023
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1008,
                  "end": 1023
                },
                "start": 990,
                "end": 1023
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoMerge",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1026,
                  "end": 1038
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1039,
                  "end": 1041
                },
                "optional": false,
                "computed": false,
                "start": 1026,
                "end": 1041
              },
              "start": 990,
              "end": 1041
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExpandoMerge",
                "optional": false,
                "typeAnnotation": null,
                "start": 1044,
                "end": 1056
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1057,
                  "end": 1058
                }
              ],
              "optional": false,
              "start": 1044,
              "end": 1059
            },
            "start": 990,
            "end": 1059
          },
          "definite": false,
          "start": 986,
          "end": 1059
        }
      ],
      "declare": false,
      "start": 982,
      "end": 1060
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ns",
        "optional": false,
        "typeAnnotation": null,
        "start": 1072,
        "end": 1074
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ExpandoNamespace",
              "optional": false,
              "typeAnnotation": null,
              "start": 1090,
              "end": 1106
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1110,
                "end": 1114
              },
              "start": 1108,
              "end": 1114
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1115,
              "end": 1117
            },
            "expression": false,
            "start": 1081,
            "end": 1117
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoNamespace",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1122,
                  "end": 1138
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1139,
                  "end": 1141
                },
                "optional": false,
                "computed": false,
                "start": 1122,
                "end": 1141
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1144,
                "end": 1146
              },
              "start": 1122,
              "end": 1146
            },
            "directive": null,
            "start": 1122,
            "end": 1147
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1168,
                "end": 1171
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ExpandoNamespace",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1191,
                      "end": 1207
                    },
                    "start": 1184,
                    "end": 1208
                  }
                ],
                "start": 1174,
                "end": 1214
              },
              "expression": false,
              "start": 1159,
              "end": 1214
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1152,
            "end": 1214
          }
        ],
        "start": 1075,
        "end": 1216
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1062,
      "end": 1216
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoExpr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1272,
            "end": 1284
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1300,
                    "end": 1306
                  },
                  "start": 1298,
                  "end": 1306
                },
                "start": 1297,
                "end": 1306
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1321,
                        "end": 1322
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1323,
                        "end": 1331
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1321,
                      "end": 1331
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1321,
                    "end": 1333
                  },
                  "start": 1314,
                  "end": 1334
                }
              ],
              "start": 1308,
              "end": 1336
            },
            "expression": false,
            "start": 1287,
            "end": 1336
          },
          "definite": false,
          "start": 1272,
          "end": 1336
        }
      ],
      "declare": false,
      "start": 1268,
      "end": 1336
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoExpr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1337,
            "end": 1349
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 1350,
            "end": 1354
          },
          "optional": false,
          "computed": false,
          "start": 1337,
          "end": 1354
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1357,
          "end": 1358
        },
        "start": 1337,
        "end": 1358
      },
      "directive": null,
      "start": 1337,
      "end": 1358
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoExpr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1359,
            "end": 1371
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 1372,
            "end": 1373
          },
          "optional": false,
          "computed": false,
          "start": 1359,
          "end": 1373
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1388,
                  "end": 1394
                },
                "start": 1386,
                "end": 1394
              },
              "start": 1385,
              "end": 1394
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1409,
                    "end": 1410
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1413,
                    "end": 1414
                  },
                  "start": 1409,
                  "end": 1414
                },
                "start": 1402,
                "end": 1415
              }
            ],
            "start": 1396,
            "end": 1417
          },
          "expression": false,
          "start": 1376,
          "end": 1417
        },
        "start": 1359,
        "end": 1417
      },
      "directive": null,
      "start": 1359,
      "end": 1417
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1422,
            "end": 1423
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoExpr2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1426,
                  "end": 1438
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1439,
                  "end": 1443
                },
                "optional": false,
                "computed": false,
                "start": 1426,
                "end": 1443
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoExpr2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1446,
                    "end": 1458
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1459,
                    "end": 1460
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1446,
                  "end": 1460
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 1461,
                    "end": 1463
                  }
                ],
                "optional": false,
                "start": 1446,
                "end": 1464
              },
              "start": 1426,
              "end": 1464
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoExpr2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1467,
                  "end": 1479
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 101,
                    "raw": "101",
                    "start": 1480,
                    "end": 1483
                  }
                ],
                "optional": false,
                "start": 1467,
                "end": 1484
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 1485,
                "end": 1491
              },
              "optional": false,
              "computed": false,
              "start": 1467,
              "end": 1491
            },
            "start": 1426,
            "end": 1491
          },
          "definite": false,
          "start": 1422,
          "end": 1491
        }
      ],
      "declare": false,
      "start": 1418,
      "end": 1491
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandoClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1564,
        "end": 1576
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1583,
              "end": 1584
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1001,
              "raw": "1001",
              "start": 1587,
              "end": 1591
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1583,
            "end": 1592
          }
        ],
        "start": 1577,
        "end": 1594
      },
      "abstract": false,
      "declare": false,
      "start": 1558,
      "end": 1594
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 1595,
            "end": 1607
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 1608,
            "end": 1612
          },
          "optional": false,
          "computed": false,
          "start": 1595,
          "end": 1612
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 1615,
          "end": 1616
        },
        "start": 1595,
        "end": 1616
      },
      "directive": null,
      "start": 1595,
      "end": 1616
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 1617,
            "end": 1629
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 1630,
            "end": 1631
          },
          "optional": false,
          "computed": false,
          "start": 1617,
          "end": 1631
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1646,
                  "end": 1652
                },
                "start": 1644,
                "end": 1652
              },
              "start": 1643,
              "end": 1652
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1667,
                    "end": 1668
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1671,
                    "end": 1672
                  },
                  "start": 1667,
                  "end": 1672
                },
                "start": 1660,
                "end": 1673
              }
            ],
            "start": 1654,
            "end": 1675
          },
          "expression": false,
          "start": 1634,
          "end": 1675
        },
        "start": 1617,
        "end": 1675
      },
      "directive": null,
      "start": 1617,
      "end": 1675
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1680,
            "end": 1681
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1684,
                  "end": 1696
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1697,
                  "end": 1701
                },
                "optional": false,
                "computed": false,
                "start": 1684,
                "end": 1701
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1704,
                    "end": 1716
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1717,
                    "end": 1718
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1704,
                  "end": 1718
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 1719,
                    "end": 1721
                  }
                ],
                "optional": false,
                "start": 1704,
                "end": 1722
              },
              "start": 1684,
              "end": 1722
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1729,
                  "end": 1741
                },
                "typeArguments": null,
                "arguments": [],
                "start": 1725,
                "end": 1743
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 1744,
                "end": 1745
              },
              "optional": false,
              "computed": false,
              "start": 1725,
              "end": 1745
            },
            "start": 1684,
            "end": 1745
          },
          "definite": false,
          "start": 1680,
          "end": 1745
        }
      ],
      "declare": false,
      "start": 1676,
      "end": 1745
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoExpr3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1808,
            "end": 1820
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1835,
                    "end": 1836
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "value": 10001,
                    "raw": "10001",
                    "start": 1839,
                    "end": 1844
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 1835,
                  "end": 1845
                }
              ],
              "start": 1829,
              "end": 1847
            },
            "abstract": false,
            "declare": false,
            "start": 1823,
            "end": 1847
          },
          "definite": false,
          "start": 1808,
          "end": 1847
        }
      ],
      "declare": false,
      "start": 1804,
      "end": 1847
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoExpr3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1848,
            "end": 1860
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 1861,
            "end": 1865
          },
          "optional": false,
          "computed": false,
          "start": 1848,
          "end": 1865
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 1868,
          "end": 1869
        },
        "start": 1848,
        "end": 1869
      },
      "directive": null,
      "start": 1848,
      "end": 1869
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExpandoExpr3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1870,
            "end": 1882
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 1883,
            "end": 1884
          },
          "optional": false,
          "computed": false,
          "start": 1870,
          "end": 1884
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1899,
                  "end": 1905
                },
                "start": 1897,
                "end": 1905
              },
              "start": 1896,
              "end": 1905
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1920,
                    "end": 1921
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1924,
                    "end": 1925
                  },
                  "start": 1920,
                  "end": 1925
                },
                "start": 1913,
                "end": 1926
              }
            ],
            "start": 1907,
            "end": 1928
          },
          "expression": false,
          "start": 1887,
          "end": 1928
        },
        "start": 1870,
        "end": 1928
      },
      "directive": null,
      "start": 1870,
      "end": 1928
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1933,
            "end": 1934
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoExpr3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1937,
                  "end": 1949
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1950,
                  "end": 1954
                },
                "optional": false,
                "computed": false,
                "start": 1937,
                "end": 1954
              },
              "operator": "+",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExpandoExpr3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1957,
                    "end": 1969
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1970,
                    "end": 1971
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1957,
                  "end": 1971
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 13,
                    "raw": "13",
                    "start": 1972,
                    "end": 1974
                  }
                ],
                "optional": false,
                "start": 1957,
                "end": 1975
              },
              "start": 1937,
              "end": 1975
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExpandoExpr3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1982,
                  "end": 1994
                },
                "typeArguments": null,
                "arguments": [],
                "start": 1978,
                "end": 1996
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 1997,
                "end": 1998
              },
              "optional": false,
              "computed": false,
              "start": 1978,
              "end": 1998
            },
            "start": 1937,
            "end": 1998
          },
          "definite": false,
          "start": 1933,
          "end": 1998
        }
      ],
      "declare": false,
      "start": 1929,
      "end": 1998
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1999
}
```

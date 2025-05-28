__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 537,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "C",
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
        "start": 13,
        "end": 35,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 19,
            "end": 33,
            "expression": {
              "type": "AssignmentExpression",
              "start": 19,
              "end": 32,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 19,
                "end": 25,
                "object": {
                  "type": "ThisExpression",
                  "start": 19,
                  "end": 23
                },
                "property": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 28,
                "end": 32,
                "value": null,
                "raw": "null"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 86,
      "expression": {
        "type": "AssignmentExpression",
        "start": 36,
        "end": 86,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 36,
          "end": 49,
          "object": {
            "type": "MemberExpression",
            "start": 36,
            "end": 47,
            "object": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 38,
              "end": 47,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
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
          "start": 52,
          "end": 86,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 63,
            "end": 86,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 69,
                "end": 84,
                "expression": {
                  "type": "CallExpression",
                  "start": 69,
                  "end": 83,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 69,
                    "end": 81,
                    "object": {
                      "type": "ThisExpression",
                      "start": 69,
                      "end": 73
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 81,
                      "decorators": [],
                      "name": "nothing",
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
      "type": "ClassDeclaration",
      "start": 87,
      "end": 251,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 94,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 251,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 101,
            "end": 211,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 112,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 211,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 211,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 125,
                    "end": 152,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 125,
                      "end": 151,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 125,
                        "end": 131,
                        "object": {
                          "type": "ThisExpression",
                          "start": 125,
                          "end": 129
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 131,
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 134,
                        "end": 151,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 134,
                          "end": 145,
                          "object": {
                            "type": "MemberExpression",
                            "start": 134,
                            "end": 140,
                            "object": {
                              "type": "ThisExpression",
                              "start": 134,
                              "end": 138
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 139,
                              "end": 140,
                              "decorators": [],
                              "name": "m",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 141,
                            "end": 145,
                            "decorators": [],
                            "name": "bind",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ThisExpression",
                            "start": 146,
                            "end": 150
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 161,
                    "end": 205,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 161,
                      "end": 204,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 161,
                        "end": 173,
                        "object": {
                          "type": "ThisExpression",
                          "start": 161,
                          "end": 165
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 166,
                          "end": 173,
                          "decorators": [],
                          "name": "mistake",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 176,
                        "end": 204,
                        "value": "frankly, complete nonsense",
                        "raw": "'frankly, complete nonsense'"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 216,
            "end": 227,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 217,
              "end": 227,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 220,
                "end": 227,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 232,
            "end": 249,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 239,
              "decorators": [],
              "name": "mistake",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 239,
              "end": 249,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 242,
                "end": 249,
                "body": []
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
      "type": "VariableDeclaration",
      "start": 252,
      "end": 268,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 267,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 257,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 260,
            "end": 267,
            "callee": {
              "type": "Identifier",
              "start": 264,
              "end": 265,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
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
      "start": 269,
      "end": 297,
      "expression": {
        "type": "AssignmentExpression",
        "start": 269,
        "end": 296,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 269,
          "end": 288,
          "object": {
            "type": "MemberExpression",
            "start": 269,
            "end": 280,
            "object": {
              "type": "Identifier",
              "start": 269,
              "end": 270,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 271,
              "end": 280,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 281,
            "end": 288,
            "decorators": [],
            "name": "mistake",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 291,
          "end": 296,
          "value": false,
          "raw": "false"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 298,
      "end": 304,
      "expression": {
        "type": "CallExpression",
        "start": 298,
        "end": 303,
        "callee": {
          "type": "MemberExpression",
          "start": 298,
          "end": 301,
          "object": {
            "type": "Identifier",
            "start": 298,
            "end": 299,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 300,
            "end": 301,
            "decorators": [],
            "name": "m",
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 305,
      "end": 315,
      "expression": {
        "type": "MemberExpression",
        "start": 305,
        "end": 314,
        "object": {
          "type": "Identifier",
          "start": 305,
          "end": 306,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 307,
          "end": 314,
          "decorators": [],
          "name": "mistake",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 316,
      "end": 472,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 322,
        "end": 323,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 324,
        "end": 472,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 330,
            "end": 347,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 330,
              "end": 337,
              "decorators": [],
              "name": "mistake",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 337,
              "end": 347,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 340,
                "end": 347,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 352,
            "end": 363,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 353,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 353,
              "end": 363,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 356,
                "end": 363,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 368,
            "end": 470,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 368,
              "end": 379,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 379,
              "end": 470,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 382,
                "end": 470,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 392,
                    "end": 419,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 392,
                      "end": 418,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 392,
                        "end": 398,
                        "object": {
                          "type": "ThisExpression",
                          "start": 392,
                          "end": 396
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 397,
                          "end": 398,
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 401,
                        "end": 418,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 401,
                          "end": 412,
                          "object": {
                            "type": "MemberExpression",
                            "start": 401,
                            "end": 407,
                            "object": {
                              "type": "ThisExpression",
                              "start": 401,
                              "end": 405
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 406,
                              "end": 407,
                              "decorators": [],
                              "name": "m",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 408,
                            "end": 412,
                            "decorators": [],
                            "name": "bind",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ThisExpression",
                            "start": 413,
                            "end": 417
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 428,
                    "end": 464,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 428,
                      "end": 463,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 428,
                        "end": 440,
                        "object": {
                          "type": "ThisExpression",
                          "start": 428,
                          "end": 432
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 433,
                          "end": 440,
                          "decorators": [],
                          "name": "mistake",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 443,
                        "end": 463,
                        "value": "even more nonsense",
                        "raw": "'even more nonsense'"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "type": "ExpressionStatement",
      "start": 473,
      "end": 500,
      "expression": {
        "type": "AssignmentExpression",
        "start": 473,
        "end": 499,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 473,
          "end": 492,
          "object": {
            "type": "MemberExpression",
            "start": 473,
            "end": 484,
            "object": {
              "type": "Identifier",
              "start": 473,
              "end": 474,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 475,
              "end": 484,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 485,
            "end": 492,
            "decorators": [],
            "name": "mistake",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 495,
          "end": 499,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 501,
      "end": 517,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 516,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 506,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 509,
            "end": 516,
            "callee": {
              "type": "Identifier",
              "start": 513,
              "end": 514,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
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
      "start": 518,
      "end": 524,
      "expression": {
        "type": "CallExpression",
        "start": 518,
        "end": 523,
        "callee": {
          "type": "MemberExpression",
          "start": 518,
          "end": 521,
          "object": {
            "type": "Identifier",
            "start": 518,
            "end": 519,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 520,
            "end": 521,
            "decorators": [],
            "name": "m",
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 525,
      "end": 537,
      "expression": {
        "type": "CallExpression",
        "start": 525,
        "end": 536,
        "callee": {
          "type": "MemberExpression",
          "start": 525,
          "end": 534,
          "object": {
            "type": "Identifier",
            "start": 525,
            "end": 526,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 527,
            "end": 534,
            "decorators": [],
            "name": "mistake",
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

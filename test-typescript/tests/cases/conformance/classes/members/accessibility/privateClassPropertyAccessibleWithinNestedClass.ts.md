__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 916,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 916,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 916,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 46,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 85,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 85,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 85,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 69,
                    "end": 83,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 76,
                      "end": 82,
                      "object": {
                        "type": "ThisExpression",
                        "start": 76,
                        "end": 80
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 127,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 127,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 107,
                "end": 127,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 109,
                    "end": 125,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 109,
                      "end": 124,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 109,
                        "end": 115,
                        "object": {
                          "type": "ThisExpression",
                          "start": 109,
                          "end": 113
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 115,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 118,
                        "end": 124,
                        "object": {
                          "type": "ThisExpression",
                          "start": 118,
                          "end": 122
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 124,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 132,
            "end": 166,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 143,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 143,
              "end": 166,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 166,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 148,
                    "end": 164,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 155,
                      "end": 163,
                      "object": {
                        "type": "ThisExpression",
                        "start": 155,
                        "end": 159
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 163,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 172,
            "end": 197,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 196,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 190,
                "end": 196
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 202,
            "end": 243,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 222,
              "end": 243,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 225,
                "end": 243,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 227,
                    "end": 241,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 234,
                      "end": 240,
                      "object": {
                        "type": "ThisExpression",
                        "start": 234,
                        "end": 238
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 239,
                        "end": 240,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 248,
            "end": 292,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 268,
              "end": 292,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 269,
                  "end": 270,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 272,
                "end": 292,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 274,
                    "end": 290,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 274,
                      "end": 289,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 274,
                        "end": 280,
                        "object": {
                          "type": "ThisExpression",
                          "start": 274,
                          "end": 278
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 279,
                          "end": 280,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 283,
                        "end": 289,
                        "object": {
                          "type": "ThisExpression",
                          "start": 283,
                          "end": 287
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 288,
                          "end": 289,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 297,
            "end": 338,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 312,
              "end": 315,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 315,
              "end": 338,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 318,
                "end": 338,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 320,
                    "end": 336,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 327,
                      "end": 335,
                      "object": {
                        "type": "ThisExpression",
                        "start": 327,
                        "end": 331
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 332,
                        "end": 335,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 343,
            "end": 379,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 358,
              "end": 361,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 361,
              "end": 379,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 364,
                "end": 379,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 366,
                    "end": 377,
                    "expression": {
                      "type": "CallExpression",
                      "start": 366,
                      "end": 376,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 366,
                        "end": 374,
                        "object": {
                          "type": "ThisExpression",
                          "start": 366,
                          "end": 370
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 371,
                          "end": 374,
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 385,
            "end": 914,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 393,
              "end": 396,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 396,
              "end": 914,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 399,
                "end": 914,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 409,
                    "end": 908,
                    "id": {
                      "type": "Identifier",
                      "start": 415,
                      "end": 417,
                      "name": "C2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 418,
                      "end": 908,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 432,
                          "end": 898,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 440,
                            "end": 443,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 443,
                            "end": 898,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "BlockStatement",
                              "start": 446,
                              "end": 898,
                              "body": [
                                {
                                  "type": "VariableDeclaration",
                                  "start": 464,
                                  "end": 473,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 468,
                                      "end": 472,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 468,
                                        "end": 472,
                                        "name": "x",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 469,
                                          "end": 472,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 471,
                                            "end": 472,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 471,
                                              "end": 472,
                                              "name": "C",
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
                                  "kind": "let",
                                  "declare": false
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 490,
                                  "end": 505,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 494,
                                      "end": 504,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 494,
                                        "end": 496,
                                        "name": "x1",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 499,
                                        "end": 504,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 499,
                                          "end": 500,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 501,
                                          "end": 504,
                                          "name": "foo",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "var",
                                  "declare": false
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 522,
                                  "end": 537,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 526,
                                      "end": 536,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 526,
                                        "end": 528,
                                        "name": "x2",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 531,
                                        "end": 536,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 531,
                                          "end": 532,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 533,
                                          "end": 536,
                                          "name": "bar",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "var",
                                  "declare": false
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 554,
                                  "end": 567,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 558,
                                      "end": 566,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 558,
                                        "end": 560,
                                        "name": "x3",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 563,
                                        "end": 566,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 563,
                                          "end": 564,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 565,
                                          "end": 566,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "var",
                                  "declare": false
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 584,
                                  "end": 597,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 588,
                                      "end": 596,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 588,
                                        "end": 590,
                                        "name": "x4",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 593,
                                        "end": 596,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 593,
                                          "end": 594,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 595,
                                          "end": 596,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "var",
                                  "declare": false
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 615,
                                  "end": 629,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 619,
                                      "end": 628,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 619,
                                        "end": 622,
                                        "name": "sx1",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 625,
                                        "end": 628,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 625,
                                          "end": 626,
                                          "name": "C",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 627,
                                          "end": 628,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "var",
                                  "declare": false
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 646,
                                  "end": 660,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 650,
                                      "end": 659,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 650,
                                        "end": 653,
                                        "name": "sx2",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 656,
                                        "end": 659,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 656,
                                          "end": 657,
                                          "name": "C",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 658,
                                          "end": 659,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
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
                                  "end": 693,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 681,
                                      "end": 692,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 681,
                                        "end": 684,
                                        "name": "sx3",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 687,
                                        "end": 692,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 687,
                                          "end": 688,
                                          "name": "C",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 689,
                                          "end": 692,
                                          "name": "bar",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "var",
                                  "declare": false
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 710,
                                  "end": 726,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 714,
                                      "end": 725,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 714,
                                        "end": 717,
                                        "name": "sx4",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 720,
                                        "end": 725,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 720,
                                          "end": 721,
                                          "name": "C",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 722,
                                          "end": 725,
                                          "name": "foo",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "var",
                                  "declare": false
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 744,
                                  "end": 760,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 748,
                                      "end": 759,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 748,
                                        "end": 749,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "NewExpression",
                                        "start": 752,
                                        "end": 759,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 756,
                                          "end": 757,
                                          "name": "C",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "arguments": [],
                                        "typeArguments": null
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "let",
                                  "declare": false
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 777,
                                  "end": 792,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 781,
                                      "end": 791,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 781,
                                        "end": 783,
                                        "name": "y1",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 786,
                                        "end": 791,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 786,
                                          "end": 787,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 788,
                                          "end": 791,
                                          "name": "foo",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "var",
                                  "declare": false
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 809,
                                  "end": 824,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 813,
                                      "end": 823,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 813,
                                        "end": 815,
                                        "name": "y2",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 818,
                                        "end": 823,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 818,
                                          "end": 819,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 820,
                                          "end": 823,
                                          "name": "bar",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "var",
                                  "declare": false
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 841,
                                  "end": 854,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 845,
                                      "end": 853,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 845,
                                        "end": 847,
                                        "name": "y3",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 850,
                                        "end": 853,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 850,
                                          "end": 851,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 852,
                                          "end": 853,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "var",
                                  "declare": false
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 871,
                                  "end": 884,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 875,
                                      "end": 883,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 875,
                                        "end": 877,
                                        "name": "y4",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 880,
                                        "end": 883,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 880,
                                          "end": 881,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 882,
                                          "end": 883,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "kind": "var",
                                  "declare": false
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
                          "accessibility": "private"
                        }
                      ]
                    },
                    "decorators": [],
                    "typeParameters": null,
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
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
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

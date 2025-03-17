__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 773,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 377,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 377,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 227,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 36,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 227,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 37,
                  "end": 49,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 49,
                    "name": "k",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 46,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 48,
                        "end": 49,
                        "typeName": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 49,
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
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 51,
                  "end": 77,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "start": 59,
                    "end": 77,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 60,
                        "end": 61,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 63,
                        "end": 64,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 68,
                      "end": 77,
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "start": 70,
                        "end": 77,
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "start": 71,
                            "end": 72,
                            "typeName": {
                              "type": "Identifier",
                              "start": 71,
                              "end": 72,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 73,
                            "end": 74,
                            "typeName": {
                              "type": "Identifier",
                              "start": 73,
                              "end": 74,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 75,
                            "end": 76,
                            "typeName": {
                              "type": "Identifier",
                              "start": 75,
                              "end": 76,
                              "name": "V",
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
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 227,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 89,
                    "end": 221,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 93,
                      "end": 179,
                      "left": {
                        "type": "LogicalExpression",
                        "start": 94,
                        "end": 128,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 94,
                          "end": 109,
                          "left": {
                            "type": "Identifier",
                            "start": 94,
                            "end": 95,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 100,
                            "end": 109,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "start": 113,
                          "end": 128,
                          "left": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 114,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 119,
                            "end": 128,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      },
                      "operator": "||",
                      "right": {
                        "type": "LogicalExpression",
                        "start": 134,
                        "end": 178,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 134,
                          "end": 154,
                          "left": {
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
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 145,
                            "end": 154,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "start": 158,
                          "end": 178,
                          "left": {
                            "type": "MemberExpression",
                            "start": 158,
                            "end": 164,
                            "object": {
                              "type": "ThisExpression",
                              "start": 158,
                              "end": 162
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 163,
                              "end": 164,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 169,
                            "end": 178,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 181,
                      "end": 221,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 195,
                          "end": 211,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 195,
                            "end": 210,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 195,
                              "end": 201,
                              "object": {
                                "type": "ThisExpression",
                                "start": 195,
                                "end": 199
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 200,
                                "end": 201,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 204,
                              "end": 210,
                              "left": {
                                "type": "Identifier",
                                "start": 204,
                                "end": 205,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "||",
                              "right": {
                                "type": "Identifier",
                                "start": 209,
                                "end": 210,
                                "name": "k",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
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
            "start": 233,
            "end": 276,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 240,
              "end": 244,
              "name": "getA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 244,
              "end": 276,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 247,
                "end": 276,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 257,
                    "end": 270,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 264,
                      "end": 270,
                      "object": {
                        "type": "ThisExpression",
                        "start": 264,
                        "end": 268
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 270,
                        "name": "a",
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 282,
            "end": 325,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 289,
              "end": 293,
              "name": "getB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 293,
              "end": 325,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 296,
                "end": 325,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 306,
                    "end": 319,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 313,
                      "end": 319,
                      "object": {
                        "type": "ThisExpression",
                        "start": 313,
                        "end": 317
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 319,
                        "name": "b",
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 331,
            "end": 375,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 338,
              "end": 342,
              "name": "getC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 342,
              "end": 375,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 345,
                "end": 375,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 355,
                    "end": 369,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 362,
                      "end": 368,
                      "object": {
                        "type": "ThisExpression",
                        "start": 362,
                        "end": 366
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 367,
                        "end": 368,
                        "name": "c",
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
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "V",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 379,
      "end": 420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 383,
          "end": 419,
          "id": {
            "type": "Identifier",
            "start": 383,
            "end": 384,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 387,
            "end": 419,
            "callee": {
              "type": "Identifier",
              "start": 391,
              "end": 393,
              "name": "C1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 394,
                "end": 403,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrayExpression",
                "start": 405,
                "end": 418,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 406,
                    "end": 407,
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "type": "Literal",
                    "start": 409,
                    "end": 413,
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Literal",
                    "start": 415,
                    "end": 417,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            ],
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
      "start": 421,
      "end": 474,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 425,
          "end": 473,
          "id": {
            "type": "ArrayPattern",
            "start": 425,
            "end": 440,
            "elements": [
              {
                "type": "Identifier",
                "start": 426,
                "end": 429,
                "name": "x_a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 431,
                "end": 434,
                "name": "x_b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 436,
                "end": 439,
                "name": "x_c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 443,
            "end": 473,
            "elements": [
              {
                "type": "CallExpression",
                "start": 444,
                "end": 452,
                "callee": {
                  "type": "MemberExpression",
                  "start": 444,
                  "end": 450,
                  "object": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 445,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 446,
                    "end": 450,
                    "name": "getA",
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
              {
                "type": "CallExpression",
                "start": 454,
                "end": 462,
                "callee": {
                  "type": "MemberExpression",
                  "start": 454,
                  "end": 460,
                  "object": {
                    "type": "Identifier",
                    "start": 454,
                    "end": 455,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 456,
                    "end": 460,
                    "name": "getB",
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
              {
                "type": "CallExpression",
                "start": 464,
                "end": 472,
                "callee": {
                  "type": "MemberExpression",
                  "start": 464,
                  "end": 470,
                  "object": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 465,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 466,
                    "end": 470,
                    "name": "getC",
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
      "start": 476,
      "end": 512,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 480,
          "end": 511,
          "id": {
            "type": "Identifier",
            "start": 480,
            "end": 481,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 484,
            "end": 511,
            "callee": {
              "type": "Identifier",
              "start": 488,
              "end": 490,
              "name": "C1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 491,
                "end": 493,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "ArrayExpression",
                "start": 495,
                "end": 510,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 496,
                    "end": 497,
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "type": "Literal",
                    "start": 499,
                    "end": 503,
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Literal",
                    "start": 505,
                    "end": 509,
                    "value": true,
                    "raw": "true"
                  }
                ]
              }
            ],
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
      "start": 513,
      "end": 566,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 517,
          "end": 565,
          "id": {
            "type": "ArrayPattern",
            "start": 517,
            "end": 532,
            "elements": [
              {
                "type": "Identifier",
                "start": 518,
                "end": 521,
                "name": "y_a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 523,
                "end": 526,
                "name": "y_b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 528,
                "end": 531,
                "name": "y_c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 535,
            "end": 565,
            "elements": [
              {
                "type": "CallExpression",
                "start": 536,
                "end": 544,
                "callee": {
                  "type": "MemberExpression",
                  "start": 536,
                  "end": 542,
                  "object": {
                    "type": "Identifier",
                    "start": 536,
                    "end": 537,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 538,
                    "end": 542,
                    "name": "getA",
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
              {
                "type": "CallExpression",
                "start": 546,
                "end": 554,
                "callee": {
                  "type": "MemberExpression",
                  "start": 546,
                  "end": 552,
                  "object": {
                    "type": "Identifier",
                    "start": 546,
                    "end": 547,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 548,
                    "end": 552,
                    "name": "getB",
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
              {
                "type": "CallExpression",
                "start": 556,
                "end": 564,
                "callee": {
                  "type": "MemberExpression",
                  "start": 556,
                  "end": 562,
                  "object": {
                    "type": "Identifier",
                    "start": 556,
                    "end": 557,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 558,
                    "end": 562,
                    "name": "getC",
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
      "start": 568,
      "end": 608,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 572,
          "end": 607,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 573,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 576,
            "end": 607,
            "callee": {
              "type": "Identifier",
              "start": 580,
              "end": 582,
              "name": "C1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 583,
                "end": 585,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "ArrayExpression",
                "start": 587,
                "end": 606,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 588,
                    "end": 597,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Literal",
                    "start": 599,
                    "end": 601,
                    "value": "",
                    "raw": "\"\""
                  },
                  {
                    "type": "Literal",
                    "start": 603,
                    "end": 605,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            ],
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
      "start": 609,
      "end": 662,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 613,
          "end": 661,
          "id": {
            "type": "ArrayPattern",
            "start": 613,
            "end": 628,
            "elements": [
              {
                "type": "Identifier",
                "start": 614,
                "end": 617,
                "name": "z_a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 619,
                "end": 622,
                "name": "z_b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 624,
                "end": 627,
                "name": "z_c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 631,
            "end": 661,
            "elements": [
              {
                "type": "CallExpression",
                "start": 632,
                "end": 640,
                "callee": {
                  "type": "MemberExpression",
                  "start": 632,
                  "end": 638,
                  "object": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 633,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 634,
                    "end": 638,
                    "name": "getA",
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
              {
                "type": "CallExpression",
                "start": 642,
                "end": 650,
                "callee": {
                  "type": "MemberExpression",
                  "start": 642,
                  "end": 648,
                  "object": {
                    "type": "Identifier",
                    "start": 642,
                    "end": 643,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 644,
                    "end": 648,
                    "name": "getB",
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
              {
                "type": "CallExpression",
                "start": 652,
                "end": 660,
                "callee": {
                  "type": "MemberExpression",
                  "start": 652,
                  "end": 658,
                  "object": {
                    "type": "Identifier",
                    "start": 652,
                    "end": 653,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 654,
                    "end": 658,
                    "name": "getC",
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
      "start": 664,
      "end": 718,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 668,
          "end": 717,
          "id": {
            "type": "Identifier",
            "start": 668,
            "end": 669,
            "name": "w",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 672,
            "end": 717,
            "callee": {
              "type": "Identifier",
              "start": 676,
              "end": 678,
              "name": "C1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 679,
                "end": 681,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "ArrayExpression",
                "start": 683,
                "end": 716,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 684,
                    "end": 693,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 695,
                    "end": 704,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 706,
                    "end": 715,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ]
              }
            ],
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
      "start": 719,
      "end": 772,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 723,
          "end": 771,
          "id": {
            "type": "ArrayPattern",
            "start": 723,
            "end": 738,
            "elements": [
              {
                "type": "Identifier",
                "start": 724,
                "end": 727,
                "name": "z_a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 729,
                "end": 732,
                "name": "z_b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 734,
                "end": 737,
                "name": "z_c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 741,
            "end": 771,
            "elements": [
              {
                "type": "CallExpression",
                "start": 742,
                "end": 750,
                "callee": {
                  "type": "MemberExpression",
                  "start": 742,
                  "end": 748,
                  "object": {
                    "type": "Identifier",
                    "start": 742,
                    "end": 743,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 744,
                    "end": 748,
                    "name": "getA",
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
              {
                "type": "CallExpression",
                "start": 752,
                "end": 760,
                "callee": {
                  "type": "MemberExpression",
                  "start": 752,
                  "end": 758,
                  "object": {
                    "type": "Identifier",
                    "start": 752,
                    "end": 753,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 754,
                    "end": 758,
                    "name": "getB",
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
              {
                "type": "CallExpression",
                "start": 762,
                "end": 770,
                "callee": {
                  "type": "MemberExpression",
                  "start": 762,
                  "end": 768,
                  "object": {
                    "type": "Identifier",
                    "start": 762,
                    "end": 763,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 764,
                    "end": 768,
                    "name": "getC",
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
            ]
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

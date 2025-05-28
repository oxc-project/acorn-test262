__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 771,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 376,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 376,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 24,
            "end": 226,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 35,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 226,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 36,
                  "end": 48,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 48,
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 45,
                      "end": 48,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 47,
                        "end": 48,
                        "typeName": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 48,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 50,
                  "end": 76,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "ArrayPattern",
                    "start": 58,
                    "end": 76,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 59,
                        "end": 60,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 62,
                        "end": 63,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 65,
                        "end": 66,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 67,
                      "end": 76,
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "start": 69,
                        "end": 76,
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "start": 70,
                            "end": 71,
                            "typeName": {
                              "type": "Identifier",
                              "start": 70,
                              "end": 71,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 72,
                            "end": 73,
                            "typeName": {
                              "type": "Identifier",
                              "start": 72,
                              "end": 73,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 74,
                            "end": 75,
                            "typeName": {
                              "type": "Identifier",
                              "start": 74,
                              "end": 75,
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null
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
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 78,
                "end": 226,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 88,
                    "end": 220,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 92,
                      "end": 178,
                      "left": {
                        "type": "LogicalExpression",
                        "start": 93,
                        "end": 127,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 93,
                          "end": 108,
                          "left": {
                            "type": "Identifier",
                            "start": 93,
                            "end": 94,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 99,
                            "end": 108,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "start": 112,
                          "end": 127,
                          "left": {
                            "type": "Identifier",
                            "start": 112,
                            "end": 113,
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 118,
                            "end": 127,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "operator": "||",
                      "right": {
                        "type": "LogicalExpression",
                        "start": 133,
                        "end": 177,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 133,
                          "end": 153,
                          "left": {
                            "type": "MemberExpression",
                            "start": 133,
                            "end": 139,
                            "object": {
                              "type": "ThisExpression",
                              "start": 133,
                              "end": 137
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 138,
                              "end": 139,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 153,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "BinaryExpression",
                          "start": 157,
                          "end": 177,
                          "left": {
                            "type": "MemberExpression",
                            "start": 157,
                            "end": 163,
                            "object": {
                              "type": "ThisExpression",
                              "start": 157,
                              "end": 161
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 162,
                              "end": 163,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "operator": "===",
                          "right": {
                            "type": "Identifier",
                            "start": 168,
                            "end": 177,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 180,
                      "end": 220,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 194,
                          "end": 210,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 194,
                            "end": 209,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 194,
                              "end": 200,
                              "object": {
                                "type": "ThisExpression",
                                "start": 194,
                                "end": 198
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 199,
                                "end": 200,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 203,
                              "end": 209,
                              "left": {
                                "type": "Identifier",
                                "start": 203,
                                "end": 204,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "||",
                              "right": {
                                "type": "Identifier",
                                "start": 208,
                                "end": 209,
                                "decorators": [],
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null
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
            "start": 232,
            "end": 275,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 243,
              "decorators": [],
              "name": "getA",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 243,
              "end": 275,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 246,
                "end": 275,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 256,
                    "end": 269,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 263,
                      "end": 269,
                      "object": {
                        "type": "ThisExpression",
                        "start": 263,
                        "end": 267
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 268,
                        "end": 269,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 281,
            "end": 324,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 292,
              "decorators": [],
              "name": "getB",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 292,
              "end": 324,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 295,
                "end": 324,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 305,
                    "end": 318,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 312,
                      "end": 318,
                      "object": {
                        "type": "ThisExpression",
                        "start": 312,
                        "end": 316
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 317,
                        "end": 318,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 330,
            "end": 374,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 337,
              "end": 341,
              "decorators": [],
              "name": "getC",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 341,
              "end": 374,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 344,
                "end": 374,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 354,
                    "end": 368,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 361,
                      "end": 367,
                      "object": {
                        "type": "ThisExpression",
                        "start": 361,
                        "end": 365
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 366,
                        "end": 367,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 378,
      "end": 419,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 418,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 383,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 386,
            "end": 418,
            "callee": {
              "type": "Identifier",
              "start": 390,
              "end": 392,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 393,
                "end": 402,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayExpression",
                "start": 404,
                "end": 417,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 405,
                    "end": 406,
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "type": "Literal",
                    "start": 408,
                    "end": 412,
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Literal",
                    "start": 414,
                    "end": 416,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 420,
      "end": 473,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 472,
          "id": {
            "type": "ArrayPattern",
            "start": 424,
            "end": 439,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 425,
                "end": 428,
                "decorators": [],
                "name": "x_a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 430,
                "end": 433,
                "decorators": [],
                "name": "x_b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 435,
                "end": 438,
                "decorators": [],
                "name": "x_c",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 442,
            "end": 472,
            "elements": [
              {
                "type": "CallExpression",
                "start": 443,
                "end": 451,
                "callee": {
                  "type": "MemberExpression",
                  "start": 443,
                  "end": 449,
                  "object": {
                    "type": "Identifier",
                    "start": 443,
                    "end": 444,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 445,
                    "end": 449,
                    "decorators": [],
                    "name": "getA",
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
              {
                "type": "CallExpression",
                "start": 453,
                "end": 461,
                "callee": {
                  "type": "MemberExpression",
                  "start": 453,
                  "end": 459,
                  "object": {
                    "type": "Identifier",
                    "start": 453,
                    "end": 454,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 459,
                    "decorators": [],
                    "name": "getB",
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
              {
                "type": "CallExpression",
                "start": 463,
                "end": 471,
                "callee": {
                  "type": "MemberExpression",
                  "start": 463,
                  "end": 469,
                  "object": {
                    "type": "Identifier",
                    "start": 463,
                    "end": 464,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 465,
                    "end": 469,
                    "decorators": [],
                    "name": "getC",
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
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 475,
      "end": 511,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 479,
          "end": 510,
          "id": {
            "type": "Identifier",
            "start": 479,
            "end": 480,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 483,
            "end": 510,
            "callee": {
              "type": "Identifier",
              "start": 487,
              "end": 489,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 490,
                "end": 492,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "ArrayExpression",
                "start": 494,
                "end": 509,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 495,
                    "end": 496,
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "type": "Literal",
                    "start": 498,
                    "end": 502,
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Literal",
                    "start": 504,
                    "end": 508,
                    "value": true,
                    "raw": "true"
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 512,
      "end": 565,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 516,
          "end": 564,
          "id": {
            "type": "ArrayPattern",
            "start": 516,
            "end": 531,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 517,
                "end": 520,
                "decorators": [],
                "name": "y_a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 522,
                "end": 525,
                "decorators": [],
                "name": "y_b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 527,
                "end": 530,
                "decorators": [],
                "name": "y_c",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 534,
            "end": 564,
            "elements": [
              {
                "type": "CallExpression",
                "start": 535,
                "end": 543,
                "callee": {
                  "type": "MemberExpression",
                  "start": 535,
                  "end": 541,
                  "object": {
                    "type": "Identifier",
                    "start": 535,
                    "end": 536,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 541,
                    "decorators": [],
                    "name": "getA",
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
              {
                "type": "CallExpression",
                "start": 545,
                "end": 553,
                "callee": {
                  "type": "MemberExpression",
                  "start": 545,
                  "end": 551,
                  "object": {
                    "type": "Identifier",
                    "start": 545,
                    "end": 546,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 547,
                    "end": 551,
                    "decorators": [],
                    "name": "getB",
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
              {
                "type": "CallExpression",
                "start": 555,
                "end": 563,
                "callee": {
                  "type": "MemberExpression",
                  "start": 555,
                  "end": 561,
                  "object": {
                    "type": "Identifier",
                    "start": 555,
                    "end": 556,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 557,
                    "end": 561,
                    "decorators": [],
                    "name": "getC",
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
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 567,
      "end": 607,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 571,
          "end": 606,
          "id": {
            "type": "Identifier",
            "start": 571,
            "end": 572,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 575,
            "end": 606,
            "callee": {
              "type": "Identifier",
              "start": 579,
              "end": 581,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 582,
                "end": 584,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "ArrayExpression",
                "start": 586,
                "end": 605,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 587,
                    "end": 596,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Literal",
                    "start": 598,
                    "end": 600,
                    "value": "",
                    "raw": "\"\""
                  },
                  {
                    "type": "Literal",
                    "start": 602,
                    "end": 604,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 608,
      "end": 661,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 612,
          "end": 660,
          "id": {
            "type": "ArrayPattern",
            "start": 612,
            "end": 627,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 613,
                "end": 616,
                "decorators": [],
                "name": "z_a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 618,
                "end": 621,
                "decorators": [],
                "name": "z_b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 623,
                "end": 626,
                "decorators": [],
                "name": "z_c",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 630,
            "end": 660,
            "elements": [
              {
                "type": "CallExpression",
                "start": 631,
                "end": 639,
                "callee": {
                  "type": "MemberExpression",
                  "start": 631,
                  "end": 637,
                  "object": {
                    "type": "Identifier",
                    "start": 631,
                    "end": 632,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 633,
                    "end": 637,
                    "decorators": [],
                    "name": "getA",
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
              {
                "type": "CallExpression",
                "start": 641,
                "end": 649,
                "callee": {
                  "type": "MemberExpression",
                  "start": 641,
                  "end": 647,
                  "object": {
                    "type": "Identifier",
                    "start": 641,
                    "end": 642,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 643,
                    "end": 647,
                    "decorators": [],
                    "name": "getB",
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
              {
                "type": "CallExpression",
                "start": 651,
                "end": 659,
                "callee": {
                  "type": "MemberExpression",
                  "start": 651,
                  "end": 657,
                  "object": {
                    "type": "Identifier",
                    "start": 651,
                    "end": 652,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 653,
                    "end": 657,
                    "decorators": [],
                    "name": "getC",
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
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 663,
      "end": 717,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 667,
          "end": 716,
          "id": {
            "type": "Identifier",
            "start": 667,
            "end": 668,
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 671,
            "end": 716,
            "callee": {
              "type": "Identifier",
              "start": 675,
              "end": 677,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 678,
                "end": 680,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "ArrayExpression",
                "start": 682,
                "end": 715,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 683,
                    "end": 692,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 694,
                    "end": 703,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 705,
                    "end": 714,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 718,
      "end": 771,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 770,
          "id": {
            "type": "ArrayPattern",
            "start": 722,
            "end": 737,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 723,
                "end": 726,
                "decorators": [],
                "name": "z_a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 728,
                "end": 731,
                "decorators": [],
                "name": "z_b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 733,
                "end": 736,
                "decorators": [],
                "name": "z_c",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 740,
            "end": 770,
            "elements": [
              {
                "type": "CallExpression",
                "start": 741,
                "end": 749,
                "callee": {
                  "type": "MemberExpression",
                  "start": 741,
                  "end": 747,
                  "object": {
                    "type": "Identifier",
                    "start": 741,
                    "end": 742,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 743,
                    "end": 747,
                    "decorators": [],
                    "name": "getA",
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
              {
                "type": "CallExpression",
                "start": 751,
                "end": 759,
                "callee": {
                  "type": "MemberExpression",
                  "start": 751,
                  "end": 757,
                  "object": {
                    "type": "Identifier",
                    "start": 751,
                    "end": 752,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 753,
                    "end": 757,
                    "decorators": [],
                    "name": "getB",
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
              {
                "type": "CallExpression",
                "start": 761,
                "end": 769,
                "callee": {
                  "type": "MemberExpression",
                  "start": 761,
                  "end": 767,
                  "object": {
                    "type": "Identifier",
                    "start": 761,
                    "end": 762,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 763,
                    "end": 767,
                    "decorators": [],
                    "name": "getC",
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
            ]
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

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 720,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 231,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
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
        "start": 14,
        "end": 231,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 20,
            "end": 146,
            "id": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "f",
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
              "start": 33,
              "end": 146,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 43,
                  "end": 122,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 50,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 50,
                    "end": 56,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 51,
                        "end": 52,
                        "name": {
                          "type": "Identifier",
                          "start": 51,
                          "end": 52,
                          "decorators": [],
                          "name": "X",
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
                        "start": 54,
                        "end": 55,
                        "name": {
                          "type": "Identifier",
                          "start": 54,
                          "end": 55,
                          "decorators": [],
                          "name": "Y",
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
                    "start": 57,
                    "end": 122,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 71,
                        "end": 112,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 82,
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 82,
                          "end": 112,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "TSParameterProperty",
                              "start": 83,
                              "end": 94,
                              "accessibility": "public",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "start": 90,
                                "end": 94,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 91,
                                  "end": 94,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 93,
                                    "end": 94,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 93,
                                      "end": 94,
                                      "decorators": [],
                                      "name": "X",
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
                              "start": 96,
                              "end": 107,
                              "accessibility": "public",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "start": 103,
                                "end": 107,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 104,
                                  "end": 107,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 106,
                                    "end": 107,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 106,
                                      "end": 107,
                                      "decorators": [],
                                      "name": "Y",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
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
                            "start": 109,
                            "end": 112,
                            "body": []
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
                  "type": "ReturnStatement",
                  "start": 131,
                  "end": 140,
                  "argument": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 139,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 151,
            "end": 163,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 155,
                "end": 162,
                "id": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 159,
                  "end": 162,
                  "callee": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 160,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 168,
            "end": 195,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 172,
                "end": 194,
                "id": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 176,
                  "end": 194,
                  "callee": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 181,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 182,
                      "end": 184,
                      "value": 10,
                      "raw": "10"
                    },
                    {
                      "type": "Literal",
                      "start": 186,
                      "end": 193,
                      "value": "hello",
                      "raw": "\"hello\""
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
            "start": 200,
            "end": 212,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 204,
                "end": 211,
                "id": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 205,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 208,
                  "end": 211,
                  "object": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 209,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 217,
            "end": 229,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 221,
                "end": 228,
                "id": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 222,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 225,
                  "end": 228,
                  "object": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 226,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 228,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 233,
      "end": 479,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 244,
        "decorators": [],
        "name": "f2",
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
        "start": 247,
        "end": 479,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 253,
            "end": 396,
            "id": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 263,
              "end": 266,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 264,
                  "end": 265,
                  "name": {
                    "type": "Identifier",
                    "start": 264,
                    "end": 265,
                    "decorators": [],
                    "name": "X",
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
            "params": [
              {
                "type": "Identifier",
                "start": 267,
                "end": 271,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 268,
                  "end": 271,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 270,
                    "end": 271,
                    "typeName": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 271,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 273,
              "end": 396,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 283,
                  "end": 372,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 289,
                    "end": 290,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 290,
                    "end": 293,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 291,
                        "end": 292,
                        "name": {
                          "type": "Identifier",
                          "start": 291,
                          "end": 292,
                          "decorators": [],
                          "name": "Y",
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
                    "start": 294,
                    "end": 372,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 308,
                        "end": 321,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 315,
                          "end": 316,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Identifier",
                          "start": 319,
                          "end": 320,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "public"
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 334,
                        "end": 362,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 334,
                          "end": 345,
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 345,
                          "end": 362,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "TSParameterProperty",
                              "start": 346,
                              "end": 357,
                              "accessibility": "public",
                              "decorators": [],
                              "override": false,
                              "parameter": {
                                "type": "Identifier",
                                "start": 353,
                                "end": 357,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 354,
                                  "end": 357,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 356,
                                    "end": 357,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 356,
                                      "end": 357,
                                      "decorators": [],
                                      "name": "Y",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
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
                            "start": 359,
                            "end": 362,
                            "body": []
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
                  "type": "ReturnStatement",
                  "start": 381,
                  "end": 390,
                  "argument": {
                    "type": "Identifier",
                    "start": 388,
                    "end": 389,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 401,
            "end": 415,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 405,
                "end": 414,
                "id": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 406,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 409,
                  "end": 414,
                  "callee": {
                    "type": "Identifier",
                    "start": 409,
                    "end": 410,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 411,
                      "end": 413,
                      "value": 10,
                      "raw": "10"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 420,
            "end": 443,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 424,
                "end": 442,
                "id": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 425,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 428,
                  "end": 442,
                  "callee": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 433,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 434,
                      "end": 441,
                      "value": "hello",
                      "raw": "\"hello\""
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
            "start": 448,
            "end": 460,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 452,
                "end": 459,
                "id": {
                  "type": "Identifier",
                  "start": 452,
                  "end": 453,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 456,
                  "end": 459,
                  "object": {
                    "type": "Identifier",
                    "start": 456,
                    "end": 457,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 458,
                    "end": 459,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 465,
            "end": 477,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 469,
                "end": 476,
                "id": {
                  "type": "Identifier",
                  "start": 469,
                  "end": 470,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 473,
                  "end": 476,
                  "object": {
                    "type": "Identifier",
                    "start": 473,
                    "end": 474,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 475,
                    "end": 476,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 481,
      "end": 720,
      "id": {
        "type": "Identifier",
        "start": 490,
        "end": 492,
        "decorators": [],
        "name": "f3",
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
        "start": 495,
        "end": 720,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 501,
            "end": 635,
            "id": {
              "type": "Identifier",
              "start": 510,
              "end": 511,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 511,
              "end": 517,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 512,
                  "end": 513,
                  "name": {
                    "type": "Identifier",
                    "start": 512,
                    "end": 513,
                    "decorators": [],
                    "name": "X",
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
                  "start": 515,
                  "end": 516,
                  "name": {
                    "type": "Identifier",
                    "start": 515,
                    "end": 516,
                    "decorators": [],
                    "name": "Y",
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
            "params": [
              {
                "type": "Identifier",
                "start": 518,
                "end": 522,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 519,
                  "end": 522,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 521,
                    "end": 522,
                    "typeName": {
                      "type": "Identifier",
                      "start": 521,
                      "end": 522,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 524,
                "end": 528,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 525,
                  "end": 528,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 527,
                    "end": 528,
                    "typeName": {
                      "type": "Identifier",
                      "start": 527,
                      "end": 528,
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 530,
              "end": 635,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 540,
                  "end": 611,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 546,
                    "end": 547,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 548,
                    "end": 611,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 562,
                        "end": 575,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 569,
                          "end": 570,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Identifier",
                          "start": 573,
                          "end": 574,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "public"
                      },
                      {
                        "type": "PropertyDefinition",
                        "start": 588,
                        "end": 601,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 595,
                          "end": 596,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Identifier",
                          "start": 599,
                          "end": 600,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "public"
                      }
                    ]
                  },
                  "abstract": false,
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 620,
                  "end": 629,
                  "argument": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 628,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 640,
            "end": 663,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 644,
                "end": 662,
                "id": {
                  "type": "Identifier",
                  "start": 644,
                  "end": 645,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 648,
                  "end": 662,
                  "callee": {
                    "type": "Identifier",
                    "start": 648,
                    "end": 649,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 650,
                      "end": 652,
                      "value": 10,
                      "raw": "10"
                    },
                    {
                      "type": "Literal",
                      "start": 654,
                      "end": 661,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 668,
            "end": 684,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 672,
                "end": 683,
                "id": {
                  "type": "Identifier",
                  "start": 672,
                  "end": 673,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 676,
                  "end": 683,
                  "callee": {
                    "type": "Identifier",
                    "start": 680,
                    "end": 681,
                    "decorators": [],
                    "name": "C",
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
            "type": "VariableDeclaration",
            "start": 689,
            "end": 701,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 693,
                "end": 700,
                "id": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 694,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 697,
                  "end": 700,
                  "object": {
                    "type": "Identifier",
                    "start": 697,
                    "end": 698,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 699,
                    "end": 700,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 706,
            "end": 718,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 710,
                "end": 717,
                "id": {
                  "type": "Identifier",
                  "start": 710,
                  "end": 711,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 714,
                  "end": 717,
                  "object": {
                    "type": "Identifier",
                    "start": 714,
                    "end": 715,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 716,
                    "end": 717,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

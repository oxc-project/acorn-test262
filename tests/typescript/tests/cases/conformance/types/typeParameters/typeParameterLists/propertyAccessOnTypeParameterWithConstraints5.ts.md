__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 839,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 44,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 44,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 42,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 42,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 19,
                "end": 27,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 21,
                  "end": 27
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 42,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 30,
                    "end": 40,
                    "argument": {
                      "type": "Literal",
                      "start": 37,
                      "end": 39,
                      "value": "",
                      "raw": "''"
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
    },
    {
      "type": "ClassDeclaration",
      "start": 46,
      "end": 112,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 112,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 110,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 110,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 75,
                "end": 83,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 77,
                  "end": 83
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 110,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 94,
                    "end": 104,
                    "argument": {
                      "type": "Literal",
                      "start": 101,
                      "end": 103,
                      "value": "",
                      "raw": "''"
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
    },
    {
      "type": "ClassDeclaration",
      "start": 114,
      "end": 275,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 121,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 121,
        "end": 147,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 122,
            "end": 133,
            "name": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 133,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 135,
            "end": 146,
            "name": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 145,
              "end": 146,
              "typeName": {
                "type": "Identifier",
                "start": 145,
                "end": 146,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
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
        "start": 148,
        "end": 275,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 154,
            "end": 273,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 155,
              "end": 273,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 158,
                "end": 273,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 168,
                    "end": 177,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 172,
                        "end": 176,
                        "id": {
                          "type": "Identifier",
                          "start": 172,
                          "end": 176,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 173,
                            "end": 176,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 175,
                              "end": 176,
                              "typeName": {
                                "type": "Identifier",
                                "start": 175,
                                "end": 176,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 186,
                    "end": 205,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 190,
                        "end": 204,
                        "id": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 191,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 194,
                          "end": 204,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 194,
                            "end": 202,
                            "object": {
                              "type": "Identifier",
                              "start": 194,
                              "end": 195,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Literal",
                              "start": 196,
                              "end": 201,
                              "value": "foo",
                              "raw": "'foo'"
                            },
                            "optional": false,
                            "computed": true
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
                    "type": "ReturnStatement",
                    "start": 234,
                    "end": 267,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 241,
                      "end": 266,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 241,
                        "end": 252,
                        "left": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 242,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "CallExpression",
                          "start": 245,
                          "end": 252,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 245,
                            "end": 250,
                            "object": {
                              "type": "Identifier",
                              "start": 245,
                              "end": 246,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 247,
                              "end": 250,
                              "decorators": [],
                              "name": "foo",
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
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "start": 255,
                        "end": 266,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 255,
                          "end": 264,
                          "object": {
                            "type": "Identifier",
                            "start": 255,
                            "end": 256,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 257,
                            "end": 264,
                            "decorators": [],
                            "name": "notHere",
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
    },
    {
      "type": "VariableDeclaration",
      "start": 277,
      "end": 305,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 304,
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 282,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 285,
            "end": 304,
            "callee": {
              "type": "MemberExpression",
              "start": 285,
              "end": 302,
              "object": {
                "type": "NewExpression",
                "start": 286,
                "end": 299,
                "callee": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 291,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 291,
                  "end": 297,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 292,
                      "end": 293,
                      "typeName": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 293,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 295,
                      "end": 296,
                      "typeName": {
                        "type": "Identifier",
                        "start": 295,
                        "end": 296,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                },
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 301,
                "end": 302,
                "decorators": [],
                "name": "f",
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 307,
      "end": 360,
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 318,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 318,
        "end": 344,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 319,
            "end": 330,
            "name": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 329,
              "end": 330,
              "typeName": {
                "type": "Identifier",
                "start": 329,
                "end": 330,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 332,
            "end": 343,
            "name": {
              "type": "Identifier",
              "start": 332,
              "end": 333,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 342,
              "end": 343,
              "typeName": {
                "type": "Identifier",
                "start": 342,
                "end": 343,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 345,
        "end": 360,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 351,
            "end": 358,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 351,
              "end": 354,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 361,
      "end": 376,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 375,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 375,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 366,
              "end": 375,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 368,
                "end": 375,
                "typeName": {
                  "type": "Identifier",
                  "start": 368,
                  "end": 369,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 369,
                  "end": 375,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 370,
                      "end": 371,
                      "typeName": {
                        "type": "Identifier",
                        "start": 370,
                        "end": 371,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 373,
                      "end": 374,
                      "typeName": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 374,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 377,
      "end": 402,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 381,
          "end": 401,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 383,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 386,
            "end": 401,
            "callee": {
              "type": "MemberExpression",
              "start": 386,
              "end": 399,
              "object": {
                "type": "MemberExpression",
                "start": 386,
                "end": 391,
                "object": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 387,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 391,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 392,
                "end": 399,
                "decorators": [],
                "name": "notHere",
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 403,
      "end": 428,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 407,
          "end": 427,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 410,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 413,
            "end": 427,
            "callee": {
              "type": "MemberExpression",
              "start": 413,
              "end": 425,
              "object": {
                "type": "MemberExpression",
                "start": 413,
                "end": 418,
                "object": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 414,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 418,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Literal",
                "start": 419,
                "end": 424,
                "value": "foo",
                "raw": "'foo'"
              },
              "optional": false,
              "computed": true
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
      "start": 430,
      "end": 477,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 477,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 477,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 435,
              "end": 477,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 437,
                "end": 477,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 443,
                    "end": 475,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 443,
                      "end": 469,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 444,
                          "end": 455,
                          "name": {
                            "type": "Identifier",
                            "start": 444,
                            "end": 445,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 454,
                            "end": 455,
                            "typeName": {
                              "type": "Identifier",
                              "start": 454,
                              "end": 455,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 457,
                          "end": 468,
                          "name": {
                            "type": "Identifier",
                            "start": 457,
                            "end": 458,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 467,
                            "end": 468,
                            "typeName": {
                              "type": "Identifier",
                              "start": 467,
                              "end": 468,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 471,
                      "end": 474,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 473,
                        "end": 474,
                        "typeName": {
                          "type": "Identifier",
                          "start": 473,
                          "end": 474,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 492,
      "end": 523,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 522,
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 506,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 498,
              "end": 506,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 500,
                "end": 506
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 509,
            "end": 522,
            "callee": {
              "type": "MemberExpression",
              "start": 509,
              "end": 520,
              "object": {
                "type": "CallExpression",
                "start": 509,
                "end": 512,
                "callee": {
                  "type": "Identifier",
                  "start": 509,
                  "end": 510,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 513,
                "end": 520,
                "decorators": [],
                "name": "notHere",
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 524,
      "end": 555,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 528,
          "end": 554,
          "id": {
            "type": "Identifier",
            "start": 528,
            "end": 539,
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 531,
              "end": 539,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 533,
                "end": 539
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 542,
            "end": 554,
            "callee": {
              "type": "MemberExpression",
              "start": 542,
              "end": 552,
              "object": {
                "type": "CallExpression",
                "start": 542,
                "end": 545,
                "callee": {
                  "type": "Identifier",
                  "start": 542,
                  "end": 543,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 546,
                "end": 551,
                "value": "foo",
                "raw": "'foo'"
              },
              "optional": false,
              "computed": true
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
      "start": 557,
      "end": 751,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 561,
          "end": 751,
          "id": {
            "type": "Identifier",
            "start": 561,
            "end": 562,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 565,
            "end": 751,
            "properties": [
              {
                "type": "Property",
                "start": 571,
                "end": 702,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 574,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 576,
                  "end": 702,
                  "expression": false,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 576,
                    "end": 602,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 577,
                        "end": 588,
                        "name": {
                          "type": "Identifier",
                          "start": 577,
                          "end": 578,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 587,
                          "end": 588,
                          "typeName": {
                            "type": "Identifier",
                            "start": 587,
                            "end": 588,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 590,
                        "end": 601,
                        "name": {
                          "type": "Identifier",
                          "start": 590,
                          "end": 591,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 600,
                          "end": 601,
                          "typeName": {
                            "type": "Identifier",
                            "start": 600,
                            "end": 601,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
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
                      "start": 603,
                      "end": 607,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 604,
                        "end": 607,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 606,
                          "end": 607,
                          "typeName": {
                            "type": "Identifier",
                            "start": 606,
                            "end": 607,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 608,
                    "end": 611,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 610,
                      "end": 611,
                      "typeName": {
                        "type": "Identifier",
                        "start": 610,
                        "end": 611,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 615,
                    "end": 702,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 625,
                        "end": 644,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 629,
                            "end": 643,
                            "id": {
                              "type": "Identifier",
                              "start": 629,
                              "end": 630,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 633,
                              "end": 643,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 633,
                                "end": 641,
                                "object": {
                                  "type": "Identifier",
                                  "start": 633,
                                  "end": 634,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Literal",
                                  "start": 635,
                                  "end": 640,
                                  "value": "foo",
                                  "raw": "'foo'"
                                },
                                "optional": false,
                                "computed": true
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
                        "type": "ReturnStatement",
                        "start": 673,
                        "end": 696,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 680,
                          "end": 695,
                          "left": {
                            "type": "Identifier",
                            "start": 680,
                            "end": 681,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "start": 684,
                            "end": 695,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 684,
                              "end": 693,
                              "object": {
                                "type": "Identifier",
                                "start": 684,
                                "end": 685,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 686,
                                "end": 693,
                                "decorators": [],
                                "name": "notHere",
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
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 726,
                "end": 749,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 726,
                  "end": 729,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "CallExpression",
                  "start": 731,
                  "end": 749,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 731,
                    "end": 747,
                    "object": {
                      "type": "CallExpression",
                      "start": 731,
                      "end": 739,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 731,
                        "end": 736,
                        "object": {
                          "type": "Identifier",
                          "start": 731,
                          "end": 732,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 733,
                          "end": 736,
                          "decorators": [],
                          "name": "foo",
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
                          "start": 737,
                          "end": 738,
                          "value": 1,
                          "raw": "1"
                        }
                      ],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 747,
                      "decorators": [],
                      "name": "notHere",
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
                "method": false,
                "shorthand": false,
                "computed": false,
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
      "start": 753,
      "end": 777,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 757,
          "end": 776,
          "id": {
            "type": "Identifier",
            "start": 757,
            "end": 759,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 762,
            "end": 776,
            "callee": {
              "type": "MemberExpression",
              "start": 762,
              "end": 767,
              "object": {
                "type": "Identifier",
                "start": 762,
                "end": 763,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 764,
                "end": 767,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 768,
                "end": 775,
                "callee": {
                  "type": "Identifier",
                  "start": 772,
                  "end": 773,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            ],
            "optional": false
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

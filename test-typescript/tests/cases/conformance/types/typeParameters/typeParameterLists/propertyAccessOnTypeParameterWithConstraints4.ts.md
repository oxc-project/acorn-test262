__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 599,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 145,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 30,
            "end": 143,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 143,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 143,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 44,
                    "end": 53,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 48,
                        "end": 52,
                        "id": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 52,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 49,
                            "end": 52,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 51,
                              "end": 52,
                              "typeName": {
                                "type": "Identifier",
                                "start": 51,
                                "end": 52,
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
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 62,
                    "end": 85,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 66,
                        "end": 84,
                        "id": {
                          "type": "Identifier",
                          "start": 66,
                          "end": 67,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 70,
                          "end": 84,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 70,
                            "end": 82,
                            "object": {
                              "type": "Identifier",
                              "start": 70,
                              "end": 71,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Literal",
                              "start": 72,
                              "end": 81,
                              "value": "notHere",
                              "raw": "'notHere'"
                            },
                            "computed": true,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 114,
                    "end": 137,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 121,
                      "end": 136,
                      "left": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 122,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "start": 125,
                        "end": 136,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 125,
                          "end": 134,
                          "object": {
                            "type": "Identifier",
                            "start": 125,
                            "end": 126,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 134,
                            "name": "notHere",
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 22,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 18,
              "end": 22,
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 22,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 174,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 152,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 155,
            "end": 174,
            "callee": {
              "type": "MemberExpression",
              "start": 155,
              "end": 172,
              "object": {
                "type": "NewExpression",
                "start": 156,
                "end": 169,
                "callee": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 161,
                  "end": 167,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 162,
                      "end": 166,
                      "typeName": {
                        "type": "Identifier",
                        "start": 162,
                        "end": 166,
                        "name": "Date",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "property": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "name": "f",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 177,
      "end": 220,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 188,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 188,
        "end": 204,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 189,
            "end": 203,
            "name": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 199,
              "end": 203,
              "typeName": {
                "type": "Identifier",
                "start": 199,
                "end": 203,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 205,
        "end": 220,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 211,
            "end": 218,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 211,
              "end": 214,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 214,
              "end": 217,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 216,
                "end": 217,
                "typeName": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 217,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "start": 221,
      "end": 236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 235,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 235,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 226,
              "end": 235,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 228,
                "end": 235,
                "typeName": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 229,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 229,
                  "end": 235,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 230,
                      "end": 234,
                      "typeName": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 234,
                        "name": "Date",
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
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 261,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 243,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 246,
            "end": 261,
            "callee": {
              "type": "MemberExpression",
              "start": 246,
              "end": 259,
              "object": {
                "type": "MemberExpression",
                "start": 246,
                "end": 251,
                "object": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 247,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 251,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 252,
                "end": 259,
                "name": "notHere",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 291,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 270,
            "name": "r2b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 273,
            "end": 291,
            "callee": {
              "type": "MemberExpression",
              "start": 273,
              "end": 289,
              "object": {
                "type": "MemberExpression",
                "start": 273,
                "end": 278,
                "object": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 278,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 279,
                "end": 288,
                "value": "notHere",
                "raw": "'notHere'"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
            "optional": false,
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
      "start": 294,
      "end": 331,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 331,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 299,
              "end": 331,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 301,
                "end": 331,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 307,
                    "end": 329,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 307,
                      "end": 323,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 308,
                          "end": 322,
                          "name": {
                            "type": "Identifier",
                            "start": 308,
                            "end": 309,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 318,
                            "end": 322,
                            "typeName": {
                              "type": "Identifier",
                              "start": 318,
                              "end": 322,
                              "name": "Date",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                      "start": 325,
                      "end": 328,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 327,
                        "end": 328,
                        "typeName": {
                          "type": "Identifier",
                          "start": 327,
                          "end": 328,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 332,
      "end": 363,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 362,
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 346,
            "name": "r3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 338,
              "end": 346,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 340,
                "end": 346
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 349,
            "end": 362,
            "callee": {
              "type": "MemberExpression",
              "start": 349,
              "end": 360,
              "object": {
                "type": "CallExpression",
                "start": 349,
                "end": 352,
                "callee": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 350,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 353,
                "end": 360,
                "name": "notHere",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 364,
      "end": 399,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 368,
          "end": 398,
          "id": {
            "type": "Identifier",
            "start": 368,
            "end": 379,
            "name": "r3b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 371,
              "end": 379,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 373,
                "end": 379
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 382,
            "end": 398,
            "callee": {
              "type": "MemberExpression",
              "start": 382,
              "end": 396,
              "object": {
                "type": "CallExpression",
                "start": 382,
                "end": 385,
                "callee": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 383,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Literal",
                "start": 386,
                "end": 395,
                "value": "notHere",
                "raw": "'notHere'"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
            "optional": false,
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
      "start": 401,
      "end": 570,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 570,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 406,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 409,
            "end": 570,
            "properties": [
              {
                "type": "Property",
                "start": 415,
                "end": 540,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 418,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 420,
                  "end": 540,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 437,
                      "end": 441,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 438,
                        "end": 441,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 440,
                          "end": 441,
                          "typeName": {
                            "type": "Identifier",
                            "start": 440,
                            "end": 441,
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
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 449,
                    "end": 540,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 459,
                        "end": 482,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 463,
                            "end": 481,
                            "id": {
                              "type": "Identifier",
                              "start": 463,
                              "end": 464,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 467,
                              "end": 481,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 467,
                                "end": 479,
                                "object": {
                                  "type": "Identifier",
                                  "start": 467,
                                  "end": 468,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Literal",
                                  "start": 469,
                                  "end": 478,
                                  "value": "notHere",
                                  "raw": "'notHere'"
                                },
                                "computed": true,
                                "optional": false
                              },
                              "arguments": [],
                              "optional": false,
                              "typeArguments": null
                            },
                            "definite": false
                          }
                        ],
                        "kind": "var",
                        "declare": false
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 511,
                        "end": 534,
                        "argument": {
                          "type": "BinaryExpression",
                          "start": 518,
                          "end": 533,
                          "left": {
                            "type": "Identifier",
                            "start": 518,
                            "end": 519,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "start": 522,
                            "end": 533,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 522,
                              "end": 531,
                              "object": {
                                "type": "Identifier",
                                "start": 522,
                                "end": 523,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 524,
                                "end": 531,
                                "name": "notHere",
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
                        }
                      }
                    ]
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 420,
                    "end": 436,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 421,
                        "end": 435,
                        "name": {
                          "type": "Identifier",
                          "start": 421,
                          "end": 422,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 431,
                          "end": 435,
                          "typeName": {
                            "type": "Identifier",
                            "start": 431,
                            "end": 435,
                            "name": "Date",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 442,
                    "end": 445,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 444,
                      "end": 445,
                      "typeName": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 445,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 546,
                "end": 568,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 549,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "CallExpression",
                  "start": 551,
                  "end": 568,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 551,
                    "end": 566,
                    "object": {
                      "type": "CallExpression",
                      "start": 551,
                      "end": 558,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 551,
                        "end": 556,
                        "object": {
                          "type": "Identifier",
                          "start": 551,
                          "end": 552,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 556,
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
                    "property": {
                      "type": "Identifier",
                      "start": 559,
                      "end": 566,
                      "name": "notHere",
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
                "kind": "init",
                "optional": false
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
      "start": 572,
      "end": 599,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 576,
          "end": 598,
          "id": {
            "type": "Identifier",
            "start": 576,
            "end": 578,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 581,
            "end": 598,
            "callee": {
              "type": "MemberExpression",
              "start": 581,
              "end": 586,
              "object": {
                "type": "Identifier",
                "start": 581,
                "end": 582,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 583,
                "end": 586,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 587,
                "end": 597,
                "callee": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 595,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
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
